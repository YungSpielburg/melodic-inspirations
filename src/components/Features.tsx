
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
    <section id="features" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-got-orange mb-6">
            No more "oohs" and "aahs" — Get the choir tool you always wanted. Sing and the choir will match your vocal exactly!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Music size={24} />}
            title="Iconic Choir Sounds"
            description="Tap into a Gospel Choir, Children's Choir, and 10 individual voice models from our choirs."
          />
          <FeatureCard
            icon={<Sliders size={24} />}
            title="Multiple Mic Selection"
            description="Fine-tune your choir sounds with detailed articulation controls for authentic vocal expressions."
          />
          <FeatureCard
            icon={<Wand2 size={24} />}
            title="Single Vocal to Choir"
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

        <div className="flex justify-center mt-16">
          <a 
            href="#buy" 
            className="btn-hover-effect bg-got-orange text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-got-orange/20 flex items-center justify-center"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
