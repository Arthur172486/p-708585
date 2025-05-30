
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Grid, List, Plus, TrendingUp, Users, Rocket, Star, Award, Target } from "lucide-react";
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
      category: "VR/AR",
      status: "active" as const,
      progress: 75,
      dueDate: "2024-02-15",
      members: [
        { id: "1", name: "João Silva", avatar: "" },
        { id: "2", name: "Maria Santos", avatar: "" },
        { id: "3", name: "Pedro Costa", avatar: "" },
        { id: "4", name: "Ana Lima", avatar: "" },
        { id: "5", name: "Carlos Mendes", avatar: "" },
        { id: "6", name: "Sofia Rodrigues", avatar: "" },
        { id: "7", name: "Miguel Ferreira", avatar: "" },
        { id: "8", name: "Laura Oliveira", avatar: "" }
      ],
      tags: ["React", "Three.js", "WebXR", "Sustainability"]
    },
    {
      id: "2",
      title: "HealthAI Assistant",
      description: "AI-powered health monitoring system that provides personalized recommendations and early disease detection through machine learning algorithms.",
      category: "IA/ML",
      status: "active" as const,
      progress: 85,
      dueDate: "2024-02-28",
      members: [
        { id: "9", name: "Beatriz Alves", avatar: "" },
        { id: "10", name: "Francisco Martins", avatar: "" },
        { id: "11", name: "Catarina Dias", avatar: "" },
        { id: "12", name: "Bruno Pereira", avatar: "" },
        { id: "13", name: "Inês Carvalho", avatar: "" },
        { id: "14", name: "Rui Gomes", avatar: "" },
        { id: "15", name: "Daniel Silva", avatar: "" },
        { id: "16", name: "Marta Ribeiro", avatar: "" },
        { id: "17", name: "André Costa", avatar: "" },
        { id: "18", name: "Carolina Moreira", avatar: "" },
        { id: "19", name: "Diogo Santos", avatar: "" },
        { id: "20", name: "Patrícia Lopes", avatar: "" }
      ],
      tags: ["Python", "TensorFlow", "Healthcare", "AI"]
    },
    {
      id: "3",
      title: "CryptoWallet Pro",
      description: "Next-generation cryptocurrency wallet with advanced security features, DeFi integration, and multi-chain support for seamless transactions.",
      category: "Blockchain",
      status: "completed" as const,
      progress: 100,
      dueDate: "2024-01-30",
      members: [
        { id: "21", name: "Ricardo Nunes", avatar: "" },
        { id: "22", name: "Vera Silva", avatar: "" },
        { id: "23", name: "Hugo Fernandes", avatar: "" },
        { id: "24", name: "Isabel Rocha", avatar: "" },
        { id: "25", name: "Paulo Martins", avatar: "" },
        { id: "26", name: "Cristina Almeida", avatar: "" }
      ],
      tags: ["Solidity", "Web3", "DeFi", "Security"]
    },
    {
      id: "4",
      title: "EduLearn Platform",
      description: "Comprehensive online learning platform with interactive courses, real-time collaboration, and AI-powered personalized learning paths.",
      category: "EdTech",
      status: "active" as const,
      progress: 60,
      dueDate: "2024-03-15",
      members: [
        { id: "27", name: "Tiago Sousa", avatar: "" },
        { id: "28", name: "Mariana Pinto", avatar: "" },
        { id: "29", name: "Nuno Carvalho", avatar: "" },
        { id: "30", name: "Joana Ferreira", avatar: "" },
        { id: "31", name: "Sérgio Oliveira", avatar: "" },
        { id: "32", name: "Raquel Mendes", avatar: "" },
        { id: "33", name: "Gonçalo Lima", avatar: "" },
        { id: "34", name: "Susana Rodrigues", avatar: "" },
        { id: "35", name: "Filipe Castro", avatar: "" },
        { id: "36", name: "Cláudia Pereira", avatar: "" },
        { id: "37", name: "Vítor Gomes", avatar: "" },
        { id: "38", name: "Helena Dias", avatar: "" },
        { id: "39", name: "Marco Silva", avatar: "" },
        { id: "40", name: "Teresa Santos", avatar: "" },
        { id: "41", name: "João Costa", avatar: "" }
      ],
      tags: ["Node.js", "React", "PostgreSQL", "Education"]
    },
    {
      id: "5",
      title: "GreenCity IoT",
      description: "Smart city solution using IoT sensors to monitor air quality, traffic, and energy consumption for sustainable urban development.",
      category: "IoT",
      status: "paused" as const,
      progress: 40,
      dueDate: "2024-04-01",
      members: [
        { id: "42", name: "Luís Moreira", avatar: "" },
        { id: "43", name: "Ana Ribeiro", avatar: "" },
        { id: "44", name: "Pedro Alves", avatar: "" },
        { id: "45", name: "Rita Fernandes", avatar: "" },
        { id: "46", name: "Miguel Santos", avatar: "" },
        { id: "47", name: "Carla Lopes", avatar: "" },
        { id: "48", name: "Bruno Costa", avatar: "" },
        { id: "49", name: "Sandra Martins", avatar: "" },
        { id: "50", name: "Alexandre Silva", avatar: "" },
        { id: "51", name: "Mónica Pereira", avatar: "" }
      ],
      tags: ["IoT", "Arduino", "React Native", "Sustainability"]
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      <GlassHeader />
      
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 p-12 shadow-2xl">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-white/20 rounded-3xl shadow-lg backdrop-blur-sm">
                        <Rocket className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                          Descobrir Projetos
                        </h1>
                        <p className="text-xl text-white/90 mt-3 max-w-2xl">
                          Encontre projetos incríveis para colaborar e desenvolver suas habilidades
                        </p>
                      </div>
                    </div>
                    
                    {/* Enhanced Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-white/20 rounded-xl">
                            <TrendingUp className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-white">{projects.length}</p>
                            <p className="text-sm text-white/80">Projetos Ativos</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-white/20 rounded-xl">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-white">256</p>
                            <p className="text-sm text-white/80">Desenvolvedores</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-white/20 rounded-xl">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-white">18</p>
                            <p className="text-sm text-white/80">Startups Fundadas</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-white/20 rounded-xl">
                            <Star className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-white">4.9</p>
                            <p className="text-sm text-white/80">Rating Médio</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <Link to="/create-startup">
                      <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl px-10 py-5 text-lg font-semibold">
                        <Plus className="h-6 w-6 mr-3" />
                        Criar Minha Ideia
                      </Button>
                    </Link>
                    <Link to="/my-projects">
                      <Button variant="outline" className="border-2 border-white/50 text-white hover:bg-white/20 rounded-2xl px-10 py-5 text-lg font-medium transition-all duration-300">
                        <Target className="h-6 w-6 mr-3" />
                        Meus Projetos
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Search and Filters */}
          <Card className="mb-12 bg-white/90 backdrop-blur-2xl border border-orange-200/50 shadow-2xl rounded-3xl">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <Input
                    placeholder="Buscar projetos incríveis, tecnologias, áreas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-14 pr-6 py-5 text-lg bg-white border-2 border-orange-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 shadow-lg"
                  />
                </div>
                
                <div className="flex flex-wrap gap-4 items-center">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-52 rounded-2xl border-2 border-orange-200 py-5 text-lg shadow-lg">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-2 border-orange-200 shadow-2xl">
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'Todas Categorias' : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-52 rounded-2xl border-2 border-orange-200 py-5 text-lg shadow-lg">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-2 border-orange-200 shadow-2xl">
                      {statuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status === 'all' ? 'Todos Status' : 
                           status === 'active' ? 'Ativo' :
                           status === 'completed' ? 'Concluído' : 'Pausado'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex bg-orange-100 rounded-2xl p-2 shadow-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className={`rounded-xl px-4 py-2 ${viewMode === 'grid' ? 'bg-orange-500 text-white shadow-lg' : 'text-orange-600 hover:bg-orange-200'}`}
                    >
                      <Grid className="h-5 w-5" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className={`rounded-xl px-4 py-2 ${viewMode === 'list' ? 'bg-orange-500 text-white shadow-lg' : 'text-orange-600 hover:bg-orange-200'}`}
                    >
                      <List className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-xl text-gray-600">
              Mostrando <span className="text-gray-900 font-bold">{filteredProjects.length}</span> projetos incríveis
            </p>
            <Button variant="outline" className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 rounded-2xl px-6 py-3 font-medium">
              <Filter className="h-5 w-5 mr-2" />
              Filtros Avançados
            </Button>
          </div>

          {/* Enhanced Projects Grid */}
          <div className={`grid gap-10 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <div className="text-gray-300 mb-8">
                <Search className="h-24 w-24 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nenhum projeto encontrado
              </h3>
              <p className="text-xl text-gray-500">
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
