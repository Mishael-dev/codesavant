"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/faqs", label: "FAQs" },
    { href: "/auth", label: "Login" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              alt="logo"
              src="/logo.png"
              width={300} //530
              height={100} //100
              objectFit="cover" // Ensures the image is cropped to fill the container
              objectPosition="center top" // Aligns the crop to the top
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#3C3C3C] hover:text-[#F09A63] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/auth">
              <Button className="bg-[#F09A63] hover:bg-[#F09A63]/90 text-white">
                Sign Up
              </Button>
            </Link>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[#3C3C3C] hover:text-[#F09A63] transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/auth" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#F09A63] hover:bg-[#F09A63]/90 text-white mt-4">
                    Sign Up
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
