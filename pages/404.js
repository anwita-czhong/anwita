import Link from "next/link";

export default function FourOhFour() {
  const linkStyling = "text-blue-400 hover:text-yellow-500 hover:underline focus:underline focus:outline-none focus:ring focus:ring-gray-400 rounded";

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <img src='/assets/branding/AnwitaLogoAlphaGradient.png' className='max-h-128 mb-16' style={{ maxWidth: "95vw" }} />
      <h1 className='font-bold text-5xl mb-16 text-center'>404 Page Not Found</h1>
      <Link className={linkStyling + " text-3xl text-center"} href='/'>Go Home</Link>
    </div>
  );
}
