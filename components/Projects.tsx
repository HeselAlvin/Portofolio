'use client';

import React, { useState } from 'react';
import { Project } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MobileShowcase } from '@/components/Mobileshowcase';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject, isDark }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">• SELECTED WORK</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2">MY PROJECTS</h2>
        </div>

        {/* CAROUSEL SHOWCASE */}
        <div className="relative flex items-center justify-center min-h-[500px] overflow-hidden py-4">
          <button 
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute left-2 md:left-4 z-30 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 text-white hover:bg-zinc-800 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center gap-6 w-full max-w-6xl">
            {projects.map((proj, idx) => {
              const isCenter = idx === activeIndex;
              const isLeft = idx === (activeIndex - 1 + projects.length) % projects.length;
              const isRight = idx === (activeIndex + 1) % projects.length;

              if (!isCenter && !isLeft && !isRight) return null;

              const isMobileProject = proj.type.toLowerCase().includes('mobile') || proj.type.toLowerCase().includes('application');

              return (
                <div
                  key={proj.id}
                  onClick={() => isCenter ? onSelectProject(proj) : setActiveIndex(idx)}
                  className={`cursor-pointer transition-all duration-500 ease-out rounded-2xl border overflow-hidden relative flex flex-col justify-between ${
                    isCenter 
                      ? 'w-full max-w-3xl h-[440px] md:h-[480px] scale-100 z-20 opacity-100 shadow-2xl border-zinc-600 ring-1 ring-zinc-500/30' 
                      : 'hidden md:flex w-72 h-[260px] scale-90 z-10 opacity-30 blur-[1px] border-zinc-800'
                  } ${isDark ? 'bg-zinc-950' : 'bg-white'}`}
                >
                  {/* KONTEN SHOWCASE MOCKUP ATAU GAMBAR */}
                  <div className="relative flex-1 w-full h-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                    {isMobileProject ? (
                      <div className="w-full h-full scale-75 md:scale-90 flex items-center justify-center -mt-4">
                        <MobileShowcase 
                          screenLeft={proj.screens?.left || proj.image}
                          screenCenter={proj.screens?.center || proj.image}
                          screenRight={proj.screens?.right || proj.image}
                          title=""
                        />
                      </div>
                    ) : (
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-full h-full object-cover" 
                      />
                    )}

                    {/* OVERLAY JUDUL PROYEK */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex items-end p-6 pointer-events-none">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">{proj.type}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{proj.title}</h3>
                      </div>
                    </div>
                  </div>

                  {isCenter && (
                    <div className="p-3 text-center border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-sm">
                      <p className="text-xs font-mono text-zinc-400">Klik kartu untuk detail 3 aspek & GitHub</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button 
            onClick={handleNext}
            aria-label="Next project"
            className="absolute right-2 md:right-4 z-30 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 text-white hover:bg-zinc-800 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};