import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Elegant, efficient, and incredibly insightful — exactly what modern teams need.",
    name: "Daniel Chen",
    title: "SaaS Product Manager",
    avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "This dashboard completely transformed how I manage client portfolios.",
    name: "Emily Hartman",
    title: "Senior Financial Consultant",
    avatar: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Real-time insights and customizable reports are ___ essential to my workflow.",
    name: "Omar Haddad",
    title: "Investment Portfolio Manager",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "This platform empowers smarter decisions with financial data and access to efficiency.",
    name: "Sophia Martinez",
    title: "Corporate Finance",
    avatar: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
  }
];

// Duplicate testimonials to simulate infinite scroll
const loopingTestimonials = [...testimonials, ...testimonials];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
          What Professionals Are Saying
        </h2>
      </div>

      <motion.div
        className="flex space-x-6 w-[200%]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25
        }}
      >
        {loopingTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-[350px] flex-shrink-0 bg-gray-400/25 backdrop-blur-sm border border-white/10 rounded-2xl px-10 py-8"
          >
            <p className="text-dark-200 text-sm leading-relaxed mb-6 text-left text-white">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                <div className="text-gray-400 text-xs">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;