import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

// react icon
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // navitems array
    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Services', path: 'services' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'FAQ', path: 'faq' },
    ];

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src="/kantijayalogo2.png" alt='logo' className='w-10 inline-block' />
                        <span className='text-[#263238]'>Kantijaya</span>
                    </a>

                    {/* nav items for large device */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link
                                to={path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                key={path}
                                className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* btn for large device */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign Up</button>
                    </div>

                    {/* menu btn for only mobile device */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'
                        >
                            {isMenuOpen ? (
                                <FaXmark className='h-6 w-6' />
                            ) : (
                                <FaBars className='h-6 w-6' />
                            )}
                        </button>
                    </div>
                </div>

                {/* nav items for mobile */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
                    {navItems.map(({ link, path }) => (
                        <Link
                            to={path}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            key={path}
                            className='block text-base text-white hover:text-brandPrimary first:font-medium'
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;