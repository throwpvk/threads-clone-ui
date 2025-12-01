import React from "react";
import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
  PlusIcon,
} from "@/components/icons";
import MobileNavItem from "./MobileNavItem";
import MobileCreateButton from "./MobileCreateButton";

const MobileBottomNav = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-black/70 md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around px-1 py-1">
        <MobileNavItem to="/" icon={HomeIcon} />
        <MobileNavItem to="/search" icon={SearchIcon} />
        <MobileCreateButton icon={PlusIcon} />
        <MobileNavItem to="/activity" icon={HeartIcon} />
        <MobileNavItem to="/profile" icon={UserIcon} />
      </div>
    </nav>
  );
};

export default MobileBottomNav;
