import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { PROJECT_DASH_DATA, IMPACT_STATS } from '../constants';

const ImpactCharts: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Project DASH & Social Impact</h2>
          <p className="mt-4 text-slate-600">
            Leveraging logistics to fight food insecurity and empower local communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="text-3xl font-extrabold text-red-600">{stat.value}</div>
              <div className="text-sm font-bold text-slate-900 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-2">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Charts Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chart 1: Project DASH Meals */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">Project DASH Growth</h3>
              <p className="text-sm text-slate-500">Cumulative meals delivered (Millions)</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PROJECT_DASH_DATA}>
                  <defs>
                    <linearGradient id="colorMeals" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#DC2626" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748B'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FFF', borderRadius: '8px', border: '1px solid #E2E8F0' }}
                    itemStyle={{ color: '#DC2626', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="meals" stroke="#DC2626" fillOpacity={1} fill="url(#colorMeals)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Visualization 2: Economic Value Context */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
             
             <h3 className="text-2xl font-bold mb-4 relative z-10">Economic Empowerment</h3>
             <p className="text-slate-300 mb-8 relative z-10">
               DoorDash isn't just about convenience. It is a massive economic engine. 
               In 2023 alone, the platform generated significant financial velocity.
             </p>

             <div className="space-y-6 relative z-10">
                <div>
                   <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Dasher Earnings (Global)</span>
                      <span className="font-bold text-white">$15 Billion+</span>
                   </div>
                   <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Merchant Profit Increase</span>
                      <span className="font-bold text-white">70% Reporting</span>
                   </div>
                   <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCharts;