import React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
    return (
        <div className='flex flex-col flex-1 text-pretty self-center justify-center flex-basis p-6'>
            <div className="flex self-center justify-center h-100 flex-col p-8 font-sans gap-3 max-w-lg md:w-auto bg-white text-black rounded-lg">
                <h1 className="text-2xl">About GREasy</h1>
                <p className="max-w-xll text-left">
                    Hi my name is <Link href="https://raulduke.com" className="text-green-500 no-underline">Richard Álvarez</Link> 
                </p>
                <p>
                    I am a recent college grad who created this tool while prepping for the GRE. I wanted a study aid that was more engaging and effective than the usual, so I built GREasy to make mastering GRE vocabulary both fun and personalized. 
                </p>
                <p className="max-w-xll text-left">
                    This project is not only about education; it's also about giving back. Fifty percent of proceeds are donated to support humanitarian efforts in Palestine. I believe in the power of education and the importance of helping those in need.
                </p>
                <p className="max-w-xll text-left">
                    Thank you for joining us on this journey. I hope that GREasy helps you achieve your GRE goals and makes your study sessions a little brighter. Together, let's make learning fun and impactful!
                </p>
            </div>
        </div>
    );
}

export default AboutPage;