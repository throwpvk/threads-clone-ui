import React from "react";
import clsx from "clsx";
import FeedContent from "./FeedContent";
import Header from "../common/Header";

const tabDefault = [{ id: "default", label: "Feed" }];

export default function FeedColumn({
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

      <FeedContent
        hasCreatePost={hasCreatePost}
        onCreatePost={onCreatePost}
        posts={posts}
        showReply={showReply}
        isMultiColumn={isMultiColumn}
      />
    </section>
  );
}
