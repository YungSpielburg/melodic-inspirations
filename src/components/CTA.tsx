
import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="buy" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-got-dark/80 backdrop-blur-lg border border-got-green/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your <span className="text-got-green">Productions</span>?
            </h2>
            <p className="text-got-light/70 text-lg max-w-2xl mx-auto">
              Join thousands of professionals who trust GOT CHOIRS to bring depth, emotion and quality to their music.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="#" 
              className="btn-hover-effect bg-got-green text-got-dark font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-got-green/20 flex items-center justify-center gap-2"
            >
              <Download size={18} /> Download Now
            </a>
            <a 
              href="#" 
              className="btn-hover-effect bg-transparent border border-got-green/50 text-got-green font-medium py-3 px-8 rounded-full hover:border-got-green hover:bg-got-green/5 flex items-center justify-center gap-2"
            >
              View Documentation <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-got-light/60 text-sm">
              14-day money-back guarantee • Instant download • 24/7 customer support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
