
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-5 md:px-8 py-4',
        isScrolled ? 'bg-got-dark/90 backdrop-blur-md border-b border-got-green/10' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/2e877370-95d7-4bfe-91b9-f1701d453a48.png" 
              alt="GOT U LABS Logo" 
              className="h-8"
            />
            <h1 className="text-xl font-bold text-got-green">GOT U LABS</h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-got-light hover:text-got-green transition-colors">Features</a>
            <a href="#demo" className="text-got-light hover:text-got-green transition-colors">Demo</a>
            <a href="#pricing" className="text-got-light hover:text-got-green transition-colors">Pricing</a>
            <a href="#testimonials" className="text-got-light hover:text-got-green transition-colors">Testimonials</a>
            <a 
              href="#buy" 
              className="btn-hover-effect text-got-dark font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-got-green/20"
  style={{ backgroundColor: '#F5A623' }}
            >
              Buy Now Please for me daddy
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-got-light" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-got-green/10 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-got-light hover:text-got-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features!!!
              </a>
              <a 
                href="#demo" 
                className="text-got-light hover:text-got-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#pricing" 
                className="text-got-light hover:text-got-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-got-light hover:text-got-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#buy" 
                className="btn-hover-effect text-got-dark bg-got-green font-medium py-2 px-6 rounded-full text-center hover:shadow-lg hover:shadow-got-green/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buy Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
