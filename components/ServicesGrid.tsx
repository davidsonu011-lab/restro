import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900">Beyond Food Delivery</h2>
              <p className="mt-4 text-slate-600">
                Diversifying into grocery, retail, and technology to serve every local need.
              </p>
           </div>
           <a href="#" className="hidden md:flex items-center gap-1 text-red-600 font-semibold hover:text-red-700">
             View all verticals <ArrowUpRight size={18} />
           </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-3">{service.description}</p>
                <div className="mt-4 flex items-center text-red-600 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Learn more <ArrowUpRight size={14} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;