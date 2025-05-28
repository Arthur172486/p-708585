
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Grid, List, Plus } from "lucide-react";
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
      id: 1,
      title: "EcoTrack VR",
      description: "Virtual reality company which offers unique approach to be the future of environmental monitoring and sustainability education through immersive experiences.",
      category: "VR/AR",
      status: "Recruiting",
      members: 8,
      needed: ["Frontend Developer", "UX Designer", "3D Artist"],
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      tags: ["React", "Three.js", "WebXR", "Sustainability"]
    },
    {
      id: 2,
      title: "HealthAI Assistant",
      description: "AI-powered health monitoring system that provides personalized recommendations and early disease detection through machine learning algorithms.",
      category: "IA/ML",
      status: "Active",
      members: 12,
      needed: ["ML Engineer", "Data Scientist"],
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      tags: ["Python", "TensorFlow", "Healthcare", "AI"]
    },
    {
      id: 3,
      title: "CryptoWallet Pro",
      description: "Next-generation cryptocurrency wallet with advanced security features, DeFi integration, and multi-chain support for seamless transactions.",
      category: "Blockchain",
      status: "Funding",
      members: 6,
      needed: ["Blockchain Developer", "Security Expert", "UI Designer"],
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      tags: ["Solidity", "Web3", "DeFi", "Security"]
    },
    {
      id: 4,
      title: "EduLearn Platform",
      description: "Comprehensive online learning platform with interactive courses, real-time collaboration, and AI-powered personalized learning paths.",
      category: "EdTech",
      status: "Recruiting",
      members: 15,
      needed: ["Full Stack Developer", "DevOps Engineer"],
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      tags: ["Node.js", "React", "PostgreSQL", "Education"]
    },
    {
      id: 5,
      title: "GreenCity IoT",
      description: "Smart city solution using IoT sensors to monitor air quality, traffic, and energy consumption for sustainable urban development.",
      category: "IoT",
      status: "Active",
      members: 10,
      needed: ["IoT Developer", "Mobile Developer"],
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GlassHeader />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Descobrir Projetos
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Encontre projetos incríveis para colaborar e desenvolver suas habilidades
                </p>
              </div>
              
              <div className="flex gap-3">
                <Link to="/create-startup">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Minha Ideia
                  </Button>
                </Link>
                <Button variant="outline">
                  Meus Projetos
                </Button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-white/20 dark:border-gray-700/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar projetos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex gap-2 items-center">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'Todas' : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status === 'all' ? 'Todos' : status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-lg bg-gray-100 dark:bg-gray-700">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
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
