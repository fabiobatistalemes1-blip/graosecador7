import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
