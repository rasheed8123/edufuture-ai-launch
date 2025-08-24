import React, { useState } from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAIChat = () => {
    window.open('https://elevenlabs.io/app/talk-to?agent_id=agent_3301k3ddc3f8ea1ad21181375gjy', '_blank');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 z-50 shadow-elegant bg-card border-card-border">
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-card-foreground">AI Tutor Assistant</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </Button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="text-center">
                <div className="mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                    <MessageCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Talk to our AI tutor for instant help with your studies
                </p>
              </div>

              <Button
                onClick={openAIChat}
                className="w-full"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Start AI Chat
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Opens in a new tab
              </p>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIChat;