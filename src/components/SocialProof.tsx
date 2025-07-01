import React from 'react';

const logosRow1 = [
  '/assets/Untitled design (3).png',
  '/assets/Untitled design (8).png',
  '/assets/Untitled design (7).png',
  '/assets/Untitled design (6).png',
  '/assets/Untitled design (5).png',
];

const logosRow2 = [
  '/assets/Untitled design (4).png',
  '/assets/Untitled design (2).png',
  '/assets/Untitled design (1).png',
  '/assets/Untitled design.png',
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-10">
            Trusted by teams at leading companies
          </h3>

          {/* First Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto opacity-80">
            {logosRow1.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Company logo ${idx}`}
                className="h-10 md:h-12 object-contain filter brightness-0 invert opacity-60"
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto mt-8 opacity-80">
            {logosRow2.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Company logo ${idx + 5}`}
                className="h-10 md:h-12 object-contain filter brightness-0 invert opacity-60"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;