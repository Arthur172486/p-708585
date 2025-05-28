
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, MapPin, Calendar, Github, Linkedin, Mail, Settings } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Header */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h1 className="text-3xl font-bold text-white">João Silva</h1>
                    <p className="text-xl text-gray-400">Desenvolvedor Frontend</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        São Paulo, Brasil
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Membro desde Janeiro 2024
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-white">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </div>
                  
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Settings className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500">12</div>
                  <div className="text-sm text-gray-400">Projetos Participando</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500">8</div>
                  <div className="text-sm text-gray-400">Projetos Concluídos</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500">156</div>
                  <div className="text-sm text-gray-400">Tarefas Completadas</div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500">4.8</div>
                  <div className="text-sm text-gray-400">Avaliação Média</div>
                </CardContent>
              </Card>
            </div>

            {/* Skills & Bio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-white">Sobre</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">
                    Desenvolvedor frontend apaixonado por criar experiências digitais incríveis. 
                    Especializado em React, TypeScript e design responsivo. Sempre em busca de 
                    novos desafios e oportunidades para crescer profissionalmente.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-white">Habilidades</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js', 'Git', 'Figma', 'Tailwind CSS'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
