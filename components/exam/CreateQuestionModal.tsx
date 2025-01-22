"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Question {
  id: number | null;
  title: string;
  type: string;
  points: number;
  description: string;
  file_extension: string;
}

interface CreateQuestionModalProps {
  question: Question;
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: React.FormEvent) => void;
  onQuestionChange: (updatedQuestion: Question) => void;
}

export function CreateQuestionModal({
  question,
  isOpen,
  onClose,
  onSave,
  onQuestionChange,
}: CreateQuestionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Question</DialogTitle>
          <DialogDescription>
            Create a new question for your exam.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={onSave} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Question Title</Label>
                <Input
                  id="title"
                  value={question.title}
                  onChange={(e) => onQuestionChange({
                    ...question,
                    title: e.target.value
                  })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="points">Points</Label>
                <Input
                  id="points"
                  type="number"
                  min="0"
                  value={question.points}
                  onChange={(e) => onQuestionChange({
                    ...question,
                    points: parseInt(e.target.value)
                  })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Question Type</Label>
                <Select
                  value={question.type}
                  onValueChange={(value) => onQuestionChange({
                    ...question,
                    type: value
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="code">Code</SelectItem>
                    <SelectItem value="mcq">Multiple Choice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="file_extension">File Extension</Label>
                <Select
                  value={question.file_extension}
                  onValueChange={(value) => onQuestionChange({
                    ...question,
                    file_extension: value
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select file extension" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value=".py">Python (.py)</SelectItem>
                    <SelectItem value=".js">JavaScript (.js)</SelectItem>
                    <SelectItem value=".java">Java (.java)</SelectItem>
                    <SelectItem value=".cpp">C++ (.cpp)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Question Description</Label>
              <Textarea
                id="description"
                rows={4}
                value={question.description}
                onChange={(e) => onQuestionChange({
                  ...question,
                  description: e.target.value
                })}
                required
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-[#F09A63] hover:bg-[#F09A63]/90"
            >
              Add Question
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}