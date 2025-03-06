
import React, { useEffect, useRef } from 'react';
import { Music, Sliders, Wand2, MusicIcon, Download, Settings } from 'lucide-react';

const FeatureCard = ({ icon, title, description, className = '' }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`feature-card rounded-xl p-6 reveal-on-scroll ${className}`}
    >
      <div className="w-12 h-12 bg-got-green/10 rounded-lg flex items-center justify-center mb-4 text-got-green">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-got-light/70">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            You want choirs? <span className="text-got-green">We GOT choirs.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Music size={24} />}
            title="Choir Sounds"
            description="Tap into a Gospel Choir, Children's Choir, and 10 individual voice models from our choirs."
          />
          <FeatureCard
            icon={<Sliders size={24} />}
            title="Advanced Articulation"
            description="Fine-tune your choir sounds with detailed articulation controls for authentic vocal expressions."
          />
          <FeatureCard
            icon={<Wand2 size={24} />}
            title="Smart Voice Processing"
            description="Our intelligent voice blending technology creates natural-sounding choirs that sit perfectly in any mix."
          />
          <FeatureCard
            icon={<MusicIcon size={24} />}
            title="Preset Library"
            description="Explore hundreds of professionally designed presets for instant inspiration and production-ready sounds."
          />
          <FeatureCard
            icon={<Download size={24} />}
            title="Regular Updates"
            description="Benefit from continuous improvements and new choir samples with our commitment to regular updates."
          />
          <FeatureCard
            icon={<Settings size={24} />}
            title="Customizable Interface"
            description="Personalize your workflow with a fully customizable interface that adapts to your production style."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
