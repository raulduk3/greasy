'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { createUser } from '@/lib/createUser';
import {
    QuestionContainer, FormContainer, DisplayMessage,
} from '@/styles/components/SlideshowQuestionnaireStyles';
import generateFlashcards from '@/lib/generateFlashcards';
import { DynamicFormProps } from './forms/DynamicForm';

function sendEmail(userData: any, flashcards: any) {
    return fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userData,
            flashcards,
        }),
    });
}

function SlideshowQuestionnaire({ formComponents, length }: { length: number, formComponents: React.ComponentType<DynamicFormProps>[] }) {
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Record<string, any>[]>([]);
    const [completed, setCompleted] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setFadeOut(false);
    }, [currentFormIndex, loading]);

    const iterate = async (data: any) => {
        setFormData(prevData => [...prevData, data]);
        setFadeOut(true);

        setTimeout(async () => {
            if (currentFormIndex == formComponents.length - 1) {
                try {
                    setLoading(true);

                    let userData = Object.assign({}, ...[...formData, data]);
                    let flashcards = await generateFlashcards(userData);

                    await createUser(userData);
                    await sendEmail(userData, flashcards);

                    setCompleted(true);
                    setFadeOut(false);
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                }
            } else {
                setFadeOut(false);
                setLoading(false);
                setCurrentFormIndex(currentFormIndex + 1);
            }
        }, 1800);
    };

    const CurrentForm = formComponents[currentFormIndex];

    return (
        !loading ? <QuestionContainer $fadeOut={fadeOut}>
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
                    <CurrentForm length={length} onSubmit={iterate} title={''} description={''} placeholder={''} />
                </FormContainer>
            )}
        </QuestionContainer> : <FormContainer>
            <DisplayMessage>
                <p>Loading...</p>
            </DisplayMessage>
        </FormContainer>
    );
}

export default SlideshowQuestionnaire;
