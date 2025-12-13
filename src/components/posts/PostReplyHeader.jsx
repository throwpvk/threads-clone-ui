import React from "react";
import { BadgeCheck } from "lucide-react";
import { ExpandIcon, ChevronRightIcon } from "@/components/icons";

export default function PostReplyHeader({ user, onMoreClick }) {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex items-center gap-0">
        <span className="font-semibold text-sm hover:underline cursor-pointer">
          {user?.username}
        </span>
        {user?.verified && (
          <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
        )}
        <ChevronRightIcon className="mx-1" />
        <span className="text-muted-foreground text-sm">Add a topic</span>
      </div>
      <button
        onClick={onMoreClick}
        className="mt-2 p-2 bg-accent hover:bg-accent rounded-full transition-colors"
      >
        <ExpandIcon className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
}
