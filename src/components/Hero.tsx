import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex items-center justify-center bg-cover bg-center bg-opacity-90 w-full" style={{  backgroundImage: 'url(/hero.jpeg)' }}>
            <div className="bg-white p-8 m-6 my-52 rounded-lg text-center flex items-center flex-col max-w-lg shadow-lg">
                <h1 className="text-3xl text-gray-900 self-start  text-left">Generate bundles of flashcards with tailored sentences</h1>
                <p className="mt-2 text-l text-gray-700 text-left self-start text-left">
                    Using advanced LLM technology, we transform the personal data you provide into up to one hundred customized flashcards at your chosen difficulty level.
                    Complete our survey and receive a formatted PDF of flashcards via email.
                </p>
                <Link href="/about" className="text-green-500 text-l mt-2 self-start text-left">Plus, 50% of all purchases go directly to support Palestine.</Link>
                <button className="bg-green-500 shadow-sm text-white text-lg  p-5 rounded mt-4 w-full font-bold hover:bg-green-600 transition duration-200">
                    Buy cards!
                </button>
            </div>
        </div>
    );
}