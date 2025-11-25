import React from 'react';
import { Users, Bike, Store, TrendingUp } from 'lucide-react';
import { STAKEHOLDERS } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  users: <Users size={32} />,
  bike: <Bike size={32} />,
  store: <Store size={32} />
};

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">The Three-Sided Marketplace</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            DoorDash creates value by connecting three distinct groups in a seamless logistical loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STAKEHOLDERS.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                {IconMap[item.iconName]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 mb-6 min-h-[48px]">{item.description}</p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 bg-slate-100 p-3 rounded-lg">
                <TrendingUp size={16} className="text-green-600" />
                {item.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;