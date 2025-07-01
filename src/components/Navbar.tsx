import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-24 h-16 flex items-center justify-center">
                <img
                  src="src/assets/Futuristic Lettermark Logo for Zenra Platform.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-teal-400 transition font-medium">Features</a>
              <a href="#testimonials" className="text-white hover:text-teal-400 transition font-medium">Testimonials</a>
              <a href="#process" className="text-white hover:text-teal-400 transition font-medium">Process</a>
              <a href="#pricing" className="text-white hover:text-teal-400 transition font-medium">Pricing</a>
              <a href="#faq" className="text-white hover:text-teal-400 transition font-medium">FAQ</a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white font-medium rounded-lg px-4 py-2 border border-gray-100/20 hover:border-teal-500 transition">
                Log In
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-aqua-700 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-teal-500/50 transition transform hover:scale-105">
                Start Free Trial
              </button>
            </div>

            {/* Hamburger - Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 text-white backdrop-blur-xl flex flex-col items-center justify-start pt-32 space-y-10 text-center px-6 overflow-y-auto transition-all duration-300">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold hover:text-teal-400 transition">Features</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold hover:text-teal-400 transition">Testimonials</a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold hover:text-teal-400 transition">Process</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold hover:text-teal-400 transition">Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold hover:text-teal-400 transition">FAQ</a>
        </div>
      )}
    </>
  );
};

export default Navbar;