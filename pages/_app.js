import '../styles/main.scss';
import '../styles/custom.scss';
import Head from 'next/head';
import { Navbar } from '../components/header';
import { Footer } from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Home | Anwita Biosciences Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>
      
      <div style={{height: '64px'}}></div>

      <Component {...pageProps} />
      
      <footer>
        <Footer />
      </footer>
    </div>
  ) 
}

export default MyApp
