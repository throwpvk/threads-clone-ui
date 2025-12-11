import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PostAvatar } from ".";

/**
 * PostReply - Render nested reply
 */
export default function PostReply({ reply }) {
  const { user, content, isPlaceholder } = reply;

  return (
    <div className="flex gap-3 px-4 pb-4">
      <PostAvatar user={user} />

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
