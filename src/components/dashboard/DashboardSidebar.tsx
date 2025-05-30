
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  FolderOpen, 
  Users, 
  Trophy, 
  User, 
  Settings, 
  Bell,
  Sparkles,
  Target,
  MessageCircle
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/dashboard",
    },
    {
      title: "Meus Projetos",
      icon: FolderOpen,
      path: "/my-projects",
    },
    {
      title: "Comunidade",
      icon: MessageCircle,
      path: "/community",
    },
    {
      title: "Conquistas",
      icon: Trophy,
      path: "/achievements",
    },
    {
      title: "Perfil",
      icon: User,
      path: "/profile",
    },
  ];

  const bottomMenuItems = [
    {
      title: "Configurações",
      icon: Settings,
      path: "/settings",
    },
    {
      title: "Notificações",
      icon: Bell,
      path: "/notifications",
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-orange-200 h-screen fixed left-0 top-0 z-40 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-orange-200">
        <Link to="/dashboard" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-orange-400 animate-pulse" />
          </div>
          <span className="text-2xl font-bold text-orange-600">
            Solvearn
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-orange-100 text-orange-600 border border-orange-200 shadow-sm"
                  : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              )}
            >
              <IconComponent className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Stats */}
      <div className="p-4 mx-4 mt-6 bg-orange-50 rounded-xl border border-orange-200">
        <div className="text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <h4 className="font-semibold text-gray-800 mb-1">Progresso Mensal</h4>
          <p className="text-sm text-gray-600 mb-3">75% concluído</p>
          <div className="w-full bg-orange-200 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-orange-200 bg-white">
        <div className="space-y-2">
          {bottomMenuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComponent = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-orange-100 text-orange-600 border border-orange-200"
                    : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                )}
              >
                <IconComponent className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
