import React from 'react';
import { getRecentSentences, getSentenceCount } from '@/lib/utils/recentSentences';
import { getWordCount } from '@/lib/utils/wordCount';

const StatsBanner = async () => {
    const recentSentences = await getRecentSentences();
    const wordCount = await getWordCount();
    const sentenceCount = getSentenceCount();

    return (
        <>
            <div className="text-black items-center flex flex-col max-w-full gap-2">
                <div className="flex flex-col items-stretch w-full lg:w-full">
                    <div className="flex bg-white shadow-lg flex-col md:flex-row items-stretch justify-center pt-6 px-12">
                        <div className="bg-white flex flex-col">
                            <h1 id="why-use-greasy" className="font-semibold text-[3em] mb-2 text-left self-start leading-tight">Why GREasy?</h1>
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
                            </ul>
                            <p className="text-lg text-black text-left self-start text-left mb-6">
                                <strong>No credit card information or personal data is stored. </strong> All personal information is discarded after use. This website does not use cookies. It’s a very simple tool that provides printable and viewable flashcards of important and popular GRE words.
                            </p>
                        </div>
                        {/* <div className="bg-white flex flex-col leading-tight p-6 md:py-0">
                            <h4 className="text-xl text-black mt-2 mb-4">What People Are Saying About GREasy</h4>
                            <p className="text-base italic mb-2">"GREasy's personalized flashcards have transformed my study sessions. Highly recommend!" - Karina B.</p>
                            <p className="text-base italic mb-2">"Great GRE prep tool. The sentences are relevant and concise." - Sam H.</p>
                            <p className="text-base italic mb-2">"Much cheaper than other options and giving back!" - Julían C.</p>
                        </div> */}
                    </div>
                    <div className="text-black bg-white flex-1 flex flex-col px-12 pb-6">
                        <h3 className="text-4xl mb-2 font-semibold text-black leading-tight">Sentences generated on <span className='text-green-500'>GREasy</span></h3>
                        <ul className="flex flex-col gap-4 text-xl">
                            {recentSentences.map((sentence, index) => (
                                <li key={index} className="leading-relaxed text-lg">{sentence}.</li>
                            ))}
                        </ul>
                        <p className="text-sm italic pt-4 justify-self-end">Current Sentence Count: {sentenceCount}</p>
                        <p className="text-sm italic mt-auto">Current Word Count: {wordCount}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsBanner;