
import React from 'react';
import ArtworkCard from './ArtworkCard';

const FeaturedWorks: React.FC = () => {
  return (
    <section id="work" className="section-padding">
      <div className="layout-container">
        <div className="max-w-lg mx-auto text-center mb-16">
          <span className="font-mono text-art-accent text-sm tracking-wider">
            FEATURED WORKS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mt-2 mb-4">
            Selected Creations
          </h2>
          <div className="w-16 h-[1px] bg-art-black/20 mx-auto mb-4" />
          <p className="text-art-dark-gray/80 text-pretty">
            A curated collection of my most significant artworks, each representing a distinct exploration of form, color, and concept.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ArtworkCard 
            title="Echoes of Stillness" 
            description="An exploration of tranquility through minimalist composition and subtle color interactions." 
            imageUrl="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
            year="2023"
            large={true}
          />
          <ArtworkCard 
            title="Urban Fragments" 
            description="Deconstructed cityscape reflecting the chaotic beauty of metropolitan rhythms." 
            imageUrl="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151" 
            year="2022"
          />
          <ArtworkCard 
            title="Ethereal Boundary" 
            description="The meeting point of dream and reality, expressed through atmospheric textures and floating forms." 
            imageUrl="https://images.unsplash.com/photo-1504893524553-b855bce32c67"
            year="2022" 
          />
          <ArtworkCard 
            title="Chroma Study #7" 
            description="Part of an ongoing series examining the psychological impact of color relationships." 
            imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
            year="2023"
          />
          <ArtworkCard 
            title="Transient Memory" 
            description="A mixed-media piece exploring the fragility and persistence of human recollection." 
            imageUrl="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
            year="2023"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-art-dark-gray/20 hover:border-art-dark-gray/80 text-art-dark-gray transition-all duration-500 font-medium"
          >
            View All Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
