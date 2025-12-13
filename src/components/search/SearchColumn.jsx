import React from "react";
import clsx from "clsx";
import SearchContent from "./SearchContent";
import Header from "../header/Header";

const tabDefault = [{ id: "default", label: "Feed" }];

export default function SearchColumn({
  tabs = tabDefault,
  isMultiColumn = false,
  activeTab = "default",
  onTabChange,
  hasOptions = true,
  hasCreatePost = false,
  onCreatePost,
  posts = [],
  showReply = true,
  renderFilters,
  enableScroll = false,
}) {
  return (
    <section
      className={clsx("rounded-xl border-0 relative", {
        "h-screen flex flex-col": enableScroll,
        "h-full": !enableScroll,
      })}
    >
      <Header
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        hasOptions={hasOptions}
      />

      {renderFilters && renderFilters}

      <SearchContent
        hasCreatePost={hasCreatePost}
        onCreatePost={onCreatePost}
        posts={posts}
        showReply={showReply}
        isMultiColumn={isMultiColumn}
      />
    </section>
  );
}
