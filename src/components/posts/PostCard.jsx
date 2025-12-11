import React from "react";
import PostAvatar from "./PostAvatar";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReply from "./PostReply";
import AvatarConnectingLine from "./AvatarConnectingLine";

/**
 * PostCard - Main orchestrator component
 * Grid layout: Row 1 (Avatar | Header), Row 2-4 (Line | Content), Row 5 (Replies)
 */
export default function PostCard({
  post,
  showReply = false,
  isNested = false,
}) {
  const { user, timestamp, replies } = post;

  const handleMoreClick = () => {
    console.log("More options");
  };

  const hasReplies = showReply && replies && replies.length > 0;

  return (
    <article className={`relative ${!isNested ? "border-b" : ""}`}>
      {/* Grid Layout: 2 columns (Avatar/Line | Header/Content) */}
      <div className="grid grid-cols-[auto_1fr] gap-x-3 px-4 pt-4 pb-3">
        {/* Row 1, Column 1: Avatar */}
        <PostAvatar user={user} />

        {/* Row 1, Column 2: Header (Username + Timestamp + More) */}
        <PostHeader
          user={user}
          timestamp={timestamp}
          onMoreClick={handleMoreClick}
        />

        {/* Row 2-4, Column 1: Connecting line (if has replies) */}
        {hasReplies ? <AvatarConnectingLine /> : <div />}

        {/* Row 2-4, Column 2: Post Content (text + media + actions) */}
        <PostContent post={post} />
      </div>

      {/* Row 5: Nested replies */}
      {hasReplies && (
        <div>
          {replies.map((reply) => (
            <PostReply
              key={reply.id}
              reply={reply}
              PostCardComponent={PostCard}
            />
          ))}
        </div>
      )}
    </article>
  );
}
