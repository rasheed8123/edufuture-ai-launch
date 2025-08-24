import React from 'react';
import { MessageSquare, Brain, Target, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Ask a Question',
    description: 'Submit your question via text, voice, or image',
    color: 'text-primary'
  },
  {
    icon: Brain,
    title: 'Get AI-Powered Explanation',
    description: 'Receive detailed, personalized explanations instantly',
    color: 'text-accent'
  },
  {
    icon: Target,
    title: 'Take Quizzes & Track Progress',
    description: 'Practice with generated quizzes and monitor improvement',
    color: 'text-secondary'
  },
  {
    icon: Smartphone,
    title: 'Integrate with LMS & WhatsApp',
    description: 'Seamlessly connect with your existing learning platforms',
    color: 'text-primary-glow'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with our AI-powered learning platform in four simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary-glow transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="reveal relative text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-card rounded-full shadow-elegant border-2 border-card-border mb-6 group hover:shadow-glow transition-all duration-300">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground text-sm font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;