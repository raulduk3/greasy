import React from 'react';

const DataPrivacyPage: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            fontFamily: 'Arial, sans-serif',
            color: 'white',
			gap: '1rem',
        }}>
            <h1>Data Privacy</h1>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                At GREasy, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. 
                This Data Privacy Policy outlines how we collect, use, and safeguard your information when you use our services.
            </p>
            <h2>Information Collection</h2>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                We collect information that you provide directly to us, such as when you create an account, fill out a questionnaire, or contact us for support. 
                This information may include your name, email address, and any other details you choose to provide.
            </p>
            <h2>Use of Information</h2>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                We use the information we collect to provide, maintain, and improve our services. This includes personalizing your flashcards, responding to your inquiries, 
                and sending you updates and promotional materials.
            </p>
            <h2>Data Security</h2>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. 
                However, please be aware that no method of transmission over the Internet or electronic storage is completely secure.
            </p>
            <h2>Contact Us</h2>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                If you have any questions about this Data Privacy Policy or our data practices, please contact us at support@greasyvocab.com.
            </p>
        </div>
    );
}

export default DataPrivacyPage;