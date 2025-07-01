import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      description: "Sign up with your email address in less than a minute. No credit card required to begin your 14-day free trial."
    },
    {
      number: "2", 
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts, digital wallets, and payment providers to bring all your finances into one place."
    },
    {
      number: "3",
      title: "Customize & Explore", 
      description: "Set your budgeting preferences, explore dashboards, and start gaining insights from day one—Zentra is ready when you are."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Get Started in Three Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
                <div className="text-8xl md:text-9xl font-bold leading-none bg-gradient-to-b from-white via-gray-200/25 to-black bg-clip-text text-transparent mb-20">
                  {step.number}
                </div>
                <div className='absolute top-20 right-0 left-0 mx-auto w-fit '>
                  <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                  </h3>
                  <p className="text-gray-200/50 font-inter text-lg leading-relaxed">
                      {step.description}
                  </p>
                </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <h3 className="text-3xl font-semibold text-white mb-8">
            Ready to take control of your finances? Get started in minutes.
          </h3>
          <button className="bg-[#2bd4b3] text-dark-950 px-5 py-3 rounded-xl font-normal text-sm hover:from-teal-500 hover:to-aqua-500 transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2">
            Create your account
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;