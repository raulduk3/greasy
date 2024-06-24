'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { userVerify } from '@/lib/user/verify';

function ContactForm({ onSubmit, reusable }: { onSubmit: (data: any) => void, reusable: boolean }): React.ReactElement {
    const [displayError, setDisplayError] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if(!reusable) {
            const emailValid = await userVerify(formData.email);
            if (emailValid) {
                onSubmit(formData);
            } else {
                setDisplayError('Email already exists.');
            }
        } else {
            onSubmit(formData);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col items-center rounded justify-center p-8 bg-white text-gray-900 shadow-md max-w-lg">
                <div className="w-full mb-2">
                    <h2 className="text-2xl mb-1">Begin by providing your basic contact information.</h2>
                    <p className="text-lg">Be sure to provide the <span className='underline font-bold'>correct</span> email address.</p>
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
                <div className="w-full my-2 flex flex-col items-start align-center">
                    <label className="w-full flex text-sm gap-2">
                        Confirm email?
                        <input type='checkbox' name='toggle' value='toggle' required className="w-5 h-5 text-green-400"/>
                    </label>
                </div>
                <div className="w-full my-2 flex flex-col items-center align-center">
                    <label className="w-full flex text-sm gap-2">
                        <Link className="p-0 underline" href='/terms-of-service'>Agree to Terms of Serivce?</Link>
                        <input type='checkbox' name='toggle' value='toggle' required className="w-5 h-5 text-green-400"/>
                    </label>
                </div>
                <div className="self-start w-5/12 mt-4">
                    <button type="submit" className="w-full py-2 bg-green-400 text-white font-bold rounded">Submit</button>
                </div>
            </form>
            {displayError && <p className="text-red-500">{displayError}</p>}
        </>
    );
}

export default ContactForm;