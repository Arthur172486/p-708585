
import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, TrendingUp, Settings, Users, Star, Share, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import GlassHeader from "@/components/ui/glass-header";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectTasks from "@/components/project/ProjectTasks";
import ProjectCommunity from "@/components/project/ProjectCommunity";
import ProjectMembers from "@/components/project/ProjectMembers";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlassHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Project Header */}
            <div className="relative bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-6 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-3 py-1">
                        VR/AR
                      </Badge>
                      <Badge className="bg-emerald-600 text-white px-3 py-1">
                        Recrutando
                      </Badge>
                    </div>
                    
                    <h1 className="text-4xl font-bold mb-4 leading-tight">EcoTrack VR</h1>
                    <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
                      Virtual reality company which offers unique approach to be the future of environmental monitoring and sustainability education through immersive experiences.
                    </p>
                    
                    <div className="flex items-center space-x-6 mt-6">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5" />
                        <span className="font-medium">8 membros</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="font-medium">4.8 rating</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                      <Heart className="h-4 w-4 mr-2" />
                      Favoritar
                    </Button>
                    <Button variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                      <Share className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to={`/project/${id}/chat`}>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Entrar no Chat
                </Button>
              </Link>
              <Link to={`/project/${id}/progress`}>
                <Button variant="outline" className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Ver Progresso
                </Button>
              </Link>
              <Link to={`/project/${id}/equity`}>
                <Button variant="outline" className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Users className="h-4 w-4 mr-2" />
                  Equity & Parcerias
                </Button>
              </Link>
              <Link to={`/project/${id}/settings`}>
                <Button variant="outline" className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações
                </Button>
              </Link>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white text-gray-700 dark:text-gray-300 rounded-md transition-all duration-200"
                >
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger 
                  value="tasks" 
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white text-gray-700 dark:text-gray-300 rounded-md transition-all duration-200"
                >
                  Tarefas
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white text-gray-700 dark:text-gray-300 rounded-md transition-all duration-200"
                >
                  Comunidade
                </TabsTrigger>
                <TabsTrigger 
                  value="members" 
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white text-gray-700 dark:text-gray-300 rounded-md transition-all duration-200"
                >
                  Membros
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <ProjectOverview />
              </TabsContent>
              
              <TabsContent value="tasks" className="mt-6">
                <ProjectTasks />
              </TabsContent>
              
              <TabsContent value="community" className="mt-6">
                <ProjectCommunity />
              </TabsContent>
              
              <TabsContent value="members" className="mt-6">
                <ProjectMembers />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
