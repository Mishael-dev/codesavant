import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}