import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function NavItem({ to, icon, toolTipContent = "" }) {
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
            className="flex items-center justify-center w-15 h-12 rounded-xl transition-transform active:scale-90"
          >
            <NavLink
              to={to}
              end={to === "/"}
              aria-current={match ? "page" : undefined}
              className="flex items-center justify-center px-5 py-3"
            >
              <Icon
                solid={!!match}
                strokeWidth={2.5}
                className={`size-6! transition-colors  ${
                  match ? "text-foreground" : "text-muted-foreground/50"
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
