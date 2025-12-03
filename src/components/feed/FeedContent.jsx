import React from "react";
import { FeedHeader } from "@/components/feed";
import { CreatePostInput, PostCard, PostsWrapper } from "@/components/posts";
import { getPostsWithUserInfo } from "@/data/mockData";

export default function FeedContent() {
  const posts = getPostsWithUserInfo();

  const handleCreatePost = () => {
    // TODO: Mở modal create post (Phase 2-3)
    console.log("Open create post modal");
  };

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-tl-3xl rounded-tr-3xl border border-border border-b-0 drop-shadow-md drop-shadow-b-0 mx-2 bg-card">
      <PostsWrapper>
        <CreatePostInput onCreateClick={handleCreatePost} />

        <div className="divide-y">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} showReply={true} />
          ))}
        </div>
      </PostsWrapper>
    </div>
  );
}
