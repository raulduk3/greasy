'use client';

import React from 'react';
import Link from 'next/link';

export const PricingSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center md:items-stretch align-center p-6 gap-6 md:gap-6 md:flex-row md:justify-center">
            {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
            ))}
        </div>
    );
};

const PackageCard: React.FC<{
    title: string;
    price: string;
    description: string;
    features: string[];
    link: string;
    linkText: string;
}> = ({ title, price, description, features, link, linkText }) => (
    <div className='flex flex-col items-center align-center flex-basis flex-1 w-10/12 '>
        <div className="bg-white flex flex-1 h-full flex-col flex-basis text-black px-8 py-6 gap-1 shadow-lg rounded-sm w-full text-left flex flex-col">
            <h1 className="text-xl text-wrap">{title}</h1>
            <p className="text-l mb-1">{price}<span className='italic text-sm text-gray-900'> | {description}</span></p>
            <ul className="list-disc ml-4 text-gray-900">
                {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                ))}
            </ul>
            <div className='flex flex-1 flex-row justify-center'> 
                <Link href={link}
                        className="shadow bg-green-500 text-white w-5/12 py-2 px-4 rounded mt-5 align-center self-end text-center font-bold no-underline hover:bg-green-600 transition duration-200"
                        role="button"
                        aria-label={`Start ${title}`}
                        >
                        {linkText}
                </Link>
            </div>
        </div>
    </div>
);

const packages = [
    {
        title: "Two-hundred GRE flashcards",
        price: "$2.00",
        description: "Same day delivery",
        features: [
            "Complete cards with word, part of speech, definition, and sentence.",
            "Increased visual and contextual customizability",
            "Personalized sentences using GPT-4",
            "Sent to your email as printable PDF",
            "Flashcards viewable as webpage",
            "Latest GRE words",
        ],
        link: "/q/premium",
        linkText: "Start"
    },
    {
        title: "One-hundred GRE flashcards",
        price: "$1.00",
        description: "Same day delivery",
        features: [
            "Complete cards with word, part of speech, definition, and sentence.",
            "Personalized sentences using GPT-3.5",
            "Sent to your email as printable PDF",
            "Flashcards viewable as webpage",
            "Latest GRE words",
        ],
        link: "/q/basic",
        linkText: "Start"
    },
    {
        title: "Sample GRE flashcards",
        price: "$0.00",
        description: "Same day delivery",
        features: [
            "15 sample flashcards sent to your email",
            "Generated using GPT-3.5",
            "Limited vocabulary",
        ],
        link: "/q/demo",
        linkText: "Try for free!"
    }
];