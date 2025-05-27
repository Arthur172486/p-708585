
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  Trophy, 
  MessageSquare, 
  Settings, 
  ChevronLeft,
  Plus,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FolderKanban, label: "My Projects", count: 3 },
  { icon: Users, label: "Teams", count: 2 },
  { icon: Trophy, label: "Hackathons" },
  { icon: MessageSquare, label: "Messages", count: 5 },
  { icon: Search, label: "Discover" },
  { icon: Settings, label: "Settings" },
];

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <img 
              src="/logo.svg" 
              alt="Solvearn" 
              className="h-8" 
            />
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className={cn(
              "h-4 w-4 transition-transform",
              isCollapsed && "rotate-180"
            )} />
          </Button>
        </div>
      </div>

      {/* Create New Button */}
      <div className="p-4">
        <Button 
          className="w-full bg-solvearn-purple-500 hover:bg-solvearn-purple-600 text-white"
          size={isCollapsed ? "sm" : "default"}
        >
          <Plus className="h-4 w-4" />
          {!isCollapsed && <span className="ml-2">New Project</span>}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
              item.active 
                ? "bg-solvearn-purple-100 text-solvearn-purple-700" 
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && (
              <>
                <span className="ml-3 flex-1">{item.label}</span>
                {item.count && (
                  <span className="bg-solvearn-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.count}
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-solvearn-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Entrepreneur</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
