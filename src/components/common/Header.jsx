import React from "react";
import { ChevronDown, Ellipsis, Check, ToggleLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/features/auth/authSlice";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  COLUMN_TYPES,
  COLUMN_CONFIG,
  SWITCHABLE_COLUMN_TYPES,
} from "@/constants/columnTypes";

export default function Header({
  tabs = [{ id: "default", label: "Feed" }],
  activeTab = "default",
  onTabChange,
  hasOptions = true,
  onChangeType,
  currentType,
  columnIndex = 0,
  onRemoveColumn,
}) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const pageLocation = useLocation();
  const isMobile = useIsMobile();
  const isHomePage = pageLocation.pathname === "/";

  // Override hasOptions based on authentication
  const showOptions = hasOptions && isAuthenticated;

  // Check if current type is switchable (for dropdown menu)
  const isSwitchable =
    currentType && SWITCHABLE_COLUMN_TYPES.includes(currentType);

  console.log(isHomePage, isSwitchable, currentType);

  // Mobile layout for HomePage - simple 2 tabs
  if (isMobile && isHomePage) {
    return (
      <div className="bg-card border-b-0 border-border">
        <div className="flex items-center justify-center h-13">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={`flex-1 relative py-3 text-[15px] font-semibold transition-colors ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="sticky top-0 z-10 bg-background border-0 hidden md:block">
      <div className="flex items-center justify-between pl-4 pr-6 h-15">
        <div className="h-10 w-10"></div>
        <div className="flex-1 flex items-center justify-center gap-12">
          {/* Multiple tabs */}
          {tabs &&
            tabs.length >= 2 &&
            tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange?.(tab.id)}
                className={`relative py-4 text-[15px] font-semibold transition-colors active:opacity-50 ${
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}

          {/* Single tab */}
          {tabs && tabs.length === 1 && (
            <div className="flex items-center font-medium text-foreground relative">
              {tabs[0].label}
              {showOptions && isSwitchable && (
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="absolute top-1/2 left-[calc(100%+16px)] -translate-y-1/2 h-6 w-6 rounded-full border border-border-50 shadow-sm flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="Switch column type"
                    >
                      <ChevronDown className="size-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="bottom"
                    align="center"
                    className="w-56 p-1 rounded-2xl bg-popover border border-border shadow-lg"
                  >
                    {SWITCHABLE_COLUMN_TYPES.map((type) => {
                      const config = COLUMN_CONFIG[type];
                      const isActive = currentType === type;
                      return (
                        <DropdownMenuItem
                          key={type}
                          onSelect={() => onChangeType?.(type)}
                          className="flex items-center justify-between cursor-pointer px-3 py-2.5 text-sm rounded-xl hover:bg-accent focus:bg-accent"
                        >
                          <span className="font-semibold">{config.label}</span>
                          {isActive && (
                            <DropdownMenuShortcut>
                              <Check className="size-4" />
                            </DropdownMenuShortcut>
                          )}
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          )}
        </div>
        <div className="h-10 w-10 flex items-center justify-center">
          {showOptions && columnIndex > 0 && (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  className="h-6 w-6 rounded-full border border-border-50 bg-card shadow-sm flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Column options"
                >
                  <Ellipsis className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="end"
                className="w-56 p-1 rounded-2xl bg-popover border border-border shadow-lg"
              >
                <DropdownMenuItem
                  onSelect={() => console.log("Toggle auto update")}
                  className="flex items-center justify-between cursor-pointer px-3 py-2.5 text-sm rounded-xl hover:bg-accent focus:bg-accent"
                >
                  <span className="font-semibold">Auto Update</span>
                  <DropdownMenuShortcut>
                    <ToggleLeft className="size-4" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                {columnIndex > 0 && (
                  <DropdownMenuItem
                    onSelect={() => onRemoveColumn?.()}
                    className="flex items-center justify-between cursor-pointer px-3 py-2.5 text-sm rounded-xl hover:bg-accent focus:bg-accent text-destructive"
                  >
                    <span className="font-semibold">Remove Column</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  );
}
