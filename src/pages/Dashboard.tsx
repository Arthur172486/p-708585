
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectGrid from "@/components/dashboard/ProjectGrid";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <ProjectGrid />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
