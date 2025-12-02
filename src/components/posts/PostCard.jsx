import React from "react";
import PostAvatar from "./PostAvatar";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import PostFooter from "./PostFooter";
import PostReply from "./PostReply";

/**
 * PostCard - Main orchestrator component
 * Tập hợp các sub-components: Avatar, Header, Content, Actions, Footer, Reply
 */
export default function PostCard({
  post,
  showReply = false,
  isNested = false,
}) {
  const { user, timestamp, likes, comments, reposts, shares, replies } = post;

  const handleMoreClick = () => {
    console.log("More options");
  };

  const handleTranslate = () => {
    console.log("Translate post");
  };

  return (
    <article className={`relative ${!isNested ? "border-b" : ""}`}>
      <div className="flex gap-3 px-4 py-4">
        {/* Left side - Avatar with connecting line */}
        <PostAvatar
          user={user}
          hasConnectingLine={showReply && replies && replies.length > 0}
        />

        {/* Right side - Content */}
        <div className="flex-1 min-w-0">
          {/* Header: username, verified, timestamp, more button */}
          <PostHeader
            user={user}
            timestamp={timestamp}
            onMoreClick={handleMoreClick}
          />

          {/* Content: text + media (images, gif, video, audio, poll, location) */}
          <PostContent post={post} onTranslate={handleTranslate} />

          {/* Actions: like, comment, repost, share, save */}
          <PostActions
            likes={likes}
            comments={comments}
            reposts={reposts}
            shares={shares}
          />

          {/* Footer: reply count indicator */}
          <PostFooter comments={comments} isNested={isNested} />
        </div>
      </div>

      {/* Nested replies */}
      {showReply && replies && replies.length > 0 && (
        <div className="pl-[52px]">
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
