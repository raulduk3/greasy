'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useIsVisible } from '@/lib/utils/useIsVisible';

export const PricingSection: React.FC = () => {
    return (
        <>
            <h1 className='font-semibold text-[2.6rem] w-full px-10 text-white text-center py-4'>Packages</h1>
            <div className="flex flex-col lg:flex-row items-stretch mb-8 align-center px-6 pb-6 gap-8 justify-center w-full">
                {packages.map((pkg, index) => (
                    <PackageCard key={index} index={index} {...pkg} />
                ))}
            </div>
        </>
    );
};

const PackageCard: React.FC<{
    title: string;
    price: string;
    description: string;
    features: string[];
    link: string;
    linkText: string;
    index: number;
}> = ({ title, index, price, description, features, link, linkText }) => {
    const ref_main = useRef<HTMLDivElement>(null);
    const isSectionVisible = useIsVisible(ref_main);

    const ref_sub = useRef<HTMLDivElement>(null);
    const isCardVisible = useIsVisible(ref_sub);

    return (
        <div ref={ref_main} className={`flex flex-col flex flex-1 items-stretch align-center w-auto transition-opacity ease-in duration-1800`}>
            <div ref={ref_sub} className="bg-white flex flex-1 h-full flex-col flex-basis text-black px-5 py-5 gap-1 shadow-lg rounded-sm text-left">
                <h1 className="text-xl text-wrap">{title}</h1>
                <p className="text-l mb-1">{price}<span className='italic text-sm text-gray-900'> | {description}</span></p>
                <ul className="list-disc ml-4 text-gray-900">
                    {features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>
                <div className='flex flex-1 flex-row justify-center my-2'> 
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
}

const packages = [
    {
        title: "Two-hundred GRE flashcards",
        price: "$2.00",
        description: "Same day delivery",
        features: [
            "Complete cards with word, part of speech, definition, and sentence.",
            "Personalized sentences generated by GPT-4",
            "Sent to your email as printable PDF",
            "Flashcards viewable as webpage",
            "Latest GRE words",
        ],
        link: "/q/premium",
        linkText: "Start"
    },
    {
        title: "One-hundred GRE flashcards",
        price: "$1.50",
        description: "Same day delivery",
        features: [
            "Complete cards with word, part of speech, definition, and sentence.",
            "Personalized sentences generated by GPT-3.5",
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
            "Fifteen sample flashcards sent to your email",
            "Sentences generated by GPT-3.5",
            "Limited vocabulary",
        ],
        link: "/q/demo",
        linkText: "Try for free!"
    }
];