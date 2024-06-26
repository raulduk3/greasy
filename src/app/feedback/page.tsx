'use client';

import React, { useState } from 'react';

const FeedbackPage: React.FC = () => {
    const [feedback, setFeedback] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const res = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        });
        const data = await res.json();
        setResponseMessage(data.message);
    };

    return (
        <div className='flex flex-col flex-1 text-pretty w-full md:w-2/5 self-center justify-center flex-basis p-6'>
            <div className="flex self-center justify-center h-100 flex-col p-8 font-sans gap-3 w-full bg-white text-black rounded-lg">
                <h1 className="text-2xl">Feedback</h1>
                <p>Any advice, questions, or demands are appreciated :)</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Enter your feedback here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit</button>
                </form>
                {responseMessage && <p className="mt-4">{responseMessage}</p>}
            </div>
        </div>
    );
};

export default FeedbackPage;