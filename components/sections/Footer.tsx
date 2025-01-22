import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Company: ["About Us", "Careers", "Contact Us", "Blog"],
  Resources: ["Documentation", "Support Center", "FAQs", "API Guide"],
  Legal: ["Terms of Service", "Privacy Policy", "Security"]
};

const socialLinks = [
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { icon: <Github className="h-5 w-5" />, href: "#" },
  { icon: <Youtube className="h-5 w-5" />, href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg text-[#3C3C3C] mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#3C3C3C]/70 hover:text-[#F09A63] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold text-lg text-[#3C3C3C] mb-4">Stay Updated</h3>
            <div className="space-y-4">
              <p className="text-[#3C3C3C]/70">
                Subscribe to our newsletter for the latest features and updates.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white"
                />
                <Button className="bg-[#F09A63] hover:bg-[#F09A63]/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#3C3C3C]/70">
              © 2025 Code Savant. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[#3C3C3C]/70 hover:text-[#F09A63] transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}