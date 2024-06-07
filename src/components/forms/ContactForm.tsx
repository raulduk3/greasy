// components/forms/FirstForm.js
'use client';

import styled from 'styled-components';
import React, { useState } from 'react';

const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
    gap: 2vmin;
    width: 50vw;

    form {
        display: flex;
        flex-direction: column;
        gap: 2vmin;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.45vmin;
        }
    }    
}
`;

function ContactForm({ onSubmit }: { onSubmit: (data: { answer: string }) => void }) {
    const [input, setInput] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        onSubmit({ answer: input }); // Send data back to parent
    };

    return (
        <ContactContainer>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name
                    </label>
                    <input type="text" required />
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input type="email" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </ContactContainer>
    );
}

export default ContactForm;