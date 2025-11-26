import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreateCardFixed } from "./CreateCardFixed";

export default function MobileCreateButton({ icon }) {
  const Icon = icon;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="flex flex-col items-center justify-center transition-all active:scale-90 bg-sidebar-accent cursor-pointer text-muted-foreground w-16 h-10 rounded-xl"
        aria-label="Create post"
      >
        <Icon className="size-6" />
      </Button>

      {/* Modal */}
      {isModalOpen && (
        <CreateCardFixed
          // isModal
          isMobile
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
