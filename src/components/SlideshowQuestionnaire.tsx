'use client';

import Link from 'next/link';
import React, { useState, useEffect, ReactElement } from 'react';
import { createUser } from '@/lib/createUser';
import { QuestionContainer, FormContainer, DisplayMessage } from '@/styles/components/SlideshowQuestionnaireStyles';
import generateFlashcard from '@/lib/generateFlashcard';

function SlideshowQuestionnaire({ formComponents }: { formComponents: any }) {
	const [currentFormIndex, setCurrentFormIndex] = useState(0);
	const [formData, setFormData] = useState<FormData[]>([]);
	const [completed, setCompleted] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		setFadeOut(false); // Reset fade out effect
	}, [currentFormIndex, completed]);

	const handleFormSubmit = async (data: any) => {
		const newFormData = [...formData];
		newFormData.push(data);
		setFormData(newFormData);

		setFadeOut(true);
		setTimeout(async () => {
			if (currentFormIndex < formComponents.length - 1) {
				setCurrentFormIndex(currentFormIndex + 1);
			} else {
				try {
					await createUser(newFormData);
					await generateFlashcard(Object.assign({}, ...newFormData));
					setCompleted(true);
				}  catch (error: any)
				{
					throw new error;
				}
			}
		}, 1800);
	};

	const CurrentForm = formComponents[currentFormIndex] as unknown as React.ComponentType<{ onSubmit: (data: any) => void }>;

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