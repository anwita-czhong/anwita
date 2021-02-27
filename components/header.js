import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const navbarButtonWrapperStyling = 'lg:inline-flex lg:flex-1 lg:w-auto w-full items-center justify-center';
    const navbarButtonStyling = 'rounded text-blue-900 lg:font-bold items-center justify-center px-3 py-2 hover:bg-gray-300 hover:text-blue focus:ring focus:ring-gray-300 outline-none';

    return (
        <div>
            <nav className='fixed flex items-center flex-wrap p-3 bg-white w-full content-around'>
                <div className='hidden lg:inline-flex' style={{minWidth: '0.5em', width: '10%'}}></div>
                <button onClick={toTop} className='inline-flex items-center mr-4 focus:outline-none focus:ring focus:ring-gray-300 rounded'>
                    <img src="/assets/branding/AnwitaLogoAlphaGradient.png" alt="Anwita Biosciences" className="max-h-12" style={{maxWidth: '50vw'}}/>
                </button>
                <button 
                    className='inline-flex px-3 py-2 hover:bg-blue-900 rounded lg:hidden text-blue-900 ml-auto hover:text-white'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div className='hidden lg:inline-flex lg:flex-1' style={{width: '15%'}}></div>
                <div 
                    className={`${
                        active ? '': 'hidden'
                    } w-full lg:inline-flex lg:flex-grow lg:w-auto my-2 lg:my-0 text-xl lg:text-2xl`}>
                    <div className='lg:inline-flex lg:flex-grow lg:flex-row lg:mr-0 lg:w-auto w-full lg:items-center items-end flex flex-col lg:h-auto space-y-5 lg:space-y-0'>
                        <div className={navbarButtonWrapperStyling}>
                            <Link href='#about'>
                                <a className={navbarButtonStyling} onClick={() => setActive(false)}>
                                    Home
                                </a>
                            </Link>
                        </div>
                        <div className={navbarButtonWrapperStyling}>
                            <Link href='#pipeline'>
                                <a className={navbarButtonStyling} onClick={() => setActive(false)}>
                                    Pipeline
                                </a>
                            </Link>
                        </div>
                        <div className={navbarButtonWrapperStyling}>
                            <Link href='#technology'>
                                <a className={navbarButtonStyling} onClick={() => setActive(false)}>
                                    Technology
                                </a>
                            </Link>
                        </div>
                        <div className={navbarButtonWrapperStyling}>
                            <Link href='#news'>
                                <a className={navbarButtonStyling} onClick={() => setActive(false)}>
                                    News
                                </a>
                            </Link>
                        </div>
                        <div className={navbarButtonWrapperStyling}>
                            <Link href='#careers'>
                                <a className={navbarButtonStyling} onClick={() => setActive(false)}>
                                    Careers
                                </a>
                            </Link>
                        </div>
                        <div className={navbarButtonWrapperStyling}>
                            <Link href='#contact'>
                                <a className={navbarButtonStyling} onClick={() => setActive(false)}>
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:inline-flex' style={{minWidth: '0.5em', width: '10%'}}></div>
            </nav>
        </div>
    )
}