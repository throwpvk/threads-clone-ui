import PropTypes from "prop-types";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PlusIcon } from "@/components/icons";
import { CreateCardFixed } from "../create/CreateCardFixed";

export default function CreateButtonFixed({
  tooltipContent = "Create New Thread",
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <div className="fixed bottom-6 right-6 hidden md:block">
              <button
                aria-label={tooltipContent}
                className="w-[82px] h-[68px] rounded-2xl flex items-center justify-center text-foreground hover:scale-110 bg-popover border border-border shadow-lg hover:bg-popover transition-all ease-out"
                style={{ transitionDuration: "var(--transition-duration)" }}
              >
                <PlusIcon className="size-7" />
              </button>
            </div>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
      <CreateCardFixed isModal={false} onClose={() => setOpen(false)} />
    </DropdownMenu>
  );
}

CreateButtonFixed.propTypes = {
  tooltipContent: PropTypes.string,
};
