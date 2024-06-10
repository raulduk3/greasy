// components/forms/FirstForm.js
'use client';

import styled from 'styled-components';
import { Container } from '../../styles/FormStyles';
import React, { useState } from 'react';

import { verifyNewEmail } from '@/lib/serverActions';

function ContactForm({ onSubmit }: { onSubmit: (data: any) => void }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [displayError, setDisplayError] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if(await verifyNewEmail(email)) {
            onSubmit({
                name: name,
                email: email,
            }); 
        } else {
            setDisplayError("Email already generated flashcards.");
        }
    };

    return (
        <Container>
            <p>Provide your contact information.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name
                    </label>
                    <input name="name" type="text" defaultValue="" placeholder="Jane Doe" onChange={(e) => { setName(e.target.value) }} required />
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input name="email" type="email" onChange={(e) => { setEmail(e.target.value)}} placeholder='example@web.com' required />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <p>{displayError}</p>
        </Container>
    );
}

export default ContactForm;