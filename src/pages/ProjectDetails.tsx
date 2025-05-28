
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlassHeader />
      
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Project Header */}
            <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-6 lg:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
                        VR/AR
                      </Badge>
                      <Badge className="bg-green-500/90 text-white px-4 py-2 text-sm font-semibold">
                        Recrutando
                      </Badge>
                    </div>
                    
                    <h1 className="text-5xl font-bold mb-4 leading-tight">EcoTrack VR</h1>
                    <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                      Virtual reality company which offers unique approach to be the future of environmental monitoring and sustainability education through immersive experiences.
                    </p>
                    
                    <div className="flex items-center space-x-6 mt-6">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5" />
                        <span className="font-medium">8 membros</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-300" />
                        <span className="font-medium">4.8 rating</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" size="lg" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 rounded-2xl px-6">
                      <Heart className="h-5 w-5 mr-2" />
                      Favoritar
                    </Button>
                    <Button variant="secondary" size="lg" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 rounded-2xl px-6">
                      <Share className="h-5 w-5 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to={`/project/${id}/chat`}>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl px-8">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  Entrar no Chat
                </Button>
              </Link>
              <Link to={`/project/${id}/progress`}>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 rounded-2xl px-8 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                  <TrendingUp className="h-5 w-5 mr-3" />
                  Ver Progresso
                </Button>
              </Link>
              <Link to={`/project/${id}/equity`}>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 rounded-2xl px-8 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300">
                  <Users className="h-5 w-5 mr-3" />
                  Equity & Parcerias
                </Button>
              </Link>
              <Link to={`/project/${id}/settings`}>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 rounded-2xl px-8 hover:bg-gray-50 dark:hover:bg-gray-800/20 transition-all duration-300">
                  <Settings className="h-5 w-5 mr-3" />
                  Configurações
                </Button>
              </Link>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-2 shadow-lg">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 py-3 text-lg font-medium"
                >
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger 
                  value="tasks" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 py-3 text-lg font-medium"
                >
                  Tarefas
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 py-3 text-lg font-medium"
                >
                  Comunidade
                </TabsTrigger>
                <TabsTrigger 
                  value="members" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 py-3 text-lg font-medium"
                >
                  Membros
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <ProjectOverview />
              </TabsContent>
              
              <TabsContent value="tasks" className="mt-8">
                <ProjectTasks />
              </TabsContent>
              
              <TabsContent value="community" className="mt-8">
                <ProjectCommunity />
              </TabsContent>
              
              <TabsContent value="members" className="mt-8">
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
