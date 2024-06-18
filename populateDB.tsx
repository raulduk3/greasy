require('dotenv').config();
const tqdm = require('tqdm');
const fs = require('fs');
const axios = require('axios');
const escape = require('pg-escape');

/* async function fetchProperty(word) {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            messages: [{content: `
                Etymology,Pronunciation
                Latin abstinere,/əbˈsteɪn/
                For the word "${word.word}", as comma seperated values, provide a concise etymology and IPA pronunciation:
            `, role: 'system'}],
            stop: ';',
            max_tokens: 100,
            model: "gpt-4o",
        }, {
            headers: {
                'Authorization': 'Bearer sk-proj-vF9jXK58cqIO6weN7bH6T3BlbkFJVoLMKdqF7DFagyTnl1I4',
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error fetching data from OpenAI:', error);
        return '';
    }
}

async function generateSQL() {
    const sqlStatements = [];
    
    var file = fs.createWriteStream('createWords.sql');
    file.on('error', function(err) { /* error handling *//* });

    for (const word of tqdm(words)) {
        if (word.example == '') {
            continue;
        }
        const [ pronunciation, etymology ] =  (await fetchProperty(word)).split(',');
        let sqlStatement = escape(`INSERT INTO Words (word, definition, pronunciation, etymology, part_of_speech, example_sentence) VALUES (%L, %L, %L, %L, %L, %L);`, word.word, word.definition, pronunciation, etymology, word.part_of_speech, word.example).trim();
        sqlStatements.push(sqlStatement);
        file.write(sqlStatement + "\n");
    }

    file.end();
} */

async function words() {
    const words =  await axios.post('https://api.openai.com/v1/chat/completions', {
        messages: [{content: `Please generate a list of 50 recent and relevant GRE words. Each word should be on a new line and the list should conclude with a semicolon. Do not number the words.`.trim(), role: 'system'}],
        stop: ';',
        max_tokens: 500,
        model: "gpt-4o",
    }, {
        headers: {
            'Authorization': 'Bearer sk-proj-vF9jXK58cqIO6weN7bH6T3BlbkFJVoLMKdqF7DFagyTnl1I4',
            'Content-Type': 'application/json'
        }
    });

    return words.data.choices[0].message.content.trim().split('\n');
}

async function define(words) {
    const trimmed = words.map(word => word.trim());
    let wordsWithData = [];

    for(const word of tqdm(trimmed, {
        desc: 'Defining words',
        unit: 'word'
    })) {

        setTimeout(async () => {

            const wordData = (await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`)).data[0];

            if(wordData.meanings === undefined) {
                console.log(`No definition found for ${word}`);  
            }
            else
            {
                for (meaning of wordData.meanings) {
                    for (defintion of meaning.definitions) {
                        wordsWithData.push({
                            word: word,
                            origin: wordData.origin || '',
                            definition: defintion.definition || '',
                            part_of_speech: meaning.partOfSpeech || '',
                            example: defintion.example || '',
                            phonetic: wordData.phonetic || '',
                        });
                    }
                }
            }   
        }, 1500);
    }

    return wordsWithData;
}

async function createStatements(wordsWithData) {
    const sqlStatements = [];

    var file = fs.createWriteStream('createWords.sql');
    file.on('error', function(err) { /* error handling */ });

    for (const word of tqdm(wordsWithData, {
        desc: 'Creating SQL statements',
        unit: 'word'
    })) {
        let sqlStatement = escape(`INSERT INTO Words (word, definition, pronunciation, etymology, part_of_speech, example_sentence) VALUES (%L, %L, %L, %L, %L, %L);`, word.word, word.definition, word.phonetic, word.origin, word.part_of_speech, word.example).trim();
        sqlStatements.push(sqlStatement);
        file.write(sqlStatement + "\n");
    }

    file.end();
}

words().then(define).then(createStatements).catch(console.error);