import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="overview" className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?blur=5')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center rounded-full bg-red-600/20 px-3 py-1 text-sm font-medium text-red-400 ring-1 ring-inset ring-red-600/30">
            Local Commerce Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Empowering Local Economies
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Connecting consumers to their favorite local businesses in 27+ countries. 
            DoorDash isn't just about food delivery; it's about logistical excellence, 
            flexible work, and community impact.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
              Explore Impact <ArrowRight size={18} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;