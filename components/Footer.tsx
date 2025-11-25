import React from 'react';
import { Truck, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <Truck size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight">DashConnect</span>
            </div>
            <p className="text-sm">
              Connecting neighborhoods, one delivery at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Get the App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Become a Dasher</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Merchants</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Follow Us</h4>
             <div className="flex gap-4">
                <a href="#" className="hover:text-white"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white"><Facebook size={20} /></a>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-xs text-center">
          &copy; {new Date().getFullYear()} DashConnect Demo. Built for educational purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;