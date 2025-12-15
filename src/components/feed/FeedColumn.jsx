import React from "react";
import clsx from "clsx";
import FeedContent from "./FeedContent";
import Header from "../common/Header";

const tabDefault = [{ id: "default", label: "Feed" }];

export default function FeedColumn({
  tabs = tabDefault,
  columnCount = 1,
  activeTab = "default",
  onTabChange,
  hasOptions = true,
  hasCreatePost = false,
  onCreatePost,
  posts = [],
  showReply = true,
  renderFilters,
  enableScroll = false,
  onLoadMore,
  hasMore,
  onChangeType,
  currentType,
  columnIndex = 0,
  onRemoveColumn,
  emptyLabel = "posts",
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
        onChangeType={onChangeType}
        currentType={currentType}
        columnIndex={columnIndex}
        onRemoveColumn={onRemoveColumn}
      />

      {renderFilters && renderFilters}

      <FeedContent
        hasCreatePost={hasCreatePost}
        onCreatePost={onCreatePost}
        posts={posts}
        showReply={showReply}
        columnCount={columnCount}
        onLoadMore={onLoadMore}
        hasMore={hasMore}
        emptyLabel={emptyLabel}
      />
    </section>
  );
}
