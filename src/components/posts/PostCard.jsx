import React from "react";
import PostAvatar from "./PostAvatar";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReply from "./PostReply";
import { AvatarConnectingLine } from ".";

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
      <div
        className="px-6 py-3"
        style={{
          display: "grid",
          gridTemplateColumns: "36px 1fr",
          gridTemplateRows: hasReplies
            ? "21px 24px 1fr 1fr 22px auto"
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
        <div
          style={{ gridArea: "avatar" }}
          className="flex items-center justify-center"
        >
          <PostAvatar user={user} />
        </div>

        <div style={{ gridArea: "header" }}>
          <PostHeader
            user={user}
            timestamp={timestamp}
            onMoreClick={handleMoreClick}
          />
        </div>

        {hasReplies && (
          <div
            style={{ gridArea: "line" }}
            className="flex justify-center mt-[6.5px]"
          >
            <AvatarConnectingLine />
          </div>
        )}

        <div style={{ gridArea: "content" }}>
          <PostContent post={post} />
        </div>

        {hasReplies && replies[0] && (
          <div
            style={{ gridArea: "repAvatar" }}
            className="flex items-center justify-center"
          >
            <PostAvatar user={replies[0].user} size="normal" />
          </div>
        )}

        {hasReplies && replies[0] && (
          <div style={{ gridArea: "repHeader" }} className="mt-3">
            <PostHeader
              user={replies[0].user}
              timestamp={replies[0].timestamp}
              onMoreClick={handleMoreClick}
              isReply={true}
            />
          </div>
        )}

        {hasReplies && (
          <div style={{ gridArea: "repContent" }} className="mt-1 mb-3">
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
