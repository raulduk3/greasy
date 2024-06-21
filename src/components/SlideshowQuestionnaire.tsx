'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { userCreate } from '@/lib/user/create';
import generateFlashcards from '@/lib/generateFlashcards';
import { DynamicFormProps } from './forms/DynamicForm';
import { redirect } from 'next/navigation';

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

export default function SlideshowQuestionnaire({ formComponents, length }: { length: number, formComponents: React.ComponentType<DynamicFormProps>[] }) {
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

                    let sent = await sendEmail(userData, flashcards);
                    if (sent.status == 200) {
                        await userCreate(userData);
                    } else {
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
        }, 1800);
    };

    const CurrentForm = formComponents[currentFormIndex];

    return (
        !loading ? <div className={`flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            {completed ? (
                <div className="flex flex-col items-center justify-center p-6">
                    <div className="text-center">
                        <p>Completed.</p>
                        <p>Check your email for your flashcards.</p>
                        <p><Link href="/">Back.</Link></p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center p-6">
                    <CurrentForm className="rounded" length={length} onSubmit={iterate} title={''} description={''} placeholder={''} />
                </div>
            )}
        </div> : <div className="flex flex-col items-center justify-center p-6">
            <div className="text-center">
                <p className="text-center">Loading...</p>
            </div>
        </div>
    );
}