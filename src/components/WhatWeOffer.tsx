import React from 'react';
import studentsIcon from '@/assets/students-icon.jpg';
import parentsIcon from '@/assets/parents-icon.jpg';
import teachersIcon from '@/assets/teachers-icon.jpg';
import institutionsIcon from '@/assets/institutions-icon.jpg';

const offers = [
  {
    title: 'Students',
    description: 'Instant homework help & doubt-solving',
    icon: studentsIcon,
    gradient: 'from-primary to-primary-glow'
  },
  {
    title: 'Parents',
    description: 'Progress tracking & reminders',
    icon: parentsIcon,
    gradient: 'from-accent to-secondary'
  },
  {
    title: 'Teachers',
    description: 'Automated test creation & scheduling',
    icon: teachersIcon,
    gradient: 'from-secondary to-primary'
  },
  {
    title: 'Institutions',
    description: 'End-to-end automation & analytics',
    icon: institutionsIcon,
    gradient: 'from-primary-glow to-accent'
  }
];

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI-powered solutions for every stakeholder in education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className="reveal bg-gradient-card rounded-xl p-8 hover-lift shadow-elegant border border-card-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${offer.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300`}>
                <img 
                  src={offer.icon} 
                  alt={offer.title}
                  className="w-10 h-10 object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {offer.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;