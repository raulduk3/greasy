import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faRedo } from '@fortawesome/free-solid-svg-icons';

interface Flashcard {
    flashcard_id: number;
    word_id: number;
    word: string;
    definition: string;
    part_of_speech: string;
    sentence: string;
}

interface FlashcardGameProps {
    flashcards: Flashcard[];
    name: string;
}

interface User {
    name: string;
}

const FlashcardGame: React.FC<FlashcardGameProps> = ({ flashcards, name }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [flipped, setFlipped] = useState<boolean>(false);
    const [zoomed, setZoomed] = useState<boolean>(false);

    const handleNext = () => {
        setFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const handlePrevious = () => {
        setFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    };

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleZoom = () => {
        setZoomed(!zoomed);
    };

    return (
        <div className="flashcard-game flex justify-center items-center p-40">
            {flashcards.length > 0 && (
                <div className={`flashcard bg-white shadow-lg text-black rounded-lg w-2/5 p-6 text-left ${zoomed ? 'zoomed' : ''} ${flipped ? 'flipped' : ''}`}>
                    <h2 className="text-xl font-bold mb-4">{name.split(' ')[0]}'s GREasy Vocabulary Cards</h2>
                    <div className="flashcard-content h-96 flex flex-col justify-between">
                        {flipped ? (
                            <div className="definition animate-fadeIn">
                                <h2 className="text-xl font-bold mb-4">{flashcards[currentIndex].definition}</h2>
                                <p className="text-2xl font-semibold text-green-500 mb-4 cursor-pointer" onClick={handleZoom}>{flashcards[currentIndex].word}</p>
                                <p className="text-lg italic text-gray-700 mb-4">{flashcards[currentIndex].part_of_speech}</p>
                                <p className="mt-4">{flashcards[currentIndex].sentence}</p>
                            </div>
                        ) : (
                            <div className="word flex items-center justify-center h-full animate-fadeIn">
                                <h2 className="text-2xl font-bold cursor-pointer" onClick={handleZoom}>{flashcards[currentIndex].word}</h2>
                            </div>
                        )}
                    </div>
                    <div className="controls mt-4 flex justify-center">
                        <button onClick={handlePrevious} className="px-4 py-2 bg-blue-500 text-white rounded mx-2">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button onClick={handleFlip} className="px-4 py-2 bg-green-500 text-white rounded mx-2">
                            <FontAwesomeIcon icon={faRedo} />
                        </button>
                        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded mx-2">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlashcardGame;