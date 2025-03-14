
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-art-light-gray/50">
      <div className="layout-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-art-black font-serif text-xl font-medium inline-block">
              Portfolio
            </a>
            <p className="text-art-medium-gray text-sm mt-2">
              Creating art that resonates with the soul.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4">
              <a href="#" className="text-art-dark-gray/70 hover:text-art-black transition-colors duration-300 text-sm">
                Terms
              </a>
              <a href="#" className="text-art-dark-gray/70 hover:text-art-black transition-colors duration-300 text-sm">
                Privacy
              </a>
              <a href="#" className="text-art-dark-gray/70 hover:text-art-black transition-colors duration-300 text-sm">
                Cookies
              </a>
            </div>
            
            <p className="text-art-medium-gray text-sm">
              © {currentYear} Artist Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
