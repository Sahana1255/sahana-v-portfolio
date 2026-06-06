import React, { useEffect } from 'react';
import { X, ShieldCheck, Calendar, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CertModalData {
  title: string;
  issuer: string;
  issued: string;
  category: string;
  pdfUrl: string;
  learnedPoints: string[];
  verified?: boolean;
  badge?: string;
}

interface CertModalProps {
  cert: CertModalData | null;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    if (cert) document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, cert]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          key="cert-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-stretch justify-stretch bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="cert-modal-box"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-full max-h-full bg-white dark:bg-[#0a0a0f] border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 dark:border-zinc-800 flex-shrink-0">
              <div className="flex items-center gap-2.5 overflow-hidden min-w-0">
                <ShieldCheck className="h-4 w-4 text-blue-500 dark:text-cyber-accent flex-shrink-0" />
                <span className="font-bold text-gray-900 dark:text-white text-sm truncate">{cert.title}</span>
                <span className="hidden sm:block px-2 py-0.5 rounded text-[9px] font-mono font-bold text-blue-500 dark:text-cyber-accent bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 flex-shrink-0 whitespace-nowrap">
                  {cert.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 transition-colors flex-shrink-0 ml-3"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body – Single Column Layout */}
            <div className="flex flex-row h-full overflow-hidden">
              {/* Certificate Image – Full Width */}
              <iframe
                  src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="h-full"
                  style={{ width: '70%', border: 'none' }}
                  title={cert.title}
                />

              {/* Content – Below Image */}
              <div className="p-5 space-y-5 overflow-y-auto" style={{ width: '30%' }}>
                {/* Cert Meta */}
                <div>
                  <div className="text-[9px] font-mono font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">
                    Issued By
                  </div>
                  <p className="text-base font-bold text-blue-500 dark:text-blue-400">{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500 dark:text-zinc-400 font-mono">
                    <Calendar className="h-3 w-3" />
                    {cert.issued}
                  </div>
                </div>

                <div className="border-t border-gray-100 dark:border-zinc-800" />

                {/* What I Learned */}
                <div>
                  <div className="flex items-center gap-2 mb-3.5">
                    <div className="w-6 h-6 rounded-md bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest">What I Learned</h3>
                  </div>
                  <ul className="space-y-3">
                    {cert.learnedPoints.map((pt, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.06 }}
                        className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-zinc-300 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
