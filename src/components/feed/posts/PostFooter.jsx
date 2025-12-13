import React from "react";

export default function PostFooter({ comments, isNested = false }) {
  if (isNested || !comments || comments === 0) return null;

  return (
    <div className="mt-3 text-sm text-muted-foreground">
      {comments} {comments === 1 ? "reply" : "replies"}
    </div>
  );
}
