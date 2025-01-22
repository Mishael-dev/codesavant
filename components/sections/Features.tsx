import { Code2, GraduationCap, LineChart, Shield } from "lucide-react";

const features = [
  {
    icon: <Code2 className="h-8 w-8 text-[#F09A63]" />,
    title: "Intelligent Exam Creation",
    description: "Create programming exams with our intuitive interface. Set up test cases, define scoring criteria, and include multiple question types to thoroughly assess student knowledge."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-[#F09A63]" />,
    title: "Automated Grading",
    description: "Save hours of manual grading time. Our system automatically evaluates student code against your test cases, providing instant results and detailed feedback."
  },
  {
    icon: <LineChart className="h-8 w-8 text-[#F09A63]" />,
    title: "Comprehensive Analytics",
    description: "Track student performance across multiple metrics. Identify common mistakes, measure improvement over time, and adjust your teaching strategy accordingly."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#F09A63]" />,
    title: "Secure Testing Environment",
    description: "Our platform provides a controlled environment for exam-taking, complete with plagiarism detection and secure code execution."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3C3C3C] mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">{feature.title}</h3>
              <p className="text-[#3C3C3C]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}