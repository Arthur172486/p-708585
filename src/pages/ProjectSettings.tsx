
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Users, Settings, Trash2 } from "lucide-react";
import GlassHeader from "@/components/ui/glass-header";

const ProjectSettings = () => {
  const { id } = useParams();
  const [projectName, setProjectName] = useState("EcoTrack VR");
  const [description, setDescription] = useState("Virtual reality company which offers unique approach to be the future of environmental");
  const [isPrivate, setIsPrivate] = useState(false);
  const [allowApplications, setAllowApplications] = useState(true);
  const [requireApproval, setRequireApproval] = useState(true);

  const handleSave = () => {
    console.log("Salvando configurações do projeto...");
    // Aqui implementaria a lógica de salvamento
  };

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
                      Configurações - {projectName}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Gerencie as configurações do seu projeto
                    </p>
                  </div>
                </div>
                <Button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar
                </Button>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Project Information */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Informações do Projeto
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome do Projeto
                    </label>
                    <Input
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="Nome do projeto"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Descrição
                    </label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Descrição do projeto"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tags (separadas por vírgula)
                    </label>
                    <Input
                      placeholder="VR, Sustentabilidade, Tecnologia"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Settings */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Configurações de Privacidade
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Projeto Privado
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Apenas membros convidados podem ver este projeto
                      </p>
                    </div>
                    <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Permitir Candidaturas
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Outros usuários podem se candidatar para participar
                      </p>
                    </div>
                    <Switch checked={allowApplications} onCheckedChange={setAllowApplications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Aprovação Manual
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Candidaturas precisam de aprovação manual
                      </p>
                    </div>
                    <Switch checked={requireApproval} onCheckedChange={setRequireApproval} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Team Management */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Gerenciar Equipe
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full">
                    Convidar Membros
                  </Button>
                  <Button variant="outline" className="w-full">
                    Ver Candidaturas
                  </Button>
                  <Button variant="outline" className="w-full">
                    Gerenciar Permissões
                  </Button>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-red-200 dark:border-red-800">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center">
                    <Trash2 className="h-5 w-5 mr-2" />
                    Zona de Perigo
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ações irreversíveis que afetam permanentemente o projeto.
                  </p>
                  <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-950">
                    Arquivar Projeto
                  </Button>
                  <Button variant="destructive" className="w-full">
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
