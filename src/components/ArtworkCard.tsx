
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ArtworkCardProps {
  title: string;
  description: string;
  imageUrl: string;
  year?: string;
  large?: boolean;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  year = '',
  large = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl hover-lift",
      large ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
    )}>
      <div className="absolute inset-0 bg-art-light-gray animate-pulse z-0" />
      
      <img
        src={imageUrl}
        alt={title}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          large ? "aspect-[4/3]" : "aspect-square",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        )}
        onLoad={() => setIsLoaded(true)}
      />
      
      <div className="absolute inset-0 bg-gradient-artwork opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo-out">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-lg font-medium text-art-black">{title}</h3>
            {year && <span className="text-xs font-mono text-art-medium-gray">{year}</span>}
          </div>
          <p className="text-sm text-art-dark-gray/80 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
