import React from 'react';
import Link from 'next/link';

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
            Welcome to GREasy! I’m <Link href="https://raulduke.com">Richard Álvarez</Link>, a recent grad who created this tool while prepping for the GRE. <br /> <br /> I wanted a study aid that was more engaging and effective than the usual, so I built GREasy to make mastering GRE vocabulary both fun and personalized. Dive in and enjoy the ride!            </p>
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