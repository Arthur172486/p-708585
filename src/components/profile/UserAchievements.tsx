
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Zap, Award, Crown } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Primeiro Projeto",
    description: "Criou seu primeiro projeto",
    icon: Target,
    earned: true,
    earnedDate: "2024-01-10",
    rarity: "common"
  },
  {
    id: 2,
    title: "Colaborador",
    description: "Participou de 5 projetos diferentes",
    icon: Star,
    earned: true,
    earnedDate: "2024-01-15",
    rarity: "uncommon"
  },
  {
    id: 3,
    title: "Líder de Equipe",
    description: "Liderou um projeto até a conclusão",
    icon: Crown,
    earned: true,
    earnedDate: "2024-01-20",
    rarity: "rare"
  },
  {
    id: 4,
    title: "Velocista",
    description: "Completou 50 tarefas em um mês",
    icon: Zap,
    earned: false,
    earnedDate: null,
    rarity: "epic"
  },
  {
    id: 5,
    title: "Mestre dos Projetos",
    description: "Completou 10 projetos com sucesso",
    icon: Trophy,
    earned: false,
    earnedDate: null,
    rarity: "legendary"
  },
  {
    id: 6,
    title: "Mentor",
    description: "Ajudou 20 desenvolvedores novatos",
    icon: Award,
    earned: false,
    earnedDate: null,
    rarity: "epic"
  }
];

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common': return 'bg-gray-500';
    case 'uncommon': return 'bg-green-500';
    case 'rare': return 'bg-blue-500';
    case 'epic': return 'bg-purple-500';
    case 'legendary': return 'bg-orange-500';
    default: return 'bg-gray-500';
  }
};

const UserAchievements = () => {
  const earnedCount = achievements.filter(a => a.earned).length;
  const totalCount = achievements.length;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Conquistas</h2>
        <p className="text-gray-400">
          {earnedCount} de {totalCount} conquistadas ({Math.round((earnedCount / totalCount) * 100)}%)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => {
          const IconComponent = achievement.icon;
          return (
            <Card 
              key={achievement.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                achievement.earned 
                  ? 'bg-slate-800/80 border-slate-600' 
                  : 'bg-slate-900/50 border-slate-800 opacity-60'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-full ${getRarityColor(achievement.rarity)}/20`}>
                    <IconComponent 
                      className={`h-6 w-6 ${
                        achievement.earned 
                          ? `text-${getRarityColor(achievement.rarity).split('-')[1]}-400` 
                          : 'text-gray-500'
                      }`} 
                    />
                  </div>
                  <Badge 
                    className={`${getRarityColor(achievement.rarity)} text-white text-xs`}
                  >
                    {achievement.rarity.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className={`text-lg ${achievement.earned ? 'text-white' : 'text-gray-500'}`}>
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-sm ${achievement.earned ? 'text-gray-300' : 'text-gray-600'}`}>
                  {achievement.description}
                </p>
                {achievement.earnedDate && (
                  <p className="text-xs text-gray-400 mt-2">
                    Conquistado em {new Date(achievement.earnedDate).toLocaleDateString('pt-BR')}
                  </p>
                )}
              </CardContent>
              {achievement.earned && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default UserAchievements;
