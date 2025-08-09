import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const myBlack = "#242424"

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            closeMenu();
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="fixed w-full bg-myWhite text-myBlack shadow-md font-otterco z-10">
            <div className=" mx-auto flex justify-between items-center py-4 px-6 md:px-12">
                <Link to={"home"} smooth={true}
                    duration={500} className="text-xl font-bold text-myBlack z-10 cursor-pointer">
                    <img src="/images/logo.webp" width={35} alt="logo" className='rounded-full border-2 border-myWhite shadow-lg' />
                </Link>
                <div className="md:hidden z-10" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} color={myBlack} onClick={closeMenu} /> : <FaBars size={24} color={myBlack} />}
                </div>
                <ul className={`fixed md:static top-0 left-0 w-full md:w-auto h-full md:h-auto bg-myWhite md:bg-inherit flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                    <li className="mt-20 md:mt-0">
                        <Link to={"home"}
                            smooth={true}
                            duration={500}
                            className="text-lg text-myBlack cursor-pointer" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to={"projects"}
                            smooth={true}
                            duration={500}
                            className="text-lg text-myBlack cursor-pointer" onClick={closeMenu}>Projects</Link>
                    </li>
                    <li>
                        <Link to={"skills"}
                            smooth={true}
                            duration={500}
                            className="text-lg text-myBlack cursor-pointer" onClick={closeMenu}>Skills</Link>
                    </li>
                    <li>
                        <Link to={"contact"}
                            smooth={true}
                            duration={500}
                            className="text-lg cursor-pointer text-myBlack" onClick={closeMenu}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
