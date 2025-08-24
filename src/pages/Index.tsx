import React, { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhatWeOffer from '@/components/WhatWeOffer';
import HowItWorks from '@/components/HowItWorks';
import AIFeatures from '@/components/AIFeatures';
import PricingSection from '@/components/PricingSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const Index = () => {
  useScrollAnimation();

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="features">
          <WhatWeOffer />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <AIFeatures />
        
        <section id="pricing">
          <PricingSection />
        </section>
        
        <WhyChooseUs />
        
        <CTABanner />
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
