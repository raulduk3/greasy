// components/forms/FirstForm.js
'use client';

import React, { useState } from 'react';

function ActivitiesForm({ onSubmit }: { onSubmit: (data: { answer: string }) => void }) {
    const [input, setInput] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        onSubmit({ answer: input }); // Send data back to parent
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ActivitiesForm;