import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "What is Zentra?",
      answer: "Zentra is a comprehensive financial management platform that helps you organize, visualize, and optimize your finances with intelligent insights. It provides real-time analytics, budgeting tools, and seamless integration with your bank accounts and payment providers."
    },
    {
      question: "Is Zentra secure?",
      answer: "Yes, Zentra uses bank-level security with 256-bit SSL encryption, two-factor authentication, and read-only access to your financial data. We never store your banking credentials and are compliant with industry standards including PCI DSS and SOC 2."
    },
    {
      question: "Can I use Zentra on mobile devices?",
      answer: "Absolutely! Zentra is fully responsive and works seamlessly across all devices including smartphones, tablets, and desktop computers. We also offer native mobile apps for iOS and Android with full feature parity."
    },
    {
      question: "Does Zentra support multiple accounts?",
      answer: "Yes, Zentra supports unlimited bank accounts, credit cards, investment accounts, and digital wallets. You can connect accounts from over 10,000 financial institutions and view everything in one unified dashboard."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all Professional features. No credit card required to start your trial. You can upgrade, downgrade, or cancel at any time during or after your trial period."
    }
  ];

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-6 text-left hover:text-teal-400 transition-colors"
            >
              <span className="text-lg font-medium pr-8">{item.question}</span>
              {openItems.includes(index) ? (
                <Minus className="w-6 h-6 text-white flex-shrink-0" />
              ) : (
                <Plus className="w-6 h-6 text-white flex-shrink-0" />
              )}
            </button>
            {openItems.includes(index) && (
              <div className="pb-6 text-gray-300 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-6">
          Still have questions? We're here to help.
        </h3>
        <button className="bg-[#2bd4b3] text-gray-900 px-3 py-2 rounded-lg font-normal hover:bg-teal-300 transition-colors inline-flex items-center gap-2">
          Contact support
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
};

export default FAQ;