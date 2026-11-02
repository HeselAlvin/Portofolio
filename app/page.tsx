'use client';

import React, { useState } from 'react';
import { Project, TechItem, ExperienceItem } from '@/types';
import { projectsData, techStackData, experienceData } from '@/data/portfolioData';
import { ProjectModal } from '@/components/ProjectModal';
import { Projects } from '@/components/Projects';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div 
      className={`min-h-screen font-sans transition-colors duration-300 relative ${
        isDark ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-zinc-900'
      }`}
      style={{
        backgroundImage: isDark
          ? 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)'
          : 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 28px 28px'
      }}
    >
      {/* NAVBAR RESPONSIF */}
      <nav className={`sticky top-0 z-40 border-b backdrop-blur-md px-6 py-4 transition-colors ${
        isDark ? 'border-zinc-800/80 bg-zinc-950/80 text-zinc-100' : 'border-zinc-200/80 bg-white/90 text-zinc-900 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-black tracking-wider text-base md:text-lg">HESEL ALVIN PRIYANTO</span>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className={`transition-colors ${isDark ? 'hover:text-zinc-400' : 'hover:text-zinc-600'}`}>ABOUT</a>
            <a href="#projects" className={`transition-colors ${isDark ? 'hover:text-zinc-400' : 'hover:text-zinc-600'}`}>PROJECTS</a>
            <a href="#stack" className={`transition-colors ${isDark ? 'hover:text-zinc-400' : 'hover:text-zinc-600'}`}>TECH STACK</a>
            <a href="#experience" className={`transition-colors ${isDark ? 'hover:text-zinc-400' : 'hover:text-zinc-600'}`}>EXPERIENCE</a>
            <a href="#certificates" className={`transition-colors ${isDark ? 'hover:text-zinc-400' : 'hover:text-zinc-600'}`}>CERTIFICATES</a>
            <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-zinc-400' : 'hover:text-zinc-600'}`}>CONTACT</a>
            
            <button 
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'border-zinc-300 hover:bg-zinc-100 text-zinc-800'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'border-zinc-300 hover:bg-zinc-100 text-zinc-800'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`p-2 rounded-lg border transition-colors ${
                isDark ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-200' : 'border-zinc-300 hover:bg-zinc-100 text-zinc-800'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pt-4 border-t flex flex-col gap-4 text-sm font-medium ${
            isDark ? 'border-zinc-800 text-zinc-200' : 'border-zinc-200 text-zinc-800'
          }`}>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">ABOUT</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">PROJECTS</a>
            <a href="#stack" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">TECH STACK</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">EXPERIENCE</a>
            <a href="#certificates" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">CERTIFICATES</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-75 transition-opacity">CONTACT</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className={`py-20 px-6 max-w-7xl mx-auto border-b ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`}>
        <span className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>MOBILE DEVELOPER</span>
        <h1 className={`text-5xl md:text-8xl font-black tracking-tighter mt-4 mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          HESEL ALVIN PRIYANTO
        </h1>
        <p className={`max-w-2xl text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          D3 Teknik Informatika UKSW Graduate. Menfokuskan keahlian pada Mobile Engineering (Kotlin Native, MVVM, Flutter) dan Web Backend Development.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className={`py-20 px-6 max-w-7xl mx-auto border-b ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* FOTO KIRI */}
          <div className={`h-[360px] max-w-sm mx-auto rounded-2xl overflow-hidden border flex items-center justify-center ${
            isDark ? 'border-zinc-800 bg-zinc-900/80 shadow-2xl' : 'border-zinc-200 bg-white shadow-md'
          }`}>
            <img 
              src="/hesel.png" 
              alt="Hesel Alvin Priyanto" 
              className="w-full h-full object-cover object-top scale-110" 
            />
          </div>

          {/* TEKS KANAN */}
          <div className="space-y-4">
            <span className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>ABOUT ME</span>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Passionate Mobile Developer</h2>
            <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>
              Fresh Graduate <strong className={isDark ? 'text-zinc-200 font-semibold' : 'text-zinc-900 font-semibold'}>D3 Teknik Informatika Universitas Kristen Satya Wacana</strong> dengan pengalaman magang sebagai <strong className={isDark ? 'text-zinc-200 font-semibold' : 'text-zinc-900 font-semibold'}>Mobile Developer</strong> di PT Teknologi Kartu Indonesia, khususnya dalam merancang dan mengimplementasikan aplikasi Android. Memiliki kemampuan dalam penerapan arsitektur perangkat lunak, pemodelan basis data, dan pemecahan masalah teknis. Terampil dalam menggunakan <strong className={isDark ? 'text-zinc-200 font-semibold' : 'text-zinc-900 font-semibold'}>Kotlin, Android Studio, dan Git</strong>. Berpengalaman sebagai Asisten Dosen yang membimbing praktikum 4 mata kuliah komputer serta memiliki kemampuan komunikasi dan kepemimpinan organisasi yang baik.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS CAROUSEL */}
      <Projects 
        projects={projectsData} 
        onSelectProject={(proj: Project) => setSelectedProject(proj)} 
        isDark={isDark} 
      />

      {/* WHAT I CAN DO / TECH STACK */}
      <section id="stack" className={`py-20 px-6 max-w-7xl mx-auto border-b ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`}>
        <span className={`text-xs font-mono uppercase ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>SKILLS & TOOLS</span>
        <h2 className={`text-3xl font-bold mb-8 mt-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>WHAT I CAN DO</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStackData.map((cat: { category: string; items: TechItem[] }, idx: number) => (
            <div key={idx} className={`p-6 border rounded-xl backdrop-blur-sm ${
              isDark ? 'border-zinc-800/90 bg-zinc-900/40' : 'border-zinc-200/90 bg-white/80 shadow-sm'
            }`}>
              <h3 className={`text-sm font-mono mb-4 uppercase ${isDark ? 'text-zinc-400' : 'text-zinc-600 font-semibold'}`}>{cat.category}</h3>
              <div className="space-y-3">
                {cat.items.map((item: TechItem, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                    <span className={`text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className={`py-20 px-6 max-w-7xl mx-auto border-b ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`}>
        <span className={`text-xs font-mono uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>CAREER PATH</span>
        <h2 className={`text-3xl font-bold mb-8 mt-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>EXPERIENCE</h2>
        
        <div className="space-y-6">
          {experienceData.map((exp: ExperienceItem, idx: number) => (
            <div key={idx} className={`p-6 md:p-8 border rounded-2xl backdrop-blur-sm ${
              isDark ? 'border-zinc-800/90 bg-zinc-900/40' : 'border-zinc-200/90 bg-white/80 shadow-sm'
            }`}>
              <div className={`flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b pb-4 ${
                isDark ? 'border-zinc-800/60' : 'border-zinc-100'
              }`}>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{exp.role}</h3>
                  <p className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.company}</p>
                </div>
                <span className={`text-xs font-mono border px-3 py-1.5 rounded-full w-fit ${
                  isDark ? 'text-zinc-400 border-zinc-800 bg-zinc-950' : 'text-zinc-700 border-zinc-200 bg-zinc-100'
                }`}>
                  {exp.period}
                </span>
              </div>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{exp.desc}</p>
              {exp.points && (
                <ul className="space-y-2.5">
                  {exp.points.map((point: string, pIdx: number) => (
                    <li key={pIdx} className={`text-xs md:text-sm flex items-start gap-2.5 ${
                      isDark ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      <span className={`font-bold mt-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <Certificates isDark={isDark} />

      {/* CONTACT SECTION */}
      <Contact isDark={isDark} />

      {/* MODAL POPUP */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        isDark={isDark} 
      />
    </div>
  );
}