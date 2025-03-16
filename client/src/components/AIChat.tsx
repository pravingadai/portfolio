import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Predefined responses for the chatbot
const predefinedResponses: Record<string, string[]> = {
  greeting: [
    "Hello! I'm your personal AI assistant. How can I help you today?",
    "Hi there! I'm here to assist with any questions about Pravin's skills and experience.",
    "Welcome! I can help you navigate Pravin's portfolio and answer questions about his work."
  ],
  skills: [
    "Pravin is skilled in React, Node.js, TypeScript, and MongoDB. He has over 5 years of experience in full-stack development.",
    "Pravin's technical skills include frontend frameworks like React and Vue.js, backend technologies like Node.js and Express, and databases like MongoDB and PostgreSQL.",
    "Regarding technical expertise, Pravin specializes in modern JavaScript frameworks, responsive design, and RESTful API development."
  ],
  experience: [
    "Pravin has worked with companies like Tech Innovations Inc. and Global Solutions Ltd. His most recent role involved leading a team of 5 developers.",
    "Pravin's professional experience includes 3 years at a fintech startup and 2 years at a major e-commerce platform, where he improved site performance by 40%.",
    "Professionally, Pravin has contributed to projects in e-commerce, fintech, and health tech sectors, focusing on scalable web applications."
  ],
  projects: [
    "Pravin has completed over 12 major projects, including an e-commerce platform, a real-time chat application, and a data visualization dashboard.",
    "Notable projects include a MERN stack e-commerce site, a React Native mobile app, and a real-time analytics dashboard using Socket.io.",
    "Pravin's portfolio showcases projects using various tech stacks, with a focus on user experience and performance optimization."
  ],
  education: [
    "Pravin holds a Bachelor's degree in Computer Science and has completed several professional certifications in web development and cloud technologies.",
    "Educationally, Pravin has a Computer Science degree and certifications in AWS, React, and Node.js development.",
    "Pravin's educational background includes formal computer science education complemented by continuous learning through online platforms and workshops."
  ],
  contact: [
    "You can contact Pravin through the contact form on this website, or via email at pravin@example.com.",
    "The best way to reach Pravin is through LinkedIn or by using the contact section of this portfolio.",
    "For professional inquiries, please use the contact form or send an email directly to explore potential collaborations."
  ],
  fallback: [
    "I don't have specific information about that. Would you like to know about Pravin's skills, experience, or projects instead?",
    "I'm not sure about that. Can I help you with information about Pravin's background, skills, or portfolio?",
    "I don't have details on that topic. I can tell you about Pravin's technical skills, work experience, or education if you're interested."
  ]
};

// Function to determine which response category to use based on user input
function getResponseCategory(input: string): string {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey') || lowerInput.includes('greetings')) {
    return 'greeting';
  } else if (lowerInput.includes('skill') || lowerInput.includes('know') || lowerInput.includes('tech') || lowerInput.includes('stack')) {
    return 'skills';
  } else if (lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('experience') || lowerInput.includes('career')) {
    return 'experience';
  } else if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('built') || lowerInput.includes('create')) {
    return 'projects';
  } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('degree') || lowerInput.includes('learn')) {
    return 'education';
  } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('message')) {
    return 'contact';
  } else {
    return 'fallback';
  }
}

// Function to get a random response from the category
function getRandomResponse(category: string): string {
  const responses = predefinedResponses[category] || predefinedResponses.fallback;
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your AI assistant. How can I help you with information about Pravin's portfolio?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate typing delay for the AI response
    setTimeout(() => {
      const category = getResponseCategory(userMessage.text);
      const botResponse: Message = {
        text: getRandomResponse(category),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 mb-4 pr-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2
                  ${message.sender === 'user' 
                    ? 'bg-primary/10 ml-2' 
                    : 'bg-primary/20 mr-2'}`}>
                  {message.sender === 'user' 
                    ? <User size={16} className="text-primary" />
                    : <Bot size={16} className="text-primary" />}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}>
                  <p>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <Bot size={16} className="text-primary" />
                </div>
                <div className="rounded-lg p-3 bg-muted text-foreground">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <div className="flex items-center gap-2">
        <Input
          placeholder="Ask me anything about Pravin's profile..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1"
        />
        <Button 
          onClick={handleSendMessage}
          disabled={input.trim() === '' || isTyping}
          size="icon"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
}