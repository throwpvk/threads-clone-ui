import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { Clock } from "lucide-react";

export function MoreMenu({
  isModal = false,
  isMobile = false,
  hasAIInfo = false,
  onAIClick = () => {},
  onScheduleClick = () => {},
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
        className="flex cursor-pointer items-center justify-between px-3 py-3 text-base font-semibold hover:bg-accent rounded-xl m-2"
      >
        {hasAIInfo ? "Remove AI Label" : "Add AI Label"}
      </DropdownMenuItem>
      <DropdownMenuSeparator className="bg-border/50 h-px" />
      <DropdownMenuItem
        className={clsx(
          hasAIInfo ? "text-foreground/50" : "text-foreground",
          "flex justify-between items-center cursor-pointer px-3 py-3 text-base font-semibold hover:bg-accent rounded-xl m-2"
        )}
        onSelect={onScheduleClick}
        disabled={hasAIInfo}
      >
        Schedule...
        <DropdownMenuShortcut>
          <Clock
            className={clsx(
              "size-5",
              hasAIInfo ? "text-foreground/50" : "text-foreground"
            )}
            strokeWidth="2"
          />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
