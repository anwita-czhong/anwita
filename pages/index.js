import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";
import { People } from "../components/people";
import Pipelines from "../components/Pipeline";

export default function Home(props) {
  const sectionWrapperClasses = "py-6";

  return (
    <div>
      <Head>
        <title>Anwita Biosciences Inc.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Anwita Biosciences, Inc. is a clinical stage biopharmaceutical company headquartered in the San Francisco Bay Area. Our mission is to deliver transformative treatment options to improve the lives of patients with cancer and autoimmune diseases." />
        <meta name="keywords" content="Anwita, Bioscience, Anwita Bioscience, Anwita Bio" />
      </Head>

      <Navbar />

      <main>
        <div id='banner-wrapper' className='bg-home-banner bg-cover bg-center flex content-center justify-center h-[300px] lg:h-[400px]'>
          <div
            className='flex flex-col w-full flex-none text-center content-center justify-center items-center space-y-2' style={{ backgroundColor: "rgba(54, 58, 69, 0.4)" }}
          >
            <h1 className='text-4xl sm:text-6xl lg:text-8xl text-white font-bold' style={{ textShadow: "4px 4px rgba(0,0,0, 0.8)" }}>Anwita Biosciences</h1>
          </div>
        </div>

        <div id='primary-content-wrapper' className='py-2 mx-auto text-blue-900' style={{ width: "1200px", maxWidth: "80vw" }}>

          <div className={sectionWrapperClasses}>
            <span id='about' className='anchor'/>
            <div className='lg:grid grid-cols-3 gap-8'>
              <div className='flex flex-col col-span-2 mb-8'>
                <h1 className='text-center text-4xl mb-4 font-semibold'>Our Mission</h1>
                <p className='place-self-center text-xl max-w-prose mb-6'>
                  Anwita Biosciences, Inc. is a clinical stage biopharmaceutical company headquartered in the San Francisco Bay Area. We are advancing our product pipeline of improved cytokines (Exenokines, Mableukins etc) and tumor-targeting antibody drug conjugates. Our lead product, Exenokine-21, has been accepted by China NMPA and the US FDA to initiate clinical studies.
                </p>
                <p className='place-self-center text-xl max-w-prose mb-6'>
                  Our mission is to deliver transformative treatment options to improve the lives of patients with cancer and autoimmune diseases. We specialize in the discovery and development of optimized immunotherapeutics, leveraging our core expertise in cancer immunotherapy, bioinformatics, and target-based protein evolution.
                </p>
              </div>
              <div className="relative lg:relative w-full h-96">
                <Image src='/assets/graphics/about.webp' alt="" layout="fill" className='object-scale-down w-full h-96'/>
              </div>
            </div>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses + " flex flex-col items-start"}>
            <span id='science' className='anchor'/>
            <h1 className='text-center text-4xl mb-6 font-semibold place-self-center'>Science</h1>
            <div className="flex flex-col place-self-center">
              <div className='w-full place-self-center' style={{ maxWidth: "55rem" }}>
                <Image src='/assets/graphics/anwitaTech.webp'
                  width='1620' height = '862' alt='A diagram showcasing Anwita&apos;s technology workflow.' />
              </div>

              <p className='text-xl my-4 max-w-[75ch] place-self-center'>
                Anwita’s core technology integrates structure-guided AccuKine cytokine evolution and AccuBody discovery of full spectrum nanobodies and antibodies, enabling the development of fully optimized cytokine fusions with superior therapeutic potential, favorable safety profile and great developmentability. Our unique product portfolio includes half-live extended Exenokines, immune cell- or tumor cell-targeting Mableukines, and bi-functional Duoleukins. These new generation of cytokines could serve as powerful novel immune therapies with a wide range of applications in treating patients with cancers and autoimmune diseases.
              </p>

            </div>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <span id='pipeline' className='anchor'/>
            <h1 className='text-center text-4xl mb-4 font-semibold'>Pipeline</h1>
            <Pipelines
            // TODO: Load from AirTables
              pipelines={props.programs}
            />
            <p className="text-sm my-4">Click or tap on any Program to read more about that project.</p>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <People sectionWrapperClasses={sectionWrapperClasses} />

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <span id='news' className='anchor'/>
            <h1 className='text-center text-4xl mb-6 font-semibold'>News</h1>
            <div className='text-xl grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
              {/* TODO: Refactor into actual React components */}
              <div className='flex flex-col bg-gray-100 p-8 rounded-lg'>
                <p className='mb-4'><b>Date:</b> October 29<sup>th</sup>, 2021</p>
                <p className='mb-4'>Anwita Biosciences, Inc. Announces Initiation of first-in-human Phase 1 clinical trial of Exenokine-21 for monotherapy and combination, earns $2.5 million milestone for IND acceptance from Partner Shanghai Junshi Biosciences</p>
                <p className="mt-auto"><b><a className={linkStyling} target='_blank' href='/assets/news/pr-004.pdf'>Press Release</a></b></p>
              </div>
              <div className='flex flex-col bg-gray-100 p-8 rounded-lg'>
                <p className='mb-4'><b>Date:</b> June 28<sup>th</sup>, 2021</p>
                <p className='mb-4'>Anwita Biosciences, Inc. Completes $18.5 Million Series B Financing to Advance Its Improved Cytokines (Exenokines) And Tumor Targeting Antibody Drug Conjugates</p>
                <p className="mt-auto"><b><a className={linkStyling} target='_blank' href='/assets/news/pr-003.pdf'>Press Release</a></b></p>
              </div>
              <div className='flex flex-col bg-gray-100 p-8 rounded-lg'>
                <p className='mb-4'><b>Date:</b> September 30<sup>th</sup>, 2020</p>
                <p className='mb-4'>Anwita Biosciences and Shanghai Junshi Biosciences entered into a new collaboration in which Junshi was granted the exclusive rights to Anwita&apos;s Exenokine-2, an improved IL-2 variant with extended half-life, in the Greater China territories.</p>
                <p className="mt-auto"><b><a className={linkStyling} target='_blank' href='/assets/news/pr-002.pdf'>Press Release</a></b></p>
              </div>
              <div className='flex flex-col bg-gray-100 p-8 rounded-lg'>
                <p className='mb-4'><b>Date:</b> June 24<sup>th</sup>, 2019</p>
                <p className='mb-4'>Strategic collaboration between Anwita Biosciences and Shanghai Junshi Biosciences whereby Junshi was granted the exclusive rights to develop and commercialize Anwita&apos;s Exenokine-21 program in the Greater China territories.</p>
                <p className="mt-auto"><b><a className={linkStyling} target='_blank' href='/assets/news/pr-001.pdf'>Press Release</a></b></p>
              </div>
            </div>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <span id='careers' className='anchor'/>
            <h1 className='text-center text-4xl my-2 font-semibold'>Careers</h1>
            <hr className='mt-3 h-px border-1 border-gray-400 w-1/3 m-auto'></hr>
            <div className="lg:grid grid-cols-left-uneven gap-2">
              <div className="my-4">
                <h2 className='text-3xl my-4 italic font-semibold text-center'>Working at Anwita</h2>
                <p className='text-xl'>We are always seeking exceptional talent that is passionate about making a difference in the lives of patients with cancer or autoimmune disorders. If you share our mission, and are interested in joining our team, please reach out to us via email at <a href='mailto:contact@anwitabio.com'>contact@anwitabio.com</a>.</p>
              </div>
              <div className="my-4">
                <h2 className='text-center text-3xl my-4 italic font-semibold'>Benefits</h2>
                <div className='text-xl px-4 lg:px-8'>
                  <ul className='list-disc list-inside'>
                    <li>Competitive compensation</li>
                    <li>Stock options at all levels</li>
                    <li>401(K) plan</li>
                    <li>Official holidays</li>
                    <li>Generous paid time off (PTO)</li>
                    <li>Sick days</li>
                    <li>Medical plan</li>
                    <li>Dental plan</li>
                    <li>Visional plan</li>
                    <li>Life insurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <span id='contact' className='anchor'/>
            <h1 className='text-center text-4xl mb-6 font-semibold'>Contact</h1>
            <div className='flex flex-col sm:flex-row content-evenly justify-center gap-8'>
              {/* <iframe className="w-96 h-48" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.5229423824994!2d-122.26270389781278!3d37.51492603078649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f98aa79bc4f55%3A0xd47219d8b27ce42a!2sAnwita%20Biosciences!5e0!3m2!1sen!2sus!4v1632246025164!5m2!1sen!2sus" style={{width: "35rem", height: "30rem", maxWidth: "95%", maxHeight: "35rem", border: 0}} allow="fullscreen" allowFullScreen={true} loading="lazy"></iframe> */}
              <div className='sm:text-right'>
                <p>Company Address: <br/><a href='https://www.google.com/maps/place/300+Industrial+Rd,+San+Carlos,+CA+94070/@37.5149181,-122.2641003,17z/data=!3m1!4b1!4m5!3m4!1s0x808f98aa79063b39:0x9744f7cb0ddf62fa!8m2!3d37.5149181!4d-122.2619063' target="_blank" rel="noreferrer noopener">300 Industrial Road,<br/>San Carlos, CA 94070</a></p>
                <p>Phone:&nbsp;<a href='tel:1-650-600-9828' target='_blank' rel="noreferrer">(650) 600-9828</a></p>
                <p>Email:&nbsp;<a href='mailto:contact@anwitabio.com'>contact@anwitabio.com</a></p>
              </div>
              <div>
                <p>Shanghai Division: <br/><a href='https://www.google.com/maps/place/China,+Shang+Hai+Shi,+Pu+Dong+Xin+Qu,+%E7%A7%80%E6%B5%A6%E8%B7%AF2555%E5%8F%B7/@31.1302446,121.6053713,17z/data=!3m1!4b1!4m5!3m4!1s0x35b2788b3666b481:0x462a91e8462cbf6d!8m2!3d31.13024!4d121.60756' target="_blank" rel="noreferrer noopener">11/F Building E6,<br/>2555 Xiupu Road<br/>Pudong New Area, Shanghai</a></p>
                <p>Phone:&nbsp;<a href='tel:86-21-58080598' target='_blank' rel="noreferrer">86(21)-58080598</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

import { getAllPrograms } from "../utils/airtable/program";

export async function getStaticProps(context) {

  const programs = await getAllPrograms();
  console.log(programs);
  return {
    props: {
      programs: programs,
    },
    revalidate: 600, // seconds
  };
}
