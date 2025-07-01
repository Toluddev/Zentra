import React, { useState } from 'react';

const PaymentProviders: React.FC = () => {
  const providers = [
    { key: 'bank', name: 'Bank account' },
    { key: 'paypal', name: 'PayPal' },
    { key: 'apple', name: 'Apple Pay' },
    { key: 'google', name: 'Google Pay' },
    { key: 'payoneer', name: 'Payoneer' }
  ];

  const content = {
    bank: {
      title: 'Bank account',
      description: 'Securely link your personal or business bank accounts to monitor balances, view transactions, and manage transfers in one centralized dashboard.'
    },
    paypal: {
      title: 'PayPal',
      description: 'Connect your PayPal account to send and receive money with ease, especially for freelance or international transactions.'
    },
    apple: {
      title: 'Apple Pay',
      description: 'Use Apple Pay for fast, private, and secure payments directly from your Apple devices.'
    },
    google: {
      title: 'Google Pay',
      description: 'Easily pay and manage finances with Google Pay — a simple and seamless payment experience.'
    },
    payoneer: {
      title: 'Payoneer',
      description: 'Link your Payoneer account for smooth international payments, withdrawals, and business transactions.'
    }
  };

  const [selected, setSelected] = useState<'bank' | 'paypal' | 'apple' | 'google' | 'payoneer'>('bank');

  const current = content[selected];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Connect with Your Preferred Payment Providers
          </h2>
        </div>

        {/* Provider buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {providers.map((provider) => (
            <button
              key={provider.key}
              onClick={() => setSelected(provider.key as typeof selected)}
              className={`px-3 py-2 rounded-xl font-medium transition-all duration-200 ${
                selected === provider.key
                  ? ' border-b border-teal-500 text-white'
                  : 'bg-transparent text-gray-200/60 border border-gray-200/20 hover:border-teal-500/40 hover:text-white'
              }`}
            >
              {provider.name}
            </button>
          ))}
        </div>

        {/* Static right image + dynamic left text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side (text changes) */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              {current.title}
            </h3>
            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              {current.description}
            </p>
            <button className="bg-gradient-to-r from-teal-400 to-aqua-400 text-dark-950 px-6 py-3 rounded-lg font-semibold hover:from-teal-500 hover:to-aqua-500 transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2">
              Get started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Side (image remains the same) */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl">
              <img 
                src="/assets/Screenshot 2025-07-01 at 03.31.40.jpg" 
                alt="Payment Providers Dashboard" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentProviders;