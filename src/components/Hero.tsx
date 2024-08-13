'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-electric-purple to-electric-blue text-light-gray overflow-hidden flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <svg
          className="absolute inset-0 w-full h-full -z-10 opacity-70"
          viewBox="0 0 482.801 482.801"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad-tie" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF6D00', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FF3F4C', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Top Part of Tie */}
          <g className="animate-tie-top">
            <path
              d="M241.4,0c-26.494,0-68.097,3.4-93.591,27.2c-0.081,20.4,16.904,47.6,27.104,57.8c10.2,10.2,27.295,10.2,40.896,10.2c13.6,0,30.695,0,40.896-10.2 c10.2-10.2,27.03-37.4,27.104-57.8C309.496,3.4,267.894,0,241.4,0z"
              fill="url(#grad-tie)"
            />
          </g>
          {/* Bottom Part of Tie */}
          <g className="animate-tie-bottom">
            <path
              d="M206.856,111.602l-23.807,270.789c-1.815,20.672,5.032,41.168,18.918,56.59l39.44,43.82l41.024-43.188c14.974-15.756,22.345-37.25,20.21-58.881 L276.02,111.527c-0.354-3.475-3.284-6.127-6.779-6.127h-55.611C210.107,105.4,207.162,108.093,206.856,111.602z"
              fill="url(#grad-tie)"
            />
          </g>
        </svg>
      </div>
      <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-gradient">
          Future-Proof Your Career with <span className="text-6xl lg:text-8xl p-2 font-black text-electric-orange">BeyondJob.</span>
        </h1>
        <p className="text-lg lg:text-xl mb-8 text-light-gray">
          Connect with top talents and explore endless opportunities
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          <a
            href="https://github.com/keshavgarg24/BeyondJob"
            className="bg-transparent border-2 border-electric-orange text-electric-orange hover:bg-electric-orange-light transition-colors duration-300 px-6 py-3 rounded-lg text-lg font-semibold transform hover:scale-105"
          >
            Star on Github
          </a>
        </div>
      </div>
      <style jsx>{`
        @keyframes tie-top-animation {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes tie-bottom-animation {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-tie-top {
          animation: tie-top-animation 4s ease-in-out infinite;
          transform-origin: center;
        }
        .animate-tie-bottom {
          animation: tie-bottom-animation 4s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
