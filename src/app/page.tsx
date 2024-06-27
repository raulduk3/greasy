import Flashcard from "@/components/Flashcard";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";

const exampleWords = [
    {
        word_id: 3786,
        word: 'Obfuscate',
        definition: 'Obfuscated; darkened; obscured.',
        part_of_speech: 'adjective',
        example_sentence: 'The meaning of the text was obfuscated by the complex language.'
    },
    {
        word_id: 3789,
        word: 'Oblique',
        definition: 'Not erect or perpendicular; neither parallel to, nor at right angles from, the base; slanting; inclined.',
        part_of_speech: 'adjective',
        example_sentence: 'The sunlight came through the window at an oblique angle.'
    },
    {
        word_id: 3727,
        word: 'Lucid',
        definition: 'Clear; easily understood.',
        part_of_speech: 'adjective',
        example_sentence: 'She gave a lucid account of the event.'
    },
    {
        word_id: 5067,
        word: 'Obsession',
        definition: 'A compulsive or irrational preoccupation.',
        part_of_speech: 'noun',
        example_sentence: 'His obsession with cleanliness was well known.'
    },
    {
        word_id: 3693,
        word: 'Intrepid',
        definition: 'Fearless; bold; brave.',
        part_of_speech: 'adjective',
        example_sentence: 'The intrepid explorer ventured into the unknown.'
    },
    {
        word_id: 4721,
        word: 'Serendipity',
        definition: 'The occurrence of events by chance in a happy or beneficial way.',
        part_of_speech: 'noun',
        example_sentence: 'Their meeting was pure serendipity.'
    }
];

const Home = () => {
    return (
        <>
            <Hero />
            <Banner />
            <h1 className="text-2xl font-semibold pt-8 drop-shadow-lg">Example flashcards</h1>
            <div className="flex flex-col items-stretch flex-wrap w-full justify-center pb-12 p-6 gap-4">
                {exampleWords.map((word) => (
                    <Flashcard key={word.word_id} word={word} />
                ))}
            </div>
        </>
    );
};

export default Home;