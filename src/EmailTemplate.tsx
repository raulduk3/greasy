import React from 'react';

interface Flashcard {
    word: string;
    partOfSpeech: string;
    def: string;
    sentence: string;
}

interface EmailTemplateProps {
    flashcards: Flashcard[];
    name: string;
}

const styles = {
    container: {
        padding: '1rem',
        backgroundColor: '#3B413C',
        color: '#FFF',
        textAlign: 'center' as 'center',
        width: '100%',
        fontFamily: 'Helvetica, sans-serif',
    },
    header: {
        margin: '0.5rem 0',
        fontSize: '4rem',
        color: 'white',
    },
    headerSpan: {
        color: '#7DDF64',
    },
    subheader: {
        margin: '0.1em',
        fontWeight: 'normal' as 'normal',
        color: 'white',
    },
    subheaderLink: {
        color: '#7DDF64',
        textDecoration: 'none',
    },
    intro: {
        margin: '1rem 0',
        fontWeight: 'bolder' as 'bolder',
        padding: '0',
        fontSize: '2.2rem',
        color: 'white',
        textAlign: 'center' as 'center',
    },
    message: {
        margin: '1rem 0 2rem 0',
        fontSize: '1.2rem',
        color: 'white',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center' as 'center',
    },
    flashcards: {
        width: '60%',
        margin: '2rem auto',
        textAlign: 'center' as 'center',
    },
    flashcard: {
        backgroundColor: '#FFF',
        border: '1px solid #ddd',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        borderRadius: '8px',
        margin: '1rem 0',
    },
    flashcardHeading: {
        textTransform: 'capitalize' as 'capitalize',
        margin: '0.25rem 0 0.5rem 0',
        fontSize: '1.5rem',
        color: '#666',
    },
    flashcardText: {
        margin: '0.5rem auto',
        fontSize: '1rem',
        color: '#666',
        maxWidth: '80%',
    },
    flashcardLink: {
        color: '#7DDF64',
        textDecoration: 'none',
        fontWeight: 'bold' as 'bold',
        display: 'block',
        marginTop: '1rem',
    },
    tips: {
        marginTop: '1rem',
        textAlign: 'center' as 'center',
    },
    tipsText: {
        margin: '1rem 0 0.25rem 0',
        fontSize: '1rem',
        color: 'white',
    },
    tipsList: {
        listStyleType: 'none' as 'none',
        padding: '0',
        textAlign: 'left' as 'left',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'inline-block',
    },
    tipsItem: {
        margin: '0.5rem 0',
        color: 'white',
    },
    footer: {
        marginTop: '1.5rem',
        textAlign: 'center' as 'center',
    },
    footerText: {
        margin: '0.5rem 0',
        fontSize: '1rem',
        color: 'white',
    },
    footerLink: {
        color: '#7DDF64',
        textDecoration: 'none',
    },
    closing: {
        margin: '1rem 0',
        padding: '0',
        color: 'white',
    },
    team: {
        color: 'white',
    },
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ flashcards, name }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>GR<span style={styles.headerSpan}>Easy</span></h1>
            <h3 style={styles.subheader}>Here are your flashcards from <a href="https://greasyvocab.com" style={styles.subheaderLink}>GREasyvocab.com</a></h3>
            <div>
                <p style={styles.intro}>HEY {name.toUpperCase()}!</p>
                <p style={styles.message}>We are thrilled to provide you with personalized GRE flashcards to aid in your preparation 😀 <br /> <br /> Below, you'll find the flashcards crafted just for you. Review them carefully and keep practicing to enhance your vocabulary skills.</p>
            </div>
            <div style={styles.flashcards}>
                {flashcards.map((flashcard, index) => (
                    <div key={index} style={styles.flashcard}>
                        <h2 style={styles.flashcardHeading}>{flashcard.word}</h2>
                        <p style={styles.flashcardText}>{flashcard.partOfSpeech}</p>
                        <p style={styles.flashcardText}>{flashcard.def}</p>
                        <p style={styles.flashcardText}>{flashcard.sentence}</p>
                        <a href={`https://en.wiktionary.org/wiki/${flashcard.word}`} style={styles.flashcardLink}>Wiktionary</a>
                    </div>
                ))}
            </div>
            <div style={styles.footer}>
                <div style={styles.tips}>
                    <p style={styles.tipsText}>Tips for Effective Studying:</p>
                    <ul style={styles.tipsList}>
                        <li style={styles.tipsItem}> - Review flashcards daily to reinforce your memory.</li>
                        <li style={styles.tipsItem}> - Use the flashcards in sentences of your own to understand the context.</li>
                        <li style={styles.tipsItem}> - Group similar words together to make associations.</li>
                        <li style={styles.tipsItem}> - Take regular breaks to avoid burnout and keep your mind fresh.</li>
                    </ul>
                </div>
                <p style={styles.footerText}>We hope you find these resources helpful. For more tips and personalized GRE study materials, visit <a href="https://greasyvocab.com" style={styles.footerLink}>GREasyvocab.com</a>.</p>
                <p style={styles.footerText}>Best of luck with your studies!</p>
            </div>
            <p style={styles.closing}>Have a great day, {name}!</p>
            <p style={styles.team}> - The GREasy Team 🤙🏽</p>
        </div>
    );
}