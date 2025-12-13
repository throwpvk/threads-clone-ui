import React from "react";
import {
  CreatePostInput,
  PostCard,
  PostsWrapper,
} from "@/components/feed/posts";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

export default function SearchContent({
  hasCreatePost = false,
  onCreatePost,
  posts = [],
  showReply = true,
  isMultiColumn = false,
}) {
  const pageLocation = useLocation();
  const isActivity = pageLocation.pathname === "/activity";
  const handleCreatePost = () => {
    if (onCreatePost) {
      onCreatePost();
    } else {
      console.log("Open create post modal");
    }
  };

  return (
    <div
      className={clsx(
        "flex flex-col h-full overflow-hidden border border-border border-b-0 drop-shadow-xs mx-2 bg-card rounded-t-3xl",
        !isMultiColumn && "custom-scrollbar"
      )}
    >
      <PostsWrapper>
        {!isActivity && hasCreatePost && (
          <CreatePostInput onCreateClick={handleCreatePost} />
        )}

        <div className="divide-y">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} showReply={showReply} />
          ))}
        </div>
      </PostsWrapper>
    </div>
  );
}
