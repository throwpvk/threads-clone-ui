import React, { useState } from "react";
import { ColumnsManager } from "@/components/columns";
import { FeedColumn } from "@/components/feed";
import { getPostsWithUserInfo } from "@/data/mockData";

export default function ForYouPage() {
  const [columns, setColumns] = useState([
    { id: "for-you-main", title: "For you", width: "640px" },
  ]);

  const posts = getPostsWithUserInfo();

  const handleCreatePost = () => {
    console.log("Open create post modal");
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: `Feed ${columns.length + 1}`,
      width: "520px",
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
            tabs={[{ id: "for-you", label: "For you" }]}
            activeTab="for-you"
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
