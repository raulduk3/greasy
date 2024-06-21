import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-8 font-sans text-white gap-4">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="max-w-xl text-left">
                We would love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out.
            </p>
            <p className="max-w-xl text-left">
                <strong>Email:</strong> You can email us at <a href={`mailto:rawalvarez731@gmail.com?subject=GREasy Support Request ${new Date().toDateString()}`} className="text-green-500 no-underline">rawalvarez731@gmail.com</a>. <br /> <br /> We strive to respond to all inquiries within 24 hours.
                We look forward to connecting with you and assisting you in your GRE preparation journey!
            </p>
        </div>
    );
}

export default ContactPage;