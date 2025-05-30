
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Users, Clock, ChevronDown, UserPlus, Star, Bookmark, Eye } from "lucide-react";
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
    Recruiting: "bg-emerald-500/90 text-white",
    Active: "bg-blue-500/90 text-white",
    Funding: "bg-purple-500/90 text-white"
  };

  const statusLabels = {
    Recruiting: "Recrutando",
    Active: "Ativo", 
    Funding: "Financiamento"
  };

  return (
    <Card className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
      {/* Image Section */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={`${statusColors[project.status as keyof typeof statusColors]} px-3 py-1 text-sm font-medium`}>
              {statusLabels[project.status as keyof typeof statusLabels]}
            </Badge>
          </div>
          
          {/* Bookmark Button */}
          <Button 
            size="sm" 
            variant="ghost" 
            className="absolute top-4 right-4 h-8 w-8 p-0 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50"
          >
            <Bookmark className="h-4 w-4 text-white" />
          </Button>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white leading-tight line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-slate-600/50 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-orange-400" />
              <span className="text-slate-300">{project.members} membros</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-blue-400" />
              <span className="text-slate-300">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full bg-orange-500/10 border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Ver Funções Abertas
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-72 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-xl p-3">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-white mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2 text-orange-400" />
                  Funções Necessárias
                </div>
                {project.needed.map((role, index) => (
                  <DropdownMenuItem key={index} className="cursor-pointer p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-medium text-slate-200">{role}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          Aberta
                        </Badge>
                        <Star className="h-3 w-3 text-yellow-400" />
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to={`/project/${project.id}`} className="block">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 py-3 font-semibold">
              <Eye className="h-4 w-4 mr-2" />
              Explorar Projeto
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
