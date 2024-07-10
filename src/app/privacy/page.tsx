import React from 'react';

const PrivacyPage: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem',
            fontFamily: 'Arial, sans-serif',
            color: 'black',
            gap: '1rem',
        }}>
            <h1>Privacy Policy</h1>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                Welcome to GREasy! We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>
            <h2>Information We Collect</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                We collect information that you provide to us directly, such as when you register for an account, purchase a service, or communicate with us. This may include your name, email address, and payment information.
            </p>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                We also collect information automatically as you navigate our site. This includes your IP address, browser type, operating system, and usage data.
            </p>
            <h2>Use of Information</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                We use the information we collect to provide, maintain, and improve our services. This includes processing transactions, responding to your inquiries, and sending you updates and promotional materials.
            </p>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                We may also use your information to monitor and analyze trends, usage, and activities in connection with our services.
            </p>
            <h2>Sharing of Information</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. This may include sharing information with service providers who perform services on our behalf.
            </p>
            <h2>Data Security</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                We implement a variety of security measures to maintain the safety of your personal information. These measures include encryption, access controls, and secure storage practices.
            </p>
            <h2>Your Rights</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                You have the right to access, update, or delete your personal information. You may also object to the processing of your data or request that we restrict its processing. To exercise these rights, please contact us at <a href={"mailto:rawalvarez731@gmail.com?subject=GREAsy Privacy Request " + new Date().toDateString()}>rawalvarez731@gmail.com</a>.
            </p>
            <h2>Changes to This Policy</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. Your continued use of our services after any changes signifies your acceptance of the updated policy.
            </p>
            <h2>Contact Us</h2>
            <p style={{ maxWidth: '800px', textAlign: 'left' }}>
                If you have any questions about this Privacy Policy, please contact us at <a href={"mailto:rawalvarez731@gmail.com?subject=GREAsy Privacy Inquiry " + new Date().toDateString()}>rawalvarez731@gmail.com</a>.
            </p>
        </div>
    );
}

export default PrivacyPage;