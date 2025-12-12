import React from "react";
import PostAvatar from "./PostAvatar";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReply from "./PostReply";
import { AvatarConnectingLine } from ".";

/**
 * PostCard - Main orchestrator component
 * Layout với CSS Grid Template Areas (5 rows):
 * Row 1: avatar | header
 * Row 2: avatar | content
 * Row 3: line   | content
 * Row 4: line   | content
 * Row 5: repAvatar | repContent (chỉ khi hasReplies)
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
      {/* Grid Template Areas Layout */}
      <div
        className="px-6 py-3"
        style={{
          display: "grid",
          gridTemplateColumns: "36px 1fr",
          gridTemplateRows: hasReplies
            ? "21px 24px 1fr 1fr 21px auto"
            : "21px 24px 1fr 1fr",
          columnGap: "12px",
          rowGap: "0px",
          gridTemplateAreas: hasReplies
            ? `"avatar header"
               "avatar content"
               "line content"
               "line content"
               "repAvatar repHeader"
               "repAvatar repContent"`
            : `"avatar header"
               "avatar content"
               ". content"
               ". content"`,
        }}
      >
        {/* Avatar Area */}
        <div
          style={{ gridArea: "avatar" }}
          className="flex items-center justify-center"
        >
          <PostAvatar user={user} />
        </div>

        {/* Header Area: Username + Timestamp + More */}
        <div style={{ gridArea: "header" }}>
          <PostHeader
            user={user}
            timestamp={timestamp}
            onMoreClick={handleMoreClick}
          />
        </div>

        {/* Connecting Line Area (only when has replies) */}
        {hasReplies && (
          <div
            style={{ gridArea: "line" }}
            className="flex justify-center my-2"
          >
            <AvatarConnectingLine />
          </div>
        )}

        {/* Content Area: Text + Media + Actions + Footer */}
        <div style={{ gridArea: "content" }}>
          <PostContent post={post} />
        </div>

        {/* Reply Avatar Area (only when has replies) */}
        {hasReplies && replies[0] && (
          <div
            style={{ gridArea: "repAvatar" }}
            className="flex items-center justify-center"
          >
            <PostAvatar user={replies[0].user} size="normal" />
          </div>
        )}

        {/* Reply Header Area: Username + Timestamp (only when has replies) */}
        {hasReplies && replies[0] && (
          <div style={{ gridArea: "repHeader" }}>
            <PostHeader
              user={replies[0].user}
              timestamp={replies[0].timestamp}
              onMoreClick={handleMoreClick}
              isReply={true}
            />
          </div>
        )}

        {/* Reply Content Area: Text + Media (only when has replies) */}
        {hasReplies && (
          <div style={{ gridArea: "repContent" }}>
            {replies.map((reply, index) => (
              <PostReply
                key={reply.id}
                reply={reply}
                PostCardComponent={PostCard}
                isFirst={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
