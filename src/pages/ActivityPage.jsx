import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ColumnsManager } from "@/components/columns";
import { FeedColumn } from "@/components/feed";
import { useGetFeedQuery } from "@/services/api/postsApi";

const tabs = [{ id: "activity", label: "Activity" }];

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("activity");
  const [columns, setColumns] = useState([
    { id: "activity-main", title: "Activity", width: "640px" },
  ]);
  const [page, setPage] = useState(1);

  const {
    data: activityData,
    isFetching,
    error,
  } = useGetFeedQuery({
    type: "for_you",
    page,
    per_page: 15,
  });

  // Debug logging for Activity
  useEffect(() => {
    const likedPosts = (activityData?.data || []).filter(
      (post) => post.is_liked_by_auth
    );
    console.log("[ActivityPage] Debug:", {
      rawDataCount: activityData?.data?.length || 0,
      likedPostsCount: likedPosts.length,
      error,
      isFetching,
      sampleLikedPost: likedPosts[0],
    });
  }, [activityData, error, isFetching]);

  // Filter posts that are liked by auth user
  const posts = useMemo(() => {
    return (activityData?.data || []).filter((post) => post.is_liked_by_auth);
  }, [activityData]);

  const hasMore = activityData?.pagination
    ? activityData.pagination.current_page < activityData.pagination.last_page
    : false;

  const handleLoadMore = useCallback(() => {
    if (!isFetching && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [isFetching, hasMore]);

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
            hasCreatePost={false}
            onCreatePost={handleCreatePost}
            posts={posts}
            showReply={true}
            enableScroll={columns.length > 1}
            hasOptions={false}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
            emptyLabel="activity"
            isSingle={columns.length === 1}
          />
        ),
      }))}
      hasAddColumnBtn={false}
      onAddColumn={handleAddColumn}
    />
  );
}
