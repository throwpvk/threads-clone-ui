import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { Clock } from "lucide-react";

export function CreateThreadMoreMenu({
  isModal = false,
  isMobile = false,
  isAIInfo = false,
  onAIClick = () => {},
  onScheduledClick = () => {},
}) {
  return (
    <DropdownMenuContent
      className={clsx(
        "w-70 p-0 z-100 rounded-2xl bg-ring border border-border shadow-lg",
        "origin-top-right animate-in fade-in-0 zoom-in-0",
        "duration-transition-duration",
        isModal ? "mr-58 mt-1" : isMobile ? "mr-4 mt-1" : "mr-10 mt-1"
      )}
    >
      <DropdownMenuItem
        onSelect={onAIClick}
        className="flex cursor-pointer items-center justify-between px-3 py-3 text-base hover:bg-accent rounded-xl m-2"
      >
        {isAIInfo ? "Remove AI Label" : "Add AI Label"}
      </DropdownMenuItem>
      <DropdownMenuSeparator className="bg-border/50 h-px" />
      <DropdownMenuItem
        className={clsx(
          isAIInfo ? "text-muted" : "text-foreground",
          "flex justify-between items-center cursor-pointer px-3 py-3 text-base hover:bg-accent rounded-xl m-2"
        )}
        onSelect={isAIInfo || onScheduledClick}
        disabled={isAIInfo}
      >
        Schedule...
        <DropdownMenuShortcut>
          <Clock
            className={clsx(
              "size-5",
              isAIInfo ? "text-muted" : "text-foreground"
            )}
            strokeWidth="1.5"
          />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
