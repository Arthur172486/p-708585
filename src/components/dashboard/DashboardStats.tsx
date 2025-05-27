
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, FolderKanban, Trophy } from "lucide-react";

const stats = [
  {
    title: "Active Projects",
    value: "3",
    change: "+12%",
    changeType: "positive",
    icon: FolderKanban,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Team Members",
    value: "8",
    change: "+25%",
    changeType: "positive",
    icon: Users,
    color: "text-gray-600",
    bgColor: "bg-gray-100",
  },
  {
    title: "Hackathon Wins",
    value: "2",
    change: "0%",
    changeType: "neutral",
    icon: Trophy,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Total Funding",
    value: "$25K",
    change: "+150%",
    changeType: "positive",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
