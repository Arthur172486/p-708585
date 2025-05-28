
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Bell, User, Settings, LogOut, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";

const GlassHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Projetos", path: "/dashboard" },
    { label: "Meus Projetos", path: "/my-projects" },
    { label: "Comunidade", path: "/community" },
    { label: "Conquistas", path: "/achievements" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm" 
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-slate-900 font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Solvearn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar projetos..."
                className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:bg-white dark:focus:bg-gray-700 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative h-9 w-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Bell className="h-4 w-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </Button>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="h-9 w-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-9 w-9 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="w-6 h-6 bg-slate-900 dark:bg-white rounded-md flex items-center justify-center">
                    <User className="h-3 w-3 text-white dark:text-slate-900" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">João Silva</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">joao@example.com</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">
                    <User className="h-4 w-4 mr-2" />
                    Meu Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair da Conta
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden h-9 w-9 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 px-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar projetos..."
                  className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default GlassHeader;
