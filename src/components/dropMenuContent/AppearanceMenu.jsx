import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, ArrowLeft } from "lucide-react";

export const AppearanceMenu = ({ onBack }) => {
  return (
    <DropdownMenuContent
      className="w-81 ml-4 p-0 mb-0 rounded-2xl bg-ring border-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-0 data-[state=closed]:zoom-out-95 origin-bottom-left ease-out"
      style={{ animationDuration: "var(--transition-duration)" }}
      align="end"
    >
      <DropdownMenuLabel className="p-0 mt-1 mb-2 text-base font-semibold flex justify-between items-center">
        <button
          className="h-13 w-13 pt-2 pb-3 flex items-center justify-center hover:bg-input/30 rounded-lg transition-colors"
          onClick={onBack}
        >
          <ArrowLeft />
        </button>
        Appearance
        <div className="h-13 w-13 pt-2 pb-3"></div>
      </DropdownMenuLabel>
      <DropdownMenuRadioGroup className="flex mb-4 mx-4 justify-center items-center gap-0 bg-background p-0 rounded-xl">
        <DropdownMenuRadioItem className="flex p-0 h-11 justify-center items-center flex-1 [&_span]:hidden text-base text-muted-foreground/70 rounded-xl">
          <Sun className="size-5" />
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem className="flex p-0 h-11 justify-center items-center flex-1 [&_span]:hidden text-base  text-foreground border border-muted-foreground/30 rounded-xl">
          <Moon className="size-5" />
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem className="flex p-0 h-11 justify-center items-center flex-1 [&_span]:hidden text-base text-muted-foreground/70 rounded-xl">
          Auto
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  );
};
