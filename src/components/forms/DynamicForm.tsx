'use client';

import React, { useState } from 'react';
import { Container, Title, Description, List, ListItem, Label, Input, Button, ErrorMessage } from '../../styles/components/FormStyles';

interface DynamicFormProps {
    title: string;
    description: string;
    placeholder: string;
    onSubmit: (data: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ title, description, placeholder, onSubmit }) => {
    const [input, setInput] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const [displayError, setDisplayError] = useState('');

    const handleAdd = (event: React.FormEvent) => {
        event.preventDefault();
        if (input === '') {
            setDisplayError(`Please provide a ${placeholder.toLowerCase()}.`);
            return;
        }
        setItems([...items, input]);
        setInput('');
    };

    const handleSubmit = () => {
        if (items.length === 0) {
            setDisplayError(`Please provide at least one ${placeholder.toLowerCase()}.`);
            return;
        }
        onSubmit({ [title.toLowerCase()]: items });
    };

    return (
        <Container>
            <form action={handleSubmit}>
                <div>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <p>Add one at a time.</p>
                </div>
                <div>
                    <List>
                        {items.map((item, index) => (
                            <ListItem key={index}> - {item}</ListItem>
                        ))}
                    </List>
                </div>
                <div>
                    <Label>
                        <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={placeholder} />
                        <Button onClick={handleAdd}>Add</Button>
                    </Label>
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
