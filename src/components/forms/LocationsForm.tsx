// components/forms/FirstForm.js
'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import { Container, List } from '../../styles/FormStyles';

function LocationForm({ onSubmit }: { onSubmit: (data: { locations: string[] }) => void }) {
    const [input, setInput] = useState('');
    const [locations, setlocations] = useState<string[]>([]);
    const [displayError, setDisplayError] = useState(''); 

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if(locations.length === 0) {
            setDisplayError('Please provide at least one friend.');
            return;
        }
        onSubmit({ locations: locations }); // Send data back to parent
    };

    const handleAdd = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setlocations([...locations, input]);
        setInput('');
    };

    return (
        <Container>
            <p>Provide the name's of your favorite locations.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <List>
                        {locations.map((friend, index) => <li key={index}>{friend}</li>)}
                    </List>
                </div>
                <div>
                    <label>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='i.e. Chicago' />
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

export default LocationForm;