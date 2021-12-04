import Link from "next/link";

export const Footer = () => {
  const footerItemContainerClasses = "flex flex-col text-center m-4 flex-initial w-full lg:flex-1";
  const linkStyling = "text-blue-400 hover:text-yellow-500 hover:underline focus:underline focus:outline-none focus:ring focus:ring-gray-400 rounded";

  return (
    <div id='footer'>
      <nav className='flex flex-wrap flex-row items-start justify-center p-2 bg-blue-900' style={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
        <div className={footerItemContainerClasses}>
          <h1 className='text-white text-2xl font-bold'>About</h1>
          <hr className='my-3 h-px border-1 border-gray-400'></hr>
          <p className='text-white font-light'>
            <Link href='#about'><a className={linkStyling}>Anwita Biosciences</a></Link> is a biopharmaceutical company headquartered in the San Francisco Bay Area.</p>
        </div>
        <div className={footerItemContainerClasses}>
          <h1 className='text-white text-2xl font-bold'>Careers</h1>
          <hr className='my-3 h-px border-1 border-gray-400'></hr>
          <p className='text-white font-light'>Visit our <Link href='#careers'><a className={linkStyling}>careers</a></Link> page for listings.</p>
        </div>
        <div className={footerItemContainerClasses}>
          <h1 className='text-white text-2xl font-bold'>Contact Us</h1>
          <hr className='my-3 h-px border-1 border-gray-400'></hr>
          <p className='text-white font-light'>
                        Phone: <Link href='tel:1-650-600-9828'><a className={linkStyling}>(650) 600-9828</a></Link>
            <br/>
                        Email: <Link href='mailto:contact@anwitabio.com'><a className={linkStyling}>contact@anwitabio.com</a></Link>
          </p>
        </div>
        <div className={footerItemContainerClasses}>
          <h1 className='text-white text-2xl font-bold'>Address</h1>
          <hr className='my-3 h-px border-1 border-gray-400'></hr>
          <p className='text-white font-light'>
                        300 Industrial Road<br/>
                        San Carlos, CA 94070
          </p>
        </div>
      </nav>
    </div>
  );
};