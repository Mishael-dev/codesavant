"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Eye, Edit2, Play, Pause, BarChart } from "lucide-react";

const exams = [
  {
    id: 1,
    title: "Data Structures Final",
    status: "Active",
    submissions: 24,
    avgScore: "78%",
  },
  {
    id: 2,
    title: "Python Basics Quiz",
    status: "Draft",
    submissions: 0,
    avgScore: "-",
  },
];

export default function ExamsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#3C3C3C]">My Exams</h1>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#3C3C3C]/50" />
          <Input placeholder="Search exams..." className="pl-8" />
        </div>
      </div>

      <div className="space-y-4">
        {exams.map((exam) => (
          <Card key={exam.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{exam.title}</CardTitle>
                <span className={`px-2 py-1 rounded text-sm ${
                  exam.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                }`}>
                  {exam.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm text-[#3C3C3C]/70">
                    Submissions: {exam.submissions}
                  </p>
                  <p className="text-sm text-[#3C3C3C]/70">
                    Average Score: {exam.avgScore}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <BarChart className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className={exam.status === "Active" ? "text-red-600" : "text-green-600"}
                  >
                    {exam.status === "Active" ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}