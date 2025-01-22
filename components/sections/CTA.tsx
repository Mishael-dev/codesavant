import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-6">
          Start Creating Better Programming Exams Today
        </h2>
        <p className="text-xl text-[#3C3C3C]/80 mb-8">
          Join thousands of programming tutors who are saving time and improving student outcomes with Code Savant.
        </p>
        <Button size="lg" className="bg-[#F09A63] hover:bg-[#F09A63]/90 text-white px-8">
          Start Free Trial - No Credit Card Required
        </Button>
      </div>
    </section>
  );
}