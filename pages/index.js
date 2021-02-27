import { People } from '../components/people';

export default function Home() {
  const sectionWrapperClasses = 'flex-1 my-6 py-6';

  const linkStyling = 'text-blue-400 hover:text-yellow-500 hover:underline focus:underline focus:outline-none focus:ring focus:ring-gray-400 rounded';

  return (
    <div>
      <main>
        <div id='banner-wrapper' className='bg-home-banner bg-cover bg-center flex content-center justify-center h-third-screen sm:h-banner' style={{maxHeight: 'fit-content(50vh)', minHeight: 'min-content'}}>
          <div 
            className='flex flex-col w-full flex-none text-center content-center justify-center items-center space-y-2' style={{backgroundColor: 'rgba(54, 58, 69, 0.4)'}}
          >
            <h1 className='text-8xl text-white font-bold' style={{textShadow: '4px 4px rgba(0,0,0, 0.8)'}}>Anwita Biosciences</h1>
          </div>
        </div>
        <div id='primary-content-wrapper' className='py-2 mx-auto text-blue-900' style={{width: '1200px', maxWidth: "80vw"}}>

          <div className='flex flex-col space-y-2'>
            
            <div className={sectionWrapperClasses}>
              <span id='about' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>Our Mission</h1>
              <br/>
              <p className='text-xl'>
                Anwita Biosciences, Inc. is an emerging biopharmaceutical company headquartered in the San Francisco Bay Area.<br/><br/>
                Our mission is to deliver transformative treatment options to improve the lives of patients with cancer and autoimmune diseases. We specialize in the discovery and development of optimized immunotherapeutics, leveraging our core expertise in cancer immunotherapy, bioinformatics, and structure-based protein engineering.<br/><br/>
                We are advancing our product pipeline of improved cytokines (Exenokines<sup>TM</sup>) and tumor targeting antibody drug conjugates. Our lead product is expected to enter clinical trials in 1H 2021. 
              </p>
              <br/><br/>
              <img src='/assets/graphics/about.jpg' className='object-scale-down w-full h-96'/>
            </div>

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <div className={sectionWrapperClasses}>
              <span id='pipeline' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>Pipeline</h1>
              <br/>
              <img src='/assets/graphics/pipeline.jpg' className='object-scale-down w-full'/>
            </div>

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <div className={sectionWrapperClasses}>
              <span id='technology' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>Our Approach</h1>
              <br/><br/>
              <p className='text-xl'>
                Exenokines<sup>TM</sup> are proprietary cytokines designed using Anwita Biosciences’ patented platform technology.  Our modular design enables accelerated development of a diversified portfolio of cytokine-based products with improved pharmaceutical properties. 
              </p>
              <br/><br/><br/>
              <img src='/assets/graphics/tech-01.jpg' className='object-scale-down w-full' style={{height: '28rem'}}/>
            </div>
            <div className={sectionWrapperClasses}>
              <br/><br/><br/>
              <p className='text-xl'>
              Our scientists are developing a suite of innovative ADC technologies and payloads. The company is advancing a pipeline of tumor targeting ADCs with enhanced efficacy <i>in vivo</i>. 
              </p>
              <br/><br/><br/>
              <img src='/assets/graphics/tech-02.jpg' className='object-scale-down w-full' style={{height: '18rem'}}/>
            </div>

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <People sectionWrapperClasses={sectionWrapperClasses} />

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <div className={sectionWrapperClasses}>
              <br/>
              <span id='news' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>News</h1>
              <br/>
              <p className='text-xl'>
                <ol className='list-decimal list-inside'>
                  <li>Anwita and Shanghai Junshi Biosciences entered collaboration on Anwita’s Exenokine-21 program for Greater China territory.</li>
                  <li>Anwita and Shanghai Junshi Biosciences entered collaboration on Anwita’s Exenokine-2, an improved IL-2 variant with half-life extended for Greater China territory.</li>
                </ol>
              </p>
            </div>

            <hr className='my-3 h-px border-1 border-gray-400'></hr>

            <div className={sectionWrapperClasses + ' flex flex-col'}>
              <br/>
              <span id='careers' className='anchor'/>
              <h1 className='text-center text-4xl mb-2 font-semibold'>Careers</h1>
              <hr className='my-3 h-px border-1 border-gray-400 w-1/3 place-self-center'></hr>
              <br/>
              <h2 className='text-3xl mb-6 italic font-semibold text-center'>Openings</h2>
              <h3 className='text-2xl my-2 font-bold'>Scientist</h3>
              <p className='text-xl'>Scientist/Senior Scientist for in-vivo tumor models.</p>
              <h3 className='text-2xl my-2 font-bold'>Description</h3>
              <p className='text-xl'>We are seeking a talented Scientist/Sr. Scientist with experience with in vivo tumor biology. Ideal candidates will have experience testing pharmaceuticals in tumor xenograft models in mice, including tumor implantation, tumor growth measurement and treatment administration. Experience with xenograft models in NSG mice together with intravenous PBMC injection is highly desired. Experience in culturing cancer cell lines and isolating PBMCs is a plus. Preference will be given to candidates with expertise in immuno-oncology or related field. Candidates that have additional experience working with inflammatory disease rodent models, including inflammatory bowel disease, are preferred.</p>
              <h3 className='text-2xl my-2 font-bold'>Preferences</h3>
              <ul className='list-disc list-inside text-xl'>
                  <li>Ph.D. in biological sciences, immunology or bio-engineering with a minimum 2 years post-doctoral or industry experience.</li>
                  <li>Experience implanting xenograft tumors in immunocompromised mice, including NSG mice.</li>
                  <li>Experience with intravenous injection, especially for PBMC implantation.</li>
                  <li>Experience culturing cancer cell lines and isolating PBMCs.</li>
                  <li>Experience with inflammatory disease rodent models.</li>
                  <li>Publications in the field of immuno-oncology.</li>
                </ul>
              <br/>
              <h2 className='text-center text-3xl mb-2 italic font-semibold'>Benefits</h2>
              <p className='text-xl'>
                <ul className='list-disc list-inside'>
                  <li>Competitive compensation.</li>
                  <li>Stock options at all levels</li>
                  <li>401(K) plan</li>
                  <li>Official holidays and floating holidays</li>
                  <li>Generous paid time off (PTO)</li>
                  <li>Sick days</li>
                  <li>Medical plan</li>
                  <li>Dental plan</li>
                  <li>Visional plan</li>
                  <li>Life insurance</li>
                </ul>
              </p>
            </div>
          </div>
          
          <hr className='my-3 h-px border-1 border-gray-400'></hr>

          <div className={sectionWrapperClasses}>
            <span id='contact' className='anchor'/>
            <h1 className='text-center text-4xl mb-2 font-semibold'>Contact</h1>
            <br/>
            <div className='flex flex-row content-around'>
              <div className='clear-right'>
                <p>Company Address: <br/><a href='https://google.com' className={linkStyling}>300 Industrial Road,<br/>San Carlos, CA 94070</a></p>
                <p>Phone: <a href='tel:1-650-600-9828' target='_blank' className={linkStyling}>(650) 600-9828</a></p>
                <p>Email: <a href='mailto:contact@anwitabio.com' className={linkStyling}>contact@anwitabio.com</a></p>
              </div>
              <img src='/assets/graphics/map.jpg' className='w-96 mx-8' alt='Anwita Biosciences Map'></img>
            </div>
            
          </div>

        </div>
      </main>
    </div>
  )
}
