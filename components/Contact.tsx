'use client';

import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface ContactProps {
  isDark?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDark = true }) => {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <span className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
          • GET IN TOUCH
        </span>
        <h2 className={`text-4xl md:text-5xl font-black tracking-tight mt-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          CONTACT
        </h2>
        <p className={`mt-3 max-w-xl text-sm md:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          Tertarik untuk berkolaborasi atau memiliki peluang menarik? Jangan ragu untuk menghubungi saya melalui saluran di bawah ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* EMAIL CARD */}
        <a 
          href="mailto:heselalvinpriyanto@gmail.com"
          className={`group p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
            isDark 
              ? 'border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-700' 
              : 'border-zinc-200 bg-white hover:bg-zinc-100 hover:border-zinc-300 shadow-sm'
          }`}
        >
          <div className={`p-3.5 rounded-xl border transition-colors ${
            isDark ? 'border-zinc-800 bg-zinc-950 text-zinc-300 group-hover:text-white' : 'border-zinc-200 bg-zinc-100 text-zinc-700 group-hover:text-zinc-950'
          }`}>
            <Mail className="w-6 h-6" />
          </div>
          <div className="overflow-hidden">
            <h3 className={`text-sm font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>Email</h3>
            <p className={`text-xs font-mono truncate mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              heselalvinpriyanto@gmail.com
            </p>
          </div>
        </a>

        {/* GITHUB CARD */}
        <a 
          href="https://github.com/HeselAlvin"
          target="_blank"
          rel="noopener noreferrer"
          className={`group p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
            isDark 
              ? 'border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-700' 
              : 'border-zinc-200 bg-white hover:bg-zinc-100 hover:border-zinc-300 shadow-sm'
          }`}
        >
          <div className={`p-3.5 rounded-xl border transition-colors ${
            isDark ? 'border-zinc-800 bg-zinc-950 text-zinc-300 group-hover:text-white' : 'border-zinc-200 bg-zinc-100 text-zinc-700 group-hover:text-zinc-950'
          }`}>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <div>
            <h3 className={`text-sm font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>GitHub</h3>
            <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>github.com/HeselAlvin</p>
          </div>
        </a>

        {/* LINKEDIN CARD */}
        <a 
          href="https://linkedin.com/in/heselalvin" 
          target="_blank"
          rel="noopener noreferrer"
          className={`group p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
            isDark 
              ? 'border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-700' 
              : 'border-zinc-200 bg-white hover:bg-zinc-100 hover:border-zinc-300 shadow-sm'
          }`}
        >
          <div className={`p-3.5 rounded-xl border transition-colors ${
            isDark ? 'border-zinc-800 bg-zinc-950 text-zinc-300 group-hover:text-white' : 'border-zinc-200 bg-zinc-100 text-zinc-700 group-hover:text-zinc-950'
          }`}>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </div>
          <div>
            <h3 className={`text-sm font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>LinkedIn</h3>
            <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Mari terhubung!</p>
          </div>
        </a>

        {/* LOKASI CARD */}
        <div className={`p-6 rounded-2xl border flex items-center gap-4 ${
          isDark ? 'border-zinc-800 bg-zinc-900/40' : 'border-zinc-200 bg-white shadow-sm'
        }`}>
          <div className={`p-3.5 rounded-xl border ${
            isDark ? 'border-zinc-800 bg-zinc-950 text-zinc-300' : 'border-zinc-200 bg-zinc-100 text-zinc-700'
          }`}>
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`text-sm font-semibold ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>Lokasi</h3>
            <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Jawa Tengah, Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;