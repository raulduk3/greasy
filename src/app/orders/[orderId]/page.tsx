'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FlashcardGame from '@/components/misc/FlashcardGame';
import { saveAs } from 'file-saver';

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
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [order, setOrder] = useState<any>({
        user: {
            name: '',
        },
    });
    const router = useRouter();
    const orderId = params.orderId;

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`/api/orders/${orderId}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    if (response.status === 404) {
                        router.push('/404');
                    } else {
                        throw new Error('Failed to fetch order');
                    }
                    return;
                }

                const data = await response.json();
                setOrder(data);
            } catch (error: any) {
                setError(error.message);
            }
        };
        const fetchFlashcards = async () => {
            try {
                const response = await fetch(`/api/orders/${orderId}/flashcards`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
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

        const fetchPdfUrl = async () => {
            try {
                const response = await fetch(`/api/orders/${orderId}/pdf`, {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch PDF URL');
                }

                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setPdfUrl(url);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchOrder();
        fetchFlashcards();
        fetchPdfUrl();
    }, [orderId, router]);

    const downloadCSV = () => {
        const csvRows = [
            ['Word', 'Definition', 'Part of Speech', 'Sentence'],
            ...flashcards.map(flashcard => [
                flashcard.word,
                flashcard.definition,
                flashcard.part_of_speech,
                flashcard.sentence
            ])
        ];

        const csvContent = csvRows.map(row => row.map(item => `"${item}"`).join(',')).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, `flashcards_order_${orderId}.csv`);
    };

    if (loading) return (<div className="flex flex-col  grow w-full justify-center  items-center justify-center">
        <div className="text-center">
            <p className="text-center">Loading...</p>
        </div>
    </div>);
    if (error) return <div>{error}</div>;

    const printInstructions = `1. Set your printer to print two-sided.
        2. Make sure to select "Actual size" or "100%" in your printer settings to avoid any adjustments to the margins.
        3. Carefully cut out the flashcards along the dotted lines.
        4. Study!`;

    return (
        <div className="m-6 w-11/12 md:w-10/12">
            <h1 className="text-2xl mb-4 p-0">GREasy Order #{orderId} for {order?.user?.name?.split(" ")[0]}</h1>
            <FlashcardGame name={order.user.name} flashcards={flashcards} />
            <h1 className="text-2xl mt-10 mb-4 p-0">Print Your Order</h1>
            <ul className="list-none mb-6">
                {printInstructions.split('\n').map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ul>
            {pdfUrl ? (
                <iframe src={pdfUrl} className='mb-6 max-w-full overflow-hidden' width="100%" height="600px"></iframe>
            ) : (
                <p>Loading PDF...</p>
            )}
            <h2 className="text-xl lg:flex mb-4">Flashcards Table</h2>
            <div className="mb-4 lg:flex flex-col md:flex-row gap-4">
                <button onClick={() => setFlashcards([...flashcards].sort(() => Math.random() - 0.5))} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Shuffle
                </button>
                <button onClick={() => setFlashcards([...flashcards].sort((a, b) => a.word.localeCompare(b.word)))} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Sort Alphabetically
                </button>
                <button onClick={downloadCSV} className="px-4 py-2 bg-green-500 text-white rounded">
                    Download CSV
                </button>
            </div>
            <table className="w-full text-black text-center bg-white mb-6 overflow-scroll">
                <thead className='bg-slate-300 text-slate-700'>
                    <tr>
                        <th className="p-2">Word</th>
                        <th className="p-2">Definition</th>
                        <th className="p-2">Sentence</th>
                    </tr>
                </thead>
                <tbody>
                    {flashcards.map(flashcard => (
                        <tr key={flashcard.flashcard_id} className="text-left text-sm md:text-md even:bg-slate-300 odd:bg-white">
                            <td className="p-3 ">{flashcard.word} <span className='text-sm'>{flashcard.part_of_speech}</span></td>
                            <td className="p-3 ">{flashcard.definition}</td>
                            <td className="p-3 ">{flashcard.sentence}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}