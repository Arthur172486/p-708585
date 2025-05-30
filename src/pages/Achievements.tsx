
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, Zap, Award, Crown, Medal, Gift } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Primeiro Projeto",
      description: "Criou seu primeiro projeto na plataforma",
      icon: Target,
      earned: true,
      earnedDate: "2024-01-10",
      rarity: "common",
      points: 100
    },
    {
      id: 2,
      title: "Colaborador",
      description: "Participou de 5 projetos diferentes",
      icon: Star,
      earned: true,
      earnedDate: "2024-01-15",
      rarity: "uncommon",
      points: 250
    },
    {
      id: 3,
      title: "Líder de Equipe",
      description: "Liderou um projeto até a conclusão",
      icon: Crown,
      earned: true,
      earnedDate: "2024-01-20",
      rarity: "rare",
      points: 500
    },
    {
      id: 4,
      title: "Velocista",
      description: "Completou 50 tarefas em um mês",
      icon: Zap,
      earned: false,
      earnedDate: null,
      rarity: "epic",
      points: 750,
      progress: 32
    },
    {
      id: 5,
      title: "Mestre dos Projetos",
      description: "Completou 10 projetos com sucesso",
      icon: Trophy,
      earned: false,
      earnedDate: null,
      rarity: "legendary",
      points: 1000,
      progress: 3
    },
    {
      id: 6,
      title: "Mentor",
      description: "Ajudou 20 desenvolvedores novatos",
      icon: Award,
      earned: false,
      earnedDate: null,
      rarity: "epic",
      points: 800,
      progress: 7
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' };
      case 'uncommon': return { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' };
      case 'rare': return { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' };
      case 'epic': return { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' };
      case 'legendary': return { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' };
    }
  };

  const earnedCount = achievements.filter(a => a.earned).length;
  const totalPoints = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0);

  return (
    <div className="min-h-screen bg-orange-50 flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Conquistas</h1>
              <p className="text-gray-600 mb-6">
                {earnedCount} de {achievements.length} conquistadas ({Math.round((earnedCount / achievements.length) * 100)}%)
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-white border-orange-200">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                        <Trophy className="h-8 w-8 text-orange-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">{earnedCount}</div>
                    <div className="text-sm text-gray-600">Conquistas Desbloqueadas</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-orange-200">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Medal className="h-8 w-8 text-yellow-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{totalPoints}</div>
                    <div className="text-sm text-gray-600">Pontos Totais</div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-orange-200">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <Gift className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                    <div className="text-sm text-gray-600">Próximas Conquistas</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Progress Overview */}
            <Card className="bg-white border-orange-200 mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Progresso Geral</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progresso das Conquistas</span>
                    <span className="text-orange-600 font-medium">{Math.round((earnedCount / achievements.length) * 100)}%</span>
                  </div>
                  <Progress value={(earnedCount / achievements.length) * 100} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon;
                const rarityColors = getRarityColor(achievement.rarity);
                
                return (
                  <Card 
                    key={achievement.id} 
                    className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                      achievement.earned 
                        ? 'bg-white border-orange-200 shadow-lg' 
                        : 'bg-gray-50 border-gray-200 opacity-60'
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-full ${rarityColors.bg}`}>
                          <IconComponent 
                            className={`h-6 w-6 ${
                              achievement.earned 
                                ? rarityColors.text 
                                : 'text-gray-400'
                            }`} 
                          />
                        </div>
                        <Badge 
                          className={`${rarityColors.bg} ${rarityColors.text} ${rarityColors.border} text-xs border`}
                        >
                          {achievement.rarity.toUpperCase()}
                        </Badge>
                      </div>
                      <CardTitle className={`text-lg ${achievement.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-sm mb-4 ${achievement.earned ? 'text-gray-600' : 'text-gray-500'}`}>
                        {achievement.description}
                      </p>
                      
                      {achievement.earnedDate && (
                        <p className="text-xs text-gray-500 mb-3">
                          Conquistado em {new Date(achievement.earnedDate).toLocaleDateString('pt-BR')}
                        </p>
                      )}

                      {!achievement.earned && achievement.progress !== undefined && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Progresso</span>
                            <span className="text-orange-600">{achievement.progress}/50</span>
                          </div>
                          <Progress value={(achievement.progress / 50) * 100} className="h-2" />
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                        <div className="flex items-center">
                          <Medal className="h-4 w-4 text-yellow-500 mr-2" />
                          <span className="text-sm font-medium text-gray-700">{achievement.points} pts</span>
                        </div>
                        {achievement.earned && (
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Achievements;
