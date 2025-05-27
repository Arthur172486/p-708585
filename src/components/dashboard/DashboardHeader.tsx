
import React from "react";
import { Bell, Search, Plus, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const DashboardHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-gray-800 border-b border-gray-700 px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Projetos</h1>
          <p className="text-gray-400">Descubra e participe de projetos incríveis</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar projetos..."
              className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 w-64"
            />
          </div>
          
          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleTheme}
            className="text-gray-400 hover:text-white"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          {/* Create Project Button */}
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Criar Projeto
          </Button>
          
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
