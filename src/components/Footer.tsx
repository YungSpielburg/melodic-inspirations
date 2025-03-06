
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-got-green/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/2e877370-95d7-4bfe-91b9-f1701d453a48.png" 
                alt="GOT U LABS Logo" 
                className="h-6"
              />
              <h2 className="text-lg font-bold text-got-green">GOT U LABS</h2>
            </div>
            <p className="text-got-light/60 text-sm">
              Crafting exceptional audio tools for creative professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-got-light/60">
              <li><a href="#" className="hover:text-got-green transition-colors">GOT CHOIRS</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">GOT DRUMS</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">GOT STRINGS</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">ALL PLUGINS</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-got-light/60">
              <li><a href="#" className="hover:text-got-green transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-got-light/60">
              <li><a href="#" className="hover:text-got-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-got-green transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-got-green/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-got-light/60 text-sm">
            © {new Date().getFullYear()} GOT U LABS. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="text-got-light/60 hover:text-got-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-got-light/60 hover:text-got-green transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-got-light/60 hover:text-got-green transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
