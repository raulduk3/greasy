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
    paypalOrderId: string;
}

const styles = {
    container: {
        padding: '2rem',
        backgroundColor: '#FFFFFF',
        color: '#666',
        textAlign: 'center' as 'center',
        maxWidth: '580x',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        margin: '1rem 0',
        fontSize: '2.5rem',
        color: 'rgb(34, 197, 94)',
    },
    headerSpan: {
        color: 'rgb(34, 197, 94)',
    },
    subheader: {
        margin: '0.5rem 0',
        fontWeight: 'normal' as 'normal',
        color: 'gray',
        fontSize: '1.2rem',
    },
    subheaderLink: {
        color: 'rgb(34, 197, 94)',
        textDecoration: 'none',
    },
    intro: {
        margin: '2rem 0',
        fontWeight: 'bolder' as 'bolder',
        fontSize: '2rem',
        color: 'rgb(34, 197, 94)',
    },
    message: {
        margin: '1rem 0 2rem 0',
        fontSize: '1rem',
        color: 'gray',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    flashcards: {
        width: '80%',
        margin: '2rem auto',
    },
    flashcard: {
        backgroundColor: '#475569',
        border: '1px solid #ddd',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        borderRadius: '8px',
        margin: '1rem 0',
        textAlign: 'left' as 'left',
    },
    flashcardHeading: {
        textTransform: 'capitalize' as 'capitalize',
        margin: '0.5rem 0',
        fontSize: '1.5rem',
        color: 'rgb(34, 197, 94)',
    },
    flashcardText: {
        margin: '0.5rem 0',
        fontSize: '1rem',
        color: 'white',
    },
    flashcardLink: {
        color: 'rgb(34, 197, 94)',
        textDecoration: 'none',
        fontWeight: 'bold' as 'bold',
    },
    tips: {
        marginTop: '2rem',
    },
    tipsText: {
        margin: '1rem 0',
        fontSize: '1rem',
        color: 'rgb(34, 197, 94)',
    },
    tipsList: {
        listStyleType: 'none' as 'none',
        padding: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'inline-block',
        textAlign: 'left' as 'left',
    },
    tipsItem: {
        margin: '0.5rem 0',
        color: 'gray',
    },
    footer: {
        marginTop: '2rem',
    },
    footerText: {
        margin: '0.5rem 0',
        fontSize: '1rem',
        color: 'gray',
    },
    footerLink: {
        color: 'rgb(34, 197, 94)',
        textDecoration: 'none',
    },
    closing: {
        margin: '2rem 0 1rem 0',
        color: 'rgb(34, 197, 94)',
        fontSize: '1.2rem',
    },
    team: {
        color: 'gray',
    },
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ flashcards, name, paypalOrderId }) => {
    const orderUrl = `https://greasyvocab.com/orders/${paypalOrderId}`;

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>GR<span style={styles.headerSpan}>Easy</span></h1>
            <h3 style={styles.subheader}>
                Here are your flashcards from <a href="https://greasyvocab.com" style={styles.subheaderLink}>GREasyvocab.com</a>
            </h3>
            <div>
                <p style={styles.intro}>HEY {name.toUpperCase()}!</p>
                <p style={styles.message}>
                    We are thrilled to provide you with personalized GRE flashcards to aid in your preparation 😀 <br /> <br />
                    Below, you'll find the flashcards crafted just for you. Review them carefully and keep practicing to enhance your vocabulary skills.
                </p>
                <p style={styles.message}>
                    We encourage you to <a href={orderUrl} style={styles.subheaderLink}>print your flashcards</a> for best results.
                </p>
            </div>
            <div style={styles.flashcards}>
                {flashcards.map((flashcard, index) => (
                    <div key={index} style={styles.flashcard}>
                        <h2 style={styles.flashcardHeading}>{flashcard.word}</h2>
                        <p style={styles.flashcardText}>{flashcard.partOfSpeech}</p>
                        <p style={styles.flashcardText}>{flashcard.def}</p>
                        <p style={styles.flashcardText}>{flashcard.sentence}</p>
                        <a href={`https://en.wiktionary.org/wiki/${flashcard.word.toLowerCase()}`} style={styles.flashcardLink}>Wiktionary</a>
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
                {paypalOrderId !== 'NOT_PAYPAL' && (
                    <p style={styles.footerText}>You can also view your flashcards <a href={orderUrl} style={styles.footerLink}>here</a>.</p>
                )}
                <p style={styles.footerText}>
                    We hope you find these resources helpful. For more tips and personalized GRE study materials, visit <a href="https://greasyvocab.com" style={styles.footerLink}>GREasyvocab.com</a>.
                </p>
                <p style={styles.footerText}>Best of luck with your studies!</p>
            </div>
            <p style={styles.closing}>Have a great day, {name}!</p>
            <p style={styles.team}> - The GREasy Team 🤙🏽</p>
        </div>
    );
};