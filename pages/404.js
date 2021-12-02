import Link from "next/link";
import Image from "next/image";

export default function FourOhFour() {
  const linkStyling = "text-blue-400 hover:text-yellow-500 hover:underline focus:underline focus:outline-none focus:ring focus:ring-gray-400 rounded";

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <div className='max-h-128 w-[36rem] mb-16 px-6' style={{ maxWidth: "100vw" }}>
        <Image src='/assets/branding/AnwitaLogoAlphaGradient.png' layout="responsive" width="500" height="131" alt="Anwita Biosciences Logo" />
      </div>
      <h1 className='text-5xl mb-16 text-center'>404 - Page Not Found</h1>
      <Link href='/'><a className={linkStyling + " text-3xl text-center"}>Go Home</a></Link>
    </div>
  );
}
