import React, { useState } from 'react';
import { useConversation } from '@11labs/react';
import { MessageCircle, Mic, MicOff, Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(false);
  const { toast } = useToast();
  
  const conversation = useConversation({
    onConnect: () => {
      toast({
        title: "AI Assistant Connected",
        description: "You can now speak with our AI tutor!",
      });
    },
    onDisconnect: () => {
      toast({
        title: "AI Assistant Disconnected",
        description: "Conversation ended.",
      });
    },
    onError: (error) => {
      toast({
        title: "Connection Error",
        description: "Please check your API key and try again.",
        variant: "destructive",
      });
      console.error('Conversation error:', error);
    },
  });

  const startConversation = async () => {
    if (!apiKey) {
      setShowApiInput(true);
      return;
    }

    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Generate signed URL with the API key
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=agent_3301k3ddc3f8ea1ad21181375gjy`,
        {
          method: "GET",
          headers: {
            "xi-api-key": apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get signed URL');
      }

      const body = await response.json();
      await conversation.startSession({ url: body.signed_url });
    } catch (error) {
      toast({
        title: "Failed to start conversation",
        description: "Please check your API key and microphone permissions.",
        variant: "destructive",
      });
    }
  };

  const endConversation = async () => {
    await conversation.endSession();
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setShowApiInput(false);
      startConversation();
    }
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

            {showApiInput ? (
              <form onSubmit={handleApiKeySubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    ElevenLabs API Key
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your ElevenLabs API key"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Connect
                </Button>
                <p className="text-xs text-muted-foreground">
                  Get your API key from{' '}
                  <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    ElevenLabs
                  </a>
                </p>
              </form>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <div className="mb-4">
                    {conversation.status === 'connected' ? (
                      <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto animate-pulse">
                        <Mic className="h-8 w-8 text-primary-foreground" />
                      </div>
                    ) : (
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                        <MicOff className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {conversation.status === 'connected' 
                      ? conversation.isSpeaking 
                        ? 'AI is speaking...' 
                        : 'Listening... Speak now!'
                      : 'Talk to our AI tutor for instant help with your studies'
                    }
                  </p>
                </div>

                <div className="space-y-2 w-full">
                  {conversation.status === 'connected' ? (
                    <Button
                      onClick={endConversation}
                      variant="destructive"
                      className="w-full"
                    >
                      <PhoneOff className="h-4 w-4 mr-2" />
                      End Conversation
                    </Button>
                  ) : (
                    <Button
                      onClick={startConversation}
                      className="w-full"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Start Voice Chat
                    </Button>
                  )}
                  
                  {!apiKey && (
                    <Button
                      onClick={() => setShowApiInput(true)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Configure API Key
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </>
  );
};

export default AIChat;