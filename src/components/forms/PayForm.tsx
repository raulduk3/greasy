'use client';

import React, { useState } from 'react';
import { Container, Title, Description, Label, Input, Button, ErrorMessage } from '../../styles/components/FormStyles';
import { verifyEmail } from '@/lib/verifyEmail';

function PayForm({ onSubmit }: { onSubmit: (data: any) => void }): React.ReactElement {
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
            <p>Can't use this just yet :(</p>
            {displayError && <ErrorMessage>{displayError}</ErrorMessage>}
        </Container>
    );
}

export default PayForm;
