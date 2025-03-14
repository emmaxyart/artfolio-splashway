
import React, { useEffect, useRef, useState } from 'react';

const LatestArtpiece = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="latest" ref={sectionRef} className="section-padding bg-art-black text-art-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-art-black to-art-dark-gray opacity-95 -z-10" />
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1458668383970-8ddd3927deed')] bg-cover bg-center opacity-10 mix-blend-overlay -z-20" />
      
      <div className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ease-expo-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="font-mono text-art-accent text-sm tracking-wider">
              LATEST WORK
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mt-2 mb-6 text-white">
              Ethereal Landscapes Series
            </h2>
            
            <div className="w-16 h-[1px] bg-white/20 mb-6" />
            
            <p className="text-white/80 mb-6 text-pretty">
              This ongoing series explores the liminal spaces between observed reality and emotional response. Through a process of layering and abstraction, these works invite viewers to reconnect with the sensory experience of landscape beyond visual recognition.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white/90 font-medium mb-1">Technique</h3>
                <p className="text-white/70 text-sm">Mixed media on canvas with experimental resin application</p>
              </div>
              
              <div>
                <h3 className="text-white/90 font-medium mb-1">Dimensions</h3>
                <p className="text-white/70 text-sm">120 × 90 cm</p>
              </div>
              
              <div>
                <h3 className="text-white/90 font-medium mb-1">Year</h3>
                <p className="text-white/70 text-sm">2023</p>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-art-black hover:bg-art-accent hover:text-white transition-colors duration-500 font-medium"
              >
                View in Detail
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ease-expo-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <div className={`absolute inset-0 bg-art-accent/20 backdrop-blur-md z-10 transition-opacity duration-700 ${isImageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex items-center justify-center h-full">
                  <div className="w-12 h-12 border-4 border-white/30 border-t-white/90 rounded-full animate-spin" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                alt="Ethereal Landscapes Series - Latest Work" 
                className="w-full h-full object-cover"
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArtpiece;
