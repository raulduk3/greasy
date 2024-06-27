'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [top, setTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    // Detect whether user has scrolled the page down by 10px 
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`fixed w-full text-black z-30 transition duration-300 h-[5rem] ease-in-out ${top ? 'bg-white' : 'bg-white/90 backdrop-blur-sm shadow-lg'}`}>
            <div className="w-full flex h-full mx-auto my-auto px-5 sm:px-6 items-center justify-between w-full">
                <div className="flex items-center align-center justify-between h-16 md:h-20 grow flex-1">
                    <h2 className="shrink-0 mr-4 text-2xl font-bold tracking-tight md:tracking-tighter leading-tight">
                        <Link href="/" className="text-black text-[2.8rem] py-2 md:p-2 block" aria-label="GREasy">
                            GR<span className='text-green-500'>Easy</span>
                        </Link>
                    </h2>
                    <nav className="hidden md:flex space-x-6 px-2">
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </nav>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-2xl px-2">
                            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <nav className={`md:hidden ${top ? 'bg-white' : 'bg-white/90 backdrop-blur-sm'} shadow-lg`}>
                    <ul className="flex flex-col items-center space-y-4 py-4 px-2">
                        <li>
                            <Link href="/about" className="block hover:underline" onClick={toggleMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="block hover:underline" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block hover:underline" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;