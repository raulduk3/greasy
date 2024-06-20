'use client';

import React, { useState } from 'react';
import { Container, Title, Description, Label, Input, Button, ErrorMessage } from '../../styles/components/FormStyles';

export interface DynamicFormProps {
    title: string;
    description: string;
    placeholder: string;
    length: number;
    onSubmit: (data: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ title, length, description, placeholder, onSubmit }) => {
    const [inputs, setInputs] = useState<string[]>(new Array(length).fill(''));
    const [displayError, setDisplayError] = useState('');

    const handleChange = (index: number, value: string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputs.some(input => input === '') || inputs.length != length) {
            setDisplayError('Please fill out all fields.');
            return;
        }
        onSubmit({ [title.toLowerCase()]: [...inputs] });
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </div>
                <div>
                    {Array.from({ length }).map((_, index) => (
                        <Label key={index}>
                            <Input 
                                type="text" 
                                value={inputs[index]} 
                                onChange={(e) => handleChange(index, e.target.value)} 
                                placeholder={placeholder} 
                            />
                        </Label>
                    ))}
                </div>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
            {displayError && <ErrorMessage>{displayError}</ErrorMessage>}
        </Container>
    );
};

export default DynamicForm;