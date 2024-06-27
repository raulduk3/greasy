'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getUser } from '@/lib/user/get';
import generateFlashcards from '@/lib/flashcards/generateFlashcards';
import createOrder from '@/lib/createOrder';
import { DynamicFormProps } from './DynamicForm';
import { redirect } from 'next/navigation';

import type { Flashcard } from '@/lib/flashcards/types';
import { UserData } from '@/lib/user/types';

export const dynamic = 'force-dynamic';

/**
 * Sends an email with the generated flashcards.
 * 
 * @param {UserData} userData - Data about the user.
 * @param {Flashcard[]} flashcards - Array of generated flashcards.
 * @returns {Promise<Response>} - The response from the email API.
 */
function sendEmail(userData: UserData, flashcards: Flashcard[]): Promise<Response> {
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

/**
 * Props for GenerateFlashcardQuestionnaire component.
 */
interface GenerateFlashcardQuestionnaireProps {
    input_length: number;
    generation_size: number;
    cost?: string;
    name?: string;
    reusable?: boolean;
    formComponents: React.ComponentType<DynamicFormProps>[];
}

/**
 * Component for generating flashcard questionnaires and handling the form submissions.
 * 
 * @param {GenerateFlashcardQuestionnaireProps} props - Component properties.
 * @returns {React.ReactElement} - The rendered component.
 */
export default function GenerateFlashcardQuestionnaire({ input_length, cost, name, formComponents, reusable, generation_size }: GenerateFlashcardQuestionnaireProps): React.ReactElement {
    const [currentFormIndex, setCurrentFormIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<UserData[]>([]);
    const [completed, setCompleted] = useState<boolean>(false);
    const [fadeOut, setFadeOut] = useState<boolean>(false);

    useEffect(() => {
        setFadeOut(false);
    }, [currentFormIndex, loading]);

    /**
     * Handles the form submission and iteration through the form components.
     * 
     * @param {UserData} data - Data from the current form submission.
     */
    const iterate = async (data: UserData): Promise<void> => {
        setFormData(prevData => [...prevData, data]);
        setFadeOut(true);

        setTimeout(async () => {
            if (currentFormIndex === formComponents.length - 1) {
                try {
                    setLoading(true);
                    
                    const userData: UserData = await getUser(Object.assign({}, ...[...formData, data]));
                    const order = await createOrder(userData.user_id, userData.id);
                    let flashcards: Flashcard[] = await generateFlashcards({
                        id: userData.id || 'NOT_PAYPAL',
                        ...userData,
                    }, order, generation_size);

                    let sent = await sendEmail(userData, flashcards);
                    if (sent.status !== 200) {
                        console.error('Email not sent.');
                        redirect('/');
                    }

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
        }, 1000);
    };

    const CurrentForm = formComponents[currentFormIndex];

    return (
        !loading ? <div className={`p-12 flex grow w-full justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            {completed ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                        <p>Completed.</p>
                        <p>Check your email for your flashcards.</p>
                        <p><Link href="/">Back.</Link></p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col  grow w-full justify-center  items-center justify-center">
                    <CurrentForm reusable={reusable} cost={cost} name={name} length={input_length} onSubmit={iterate} title={''} description={''} placeholder={''} />
                </div>
            )}
        </div> : <div className="flex flex-col  grow w-full justify-center  items-center justify-center">
            <div className="text-center">
                <p className="text-center">Loading...</p>
            </div>
        </div>
    );
}