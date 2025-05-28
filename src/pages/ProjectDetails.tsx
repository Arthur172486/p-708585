
import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Settings, Users } from "lucide-react";
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
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">EcoTrack VR</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Virtual reality company which offers unique approach to be the future of environmental
                </p>
              </div>
              <div className="flex space-x-2">
                <Link to={`/project/${id}/chat`}>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                </Link>
                <Link to={`/project/${id}/progress`}>
                  <Button variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Progresso
                  </Button>
                </Link>
                <Link to={`/project/${id}/equity`}>
                  <Button variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Equity
                  </Button>
                </Link>
                <Link to={`/project/${id}/settings`}>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Configurações
                  </Button>
                </Link>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-700 dark:text-gray-300"
                >
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger 
                  value="tasks" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-700 dark:text-gray-300"
                >
                  Tarefas
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-700 dark:text-gray-300"
                >
                  Comunidade
                </TabsTrigger>
                <TabsTrigger 
                  value="members" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-700 dark:text-gray-300"
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
