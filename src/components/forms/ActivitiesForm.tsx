// components/forms/FirstForm.js
'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import { Container, List } from '../../styles/forms/FormStyles';

function ActivitiesForm({ onSubmit }: { onSubmit: (data: { activities: string[] }) => void }) {
    const [input, setInput] = useState('');
    const [activities, setactivities] = useState<string[]>([]);
    const [displayError, setDisplayError] = useState(''); 

    const handleSubmit = async () => {
        if(activities.length === 0) {
            setDisplayError('Please provide at least one activity.');
            return;
        }
        onSubmit({ activities: activities }); // Send data back to parent
    };

    const handleAdd = async (event: any) => {
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
            <form action={handleSubmit}>
                <div>
                    <h2>Activities and things</h2>
                    <p>Provide a list of your favorite foods, objects, ideas, activities, etc.</p>
                </div>
                <div>
                    <List>
                        {activities.map((activities, index) => <li key={index}> - {activities}</li>)}
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