import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-[#3C3C3C] mb-6 leading-tight">
          Create Programming Exams That Matter
        </h1>
        <p className="text-xl text-[#3C3C3C]/80 mb-8 max-w-2xl mx-auto">
          Transform your programming classes with intelligent exam creation and automated grading.
          Streamline your teaching workflow while providing students with meaningful feedback that helps them grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#F09A63] hover:bg-[#F09A63]/90 text-white px-8">
            Create Exams Now
          </Button>
          <Button size="lg" variant="outline" className="border-[#F09A63] text-[#F09A63] hover:bg-[#F09A63]/10">
            Try for Free
          </Button>
        </div>
      </div>
    </section>
  );
}