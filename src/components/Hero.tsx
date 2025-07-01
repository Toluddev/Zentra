import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-r from-[#14b8a6]/20  to-[#2bd4b3]/20 rounded-2xl blur-[140px] z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-5">
        <div className="text-center">
          {/* Subheadline */}
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-transparent border border-gray-200/60 mb-8 animate-fade-in">
            <span className="text-xs md:text-sm text-white font-medium text-center">
              Organize, visualize, and optimize your finances with confidence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-12 leading-tight animate-slide-up">
            Master your financial future
            <br />
            <span className="bg-[#2bd4b3]  to-aqua-600 bg-clip-text font-inter text-transparent">
              with intelligent insights
            </span>
          </h1>

          {/* Dashboard Mockup */}
          <div className="mt-16 animate-float">
            <div className="relative max-w-4xl mx-auto">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-aqua-500/20 rounded-2xl blur-2xl transform scale-105"></div> */}
              <div className="relative backdrop-blur-sm rounded-2xl shadow-xl">
                <img 
                  src="src/assets/IMG_3292.PNG" 
                  alt="Zentra Dashboard" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className='mt-10'>
             <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-tight">
                Join thousands of professionals using Zentra to gain
                <br />
                clarity, control, and confidence in their finances.
              </h2>
          </div>
          <div className="text-center mb-10">
          <button className="bg-[#2bd4b3] text-dark-950 px-6 py-2 rounded-xl font-normal text-lg hover:from-teal-500 hover:to-aqua-500 transition-all duration-200 transform hover:scale-105 mb-9 inline-flex items-center gap-2">
            Start your free trial
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* User Avatars */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex -space-x-2">
              <img 
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                alt="User" 
                className="w-12 h-12 rounded-full border-2 border-dark-800"
              />
              <img 
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                alt="User" 
                className="w-12 h-12 rounded-full border-2 border-dark-800"
              />
              <img 
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                alt="User" 
                className="w-12 h-12 rounded-full border-2 border-dark-800"
              />
              <img 
                src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" 
                alt="User" 
                className="w-12 h-12 rounded-full border-2 border-dark-800"
              />
            </div>
          </div>
          <p className="text-dark-300 text-lg">Loved by over 12,000 users worldwide</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;