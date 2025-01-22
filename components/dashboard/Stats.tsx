"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, CheckCircle, Users } from "lucide-react";

const stats = [
  {
    name: "Total Exams Created",
    value: "12",
    icon: BookOpen,
    change: "+2 this month",
  },
  {
    name: "Total Submissions",
    value: "245",
    icon: Users,
    change: "+18 this week",
  },
  {
    name: "Average Score",
    value: "85%",
    icon: CheckCircle,
    change: "+5% from last month",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.name}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#3C3C3C]/70">
              {stat.name}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-[#F09A63]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#3C3C3C]">{stat.value}</div>
            <p className="text-xs text-[#3C3C3C]/70">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}