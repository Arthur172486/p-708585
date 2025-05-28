
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Target, TrendingUp } from "lucide-react";

const ProjectOverview = () => {
  return (
    <div className="space-y-6">
      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">8</div>
            <div className="text-sm text-gray-400">Membros Ativos</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">45</div>
            <div className="text-sm text-gray-400">Dias Restantes</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">72%</div>
            <div className="text-sm text-gray-400">Progresso</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">$15K</div>
            <div className="text-sm text-gray-400">Orçamento</div>
          </CardContent>
        </Card>
      </div>

      {/* Project Description */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <h3 className="text-xl font-semibold text-white">Descrição do Projeto</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            EcoTrack VR é uma empresa de realidade virtual que oferece uma abordagem única para ser o futuro 
            ambiental e ajudar a floresta no mundo real. Nosso objetivo é criar experiências imersivas que 
            conectem as pessoas com a natureza e promovam a consciência ambiental.
          </p>
          
          <div className="space-y-3">
            <h4 className="text-lg font-medium text-white">Objetivos Principais:</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Desenvolver experiências VR educativas sobre sustentabilidade
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Criar parcerias com ONGs ambientais
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Implementar sistema de gamificação para engajamento
              </li>
            </ul>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Ver Documentação
            </Button>
            <Button variant="outline" className="bg-gray-700 border-gray-600 text-white">
              Download Assets
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
