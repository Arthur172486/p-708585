
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
    id: 1,
    title: "EcoTrack VR",
    description: "Virtual reality company which offers unique approach to be the future of environmental and helping the forest in the real world.",
    category: "Technology",
    status: "Recruiting",
    members: 3,
    needed: ["Frontend Developer", "UX Designer", "Marketing"],
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    tags: ["VR", "Environment", "Startup"]
  },
  {
    id: 2,
    title: "Extreme Traveling",
    description: "Business and Travel Europe we would ask you for adventure around different extreme activities.",
    category: "Travel",
    status: "Recruiting",
    members: 2,
    needed: ["Backend Developer", "Content Creator", "Business Dev"],
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    tags: ["Travel", "Adventure", "Business"]
  },
  {
    id: 3,
    title: "Organic Marketing Agency",
    description: "Growing social business owners, We need 2-5 accounts from different niche areas.",
    category: "Marketing",
    status: "Recruiting",
    members: 4,
    needed: ["Social Media Manager", "Graphic Designer", "Sales"],
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    tags: ["Marketing", "Social Media", "Agency"]
  },
  {
    id: 4,
    title: "Project Unknown Business",
    description: "Innovative business solution to revolutionize the market with cutting-edge technology.",
    category: "Business",
    status: "Recruiting",
    members: 1,
    needed: ["CTO", "Product Manager", "Investor"],
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    tags: ["Business", "Innovation", "Tech"]
  },
  {
    id: 5,
    title: "ViralGenie.co",
    description: "AI-powered content creation platform for viral social media campaigns.",
    category: "AI/Tech",
    status: "Funding",
    members: 6,
    needed: ["AI Engineer", "Growth Hacker", "Investor"],
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    tags: ["AI", "Content", "Social Media"]
  },
  {
    id: 6,
    title: "Let's build & monetize Discord community",
    description: "Building engaged Discord communities and monetization strategies.",
    category: "Community",
    status: "Recruiting",
    members: 2,
    needed: ["Community Manager", "Discord Bot Dev", "Monetization Expert"],
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Descubra Projetos
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Extraordinários
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Encontre startups inovadoras, conecte-se com empreendedores visionários e faça parte do futuro
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-orange-400" />
                  <span className="text-2xl font-bold text-white">150+</span>
                </div>
                <p className="text-slate-400 text-sm">Projetos Ativos</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-2xl font-bold text-white">2.5k+</span>
                </div>
                <p className="text-slate-400 text-sm">Membros</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
                <p className="text-slate-400 text-sm">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Search and Filters */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Explore Oportunidades</h2>
                <p className="text-slate-400">Encontre o projeto perfeito para suas habilidades</p>
              </div>
              
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
                <Plus className="h-5 w-5 mr-2" />
                Criar Projeto
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar projetos, tecnologias, áreas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white rounded-xl">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 rounded-xl">
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
                <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white rounded-xl">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 rounded-xl">
                  <SelectItem value="all">Todos Status</SelectItem>
                  <SelectItem value="Recruiting">Recrutando</SelectItem>
                  <SelectItem value="Funding">Financiamento</SelectItem>
                  <SelectItem value="Active">Ativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between">
            <p className="text-slate-400">
              Mostrando <span className="text-white font-semibold">{filteredProjects.length}</span> projetos
            </p>
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Filter className="h-4 w-4 mr-2" />
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
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              Carregar Mais Projetos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
