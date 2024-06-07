// components/SlideshowQuestionnaire.js
'use client';

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
	fadeOut: boolean;
}

const QuestionContainer = styled.div<QuestionContainerProps>`
	animation: ${props => props.fadeOut ? fadeOut : fadeIn} 1s linear forwards;
`;

const FormContainer = styled.div`
	min-height: 300px;
	display: flex;
	flex: column;
	align-items: center;
	justify-content: space-evenly;
`;

function SlideshowQuestionnaire({ formComponents }: { formComponents: ReactElement[] }) {
	const [currentFormIndex, setCurrentFormIndex] = useState(0);
	const [formData, setFormData] = useState<any[]>([]);
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		setFadeOut(false); // Reset fade out effect
	}, [currentFormIndex]);

	const handleFormSubmit = async (data: any) => {
		// Save data from the submitted form
		const newFormData = [...formData];
		newFormData[currentFormIndex] = data;
		setFormData(newFormData);

		// Initiate fade out effect before changing the form
		setFadeOut(true);
		setTimeout(() => {
			if (currentFormIndex < formComponents.length - 1) {
				setCurrentFormIndex(currentFormIndex + 1);
			} else {
				console.log('All forms submitted:', newFormData); // Or do something with the data
			}
		}, 1000); // Match timeout to animation duration
	};

	const CurrentForm = formComponents[currentFormIndex] as unknown as React.ComponentType<any>;

	return (
		<QuestionContainer fadeOut={fadeOut}>
			<FormContainer>
				<CurrentForm onSubmit={handleFormSubmit} />
			</FormContainer>
		</QuestionContainer>
	);
}

export default SlideshowQuestionnaire;