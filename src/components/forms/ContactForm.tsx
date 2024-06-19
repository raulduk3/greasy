'use client';

import React, { useState } from 'react';
import { Container, Title, Description, Label, Input, Button, ErrorMessage } from '../../styles/components/FormStyles';
import { verifyEmail } from '@/lib/verifyEmail';

function ContactForm({ onSubmit }: { onSubmit: (data: any) => void }): React.ReactElement {
    const [displayError, setDisplayError] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = async () => {
        const emailValid = await verifyEmail(formData.email);
        if (emailValid) {
            onSubmit(formData);
        } else {
            setDisplayError('Email already exists.');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <Container>
            <form action={handleSubmit}>
                <div>
                    <Title>Begin by providing your basic contact information.</Title>
                    <Description>We will only contact you via email once.</Description>
                </div>
                <div>
                    <Label>Name</Label>
                    <Input name="name" type="text" placeholder="John Doe" onChange={handleChange} required />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input name="email" type="email" placeholder='example@web.com' onChange={handleChange} required />
                </div>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
            {displayError && <ErrorMessage>{displayError}</ErrorMessage>}
        </Container>
    );
}

export default ContactForm;
