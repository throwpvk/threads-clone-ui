import React, { useState, useEffect } from "react";
import { ColumnsManager } from "@/components/columns";
import { FeedColumn } from "@/components/feed";
import { getPostsWithUserInfo } from "@/data/mockData";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/features/auth/authSlice";
import LoginCard from "@/components/login/LoginCard";
import { useGetFeedQuery } from "@/services/api/postsApi";

const tabs = [
  { id: "for-you", label: "For you" },
  { id: "following", label: "Following" },
  { id: "ghost-posts", label: "Ghost posts" },
];

export default function HomePage() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [activeTab, setActiveTab] = useState("for-you");
  const [columns, setColumns] = useState([
    { id: "for-you-main", title: "For you", width: "640px" },
  ]);
  const [page, setPage] = useState(1);

  const { data: feedData, isFetching } = useGetFeedQuery(
    {
      type: activeTab === "for-you" ? "for_you" : "following",
      page,
      per_page: 15,
    },
    {
      skip: activeTab !== "for-you" && activeTab !== "following",
    }
  );

  useEffect(() => {
    setPage(1);
  }, [activeTab]);

  const posts =
    activeTab === "for-you" || activeTab === "following"
      ? feedData?.data || []
      : getPostsWithUserInfo();

  const hasMore = feedData?.pagination
    ? feedData.pagination.current_page < feedData.pagination.last_page
    : false;

  const handleLoadMore = () => {
    if (!isFetching && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

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
    <>
      <ColumnsManager
        columns={columns.map((col) => ({
          ...col,
          content: (
            <FeedColumn
              tabs={isAuthenticated ? tabs : [{ id: "home", label: "Home" }]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              hasCreatePost={isAuthenticated}
              onCreatePost={handleCreatePost}
              posts={posts}
              showReply={true}
              enableScroll={columns.length > 1}
              onLoadMore={handleLoadMore}
              hasMore={hasMore}
            />
          ),
        }))}
        hasAddColumnBtn={isAuthenticated}
        onAddColumn={handleAddColumn}
      />
      {!isAuthenticated && (
        <div className="fixed top-15 z-50 w-90 hidden xl:block md:left-[calc(50%+290px)] lg:left-[calc(50%+338px)]">
          <LoginCard
            title="Log in or sign up for Threads"
            disc="See what people are talking about and join the conversation."
            className="py-5! px-4!"
            titleClassName="text-2xl!"
            descClassName="text-base!"
            shadow={false}
            bgColor="bg-accent"
            contentBgColor="bg-card"
          />
        </div>
      )}
    </>
  );
}
