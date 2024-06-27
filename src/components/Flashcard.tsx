'use client';

import { useState } from "react";

const Flashcard = ({ word }: { word: any }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            onClick={handleFlip}
            className="relative  h-72 m-2 text-black cursor-pointer"
            style={{ perspective: '1000px' }}
        >
            <div
                className={`relative w-full h-full text-center transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
                <div
                    className="absolute w-full h-full flex items-center justify-center bg-white border border-gray-300"
                    style={{ backfaceVisibility: 'hidden', borderRadius: '10px' }}
                >
                    <h2 className="text-2xl font-bold">{word.word}</h2>
                </div>
                <div
                    className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-100 border px-6 border-gray-300 transform rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', borderRadius: '10px', transform: 'rotateY(180deg)' }}
                >
                    <p className="text-lg mb-2">{word.definition}</p>
                    <p className="text-green-500">{word.part_of_speech}</p>
                    {word.example_sentence && <p className="mt-4">{word.example_sentence}</p>}
                </div>
            </div>
        </div>
    );
};

export default Flashcard;