
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import ProjectsOverview from "@/components/dashboard/ProjectsOverview";
import QuickActions from "@/components/dashboard/QuickActions";
import TeamActivity from "@/components/dashboard/TeamActivity";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
          </div>
          
          <DashboardStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ProjectsOverview />
            </div>
            <div>
              <TeamActivity />
            </div>
          </div>
          
          <QuickActions />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
