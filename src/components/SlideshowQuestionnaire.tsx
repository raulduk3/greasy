// components/SlideshowQuestionnaire.js
'use client';

import { submitUserData } from '@/lib/serverActions';
import React, { useState, useEffect, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`;

const fadeOut = keyframes`
	from { opacity: 1; }
	to { opacity: 0; }
`;

interface QuestionContainerProps {
	$fadeOut: boolean;
}

const QuestionContainer = styled.div<QuestionContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	flex-grow: 1;
	animation: ${props => props.$fadeOut ? fadeOut : fadeIn} 1.8s ease forwards;
`;

const FormContainer = styled.div`
	min-height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const DisplayMessage = styled.div`
	min-height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function SlideshowQuestionnaire({ formComponents }: { formComponents: ReactElement[] }) {
	const [currentFormIndex, setCurrentFormIndex] = useState(0);
	const [formData, setFormData] = useState<any[]>([]);
	const [completed, setCompleted] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		setFadeOut(false); // Reset fade out effect
	}, [currentFormIndex, completed]);

	const handleFormSubmit = async (data: any) => {
		// Save data from the submitted form
		const newFormData = [...formData];
		newFormData[currentFormIndex] = data;
		setFormData(newFormData);

		// Initiate fade out effect before changing the form
		setFadeOut(true);
		setTimeout(async () => {
			if (currentFormIndex < formComponents.length - 1) {
				setCurrentFormIndex(currentFormIndex + 1);
			} else {
				if(await submitUserData(newFormData))
				{
					setCompleted(true);
				}
			}
		}, 1800);
	};

	const CurrentForm = formComponents[currentFormIndex] as unknown as React.ComponentType<any>;

	return (
		<QuestionContainer $fadeOut={fadeOut}>
			{ completed 
				? 	<DisplayMessage>
						<p>Completed.</p>
					</DisplayMessage> 
				: 	<FormContainer>
						<CurrentForm onSubmit={handleFormSubmit} />
					</FormContainer> } 
		</QuestionContainer>
	);
}

export default SlideshowQuestionnaire;