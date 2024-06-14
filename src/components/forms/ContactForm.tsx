// components/forms/FirstForm.js
'use client';

import { Container } from '../../styles/components/FormStyles';
import React, { useState } from 'react';
import { verifyNewEmail } from '@/lib/serverActions';

function ContactForm({ onSubmit }: { onSubmit: (data: any) => void }): React.ReactElement {
    const [displayError, setDisplayError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (formData: any) => {
        await verifyNewEmail(email);
        onSubmit({ name: name, email: email }); 
    };

    return (
        <Container>
            <form action={handleSubmit}>
                <div> 
                    <h2>Begin by providing your basic contact information.</h2>
                    <p>We will only contact you via email once.</p>
                </div>
                <div>
                    <label>
                        Name
                    </label>
                    <input name="name" type="text" placeholder="Jane Doe"  onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input name="email" type="email" placeholder='example@web.com'  onChange={(e) => setEmail(e.target.value)} required />
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