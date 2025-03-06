
import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, subtitle, features, isPopular = false }: {
  title: string;
  price: string;
  subtitle?: string;
  features: string[];
  isPopular?: boolean;
}) => {
  return (
    <div className={`rounded-2xl p-6 md:p-8 transition-all ${
      isPopular 
        ? 'bg-got-orange/10 border-2 border-got-orange relative overflow-hidden' 
        : 'bg-got-dark/80 border border-got-green/10 hover:border-got-green/30'
    }`}>
      {isPopular && (
        <div className="absolute top-4 right-4 bg-got-orange text-got-dark text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-2">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-got-light/70 ml-2">USD</span>}
      </div>
      {subtitle && <p className="text-got-light/60 text-sm mb-6">{subtitle}</p>}
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check size={18} className="text-got-orange mt-0.5 flex-shrink-0" />
            <span className="text-got-light/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="#buy" 
        className={`block text-center py-3 px-6 rounded-full transition-all ${
          isPopular 
            ? 'bg-got-orange text-white hover:shadow-lg hover:shadow-got-orange/20 btn-hover-effect' 
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
            <span className="text-got-orange">Buy it, Own it</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <PricingCard 
            title="One-Time Purchase" 
            price="$249"
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
            title="Rent-to-Own" 
            price="$25"
            subtitle="per month until paid off"
            features={[
              "Same features as one-time purchase",
              "Spread payments over time",
              "No interest or extra fees",
              "Access to all features immediately",
              "Cancel anytime",
              "Own it permanently once paid in full",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
