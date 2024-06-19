'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { createUser } from '@/lib/createUser';
import { QuestionContainer, FormContainer, DisplayMessage } from '@/styles/components/SlideshowQuestionnaireStyles';
import generateFlashcards from '@/lib/generateFlashcards';

function SlideshowQuestionnaire({ formComponents }: { formComponents: React.ComponentType<{ onSubmit: (data: any) => void }>[] }) {
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
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
                    await generateFlashcards(userData);
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
                    </DisplayMessage>
                </FormContainer>
            ) : (
                <FormContainer>
                    <CurrentForm onSubmit={handleFormSubmit} />
                </FormContainer>
            )}
        </QuestionContainer>
    );
}

export default SlideshowQuestionnaire;
