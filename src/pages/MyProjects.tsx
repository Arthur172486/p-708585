
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectCard from "@/components/dashboard/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter, Search, FolderOpen, Trophy, Target, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const MyProjects = () => {
  const myProjects = [
    {
      id: "1",
      title: "EcoTrack VR",
      description: "Aplicativo de realidade virtual para monitoramento ambiental com sensores IoT integrados.",
      progress: 75,
      dueDate: "2024-02-15",
      members: [
        { id: "1", name: "João Silva" },
        { id: "2", name: "Maria Santos" },
        { id: "3", name: "Pedro Costa" },
      ],
      status: "active" as const,
      category: "Sustentabilidade"
    },
    {
      id: "2",
      title: "FinTech Mobile",
      description: "Aplicativo mobile para gestão financeira pessoal com IA para insights automáticos.",
      progress: 45,
      dueDate: "2024-03-01",
      members: [
        { id: "4", name: "Ana Lima" },
        { id: "5", name: "Carlos Oliveira" },
      ],
      status: "active" as const,
      category: "Fintech"
    },
    {
      id: "3",
      title: "Smart Learning",
      description: "Plataforma educacional adaptativa com gamificação para aprendizado personalizado.",
      progress: 100,
      dueDate: "2024-01-20",
      members: [
        { id: "6", name: "Sofia Reis" },
        { id: "7", name: "Bruno Alves" },
        { id: "8", name: "Carla Ferreira" },
      ],
      status: "completed" as const,
      category: "Educação"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Meus Projetos</h1>
                <p className="text-gray-600">Gerencie todos os seus projetos em um só lugar</p>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                <Link to="/create-startup">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Projeto
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <FolderOpen className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">3</div>
                  <div className="text-sm text-gray-600">Total de Projetos</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">1</div>
                  <div className="text-sm text-gray-600">Concluídos</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">2</div>
                  <div className="text-sm text-gray-600">Em Andamento</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2">73%</div>
                  <div className="text-sm text-gray-600">Progresso Médio</div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar projetos..."
                    className="pl-10 w-64 bg-white border-orange-200 focus:border-orange-400"
                  />
                </div>
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-100 text-orange-600 border-orange-200">Todos</Badge>
                <Badge variant="outline" className="border-orange-200 text-gray-600">Ativos</Badge>
                <Badge variant="outline" className="border-orange-200 text-gray-600">Concluídos</Badge>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyProjects;
