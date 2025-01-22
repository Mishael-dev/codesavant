"use client";

import { DashboardHeader } from "@/components/dashboard/Header";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-16 lg:pl-64">
        <div className="px-4 py-8 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}