"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { BarChart2, BookOpen, Mail, Settings, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: BarChart2 },
  { name: "My Exams", href: "/dashboard/exams", icon: BookOpen },
  { name: "Results", href: "/dashboard/results", icon: Mail },
  { name: "Account", href: "/dashboard/account", icon: User },
];

export function DashboardSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const content = (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white h-full">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-gray-200">
        <Link href="/dashboard" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-[#F09A63]" />
          <span className="text-xl font-bold text-[#3C3C3C]">Code Savant</span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col px-6">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      pathname === item.href
                        ? "bg-[#F09A63] text-white"
                        : "text-[#3C3C3C] hover:bg-[#F09A63]/10",
                      "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                    )}
                  >
                    <item.icon className="h-6 w-6 shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-full w-64 lg:block">
        {content}
      </aside>

      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 w-64">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 lg:hidden"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
          {content}
        </SheetContent>
      </Sheet>
    </>
  );
}