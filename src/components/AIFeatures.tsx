import React from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  FileText, 
  Search, 
  Globe, 
  Video, 
  BarChart3 
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Homework Solver',
    description: 'AI-powered solutions for complex problems across all subjects',
    color: 'text-primary'
  },
  {
    icon: Lightbulb,
    title: 'Concept Simplifier',
    description: 'Break down complex topics into easy-to-understand explanations',
    color: 'text-accent'
  },
  {
    icon: FileText,
    title: 'Mock Test Generator',
    description: 'Automatically create customized tests and assessments',
    color: 'text-secondary'
  },
  {
    icon: Search,
    title: 'Plagiarism Checker',
    description: 'Ensure academic integrity with advanced plagiarism detection',
    color: 'text-primary-glow'
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Learn and teach in your preferred language with AI translation',
    color: 'text-primary'
  },
  {
    icon: Video,
    title: 'Voice & Video AI Tutor',
    description: 'Interactive AI tutoring through voice and video conversations',
    color: 'text-accent'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into learning progress and performance',
    color: 'text-secondary'
  }
];

const AIFeatures = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            AI-Powered Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge artificial intelligence tools designed to revolutionize learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal bg-gradient-card rounded-xl p-6 hover-lift shadow-elegant border border-card-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;