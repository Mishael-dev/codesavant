"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Edit2, Save, BookOpen, Target, Hash, CheckCircle2 } from "lucide-react";
import { useState } from "react";

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

interface ExamInfoCardProps {
  examInfo: ExamInfo;
  onSave: (updatedInfo: ExamInfo) => void;
}

export function ExamInfoCard({ examInfo, onSave }: ExamInfoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(examInfo);

  const handleSave = () => {
    onSave(editedInfo);
    setIsEditing(false);
  };

  const getStatusColor = (isActive: boolean) => {
    return isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="border-2 border-gray-100 hover:border-[#F09A63]/20 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#F09A63]" />
          Exam Information
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="hover:text-[#F09A63]"
        >
          {isEditing ? (
            <Save className="h-4 w-4 text-[#F09A63]" />
          ) : (
            <Edit2 className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Exam Title</Label>
              <Input
                id="title"
                value={editedInfo.title}
                onChange={(e) => setEditedInfo({ ...editedInfo, title: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={editedInfo.description}
                onChange={(e) => setEditedInfo({ ...editedInfo, description: e.target.value })}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  min="1"
                  value={editedInfo.duration}
                  onChange={(e) => setEditedInfo({ ...editedInfo, duration: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category/Topic</Label>
                <Select
                  value={editedInfo.category}
                  onValueChange={(value) => setEditedInfo({ ...editedInfo, category: value })}
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
                  value={editedInfo.passingScore}
                  onChange={(e) => setEditedInfo({ ...editedInfo, passingScore: parseInt(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalPoints">Total Points</Label>
                <Input
                  id="totalPoints"
                  type="number"
                  min="0"
                  value={editedInfo.totalPoints}
                  onChange={(e) => setEditedInfo({ ...editedInfo, totalPoints: parseInt(e.target.value) })}
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
                  value={editedInfo.numberOfQuestions}
                  onChange={(e) => setEditedInfo({ ...editedInfo, numberOfQuestions: parseInt(e.target.value) })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="isActive" className="block mb-2">Exam Status</Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isActive"
                    checked={editedInfo.isActive}
                    onCheckedChange={(checked) => setEditedInfo({ ...editedInfo, isActive: checked })}
                  />
                  <Label htmlFor="isActive" className="text-sm text-muted-foreground">
                    {editedInfo.isActive ? "Active" : "Inactive"}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#3C3C3C] mb-2">{editedInfo.title}</h3>
              <p className="text-[#3C3C3C]/70">{editedInfo.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-[#3C3C3C]/70">
                  <Clock className="h-4 w-4" />
                  Duration
                </div>
                <p className="font-medium">{editedInfo.duration} minutes</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-[#3C3C3C]/70">
                  <Target className="h-4 w-4" />
                  Passing Score
                </div>
                <p className="font-medium">{editedInfo.passingScore}%</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-[#3C3C3C]/70">
                  <Hash className="h-4 w-4" />
                  Questions
                </div>
                <p className="font-medium">{editedInfo.numberOfQuestions}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-[#3C3C3C]/70">
                  <CheckCircle2 className="h-4 w-4" />
                  Total Points
                </div>
                <p className="font-medium">{editedInfo.totalPoints}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#3C3C3C]/70">Category:</span>
                <span className="text-sm font-medium capitalize">{editedInfo.category.replace('-', ' ')}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(editedInfo.isActive)}`}>
                {editedInfo.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}