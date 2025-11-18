import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import ThreadsLogo from "@/components/common/ThreadsLogo";
import { Home, Search, Heart, User, Menu, Plus } from "lucide-react";

function NavItem({ to, icon, toolTipContent = "" }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: to === "/" });
  const Icon = icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            isActive={!!match}
            className="flex items-center justify-center w-16 h-12 rounded-lg transition-transform active:scale-90"
          >
            <NavLink
              to={to}
              end={to === "/"}
              aria-current={match ? "page" : undefined}
              className="flex items-center justify-center px-5 py-3"
            >
              <Icon
                strokeWidth={2.5}
                className={`size-6! transition-colors ${
                  match ? "text-foreground" : "text-muted-foreground"
                }`}
              />
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{toolTipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
}

function CreateButton({ icon, toolTipContent = "" }) {
  const Icon = icon;
  const handleClick = () => {
    // TODO
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="flex items-center justify-center w-16 h-12 rounded-lg bg-sidebar-accent cursor-pointer text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/80 transition-all active:scale-90"
            onClick={handleClick}
            aria-label={toolTipContent}
          >
            <div className="flex items-center justify-center px-5 py-3">
              <Icon strokeWidth={2.5} className="size-6! transition-colors" />
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{toolTipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
}

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
          <NavItem to="/" icon={Home} toolTipContent="Home" />
          <NavItem to="/search" icon={Search} toolTipContent="Search" />
          <CreateButton icon={Plus} toolTipContent="Create" />
          <NavItem to="/activity" icon={Heart} toolTipContent="Activity" />
          <NavItem to="/profile" icon={User} toolTipContent="Profile" />
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
              <Menu strokeWidth={2.5} className="size-7!" />
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
