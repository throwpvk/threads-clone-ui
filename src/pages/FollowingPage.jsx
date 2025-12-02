import React, { useState } from "react";
import { ColumnsManager } from "@/components/columns";
import { FeedColumn, FeedHeader } from "@/components/feed";
import { CreatePostInput, PostCard, PostsWrapper } from "@/components/posts";
import { getPostsWithUserInfo } from "@/data/mockData";

export default function FollowingPage() {
  const [activeTab, setActiveTab] = useState("following");
  const [columns, setColumns] = useState([
    { id: "following-main", title: "Following" },
  ]);

  // Filter posts từ users đã follow (mock: show all for now)
  const posts = getPostsWithUserInfo();

  const handleCreatePost = () => {
    console.log("Open create post modal");
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: `Following ${columns.length + 1}`,
    };
    setColumns([...columns, newColumn]);
  };

  return (
    <ColumnsManager
      columns={columns.map((col) => ({
        ...col,
        content: (
          <FeedColumn enableScroll={columns.length > 1}>
            <div className="flex flex-col h-full">
              <FeedHeader activeTab={activeTab} onTabChange={setActiveTab} />

              <PostsWrapper>
                <CreatePostInput onCreateClick={handleCreatePost} />

                <div className="divide-y">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} showReply={true} />
                  ))}
                </div>
              </PostsWrapper>
            </div>
          </FeedColumn>
        ),
      }))}
      hasAddColumnBtn={true}
      onAddColumn={handleAddColumn}
    />
  );
}
