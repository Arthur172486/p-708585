
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import GlassHeader from "@/components/ui/glass-header";

const ProjectProgress = () => {
  const { id } = useParams();

  const milestones = [
    {
      id: 1,
      title: "Planejamento e Design",
      description: "Definição dos requisitos e criação dos wireframes",
      status: "completed",
      progress: 100,
      dueDate: "2024-01-15",
      completedDate: "2024-01-14"
    },
    {
      id: 2,
      title: "Desenvolvimento Frontend",
      description: "Implementação da interface do usuário",
      status: "in-progress",
      progress: 75,
      dueDate: "2024-02-01",
      completedDate: null
    },
    {
      id: 3,
      title: "Desenvolvimento Backend",
      description: "APIs e lógica do servidor",
      status: "in-progress",
      progress: 60,
      dueDate: "2024-02-15",
      completedDate: null
    },
    {
      id: 4,
      title: "Integração VR",
      description: "Implementação das funcionalidades de realidade virtual",
      status: "pending",
      progress: 0,
      dueDate: "2024-03-01",
      completedDate: null
    },
    {
      id: 5,
      title: "Testes e Deploy",
      description: "Testes finais e lançamento",
      status: "pending",
      progress: 0,
      dueDate: "2024-03-15",
      completedDate: null
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-orange-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const overallProgress = milestones.reduce((acc, milestone) => acc + milestone.progress, 0) / milestones.length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlassHeader />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {/* Header */}
          <Card className="mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link to={`/project/${id}`}>
                    <Button variant="ghost" size="sm">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Voltar
                    </Button>
                  </Link>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Progresso - EcoTrack VR
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Acompanhe o desenvolvimento do projeto
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Overall Progress */}
          <Card className="mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Progresso Geral
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Concluído</span>
                    <span>{Math.round(overallProgress)}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-3" />
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">
                      {milestones.filter(m => m.status === 'completed').length}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Concluídas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      {milestones.filter(m => m.status === 'in-progress').length}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Em Andamento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400">
                      {milestones.filter(m => m.status === 'pending').length}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Pendentes</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Milestones */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Marcos do Projeto
            </h3>
            {milestones.map((milestone, index) => (
              <Card key={milestone.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {milestone.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {milestone.description}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(milestone.status)}`}>
                          {milestone.status === 'completed' ? 'Concluído' : 
                           milestone.status === 'in-progress' ? 'Em Andamento' : 'Pendente'}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>Progresso</span>
                          <span>{milestone.progress}%</span>
                        </div>
                        <Progress value={milestone.progress} className="h-2" />
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Prazo: {new Date(milestone.dueDate).toLocaleDateString('pt-BR')}</span>
                        </div>
                        {milestone.completedDate && (
                          <div className="flex items-center space-x-1 text-green-600">
                            <CheckCircle className="h-4 w-4" />
                            <span>Concluído em: {new Date(milestone.completedDate).toLocaleDateString('pt-BR')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
