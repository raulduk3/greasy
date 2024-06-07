// components/forms/FirstForm.js
'use client';

import styled from 'styled-components';
import React, { useState } from 'react';

import { verifyNewEmail } from '@/lib/serverActions';

const ContactContainer = styled.div`
    width: 33vw;
    height: 100%;

    input {
        width: 100%;
    }

    button {
        width: 50%;
        margin: 0 2vh;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2vmin;
        align-items: center;
        width: 100%;

        div {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 0.45vmin;
            align-items: center;
        }
    }    
}
`;

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
        <ContactContainer>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name
                    </label>
                    <input name="name" type="text" defaultValue="" placeholder="John Doe" onChange={(e) => { setName(e.target.value) }} required />
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input name="email" type="email" onChange={(e) => { setEmail(e.target.value)}} required />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>{displayError}</p>
        </ContactContainer>
    );
}

export default ContactForm;