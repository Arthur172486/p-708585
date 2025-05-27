
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, MoreHorizontal } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "EcoTrack - Sustainability App",
    description: "A mobile app to track carbon footprint and suggest eco-friendly alternatives",
    progress: 75,
    teamSize: 4,
    dueDate: "Dec 15, 2024",
    status: "In Progress",
    color: "border-l-orange-500",
  },
  {
    id: 2,
    name: "AI Learning Platform",
    description: "Educational platform using AI to personalize learning experiences",
    progress: 45,
    teamSize: 6,
    dueDate: "Jan 20, 2025",
    status: "Development",
    color: "border-l-gray-700",
  },
  {
    id: 3,
    name: "FinTech Wallet",
    description: "Digital wallet with crypto integration and smart budgeting features",
    progress: 90,
    teamSize: 3,
    dueDate: "Nov 30, 2024",
    status: "Testing",
    color: "border-l-orange-500",
  },
];

const ProjectsOverview = () => {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold text-gray-900">My Projects</CardTitle>
        <Button variant="outline" size="sm" className="border-gray-200">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-4 border-l-4 ${project.color} bg-gray-50 rounded-r-lg hover:bg-gray-100 transition-colors`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-medium text-gray-700">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{project.teamSize} members</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.dueDate}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'In Progress' ? 'bg-orange-100 text-orange-700' :
                      project.status === 'Development' ? 'bg-gray-100 text-gray-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectsOverview;
