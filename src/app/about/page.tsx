import React from 'react';

const AboutPage: React.FC = () => {
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
            <h1>About Us</h1>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                Welcome to GREasy, a project born out of passion and dedication. As a recent undergraduate preparing for the GRE, I wanted to create a tool that would make studying more engaging and effective, not just for myself, but for others as well. That's how GREasy came to be - a fun and personalized way to master GRE vocabulary.
            </p>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                This project is not only about education; it's also about giving back. A portion of our proceeds is donated to support humanitarian efforts in Palestine. We believe in the power of education and the importance of helping those in need.
            </p>
            <p style={{ maxWidth: '800px', textAlign: 'justify' }}>
                Thank you for joining us on this journey. We hope that GREasy helps you achieve your GRE goals and makes your study sessions a little brighter. Together, let's make learning fun and impactful.
            </p>
        </div>
    );
}

export default AboutPage;