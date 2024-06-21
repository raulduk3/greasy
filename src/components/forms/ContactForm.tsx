'use client';

import React, { useState } from 'react';
import { userVerify } from '@/lib/user/verify';

function ContactForm({ onSubmit }: { onSubmit: (data: any) => void }): React.ReactElement {
    const [displayError, setDisplayError] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const emailValid = await userVerify(formData.email);
        if (emailValid) {
            onSubmit(formData);
        } else {
            setDisplayError('Email already exists.');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className="flex flex-col items-center justify-center w-full p-5">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center p-6 my-6 bg-white text-gray-900 shadow-md w-full max-w-md">
                <div className="w-full my-2">
                    <h2 className="text-2xl font-bold">Begin by providing your basic contact information.</h2>
                    <p className="text-lg">We will only contact you via email once.</p>
                </div>
                <div className="w-full my-2 flex flex-col items-start">
                    <label className="w-full flex flex-col my-1">
                        Name
                        <input name="name" type="text" placeholder="John Doe" onChange={handleChange} required className="border-b-2 border-gray-300 focus:border-green-400 outline-none p-2" />
                    </label>
                </div>
                <div className="w-full my-2 flex flex-col items-start">
                    <label className="w-full flex flex-col my-1">
                        Email
                        <input name="email" type="email" placeholder='example@web.com' onChange={handleChange} required className="border-b-2 border-gray-300 focus:border-green-400 outline-none p-2" />
                    </label>
                </div>
                <div className="w-full my-2 flex flex-col items-start">
                    <label className="w-full flex items-center gap-2">
                        <input type='checkbox' name='toggle' value='toggle' required className="w-5 h-5 text-green-400"/>
                        Confirm permission to email?
                    </label>
                </div>
                <div className="w-full my-2">
                    <button type="submit" className="w-full py-2 bg-green-400 text-white font-bold rounded">Submit</button>
                </div>
            </form>
            {displayError && <p className="text-red-500">{displayError}</p>}
        </div>
    );
}

export default ContactForm;