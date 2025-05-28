
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white dark:text-white">Descobrir Projetos</h1>
          <p className="text-gray-400 dark:text-gray-400">Encontre projetos incríveis para participar</p>
        </div>
        
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Criar Projeto
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48 bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
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
          <SelectTrigger className="w-full sm:w-48 bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            <SelectItem value="all">Todos Status</SelectItem>
            <SelectItem value="Recruiting">Recrutando</SelectItem>
            <SelectItem value="Funding">Financiamento</SelectItem>
            <SelectItem value="Active">Ativo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
