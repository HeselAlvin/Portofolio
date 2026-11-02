'use client';

import React, { useState } from 'react';
import { CertificateItem } from '@/types';
import { certificatesData } from '@/data/portfolioData';
import { ChevronRight, ExternalLink, X } from 'lucide-react';

interface CertificatesProps {
  isDark?: boolean;
}

export const Certificates: React.FC<CertificatesProps> = ({ isDark = true }) => {
  const [activePreview, setActivePreview] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className={`py-20 px-6 max-w-7xl mx-auto border-b ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`}>
      <div className="mb-12">
        <span className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
          • CREDENTIALS & LICENSES
        </span>
        <h2 className={`text-4xl md:text-5xl font-black tracking-tight mt-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          CERTIFICATES
        </h2>
        <p className={`mt-3 max-w-xl text-sm md:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
         Kumpulan sertifikasi resmi dan pengakuan kompetensi profesional Hesel Alvin Priyanto.
        </p>
      </div>

      {/* GRID KARTU SERTIFIKAT DENGAN THUMBNAIL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificatesData.map((cert: CertificateItem) => (
          <div 
            key={cert.id} 
            className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start ${
              isDark 
                ? 'border-zinc-800/90 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/70' 
                : 'border-zinc-200/90 bg-white hover:border-zinc-300 shadow-sm'
            }`}
          >
            {/* THUMBNAIL SERTIFIKAT KIRI */}
            <div 
              onClick={() => setActivePreview(cert)}
              className="w-full sm:w-44 h-32 rounded-xl overflow-hidden border border-zinc-700/50 flex-shrink-0 cursor-pointer group relative bg-zinc-950"
            >
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                onError={(e) => {
                  // Fallback jika gambar belum dimasukkan
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-medium text-white">
                Zoom Preview
              </div>
            </div>

            {/* INFORMASI SERTIFIKAT KANAN */}
            <div className="flex-1 flex flex-col justify-between h-full space-y-3 w-full">
              <div>
                <h3 className={`text-base md:text-lg font-bold leading-snug ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  {cert.title}
                </h3>
                <p className={`text-xs font-semibold mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {cert.issuer}
                </p>
                <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  {cert.date}
                </p>
              </div>

              {/* TOMBOL LIHAT DOKUMEN */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActivePreview(cert)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    isDark 
                      ? 'border-zinc-700/80 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200' 
                      : 'border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
                  }`}
                >
                  Lihat Dokumen <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-xs font-mono transition-colors ${
                      isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL POPUP FULL PREVIEW SERTIFIKAT */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 ${
            isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'
          }`}>
            <button 
              onClick={() => setActivePreview(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-500/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold pr-10 mb-2">{activePreview.title}</h3>
            <p className="text-xs font-mono text-zinc-400 mb-4">• {activePreview.issuer} ({activePreview.date})</p>

            <div className="w-full bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800 mb-4 flex justify-center">
              <img 
                src={activePreview.image} 
                alt={activePreview.title} 
                className="max-h-[70vh] object-contain w-auto"
              />
            </div>

            <div className="flex justify-end gap-3">
              {activePreview.file && (
                <a 
                  href={activePreview.file} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors inline-flex items-center gap-1.5"
                >
                  Buka File Asli / PDF <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;