import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BadgeCheck } from "lucide-react";
import { PostMediaImage } from "./media";

/**
 * PostQuoted - Hiển thị post được quote bên trong
 * Simplified version của PostCard - không có actions, không recursive
 */
export default function PostQuoted({ quotedPost }) {
  if (!quotedPost) return null;

  const { user, content, timestamp, images } = quotedPost;

  return (
    <div className="mt-2 border border-border rounded-xl p-3 hover:bg-accent/50 transition-colors cursor-pointer">
      {/* User info */}
      <div className="flex items-center gap-2 mb-2">
        <Avatar className="w-5 h-5 ring-1 ring-background">
          <AvatarImage src={user?.avatar} alt={user?.username} />
          <AvatarFallback className="text-xs">
            {user?.username?.[0]?.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="font-semibold text-xs">{user?.username}</span>
        {user?.verified && (
          <BadgeCheck className="w-3 h-3 text-blue-500 fill-blue-500" />
        )}
        <span className="text-muted-foreground text-xs">{timestamp}</span>
      </div>

      {/* Content preview - truncate if too long */}
      {content && (
        <p className="text-sm text-foreground line-clamp-3 whitespace-pre-wrap">
          {content}
        </p>
      )}

      {/* Images preview - max 2 images */}
      {images && images.length > 0 && (
        <div className="mt-2">
          <PostMediaImage images={images.slice(0, 2)} />
        </div>
      )}
    </div>
  );
}
