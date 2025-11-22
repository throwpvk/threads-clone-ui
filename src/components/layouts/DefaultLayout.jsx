import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Navbar, MobileHeader, MobileBottomNav } from "./components";

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
