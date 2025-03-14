
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeaturedWorks from '@/components/FeaturedWorks';
import LatestArtpiece from '@/components/LatestArtpiece';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWorks />
        <LatestArtpiece />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
