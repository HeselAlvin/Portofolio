'use client';

import React from 'react';
import { Project } from '@/types';
import { X, ExternalLink } from 'lucide-react';
import { MobileShowcase } from '@/components/Mobileshowcase';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 md:p-8 ${
        isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-500/20 transition-colors z-50"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-4">
          {/* KOLOM KIRI: INFO & GITHUB */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">{project.type}</span>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{project.desc}</p>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> View GitHub Repository
            </a>
          </div>

          {/* KOLOM TENGAH: MOCKUP 3D HP DINAMIS */}
          <div className="flex justify-center items-center bg-zinc-950/60 rounded-2xl border border-zinc-800/60 overflow-hidden">
            <MobileShowcase 
              screenLeft={project.screens?.left || project.image}
              screenCenter={project.screens?.center || project.image}
              screenRight={project.screens?.right || project.image}
              title={project.title}
            />
          </div>

          {/* KOLOM KANAN: TECH STACK */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Tech Stack Used</h4>
            <div className="flex flex-col gap-3">
              {project.tech.map((t, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-950/30">
                  <img src={t.icon} alt={t.name} className="w-6 h-6 object-contain" />
                  <span className="text-sm font-medium">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};