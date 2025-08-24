import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-16 right-20 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-8 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-16 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to experience the 
            <span className="block text-accent">future of learning?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of educators and students who are already transforming their learning experience with AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="heroSecondary" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">14-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;