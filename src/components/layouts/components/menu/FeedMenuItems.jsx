import {
  DropdownMenuLabel,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, CirclePlus } from "lucide-react";
import { GhostIcon } from "@/components/icons";

export const FeedMenuItems = ({ onBack }) => {
  return (
    <>
      <DropdownMenuLabel className="p-0 py-1 text-xl font-bold flex justify-between items-center border-b border-muted-foreground/15 mb-2">
        <button
          className="cursor-pointer h-14 w-14 flex items-center justify-center hover:bg-transparent rounded-lg transition-colors"
          onClick={onBack}
        >
          <ArrowLeft />
        </button>
        <span className="flex items-centerjustify-start flex-1">Feeds</span>
        <DropdownMenuShortcut className="cursor-pointer h-14 w-14 flex items-center justify-center">
          <CirclePlus className="size-5 text-foreground" strokeWidth="1.5" />
        </DropdownMenuShortcut>
      </DropdownMenuLabel>
      <DropdownMenuItem className="mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        For you
      </DropdownMenuItem>
      <DropdownMenuItem className="mx-2 pl-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Following
      </DropdownMenuItem>
      <DropdownMenuItem className="flex cursor-pointer mx-2 mb-2 pl-3 pr-3 py-3 text-base font-semibold focus:bg-input/30 rounded-lg">
        Ghost posts
        <DropdownMenuShortcut>
          <GhostIcon className="text-foreground" />
        </DropdownMenuShortcut>
      </DropdownMenuItem>
    </>
  );
};
