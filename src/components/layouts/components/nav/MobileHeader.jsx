import React from "react";
import { ThreadsLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import MobileMenuIcon from "@/components/icons/MobileMenuIcon";
import { DropMenu } from "@/components/dropMenu";
import { MenuNavigator } from "@/components/layouts/components";

const MobileHeader = () => {
  const handleMenuClick = () => {
    // TODO
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-backdrop-filter:bg-black/70 md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="w-10"></div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <ThreadsLogo className="size-8" />
        </div>{" "}
        <DropMenu content={<MenuNavigator />}>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleMenuClick}
            className="text-muted-foreground/50 active:text-foreground hover:bg-transparent active:bg-transparent transition-transform active:scale-90"
            aria-label="Menu"
          >
            <MobileMenuIcon className="size-6" />
          </Button>
        </DropMenu>
      </div>
    </header>
  );
};

export default MobileHeader;
