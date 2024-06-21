'use client';

import React from 'react';
import Link from 'next/link';

export const PricingSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6 md:flex-row md:justify-center md:gap-6">
            <div className="bg-white text-gray-900 p-6 m-2 shadow-lg shadow rounded-sm max-w-xs text-left flex flex-col gap-2">
                <h1 className="text-2xl">Premium Package</h1>
                <p className="text-xl">$2.00</p>
                <ul className="list-disc ml-4">
                    <li>Two-hundred premium GRE flashcards</li>
                    <li>Personalized sentences using GPT-4</li>
                    <li>Sent to your email</li>
                    <li>Data recorded for future purchases</li>
                </ul>
                <Link href="/q/premium" className="bg-green-500 text-white py-2 px-4 rounded mt-4 text-center font-bold no-underline hover:bg-green-600 transition duration-200">Start</Link>
            </div>
            <div className="bg-white text-gray-900 p-6 m-2 shadow-lg shadow rounded-sm max-w-xs text-left flex flex-col gap-2">
                <h1 className="text-2xl">Basic Package</h1>
                <p className="text-xl">$1.00</p>
                <ul className="list-disc ml-4">
                    <li>One-hundred premium GRE flashcards</li>
                    <li>Personalized sentences using GPT-3.5</li>
                    <li>Sent to your email</li>
                    <li>Data recorded for future purchases</li>
                </ul>
                <Link href="/q/basic" className="bg-green-500 text-white py-2 px-4 rounded mt-4 text-center font-bold no-underline hover:bg-green-600 transition duration-200">Start</Link>
            </div>
            <div className="bg-white text-gray-900 p-6 m-2 shadow-lg shadow rounded-sm max-w-xs text-left flex flex-col gap-2">
                <h1 className="text-2xl">Free Demo</h1>
                <p className="text-xl">$0.00</p>
                <ul className="list-disc ml-4">
                    <li>Fifteen free GRE flashcards</li>
                    <li>Personalized sentences using GPT-3.5</li>
                    <li>Sent to your email</li>
                    <li>No data recorded</li>
                </ul>
                <Link href="/q/demo" className="bg-green-500 text-white py-2 px-4 rounded mt-4 text-center font-bold no-underline hover:bg-green-600 transition duration-200">Try for free!</Link>
            </div>
        </div>
    );
};