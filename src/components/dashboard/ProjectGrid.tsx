
import React from "react";
import ProjectCard from "./ProjectCard";

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
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 text-sm">Join amazing teams and build the future together</p>
        </div>
        
        <div className="flex space-x-4">
          <select className="bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Business</option>
            <option>Marketing</option>
            <option>AI/Tech</option>
            <option>Community</option>
          </select>
          
          <select className="bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500">
            <option>All Status</option>
            <option>Recruiting</option>
            <option>Funding</option>
            <option>Active</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
