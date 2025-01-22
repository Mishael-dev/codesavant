"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Grip, Pencil } from "lucide-react";

interface QuestionCardProps {
  question: {
    id: number;
    title: string;
    type: string;
    points: number;
    description: string;
    file_extension: string;
  };
  index: number;
  onEdit: (question: any) => void;
}

export function QuestionCard({ question, index, onEdit }: QuestionCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <Grip className="h-4 w-4 text-[#3C3C3C]/30" />
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#F09A63]">
              Question {index + 1}
            </span>
            <CardTitle className="text-base font-medium">
              {question.title}
            </CardTitle>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onEdit(question)}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex gap-4 text-sm text-[#3C3C3C]/70">
            <span>Type: {question.type}</span>
            <span>Points: {question.points}</span>
            <span>File: {question.file_extension}</span>
          </div>
          <p className="text-sm text-[#3C3C3C]/70 line-clamp-2">
            {question.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}