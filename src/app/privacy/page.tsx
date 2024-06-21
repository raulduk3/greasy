import React from 'react';

const PrivacyPage: React.FC = () => {
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
            <h1>Terms of Service</h1>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                Welcome to GREasy! By using our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
            </p>
            <h2>Use of Service</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                You agree to use our services only for lawful purposes. You must not use our services in any way that may damage our reputation or infringe on the rights of others.
            </p>
            <h2>Intellectual Property</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                All content provided through our services, including text, graphics, logos, and software, is the property of GREasy and is protected by intellectual property laws. 
                You may not use any of this content without our prior written permission.
            </p>
            <h2>Limitation of Liability</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                GREasy will not be liable for any damages arising from the use or inability to use our services. This includes, but is not limited to, direct, indirect, incidental, punitive, 
                and consequential damages.
            </p>
            <h2>Changes to Terms</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                We reserve the right to modify these terms at any time. Your continued use of our services constitutes your acceptance of any changes to these terms.
            </p>
            <h2>Contact Us</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                If you have any questions about these Terms of Service, please contact us at <a href={"mailto:rawalvarez731@gmail.com?subject=GREAsy Support " + new Date().toDateString}>rawalvarez731@gmail.com</a>.
            </p>
        </div>
    );
}

export default PrivacyPage;