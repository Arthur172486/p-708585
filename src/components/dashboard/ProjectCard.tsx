
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, ArrowRight } from "lucide-react";
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
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 group overflow-hidden">
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
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
            {project.category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2 line-clamp-3">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400 text-sm">
              <Users className="h-4 w-4 mr-1" />
              <span>{project.members} members</span>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                >
                  Looking for <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700 w-56">
                <div className="p-2">
                  <p className="text-sm font-medium text-white mb-2">Needed roles:</p>
                  {project.needed.map((role, index) => (
                    <DropdownMenuItem key={index} className="text-gray-300 hover:bg-gray-700 hover:text-white">
                      <div className="flex items-center justify-between w-full">
                        <span>{role}</span>
                        <Button size="sm" variant="ghost" className="h-6 px-2 text-purple-400 hover:text-purple-300">
                          Apply
                        </Button>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex space-x-2 pt-2">
            <Button 
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
              size="sm"
            >
              View Details <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
            >
              Join Team
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
