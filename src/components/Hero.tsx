import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col flex-grow min-h-[calc(100vh-5rem)] w-full shadow-lg text-black">
            <div className="flex flex-1 items-center justify-center bg-cover bg-center bg-opacity-90 min-h-full w-full" style={{ backgroundImage: 'url(/hero.jpeg)' }}>
                <div className="bg-white lg:p-6 p-8 md:rounded-lg text-center flex items-stretch flex-col md:w-3/4 lg:w-5/12 shadow-lg">
                    <h1 className="text-2xl lg:text-6xl text-gray-900 self-start text-left mb-2 leading-tight">Generate bundles of personalized flashcards with tailored sentences.</h1>
                    <p className="mt-2 text-l text-gray-700 text-left self-start text-left">
                        Using advanced LLM technology, we transform the personal data you provide into customized flashcards.
                        Complete our survey and receive a formatted PDF of flashcards through email.
                    </p>
                    <p className="mt-2 text-l text-gray-700 text-left self-start text-left">
                        Plus, 50% of all donations go directly to supporting humanitarian efforts worldwide.&nbsp;
                        <Link className="underline text-green-500" href={'/about'}>
                            It's purely a donation, so you can pay as much as you want, or nothing at all.
                        </Link>
                    </p>
                    <Link href="/q/basic">
                        <button className="shadow-sm text-white bg-green-500 font-bold text-lg p-5 rounded my-6 w-[100%] transition duration-200">
                            Take our survey today!
                        </button>
                    </Link>
                    <p className="underline text-[0.8em] italic">
                        <Link href="/terms-of-service">
                            Read terms of service
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}