import React from "react";
import { CreatePostInput, PostCard, PostsWrapper } from "@/components/posts";
import clsx from "clsx";

export default function FeedContent({
  hasCreatePost = false,
  onCreatePost,
  posts = [],
  showReply = true,
  isMultiColumn = false,
}) {
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
        "flex flex-col h-full overflow-hidden border border-border border-b-0 drop-shadow-md mx-2 bg-card rounded-t-3xl",
        !isMultiColumn && "custom-scrollbar"
      )}
    >
      <PostsWrapper>
        {hasCreatePost && <CreatePostInput onCreateClick={handleCreatePost} />}

        <div className="divide-y">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} showReply={showReply} />
          ))}
        </div>
      </PostsWrapper>
    </div>
  );
}
