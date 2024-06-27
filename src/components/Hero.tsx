import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col flex-grow min-h-[calc(100vh-5rem)] w-full shadow-lg">
            <div className="flex flex-1 items-center justify-center bg-cover bg-center bg-opacity-90 min-h-full w-full" style={{  backgroundImage: 'url(/hero.jpeg)' }}>
                <div className="bg-white p-8 m-6 rounded-lg text-center flex items-center flex-col max-w-[40%] shadow-lg">
                    <h1 className="text-6xl text-gray-900 self-start  text-left leading-tight">Generate bundles of flashcards with tailored sentences.</h1>
                    <p className="mt-2 text-l text-gray-700 text-left self-start text-left">
                        Using advanced LLM technology, we transform the personal data you provide into customized flashcards.
                        Complete our survey and purchase a formatted PDF of flashcards through PayPal.
                    </p>
                    <Link href="/about" className="text-green-500 text-l mt-2 self-start text-left">Plus, 50% of all purchases go directly to support Palestine.</Link>
                    <Link href="/q/basic">
                        <button className="bg-green-500 shadow-sm text-white text-lg p-5 rounded mt-8 w-full font-bold hover:bg-green-600 transition duration-200">
                            Buy cards!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}