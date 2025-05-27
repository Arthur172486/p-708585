
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const activities = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "completed task",
    project: "EcoTrack App",
    time: "2 hours ago",
    avatar: "SC",
    color: "bg-solvearn-purple-500",
  },
  {
    id: 2,
    user: "Mike Johnson",
    action: "joined team",
    project: "AI Learning Platform",
    time: "4 hours ago",
    avatar: "MJ",
    color: "bg-blue-500",
  },
  {
    id: 3,
    user: "Emma Davis",
    action: "submitted design",
    project: "FinTech Wallet",
    time: "6 hours ago",
    avatar: "ED",
    color: "bg-solvearn-orange-500",
  },
  {
    id: 4,
    user: "Alex Rodriguez",
    action: "started discussion",
    project: "EcoTrack App",
    time: "8 hours ago",
    avatar: "AR",
    color: "bg-green-500",
  },
  {
    id: 5,
    user: "Lisa Wang",
    action: "uploaded prototype",
    project: "AI Learning Platform",
    time: "1 day ago",
    avatar: "LW",
    color: "bg-pink-500",
  },
];

const TeamActivity = () => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Team Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id}>
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-medium">{activity.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action} in{" "}
                    <span className="font-medium text-solvearn-purple-600">{activity.project}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
              {index < activities.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamActivity;
