import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? 0 : 0,
      period: "Monthly",
      features: [
        { name: "Real-time analytics dashboard", included: true },
        { name: "Multi-account integration", included: true },
        { name: "Light & dark mode UI", included: true },
        { name: "Advanced budgeting tools", included: false },
        { name: "Automated financial reports", included: false },
        { name: "Custom data exports", included: false },
        { name: "Priority support & onboarding", included: false }
      ],
      cta: "Get started",
      popular: false
    },
    {
      name: "Professional",
      price: isYearly ? 96 : 12,
      period: "Monthly",
      features: [
        { name: "Real-time analytics dashboard", included: true },
        { name: "Multi-account integration", included: true },
        { name: "Light & dark mode UI", included: true },
        { name: "Advanced budgeting tools", included: true },
        { name: "Automated financial reports", included: true },
        { name: "Custom data exports", included: false },
        { name: "Priority support & onboarding", included: false }
      ],
      cta: "Get started",
      popular: true
    },
    {
      name: "Enterprise",
      price: isYearly ? 232 : 29,
      period: "Monthly",
      features: [
        { name: "Real-time analytics dashboard", included: true },
        { name: "Multi-account integration", included: true },
        { name: "Light & dark mode UI", included: true },
        { name: "Advanced budgeting tools", included: true },
        { name: "Automated financial reports", included: true },
        { name: "Custom data exports", included: true },
        { name: "Priority support & onboarding", included: true }
      ],
      cta: "Get started",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">
            Simple, Scalable Pricing for Every Financial Journey
          </h2>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg font-medium ${!isYearly ? 'text-white' : 'text-gray-400/65'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-black border border-[#2bd4b3] transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-[#2bd4b3] transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-white' : 'text-gray-400/65'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-[#2bd4b3] text-dark-950 px-2 py-1 rounded-full text-xs font-semibold">
                20% OFF
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-300/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-200 hover:scale-105 ${
                plan.popular 
                  ? 'border-gray-400/25  shadow-lg ' 
                  : 'border-dark-700/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-9 left-3/4 transform -translate-x-1/2">
                  <span className="border border-[#2bd4b3] text-[#2bd4b3]  px-1 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                </div>
                <p className="text-dark-400">{plan.period}</p>
              </div>

              <hr className="border-gray-300 mb-8" />

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-gray-100 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-100/45 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-100/45'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#2bd4b3] text-dark-950 py-3 rounded-lg font-semibold hover:from-teal-500 hover:to-aqua-500 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2">
                {plan.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;