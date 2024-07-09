'use client';

import React, { useState } from 'react';

export interface DynamicFormProps {
    title: string;
    description: string;
    placeholder: string;
    length: number;
    cost?: string;
    name?: string;
    reusable?: boolean;
    onSubmit: (data: any) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ title, length, description, placeholder, onSubmit }) => {
    const [inputs, setInputs] = useState<string[]>(new Array(length).fill(''));
    const [displayError, setDisplayError] = useState('');

    const handleChange = (index: number, value: string) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputs.some(input => input === '') || inputs.length !== length) {
            setDisplayError('Please fill out all fields.');
            return;
        }
        onSubmit({ [title.toLowerCase()]: [...inputs] });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col items-center rounded justify-center p-8 bg-white text-gray-900 shadow-md max-w-lg">
                <div className="w-full mb-2">
                    <h2 className="text-2xl">{title}</h2>
                    <p className="text-lg">{description}</p>
                </div>
                <div className="w-full my-2 flex flex-col items-start">
                    {Array.from({ length }).map((_, index) => (
                        <div key={index} className="w-full my-2">
                            <label className="w-full flex flex-col my-1">
                                {placeholder + ` ${index + 1}`}
                                <input 
                                    type="text" 
                                    value={inputs[index]} 
                                    onChange={(e) => handleChange(index, e.target.value)} 
                                    placeholder="..." 
                                    className="border-b-2 border-gray-300 focus:border-green-400 outline-none p-2"
                                />
                            </label>
                        </div>
                    ))}
                </div>
                <div className="w-5/12 mt-4 self-start">
                    <button type="submit" className="p-2 w-full bg-green-400 text-white font-bold rounded">Submit</button>
                </div>
            </form>
            {displayError && <p className="mt-6">{displayError}</p>}
        </>
    );
};

export default DynamicForm;