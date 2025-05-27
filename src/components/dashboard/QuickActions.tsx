
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, Calendar, MessageSquare, Trophy, Search } from "lucide-react";

const quickActions = [
  {
    icon: Plus,
    title: "Create New Project",
    description: "Start a new project and find team members",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    icon: Search,
    title: "Join a Team",
    description: "Browse and apply to existing projects",
    color: "bg-gray-700 hover:bg-gray-800",
  },
  {
    icon: Calendar,
    title: "Join Hackathon",
    description: "Participate in this month's competition",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    icon: Users,
    title: "Find Mentors",
    description: "Connect with experienced entrepreneurs",
    color: "bg-gray-700 hover:bg-gray-800",
  },
  {
    icon: MessageSquare,
    title: "Team Chat",
    description: "Message your team members",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    icon: Trophy,
    title: "View Leaderboard",
    description: "See top performing teams",
    color: "bg-gray-700 hover:bg-gray-800",
  },
];

const QuickActions = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start space-y-2 hover:shadow-md transition-all border-gray-200"
            >
              <div className={`p-2 rounded-lg ${action.color} text-white`}>
                <action.icon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
