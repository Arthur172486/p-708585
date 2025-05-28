
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Bell, User, Settings, LogOut, Menu, Sparkles } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl border-b border-white/20 dark:border-gray-800/20 shadow-2xl" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
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
                    "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:text-orange-500"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar projetos incríveis..."
                className="pl-12 pr-4 py-3 bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 backdrop-blur-xl rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:bg-white/30 dark:focus:bg-gray-800/30 transition-all duration-300 shadow-lg"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative h-12 w-12 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 shadow-lg"
            >
              <Bell className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse shadow-lg"></div>
            </Button>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="h-12 w-12 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 shadow-lg"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="relative h-12 w-12 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 shadow-lg"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl border border-white/30 dark:border-gray-800/30 shadow-2xl rounded-2xl p-2">
                <div className="px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">João Silva</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">joao@example.com</p>
                </div>
                <DropdownMenuItem asChild className="rounded-xl m-1">
                  <Link to="/profile" className="cursor-pointer flex items-center p-3">
                    <User className="h-4 w-4 mr-3" />
                    Meu Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl m-1 p-3">
                  <Settings className="h-4 w-4 mr-3" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem className="rounded-xl m-1 p-3 text-red-600 focus:text-red-600">
                  <LogOut className="h-4 w-4 mr-3" />
                  Sair da Conta
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden h-12 w-12 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 transition-all duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20 dark:border-gray-800/20 backdrop-blur-2xl">
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-white/20 dark:hover:bg-gray-800/20 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 px-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar projetos..."
                  className="pl-12 pr-4 py-3 bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 backdrop-blur-xl rounded-2xl"
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
