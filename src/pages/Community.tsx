
import React, { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Heart, MessageCircle, Share2, Users, TrendingUp, Image, Paperclip } from "lucide-react";

const Community = () => {
  const [newPost, setNewPost] = useState("");

  const posts = [
    {
      id: 1,
      user: {
        name: "João Silva",
        username: "@joaosilva",
        role: "Lead Developer"
      },
      content: "Acabei de lançar meu novo projeto de sustentabilidade! 🌱 Estamos usando VR para conscientização ambiental. Quem quer colaborar?",
      timestamp: "2024-01-15 14:30",
      likes: 24,
      comments: 8,
      shares: 5,
      liked: true
    },
    {
      id: 2,
      user: {
        name: "Maria Santos",
        username: "@mariasantos",
        role: "UX Designer"
      },
      content: "Compartilhando algumas dicas de design para startups! A experiência do usuário é fundamental para o sucesso. Vamos conversar? 💡",
      timestamp: "2024-01-15 12:15",
      likes: 18,
      comments: 12,
      shares: 3,
      liked: false
    }
  ];

  const trendingTopics = [
    "#Sustentabilidade", "#VirtualReality", "#TechForGood", "#Innovation", "#Startup"
  ];

  const handleCreatePost = () => {
    if (newPost.trim()) {
      console.log("Creating post:", newPost);
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Comunidade</h1>
              <p className="text-gray-600">Conecte-se com outros empreendedores e compartilhe suas ideias</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Feed */}
              <div className="lg:col-span-3 space-y-6">
                {/* Create Post */}
                <Card className="bg-white border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-orange-100 text-orange-600">JS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-4">
                        <textarea
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          placeholder="Compartilhe uma ideia, conquista ou pergunta..."
                          className="w-full bg-orange-50 border border-orange-200 rounded-lg p-3 text-gray-800 placeholder-gray-500 resize-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                          rows={3}
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-orange-600 hover:bg-orange-50">
                              <Image className="h-4 w-4 mr-2" />
                              Foto
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-orange-600 hover:bg-orange-50">
                              <Paperclip className="h-4 w-4 mr-2" />
                              Arquivo
                            </Button>
                          </div>
                          <Button 
                            onClick={handleCreatePost}
                            className="bg-orange-600 hover:bg-orange-700 text-white"
                            disabled={!newPost.trim()}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Publicar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts Feed */}
                {posts.map((post) => (
                  <Card key={post.id} className="bg-white border-orange-200">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Post Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex space-x-3">
                            <Avatar className="w-12 h-12">
                              <AvatarFallback className="bg-orange-100 text-orange-600">
                                {post.user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="font-medium text-gray-800">{post.user.name}</h4>
                                <span className="text-gray-500 text-sm">{post.user.username}</span>
                                <Badge className="bg-orange-100 text-orange-600 border-orange-200 text-xs">
                                  {post.user.role}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-500">2h atrás</p>
                            </div>
                          </div>
                        </div>

                        {/* Post Content */}
                        <p className="text-gray-700 leading-relaxed">{post.content}</p>

                        {/* Post Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-orange-100">
                          <div className="flex items-center space-x-6">
                            <button className={`flex items-center space-x-2 transition-colors ${
                              post.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                            }`}>
                              <Heart className={`h-5 w-5 ${post.liked ? 'fill-current' : ''}`} />
                              <span className="text-sm">{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-600 transition-colors">
                              <MessageCircle className="h-5 w-5" />
                              <span className="text-sm">{post.comments}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors">
                              <Share2 className="h-5 w-5" />
                              <span className="text-sm">{post.shares}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Community Stats */}
                <Card className="bg-white border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Estatísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Membros</span>
                      <span className="text-gray-800 font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posts Hoje</span>
                      <span className="text-gray-800 font-medium">34</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Projetos Ativos</span>
                      <span className="text-gray-800 font-medium">89</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Trending Topics */}
                <Card className="bg-white border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Trending</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {trendingTopics.map((topic) => (
                        <Badge 
                          key={topic} 
                          className="bg-orange-100 text-orange-600 border-orange-200 cursor-pointer hover:bg-orange-200 transition-colors"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Suggested Connections */}
                <Card className="bg-white border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Conectar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">AL</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-gray-800">Ana Lima</p>
                          <p className="text-xs text-gray-500">Designer</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white text-xs">
                        Seguir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Community;
