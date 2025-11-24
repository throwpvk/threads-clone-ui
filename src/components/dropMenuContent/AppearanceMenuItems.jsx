import { useState } from "react";
import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, ArrowLeft } from "lucide-react";

export const AppearanceMenuItems = ({ onBack }) => {
  const [theme, setTheme] = useState("dark");

  const applyTheme = (newTheme) => {
    const html = document.documentElement;

    if (newTheme === "light") {
      html.classList.remove("dark");
    } else if (newTheme === "dark") {
      html.classList.add("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <>
      <DropdownMenuLabel className="p-0 mb-3 text-base font-semibold flex justify-between items-center">
        <button
          className="cursor-pointer h-12 w-12 flex items-center justify-center hover:bg-transparent rounded-lg transition-colors"
          onClick={onBack}
        >
          <ArrowLeft />
        </button>
        Appearance
        <div className="h-12 w-12"></div>
      </DropdownMenuLabel>
      <DropdownMenuRadioGroup
        value={theme}
        onValueChange={handleThemeChange}
        className="flex mb-4 mx-3 justify-center items-center gap-0 bg-background p-0 rounded-xl"
      >
        <DropdownMenuRadioItem
          value="light"
          onSelect={(e) => e.preventDefault()}
          className={`cursor-pointer flex p-0 h-11 justify-center items-center flex-1 [&_span]:hidden text-base rounded-xl focus:bg-transparent transition-colors ${
            theme === "light"
              ? "text-foreground focus:text-foreground border border-muted-foreground/30"
              : "text-muted-foreground/70 focus:text-muted-foreground/70 border-0"
          }`}
        >
          <Sun className="size-5" />
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="dark"
          onSelect={(e) => e.preventDefault()}
          className={`cursor-pointer flex p-0 h-11 justify-center items-center flex-1 [&_span]:hidden text-base rounded-xl focus:bg-transparent transition-colors ${
            theme === "dark"
              ? "text-foreground focus:text-foreground border border-muted-foreground/30"
              : "text-muted-foreground/70 focus:text-muted-foreground/70 border-0"
          }`}
        >
          <Moon className="size-5" />
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="auto"
          onSelect={(e) => e.preventDefault()}
          className={`cursor-pointer flex p-0 h-11 justify-center items-center flex-1 [&_span]:hidden text-base rounded-xl focus:bg-transparent transition-colors ${
            theme === "auto"
              ? "text-foreground focus:text-foreground border border-muted-foreground/30"
              : "text-muted-foreground/70 focus:text-muted-foreground/70 border-0"
          }`}
        >
          Auto
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </>
  );
};
