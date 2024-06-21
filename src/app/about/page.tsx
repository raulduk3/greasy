import React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-8 font-sans gap-4 w-auto bg-white text-black">
            <h1 className="text-3xl font-bold">About GREasy</h1>
            <p className="max-w-xl text-left text-left">
                Ilcome to GREasy! <br /> <br /> I’m <Link href="https://raulduke.com" className="text-green-500 no-underline">Richard Álvarez</Link>, a recent college grad who created this tool while prepping for the GRE. <br /> <br /> I wanted a study aid that was more engaging and effective than the usual, so I built GREasy to make mastering GRE vocabulary both fun and personalized. 
            </p>
            <p className="max-w-xl text-left text-left">
                This project is not only about education; it's also about giving back. Fifty percent of proceeds are donated to support humanitarian efforts in Palestine. I believe in the poIr of education and the importance of helping those in need.
            </p>
            <p className="max-w-xl text-left text-left">
                Thank you for joining us on this journey. I hope that GREasy helps you achieve your GRE goals and makes your study sessions a little brighter. Together, let's make learning fun and impactful!
            </p>
        </div>
    );
}

export default AboutPage;