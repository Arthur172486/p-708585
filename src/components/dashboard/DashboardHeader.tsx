
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Search, Plus, User, Settings, LogOut, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="h-16 bg-white border-b border-orange-200 flex items-center justify-between px-6 ml-64">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar projetos..."
            className="pl-10 bg-orange-50 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <Button 
          className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
          asChild
        >
          <Link to="/create-startup">
            <Plus className="h-4 w-4 mr-2" />
            Novo Projeto
          </Link>
        </Button>

        <Button 
          variant="outline" 
          size="sm" 
          className="relative border-orange-200 text-orange-600 hover:bg-orange-50"
        >
          <Bell className="h-4 w-4" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="relative h-8 w-8 rounded-full hover:bg-orange-50"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-orange-100 text-orange-600">
                  JS
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white border-orange-200" align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium text-gray-800">João Silva</p>
                <p className="w-[200px] truncate text-sm text-gray-600">
                  joao@example.com
                </p>
              </div>
            </div>
            <DropdownMenuSeparator className="bg-orange-200" />
            <DropdownMenuItem asChild className="hover:bg-orange-50">
              <Link to="/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-orange-50">
              <Settings className="mr-2 h-4 w-4" />
              <span>Configurações</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-orange-200" />
            <DropdownMenuItem className="hover:bg-red-50 text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
