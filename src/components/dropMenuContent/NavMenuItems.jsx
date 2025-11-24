import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";

export const NavMenuItems = ({ onNavigateToAppearance }) => {
  return (
    <>
      <DropdownMenuItem
        className="cursor-pointer mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg"
        onSelect={(e) => {
          e.preventDefault();
          onNavigateToAppearance?.();
        }}
      >
        Appearance
        <DropdownMenuShortcut>
          <ChevronRight
            className="size-6 text-muted-foreground/60"
            strokeWidth="1"
          />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Insights
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-2 bg-muted-foreground/15" />
      <DropdownMenuItem className="cursor-pointer mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Feeds
        <DropdownMenuShortcut>
          <ChevronRight
            className="size-6 text-muted-foreground/60"
            strokeWidth="1"
          />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Saved
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Liked
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-2 bg-muted-foreground/15" />
      <DropdownMenuItem className="cursor-pointer mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Report a problem
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer mx-1 pl-3 py-3 text-base text-red-500 font-bold focus:bg-input/30 focus:text-red-500 rounded-lg">
        Log out
      </DropdownMenuItem>
    </>
  );
};
