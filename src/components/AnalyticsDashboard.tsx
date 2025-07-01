import React from 'react';

const CoreFeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            A Closer Look at Zentra's Core Features
          </h2>
        </div>

        {/* Analytics Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Powerful Analytics Dashboard
            </h3>
            <p className="text-dark-300 text-lg leading-relaxed">
              Visualize your financial health with Zentra's interactive analytics screen. Track income and expenses over time, identify patterns, and dive into detailed insights that support smarter decision-making.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl">
              <img 
                src="/assets/A_digital_screenshot_of_Zentra's_analytics_dashboa.jpg" 
                alt="Analytics Dashboard" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

       <hr className="w-1/4 border-gray-300 mb-20 mx-auto" />

        {/* Card Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl">
              <img 
                src="/assets/A_digital_screenshot_of_Marcus's_financial_dashboa.jpg" 
                alt="Card Management" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Centralized Card Management
            </h3>
            <p className="text-dark-300 text-lg leading-relaxed">
              The "My cards" screen lets you view and control all your debit and credit cards in one place. Instantly check balances, monitor recent activity, and manage settings with ease and security.
            </p>
          </div>
        </div>

       <hr className="w-1/4 border-gray-300 mb-20 mx-auto" />

        {/* Budgeting Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Intuitive Budgeting Interface
            </h3>
            <p className="text-dark-300 text-lg leading-relaxed">
              Zentra's budgeting screen empowers you to set monthly goals, categorize expenses, and get real-time feedback. Stay disciplined with personalized insights and adaptive budget tracking.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl">
              <img 
                src="/assets/IMG_3295.jpg" 
                alt="Budgeting Interface" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreFeaturesSection;