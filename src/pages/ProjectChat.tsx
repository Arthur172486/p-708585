
import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, User, ArrowLeft, Phone, Video, MoreVertical, Paperclip } from "lucide-react";
import GlassHeader from "@/components/ui/glass-header";

interface Message {
  id: number;
  user: string;
  message: string;
  timestamp: string;
  isOwn: boolean;
  avatar?: string;
}

const ProjectChat = () => {
  const { id } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: "Maria Santos",
      message: "Pessoal, já terminei a implementação do sistema de login!",
      timestamp: "14:30",
      isOwn: false
    },
    {
      id: 2,
      user: "Você",
      message: "Perfeito Maria! Vou testar agora e fazer o review.",
      timestamp: "14:32",
      isOwn: true
    },
    {
      id: 3,
      user: "Pedro Costa",
      message: "Galera, preciso de ajuda com o design da tela de dashboard. Alguém pode dar uma olhada?",
      timestamp: "14:35",
      isOwn: false
    },
    {
      id: 4,
      user: "Ana Lima",
      message: "Claro Pedro! Vou dar uma olhada e te dou um feedback em 30 min.",
      timestamp: "14:36",
      isOwn: false
    },
    {
      id: 5,
      user: "Você",
      message: "Ótimo trabalho pessoal! O projeto está evoluindo muito bem.",
      timestamp: "14:40",
      isOwn: true
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const timestamp = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });

      const message: Message = {
        id: messages.length + 1,
        user: "Você",
        message: newMessage,
        timestamp,
        isOwn: true
      };

      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlassHeader />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {/* Chat Header */}
          <Card className="mb-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link to={`/project/${id}`}>
                    <Button variant="ghost" size="sm">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Voltar
                    </Button>
                  </Link>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                      Chat - EcoTrack VR
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      5 membros online
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Chat Messages */}
          <Card className="mb-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div className={`rounded-lg p-3 ${
                        message.isOwn 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}>
                        {!message.isOwn && (
                          <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-1">
                            {message.user}
                          </p>
                        )}
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.isOwn 
                            ? 'text-orange-100' 
                            : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
          </Card>

          {/* Message Input */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-orange-500 hover:bg-orange-600"
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectChat;
