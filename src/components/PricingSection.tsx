import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter Plan',
    subtitle: 'For small teams',
    price: '$29',
    period: '/month',
    popular: false,
    features: [
      'Up to 50 students',
      'Basic AI homework solver',
      'Email support',
      'Standard analytics',
      'Basic integrations',
      'Monthly reports'
    ]
  },
  {
    name: 'Growth Plan',
    subtitle: 'For scaling EdTechs',
    price: '$99',
    period: '/month',
    popular: true,
    features: [
      'Up to 500 students',
      'Advanced AI features',
      'Priority support',
      'Advanced analytics',
      'Full LMS integration',
      'WhatsApp integration',
      'Custom branding',
      'Weekly reports'
    ]
  },
  {
    name: 'Enterprise Plan',
    subtitle: 'For large institutions',
    price: 'Custom',
    period: 'pricing',
    popular: false,
    features: [
      'Unlimited students',
      'All AI features',
      'Dedicated support',
      'Custom analytics',
      'Full customization',
      'API access',
      'White-label solution',
      'Real-time reports',
      'SSO integration'
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to grow with your educational needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`reveal relative rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-gradient-card scale-105' 
                  : 'border-card-border bg-gradient-card hover-lift'
              } transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.subtitle}</p>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
                size="lg"
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Contact our enterprise team.
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;