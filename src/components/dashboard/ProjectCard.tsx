
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Users, Clock, ChevronDown, UserPlus, Star, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  members: number;
  needed: string[];
  image?: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const statusColors = {
    Recruiting: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white",
    Active: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
    Funding: "bg-gradient-to-r from-purple-500 to-violet-600 text-white"
  };

  return (
    <Card className="group relative h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Floating bookmark button */}
      <Button 
        size="sm" 
        variant="ghost" 
        className="absolute top-4 right-4 z-10 h-8 w-8 p-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700"
      >
        <Bookmark className="h-4 w-4" />
      </Button>

      <CardHeader className="pb-3 relative">
        {project.image && (
          <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <Badge className={`${statusColors[project.status as keyof typeof statusColors]} text-xs font-semibold px-3 py-1 shadow-lg`}>
                {project.status}
              </Badge>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight">
              {project.title}
            </h3>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Ver Funções Abertas
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-2xl rounded-2xl p-4">
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    Funções Necessárias
                  </div>
                  {project.needed.map((role, index) => (
                    <DropdownMenuItem key={index} className="cursor-pointer p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm font-medium">{role}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs bg-green-100 text-green-700 border-green-200">
                            Aberta
                          </Badge>
                          <Star className="h-3 w-3 text-yellow-500" />
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-6">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 border-0 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-orange-500" />
              <span className="font-medium">{project.members} membros</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="font-medium">{project.category}</span>
            </div>
          </div>
        </div>

        <Link to={`/project/${project.id}`} className="block">
          <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-3 font-semibold">
            Explorar Projeto
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
