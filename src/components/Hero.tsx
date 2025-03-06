
import React, { useEffect, useRef } from 'react';
import { Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  const audioVisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createBars = () => {
      if (!audioVisRef.current) return;
      
      audioVisRef.current.innerHTML = '';
      const barCount = 20;
      
      for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        const height = Math.floor(Math.random() * 100);
        bar.className = `audio-bar animate-wave-${i % 3 + 1}`;
        bar.style.height = `${Math.max(15, height)}%`;
        audioVisRef.current.appendChild(bar);
      }
    };

    createBars();
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 opacity-0 animate-fade-in">
            You want choirs? <span className="text-got-green">We GOT choirs.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-got-light/80 mb-10 max-w-3xl opacity-0 animate-fade-in-delay-100">
            Transform one vocal into the iconic sound of a choir––anywhere, instantly
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in-delay-200">
            <a 
              href="#buy" 
              className="btn-hover-effect bg-got-green text-got-dark font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-got-green/20 flex items-center justify-center"
            >
              Buy Now
            </a>
            <a 
              href="#demo" 
              className="btn-hover-effect bg-transparent border border-got-green/50 text-got-green font-medium py-3 px-8 rounded-full hover:border-got-green hover:bg-got-green/5 flex items-center justify-center gap-2"
            >
              <Play size={18} /> Demo
            </a>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl shadow-got-green/5 border border-got-green/10 backdrop-blur-sm bg-got-dark/80 p-2 md:p-4 w-full max-w-4xl opacity-0 animate-fade-in-delay-300">
            <div className="relative rounded-lg overflow-hidden aspect-video bg-got-dark">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="audio-visualizer" ref={audioVisRef}></div>
              </div>
              <img 
                src="/lovable-uploads/706c9997-23f6-40c6-baf6-357bd1114da9.png" 
                alt="GOT CHOIRS Interface" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-got-dark/90 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-10 opacity-0 animate-fade-in-delay-400">
          <button 
            onClick={scrollToFeatures}
            className="text-got-light/70 hover:text-got-green transition-colors flex flex-col items-center"
          >
            <span className="mb-2">Discover More</span>
            <ChevronDown className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
