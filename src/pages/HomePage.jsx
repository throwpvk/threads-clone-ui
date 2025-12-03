import React, { useState } from "react";
import { ColumnsManager } from "@/components/columns";
import { FeedColumn } from "@/components/feed";
import { getPostsWithUserInfo } from "@/data/mockData";

const tabs = [
  { id: "for-you", label: "For you" },
  { id: "following", label: "Following" },
  { id: "ghost-posts", label: "Ghost posts" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("for-you");
  const [columns, setColumns] = useState([
    { id: "for-you-main", title: "For you", width: "640px" },
  ]);

  const posts = getPostsWithUserInfo();

  const handleAddColumn = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: `Feed ${columns.length + 1}`,
      width: "520px",
    };
    setColumns([...columns, newColumn]);
  };

  const handleCreatePost = () => {
    console.log("Open create post modal");
  };

  return (
    <ColumnsManager
      columns={columns.map((col) => ({
        ...col,
        content: (
          <FeedColumn
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
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
