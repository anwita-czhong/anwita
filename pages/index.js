import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/header";
import { Footer } from "../components/footer";
import { People } from "../components/people";
import Pipelines from "../components/Pipeline";

export default function Home() {
  const sectionWrapperClasses = "my-6 py-6";

  const linkStyling = "text-blue-400 hover:text-yellow-500 hover:underline focus:underline focus:outline-none focus:ring focus:ring-gray-400 rounded";

  return (
    <div>
      <Head>
        <title>Anwita Biosciences Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div id='banner-wrapper' className='bg-home-banner bg-cover bg-center flex content-center justify-center h-third-screen'>
          <div
            className='flex flex-col w-full flex-none text-center content-center justify-center items-center space-y-2' style={{ backgroundColor: "rgba(54, 58, 69, 0.4)" }}
          >
            <h1 className='text-4xl sm:text-6xl lg:text-8xl text-white font-bold' style={{ textShadow: "4px 4px rgba(0,0,0, 0.8)" }}>Anwita Biosciences</h1>
          </div>
        </div>

        <div id='primary-content-wrapper' className='py-2 mx-auto text-blue-900' style={{ width: "1200px", maxWidth: "80vw" }}>

          <div className={sectionWrapperClasses}>
            <span id='about' className='anchor'/>
            <h1 className='text-center text-4xl mb-4 font-semibold'>Our Mission</h1>
            <div className='lg:grid grid-cols-3 gap-8'>
              <div className='col-span-2 mb-8'>
                <p className='text-xl'>
                    Anwita Biosciences, Inc. is an emerging biopharmaceutical company headquartered in the San Francisco Bay Area.<br/><br/>
                    Our mission is to deliver transformative treatment options to improve the lives of patients with cancer and autoimmune diseases. We specialize in the discovery and development of optimized immunotherapeutics, leveraging our core expertise in cancer immunotherapy, bioinformatics, and structure-based protein engineering.<br/><br/>
                    We are advancing our product pipeline of improved cytokines (Exenokines<sup>TM</sup>) and tumor targeting antibody drug conjugates. Our lead product is expected to enter clinical trials in 1H 2021.
                </p>
              </div>
              <div className="relative lg:relative w-full h-96">
                <Image src='/assets/graphics/about.webp' alt="" layout="fill" className='object-scale-down w-full h-96'/>
              </div>
            </div>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses + " flex flex-col items-start"}>
            <span id='technology' className='anchor'/>
            <h1 className='text-center text-4xl mb-2 font-semibold place-self-center'>Our Approach</h1>
            <br/><br/>
            <p className='text-xl'>
                Exenokines<sup>TM</sup> are proprietary cytokines designed using Anwita Biosciences’ patented platform technology.  Our modular design enables accelerated development of a diversified portfolio of cytokine-based products with improved pharmaceutical properties.
            </p>
            <div className='my-12 w-full place-self-center' style={{ maxWidth: "44rem" }}>
              <Image src='/assets/graphics/tech-01.jpg'
                width='100%' height = '60%' layout='responsive' objectFit='contain' className='object-scale-down' alt='Tech 01' />
            </div>
            <p className='text-xl'>
              Our scientists are developing a suite of innovative ADC technologies and payloads. The company is advancing a pipeline of tumor targeting ADCs with enhanced efficacy <i>in vivo</i>.
            </p>
            <div className='my-12 w-full place-self-center' style={{ maxWidth: "44rem" }}>
              <Image src='/assets/graphics/tech-02.jpg'
                width='100%' height = '40%' layout='responsive' objectFit='contain' className='object-scale-down' alt='Tech 02' />
            </div>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <span id='pipeline' className='anchor'/>
            <h1 className='text-center text-4xl mb-4 font-semibold'>Pipeline</h1>
            <p className="text-sm my-4">Click or tap on any Program to read more about that project.</p>
            <Pipelines
              pipelines={[
                // Progress will be rounded to the nearest multiple of 5
                {
                  name: "Exenokine&#8203;-21",
                  description: "JS014 is an Exenokine-21 molecule being developed as an IV infusion treatment for patients with melanoma, renal cell carcinoma, non-small cell lung cancer, breast cancer and other tumors either alone or in combination with immune checkpoint inhibitors. The antitumor activities of JS014 have been demonstrated in multiple mouse tumor models, both as a superior single agent when compared to the unmodified rhIL-21 and as an effective combined agent potentiating the efficacy of immunotherapies. JS014 has recently received IND acceptance from the FDA. Anwita plans to conduct a first-in-human, dose-escalation and expansion Phase 1 clinical trial to evaluate the safety and efficacy of JS14 in cancer patients in Q1 2022. Shanghai Junshi Biosciences has exclusive rights to Anwita's Exenokine-21, JS014, in the Greater China territories.",
                  target: "IL-21",
                  indication: "Solid Tumors",
                  progress: 80,
                  partnership: "top-alliance",
                },
                {
                  name: "Exenokine&#8203;-2",
                  description: "RT003 is a systemically delivered Exenokine-2 molecule being developed to minimize the severe toxicity observed with recombinant IL-2 therapy while maximizing the clinical benefit as a monotherapy or in combination with immune checkpoint inhibitors in multiple tumor types. Key features of RT003 include preferential activation of the &beta;&gamma;-IL-2 receptor and extension of half-life for an improved systemic exposure. In preclinical studies, RT003 exhibits potent antitumor and PD activities with a favorable pharmacokinetic and tolerability profile. Pharmacological activity of RT003 is driven by the selective activation and expansion of effector T cells. Shanghai Junshi Biosciences has exclusive rights to Anwita's Exenokine-2, RT003, in the Greater China territories.",
                  target: "IL-2",
                  indication: "Solid Tumors",
                  progress: 60,
                  partnership: "top-alliance",
                },
                {
                  name: "Mableukin&#8203;-2PD1",
                  description: "Mableukine2-PD1 is a targeted fusion protein comprised of an anti-PD1 antibody and a potency optimized IL-2. The IL-2 component is engineered to have significantly lower toxicity compared to the simple “no-alpha” IL-2. The anti-PD1 antibody component of the fusion protein serves not only to block the interaction between PD1 and PD-L1 but also functions to direct optimized IL-2 to the desired cell populations. Leveraging on the function of PD1 and IL-2 signaling pathway to selectively stimulate effector T cells, Mableukine2-PD1 exhibits impressive antitumor and PD activities with an excellent pharmacokinetic and low systematic toxicity profile.",
                  target: "PD-1 and IL-2",
                  indication: "Solid Tumors",
                  progress: 55,
                },
                {
                  name: "MSLN&#8203;-MMAE",
                  description: "MSLN-MMAE is a novel mesothelin (MSLN)-directed antibody-drug conjugate (ADC) composed of a humanized anti-MSLN monoclonal antibody coupled to the potent microtubule-disrupting agent monomethyl auristatin E (MMAE). Specific binding to tumor cells that overexpress MSLN, MSLN-MMAE induced cell death in vitro in a dose-dependent manner and significantly inhibited the growth of several target-expressing xenograft tumor models. We plan to further develop our lead molecule for the treatment of patients with MSLN-expressing tumors such as mesotheliomas, pancreatic cancer and ovarian cancer.",
                  target: "Meso&shy;thelin",
                  indication: "Solid Tumors",
                  progress: 40,
                },
                {
                  name: "B7H3&#8203;-MMAE",
                  description: "B7H3-MMAE, an antibody-drug conjugate (ADC) targeting the human B7H3 protein, is comprised of monomethyl auristatin E (MMAE) conjugated to a humanized anti-B7H3 antibody. In vitro, B7H3-MMAE exhibits cytotoxicity towards B7H3-positive human tumor cell lines.  In vivo, B7H3-MMAE demonstrates potent antitumor activity in preclinical tumor models of breast, ovarian, and lung cancer. Our study provides evidence of a potentially favorable therapeutic index and supports the development of B7H3-MMAE for the treatment of solid cancers.",
                  target: "B7H3",
                  indication: "Solid Tumors",
                  progress: 40,
                },
                {
                  name: "AWT&#8203;-024",
                  description: "IL-36 cytokines and their receptors are normally expressed at low levels but are markedly elevated during inflammation in several tissues including skin, lung, joints, and gut. The importance of proper IL-36 signaling has been demonstrated in several preclinical in vivo models of skin inflammation, lung inflammation and inflammatory bowel disease. In the human setting, based on proof-of-concept clinical data, blockade of IL-36 signaling through inhibition of IL-36R could be an appealing therapeutic target for patients suffering from chronic and potentially life-threatening generalized pustular psoriasis. Anwita is developing a best-in-class IL-36R directed antibody-based therapeutic that exhibits exquisite potency and excellent CMC profile.",
                  target: "IL-36 Receptor",
                  indication: "Autoimmune",
                  progress: 40,
                },
                {
                  name: "Discovery Programs",
                  description: "Anwita applies our SmartKine protein engineering and AccuMab discovery platform to design, optimize and validate new therapeutic candidates with improved pharmaceutical properties in immuno-oncology, autoimmune and inflammatory disease areas.",
                  progress: 20,
                },
              ]}
            />
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <People sectionWrapperClasses={sectionWrapperClasses} />

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <br/>
            <span id='news' className='anchor'/>
            <h1 className='text-center text-4xl mb-2 font-semibold'>News</h1>
            <br/>
            <div className='text-xl grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
              <div className='bg-gray-100 p-8 rounded-lg'>
                <p className='mb-4'><b>Date:</b> September 30<sup>th</sup>, 2020</p>
                <p className='mb-4'>Anwita Biosciences and Shanghai Junshi Biosciences entered into a new collaboration in which Junshi was granted the exclusive rights to Anwita&apos;s Exenokine-2, an improved IL-2 variant with extended half-life, in the Greater China territories.</p>
                <p><b><a className={linkStyling} target='_blank' href='/assets/news/Anwita-Junshi IL-2 Collaboration HK Announcement.pdf'>Press Release</a></b></p>
              </div>
              <div className='bg-gray-100 p-8 rounded-lg'>
                <p className='mb-4'><b>Date:</b> June 24<sup>th</sup>, 2019</p>
                <p className='mb-4'>Strategic collaboration between Anwita Biosciences and Shanghai Junshi Biosciences whereby Junshi was granted the exclusive rights to develop and commercialize Anwita&apos;s Exenokine-21 program in the Greater China territories.</p>
                <p><b><a className={linkStyling} target='_blank' href='/assets/news/Anwita-Junshi First Collaboration (IL-21, HK Announcement).pdf'>Press Release</a></b></p>
              </div>
            </div>
          </div>

          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <span id='careers' className='anchor'/>
            <h1 className='text-center text-4xl my-2 font-semibold'>Careers</h1>
            <hr className='mt-3 h-px border-1 border-gray-400 w-1/3 m-auto'></hr>
            <div className="lg:grid grid-cols-2 gap-2">
              <div className="my-4">
                <h2 className='text-3xl my-4 italic font-semibold text-center'>Working at Anwita</h2>
                <p className='text-xl'>We are always seeking exceptional talent that is passionate about making a difference in the lives of patients with cancer or autoimmune disorders. If you share our mission, and are interested in joining our team, please reach out to us via email at <a href='mailto:contact@anwitabio.com' className={linkStyling}>contact@anwitabio.com</a>.</p>
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
            <h1 className='text-center text-4xl mb-2 font-semibold'>Contact</h1>
            <br/>
            <div className='flex flex-col sm:flex-row content-evenly justify-center gap-8'>
              {/* <iframe className="w-96 h-48" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.5229423824994!2d-122.26270389781278!3d37.51492603078649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f98aa79bc4f55%3A0xd47219d8b27ce42a!2sAnwita%20Biosciences!5e0!3m2!1sen!2sus!4v1632246025164!5m2!1sen!2sus" style={{width: "35rem", height: "30rem", maxWidth: "95%", maxHeight: "35rem", border: 0}} allow="fullscreen" allowFullScreen={true} loading="lazy"></iframe> */}
              <div className='sm:text-right'>
                <p>Company Address: <br/><a href='https://www.google.com/maps/place/300+Industrial+Rd,+San+Carlos,+CA+94070/@37.5149181,-122.2641003,17z/data=!3m1!4b1!4m5!3m4!1s0x808f98aa79063b39:0x9744f7cb0ddf62fa!8m2!3d37.5149181!4d-122.2619063' target="_blank" rel="noreferrer noopener" className={linkStyling}>300 Industrial Road,<br/>San Carlos, CA 94070</a></p>
                <p>Phone:&nbsp;<a href='tel:1-650-600-9828' target='_blank' className={linkStyling} rel="noreferrer">(650) 600-9828</a></p>
                <p>Email:&nbsp;<a href='mailto:contact@anwitabio.com' className={linkStyling}>contact@anwitabio.com</a></p>
              </div>
              <div>
                <p>Shanghai Division: <br/><a href='https://www.google.com/maps/place/China,+Shang+Hai+Shi,+Pu+Dong+Xin+Qu,+%E7%A7%80%E6%B5%A6%E8%B7%AF2555%E5%8F%B7/@31.1302446,121.6053713,17z/data=!3m1!4b1!4m5!3m4!1s0x35b2788b3666b481:0x462a91e8462cbf6d!8m2!3d31.13024!4d121.60756' target="_blank" rel="noreferrer noopener" className={linkStyling}>11/F Building E6,<br/>2555 Xiupu Road<br/>Pudong New Area, Shanghai</a></p>
                <p>Phone:&nbsp;<a href='tel:86-21-58080598' target='_blank' className={linkStyling} rel="noreferrer">86(21)-58080598</a></p>
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
