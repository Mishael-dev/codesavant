import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const benefits = {
  tutors: [
    "Cut grading time by up to 80%",
    "Create standardized assessments easily",
    "Track student progress with detailed analytics",
    "Customize feedback templates for common issues",
    "Access a library of verified test cases"
  ],
  students: [
    "Receive instant feedback on submissions",
    "Practice with previous exam questions",
    "Track personal progress over time",
    "Access detailed explanations for correct solutions",
    "Learn from mistakes with targeted feedback"
  ]
};

export function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3C3C3C] mb-12">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[#3C3C3C]">For Tutors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.tutors.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#F09A63] flex-shrink-0" />
                    <span className="text-[#3C3C3C]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[#3C3C3C]">For Students</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.students.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#F09A63] flex-shrink-0" />
                    <span className="text-[#3C3C3C]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}