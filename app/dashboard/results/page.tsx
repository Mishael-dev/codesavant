"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Mail } from "lucide-react";

const submissions = [
  {
    exam: "Data Structures Final",
    submissions: 24,
    avgScore: "78%",
    lastSubmission: "2024-03-15",
  },
  {
    exam: "Python Basics Quiz",
    submissions: 18,
    avgScore: "85%",
    lastSubmission: "2024-03-14",
  },
];

export default function ResultsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#3C3C3C]">Results Management</h1>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by exam" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Exams</SelectItem>
            <SelectItem value="dsa">Data Structures Final</SelectItem>
            <SelectItem value="python">Python Basics Quiz</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {submissions.map((submission, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{submission.exam}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm text-[#3C3C3C]/70">
                    Total Submissions: {submission.submissions}
                  </p>
                  <p className="text-sm text-[#3C3C3C]/70">
                    Average Score: {submission.avgScore}
                  </p>
                  <p className="text-sm text-[#3C3C3C]/70">
                    Last Submission: {submission.lastSubmission}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export Results
                  </Button>
                  <Button className="bg-[#F09A63] hover:bg-[#F09A63]/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Results
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