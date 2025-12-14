import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function PostAvatar({ user, size = "normal" }) {
  const sizeClasses = {
    normal: "w-9 h-9 ring-2",
    small: "w-6 h-6 ring-1",
  };

  return (
    <Avatar className={`${sizeClasses[size]} ring-background`}>
      <AvatarImage src={user?.avatar} alt={user?.username} />
      <AvatarFallback className={size === "small" ? "text-xs" : ""}>
        {user?.username?.[0]?.toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
