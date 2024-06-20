interface EmailTemplateProps {
    flashcards: any;
    name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    flashcards,
    name
}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: ' 0 0 0.5rem 0',
        }}>
            <h1 style={{alignSelf:'start', margin: '0.2em'}}>GR<span style={{color:'#7DDF64'}}>Easy</span></h1>
            <h3 style={{
                alignSelf: 'start',
                margin: '0.1em',
                fontWeight: 'normal',
            }}>Here are your flashcardsfrom <a href="greasyvocab.com">GREasyvocab.com</a></h3>
            <div style={{ width: '45%', margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center', fontSize: '1rem',}}>
                <div>
                    {
                        flashcards.map((flashcard: any, index: number) => (
                            <div key={index} style={{ margin: '1rem 0', backgroundColor: '#FFF', border: '1px solid black', color: 'black', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                <h2 style={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>{flashcard.word}</h2>
                                <p style={{ padding: '0 0 0.2rem 0', textAlign: 'center' }}>{flashcard.partOfSpeech}</p>
                                <p style={{ padding: '0 0 0.5rem 0', textAlign: 'center' }}>{flashcard.def}</p>
                                <p style={{textAlign: 'center'}}>{flashcard.sentence}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <p style={{alignSelf:'start', margin: '0.8rem 0', padding: '0'}}>Have a good day, {name}!</p>
            <p style={{alignSelf:'start'}}>  - Greasy Team</p>
        </div>
    );
}