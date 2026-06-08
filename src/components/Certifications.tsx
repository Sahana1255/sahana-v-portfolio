import React, { useState } from 'react';
import { Award, Calendar, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CertModal } from './CertModal';
import type { CertModalData } from './CertModal';

// PDF asset imports (Vite resolves these to hashed URLs in production)
import thmSoc1Certificate from '../assets/THM-SOC_L1-1.png';
import thmCs101Certificate from '../assets/THM-CS-101-1.png';
import thmPreSecCertificate from '../assets/THM-Pre_security-1.png';
import mlPyCertificate from '../assets/Sem6- Machine Learning with Python1780914796.png';
import nptelCertificate from '../assets/NPTEL - Ethical Hacking-1.png';
import codtechCertificate from "../assets/CODTECH Cyber Security and Ethical Hacking-1.png";
import azureCertificate from "../assets/Coursera-MS Azure for data engineering-1.png";
import pythonDataScienceCertificate from "../assets/Coursera-Python for Data Science, AI  Development-1.png";
import dataVizPyCertificate from '../assets/Sem4- Data Visualization with Pyhton-1.png';
import djangoCertificate from '../assets/SkillUp- Python Django1780914795.png';
import introCloudCertificate from '../assets/Sem2- Intoduction to Cloud-1.png';
import dataAnalysisCertificate from '../assets/Sem1- Data analysis with python-1.png';

interface Certification {
  title: string;
  issuer: string;
  category: string;
  issued: string;
  credentialId: string;
  badge?: string;
  verified?: boolean;
  pdfUrl: string;
  learnedPoints: string[];
}

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState<CertModalData | null>(null);

  const certifications: Certification[] = [
    {
      title: "SOC Level 1 Certificate",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      issued: "February 2026",
      credentialId: "THM-B4OMPX1OKH",
      verified: true,
      pdfUrl: thmSoc1Certificate,
      learnedPoints: [
        "Understood the SOC analyst role and daily responsibilities in a real-world security operations environment.",
        "Analyzed and correlated security events using SIEM tools to identify threats and anomalies.",
        "Practiced structured incident response workflows including triage, escalation, and remediation.",
        "Gained hands-on experience with network traffic analysis, log investigation, and endpoint forensics.",
        "Completed labs covering phishing investigation, malware analysis, and threat intelligence lookups.",
        "Developed skills in writing clear and concise incident reports for security teams.",
      ]
    },
    {
      title: "Cyber Security 101 Certificate",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      issued: "December 2025",
      credentialId: "THM-FCPNU96DQC",
      verified: true,
      pdfUrl: thmCs101Certificate,
      learnedPoints: [
        "Learned fundamental cybersecurity concepts including the CIA triad, attack surfaces, and common threat vectors.",
        "Explored web application security basics such as OWASP Top 10 vulnerabilities.",
        "Practiced using command-line tools for basic security assessments and system enumeration.",
        "Understood how attackers exploit common network protocols and services.",
        "Got introduced to cryptography concepts, hashing, and secure communications.",
        "Built a solid foundation for advancing to specialized security domains.",
      ]
    },
    {
      title: "Pre Security Certificate",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      issued: "December 2025",
      credentialId: "THM-YSJBNP6OBK",
      verified: true,
      pdfUrl: thmPreSecCertificate,
      learnedPoints: [
        "Covered networking fundamentals including TCP/IP, DNS, HTTP, and how the internet works.",
        "Learned Linux command-line basics essential for security work and system administration.",
        "Explored Windows fundamentals and Active Directory concepts relevant to corporate environments.",
        "Understood how websites are built and served, from client-server communication to web technologies.",
        "Practiced using fundamental tools like Nmap and Wireshark for basic network analysis.",
        "Built a strong technical foundation required to pursue advanced cybersecurity certifications.",
      ]
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL (IIT Kharagpur)",
      category: "Cybersecurity",
      issued: "October 2025",
      credentialId: "NPTEL-ETH-HACK",
      badge: "Elite",
      pdfUrl: nptelCertificate,
      learnedPoints: [
        "Learned the full ethical hacking methodology from reconnaissance and scanning to exploitation and reporting.",
        "Studied vulnerability assessment and structured penetration testing techniques.",
        "Covered advanced topics including password cracking, privilege escalation, and social engineering.",
        "Understood legal and ethical boundaries and compliance frameworks in penetration testing.",
        "Gained hands-on knowledge of tools like Metasploit, Nmap, Wireshark, and Burp Suite.",
        "Earned Elite distinction for scoring in the top percentile of NPTEL nationwide assessment.",
      ]
    },
    {
      title: "Cyber Security & Ethical Hacking",
      issuer: "CodTech IT Solutions",
      category: "Cybersecurity",
      issued: "January 2026",
      credentialId: "CODTECH-CS-EH",
      verified: true,
      pdfUrl: codtechCertificate,
      learnedPoints: [
        "Completed intensive hands-on training covering both offensive and defensive security techniques.",
        "Practiced web application vulnerability scanning, SQL injection, and XSS exploitation.",
        "Learned about firewall configuration, IDS/IPS systems, and layered network defense strategies.",
        "Gained practical experience with ethical hacking tools in a controlled lab environment.",
        "Developed professional report-writing skills for documenting security assessment findings.",
        "Applied knowledge to realistic scenarios simulating real-world enterprise security challenges.",
      ]
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      category: "Data Science",
      issued: "2024",
      credentialId: "ML-PY-178091",
      verified: true,
      pdfUrl: mlPyCertificate,
      learnedPoints: [
        "Mastered fundamental machine learning algorithms and their implementations in Python.",
        "Built predictive models using regression, classification, and clustering techniques.",
        "Evaluated model performance using metrics like accuracy, precision, and recall.",
        "Applied scikit-learn for data preprocessing and model training.",
        "Explored real-world datasets to discover hidden patterns and insights.",
        "Understood the theoretical foundations behind machine learning models.",
      ]
    },
    {
      title: "Azure for Data Engineering",
      issuer: "Microsoft",
      category: "Cloud & Data Engineering",
      issued: "November 2024",
      credentialId: "HJN4SLO45BBJ",
      verified: true,
      pdfUrl: azureCertificate,
      learnedPoints: [
        "Learned Azure cloud fundamentals and understood how data engineering fits into the Azure ecosystem.",
        "Built ETL/ELT pipelines using Azure Data Factory for data ingestion and transformation.",
        "Explored Azure Databricks for big data processing and analytics using Apache Spark.",
        "Understood Azure Synapse Analytics for combining data warehousing and big data querying.",
        "Gained knowledge of Azure Data Lake, Blob Storage, and cloud data security best practices.",
        "Applied concepts to design scalable, cloud-native data engineering architectures.",
      ]
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM | Coursera",
      category: "Data Science",
      issued: "July 2024",
      credentialId: "Q63U4K72QCDN",
      pdfUrl: pythonDataScienceCertificate,
      learnedPoints: [
        "Mastered Python fundamentals: data types, control structures, functions, and object-oriented programming.",
        "Used NumPy and Pandas for efficient data manipulation and analysis of real-world datasets.",
        "Built data visualizations using Matplotlib and Seaborn to communicate insights effectively.",
        "Learned to work with REST APIs and perform web scraping using Python libraries.",
        "Applied Python to basic machine learning workflows using scikit-learn.",
        "Completed hands-on projects including data analysis pipelines and automation scripts.",
      ]
    },
    {
      title: "Data Visualization with Python",
      issuer: "IBM",
      category: "Data Science",
      issued: "October 2024",
      credentialId: "course-v1:CognitiveClass DV0101EN v2",
      pdfUrl: dataVizPyCertificate,
      learnedPoints: [
        "Created compelling visualizations using Matplotlib, Seaborn, and Plotly libraries.",
        "Learned best practices for selecting appropriate chart types for different data types.",
        "Built interactive dashboards and visual narratives from real datasets.",
        "Understood color theory, accessibility, and design principles in data visualization.",
        "Practiced Exploratory Data Analysis (EDA) through visual investigation of patterns and trends.",
        "Developed skills in communicating complex data insights to non-technical audiences.",
      ]
    },
    {
      title: "Python Django",
      issuer: "SkillUp",
      category: "Web Development",
      issued: "2024",
      credentialId: "SKILLUP-DJANGO",
      pdfUrl: djangoCertificate,
      learnedPoints: [
        "Learned the fundamentals of the Django web framework for Python.",
        "Built dynamic web applications using the Model-View-Template (MVT) architecture.",
        "Managed database schemas and queries using Django's built-in ORM.",
        "Implemented user authentication and authorization systems.",
        "Created backend APIs to serve data to frontend applications.",
        "Understood web security concepts within the Django framework.",
      ]
    },
    {
      title: "Introduction to Cloud",
      issuer: "IBM",
      category: "Cloud Computing",
      issued: "March 2024",
      credentialId: "course-v1:IBMDeveloperSkillsNetwork CC0101EN v1",
      pdfUrl: introCloudCertificate,
      learnedPoints: [
        "Understood core cloud computing concepts: IaaS, PaaS, SaaS, and deployment models.",
        "Explored major cloud providers and how they differentiate their service offerings.",
        "Learned about cloud security, compliance frameworks, and the shared responsibility model.",
        "Studied cloud networking, virtualization, and containerization fundamentals.",
        "Gained awareness of cloud economics, scalability models, and cost optimization strategies.",
        "Built a conceptual foundation for pursuing deeper cloud and DevOps specializations.",
      ]
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      category: "Data Science",
      issued: "April 2023",
      credentialId: "course-v1:CognitiveClass DA0101EN v1",
      pdfUrl: dataAnalysisCertificate,
      learnedPoints: [
        "Imported, cleaned, and transformed raw datasets using Pandas for analysis readiness.",
        "Performed descriptive statistics, correlation analysis, and hypothesis testing.",
        "Built and evaluated linear regression models using scikit-learn for predictive analysis.",
        "Visualized analysis insights and patterns using Matplotlib and Seaborn.",
        "Completed a capstone project analyzing a real-world dataset from end to end.",
        "Gained proficiency in the full data analysis lifecycle from ingestion to reporting.",
      ]
    },
  ];

  const displayedCerts = certifications.filter(c => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Cybersecurity') return c.category === 'Cybersecurity';
    if (selectedCategory === 'Frontend') return c.category === 'Frontend';
    return c.category !== 'Cybersecurity' && c.category !== 'Frontend';
  });

  const openModal = (cert: Certification) => {
    setSelectedCert({
      title: cert.title,
      issuer: cert.issuer,
      issued: cert.issued,
      category: cert.category,
      pdfUrl: cert.pdfUrl,
      learnedPoints: cert.learnedPoints,
      verified: cert.verified,
      badge: cert.badge,
    });
  };

  // Custom Inline Logo Renderers
  const renderIssuerLogo = (issuer: string) => {
    const lowerIssuer = issuer.toLowerCase();

    if (lowerIssuer.includes('tryhackme')) {
      return (
        <div className="flex items-center justify-center h-10">
          <svg viewBox="0 0 170 100" className="h-full w-auto text-zinc-900 dark:text-white">
            <path d="M 40 46 L 15 46 A 12 12 0 0 1 12 24 A 18 18 0 0 1 45 12 A 15 15 0 0 1 73 24 A 10 10 0 0 1 68 42" stroke="#c21818" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <g fontFamily="monospace" fontWeight="900" fontSize="13" letterSpacing="-0.5">
              <text x="42" y="38" fill="#c21818">10</text>
              <text x="64" y="38" fill="#c21818">10</text>
              <text x="42" y="52" fill="currentColor">1110</text>
              <text x="41" y="64" fill="#c21818">0101</text>
              <text x="69" y="64" fill="currentColor" fontSize="10">01</text>
              <text x="41" y="75" fill="currentColor" fontSize="9">01</text>
              <text x="56" y="75" fill="#c21818" fontSize="11">010</text>
              <text x="50" y="86" fill="#c21818" fontSize="9">01</text>
            </g>
            <g fontFamily="sans-serif" fontWeight="900" fontSize="31" letterSpacing="-0.5">
              <text x="86" y="34" fill="currentColor">Try</text>
              <text x="86" y="62" fill="#c21818">Hack</text>
              <text x="86" y="90" fill="currentColor">Me</text>
            </g>
          </svg>
        </div>
      );
    }

    if (lowerIssuer.includes('microsoft')) {
      return (
        <div className="flex items-center justify-center gap-1.5 h-10">
          <div className="grid grid-cols-2 gap-0.5 w-5 h-5 flex-shrink-0">
            <div className="bg-[#f25f22] w-2 h-2"></div>
            <div className="bg-[#7fba00] w-2 h-2"></div>
            <div className="bg-[#00a4ef] w-2 h-2"></div>
            <div className="bg-[#ffb900] w-2 h-2"></div>
          </div>
          <span className="font-sans font-black text-gray-900 dark:text-zinc-200 text-[10px] tracking-tight uppercase">Microsoft</span>
        </div>
      );
    }

    if (lowerIssuer.includes('nptel')) {
      return (
        <div className="flex items-center justify-center h-12">
          <svg viewBox="0 0 100 45" className="h-full w-auto fill-none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="16" r="9" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="1,1" />
            <path d="M 50 7 L 50 25 M 41 16 L 59 16 M 44 10 L 56 22 M 44 22 L 56 10" stroke="#b91c1c" strokeWidth="1" />
            <text x="50" y="38" fontSize="11" fontFamily="sans-serif" fontWeight="950" fill="#b91c1c" stroke="none" textAnchor="middle">NPTEL</text>
          </svg>
        </div>
      );
    }

    if (lowerIssuer.includes('codtech')) {
      return (
        <div className="flex items-center justify-center h-12">
          <svg viewBox="0 0 100 45" className="h-full w-auto fill-current text-[#e05a00]">
            <text x="18" y="24" fontSize="24" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fill="white" className="fill-gray-900 dark:fill-white">C</text>
            <text x="35" y="24" fontSize="24" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fill="#e05a00">T</text>
            <circle cx="64" cy="12" r="3" stroke="#e05a00" strokeWidth="1.5" fill="none" />
            <circle cx="72" cy="18" r="2" stroke="#e05a00" strokeWidth="1.5" fill="none" />
            <text x="50" y="38" fontSize="8" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fill="#e05a00" textAnchor="middle">CODTECH</text>
          </svg>
        </div>
      );
    }

    // IBM (default)
    return (
      <div className="relative flex items-center justify-center h-10 select-none">
        <span className="font-sans font-black text-3xl tracking-wider text-[#4182FF] uppercase relative">
          IBM
          <span className="absolute left-0 right-0 top-[20%] h-[7%] bg-white dark:bg-[#08080c] transition-colors" />
          <span className="absolute left-0 right-0 top-[38%] h-[7%] bg-white dark:bg-[#08080c] transition-colors" />
          <span className="absolute left-0 right-0 top-[56%] h-[7%] bg-white dark:bg-[#08080c] transition-colors" />
          <span className="absolute left-0 right-0 top-[74%] h-[7%] bg-white dark:bg-[#08080c] transition-colors" />
        </span>
      </div>
    );
  };

  return (
    <section id="certifications" className="py-8 border-t border-gray-150 dark:border-zinc-900/50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8">
                <ShieldCheck className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">
                CERTIFICATIONS <span className="text-emerald-500">•</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-zinc-400 ml-11 -mt-1">
              Click any certificate to view it
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', 'Cybersecurity', 'Others'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${selectedCategory === cat
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid – targets 2 rows at lg+ with 6 cols */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5"
        >
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={cert.credentialId}
                onClick={() => openModal(cert)}
                className="group relative rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#08080c]/60 p-3 pt-5 backdrop-blur-md hover:border-blue-500 dark:hover:border-cyber-accent dark:hover:shadow-[0_0_10px_rgba(0,255,102,0.1)] transition-all duration-300 flex flex-col justify-between items-center text-center min-h-[145px] cursor-pointer overflow-hidden"
              >
                {/* Elite badge */}
                {cert.badge && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-b-md bg-[#8c1d1d] text-white text-[8px] font-extrabold uppercase tracking-widest shadow-sm z-10 select-none">
                    {cert.badge}
                  </div>
                )}

                {/* Verified shield */}
                {cert.verified && (
                  <div className="absolute top-2.5 right-2.5 text-emerald-500 z-10 select-none" title="Verified Credential">
                    <ShieldCheck className="h-3 w-3" />
                  </div>
                )}

                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-10 h-10 bg-blue-500/5 dark:bg-cyber-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Logo */}
                <div className="w-full flex items-center justify-center pb-2.5 border-b border-gray-100 dark:border-zinc-800 h-14">
                  {renderIssuerLogo(cert.issuer)}
                </div>

                {/* Title & Issuer */}
                <div className="py-2.5 flex-1 flex flex-col items-center justify-center space-y-1 px-1">
                  <h3 className="text-[11px] font-bold text-gray-900 dark:text-zinc-100 group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] font-medium text-blue-500 dark:text-blue-400">
                    {cert.issuer.replace(' (IIT Kharagpur)', '').replace(' IT Solutions', '')}
                  </span>
                </div>

                {/* Date */}
                <div className="w-full pt-2 border-t border-gray-50 dark:border-zinc-800">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-medium text-gray-400 dark:text-zinc-400 tracking-tight">
                    <Calendar className="h-3 w-3 text-gray-400 dark:text-zinc-500" />
                    {cert.issued.split(' ')[0].slice(0, 3)} {cert.issued.split(' ')[1]}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 border border-zinc-800 bg-[#08080c]/60 rounded-xl p-4">
          <div className="flex items-center gap-3 justify-center md:justify-start md:pl-8 md:border-r border-zinc-800">
            <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700">
              <ShieldCheck className="h-4 w-4 text-zinc-300" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white flex items-center gap-1">
                <span className="text-emerald-500">10+</span> Certifications
              </div>
              <div className="text-xs text-zinc-400">Continuous Learning</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:border-r border-zinc-800">
            <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700">
              <Award className="h-4 w-4 text-yellow-500" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Always Learning</div>
              <div className="text-xs text-zinc-400">Always Improving</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:pr-8">
            <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-500 fill-none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Goal Focused</div>
              <div className="text-xs text-zinc-400">Building a secure digital future</div>
            </div>
          </div>
        </div>

      </div>

      {/* Cert Modal */}
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};
