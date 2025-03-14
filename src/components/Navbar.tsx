
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Palette } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = (): void => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-expo-out py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="layout-container">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-art-black transition-opacity duration-300 hover:opacity-80">
            <Palette className="text-art-accent" size={24} strokeWidth={1.5} />
            <span className="font-serif text-2xl font-medium italic">
              <span className="text-art-accent">E</span>mmaxy <span className="text-art-accent">A</span>rt
            </span>
          </a>
          
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <a href="#work" className="text-art-black/80 hover:text-art-black transition-colors duration-300 text-sm tracking-wide font-medium">
                  Work
                </a>
              </li>
              <li>
                <a href="#latest" className="text-art-black/80 hover:text-art-black transition-colors duration-300 text-sm tracking-wide font-medium">
                  Latest
                </a>
              </li>
              <li>
                <a href="#contact" className="text-art-black/80 hover:text-art-black transition-colors duration-300 text-sm tracking-wide font-medium">
                  Contact
                </a>
              </li>
            </ul>
            
            <a 
              href="#contact" 
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                scrolled 
                  ? "bg-art-dark-gray text-white hover:bg-art-black" 
                  : "bg-white/80 text-art-dark-gray hover:bg-white"
              )}
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
