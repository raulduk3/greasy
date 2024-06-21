'use client';

import React from 'react';
import Link from 'next/link';

export const PricingSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6 md:flex-row md:justify-center gap-2 md:gap-4">
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
    <div className="bg-white text-gray-900 p-8 m-2 gap-1 shadow-lg rounded-sm w-11/12 md:max-w-auto text-left flex flex-col">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-l mb-1">{price}<span className='italic text-sm text-gray-900'> | {description}</span></p>
        <ul className="list-disc ml-4 text-gray-900">
            {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
            ))}
        </ul>
        <Link href={link}
                className="shadow bg-green-500 text-white py-2 px-4 rounded mt-4 text-center font-bold no-underline hover:bg-green-600 transition duration-200"
                role="button"
                aria-label={`Start ${title}`}
        >
                {linkText}
        </Link>
    </div>
);

const packages = [
    {
        title: "Two-hundred personalized GRE flashcards",
        price: "$2.00",
        description: "Same day delivery",
        features: [
            "Personalized sentences using GPT-4",
            "Sent to your email as printable PDF",
            "Increased customizability",
            "Flashcards viewable as webpage",
            "Latest GRE words",
        ],
        link: "/q/premium",
        linkText: "Start"
    },
    {
        title: "One-hundred personalized GRE flashcards",
        price: "$1.00",
        description: "Same day delivery",
        features: [
            "Personalized sentences using GPT-3.5",
            "Sent to your email as printable PDF",
            "Flashcards viewable as webpage",
        ],
        link: "/q/basic",
        linkText: "Start"
    },
    {
        title: "Fifteen free personalized GRE flashcards",
        price: "$0.00",
        description: "Same day delivery",
        features: [
            "Generated using GPT-3.5",
            "Complete cards with word, part of speech, definition, and sentence.",
            "Limited vocabulary",
            "Sent to your email for viewing",
        ],
        link: "/q/demo",
        linkText: "Try for free!"
    }
];