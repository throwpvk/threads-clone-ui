import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/**
 * PostAvatar - Avatar component (without connecting line)
 */
export default function PostAvatar({ user }) {
  return (
    <Avatar className="w-9 h-9 ring-2 ring-background">
      <AvatarImage src={user?.avatar} alt={user?.username} />
      <AvatarFallback>{user?.username?.[0]?.toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
