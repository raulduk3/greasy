// components/forms/FirstForm.js
'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import { Container, List } from '../../styles/FormStyles';

function ActivitiesForm({ onSubmit }: { onSubmit: (data: { activities: string[] }) => void }) {
    const [input, setInput] = useState('');
    const [activities, setactivities] = useState<string[]>([]);
    const [displayError, setDisplayError] = useState(''); 

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if(activities.length === 0) {
            setDisplayError('Please provide at least one activity.');
            return;
        }
        onSubmit({ activities: activities }); // Send data back to parent
    };

    const handleAdd = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if(input === '') {  
            setDisplayError('Please provide an activity.');
            return;
        }
        setactivities([...activities, input]);
        setInput('');
    };

    return (
        <Container>
            <p>Provide the name's of your favorite activities.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <List>
                        {activities.map((friend, index) => <li key={index}>{friend}</li>)}
                    </List>
                </div>
                <div>
                    <label>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='i.e. Biking' />
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

export default ActivitiesForm;