import { MotionWrapper } from "@/components/common/MotionWrapper";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import {
  DEFAULT_MOTION_CONFIG,
  MOTION_DIRECTIONS,
} from "@/constants/motionConfig";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { Clock } from "lucide-react";

export function CreateThreadMoreMenu({
  isAIInfo = false,
  onAIClick = () => {},
  onScheduledClick = () => {},
}) {
  return (
    <MotionWrapper
      motionKey="CreateThreadMoreMenu"
      direction={MOTION_DIRECTIONS.TOP_RIGHT_TO_BOTTOM_LEFT}
      duration={DEFAULT_MOTION_CONFIG.duration}
      ease={DEFAULT_MOTION_CONFIG.ease}
      mode="wait"
      initial={true}
    >
      <DropdownMenuContent className="w-40 mr-30 mt-27 py-2 px-0 rounded-2xl bg-ring border border-border">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={onAIClick}
            className="flex cursor-pointer items-center justify-between px-3 py-2 text-base outline-none hover:bg-accent hover:text-foreground"
          >
            {isAIInfo ? "Remove AI Label" : "Add AI Label"}
          </DropdownMenuItem>
          <DropdownMenuItem
            className={clsx(
              isAIInfo ? "text-muted" : "text-foreground",
              "flex cursor-pointer items-center justify-between px-3 py-2 text-base hover:bg-accent hover:text-foreground"
            )}
            onSelect={isAIInfo || onScheduledClick}
            disabled={isAIInfo}
          >
            Schedule...
            <DropdownMenuShortcut>
              <Clock />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </MotionWrapper>
  );
}
