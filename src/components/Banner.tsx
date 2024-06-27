import React from 'react';
import { getRecentSentences, getSentenceCount } from '@/lib/recentSentences';
import { getWordCount } from '@/lib/wordCount';

const StatsBanner = async () => {
    const recentSentences = await getRecentSentences();
    const wordCount = await getWordCount();
    const sentenceCount = getSentenceCount();

    return (
        <>
            <div className="text-black px-6 items-center flex flex-col gap-6">
                <div className="flex flex-col items-stretch w-full lg:w-8/12 gap-6">
                    <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
                        <div className="p-6 border bg-white flex flex-col rounded shadow-lg">
                            <h1 id="why-use-greasy" className="text-[3em] text-left mb-4 self-start font-semibold leading-tight">Why GREasy?</h1>
                            <ul className="list-none text-lg">
                                <li className="mb-2">
                                    <strong>Personalized Flashcards:</strong> Unlike generic flashcards from competitors like Kaplan and Manhattan Prep, GREasy offers personalized sentences generated by advanced AI. This ensures that your study material is tailored to your specific learning needs.
                                </li>
                                <li className="mb-2">
                                    <strong>Support for a Good Cause:</strong> By choosing GREasy, you're supporting a small business dedicated to social justice. A portion of our proceeds goes to support important causes, making your purchase impactful beyond just your own success.
                                </li>
                                <li className="mb-2">
                                    <strong>Future Expansion:</strong> GREasy plans to expand into a full online platform where users can track their progress and collect flashcards together. First-time users will qualify for exclusive discounts on these new features, including full-length practice tests.
                                </li>
                                <li className="mb-2">
                                    <strong>Affordable Pricing:</strong> Our prices are highly competitive, offering more value compared to other GRE flashcards on the market. Get the best study tools without breaking the bank.
                                </li>
                                <li className="mb-2">
                                    <strong>Email Group:</strong> Join our email group for exclusive tips, tricks, and strategies for test-taking. Receive regular updates and practice tests generated by our AI to keep your skills sharp.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 border bg-white flex flex-col rounded shadow-lg leading-tight">
                            <h4 className="text-xl text-black font-semibold mb-4 mt-1">What People Are Saying About GREasy</h4>
                            <p className="text-base italic mb-2">"GREasy's personalized flashcards have transformed my study sessions. Highly recommend!" - Karina B.</p>
                            <p className="text-base italic mb-2">"Great GRE prep tool. The sentences are relevant and concise." - Sam H.</p>
                            <p className="text-base italic mb-2">"Much cheaper than other options and giving back!" - Julían C.</p>
                            <p className="text-sm italic mt-auto">Current Word Count: {wordCount}</p>
                        </div>
                    </div>
                    <div className="w- p-6 text-black bg-white rounded shadow-lg flex-1 flex flex-col">
                        <h3 className="text-4xl font-semibold mb-4 text-black">Generated Sentences on <span className='text-green-500'>GREasyvocab.com</span></h3>
                        <ul className="flex flex-col gap-4 text-xl">
                            {recentSentences.map((sentence, index) => (
                                <li key={index} className="leading-relaxed text-lg">{sentence}.</li>
                            ))}
                        </ul>
                        <p className="text-sm italic pt-6">Current Sentence Count: {sentenceCount}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsBanner;