import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
			gap: '1rem',
        }}>
            <h1>Contact Us</h1>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                We would love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out.
            </p>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                <strong>Email:</strong> You can email us at <a href="mailto:support@greasyvocab.com" style={{ color: '#7DDF64', textDecoration: 'none' }}>support@greasyvocab.com</a>. We strive to respond to all inquiries within 24 hours.
            </p>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                We look forward to connecting with you and assisting you in your GRE preparation journey!
            </p>
        </div>
    );
}

export default ContactPage;