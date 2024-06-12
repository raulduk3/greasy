// components/forms/FirstForm.js
'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

import { Container, List } from '../../styles/forms/FormStyles';

function LocationForm({ onSubmit }: { onSubmit: (data: any) => void }) {
    const [input, setInput] = useState('');
    const [locations, setlocations] = useState<string[]>([]);
    const [displayError, setDisplayError] = useState(''); 

    const handleSubmit = () => {
        if(locations.length === 0) {
            setDisplayError('Please provide at least one friend.');
            return;
        }
        onSubmit({ locations: locations }); // Send data back to parent
    };

    const handleAdd = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if(input === '') {  
            setDisplayError('Please provide a location.');
            return;
        }
        setlocations([...locations, input]);
        setInput('');
    };

    return (
        <Container>
            <form action={handleSubmit}>
                <div>
                    <h2>Locations</h2>
                    <p>Provide the name's of your favorite locations. Countries, states, cities, towns. Anywhere you can imagine!</p>
                </div>
                <div>
                    <List>
                        {locations.map((location, index) => <li key={index}> - {location}</li>)}
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