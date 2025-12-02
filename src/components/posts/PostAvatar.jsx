import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/**
 * PostAvatar - Avatar với connecting line cho replies
 */
export default function PostAvatar({ user, hasConnectingLine = false }) {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="w-9 h-9 ring-2 ring-background">
        <AvatarImage src={user?.avatar} alt={user?.username} />
        <AvatarFallback>{user?.username?.[0]?.toUpperCase()}</AvatarFallback>
      </Avatar>

      {/* Connecting line for replies */}
      {hasConnectingLine && <div className="w-0.5 flex-1 bg-border mt-2" />}
    </div>
  );
}
