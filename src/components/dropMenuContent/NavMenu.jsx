import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";

export const NavMenuContent = () => {
  return (
    <DropdownMenuContent
      className="w-60 ml-4 py-2 mb-2 rounded-2xl bg-ring border-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-0 data-[state=closed]:zoom-out-95 origin-bottom-left ease-out"
      style={{ animationDuration: "var(--transition-duration)" }}
      align="end"
    >
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Appearance
        <DropdownMenuShortcut>
          <ChevronRight
            className="size-6 text-muted-foreground/60"
            strokeWidth="1"
          />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Insights
      </DropdownMenuItem>
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-2" />
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Feeds
        <DropdownMenuShortcut>
          <ChevronRight
            className="size-6 text-muted-foreground/60"
            strokeWidth="1"
          />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Saved
      </DropdownMenuItem>
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Liked
      </DropdownMenuItem>
      <DropdownMenuSeparator className="my-2" />
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Report a problem
      </DropdownMenuItem>
      <DropdownMenuItem className="mx-1 pl-3 py-3 text-base text-red-500 font-bold focus:bg-input/30 focus:text-red-500 rounded-lg">
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
