
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Calendar, CheckCircle, Clock, AlertCircle, Users, Trophy, TrendingUp } from "lucide-react";
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
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-orange-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'in-progress':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const overallProgress = milestones.reduce((acc, milestone) => acc + milestone.progress, 0) / milestones.length;

  return (
    <div className="min-h-screen bg-slate-900">
      <GlassHeader />
      
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link to={`/project/${id}`}>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Progresso - EcoTrack VR
                </h1>
                <p className="text-slate-400">
                  Acompanhe o desenvolvimento do projeto
                </p>
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-emerald-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  {Math.round(overallProgress)}%
                </div>
                <div className="text-sm text-slate-400">Progresso Geral</div>
                <Progress value={overallProgress} className="mt-3 h-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {milestones.filter(m => m.status === 'completed').length}
                </div>
                <div className="text-sm text-slate-400">Marcos Concluídos</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Clock className="h-8 w-8 text-orange-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {milestones.filter(m => m.status === 'in-progress').length}
                </div>
                <div className="text-sm text-slate-400">Em Andamento</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
                <div className="text-sm text-slate-400">Membros Ativos</div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-orange-500" />
                Marcos do Projeto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="relative">
                  {index < milestones.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-slate-700"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1 relative z-10">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        milestone.status === 'completed' ? 'bg-emerald-500/20' :
                        milestone.status === 'in-progress' ? 'bg-orange-500/20' : 'bg-slate-500/20'
                      }`}>
                        {getStatusIcon(milestone.status)}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white text-lg">
                          {milestone.title}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(milestone.status)}`}>
                          {milestone.status === 'completed' ? 'Concluído' : 
                           milestone.status === 'in-progress' ? 'Em Andamento' : 'Pendente'}
                        </span>
                      </div>
                      
                      <p className="text-slate-400 mb-4">
                        {milestone.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-slate-400">
                          <span>Progresso</span>
                          <span>{milestone.progress}%</span>
                        </div>
                        <Progress value={milestone.progress} className="h-2" />
                      </div>

                      <div className="flex items-center space-x-4 mt-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Prazo: {new Date(milestone.dueDate).toLocaleDateString('pt-BR')}</span>
                        </div>
                        {milestone.completedDate && (
                          <div className="flex items-center space-x-1 text-emerald-400">
                            <CheckCircle className="h-4 w-4" />
                            <span>Concluído em: {new Date(milestone.completedDate).toLocaleDateString('pt-BR')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
