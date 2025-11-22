import React from "react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
  MenuIcon,
  PlusIcon,
  ThreadsLogo,
} from "@/components/icons";
import NavItem from "./NavItem";
import CreateButton from "./CreateButton";

const Navbar = () => {
  const handleMenuClick = () => {
    // TODO
  };

  return (
    <Sidebar
      collapsible="offcanvas"
      className="flex flex-col justify-between bg-sidebar backdrop-blur supports-backdrop-filter:bg-sidebar/80 py-2"
    >
      <SidebarHeader className="flex items-center justify-center">
        <NavLink
          to="/"
          className="flex items-center justify-center hover:bg-transparent active:bg-transparent cursor-pointer transition-transform hover:scale-105 active:scale-95"
          aria-label="Home"
        >
          <ThreadsLogo />
        </NavLink>
      </SidebarHeader>
      <SidebarContent className="flex items-center">
        <SidebarMenu className="flex-1 flex flex-col justify-center items-center gap-4 w-full">
          <NavItem to="/" icon={HomeIcon} toolTipContent="Home" />
          <NavItem to="/search" icon={SearchIcon} toolTipContent="Search" />
          <CreateButton icon={PlusIcon} toolTipContent="Create" />
          <NavItem to="/activity" icon={HeartIcon} toolTipContent="Activity" />
          <NavItem to="/profile" icon={UserIcon} toolTipContent="Profile" />
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleMenuClick}
              variant="ghost"
              size="icon"
              aria-label="Menu"
              className="flex items-center justify-center hover:bg-transparent active:bg-transparent cursor-pointer text-muted-foreground hover:text-foreground transition-all active:scale-90"
            >
              <MenuIcon className="size-7!" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Menu</p>
          </TooltipContent>
        </Tooltip>
      </SidebarFooter>
    </Sidebar>
  );
};

export default Navbar;
