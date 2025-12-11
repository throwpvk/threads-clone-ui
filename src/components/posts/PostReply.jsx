import React from "react";
import { PostAvatar } from ".";

/**
 * PostReply - Render nested reply với grid layout 2 cột
 */
export default function PostReply({ reply, PostCardComponent }) {
  const { user, content, isPlaceholder } = reply;

  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3 px-4 pb-4">
      {/* Column 1: Avatar */}
      <PostAvatar user={user} />

      {/* Column 2: Content */}
      <div className="flex-1 min-w-0">
        {isPlaceholder ? (
          <div className="space-y-1">
            <div className="text-sm font-semibold hover:underline cursor-pointer">
              {user?.username}
            </div>
            <div className="text-sm text-muted-foreground">{content}</div>
          </div>
        ) : (
          PostCardComponent && (
            <PostCardComponent post={reply} isNested={true} />
          )
        )}
      </div>
    </div>
  );
}
