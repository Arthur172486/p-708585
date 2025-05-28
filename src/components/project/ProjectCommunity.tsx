
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, User, Heart, MessageCircle } from "lucide-react";

const messages = [
  {
    id: 1,
    user: "João Silva",
    message: "Pessoal, como está o progresso da interface VR?",
    timestamp: "2024-01-15 14:30",
    likes: 3,
    replies: 2
  },
  {
    id: 2,
    user: "Maria Santos",
    message: "Acabei de finalizar o sistema de autenticação! 🎉",
    timestamp: "2024-01-15 15:45",
    likes: 8,
    replies: 5
  },
  {
    id: 3,
    user: "Pedro Costa",
    message: "Alguém pode revisar a documentação da API que criei?",
    timestamp: "2024-01-15 16:20",
    likes: 2,
    replies: 1
  },
  {
    id: 4,
    user: "Ana Lima",
    message: "Os testes de VR estão indo muito bem! A experiência está ficando incrível.",
    timestamp: "2024-01-15 17:10",
    likes: 6,
    replies: 3
  }
];

const ProjectCommunity = () => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Comunidade do Projeto</h2>
        <div className="text-sm text-gray-400">
          8 membros online
        </div>
      </div>

      {/* Chat Messages */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <h3 className="text-lg font-semibold text-white">Chat Geral</h3>
        </CardHeader>
        <CardContent className="space-y-4 max-h-96 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="space-y-2">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-white">{message.user}</span>
                    <span className="text-xs text-gray-400">{message.timestamp}</span>
                  </div>
                  <p className="text-gray-300 mt-1">{message.message}</p>
                  
                  <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-orange-500 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span className="text-xs">{message.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-orange-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-xs">{message.replies}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Message Input */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-4">
          <div className="flex space-x-3">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">156</div>
            <div className="text-sm text-gray-400">Mensagens Hoje</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">8</div>
            <div className="text-sm text-gray-400">Membros Ativos</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">24</div>
            <div className="text-sm text-gray-400">Discussões Abertas</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCommunity;
