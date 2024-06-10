// components/forms/FirstForm.js
'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import { Container, List } from '../../styles/FormStyles';

function ContactForm({ onSubmit }: { onSubmit: (data: { friends: string[] }) => void }) {
    const [input, setInput] = useState('');
    const [friends, setFriends] = useState<string[]>([]);
    const [displayError, setDisplayError] = useState(''); 

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
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
            <form onSubmit={handleSubmit}>
                <div> 
                    <p>Provide the name's of your favorite friends.</p>
                </div>
                <div>
                    <List>
                        {friends.map((friend, index) => <li key={index}>{friend}</li>)}
                    </List>
                </div>
                <div>
                    <label>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Jane' />
                        <button onClick={handleAdd}>Add</button>
                    </label>
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