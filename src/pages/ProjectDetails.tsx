
import React from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectTasks from "@/components/project/ProjectTasks";
import ProjectCommunity from "@/components/project/ProjectCommunity";
import ProjectMembers from "@/components/project/ProjectMembers";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">EcoTrack VR</h1>
              <p className="text-gray-400 mt-2">Virtual reality company which offers unique approach to be the future of environmental</p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800 border-gray-700">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                >
                  Visão Geral
                </TabsTrigger>
                <TabsTrigger 
                  value="tasks" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                >
                  Tarefas
                </TabsTrigger>
                <TabsTrigger 
                  value="community" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                >
                  Comunidade
                </TabsTrigger>
                <TabsTrigger 
                  value="members" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
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
        </main>
      </div>
    </div>
  );
};

export default ProjectDetails;
