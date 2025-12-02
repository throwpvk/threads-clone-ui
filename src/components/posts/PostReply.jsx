import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/**
 * PostReply - Render nested reply
 */
export default function PostReply({ reply }) {
  const { user, content, isPlaceholder } = reply;

  return (
    <div className="flex gap-3 px-4 pb-4">
      <Avatar className="w-6 h-6 ring-2 ring-background">
        <AvatarImage src={user?.avatar} alt={user?.username} />
        <AvatarFallback>{user?.username?.[0]?.toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="flex-1 min-w-0">
        {isPlaceholder ? (
          <div className="space-y-1">
            <div className="text-sm font-semibold hover:underline cursor-pointer">
              {user?.username}
            </div>
            <div className="text-sm text-muted-foreground">{content}</div>
          </div>
        ) : (
          <PostCardComponent post={reply} isNested={true} />
        )}
      </div>
    </div>
  );
}
