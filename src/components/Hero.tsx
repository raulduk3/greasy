import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col flex-grow min-h-[calc(100vh-5rem)] w-full shadow-lg">
            <div className="flex flex-1 items-center justify-center bg-cover bg-center bg-opacity-90 min-h-full w-full" style={{ backgroundImage: 'url(/hero.jpeg)' }}>
                <div className="bg-white lg:p-8 p-12 md:rounded-lg text-center flex items-center flex-col w-auto md:w-[35%] shadow-lg">
                    <h1 className="text-2xl lg:text-6xl text-gray-900 self-start text-left mb-2 leading-tight">Generate bundles of personalized flashcards with tailored sentences.</h1>
                    <p className="mt-2 text-l text-gray-700 text-left self-start text-left">
                        Using advanced LLM technology, we transform the personal data you provide into customized flashcards.
                        Complete our survey and receive a formatted PDF of flashcards through email.
                    </p>
                    <Link href={'/about'}>
                        <p className="mt-2 text-green-500 text-l text-gray-700 text-left self-start text-left">
                            Plus, 50% of all donations go directly to supporting humanitarian efforts worldwide. It's purely a donation, so you can pay as much as you want, or nothing at all.
                        </p>
                    </Link>
                    <Link href="/q/basic">
                        <button className="bg-green-500 shadow-sm text-white text-lg p-5 rounded mt-8 w-full font-bold hover:bg-green-600 transition duration-200">
                            Generate for free!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}