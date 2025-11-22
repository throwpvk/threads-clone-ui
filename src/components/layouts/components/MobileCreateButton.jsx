import React from "react";
import { Button } from "@/components/ui/button";

export default function MobileCreateButton({ icon }) {
  const Icon = icon;
  const handleClick = () => {
    // TODO
  };

  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center justify-center transition-all active:scale-90 bg-sidebar-accent cursor-pointer text-muted-foreground w-16 h-10 rounded-md"
      aria-label="Create post"
    >
      <Icon className="size-6" />
    </Button>
  );
}
