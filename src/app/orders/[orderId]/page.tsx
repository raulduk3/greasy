'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Flashcard {
    flashcard_id: number;
    word_id: number;
    word: string;
    definition: string;
    part_of_speech: string;
    sentence: string;
}

export default function OrderPage({ params }: { params: { orderId: string } }) {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const orderId = params.orderId;

    useEffect(() => {

        const fetchFlashcards = async () => {
            try {
                const response = await fetch(`/api/orders/${orderId}/flashcards`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'method': 'GET',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch flashcards');
                }

                const data = await response.json();
                setFlashcards(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFlashcards();
    }, [orderId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl mb-6 text-center">Flashcards for Order #{orderId}</h1>
            <div className="grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 gap-4">
                {flashcards.map(flashcard => (
                    <div key={flashcard.flashcard_id} className="p-4 bg-white rounded shadow">
                        <h2 className="text-xl font-bold">{flashcard.word}</h2>
                        <p><strong>Definition:</strong> {flashcard.definition}</p>
                        <p><strong>Part of Speech:</strong> {flashcard.part_of_speech}</p>
                        <p><strong>Sentence:</strong> {flashcard.sentence}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

