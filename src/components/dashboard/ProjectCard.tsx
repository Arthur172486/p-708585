
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Users, Clock, ChevronDown, UserPlus } from "lucide-react";
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
    Recruiting: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Active: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Funding: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
  };

  return (
    <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="pb-3">
        {project.image && (
          <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {project.title}
            </h3>
            <Badge className={`${statusColors[project.status as keyof typeof statusColors]} text-xs`}>
              {project.status}
            </Badge>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-2">
                <UserPlus className="h-4 w-4 mr-1" />
                Funções
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
              <div className="p-2">
                <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Funções Necessárias:
                </div>
                {project.needed.map((role, index) => (
                  <DropdownMenuItem key={index} className="cursor-default">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm">{role}</span>
                      <Badge variant="outline" className="text-xs">Aberta</Badge>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{project.members} membros</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{project.category}</span>
          </div>
        </div>

        <Link to={`/project/${project.id}`}>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Ver Projeto
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
