"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Download, Eye, PlusCircle, Send, Users } from "lucide-react";
import Link from "next/link";

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
    icon: Eye,
    change: "+5% from last month",
  },
];

const recentActivity = [
  {
    action: "New Submission",
    exam: "Data Structures Final",
    time: "5 minutes ago",
  },
  {
    action: "Exam Published",
    exam: "Python Basics Quiz",
    time: "2 hours ago",
  },
  {
    action: "Results Released",
    exam: "JavaScript Assessment",
    time: "1 day ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#3C3C3C]">Dashboard</h1>
          <p className="text-[#3C3C3C]/70">Welcome back! Here's what's happening.</p>
        </div>
        <Link href="/dashboard/exams/create">
          <Button className="bg-[#F09A63] hover:bg-[#F09A63]/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Exam
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
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

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#3C3C3C]">{activity.action}</p>
                  <p className="text-sm text-[#3C3C3C]/70">{activity.exam}</p>
                </div>
                <p className="text-sm text-[#3C3C3C]/70">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-[#F09A63] hover:bg-[#F09A63]/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create New Exam
            </Button>
            <Button className="w-full" variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              View Latest Results
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#3C3C3C]">Algorithm Final</p>
                  <p className="text-sm text-[#3C3C3C]/70">Ends in 2 days</p>
                </div>
                <Clock className="h-4 w-4 text-[#F09A63]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}