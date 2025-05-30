import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Grid, List, Plus, TrendingUp, Users, Rocket } from "lucide-react";
import ProjectCard from "@/components/dashboard/ProjectCard";
import GlassHeader from "@/components/ui/glass-header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const projects = [
    {
      id: "1",
      title: "EcoTrack VR",
      description: "Virtual reality company which offers unique approach to be the future of environmental monitoring and sustainability education through immersive experiences.",
      progress: 75,
      dueDate: "2024-02-15",
      members: [
        { id: "1", name: "João Silva" },
        { id: "2", name: "Maria Santos" },
        { id: "3", name: "Pedro Costa" },
        { id: "4", name: "Ana Lima" },
        { id: "5", name: "Carlos Oliveira" },
        { id: "6", name: "Sofia Reis" },
        { id: "7", name: "Bruno Alves" },
        { id: "8", name: "Carla Ferreira" }
      ],
      status: "active" as const,
      category: "VR/AR"
    },
    {
      id: "2",
      title: "HealthAI Assistant",
      description: "AI-powered health monitoring system that provides personalized recommendations and early disease detection through machine learning algorithms.",
      progress: 60,
      dueDate: "2024-03-01",
      members: [
        { id: "9", name: "Ricardo Santos" },
        { id: "10", name: "Lucia Fernandes" },
        { id: "11", name: "Miguel Costa" },
        { id: "12", name: "Patricia Silva" },
        { id: "13", name: "Fernando Lima" },
        { id: "14", name: "Sandra Oliveira" },
        { id: "15", name: "Roberto Alves" },
        { id: "16", name: "Mariana Reis" },
        { id: "17", name: "Carlos Eduardo" },
        { id: "18", name: "Ana Paula" },
        { id: "19", name: "José Silva" },
        { id: "20", name: "Maria Fernanda" }
      ],
      status: "active" as const,
      category: "IA/ML"
    },
    {
      id: "3",
      title: "CryptoWallet Pro",
      description: "Next-generation cryptocurrency wallet with advanced security features, DeFi integration, and multi-chain support for seamless transactions.",
      progress: 40,
      dueDate: "2024-04-15",
      members: [
        { id: "21", name: "André Santos" },
        { id: "22", name: "Beatriz Lima" },
        { id: "23", name: "Gustavo Costa" },
        { id: "24", name: "Isabella Silva" },
        { id: "25", name: "Leonardo Oliveira" },
        { id: "26", name: "Camila Ferreira" }
      ],
      status: "active" as const,
      category: "Blockchain"
    },
    {
      id: "4",
      title: "EduLearn Platform",
      description: "Comprehensive online learning platform with interactive courses, real-time collaboration, and AI-powered personalized learning paths.",
      progress: 85,
      dueDate: "2024-01-30",
      members: [
        { id: "27", name: "Felipe Santos" },
        { id: "28", name: "Gabriela Lima" },
        { id: "29", name: "Hugo Costa" },
        { id: "30", name: "Julia Silva" },
        { id: "31", name: "Kevin Oliveira" },
        { id: "32", name: "Larissa Ferreira" },
        { id: "33", name: "Marcos Santos" },
        { id: "34", name: "Natalia Lima" },
        { id: "35", name: "Otavio Costa" },
        { id: "36", name: "Paula Silva" },
        { id: "37", name: "Rafael Oliveira" },
        { id: "38", name: "Samara Ferreira" },
        { id: "39", name: "Thiago Santos" },
        { id: "40", name: "Vanessa Lima" },
        { id: "41", name: "Wagner Costa" }
      ],
      status: "completed" as const,
      category: "EdTech"
    },
    {
      id: "5",
      title: "GreenCity IoT",
      description: "Smart city solution using IoT sensors to monitor air quality, traffic, and energy consumption for sustainable urban development.",
      progress: 55,
      dueDate: "2024-05-20",
      members: [
        { id: "42", name: "Alice Santos" },
        { id: "43", name: "Bruno Lima" },
        { id: "44", name: "Carolina Costa" },
        { id: "45", name: "Diego Silva" },
        { id: "46", name: "Elena Oliveira" },
        { id: "47", name: "Fabio Ferreira" },
        { id: "48", name: "Giovana Santos" },
        { id: "49", name: "Henrique Lima" },
        { id: "50", name: "Ingrid Costa" },
        { id: "51", name: "João Pedro Silva" }
      ],
      status: "active" as const,
      category: "IoT"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  const statuses = ['all', ...Array.from(new Set(projects.map(p => p.status)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <GlassHeader />
      
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      Descobrir Projetos
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                      Encontre projetos incríveis para colaborar e desenvolver suas habilidades
                    </p>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-500 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{projects.length}</p>
                          <p className="text-sm text-blue-600 dark:text-blue-400">Projetos Ativos</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-500 rounded-lg">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-700 dark:text-green-300">156</p>
                          <p className="text-sm text-green-600 dark:text-green-400">Desenvolvedores</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-500 rounded-lg">
                          <Rocket className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">12</p>
                          <p className="text-sm text-purple-600 dark:text-purple-400">Startups Fundadas</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/create-startup">
                  <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 hover:from-orange-600 hover:via-red-600 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl px-8 py-4 text-lg font-semibold">
                    <Plus className="h-5 w-5 mr-3" />
                    Criar Minha Ideia
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 rounded-2xl px-8 py-4 text-lg font-medium hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300">
                  Meus Projetos
                </Button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-3xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar projetos incríveis..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 items-center">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48 rounded-2xl border-gray-200 dark:border-gray-700">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'Todas Categorias' : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-48 rounded-2xl border-gray-200 dark:border-gray-700">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      {statuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status === 'all' ? 'Todos Status' : status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex bg-gray-100 dark:bg-gray-700 rounded-2xl p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-xl"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-xl"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-6">
                <Search className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Nenhum projeto encontrado
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Tente ajustar os filtros ou termos de busca
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
