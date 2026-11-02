'use client';

import React from 'react';

interface MobileShowcaseProps {
  screenLeft?: string;
  screenCenter?: string;
  screenRight?: string;
  title?: string;
}

export const MobileShowcase: React.FC<MobileShowcaseProps> = ({
  screenLeft = '/ui1.png',
  screenCenter = '/ui2.png',
  screenRight = '/maps.png',
  title = '',
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6">
      <div className="relative flex items-center justify-center w-full max-w-4xl h-[460px] md:h-[520px] px-4 overflow-hidden">
        
        {/* HP KIRI */}
        <div className="absolute left-[6%] md:left-[16%] z-10 -rotate-6 scale-90 md:scale-95 transition-all duration-300">
          <div className="w-[180px] h-[370px] md:w-[220px] md:h-[450px] bg-zinc-950 rounded-[2.2rem] border-4 border-zinc-800 shadow-2xl overflow-hidden relative">
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-20"></div>
            <img
              src={screenLeft}
              alt="Screen Left"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* HP TENGAH */}
        <div className="relative z-20 scale-100 md:scale-105 transition-all duration-300">
          <div className="w-[200px] h-[410px] md:w-[240px] md:h-[490px] bg-zinc-950 rounded-[2.5rem] border-4 border-zinc-700 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-zinc-500/30 overflow-hidden relative">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20"></div>
            <img
              src={screenCenter}
              alt="Screen Center"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* HP KANAN */}
        <div className="absolute right-[6%] md:right-[16%] z-10 rotate-6 scale-90 md:scale-95 transition-all duration-300">
          <div className="w-[180px] h-[370px] md:w-[220px] md:h-[450px] bg-zinc-950 rounded-[2.2rem] border-4 border-zinc-800 shadow-2xl overflow-hidden relative">
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-20"></div>
            <img
              src={screenRight}
              alt="Screen Right"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>

      {title && (
        <p className="text-xs font-mono text-zinc-500 mt-2 uppercase tracking-widest">
          • {title}
        </p>
      )}
    </div>
  );
};

export default MobileShowcase;