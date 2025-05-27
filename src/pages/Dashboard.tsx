
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardStats from "@/components/dashboard/DashboardStats";
import ProjectsOverview from "@/components/dashboard/ProjectsOverview";
import TeamActivity from "@/components/dashboard/TeamActivity";
import QuickActions from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Stats Overview */}
          <DashboardStats />
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Projects and Quick Actions */}
            <div className="lg:col-span-2 space-y-6">
              <ProjectsOverview />
              <QuickActions />
            </div>
            
            {/* Team Activity Sidebar */}
            <div className="lg:col-span-1">
              <TeamActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
