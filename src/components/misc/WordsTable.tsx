import React, { useEffect, useState } from 'react';

interface Word {
    word_id: number;
    word: string;
    part_of_speech: string;
    definition: string;
    example_sentence: string;
}

const WordTable: React.FC = () => {
    const [words, setWords] = useState<Word[]>([]);
    const [search, setSearch] = useState<string>('');
    const [editingWord, setEditingWord] = useState<Word | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [wordsPerPage] = useState<number>(10);
    const [currentPaginationStart, setCurrentPaginationStart] = useState<number>(1);

    useEffect(() => {
        const fetchWords = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch('/api/words', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                const sortedWords = data.sort((a: Word, b: Word) => a.word.localeCompare(b.word));
                setWords(sortedWords);
            } catch (error) {
                console.error('Error fetching words:', error);
            }
        };

        fetchWords();
    }, []);

    const handleEditClick = (word: Word) => {
        setEditingWord(word);
    };

    const handleDeleteClick = async (wordId: number) => {
        const token = localStorage.getItem('token');
        try {
            await fetch(`/api/words/${wordId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            setWords(words.filter(word => word.word_id !== wordId));
        } catch (error) {
            console.error('Error deleting word:', error);
        }
    };

    const handleSaveClick = async () => {
        if (editingWord) {
            const token = localStorage.getItem('token');
            try {
                await fetch(`/api/words/${editingWord.word_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(editingWord),
                });
                setWords(words.map(word => word.word_id === editingWord.word_id ? editingWord : word));
                setEditingWord(null);
            } catch (error) {
                console.error('Error updating word:', error);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editingWord) {
            setEditingWord({
                ...editingWord,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const filteredWords = words.filter(word => 
        word.word.toLowerCase().includes(search.toLowerCase()) || 
        word.part_of_speech.toLowerCase().includes(search.toLowerCase())
    );

    const indexOfLastWord = currentPage * wordsPerPage;
    const indexOfFirstWord = indexOfLastWord - wordsPerPage;
    const currentWords = filteredWords.slice(indexOfFirstWord, indexOfLastWord);

    const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
    const maxPageButtons = 10;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleNextPagination = () => {
        if (currentPaginationStart + maxPageButtons - 1 < totalPages) {
            setCurrentPaginationStart(currentPaginationStart + maxPageButtons);
        }
    };

    const handlePrevPagination = () => {
        if (currentPaginationStart > 1) {
            setCurrentPaginationStart(currentPaginationStart - maxPageButtons);
        }
    };

    return (
        <div className='text-black max-w-full overflow-scroll'>
            <h2 className="text-xl text-white mb-4">Manage Words</h2>
            <input 
                type="text" 
                placeholder="Search..." 
                value={search} 
                onChange={handleSearchChange} 
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <table className="min-w-full bg-white text-black p-2 border border-gray-300 rounded">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Word</th>
                        <th className="py-2 px-4 border-b">Part of Speech</th>
                        <th className="py-2 px-4 border-b">Definition</th>
                        <th className="py-2 px-4 border-b">Example Sentence</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentWords.map(word => (
                        <tr key={word.word_id}>
                            <td className="py-2 px-4 border-b">
                                {editingWord && editingWord.word_id === word.word_id ? (
                                    <input
                                        type="text"
                                        name="word"
                                        value={editingWord.word}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded"
                                    />
                                ) : (
                                    word.word
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editingWord && editingWord.word_id === word.word_id ? (
                                    <input
                                        type="text"
                                        name="part_of_speech"
                                        value={editingWord.part_of_speech}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded"
                                    />
                                ) : (
                                    word.part_of_speech
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editingWord && editingWord.word_id === word.word_id ? (
                                    <input
                                        type="text"
                                        name="definition"
                                        value={editingWord.definition}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded"
                                    />
                                ) : (
                                    word.definition
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editingWord && editingWord.word_id === word.word_id ? (
                                    <input
                                        type="text"
                                        name="example_sentence"
                                        value={editingWord.example_sentence}
                                        onChange={handleChange}
                                        className="p-2 border border-gray-300 rounded"
                                    />
                                ) : (
                                    word.example_sentence
                                )}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {editingWord && editingWord.word_id === word.word_id ? (
                                    <button 
                                        onClick={handleSaveClick} 
                                        className="text-blue-500 underline p-2 bg-blue-100 hover:bg-blue-200 rounded"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button 
                                        onClick={() => handleEditClick(word)} 
                                        className="text-blue-500 underline p-2 bg-blue-100 hover:bg-blue-200 rounded"
                                    >
                                        Edit
                                    </button>
                                )}
                                <button 
                                    onClick={() => handleDeleteClick(word.word_id)} 
                                    className="text-red-500 underline p-2 bg-red-100 hover:bg-red-200 rounded ml-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                {currentPaginationStart > 1 && (
                    <button 
                        onClick={handlePrevPagination} 
                        className="px-3 py-1 mx-1 border border-gray-300 rounded bg-white text-black hover:bg-gray-100"
                    >
                        &laquo;
                    </button>
                )}
                {Array.from({ length: Math.min(maxPageButtons, totalPages - currentPaginationStart + 1) }, (_, index) => (
                    <button 
                        key={currentPaginationStart + index} 
                        onClick={() => paginate(currentPaginationStart + index)} 
                        className={`px-3 py-1 mx-1 border border-gray-300 rounded ${currentPage === currentPaginationStart + index ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                        {currentPaginationStart + index}
                    </button>
                ))}
                {currentPaginationStart + maxPageButtons - 1 < totalPages && (
                    <button 
                        onClick={handleNextPagination} 
                        className="px-3 py-1 mx-1 border border-gray-300 rounded bg-white text-black hover:bg-gray-100"
                    >
                        &raquo;
                    </button>
                )}
            </div>
        </div>
    );
};

export default WordTable;