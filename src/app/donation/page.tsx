import React from 'react';

const DonationPage: React.FC = () => {
    return (
        <div className='flex flex-col flex-1 text-pretty self-center justify-center flex-basis p-6'>
            <div className="flex self-center justify-center h-100 flex-col p-8 font-sans gap-3 max-w-lg md:w-auto bg-white text-black rounded-lg">
                <h1 className="text-2xl">Donations</h1>
                <p className="max-w-xll text-left">
                    Here is a list of donations I have made, including the recipient and amount.
                </p>
                <p className="max-w-xll text-left">
                    Currently, there are no donations to display.
                </p>
            </div>
        </div>
    );
}

export default DonationPage;