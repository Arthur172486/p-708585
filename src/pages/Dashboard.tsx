
import React from "react";
import GlassHeader from "@/components/ui/glass-header";
import ProjectGrid from "@/components/dashboard/ProjectGrid";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlassHeader />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Descobrir Projetos
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Encontre projetos incríveis para participar e construir o futuro
            </p>
          </div>
          
          <ProjectGrid />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
