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
import { Switch } from "@/components/ui/switch";

interface ExamInfo {
  title: string;
  description: string;
  duration: string;
  passingScore: number;
  totalPoints: number;
  numberOfQuestions: number;
  isActive: boolean;
  category: string;
}

interface EditExamModalProps {
  examInfo: ExamInfo;
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: React.FormEvent) => void;
  onExamInfoChange: (updatedInfo: ExamInfo) => void;
}

export function EditExamModal({
  examInfo,
  isOpen,
  onClose,
  onSave,
  onExamInfoChange,
}: EditExamModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Exam Details</DialogTitle>
          <DialogDescription>
            Make changes to your exam settings. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={onSave} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Exam Title</Label>
              <Input
                id="title"
                value={examInfo.title}
                onChange={(e) => onExamInfoChange({
                  ...examInfo,
                  title: e.target.value
                })}
                placeholder="Enter exam title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={examInfo.description}
                onChange={(e) => onExamInfoChange({
                  ...examInfo,
                  description: e.target.value
                })}
                placeholder="Enter exam description"
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  min="1"
                  value={examInfo.duration}
                  onChange={(e) => onExamInfoChange({
                    ...examInfo,
                    duration: e.target.value
                  })}
                  placeholder="Enter duration in minutes"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category/Topic</Label>
                <Select
                  value={examInfo.category}
                  onValueChange={(value) => onExamInfoChange({
                    ...examInfo,
                    category: value
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="data-structures">Data Structures</SelectItem>
                    <SelectItem value="algorithms">Algorithms</SelectItem>
                    <SelectItem value="functions">Functions</SelectItem>
                    <SelectItem value="oop">Object-Oriented Programming</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="passingScore">Passing Score (%)</Label>
                <Input
                  id="passingScore"
                  type="number"
                  min="0"
                  max="100"
                  value={examInfo.passingScore}
                  onChange={(e) => onExamInfoChange({
                    ...examInfo,
                    passingScore: parseInt(e.target.value)
                  })}
                  placeholder="Enter passing score percentage"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalPoints">Total Points</Label>
                <Input
                  id="totalPoints"
                  type="number"
                  min="0"
                  value={examInfo.totalPoints}
                  onChange={(e) => onExamInfoChange({
                    ...examInfo,
                    totalPoints: parseInt(e.target.value)
                  })}
                  placeholder="Total points"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="numberOfQuestions">Number of Questions</Label>
                <Input
                  id="numberOfQuestions"
                  type="number"
                  min="1"
                  value={examInfo.numberOfQuestions}
                  onChange={(e) => onExamInfoChange({
                    ...examInfo,
                    numberOfQuestions: parseInt(e.target.value)
                  })}
                  placeholder="Number of questions"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="isActive" className="block mb-2">Exam Status</Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isActive"
                    checked={examInfo.isActive}
                    onCheckedChange={(checked) => onExamInfoChange({
                      ...examInfo,
                      isActive: checked
                    })}
                  />
                  <Label htmlFor="isActive" className="text-sm text-muted-foreground">
                    {examInfo.isActive ? "Active" : "Inactive"}
                  </Label>
                </div>
              </div>
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
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}