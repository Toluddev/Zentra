import React from 'react';
import { Wallet, PieChart, CheckSquare, ArrowUpDown, CreditCard, Gift } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Comprehensive Money Management",
      description: "Consolidate your finances in one place and gain full control over your income, expenses, and savings."
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Advanced Financial Analytics",
      description: "Visualize trends, monitor performance, and make informed decisions with powerful, real-time analytics."
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Intelligent Budget Planning",
      description: "Set monthly budgets, receive smart suggestions, and stay on track with automated budget monitoring."
    },
    {
      icon: <ArrowUpDown className="w-8 h-8" />,
      title: "Seamless Money Transfers",
      description: "Manage internal transfers and external payments effortlessly with intuitive, secure transfer tools."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Efficient Card Management",
      description: "Track card activity, manage limits, and control usage across multiple debit and credit cards."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Earn Transaction Rewards",
      description: "Unlock personalized rewards and benefits based on your spending habits and transaction history."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Why Choose Zentra?
            
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-gray-200/60 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-inter text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-dark-300 font-sans text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;