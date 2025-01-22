"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { QuestionCard } from "@/components/exam/QuestionCard";
import { CreateQuestionModal } from "@/components/exam/CreateQuestionModal";
import { EditQuestionModal } from "@/components/exam/EditQuestionModal";
import { ExamInfoCard } from "@/components/exam/ExamInfoCard";
import { useState } from "react";

// Mock data for the exam information
const initialExamInfo = {
  title: "Python Programming Fundamentals",
  description: "A comprehensive exam covering Python basics including data structures, functions, and basic algorithms.",
  duration: "120",
  difficulty: "intermediate",
  passingScore: 70
};

// Mock data for the questions
const initialQuestions = [
  {
    id: 1,
    title: "Python List Operations",
    type: "code",
    points: 10,
    description: "Write a function that reverses a list without using the built-in reverse method.",
    file_extension: ".py"
  },
  {
    id: 2,
    title: "Dictionary Manipulation",
    type: "code",
    points: 15,
    description: "Create a function that merges two dictionaries and handles duplicate keys by summing their values.",
    file_extension: ".py"
  },
];

const emptyQuestion = {
  id: null,
  title: "",
  type: "code",
  points: 0,
  description: "",
  file_extension: ".py"
};

export default function ExamEditPage() {
  const [examInfo, setExamInfo] = useState(initialExamInfo);
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedQuestion, setSelectedQuestion] = useState(emptyQuestion); // Initialize with empty question
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleAddQuestion = () => {
    const newQuestion = {
      ...emptyQuestion,
      id: Math.max(...questions.map(q => q.id), 0) + 1
    };
    setSelectedQuestion(newQuestion);
    setIsCreateModalOpen(true);
  };

  const handleEditQuestion = (question) => {
    setSelectedQuestion(question);
    setIsEditModalOpen(true);
  };

  const handleSaveNewQuestion = (event) => {
    event.preventDefault();
    setQuestions([...questions, selectedQuestion]);
    setIsCreateModalOpen(false);
    setSelectedQuestion(emptyQuestion); // Reset to empty question after saving
  };

  const handleSaveEditedQuestion = (event) => {
    event.preventDefault();
    setQuestions(questions.map(q => 
      q.id === selectedQuestion.id ? selectedQuestion : q
    ));
    setIsEditModalOpen(false);
  };

  const handleQuestionChange = (updatedQuestion) => {
    setSelectedQuestion(updatedQuestion);
  };

  const handleExamInfoSave = (updatedInfo) => {
    setExamInfo(updatedInfo);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/exams">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#3C3C3C]">Edit Python Exam</h1>
            <p className="text-[#3C3C3C]/70">Manage your exam questions</p>
          </div>
        </div>
        <Button 
          onClick={handleAddQuestion}
          className="bg-[#F09A63] hover:bg-[#F09A63]/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Question
        </Button>
      </div>

      {/* Exam Information Card */}
      <ExamInfoCard examInfo={examInfo} onSave={handleExamInfoSave} />

      <div className="space-y-4">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            onEdit={handleEditQuestion}
          />
        ))}
      </div>

      {/* Create Question Modal */}
      <CreateQuestionModal
        question={selectedQuestion}
        isOpen={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
          setSelectedQuestion(emptyQuestion); // Reset to empty question when closing
        }}
        onSave={handleSaveNewQuestion}
        onQuestionChange={handleQuestionChange}
      />

      {/* Edit Question Modal */}
      {selectedQuestion && (
        <EditQuestionModal
          question={selectedQuestion}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveEditedQuestion}
          onQuestionChange={handleQuestionChange}
          questionNumber={questions.findIndex(q => q.id === selectedQuestion.id) + 1}
        />
      )}
    </div>
  );
}