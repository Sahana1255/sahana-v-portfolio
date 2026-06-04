import React, { useState } from 'react';
import { Star, ShieldAlert, Cpu, ArrowRight, CheckCircle2, Play, AlertTriangle } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const [urlInput, setUrlInput] = useState('https://example.com');
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(true);
  const [riskScore, setRiskScore] = useState(25);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [resultsData, setResultsData] = useState({
    ssl: true,
    whois: true,
    phishing: true,
    ports: true,
    ascii: true
  });

  const techStack = [
    "Python", "Flask", "OpenSSL", "WHOIS", "Nmap", "Scikit-learn", "HTML", "CSS", "JavaScript", "SQLite"
  ];

  const steps = [
    { log: "Initiating analysis...", duration: 600 },
    { log: "Checking SSL Certificate validation...", duration: 800 },
    { log: "Querying WHOIS records database...", duration: 800 },
    { log: "Running Machine Learning Phishing scan...", duration: 900 },
    { log: "Checking ASCII/Unicode character anomalies...", duration: 700 },
    { log: "Scanning active ports with Nmap...", duration: 800 },
    { log: "Compiling risk scorecard...", duration: 500 }
  ];

  const handleScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setShowResults(false);
    setScanLogs([]);

    // Determine risk based on URL content to make it interactive and fun
    const urlLower = urlInput.toLowerCase();
    let finalScore = 25;
    let finalResults = { ssl: true, whois: true, phishing: true, ports: true, ascii: true };

    if (urlLower.includes('phish') || urlLower.includes('secure-login') || urlLower.includes('update-banking') || urlLower.includes('free-gift')) {
      finalScore = 85;
      finalResults = { ssl: false, whois: false, phishing: false, ports: true, ascii: false };
    } else if (urlLower.includes('suspicious') || urlLower.includes('test')) {
      finalScore = 55;
      finalResults = { ssl: true, whois: false, phishing: false, ports: true, ascii: true };
    } else {
      finalScore = 15;
      finalResults = { ssl: true, whois: true, phishing: true, ports: true, ascii: true };
    }

    setRiskScore(finalScore);
    setResultsData(finalResults);

    let currentStep = 0;
    const runStep = () => {
      if (currentStep < steps.length) {
        setScanLogs(prev => [...prev, `[INFO] ${steps[currentStep].log}`]);
        setTimeout(() => {
          currentStep++;
          runStep();
        }, steps[currentStep].duration);
      } else {
        setIsScanning(false);
        setShowResults(true);
      }
    };

    runStep();
  };

  // Get status color based on risk score
  const getRiskStatus = (score: number) => {
    if (score < 30) return { label: "Low Risk", color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/5", stroke: "#00ff66" };
    if (score < 60) return { label: "Moderate Risk", color: "text-amber-500 border-amber-500/30 bg-amber-500/5", stroke: "#f59e0b" };
    return { label: "High Risk", color: "text-rose-500 border-rose-500/30 bg-rose-500/5", stroke: "#f43f5e" };
  };

  const riskStatus = getRiskStatus(riskScore);
  // Calculate SVG circular dasharray offset
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (riskScore / 100) * circumference;

  return (
    <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden h-full text-left">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-accent/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-zinc-900 text-emerald-600 dark:text-cyber-accent border border-emerald-200 dark:border-zinc-800 shadow-md">
          <Star className="h-5 w-5 fill-current" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
        </div>
        <div className="space-y-0.5">
          <h2 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">
            Featured Project
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {/* Project Meta */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            URL Threat Evaluation and Risk Scoring System
          </h3>
          <div className="text-xs font-mono font-bold text-blue-600 dark:text-cyber-accent flex items-center gap-1.5">
            <Cpu className="h-3.5 w-3.5" />
            Cyber Security and Machine Learning Integration
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
          Developed a URL Security Checker Tool using Python, Flask, and CLI tools (OpenSSL, WHOIS, PowerShell) to perform SSL validation, phishing detection, ASCII/Unicode checks, and port scanning with Python-nmap. Collaborated with a teammate on a lightweight ML module for phishing risk scoring and site classification (Safe, Suspicious, Dangerous).
        </p>

        {/* Interactive Analyzer Widget */}
        <div className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-950/60 shadow-inner">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-zinc-900">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-mono text-gray-400 dark:text-zinc-500 ml-2">URL Security Analyzer</span>
            </div>
            {isScanning && (
              <span className="text-[10px] font-mono text-cyber-accent animate-pulse">Scanning...</span>
            )}
          </div>

          {/* Scanner Input Row */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              disabled={isScanning}
              placeholder="Enter URL to analyze..."
              className="flex-1 px-3 py-1.5 text-xs font-mono rounded border border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-cyber-accent"
            />
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-700 dark:bg-cyber-accent dark:hover:bg-emerald-400 text-white dark:text-black font-semibold text-xs transition-colors flex items-center gap-1 shadow-sm disabled:opacity-50"
            >
              <Play className="h-3 w-3 fill-current" />
              Scan
            </button>
          </div>

          {/* Live Scanner Terminal / Results */}
          <div className="min-h-[160px] flex flex-col justify-center">
            {isScanning && (
              <div className="font-mono text-[10px] text-zinc-400 text-left bg-zinc-950 p-3 rounded border border-zinc-900 space-y-1 h-36 overflow-y-auto">
                {scanLogs.map((log, lIdx) => (
                  <div key={lIdx} className={log.includes('INFO') ? 'text-cyber-accent' : 'text-zinc-400'}>
                    {log}
                  </div>
                ))}
                <div className="h-2 w-1 bg-cyber-accent animate-pulse inline-block" />
              </div>
            )}

            {!isScanning && showResults && (
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Dial Score */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center p-2 border-r border-gray-200 dark:border-zinc-800/80">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Grey Track */}
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-gray-200 dark:stroke-zinc-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Colored Progress */}
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        stroke={riskStatus.stroke}
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Dial Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xl font-mono font-extrabold text-gray-900 dark:text-white">
                        {riskScore}
                      </span>
                      <span className="text-[8px] text-gray-400 dark:text-zinc-500 uppercase tracking-widest font-bold">
                        / 100
                      </span>
                    </div>
                  </div>
                  <div className={`mt-2.5 px-2.5 py-0.5 rounded border text-[9px] font-mono font-bold ${riskStatus.color}`}>
                    {riskStatus.label}
                  </div>
                </div>

                {/* Checklist Results */}
                <div className="sm:col-span-7 space-y-2 text-left px-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500 dark:text-zinc-400">SSL Validation</span>
                    {resultsData.ssl ? (
                      <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> Valid</span>
                    ) : (
                      <span className="text-rose-500 flex items-center gap-1"><ShieldAlert className="h-3.5 w-3.5" /> Expired/Self</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500 dark:text-zinc-400">WHOIS Lookup</span>
                    {resultsData.whois ? (
                      <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> Registered</span>
                    ) : (
                      <span className="text-rose-500 flex items-center gap-1"><AlertTriangle className="h-3.5 w-3.5" /> Unknown</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500 dark:text-zinc-400">Phishing Analysis</span>
                    {resultsData.phishing ? (
                      <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> Safe</span>
                    ) : (
                      <span className="text-rose-500 flex items-center gap-1"><ShieldAlert className="h-3.5 w-3.5" /> Phish Flagged</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500 dark:text-zinc-400">Port Scanning</span>
                    {resultsData.ports ? (
                      <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> Secured</span>
                    ) : (
                      <span className="text-rose-500 flex items-center gap-1"><AlertTriangle className="h-3.5 w-3.5" /> Open Ports</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500 dark:text-zinc-400">ASCII Homoglyph</span>
                    {resultsData.ascii ? (
                      <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" /> Clean</span>
                    ) : (
                      <span className="text-rose-500 flex items-center gap-1"><ShieldAlert className="h-3.5 w-3.5" /> Punycode Detected</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technologies List */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-gray-500 dark:text-zinc-500 uppercase tracking-widest">
            Technologies Used
          </div>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[10px] font-mono bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 rounded border border-gray-200 dark:border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Flow Diagram */}
        <div className="p-3 border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950/20 rounded-lg space-y-2">
          <div className="text-[10px] font-mono font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider text-center">
            System Integration Architecture Flow
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono font-semibold text-gray-600 dark:text-zinc-400 py-1">
            <span className="px-2 py-1 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">User</span>
            <ArrowRight className="h-3.5 w-3.5 text-blue-500 dark:text-cyber-accent" />
            <span className="px-2 py-1 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center">Frontend<br/><span className="text-[8px] text-zinc-500">(React + Vite)</span></span>
            <ArrowRight className="h-3.5 w-3.5 text-blue-500 dark:text-cyber-accent" />
            <span className="px-2 py-1 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center">Backend API<br/><span className="text-[8px] text-zinc-500">(Flask Core)</span></span>
            <ArrowRight className="h-3.5 w-3.5 text-blue-500 dark:text-cyber-accent" />
            <span className="px-2 py-1 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-center">Modules<br/><span className="text-[8px] text-zinc-500">(Nmap/SQLite/ML)</span></span>
          </div>
        </div>

      </div>
    </div>
  );
};
