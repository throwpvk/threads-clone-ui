import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { mockUser } from "@/data/mockData";
import { useIsMobile } from "@/hooks/use-mobile";
import { CreateThreadCard } from "../layouts/components";
import { useLocation } from "react-router-dom";

export default function CreatePostInput({ onCreateClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const pageLocation = useLocation();
  const isHomePage = pageLocation.pathname === "/";
  const handleClick = () => {
    setIsModalOpen(true);
    if (onCreateClick) {
      onCreateClick();
    }
  };
  return isHomePage && isMobile ? null : (
    <>
      <div
        onClick={handleClick}
        className="w-full flex items-center gap-3 md:px-6 px-3 pt-6 pb-4 transition-colors cursor-pointer border-b"
      >
        <Avatar className="w-9 h-9 ring-2 ring-background shrink-0">
          <AvatarImage src={mockUser.avatar} alt={mockUser.username} />
          <AvatarFallback>{mockUser.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0 cursor-text">
          <span className="text-muted-foreground text-sm">What's new?</span>
        </div>

        <button className="px-4 py-1.5 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-accent transition-colors">
          Post
        </button>
      </div>
      {/* Modal */}
      {isModalOpen && !isMobile && (
        <CreateThreadCard
          isModal
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      {/* Mobile */}
      {isModalOpen && isMobile && (
        <CreateThreadCard
          isMobile
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
}
