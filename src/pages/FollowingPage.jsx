import React, { useState } from "react";
import { ColumnsManager } from "@/components/columns";
import { FeedColumn } from "@/components/feed";
import { getPostsWithUserInfo } from "@/data/mockData";

export default function FollowingPage() {
  const [columns, setColumns] = useState([
    { id: "following-main", title: "Following" },
  ]);

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
          <FeedColumn
            isMultiColumn={columns.length > 1}
            tabs={[{ id: "following", label: "Following" }]}
            activeTab="following"
            hasCreatePost={true}
            onCreatePost={handleCreatePost}
            posts={posts}
            showReply={true}
            enableScroll={columns.length > 1}
          />
        ),
      }))}
      hasAddColumnBtn={true}
      onAddColumn={handleAddColumn}
    />
  );
}
