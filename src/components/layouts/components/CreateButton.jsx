import React, { useState } from "react";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CreateCardFixed } from "./CreateCardFixed";

export default function CreateButton({ icon, toolTipContent = "" }) {
  const Icon = icon;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex items-center justify-center w-15 h-12 rounded-xl bg-sidebar-accent cursor-pointer text-muted-foreground/50 hover:text-foreground hover:bg-sidebar-accent/80 transition-all active:scale-90"
              onClick={() => setIsModalOpen(true)}
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

      {/* Modal */}
      {isModalOpen && (
        <CreateCardFixed isModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
