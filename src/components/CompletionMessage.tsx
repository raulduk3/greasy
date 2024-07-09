// src/components/CompletionMessage.tsx

import React from 'react';
import Link from 'next/link';

interface CompletionMessageProps {
    orderId: number;
}

const CompletionMessage: React.FC<CompletionMessageProps> = ({ orderId }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center bg-white p-6 rounded text-black flex flex-col gap-2">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Congratulations!</h1>
                    <p>Your flashcards have been successfully generated.</p>
                    <p>Check your email for your flashcards.</p>
                </div>
                <p>
                    <Link href={`/orders/${orderId}`} className="text-blue-500 hover:underline">View Your Order</Link>
                </p>
                <p>
                    <Link href="/" className="text-blue-500 hover:underline">
                        Back to Home
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CompletionMessage;