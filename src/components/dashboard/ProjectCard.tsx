
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  members: number;
  needed: string[];
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [appliedRole, setAppliedRole] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Recruiting':
        return 'bg-green-600 text-white';
      case 'Funding':
        return 'bg-purple-600 text-white';
      case 'Active':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const handleApply = (role: string) => {
    setAppliedRole(role);
    console.log(`Candidatura enviada para ${role} no projeto ${project.title}`);
  };

  return (
    <Card className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700 hover:border-orange-500 transition-all duration-300 group overflow-hidden">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-gray-300">
            {project.category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2 line-clamp-3">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400 text-sm">
              <Users className="h-4 w-4 mr-1" />
              <span>{project.members} membros</span>
            </div>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>{project.needed.length} vagas</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Procurando por:</p>
            <div className="flex flex-wrap gap-1">
              {project.needed.map((role, index) => (
                <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  {role}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-2 pt-2">
            <Link to={`/project/${project.id}`} className="flex-1">
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                size="sm"
              >
                Ver Detalhes <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            
            {appliedRole ? (
              <Button 
                variant="outline" 
                size="sm"
                disabled
                className="bg-green-600 border-green-600 text-white"
              >
                Candidatado como {appliedRole}
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                  >
                    Se Candidatar <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700 w-56">
                  <div className="p-2">
                    <p className="text-sm font-medium text-white mb-2">Escolha sua especialidade:</p>
                    {project.needed.map((role, index) => (
                      <DropdownMenuItem 
                        key={index} 
                        className="text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                        onClick={() => handleApply(role)}
                      >
                        <User className="h-4 w-4 mr-2" />
                        {role}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
