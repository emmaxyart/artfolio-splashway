
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && lineRef.current) {
          lineRef.current.classList.add('animate-line-draw');
        }
      });
    }, observerOptions);
    
    if (lineRef.current) {
      observer.observe(lineRef.current);
    }
    
    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);
  
  return (
    <section className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle -z-10 opacity-70" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-64 h-64 rounded-full bg-art-accent/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 rounded-full bg-art-accent/5 blur-[100px] -z-10" />
      
      <div className="layout-container">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-3 overflow-hidden">
            <span className="inline-block font-mono text-art-accent text-sm tracking-widest animate-fade-down py-1 px-3 rounded-full border border-art-accent/20">
              ARTIST • CREATOR • VISIONARY
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight sm:leading-tight text-balance animate-fade-up mb-6">
            Transforming <em className="font-serif italic">imagination</em> into visual reality
          </h1>
          
          <div className="w-20 h-[1px] bg-art-black/30 mx-auto mb-6 overflow-hidden">
            <div ref={lineRef} className="w-0 h-full bg-art-black" />
          </div>
          
          <p className="text-lg sm:text-xl text-art-dark-gray/80 max-w-2xl mx-auto animate-fade-in animation-delay-200 text-pretty mb-10">
            A curated collection of artworks that explore the intersection of traditional techniques and contemporary vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <a 
              href="#work" 
              className="px-8 py-3 rounded-full bg-art-dark-gray text-white hover:bg-art-black transition-colors duration-500 font-medium"
            >
              Explore Gallery
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-transparent border border-art-dark-gray/20 hover:border-art-dark-gray/80 text-art-dark-gray transition-all duration-500 font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
