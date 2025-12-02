import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal, BadgeCheck, Languages } from "lucide-react";
import PostActions from "./PostActions";

export default function PostCard({
  post,
  showReply = false,
  isNested = false,
}) {
  const {
    user,
    content,
    timestamp,
    likes,
    comments,
    reposts,
    shares,
    images,
    hasTranslate,
    replies,
  } = post;

  return (
    <article className={`relative ${!isNested ? "border-b" : ""}`}>
      <div className="flex gap-3 px-4 py-4">
        {/* Left side - Avatar with connecting line */}
        <div className="flex flex-col items-center">
          <Avatar className="w-9 h-9 ring-2 ring-background">
            <AvatarImage src={user?.avatar} alt={user?.username} />
            <AvatarFallback>
              {user?.username?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>

          {/* Connecting line for replies */}
          {showReply && replies && replies.length > 0 && (
            <div className="w-0.5 flex-1 bg-border mt-2" />
          )}
        </div>

        {/* Right side - Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm hover:underline cursor-pointer">
                {user?.username}
              </span>
              {user?.verified && (
                <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
              )}
              <span className="text-muted-foreground text-sm">{timestamp}</span>
            </div>

            {/* More button */}
            <button className="p-1 hover:bg-accent rounded-full transition-colors">
              <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-3">
            {/* Text content */}
            {content && (
              <p className="text-sm text-foreground whitespace-pre-wrap wrap-break-word">
                {content}
              </p>
            )}

            {/* Images grid */}
            {images && images.length > 0 && (
              <div
                className={`grid gap-1 rounded-xl overflow-hidden ${
                  images.length === 1
                    ? "grid-cols-1"
                    : images.length === 2
                      ? "grid-cols-2"
                      : images.length === 3
                        ? "grid-cols-2"
                        : "grid-cols-2"
                }`}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative bg-muted ${
                      images.length === 3 && index === 0 ? "row-span-2" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover aspect-square hover:brightness-95 transition-all cursor-pointer"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Translate button */}
            {hasTranslate && (
              <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <Languages className="w-4 h-4" />
                <span className="text-xs">Translate</span>
              </button>
            )}
          </div>

          {/* Actions */}
          <PostActions
            likes={likes}
            comments={comments}
            reposts={reposts}
            shares={shares}
          />

          {/* Reply count indicator */}
          {!isNested && comments > 0 && (
            <div className="mt-3 text-sm text-muted-foreground">
              {comments} {comments === 1 ? "reply" : "replies"}
            </div>
          )}
        </div>
      </div>

      {/* Nested replies */}
      {showReply && replies && replies.length > 0 && (
        <div className="pl-[52px]">
          {replies.map((reply) => (
            <div key={reply.id} className="flex gap-3 px-4 pb-4">
              <Avatar className="w-6 h-6 ring-2 ring-background">
                <AvatarImage
                  src={reply.user?.avatar}
                  alt={reply.user?.username}
                />
                <AvatarFallback>
                  {reply.user?.username?.[0]?.toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                {reply.isPlaceholder ? (
                  <div className="space-y-1">
                    <div className="text-sm font-semibold hover:underline cursor-pointer">
                      {reply.user?.username}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {reply.content}
                    </div>
                  </div>
                ) : (
                  <PostCard post={reply} isNested={true} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
