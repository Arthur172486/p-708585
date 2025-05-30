
import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, TrendingUp, Settings, Users, Star, Share, Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import GlassHeader from "@/components/ui/glass-header";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectTasks from "@/components/project/ProjectTasks";
import ProjectCommunity from "@/components/project/ProjectCommunity";
import ProjectMembers from "@/components/project/ProjectMembers";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-900">
      <GlassHeader />
      
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          {/* Project Header */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 p-8 mb-8 shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 font-medium">
                      VR/AR
                    </Badge>
                    <Badge className="bg-emerald-500/90 text-white px-4 py-2 font-medium">
                      Recrutando
                    </Badge>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">EcoTrack VR</h1>
                  <p className="text-lg text-white/90 leading-relaxed max-w-3xl mb-6">
                    Virtual reality company which offers unique approach to be the future of environmental monitoring and sustainability education through immersive experiences.
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white/90">
                      <Users className="h-5 w-5" />
                      <span className="font-medium">8 membros</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Star className="h-5 w-5 text-yellow-300" />
                      <span className="font-medium">4.8 rating</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 rounded-xl px-6"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Favoritar
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 rounded-xl px-6"
                  >
                    <Share className="h-5 w-5 mr-2" />
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Navigation Menu */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2 shadow-2xl">
              <div className="flex gap-2">
                <Link to={`/project/${id}/chat`}>
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-xl px-6"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Entrar no Chat
                  </Button>
                </Link>
                <Link to={`/project/${id}/progress`}>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-xl px-6"
                  >
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Ver Progresso
                  </Button>
                </Link>
                <Link to={`/project/${id}/equity`}>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-xl px-6"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Equity & Parcerias
                  </Button>
                </Link>
                <Link to={`/project/${id}/settings`}>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-xl px-6"
                  >
                    <Settings className="h-5 w-5 mr-2" />
                    Configurações
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="tasks" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2 shadow-lg">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400 rounded-xl px-6 py-3 font-medium"
                >
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger 
                  value="tasks" 
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-slate-400 rounded-xl px-6 py-3 font-medium"
                >
                  Tarefas
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400 rounded-xl px-6 py-3 font-medium"
                >
                  Comunidade
                </TabsTrigger>
                <TabsTrigger 
                  value="members" 
                  className="data-[state=active]:bg-slate-700 data-[state=active]:text-white text-slate-400 rounded-xl px-6 py-3 font-medium"
                >
                  Membros
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview">
              <ProjectOverview />
            </TabsContent>
            
            <TabsContent value="tasks" className="space-y-6">
              {/* Task Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-emerald-400 text-2xl font-bold">1</CardTitle>
                    <p className="text-slate-400 text-sm">Concluídas</p>
                  </CardHeader>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-orange-400 text-2xl font-bold">1</CardTitle>
                    <p className="text-slate-400 text-sm">Em Progresso</p>
                  </CardHeader>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-slate-400 text-2xl font-bold">2</CardTitle>
                    <p className="text-slate-400 text-sm">Pendentes</p>
                  </CardHeader>
                </Card>
              </div>

              {/* Task Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Tarefas do Projeto</h2>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Tarefa
                </Button>
              </div>

              {/* Task Section */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Desenvolver interface do usuário principal</CardTitle>
                  <p className="text-slate-400">
                    Criar a interface principal da aplicação VR para monitoramento ambiental, incluindo dashboards interativos e controles de navegação.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">
                        Em Progresso
                      </Badge>
                      <span className="text-slate-400 text-sm">Prazo: 15 dias</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">JS</span>
                      </div>
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">AM</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="community">
              <ProjectCommunity />
            </TabsContent>
            
            <TabsContent value="members">
              <ProjectMembers />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
