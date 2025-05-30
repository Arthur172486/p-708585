
import React, { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import UserAchievements from "@/components/profile/UserAchievements";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, MapPin, Calendar, Github, Linkedin, Mail, Settings, Trophy, Star, Target, Award } from "lucide-react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const userBadges = [
    { name: "Inovador", icon: Star, color: "bg-yellow-500", earned: true },
    { name: "Colaborador", icon: Target, color: "bg-blue-500", earned: true },
    { name: "Líder", icon: Trophy, color: "bg-purple-500", earned: true },
    { name: "Mentor", icon: Award, color: "bg-green-500", earned: false },
  ];

  const recentProjects = [
    { name: "EcoTrack VR", role: "Lead Developer", status: "Ativo", progress: 75 },
    { name: "GreenTech Mobile", role: "Frontend Dev", status: "Concluído", progress: 100 },
    { name: "Smart Garden IoT", role: "Full Stack", status: "Em Pausa", progress: 45 },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex w-full">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="relative">
                    <Avatar className="w-32 h-32">
                      <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-500 text-white text-4xl font-bold">
                        JS
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2">
                      <div className="bg-green-500 w-8 h-8 rounded-full border-4 border-slate-800 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-4xl font-bold text-white mb-2">João Silva</h1>
                      <p className="text-xl text-orange-400 mb-4">Desenvolvedor Frontend Senior</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          São Paulo, Brasil
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Membro desde Janeiro 2024
                        </div>
                      </div>

                      {/* User Badges */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {userBadges.map((badge) => {
                          const IconComponent = badge.icon;
                          return (
                            <div
                              key={badge.name}
                              className={`flex items-center space-x-2 px-3 py-2 rounded-full ${
                                badge.earned 
                                  ? `${badge.color}/20 border border-${badge.color.split('-')[1]}-500/30` 
                                  : 'bg-slate-700/30 border border-slate-600'
                              }`}
                            >
                              <IconComponent 
                                className={`h-4 w-4 ${
                                  badge.earned 
                                    ? `text-${badge.color.split('-')[1]}-400` 
                                    : 'text-slate-500'
                                }`} 
                              />
                              <span className={`text-sm font-medium ${
                                badge.earned ? 'text-white' : 'text-slate-500'
                              }`}>
                                {badge.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                        <Button variant="outline" size="sm" className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button variant="outline" size="sm" className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Settings className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">12</div>
                  <div className="text-sm text-slate-400">Projetos Participando</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">8</div>
                  <div className="text-sm text-slate-400">Projetos Concluídos</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">156</div>
                  <div className="text-sm text-slate-400">Tarefas Completadas</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">4.8</div>
                  <div className="text-sm text-slate-400">Avaliação Média</div>
                </CardContent>
              </Card>
            </div>

            {/* Profile Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2">
                  <TabsTrigger 
                    value="overview" 
                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-slate-400 rounded-xl px-6 py-3 font-medium"
                  >
                    Visão Geral
                  </TabsTrigger>
                  <TabsTrigger 
                    value="achievements" 
                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-slate-400 rounded-xl px-6 py-3 font-medium"
                  >
                    Conquistas
                  </TabsTrigger>
                  <TabsTrigger 
                    value="projects" 
                    className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-slate-400 rounded-xl px-6 py-3 font-medium"
                  >
                    Projetos
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Sobre</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 leading-relaxed">
                        Desenvolvedor frontend apaixonado por criar experiências digitais incríveis. 
                        Especializado em React, TypeScript e design responsivo. Sempre em busca de 
                        novos desafios e oportunidades para crescer profissionalmente e contribuir 
                        para projetos que fazem a diferença.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">Habilidades</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js', 'Git', 'Figma', 'Tailwind CSS', 'Next.js', 'Vue.js'].map((skill) => (
                          <Badge key={skill} className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="achievements">
                <UserAchievements />
              </TabsContent>

              <TabsContent value="projects">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Projetos Recentes</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {recentProjects.map((project, index) => (
                      <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg text-white">{project.name}</CardTitle>
                              <p className="text-slate-400">{project.role}</p>
                            </div>
                            <Badge className={`
                              ${project.status === 'Ativo' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                              ${project.status === 'Concluído' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}
                              ${project.status === 'Em Pausa' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                            `}>
                              {project.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Progresso</span>
                              <span className="text-white">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
