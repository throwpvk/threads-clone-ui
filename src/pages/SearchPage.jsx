import React, { useState } from "react";
import { ColumnsManager } from "@/components/columns";
import { getPostsWithUserInfo } from "@/data/mockData";
import { SearchColumn } from "@/components/search";

const tabs = [{ id: "search", label: "Search" }];

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState("search");
  const [columns, setColumns] = useState([
    { id: "search-main", title: "search", width: "640px" },
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

  const handleSearch = () => {
    console.log("Open search modal");
  };

  return (
    <ColumnsManager
      columns={columns.map((col) => ({
        ...col,
        content: (
          <SearchColumn
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onSearch={handleSearch}
            posts={posts}
            showReply={true}
            enableScroll={columns.length > 1}
          />
        ),
      }))}
      hasAddColumnBtn={false}
      onAddColumn={handleAddColumn}
    />
  );
}
