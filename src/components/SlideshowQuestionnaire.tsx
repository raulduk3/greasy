'use client';

import React, { useState, useEffect, ReactElement } from 'react';
import { submitUserData } from '@/lib/serverActions';
import { QuestionContainer, FormContainer, DisplayMessage } from '@/styles/SlideshowQuestionnaireStyles';
import Link from 'next/link';

function SlideshowQuestionnaire({ formComponents }: { formComponents: ReactElement[] }) {
	const [currentFormIndex, setCurrentFormIndex] = useState(0);
	const [formData, setFormData] = useState<any[]>([]);
	const [completed, setCompleted] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		setFadeOut(false); // Reset fade out effect
	}, [currentFormIndex, completed]);

	const handleFormSubmit = async (data: any) => {
		const newFormData = [...formData];
		newFormData[currentFormIndex] = data;
		setFormData(newFormData);

		const formDataString = JSON.stringify(newFormData);

		setFadeOut(true);
		setTimeout(async () => {
			if (currentFormIndex < formComponents.length - 1) {
				setCurrentFormIndex(currentFormIndex + 1);
			} else {
				if (await submitUserData(formDataString)) {
					setCompleted(true);
				}
			}
		}, 1800);
	};

	const CurrentForm = formComponents[currentFormIndex] as unknown as React.ComponentType<any>;

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