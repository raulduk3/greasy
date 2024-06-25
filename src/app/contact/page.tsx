import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className='flex flex-col flex-1 flex-basis p-6 self-center justify-center'>
            <div className="flex text-pretty flex-col p-8 self-center font-sans gap-3 max-w-lg md:w-auto bg-white text-black rounded-lg">
                <h1 className="text-2xl">Contact</h1>
                <p className="max-w-xl text-left">
                    I would love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out.
                </p>
                <p className="max-w-xl text-left">
                    You can email me at <a href={`mailto:rawalvarez731@gmail.com?subject=GREasy Support Request ${new Date().toDateString()}`} className="text-green-500 underline">rawalvarez731@gmail.com</a>. 
                </p>
                <p>
                    I strive to respond to all inquiries within 24 hours. I look forward to connecting with you and assisting you in your GRE preparation journey!
                </p>
                <iframe src='https://giphy.com/embed/g79am6uuZJKSc' width='220'  className='self-center' frameBorder='0'></iframe>
            </div>
        </div>
    );
}

export default ContactPage;