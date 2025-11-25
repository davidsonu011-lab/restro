import React from 'react';
import { Menu, Truck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-1.5 rounded-lg text-white">
            <Truck size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">DashConnect</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#overview" className="hover:text-red-600 transition-colors">Overview</a>
          <a href="#ecosystem" className="hover:text-red-600 transition-colors">Ecosystem</a>
          <a href="#impact" className="hover:text-red-600 transition-colors">Impact</a>
          <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
        </nav>

        <button className="md:hidden p-2 text-slate-600">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;