import React from "react";

export default function PostReply({ reply, PostCardComponent, isFirst }) {
  const { content, isPlaceholder } = reply;

  return (
    <div className={isFirst ? "" : "mt-3"}>
      {isPlaceholder ? (
        <div className="text-sm text-muted-foreground">{content}</div>
      ) : (
        PostCardComponent && <PostCardComponent post={reply} isNested={true} />
      )}
    </div>
  );
}
