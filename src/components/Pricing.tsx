
import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular = false }: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}) => {
  return (
    <div className={`rounded-2xl p-6 md:p-8 transition-all ${
      isPopular 
        ? 'bg-got-green/10 border-2 border-got-green relative overflow-hidden' 
        : 'bg-got-dark/80 border border-got-green/10 hover:border-got-green/30'
    }`}>
      {isPopular && (
        <div className="absolute top-4 right-4 bg-got-green text-got-dark text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-got-light/70 ml-2">USD</span>}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check size={18} className="text-got-green mt-0.5 flex-shrink-0" />
            <span className="text-got-light/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="#buy" 
        className={`block text-center py-3 px-6 rounded-full transition-all ${
          isPopular 
            ? 'bg-got-green text-got-dark hover:shadow-lg hover:shadow-got-green/20 btn-hover-effect' 
            : 'border border-got-green/50 text-got-green hover:bg-got-green/10'
        }`}
      >
        {isPopular ? 'Buy Now' : 'Get Started'}
      </a>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <span className="text-got-green">Simple Pricing</span>, Incredible Value
          </h2>
          <p className="text-got-light/70">
            Choose the perfect plan for your production needs with our straightforward pricing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingCard 
            title="Lite Version" 
            price="Free"
            features={[
              "Basic choir samples",
              "Limited presets (20)",
              "Core articulations",
              "Standard stereo output",
              "Basic interface",
            ]}
          />
          
          <PricingCard 
            title="Standard" 
            price="$99"
            features={[
              "Full sample library (20GB)",
              "200+ professionally designed presets",
              "Advanced articulations",
              "Multiple mic positions",
              "Regular updates",
              "Premium support",
            ]}
            isPopular
          />
          
          <PricingCard 
            title="Professional" 
            price="$199"
            features={[
              "Everything in Standard",
              "Extended sample library (40GB)",
              "Early access to new features",
              "Advanced sound design tools",
              "Commercial license",
              "1-on-1 support session",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
