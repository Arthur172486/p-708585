
import React from "react";
import { Home, Users, FolderKanban, Trophy, MessageSquare, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { icon: Home, label: "Home", active: false },
  { icon: FolderKanban, label: "Projects", active: true },
  { icon: Users, label: "Teams", active: false },
  { icon: Trophy, label: "Hackathons", active: false },
  { icon: MessageSquare, label: "Community", active: false },
  { icon: User, label: "Profile", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg"></div>
          <span className="text-xl font-bold text-white">Solvearn</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "secondary" : "ghost"}
            className={`w-full justify-start text-left ${
              item.active 
                ? "bg-purple-600 text-white hover:bg-purple-700" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>
      
      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-gray-400">Frontend Developer</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
