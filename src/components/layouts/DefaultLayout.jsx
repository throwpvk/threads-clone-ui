import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import {
  Navbar,
  MobileHeader,
  MobileBottomNav,
  CreateButtonFixed,
} from "./components";
import { useIsMobile } from "@/hooks/use-mobile";
import LoginModal from "@/components/login/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShowLoginModal,
  closeLoginModal,
} from "@/features/auth/authSlice";

export default function DefaultLayout() {
  const isMobile = useIsMobile();
  const showLoginModal = useSelector(selectShowLoginModal);
  const dispatch = useDispatch();

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
        {!isMobile && <CreateButtonFixed />}
        <MobileBottomNav />
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => dispatch(closeLoginModal())}
        />
      </div>
    </SidebarProvider>
  );
}
