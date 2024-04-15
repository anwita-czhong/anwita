import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.scss";

const navbarButtonWrapperStyling = "navbar:inline-flex navbar:flex-1 navbar:w-auto w-full items-center justify-center";
const navbarButtonStyling = "rounded text-blue-900 items-center justify-center px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 hover:text-orange focus:text-orange focus:ring focus:ring-gray-300 outline-none no-underline";

const links = [
  {
    "display": "Home",
    "anchor":  "about",
  },
  {
    "display": "Science",
    "anchor":  "science",
  },
  {
    "display": "Pipeline",
    "anchor":  "pipeline",
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
];

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
    <header className="sticky top-0 z-50">
      <nav className='flex items-center max-h-screen flex-wrap p-3 bg-white w-full content-around z-10'>
        <div className='hidden navbar:inline-flex' style={{ minWidth: "0.5em", width: "10%" }}></div>
        <button aria-label="Back To Top" onClick={toTop} name="Home Button" className='inline-flex items-center mr-4 focus:outline-none focus:ring focus:ring-gray-300 rounded'>
          <div className="h-12 max-h-12 items-center" style={{ width: "183.2px", maxWidth: "50vw" }}>
            <Image src="/assets/branding/AnwitaLogoAlphaGradient.png" width="500" height="131" alt="Anwita Biosciences" />
          </div>
        </button>
        <button
          aria-label="Open Navigation"
          className='inline-flex px-3 py-2 hover:bg-blue-900 rounded navbar:hidden text-blue-900 ml-auto hover:text-white'
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
        <div className='hidden navbar:inline-flex navbar:flex-1' style={{ width: "15%" }}></div>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full navbar:inline-flex navbar:flex-grow navbar:w-auto my-2 navbar:my-0 text-xl navbar:text-2xl flex-shrink overflow-y-auto`} style={{ maxHeight: "calc(90vh - 1rem)" }}>
          <div className='navbar:inline-flex navbar:flex-grow navbar:flex-row navbar:mr-0 navbar:w-auto w-full navbar:items-center items-end flex flex-col navbar:h-auto space-y-5 navbar:space-y-0'>
            {links.map(function(link, index) {
              return <div key={index} className={navbarButtonWrapperStyling}>
                <a href={`#${link.anchor}`} tabIndex={0} className={navbarButtonStyling} onClick={() => setActive(false)}>
                  {link.display}
                </a>
              </div>;
            })}
          </div>
        </div>
        <div className='hidden navbar:inline-flex' style={{ minWidth: "0.5em", width: "10%" }}></div>
      </nav>
    </header>
  );
};
