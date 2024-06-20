'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { createUser } from '@/lib/createUser';
import {
    QuestionContainer, FormContainer, DisplayMessage,
    FlashcardContainer, FlashcardsContainer, FlashcardPartOfSpeech, FlashcardDefinition, FlashcardSentence, FlashcardWord
} from '@/styles/components/SlideshowQuestionnaireStyles';
import generateFlashcards from '@/lib/generateFlashcards';
import { DynamicFormProps } from './forms/DynamicForm';

function SlideshowQuestionnaire({ formComponents, length }: { length: number, formComponents: React.ComponentType<DynamicFormProps>[] }) {
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const [flashcards, setFlashcards] = useState<any[]>([]);
    const [formData, setFormData] = useState<Record<string, any>[]>([]);
    const [completed, setCompleted] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setFadeOut(false);
    }, [currentFormIndex, completed]);

    const handleFormSubmit = async (data: any) => {
        setFormData(prevData => [...prevData, data]);
        setFadeOut(true);

        setTimeout(async () => {
            if (currentFormIndex < formComponents.length - 1) {
                setCurrentFormIndex(currentFormIndex + 1);
            } else {
                try {
                    let userData = Object.assign({}, ...[...formData, data]);
                    console.log(userData);
                    setFlashcards(await generateFlashcards(userData));
                    await createUser(userData);
                    setCompleted(true);
                } catch (error) {
                    console.error(error);
                }
            }
        }, 1800);
    };

    const CurrentForm = formComponents[currentFormIndex];

    return (
        <QuestionContainer $fadeOut={fadeOut}>
            {completed ? (
                <FormContainer>
                    <DisplayMessage>
                        <p>Completed.</p>
                        <p>Check your email for your flashcards.</p>
                        <p><Link href="/">Back.</Link></p>
                        <FlashcardsContainer>
                            {
                                flashcards.map((flashcard, index) => (
                                    <FlashcardContainer key={index}>
                                        <FlashcardWord>{flashcard.word}</FlashcardWord>
                                        <FlashcardPartOfSpeech>{flashcard.partOfSpeech}</FlashcardPartOfSpeech>
                                        <FlashcardDefinition>{flashcard.def}</FlashcardDefinition>
                                        <FlashcardSentence>{flashcard.sentence}</FlashcardSentence>
                                    </FlashcardContainer>
                                ))
                            }
                        </FlashcardsContainer>
                    </DisplayMessage>
                </FormContainer>
            ) : (
                <FormContainer>
                    <CurrentForm length={length} onSubmit={handleFormSubmit} title={''} description={''} placeholder={''} />
                </FormContainer>
            )}
        </QuestionContainer>
    );
}

export default SlideshowQuestionnaire;
