
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Heart, MessageCircle, Share2, MoreHorizontal, Image, Paperclip } from "lucide-react";

const posts = [
  {
    id: 1,
    user: {
      name: "João Silva",
      username: "@joaosilva",
      avatar: null,
      role: "Lead Developer"
    },
    content: "Acabamos de implementar a nova funcionalidade de tracking ambiental! 🌱 Os sensores VR agora conseguem detectar mudanças na qualidade do ar em tempo real. Que acham?",
    timestamp: "2024-01-15 14:30",
    likes: 12,
    comments: 5,
    shares: 2,
    images: ["/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"],
    liked: true
  },
  {
    id: 2,
    user: {
      name: "Maria Santos",
      username: "@mariasantos",
      avatar: null,
      role: "UX Designer"
    },
    content: "Pessoal, criei um novo protótipo da interface principal. A navegação está muito mais intuitiva agora! Feedbacks são bem-vindos 👩‍💻",
    timestamp: "2024-01-15 12:15",
    likes: 8,
    comments: 3,
    shares: 1,
    images: [],
    liked: false
  },
  {
    id: 3,
    user: {
      name: "Pedro Costa",
      username: "@pedrocosta",
      avatar: null,
      role: "Backend Developer"
    },
    content: "API de dados ambientais está 100% funcional! Agora conseguimos processar dados de mais de 50 sensores simultaneamente. Performance está incrível! 🚀",
    timestamp: "2024-01-15 10:45",
    likes: 15,
    comments: 7,
    shares: 4,
    images: [],
    liked: true
  }
];

const trendingTopics = [
  "#VirtualReality", "#Sustentabilidade", "#TechForGood", "#Innovation", "#CleanTech"
];

const ProjectCommunity = () => {
  const [newPost, setNewPost] = useState("");

  const handleCreatePost = () => {
    if (newPost.trim()) {
      console.log("Creating post:", newPost);
      setNewPost("");
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Agora há pouco";
    if (diffInHours < 24) return `${diffInHours}h`;
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-3 space-y-6">
          {/* Create Post */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-orange-500 text-white">VS</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Compartilhe uma atualização com a equipe..."
                    className="w-full bg-slate-700/50 border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 resize-none"
                    rows={3}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <Image className="h-4 w-4 mr-2" />
                        Foto
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
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
            <Card key={post.id} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Post Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-500 text-white">
                          {post.user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-white">{post.user.name}</h4>
                          <span className="text-slate-400 text-sm">{post.user.username}</span>
                          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                            {post.user.role}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-400">{formatTimeAgo(post.timestamp)}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-4">
                    <p className="text-slate-200 leading-relaxed">{post.content}</p>
                    
                    {/* Post Images */}
                    {post.images.length > 0 && (
                      <div className="grid grid-cols-1 gap-2">
                        {post.images.map((image, index) => (
                          <div key={index} className="rounded-lg overflow-hidden">
                            <img 
                              src={image} 
                              alt="Post image" 
                              className="w-full h-64 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center space-x-6">
                      <button className={`flex items-center space-x-2 transition-colors ${
                        post.liked ? 'text-red-500' : 'text-slate-400 hover:text-red-500'
                      }`}>
                        <Heart className={`h-5 w-5 ${post.liked ? 'fill-current' : ''}`} />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-slate-400 hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-slate-400 hover:text-green-500 transition-colors">
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
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-white">Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Membros Ativos</span>
                <span className="text-white font-medium">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Posts Hoje</span>
                <span className="text-white font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Discussões</span>
                <span className="text-white font-medium">8</span>
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-white">Tópicos em Alta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <Badge 
                    key={topic} 
                    className="bg-orange-500/20 text-orange-400 border-orange-500/30 cursor-pointer hover:bg-orange-500/30 transition-colors"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-white">Atividade Recente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="text-white">Ana Lima</p>
                <p className="text-slate-400">Curtiu seu post</p>
                <p className="text-xs text-slate-500">5min atrás</p>
              </div>
              <div className="text-sm">
                <p className="text-white">Carlos Oliveira</p>
                <p className="text-slate-400">Comentou no projeto</p>
                <p className="text-xs text-slate-500">15min atrás</p>
              </div>
              <div className="text-sm">
                <p className="text-white">Equipe Design</p>
                <p className="text-slate-400">Criou nova discussão</p>
                <p className="text-xs text-slate-500">1h atrás</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectCommunity;
