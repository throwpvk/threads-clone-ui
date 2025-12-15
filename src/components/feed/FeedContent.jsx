import React, { useEffect } from "react";
import {
  CreatePostInput,
  PostCard,
  PostsWrapper,
  PlaceholderPost,
} from "@/components/posts";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function FeedContent({
  hasCreatePost = false,
  onCreatePost,
  posts = [],
  showReply = true,
  isMultiColumn = false,
  onLoadMore,
  hasMore = false,
  emptyLabel = "posts",
  columnCount = 1,
}) {
  const pageLocation = useLocation();
  const isActivity = pageLocation.pathname === "/activity";
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "400px",
  });

  useEffect(() => {
    if (inView && hasMore && onLoadMore) {
      onLoadMore();
    }
  }, [inView, hasMore, onLoadMore]);

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
        "flex flex-col h-full overflow-hidden border border-border border-b-0 md:drop-shadow-xs md:mx-2 bg-card md:rounded-t-3xl",
        !isMultiColumn && "custom-scrollbar"
      )}
    >
      <PostsWrapper>
        {!isActivity && hasCreatePost && (
          <CreatePostInput onCreateClick={handleCreatePost} />
        )}

        <div className="divide-y">
          {posts.length === 0 && (
            <PlaceholderPost label={emptyLabel} columnCount={columnCount} />
          )}
          {posts.map((post) => (
            <PostCard key={post.id} post={post} showReply={showReply} />
          ))}
          {hasMore && <div ref={ref} className="h-4 w-full" />}
        </div>
      </PostsWrapper>
    </div>
  );
}
