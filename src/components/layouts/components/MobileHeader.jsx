import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreadsLogo from "@/components/common/ThreadsLogo";

const MobileHeader = () => {
  const handleMenuClick = () => {
    // TODO
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleMenuClick}
          className="text-muted-foreground active:text-foreground hover:bg-transparent active:bg-transparent transition-transform active:scale-90"
          aria-label="Menu"
        >
          <Menu strokeWidth={2.5} className="size-6" />
        </Button>
        <div className="absolute left-1/2 -translate-x-1/2">
          <ThreadsLogo className="size-8" />
        </div>
        <div className="w-10"></div>
      </div>
    </header>
  );
};

export default MobileHeader;
