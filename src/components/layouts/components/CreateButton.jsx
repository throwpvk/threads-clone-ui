import React from "react";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CreateButton({ icon, toolTipContent = "" }) {
  const Icon = icon;
  const handleClick = () => {
    // TODO
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="flex items-center justify-center w-16 h-12 rounded-lg bg-sidebar-accent cursor-pointer text-muted-foreground/50 hover:text-foreground hover:bg-sidebar-accent/80 transition-all active:scale-90"
            onClick={handleClick}
            aria-label={toolTipContent}
          >
            <div className="flex items-center justify-center px-5 py-3">
              <Icon className="size-6! transition-colors" strokeWidth={3} />
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
