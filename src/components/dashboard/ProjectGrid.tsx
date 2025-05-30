
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, TrendingUp, Users, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projects = [
  {
    id: "1",
    title: "EcoTrack VR",
    description: "Virtual reality company which offers unique approach to be the future of environmental and helping the forest in the real world.",
    category: "Technology",
    status: "active" as const,
    progress: 75,
    dueDate: "2024-02-15",
    members: [
      { id: "1", name: "João Silva", avatar: "" },
      { id: "2", name: "Maria Santos", avatar: "" },
      { id: "3", name: "Pedro Costa", avatar: "" }
    ],
    tags: ["VR", "Environment", "Startup"]
  },
  {
    id: "2",
    title: "Extreme Traveling",
    description: "Business and Travel Europe we would ask you for adventure around different extreme activities.",
    category: "Travel",
    status: "active" as const,
    progress: 60,
    dueDate: "2024-03-01",
    members: [
      { id: "4", name: "Ana Lima", avatar: "" },
      { id: "5", name: "Carlos Mendes", avatar: "" }
    ],
    tags: ["Travel", "Adventure", "Business"]
  },
  {
    id: "3",
    title: "Organic Marketing Agency",
    description: "Growing social business owners, We need 2-5 accounts from different niche areas.",
    category: "Marketing",
    status: "completed" as const,
    progress: 100,
    dueDate: "2024-01-30",
    members: [
      { id: "6", name: "Sofia Rodrigues", avatar: "" },
      { id: "7", name: "Miguel Ferreira", avatar: "" },
      { id: "8", name: "Laura Oliveira", avatar: "" },
      { id: "9", name: "Tiago Sousa", avatar: "" }
    ],
    tags: ["Marketing", "Social Media", "Agency"]
  },
  {
    id: "4",
    title: "Project Unknown Business",
    description: "Innovative business solution to revolutionize the market with cutting-edge technology.",
    category: "Business",
    status: "paused" as const,
    progress: 30,
    dueDate: "2024-04-15",
    members: [
      { id: "10", name: "Ricardo Nunes", avatar: "" }
    ],
    tags: ["Business", "Innovation", "Tech"]
  },
  {
    id: "5",
    title: "ViralGenie.co",
    description: "AI-powered content creation platform for viral social media campaigns.",
    category: "AI/Tech",
    status: "active" as const,
    progress: 85,
    dueDate: "2024-02-28",
    members: [
      { id: "11", name: "Beatriz Alves", avatar: "" },
      { id: "12", name: "Francisco Martins", avatar: "" },
      { id: "13", name: "Catarina Dias", avatar: "" },
      { id: "14", name: "Bruno Pereira", avatar: "" },
      { id: "15", name: "Inês Carvalho", avatar: "" },
      { id: "16", name: "Rui Gomes", avatar: "" }
    ],
    tags: ["AI", "Content", "Social Media"]
  },
  {
    id: "6",
    title: "Let's build & monetize Discord community",
    description: "Building engaged Discord communities and monetization strategies.",
    category: "Community",
    status: "active" as const,
    progress: 40,
    dueDate: "2024-03-15",
    members: [
      { id: "17", name: "Daniel Silva", avatar: "" },
      { id: "18", name: "Marta Ribeiro", avatar: "" }
    ],
    tags: ["Discord", "Community", "Monetization"]
  }
];

const ProjectGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Descubra Projetos
              <span className="block text-orange-100">
                Extraordinários
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Encontre startups inovadoras, conecte-se com empreendedores visionários e faça parte do futuro
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center space-x-12 mt-16">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <TrendingUp className="h-6 w-6 text-orange-200" />
                  <span className="text-3xl font-bold text-white">150+</span>
                </div>
                <p className="text-orange-100 text-sm font-medium">Projetos Ativos</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Users className="h-6 w-6 text-orange-200" />
                  <span className="text-3xl font-bold text-white">2.5k+</span>
                </div>
                <p className="text-orange-100 text-sm font-medium">Membros</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Star className="h-6 w-6 text-orange-200" />
                  <span className="text-3xl font-bold text-white">98%</span>
                </div>
                <p className="text-orange-100 text-sm font-medium">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Search and Filters */}
          <div className="bg-white/80 backdrop-blur-xl border border-orange-200/50 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Explore Oportunidades</h2>
                <p className="text-gray-600 text-lg">Encontre o projeto perfeito para suas habilidades</p>
              </div>
              
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl px-8 py-4 text-lg font-semibold">
                <Plus className="h-5 w-5 mr-3" />
                Criar Projeto
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar projetos, tecnologias, áreas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-14 pr-6 py-4 w-full bg-white border border-orange-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 shadow-lg text-lg"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white border-orange-200 text-gray-900 rounded-2xl py-4 px-6 text-lg shadow-lg">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent className="bg-white border-orange-200 rounded-2xl shadow-2xl">
                  <SelectItem value="all">Todas Categorias</SelectItem>
                  <SelectItem value="Technology">Tecnologia</SelectItem>
                  <SelectItem value="Business">Negócios</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="AI/Tech">IA/Tech</SelectItem>
                  <SelectItem value="Community">Comunidade</SelectItem>
                  <SelectItem value="Travel">Viagem</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="bg-white border-orange-200 text-gray-900 rounded-2xl py-4 px-6 text-lg shadow-lg">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-orange-200 rounded-2xl shadow-2xl">
                  <SelectItem value="all">Todos Status</SelectItem>
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="completed">Concluído</SelectItem>
                  <SelectItem value="paused">Pausado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-lg">
              Mostrando <span className="text-gray-900 font-semibold">{filteredProjects.length}</span> projetos
            </p>
            <Button variant="outline" size="lg" className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 rounded-2xl px-6 py-3 font-medium">
              <Filter className="h-5 w-5 mr-2" />
              Filtros Avançados
            </Button>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center pt-8">
            <Button variant="outline" size="lg" className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 rounded-2xl px-8 py-4 text-lg font-medium">
              Carregar Mais Projetos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
