import { useState } from 'react';
import { Person } from './person.js';

const people = [
    {
        'fname': 'zzhong',
        'name': 'Ziyang Zhong',
        'titles': 'Ph.D.',
        'position': 'President & CEO',
        'bio': [
            "Dr. Zhong is the founder and Chief Executive Office. He is an accomplished drug developer with 30 years of experience in biotechnology industry. He has deep expertise in drug development, which spans multiple therapeutic modalities and different phases of development. Before starting Anwita Biosciences, he was the VP of Research at Henlix, Inc., where he oversaw new drug discovery programs in their Fremont, CA research facility. He also guided downstream process development for Henlix ‘s parent company, Henlius Biotechnology, in Shanghai, China. Before joining Henlix, Dr. Zhong was Director of Molecular Pharmacology at Ardelyx, where he oversaw the development of its APECCS Assay system, a functional ex vivo human intestinal epithelial system for high fidelity drug screening. Dr. Zhong also served as Director of Protein Sciences at Catalyst, Inc. Throughout his career, Dr. Zhong plays various roles in the development of several ADFA approved drugs, including Natrecor® , IBSRELA®, and Vectibix®, as well as trastuzumab and rituximab biosimilars (approved in China and EU). Dr. Zhong received his Ph.D. from Texas A&M University in 1991. After completing his postdoctoral research at Scripps Research Institute, he joined Scios to start his biotech career. His experiences cover preclinical pharmacology, process development, and regulatory filings in the US, China, and Taiwan. Dr. Zhong is the co-authors of over 20 scientific publications. ",
        ],
    },
    {
        'fname': 'eliu',
        'name': 'Eugene Liu',
        'titles': 'M.D. Ph.D.',
        'position': 'Chief Medical Officer',
        'bio': [
            "Dr. Liu, who is a certified internist and hematologist-oncologist, is the Chief Medical Officer. He graduated from Taipei Medical University (TMU), finished his residency training in Internal Medicine in Taiwan, and earned a PhD of Pathobiology in the Department of Pathology at University of Minnesota. He later completed the hematology/oncology fellowship training in the Division of Hematology, Oncology and Transplantation at University of Minnesota Fairview Hospital. During his fellowship training, Dr. Liu won a CALGB fellowship award. He later joined the faculty of Graduate Institute of Clinical Medicine at Taipei Medical University as professor and physician, where he conducted multiple cancer studies at Wanfang Medical Center from 2002 to 2015. Prior to Anwita, he served as the Chief Medical Officer and Vice President of Henlix Biotech, a subsidiary of Shanghai Henlius Biotech, in charge of the clinical development of multiple biosimilars and innovative monoclonal antibodies in the US, Europe, China, Taiwan, and Australia.  Dr. Liu is a member of ESMO, ASCO, Taiwan Oncology Society, the Hematology Society of Taiwan, and Taiwan Society of Cancer Palliative Medicine."
        ],
    },
    {
        'fname': 'msiegel',
        'name': 'Matthew Siegel',
        'titles': 'Ph.D.',
        'position': 'VP of Research',
        'bio': [
            "Dr. Siegel serves as Anwita Bioscience’s Vice President of Research. He has 15 years of experience in the biotech industry and 20 years of experience in drug discovery. Prior to joining Anwita Biosciences, he served as the Director of Molecular and Cellular Pharmacology at Ardelyx Inc., where he developed an intestinal organoid platform and led the drug screening and biochemical assay group. During his tenure at Ardelyx, he helped to elucidate the mechanism by which Tenapanor blocks phosphate absorption in the intestine and successfully discovered a novel drug combination to modulate the absorption and elimination of potassium ions in the intestine. Before joining Ardelyx, Dr. Siegel was a senior scientist at Alvine Pharmaceuticals where he played a key role in advancing their lead drug candidate into Phase 2b clinical trials for the treatment of celiac disease. He is an author on over 20 peer-reviewed publications and has broad expertise in biochemistry and cell biology with a particular interest in the fields of immunology and gastroenterology. Dr. Siegel received his BS in chemical engineering at the University of Notre Dame and his PhD from Stanford University."
        ],
    },
    {
        'fname': 'blu',
        'name': 'Binfeng Lu',
        'titles': 'Ph.D.',
        'position': 'SAB Chair',
        'bio': [
            "Dr. Lu is the Chair of Scientific Advisory Board of Anwita. He is a leading expert with more than 20 years of experiences in tumor immunology and he is currently a tenured Professor of Immunology at University of Pittsburgh, Medical School. His research interest is focused on studying basic mechanisms of antitumor immune responses and identifying genes that are critical for mediating antitumor immunity and tumor immune tolerance. Dr. Lu has made several original discoveries that helped usher in novel tumor immunotherapeutic approaches. His team discovered that epithelial cytokines interleukin 33 and interleukin 36 exert strong antitumor activities and have great potential to become a new class of tumor therapeutic agents. He also demonstrated that the checkpoint molecule Tim-3 mediates tumor immune suppression by promoting regulatory T cell function in the tumor microenvironment, supporting targeting Tim-3 for tumor immunotherapy. He has published more than 100 papers in the field of immunology. Dr. Lu obtained his Ph.D. training in Immunology at Columbia University and postdoctoral training at Yale University."
        ],
    },
    {
        'fname': 'ckwok',
        'name': 'Cheni Kwok',
        'titles': 'Ph.D., CLP',
        'position': 'Sr. BD Consultant',
        'bio': [
            "Dr. Cheni Kwok is a senior biopharmaceutical executive with broad operational expertise who has executed over 150 transactions including M&A, strategic partnerships, licensing, divestitures, spin-offs and project financing. Dr. Kwok is the Founder and Managing Partner of Linear Dreams LLC, a management consultancy for the life sciences industry. The firm’s engagements include a broad range of business and corporate development activities for over 50 clients in the United States, Europe and Asia.  Prior to founding Linear Dreams, Dr. Kwok served as Senior Vice President, Corporate Development at Poniard Pharmaceuticals Inc., Director of Business Development at Celera Genomics Inc., Associate Director of Business Development at Exelixis Inc. and in various research management, technology assessment and alliance management roles at SmithKline Beecham plc (now GlaxoSmithKline plc).  Dr. Kwok received a bachelor's degree with first class honors in biotechnology from Imperial College London, UK, a Ph.D. in human molecular genetics from the University of Cambridge, UK and has earned the Certified Licensing Professional credential. At present, Dr. Kwok is serving on the Board of Directors of the Chinese-American Biopharmaceutical Society."
        ],
    },
]

export const People = (props) => {

    const peopleCardClasses = 'flex-initial w-56 m-2 flex flex-col justify-center text-center items-center bg-gray-200 rounded p-2 hover:bg-gray-400';

    const [modal1Active, setModal1Active] = useState(false);

    return (
        <div className={props.sectionWrapperClasses}>
            <h1 id='team' className='text-center text-4xl mb-2 font-semibold'>Our Leadership</h1>
            <br/>
            <div className='flex flex-row items-start flex-wrap justify-center'>
                {people.map(function (person) {
                    return <Person {...person} />
                })}
            </div>
        </div>
    )
}