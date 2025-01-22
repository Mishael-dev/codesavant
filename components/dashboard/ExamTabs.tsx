"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Edit2, Eye, Trash2 } from "lucide-react";

export function ExamTabs() {
  return (
    <Tabs defaultValue="created" className="space-y-4">
      <TabsList>
        <TabsTrigger value="created">My Exams</TabsTrigger>
        <TabsTrigger value="available">Available Exams</TabsTrigger>
        <TabsTrigger value="submissions">My Submissions</TabsTrigger>
      </TabsList>

      <TabsContent value="created" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Data Structures Final</CardTitle>
            <CardDescription>Published • 24 submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-[#3C3C3C]/70">Average Score: 78%</p>
                <p className="text-sm text-[#3C3C3C]/70">Time Limit: 2 hours</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="available" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Algorithms Mid-term</CardTitle>
            <CardDescription>By Prof. Smith • Advanced</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#3C3C3C]/70" />
                <span className="text-sm text-[#3C3C3C]/70">3 hours</span>
              </div>
              <Button className="bg-[#F09A63] hover:bg-[#F09A63]/90">
                Start Exam
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="submissions" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Python Basics Quiz</CardTitle>
            <CardDescription>Submitted on March 15, 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-[#3C3C3C]/70">Score: 92%</p>
                <p className="text-sm text-[#3C3C3C]/70">Status: Graded</p>
              </div>
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                View Results
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}