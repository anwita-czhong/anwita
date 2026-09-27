import Image from "next/image";
import Jobs, { Job } from "./_components/Jobs";
import News, { NewsItem } from "./_components/News";
import Publications, { Publication } from "./_components/Publications";
import Pipelines, {
  Partner,
  Program,
  ProgramGroup,
} from "./_components/Pipeline";
import People, { Person } from "./_components/People";
import { Footer } from "./_components/Footer";
import { Header } from "./Header";

import SciAndTechImg from "@/../public/assets/graphics/technology_and_product.png";

export default function Home() {
  const jobs: Job[] = [
    {
      id: "1",
      title: "Scientist",
      description:
        "Contribute to experimental planning, implementation, and data analysis; Independently design plasmid maps, primers and cloning strategies for antibodies and fusion proteins; Use ExpiCHO transient transfection and expression system to produce new proteins; Purify protein from ExpiCHO expression system and use analytical instrument including HPLC, AKTA to characterize protein quantity, quality and purity; Design mutations to change certain property of target protein, including receptor binding, stability and productivity; Use Octet Red96 instrument to perform binding assays and measure the dissociation constant; Perform cell based binding and functional screening assays to ID target specific antibody binders; Generate stable expression cell lines for cell based assays using pAS-puro vector and puromycin selection; Support antibody discovery team and perform phage display library construction and screening; Design and perform cell based assays, including cell surface staining, signaling assay and flow cytometry; Prepare reports and present in weekly group meeting.",
      requirements: `- Master's Degree (or foreign equivalent) in Molecular Biology, Biomedical Engineering, or related field
- 2 years of experience in a research position in a biotechnology company. Position may require experience with:
    - molecular cloning
    - protein purification and characterization
    - cell culture`,
    },
  ];
  const newsItems: NewsItem[] = [
    {
      id: "1",
      date: "2019-06-24",
      description:
        "Strategic collaboration between Anwita Biosciences and Shanghai Junshi Biosciences whereby Junshi was granted the exclusive rights to develop and commercialize Anwita's Exenokine-21 program in the Greater China territories.",
      link: "/assets/news/pr-1.pdf",
    },
    {
      id: "2",
      date: "2020-09-30",
      description:
        "Anwita Biosciences and Shanghai Junshi Biosciences entered into a new collaboration in which Junshi was granted the exclusive rights to Anwita's Exenokine-2, an improved IL-2 variant with extended half-life, in the Greater China territories.",
      link: "/assets/news/pr-2.pdf",
    },
    {
      id: "3",
      date: "2021-06-28",
      description:
        "Anwita Biosciences, Inc. Completes $18.5 Million Series B Financing to Advance Its Improved Cytokines (Exenokines) And Tumor Targeting Antibody Drug Conjugates",
      link: "/assets/news/pr-3.pdf",
    },
    {
      id: "4",
      date: "2021-10-29",
      description:
        "Anwita Biosciences, Inc. Announces Initiation of first-in-human Phase 1 clinical trial of Exenokine-21 for monotherapy and combination, earns $2.5 million milestone for IND acceptance from Partner Shanghai Junshi Biosciences",
      link: "/assets/news/pr-4.pdf",
    },
    {
      id: "5",
      date: "2022-03-15",
      description:
        "Anwita Biosciences, Inc. announces presentation on Mableukine-2PD1 at the 2022 annual American Association of Cancer Research (AACR) meeting.",
      link: "/assets/news/pr-5.pdf",
    },
    {
      id: "7",
      date: "2022-09-21",
      description:
        "Anwita Biosciences Announced Today Dosing of First Patient in Its Phase I Clinical Trial of JS014, a Half-life Extended IL-21, for the Treatment of Solid Tumors",
      link: "/assets/news/pr-7.pdf",
    },
    {
      id: "8",
      date: "2022-10-05",
      description:
        "Anwita Biosciences, Inc. Announces Multiple Poster Presentations Showcasing Its Three Cytokine-Based Therapeutics at 37th Society for Immunotherapy of Cancer (SITC) 2022 Annual Meeting",
      link: "/assets/news/pr-8.pdf",
    },
    {
      id: "9",
      date: "2025-10-21",
      description:
        "Anwita Biosciences Receives FDA Orphan Drug Designation for AWT020 in Thymic Epithelial Tumors",
      link: "/assets/news/pr-9.pdf",
    },
  ];
  const publications: Publication[] = [
    {
      id: "0",
      description:
        "Wu S. et al. The Half-Life-Extended IL21 can Be Combined With Multiple Checkpoint Inhibitors for Tumor Immunotherapy. Front Cell Dev Biol. 2021 Nov 15;9:779865. doi: 10.3389/fcell.2021.779865. PMID: 34869384; PMCID: PMC8634682. <https://pubmed.ncbi.nlm.nih.gov/34735918/>\n",
    },
    {
      id: "1",
      description:
        "Liu H. et al. An engineered IL-21 with half-life extension enhances anti-tumor immunity as a monotherapy or in combination with PD-1 or TIGIT blockade. Int Immunopharmacol. 2021 Dec;101(Pt A):108307. doi: 10.1016/j.intimp.2021.108307. Epub 2021 Nov 1. PMID: 34735918. <https://pubmed.ncbi.nlm.nih.gov/34735918/>\n",
    },
    {
      id: "2",
      description:
        "Ye F. et al. A safe and highly potent anti-PD1-IL-2C fusion that decouples efficacy and toxicity of IL-2 therapy. <https://anwitabio.com/aacr-poster.png>\n",
    },
    {
      id: "3",
      description:
        "Cheng X. et al. Exenokine-2: a half-life extended no-α-IL-2 with improved preclinical pharmacological properties supports first-in-human clinical development. <https://anwitabio.com/events/2022/sitc/poster/exn-2.pdf>\n",
    },
    {
      id: "4",
      description:
        "Huang Z. et al. A highly potent anti-LAG-3-IL-2C that selectively targets tumor specific CD8+ T cells. <https://anwitabio.com/events/2022/sitc/poster/lag3-il2.pdf>\n",
    },
    {
      id: "5",
      description:
        "Ye F. et al. A Safe and Highly Potent αPD1-IL2 Fusion (AWT020) that Decouples the Efficacy and Toxicity of IL-2 Therapy. <https://anwitabio.com/events/2022/sitc/poster/pd1-il2.pdf>\n",
    },
    {
      id: "6",
      description:
        "Ye F. et al. Synergistic enhancement of immunogenic cell death: Combining AWT020 with antibody-drug conjugates for superior anti-tumor activity. <https://doi.org/10.1158/1538-7445.AM2025-4774>\n",
    },
    {
      id: "7",
      description:
        "Ye F. et al. AWT020: a novel fusion protein harnessing PD-1 blockade and selective IL-2 Cis-activation for enhanced anti-tumor immunity and diminished toxicity. <https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2025.1537466/full>\n",
    },
    {
      id: "8",
      description:
        "Jiang H. et al. NK cells limit the synergistic anti-tumor effect of PD-1 inhibition and βγ-biased IL-2, International Journal of Biological Macromolecules. <https://doi.org/10.1016/j.ijbiomac.2025.147437>\n",
    },
    {
      id: "9",
      description:
        "Jermaine C. et. al. First-in-human study of AWT020, a bifunctional anti-PD-1/IL-2 fusion protein, in patients with advanced cancer. <https://doi.org/10.1200/JCO.2025.43.16_suppl.e14500>",
    },
  ];
  const partners: Partner[] = [
    {
      name: "TopAlliance",
      logoImageData: {
        url: "/assets/graphics/top_alliance_logo.webp",
        width: 209,
        height: 81,
      },
    },
  ];
  const programGroups: ProgramGroup[] = [
    {
      name: "Targeted Cytokines",
      programs: [
        {
          name: "AWT020",
          description:
            "aPD1-IL-2c (AWT020) is a targeted fusion protein comprised of an anti-PD1 antibody linked to a potency optimized IL-2Na The IL-2Na component of the fusion protein has been engineered to have low systemic toxicity. The anti-PD1 antibody component not only serves to block the interaction between PD1 and PD-L1 but also functions to selectively deliver the potency optimized IL-2Na to PD1+ T cells within the tumor microenvironment. In preclinical studies, aPD1-IL-2c demonstrated superior single-agent antitumor activity with robust immunological memory accompanied by preferential activation and expansion of functional intratumoral T cells. The antitumor activity of aPD1-IL-2c is driven by CD8+ T cells. In contrast to competitors’ products, aPD1-IL-2c is devoid of NK cell dependent toxicity. In non-human primates, aPD1-IL-2c is well tolerated at dose levels that support the clinical plan. World-wide rights are available for partnership.",
          target: "PD-1 and IL-2",
          indication: "NSCLC, GI and gynecological cancers",
          progress: 0.97,
          partner: partners[0],
        },
        {
          name: "AWT026",
          description: "",
          target: "LAG-3 and IL-2",
          indication: "Melanoma combined with aPD-1; CART",
          progress: 0.49,
        },
      ],
    },
    {
      name: "Bispecific ADCs",
      programs: [
        {
          name: "JS212",
          description: "",
          target: "EGFR and HER3",
          indication: "NSCLC; CRC",
          progress: 0.85,
          partner: partners[0],
        },
        {
          name: "AWT041",
          description: "",
          target: "VEGF and PD-L1",
          indication: "Solid tumors",
          progress: 0.47,
        },
      ],
    },
    {
      name: "T-cell Engagers",
      programs: [
        {
          name: "AWT032",
          description: "",
          target: "BCMA, CD19, CD3",
          indication: "Hematological autoimmune disease",
          progress: 0.55,
        },
        {
          name: "Others",
          description: "",
          target: "Multiple Targets",
          indication: "Solid tumors",
          progress: 0.4,
        },
      ],
    },
    {
      name: "Cancer Cachexia",
      programs: [
        {
          name: "AWT038",
          description: "",
          target: "GDF15 and IL-6",
          indication: "Solid tumors",
          progress: 0.51,
        },
      ],
    },
  ];
  const people: Person[] = [
    {
      id: "1",
      name: "Ziyang Zhong",
      imageURL: "/assets/people/zzhong-sq.webp",
      qualifications: "Ph.D.",
      position: "President & CEO",
      biography:
        "Dr. Zhong is the founder and Chief Executive Office. He is an accomplished drug developer with 30 years of experience in biotechnology industry. He has deep expertise in drug development, which spans multiple therapeutic modalities and different phases of development. Before starting Anwita Biosciences, he was the VP of Research at Henlix, Inc., where he oversaw new drug discovery programs in their Fremont, CA research facility. He also guided downstream process development for Henlix's parent company, Henlius Biotechnology, in Shanghai, China. Before joining Henlix, Dr. Zhong was Director of Molecular Pharmacology at Ardelyx, where he oversaw the development of its APECCS Assay system, a functional ex vivo human intestinal epithelial system for high fidelity drug screening. Dr. Zhong also served as Director of Protein Sciences at Catalyst, Inc. Throughout his career, Dr. Zhong plays various roles in the development of several FDA approved drugs, including Natrecor®, IBSRELA®, and Vectibix®, as well as trastuzumab and rituximab biosimilars (approved in China and EU). Dr. Zhong received his Ph.D. from Texas A&M University in 1991. After completing his postdoctoral research at Scripps Research Institute, he joined Scios to start his biotech career. His experiences cover preclinical pharmacology, process development, and regulatory filings in the US, China, and Taiwan. Dr. Zhong is the co-authors of over 20 scientific publications.",
    },
    {
      id: "2",
      name: "James Woolbridge",
      imageURL: "/assets/people/jwoolbridge.jpg",
      qualifications: "M.D.",
      position: "Chief Medical Officer",
      biography:
        "Dr. Wooldridge is a medical oncologist and seasoned biotech executive with over 25 years of experience in drug development across academia and industry. He received his medical degree from Tulane University, and completed post-graduate training and a Chief Residency in Internal Medicine and fellowship in Medical Oncology at the University of Iowa. He has guided programs at all stages, including pre-IND to Phase 3, contributed to numerous regulatory interactions, supported multiple corporate financings, and played a pivotal leadership role in medical affairs, including product launch. He authored or co-authored more than 40 scientific publications and book chapters, and has been instrumental in the clinical development of approximately 20 molecules, including 10 first-in-human programs and one approved drug. Previously, he was the CSO for Immuno-oncology Clinical Development at Lilly, followed by roles as Chief Medical Officer at Aeglea BioTherapeutics, Checkmate Pharmaceuticals, and Immunitas Therapeutics.  He supported significant corporate accomplishments that include a successful product out licensing, an IPO, and an acquisition. He serves as a consultant to multiple biotech firms, leveraging his deep expertise to advance innovative therapies and support corporate growth.",
    },
    {
      id: "3",
      name: "Binfeng Lu",
      imageURL: "/assets/people/blu-sq.webp",
      qualifications: "Ph.D.",
      position: "SAB Chair",
      biography:
        "Dr. Lu is the Chair of Scientific Advisory Board of Anwita. He is a leading expert with more than 20 years of experiences in tumor immunology and he is currently a Professor at the Hackensack School of Medicine, and a Director and Member at the Center for Discovery and Innovation Hackensack MERIDIAN HEALTH. His research interest is focused on studying basic mechanisms of antitumor immune responses and identifying genes that are critical for mediating antitumor immunity and tumor immune tolerance. Dr. Lu has made several original discoveries that helped usher in novel tumor immunotherapeutic approaches. His team discovered that epithelial cytokines interleukin 33 and interleukin 36 exert strong antitumor activities and have great potential to become a new class of tumor therapeutic agents. He also demonstrated that the checkpoint molecule Tim-3 mediates tumor immune suppression by promoting regulatory T cell function in the tumor microenvironment, supporting targeting Tim-3 for tumor immunotherapy. He has published more than 100 papers in the field of immunology. Dr. Lu obtained his Ph.D. training in Immunology at Columbia University and postdoctoral training at Yale University.",
    },
    {
      id: "4",
      name: "Cheni Kwok",
      imageURL: "/assets/people/ckwok-sq.webp",
      qualifications: "Ph.D. CLP",
      position: "Sr. BD Consultant",
      biography:
        "Dr. Cheni Kwok is a senior biopharmaceutical executive with broad operational expertise who has executed over 150 transactions including M&A, strategic partnerships, licensing, divestitures, spin-offs and project financing. Dr. Kwok is the Founder and Managing Partner of Linear Dreams LLC, a management consultancy for the life sciences industry. The firm’s engagements include a broad range of business and corporate development activities for over 50 clients in the United States, Europe and Asia.  Prior to founding Linear Dreams, Dr. Kwok served as Senior Vice President, Corporate Development at Poniard Pharmaceuticals Inc., Director of Business Development at Celera Genomics Inc., Associate Director of Business Development at Exelixis Inc. and in various research management, technology assessment and alliance management roles at SmithKline Beecham plc (now GlaxoSmithKline plc).  Dr. Kwok received a bachelor's degree with first class honors in biotechnology from Imperial College London, UK, a Ph.D. in human molecular genetics from the University of Cambridge, UK and has earned the Certified Licensing Professional credential. At present, Dr. Kwok is serving on the Board of Directors of the Chinese-American Biopharmaceutical Society.",
    },
  ];
  // TODO: When adding Supabase, add data fetching here

  return (
    <div>
      <Header />

      <main>
        <div
          id="banner-wrapper"
          className="flex h-[300px] content-center justify-center bg-[url(/assets/branding/careers-scale-down-height-clamp.webp)] bg-cover bg-center lg:h-[400px]"
        >
          <div
            className="flex w-full flex-none flex-col content-center items-center justify-center space-y-2 text-center"
            style={{ backgroundColor: "rgba(54, 58, 69, 0.4)" }}
          >
            <h1
              className="text-4xl font-bold text-white sm:text-6xl lg:text-8xl"
              style={{ textShadow: "4px 4px rgba(0,0,0, 0.8)" }}
            >
              Anwita Biosciences
            </h1>
          </div>
        </div>

        <div
          id="primary-content-wrapper"
          className="mx-auto py-2 text-blue-900"
          style={{ width: "1200px", maxWidth: "80vw" }}
        >
          <div className={"py-6"}>
            <span id="about" className="anchor" />
            <div className="grid-cols-3 gap-8 lg:grid">
              <div className="col-span-2 mb-8 flex flex-col">
                <h1 className="mb-4 text-center text-4xl font-semibold">
                  Our Mission
                </h1>
                <p className="mb-6 max-w-prose place-self-center text-xl">
                  At Anwita Biosciences, our mission is to precisely reprogram
                  immunity and tumor biology to deliver durable benefits for
                  patients. Building on our clinical-stage targeted cytokine
                  AWT020 (anti-PD-1-IL-2 fusion protein), we are advancing a
                  diversified pipeline that includes next-generation
                  antibody-drug conjugates (ADCs) with novel mechanisms,
                  multi-specific T-cell engagers, and program targeting the
                  drivers of metabolic dysfunction in cancer cachexia. Our
                  translation-first approach combines deep biological
                  understanding with rational engineering for selectivity and
                  safety, enabling the rapid advancement of innovative therapies
                  into the clinic.
                </p>
              </div>
              <div className="relative h-96 w-full lg:relative">
                <Image
                  src="/assets/graphics/about.webp"
                  alt=""
                  fill
                  className="h-96 w-full object-scale-down"
                />
              </div>
            </div>
          </div>

          <hr className="my-3 h-px border-1 border-gray-400"></hr>

          <div className={"py-6" + " flex flex-col items-start"}>
            <span id="science" className="anchor" />
            <h1 className="mb-6 place-self-center text-center text-4xl font-semibold">
              Science
            </h1>
            <div className="flex flex-col place-self-center">
              <h2 className="mb-4 text-center text-3xl font-medium">
                Technology
              </h2>
              <div className="w-full max-w-[55rem] place-self-center">
                <Image
                  src={SciAndTechImg}
                  alt="A diagram showcasing Anwita's technology workflow."
                />
              </div>

              <p className="my-4 max-w-[75ch] place-self-center text-xl">
                Anwita’s technology platform integrates antibody discovery,
                cytokine engineering, proprietary toxin-linker technologies, and
                AI-assisted protein design. By combining structure- and
                sequence-based modeling with experimental data, we precisely
                tune key molecular features ̶ target affinity, receptor bias,
                safety, TME-dependent payload release, and developability ̶ while
                accelerating the path from design concept to clinic.
                <br />
                <br />
                The technology platform supports a diversified pipeline
                including:
              </p>
              <ul className="ml-16 max-w-[75ch] list-outside list-disc place-self-center text-xl">
                <li>
                  Targeted cytokine fusion proteins led by clinical asset AWT020
                  (anti-PD-1–IL-2) designed to direct immune activation locally
                  within the tumor microenvironment.
                </li>
                <li>Bispecific ADCs with novel mechanisms of action.</li>
                <li>
                  Multi-specific T-cell engagers that address antigen
                  heterogeneity and immune resistance.
                </li>
                <li>
                  A bispecific GDF15 trap in development for the treatment of
                  cancer cachexia.
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col place-self-center">
              <h2 className="my-4 text-center text-3xl font-medium">
                Publications
              </h2>
              <Publications publications={publications} />
            </div>
          </div>

          <hr className="my-3 h-px border-1 border-gray-400"></hr>

          <div className={"py-6"}>
            <span id="pipeline" className="anchor" />
            <h1 className="mb-4 text-center text-4xl font-semibold">
              Pipeline
            </h1>
            <Pipelines programGroups={programGroups} />
            <p className="my-4 text-sm">
              Click or tap on any Program to read more about that project.
            </p>
          </div>

          <hr className="my-3 h-px border-1 border-gray-400"></hr>

          <div className={"py-6"}>
            <span className="anchor" id="team"></span>
            <h1 className="mb-6 text-center text-4xl font-semibold">
              Our Leadership
            </h1>
            <People people={people} />
          </div>

          <hr className="my-3 h-px border-1 border-gray-400"></hr>

          <div className={"py-6"}>
            <span id="news" className="anchor" />
            <h1 className="mb-6 text-center text-4xl font-semibold">News</h1>
            <News newsItems={newsItems} />
          </div>

          <hr className="my-3 h-px border-1 border-gray-400"></hr>

          <div className={"py-6"}>
            <span id="careers" className="anchor" />
            <h1 className="my-2 text-center text-4xl font-semibold">Careers</h1>
            <hr className="m-auto mt-3 h-px w-1/3 border-1 border-gray-400"></hr>
            <div className="grid-cols-left-uneven gap-2 lg:grid">
              <div className="my-4">
                <h2 className="my-4 text-center text-3xl font-semibold italic">
                  {jobs.length === 0 ? "Working at Anwita" : "Openings"}
                </h2>
                <Jobs jobs={jobs} />
              </div>
              <div className="my-4">
                <h2 className="my-4 text-center text-3xl font-semibold italic">
                  Benefits
                </h2>
                <div className="px-4 text-xl lg:px-8">
                  <ul className="list-inside list-disc">
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

          <hr className="my-3 h-px border-1 border-gray-400"></hr>

          <div className={"py-6"}>
            <span id="contact" className="anchor" />
            <h1 className="mb-6 text-center text-4xl font-semibold">Contact</h1>
            <div className="flex flex-col content-evenly justify-center gap-8 sm:flex-row">
              {/* <iframe className="w-96 h-48" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.5229423824994!2d-122.26270389781278!3d37.51492603078649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f98aa79bc4f55%3A0xd47219d8b27ce42a!2sAnwita%20Biosciences!5e0!3m2!1sen!2sus!4v1632246025164!5m2!1sen!2sus" style={{width: "35rem", height: "30rem", maxWidth: "95%", maxHeight: "35rem", border: 0}} allow="fullscreen" allowFullScreen={true} loading="lazy"></iframe> */}
              <div className="sm:text-right">
                <p>
                  Company Address: <br />
                  <a
                    href="https://www.google.com/maps/place/300+Industrial+Rd,+San+Carlos,+CA+94070/@37.5149181,-122.2641003,17z/data=!3m1!4b1!4m5!3m4!1s0x808f98aa79063b39:0x9744f7cb0ddf62fa!8m2!3d37.5149181!4d-122.2619063"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    300 Industrial Road,
                    <br />
                    San Carlos, CA 94070
                  </a>
                </p>
                <p>
                  Phone:&nbsp;
                  <a href="tel:1-650-600-9828" target="_blank" rel="noreferrer">
                    (650) 600-9828
                  </a>
                </p>
                <p>
                  Email:&nbsp;
                  <a href="mailto:contact@anwitabio.com">
                    contact@anwitabio.com
                  </a>
                </p>
              </div>
              <div>
                <p>Shanghai Division:</p>
                <p>
                  <a
                    href="https://www.google.com/maps/place/China,+Shang+Hai+Shi,+Pu+Dong+Xin+Qu,+%E7%A7%80%E6%B5%A6%E8%B7%AF2555%E5%8F%B7/@31.1302446,121.6053713,17z/data=!3m1!4b1!4m5!3m4!1s0x35b2788b3666b481:0x462a91e8462cbf6d!8m2!3d31.13024!4d121.60756"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    11/F Building E6,
                    <br />
                    2555 Xiupu Road
                    <br />
                    Pudong New Area, Shanghai
                  </a>
                </p>
                <p>
                  Phone:&nbsp;
                  <a href="tel:86-21-58080598" target="_blank" rel="noreferrer">
                    86(21)-58080598
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
