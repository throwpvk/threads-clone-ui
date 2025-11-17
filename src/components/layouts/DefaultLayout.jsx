import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Navbar from "./Navbar.jsx";
import MobileBottomNav from "./MobileBottomNav.jsx";

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Navbar />
        <SidebarInset className="flex-1">
          <Outlet />
        </SidebarInset>
        <MobileBottomNav />
      </div>
    </SidebarProvider>
  );
}
