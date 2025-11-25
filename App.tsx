import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import ServicesGrid from './components/ServicesGrid';
import ImpactCharts from './components/ImpactCharts';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <ImpactCharts />
        <ServicesGrid />
        <AIChat />
      </main>
      <Footer />
    </div>
  );
}

export default App;