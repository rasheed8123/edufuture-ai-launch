import React from 'react';
import { Clock, TrendingUp, DollarSign, Target } from 'lucide-react';

const highlights = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock AI support ensures learning never stops, providing instant help whenever students need it.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: TrendingUp,
    title: 'Boost Student Engagement',
    description: 'Interactive AI tutoring and gamified learning experiences keep students motivated and actively participating.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: DollarSign,
    title: 'Reduce Costs',
    description: 'Automate routine tasks and reduce the need for additional teaching staff while maintaining quality education.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  },
  {
    icon: Target,
    title: 'Improve Outcomes',
    description: 'Data-driven insights and personalized learning paths lead to measurably better academic performance.',
    color: 'text-primary-glow',
    bgColor: 'bg-primary/5'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the transformative power of AI in education with measurable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="reveal flex items-start space-x-6 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex-shrink-0 w-16 h-16 ${highlight.bgColor} rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 reveal">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <div className="text-muted-foreground">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Educational Partners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">95%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-glow mb-2">24/7</div>
            <div className="text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;