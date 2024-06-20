'use client';

import React, { useState } from 'react';
import { Container, Title, Description, Label, Input, Button, ErrorMessage } from '../../styles/components/FormStyles';
import { userVerify } from '@/server/user/verify';

function ContactForm({ onSubmit }: { onSubmit: (data: any) => void }): React.ReactElement {
    const [displayError, setDisplayError] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = async () => {
        const emailValid = await userVerify(formData.email);
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
                    <Label>
                        Name
                        <Input name="name" type="text" placeholder="John Doe" onChange={handleChange} required />
                    </Label>
                </div>
                <div>
                    <Label>
                        Email
                        <Input name="email" type="email" placeholder='example@web.com' onChange={handleChange} required />
                    </Label>
                </div>
                <div style={{
                    flexDirection: 'row',
                    gap: '1vmin',
                }}>
                    <Label style={{
                        width: 'auto',
                    }}>
                        Confirm permission to email? 
                    </Label>
                    <input type='checkbox' name='toggle' value='toggle' required />
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
