
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Users, MoreHorizontal, TrendingUp, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    progress: number;
    dueDate: string;
    members: Array<{
      id: string;
      name: string;
      avatar?: string;
    }>;
    status: 'active' | 'completed' | 'paused';
    category: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-orange-100 text-orange-600 border-orange-200';
      case 'completed':
        return 'bg-green-100 text-green-600 border-green-200';
      case 'paused':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      default:
        return 'bg-orange-100 text-orange-600 border-orange-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'completed':
        return 'Concluído';
      case 'paused':
        return 'Pausado';
      default:
        return 'Ativo';
    }
  };

  return (
    <Card className="group bg-white border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Badge className={`${getStatusColor(project.status)} text-xs font-medium`}>
              {getStatusText(project.status)}
            </Badge>
            <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
              <Link to={`/project/${project.id}`} className="hover:underline">
                {project.title}
              </Link>
            </CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-50">
            <MoreHorizontal className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">
          {project.description}
        </p>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Progresso</span>
            <span className="text-sm font-semibold text-orange-600">{project.progress}%</span>
          </div>
          <div className="w-full bg-orange-100 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Members */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-500" />
            <div className="flex -space-x-2">
              {project.members.slice(0, 3).map((member, index) => (
                <Avatar key={member.id} className="w-6 h-6 border-2 border-white">
                  {member.avatar ? (
                    <AvatarImage src={member.avatar} alt={member.name} />
                  ) : (
                    <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
              ))}
              {project.members.length > 3 && (
                <div className="w-6 h-6 bg-orange-100 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-orange-600">
                    +{project.members.length - 3}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(project.dueDate).toLocaleDateString('pt-BR')}
          </div>
        </div>

        {/* Category and Stats */}
        <div className="flex items-center justify-between pt-3 border-t border-orange-100">
          <Badge variant="outline" className="text-xs border-orange-200 text-orange-600">
            {project.category}
          </Badge>
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>2d</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-orange-500" />
              <span className="text-orange-600">+12%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
