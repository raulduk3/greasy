// components/forms/FirstForm.js
'use client';

import React, { useState } from 'react';
import { useFormStatus } from 'react-dom';
import styled from 'styled-components';

import { Container, List } from '../../styles/forms/FormStyles';

function ContactForm({ onSubmit }: { onSubmit: (data: any) => void }) {
    const [input, setInput] = useState('');
    const [friends, setFriends] = useState<string[]>([]);
    const [displayError, setDisplayError] = useState(''); 
    const { pending } = useFormStatus()

    const handleSubmit = () => {
        if(friends.length === 0) {
            setDisplayError('Please provide at least one friend.');
            return;
        }
        onSubmit({ friends: friends }); // Send data back to parent
    };

    const handleAdd = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if(input === '') {  
            setDisplayError('Please provide a friend\'s name.');
            return;
        }
        setFriends([...friends, input]);
        setInput('');
    };

    return (
        <Container>
            <form action={handleSubmit}>
                <div> 
                    <h2>Friends</h2>
                    <p>Provide the name's of your favorite friends. Pick the most meaningful names!</p>
                </div>
                <div>
                    <List>
                        {friends.map((friend, index) => <li key={index}> - {friend}</li>)}
                    </List>
                </div>
                <div>
                    <label>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Jane' />
                        <button onClick={handleAdd}>Add</button>
                    </label>
                </div>
                <div>
                    <button type="submit" disabled={pending}>Submit</button>
                </div>
            </form>
            <p>{displayError}</p>
        </Container>  
    );
}

export default ContactForm;