import React from 'react';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Email', href: 'mailto:info@edtechai.com', icon: Mail }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-glow">
              EdTech AI Platform
            </h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Transforming education through artificial intelligence. Empowering students, 
              supporting teachers, and revolutionizing learning experiences worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-background/80 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-glow">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary-glow transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-glow">Contact</h4>
            <div className="space-y-3 text-background/80">
              <p>info@edtechai.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} EdTech AI Platform. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-background/60 hover:text-primary-glow transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/60 hover:text-primary-glow transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-background/60 hover:text-primary-glow transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;