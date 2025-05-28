
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
    Recruiting: "bg-gradient-to-r from-emerald-600 to-teal-700 text-white",
    Active: "bg-gradient-to-r from-blue-600 to-indigo-700 text-white",
    Funding: "bg-gradient-to-r from-slate-600 to-gray-700 text-white"
  };

  return (
    <Card className="group relative h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Floating bookmark button */}
      <Button 
        size="sm" 
        variant="ghost" 
        className="absolute top-3 right-3 z-10 h-8 w-8 p-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700"
      >
        <Bookmark className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      </Button>

      <CardHeader className="pb-4">
        {project.image && (
          <div className="w-full h-40 rounded-lg overflow-hidden mb-4 relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            <div className="absolute bottom-2 left-2">
              <Badge className={`${statusColors[project.status as keyof typeof statusColors]} text-xs font-medium px-2 py-1`}>
                {project.status}
              </Badge>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{project.members}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{project.category}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Ver Funções
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="p-3">
                <div className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Funções Necessárias
                </div>
                {project.needed.map((role, index) => (
                  <DropdownMenuItem key={index} className="p-2 rounded-md">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm">{role}</span>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                        Aberta
                      </Badge>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to={`/project/${project.id}`}>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
              Ver Mais
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
