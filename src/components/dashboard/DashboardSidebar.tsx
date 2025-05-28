
import React from "react";
import { Home, Users, FolderKanban, Trophy, MessageSquare, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  { icon: Home, label: "Início", path: "/", active: false },
  { icon: FolderKanban, label: "Projetos", path: "/dashboard", active: true },
  { icon: Users, label: "Meus Projetos", path: "/my-projects", active: false },
  { icon: Trophy, label: "Conquistas", path: "/achievements", active: false },
  { icon: MessageSquare, label: "Comunidade", path: "/community", active: false },
  { icon: User, label: "Perfil", path: "/profile", active: false },
  { icon: Settings, label: "Configurações", path: "/settings", active: false },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-800 dark:bg-gray-800 border-r border-gray-700 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg"></div>
          <span className="text-xl font-bold text-white">Solvearn</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={index} to={item.path}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full justify-start text-left ${
                  isActive 
                    ? "bg-orange-600 text-white hover:bg-orange-700" 
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>
      
      {/* User Profile */}
      <div className="p-4 border-t border-gray-700 dark:border-gray-700">
        <Link to="/profile">
          <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded cursor-pointer transition-colors">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">João Silva</p>
              <p className="text-xs text-gray-400">Desenvolvedor Frontend</p>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
