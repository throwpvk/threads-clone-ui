import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { mockUser } from "@/data/mockData";

export default function CreatePostInput({ onCreateClick }) {
  return (
    <div
      onClick={onCreateClick}
      className="w-full flex items-center gap-3 px-4 py-4 transition-colors cursor-pointer border-b"
    >
      <Avatar className="w-9 h-9 ring-2 ring-background shrink-0">
        <AvatarImage src={mockUser.avatar} alt={mockUser.username} />
        <AvatarFallback>{mockUser.username[0].toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        <span className="text-muted-foreground text-sm">What's new?</span>
      </div>

      <button
        className="px-4 py-1.5 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-accent transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onCreateClick?.();
        }}
      >
        Post
      </button>
    </div>
  );
}
