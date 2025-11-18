import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Navbar from "./components/Navbar.jsx";
import MobileHeader from "./components/MobileHeader.jsx";
import MobileBottomNav from "./components/MobileBottomNav.jsx";

export default function DefaultLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Navbar />
        <SidebarInset className="flex-1">
          <MobileHeader />
          <div className="md:pt-0 pt-[57px]">
            <Outlet />
          </div>
        </SidebarInset>
        <MobileBottomNav />
      </div>
    </SidebarProvider>
  );
}
