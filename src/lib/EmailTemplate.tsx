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
            padding: '1rem',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#3B413C',
            color: '#FFF'
        }}>
            <h1 style={{
                alignSelf: 'start',
                margin: '0.5rem 0',
                color: 'white',
                fontSize: '4rem'
            }}>GR<span style={{ color: '#7DDF64' }}>Easy</span></h1>
            <h3 style={{
                alignSelf: 'start',
                margin: '0.1em',
                fontWeight: 'normal',
                color: 'white'
            }}>Here are your flashcards from <a href="https://greasyvocab.com" style={{ color: '#7DDF64', textDecoration: 'none' }}>GREasyvocab.com</a></h3>

            <div style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <p style={{
                    margin: '1.25rem 0',
                    fontSize: '2rem',
                    color: 'white'
                }}>Dear {name}</p>
                <p style={{
                    margin: '0.5rem 0',
                    fontSize: '1.5rem',
                    color: 'white',
                    width: '35%',
                    textAlign: 'left'
                }}>We are thrilled to provide you with personalized GRE flashcards to aid in your preparation. Below, you'll find the flashcards crafted just for you. Review them carefully and keep practicing to enhance your vocabulary skills.</p>
            </div>

            <div style={{
                width: '60%',
                margin: '1rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                fontSize: '1rem'
            }}>
                {flashcards.map((flashcard, index) => (
                    <div key={index} style={{
                        width: '100%',
                        backgroundColor: '#FFF',
                        border: '1px solid #ddd',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        padding: '1rem',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            textTransform: 'capitalize',
                            margin: '0 0 0.5rem 0',
                            fontSize: '1.5rem',
                            color: '#666'
                        }}>{flashcard.word}</h2>
                        <p style={{
                            margin: '0 0 0.2rem 0',
                            fontSize: '1rem',
                            color: '#666'
                        }}>{flashcard.partOfSpeech}</p>
                        <p style={{
                            margin: '0 0 0.5rem 0',
                            fontSize: '1rem',
                            color: '#666'
                        }}>{flashcard.def}</p>
                        <p style={{
                            margin: '1rem',
                            fontSize: '1rem',
                            color: '#666'
                        }}>{flashcard.sentence}</p>
                        <a href={`https://en.wiktionary.org/wiki/${flashcard.word}`} style={{
                            marginTop: '1rem',
                            marginBottom: '0.5rem',
                            color: '#7DDF64',
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}>Wiktionary</a>
                    </div>
                ))}
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: '1rem'
            }}>
                <p style={{
                    margin: '0.5rem 0',
                    fontSize: '1rem',
                    color: 'white',
                    alignSelf: 'center',
                    textAlign: 'center'
                }}>Tips for Effective Studying:</p>
                <ul style={{
                    listStyleType: 'none',
                    padding: '0 0 0 1.5rem',
                    margin: 0,
                    textAlign: 'left',
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}>
                    <li style={{ margin: '0.5rem 0', color: 'white' }}> - Review flashcards daily to reinforce your memory.</li>
                    <li style={{ margin: '0.5rem 0', color: 'white' }}> - Use the flashcards in sentences of your own to understand the context.</li>
                    <li style={{ margin: '0.5rem 0', color: 'white' }}> - Group similar words together to make associations.</li>
                    <li style={{ margin: '0.5rem 0', color: 'white' }}> - Take regular breaks to avoid burnout and keep your mind fresh.</li>
                </ul>
            </div>

            <div style={{
                width: '100%',
                textAlign: 'center',
                marginTop: '1rem'
            }}>
                <p style={{
                    margin: '0.5rem 0',
                    fontSize: '1rem',
                    color: 'white'
                }}>We hope you find these resources helpful. For more tips and personalized GRE study materials, visit <a href="https://greasyvocab.com" style={{ color: '#7DDF64', textDecoration: 'none' }}>GREasyvocab.com</a>.</p>
                <p style={{
                    margin: '0.5rem 0',
                    fontSize: '1rem',
                    color: 'white'
                }}>Best of luck with your studies!</p>
            </div>

            <p style={{
                alignSelf: 'start',
                margin: '1rem 0',
                padding: '0',
                color: 'white'
            }}>Have a great day, {name}!</p>
            <p style={{
                alignSelf: 'start',
                color: 'white'
            }}> - The GREasy Team</p>
        </div>
    );
}