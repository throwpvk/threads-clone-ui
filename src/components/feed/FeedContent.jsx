import React from "react";
import { FeedHeader } from "@/components/feed";
import { CreatePostInput, PostCard, PostsWrapper } from "@/components/posts";
import { getPostsWithUserInfo } from "@/data/mockData";

export default function FeedContent({ activeTab = "for-you", onTabChange }) {
  const posts = getPostsWithUserInfo();

  const handleCreatePost = () => {
    // TODO: Mở modal create post (Phase 2-3)
    console.log("Open create post modal");
  };

  return (
    <div className="flex flex-col h-full">
      <FeedHeader activeTab={activeTab} onTabChange={onTabChange} />

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
