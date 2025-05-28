
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Clock, User } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Desenvolver interface de usuário principal",
    status: "completed",
    assignee: "João Silva",
    dueDate: "2024-01-15",
    priority: "high"
  },
  {
    id: 2,
    title: "Implementar sistema de autenticação",
    status: "in-progress",
    assignee: "Maria Santos",
    dueDate: "2024-01-20",
    priority: "high"
  },
  {
    id: 3,
    title: "Criar documentação da API",
    status: "pending",
    assignee: "Pedro Costa",
    dueDate: "2024-01-25",
    priority: "medium"
  },
  {
    id: 4,
    title: "Testes de integração VR",
    status: "pending",
    assignee: "Ana Lima",
    dueDate: "2024-01-30",
    priority: "high"
  }
];

const ProjectTasks = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-orange-500" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600';
      case 'in-progress':
        return 'bg-orange-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-600';
      case 'medium':
        return 'bg-yellow-600';
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Tarefas do Projeto</h2>
        <Button className="bg-orange-500 hover:bg-orange-600">
          Nova Tarefa
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">1</div>
            <div className="text-sm text-gray-400">Concluídas</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">1</div>
            <div className="text-sm text-gray-400">Em Progresso</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-400">2</div>
            <div className="text-sm text-gray-400">Pendentes</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  {getStatusIcon(task.status)}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">{task.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {task.assignee}
                      </div>
                      <div>
                        Prazo: {new Date(task.dueDate).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getPriorityColor(task.priority)}`}>
                    {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(task.status)}`}>
                    {task.status === 'completed' ? 'Concluída' : 
                     task.status === 'in-progress' ? 'Em Progresso' : 'Pendente'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectTasks;
