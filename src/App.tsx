import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import PaymentProviders from './components/PaymentProviders';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FAQ from './components/Faq';

function App() {
  return (
    <div className="font-inter bg-black text-white scroll-smooth">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="social-proof">
        <SocialProof />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="analytics">
        <AnalyticsDashboard />
      </section>

      <section id="payments">
        <PaymentProviders />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <Footer />
    </div>
  );
}

export default App;