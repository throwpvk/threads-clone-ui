import React, { useState } from "react";
import { ColumnsManager } from "@/components/columns";
import { FeedColumn } from "@/components/feed";
import { getPostsWithUserInfo } from "@/data/mockData";

export default function GhostPostsPage() {
  const [filter, setFilter] = useState("all"); // 'all' | 'mine'
  const [columns, setColumns] = useState([
    { id: "ghost-main", title: "Ghost Posts" },
  ]);

  // Filter ghost posts (>24h old) - mock: show all for now
  const posts = getPostsWithUserInfo();

  const handleAddColumn = () => {
    const newColumn = {
      id: `column-${Date.now()}`,
      title: `Ghost ${columns.length + 1}`,
    };
    setColumns([...columns, newColumn]);
  };

  // Custom filters render
  const renderFilters = (
    <div className="border-b px-4 py-2 flex gap-2">
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-1 text-sm rounded-full transition-colors ${
          filter === "all"
            ? "bg-foreground text-background"
            : "bg-muted text-muted-foreground hover:bg-accent"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("mine")}
        className={`px-3 py-1 text-sm rounded-full transition-colors ${
          filter === "mine"
            ? "bg-foreground text-background"
            : "bg-muted text-muted-foreground hover:bg-accent"
        }`}
      >
        Mine
      </button>
    </div>
  );

  return (
    <ColumnsManager
      columns={columns.map((col) => ({
        ...col,
        content: (
          <FeedColumn
            isMultiColumn={columns.length > 1}
            tabs={[{ id: "ghost-posts", label: "Ghost posts" }]}
            activeTab="ghost-posts"
            hasCreatePost={false}
            posts={posts}
            showReply={false}
            renderFilters={renderFilters}
            enableScroll={columns.length > 1}
          />
        ),
      }))}
      hasAddColumnBtn={true}
      onAddColumn={handleAddColumn}
    />
  );
}
