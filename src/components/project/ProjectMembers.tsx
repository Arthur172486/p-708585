
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, MessageCircle, Star } from "lucide-react";

const members = [
  {
    id: 1,
    name: "João Silva",
    role: "Frontend Developer",
    status: "online",
    joinDate: "2024-01-01",
    tasksCompleted: 15,
    rating: 4.8
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Backend Developer",
    status: "online",
    joinDate: "2024-01-03",
    tasksCompleted: 12,
    rating: 4.9
  },
  {
    id: 3,
    name: "Pedro Costa",
    role: "UX Designer",
    status: "away",
    joinDate: "2024-01-05",
    tasksCompleted: 8,
    rating: 4.7
  },
  {
    id: 4,
    name: "Ana Lima",
    role: "VR Developer",
    status: "online",
    joinDate: "2024-01-07",
    tasksCompleted: 10,
    rating: 4.8
  },
  {
    id: 5,
    name: "Carlos Mendes",
    role: "Project Manager",
    status: "offline",
    joinDate: "2024-01-02",
    tasksCompleted: 20,
    rating: 4.9
  }
];

const ProjectMembers = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'away':
        return 'Ausente';
      default:
        return 'Offline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Membros do Projeto</h2>
        <Button className="bg-orange-500 hover:bg-orange-600">
          Convidar Membro
        </Button>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-gray-800`}></div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                  <p className="text-sm text-gray-500">{getStatusText(member.status)}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Tarefas Concluídas:</span>
                    <span className="text-orange-500 font-medium">{member.tasksCompleted}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Avaliação:</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-orange-500 font-medium">{member.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Membro desde:</span>
                    <span className="text-gray-300">{new Date(member.joinDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-gray-700 border-gray-600 text-white">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-gray-700 border-gray-600 text-white">
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectMembers;
