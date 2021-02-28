import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';

const navbarButtonWrapperStyling = 'lg:inline-flex lg:flex-1 lg:w-auto w-full items-center justify-center';
const navbarButtonStyling = 'rounded text-blue-900 items-center justify-center px-3 py-2 hover:bg-gray-300 hover:text-blue focus:ring focus:ring-gray-300 outline-none';

const links = [
    {
        "display": "Home",
        "anchor":  "about",
    },
    {
        "display": "Pipeline",
        "anchor":  "pipeline",
    },
    {
        "display": "Technology",
        "anchor":  "technology",
    },
    {
        "display": "Team",
        "anchor":  "team",
    },
    {
        "display": "News",
        "anchor":  "news",
    },
    {
        "display": "Careers",
        "anchor":  "careers",
    },
    {
        "display": "Contact",
        "anchor":  "contact",
    },
]

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    

    return (
        <div>
            <nav className='fixed flex items-center flex-wrap p-3 bg-white w-full content-around z-10'>
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
                        {links.map(function (link, index) {
                            return <div key={index} className={navbarButtonWrapperStyling}>
                                <Link to={`${link.anchor}`} smooth={true} duration={250} className={navbarButtonStyling} onClick={() => setActive(false)}>
                                    {link.display}
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
                <div className='hidden lg:inline-flex' style={{minWidth: '0.5em', width: '10%'}}></div>
            </nav>
        </div>
    )
}