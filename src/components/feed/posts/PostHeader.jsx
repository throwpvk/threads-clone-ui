import React from "react";
import { MoreHorizontal, BadgeCheck } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function PostHeader({ user, timestamp, onMoreClick }) {
  const pageLocation = useLocation();
  const isActivity = pageLocation.pathname === "/activity";
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-sm hover:underline cursor-pointer">
          {user?.username}
        </span>
        {user?.verified && (
          <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
        )}
        <span className="text-muted-foreground text-sm">{timestamp}</span>
      </div>
      {!isActivity && (
        <button
          onClick={onMoreClick}
          className="p-1 hover:bg-accent rounded-full transition-colors"
        >
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      )}
    </div>
  );
}
