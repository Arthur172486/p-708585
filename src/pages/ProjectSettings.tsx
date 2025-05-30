
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Users, Settings, Trash2, Bell, Shield, Palette, Database } from "lucide-react";
import GlassHeader from "@/components/ui/glass-header";

const ProjectSettings = () => {
  const { id } = useParams();
  const [projectName, setProjectName] = useState("EcoTrack VR");
  const [description, setDescription] = useState("Virtual reality company which offers unique approach to be the future of environmental monitoring and sustainability education through immersive experiences.");
  const [isPrivate, setIsPrivate] = useState(false);
  const [allowApplications, setAllowApplications] = useState(true);
  const [requireApproval, setRequireApproval] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleSave = () => {
    console.log("Salvando configurações do projeto...");
  };

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
                  Configurações - {projectName}
                </h1>
                <p className="text-slate-400">
                  Gerencie as configurações do seu projeto
                </p>
              </div>
            </div>
            <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700 text-white">
              <Save className="h-4 w-4 mr-2" />
              Salvar Alterações
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Settings */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Information */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Settings className="h-6 w-6 mr-2 text-orange-500" />
                    Informações do Projeto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Nome do Projeto
                    </label>
                    <Input
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="Nome do projeto"
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Descrição
                    </label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Descrição do projeto"
                      rows={4}
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Tags do Projeto
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">VR/AR</Badge>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Sustentabilidade</Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Tecnologia</Badge>
                    </div>
                    <Input
                      placeholder="Adicionar nova tag..."
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Privacy & Access */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-blue-500" />
                    Privacidade e Acesso
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Projeto Privado</h4>
                      <p className="text-sm text-slate-400">
                        Apenas membros convidados podem ver este projeto
                      </p>
                    </div>
                    <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Permitir Candidaturas</h4>
                      <p className="text-sm text-slate-400">
                        Outros usuários podem se candidatar para participar
                      </p>
                    </div>
                    <Switch checked={allowApplications} onCheckedChange={setAllowApplications} />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Aprovação Manual</h4>
                      <p className="text-sm text-slate-400">
                        Candidaturas precisam de aprovação manual
                      </p>
                    </div>
                    <Switch checked={requireApproval} onCheckedChange={setRequireApproval} />
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Bell className="h-6 w-6 mr-2 text-yellow-500" />
                    Notificações
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Notificações por Email</h4>
                      <p className="text-sm text-slate-400">
                        Receber atualizações importantes por email
                      </p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">Notificações Push</h4>
                      <p className="text-sm text-slate-400">
                        Receber notificações em tempo real no navegador
                      </p>
                    </div>
                    <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Users className="h-6 w-6 mr-2 text-green-500" />
                    Gerenciar Equipe
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                    Convidar Membros
                  </Button>
                  <Button variant="outline" className="w-full bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                    Ver Candidaturas (3)
                  </Button>
                  <Button variant="outline" className="w-full bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                    Gerenciar Permissões
                  </Button>
                </CardContent>
              </Card>

              {/* Project Tools */}
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <Database className="h-6 w-6 mr-2 text-purple-500" />
                    Ferramentas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                    Exportar Dados
                  </Button>
                  <Button variant="outline" className="w-full bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                    Backup do Projeto
                  </Button>
                  <Button variant="outline" className="w-full bg-slate-700/50 border-slate-600 text-white hover:bg-slate-600">
                    Relatórios
                  </Button>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card className="bg-red-900/20 border-red-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-red-400 flex items-center">
                    <Trash2 className="h-6 w-6 mr-2" />
                    Zona de Perigo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-red-300">
                    Ações irreversíveis que afetam permanentemente o projeto.
                  </p>
                  <Button variant="outline" className="w-full border-red-600/50 text-red-400 hover:bg-red-900/30">
                    Arquivar Projeto
                  </Button>
                  <Button variant="destructive" className="w-full bg-red-600/20 border-red-600/50 text-red-400 hover:bg-red-600/30">
                    Excluir Projeto
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSettings;
