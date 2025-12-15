import React, { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { FeedColumn } from "@/components/feed";
import { SearchColumn } from "@/components/search";
import { ProfileColumn } from "@/components/profile";
import { COLUMN_TYPES, COLUMN_CONFIG } from "@/constants/columnTypes";
import { useGetFeedQuery } from "@/services/api/postsApi";
import { useGetUserFollowingsQuery } from "@/services/api/userApi";
import { selectCurrentUser } from "@/features/auth/authSlice";
import { getPostsWithUserInfo } from "@/data/mockData";

/**
 * ColumnContent - Wrapper component để render nội dung cho từng loại column
 * Mỗi column type sẽ có logic riêng để fetch và hiển thị data
 */
export default function ColumnContent({
  type,
  enableScroll = false,
  onChangeType,
  columnIndex = 0,
  onRemoveColumn,
}) {
  const [page, setPage] = useState(1);
  const currentUser = useSelector(selectCurrentUser);

  // Reset page khi type thay đổi
  React.useEffect(() => {
    setPage(1);
  }, [type]);

  // For You feed
  const { data: forYouData, isFetching: isForYouFetching } = useGetFeedQuery(
    {
      type: "for_you",
      page,
      per_page: 15,
    },
    {
      skip: type !== COLUMN_TYPES.FOR_YOU,
    }
  );

  // Following feed
  const {
    data: followingData,
    isFetching: isFollowingFetching,
    error: followingError,
  } = useGetUserFollowingsQuery(
    {
      id: currentUser?.id,
      params: {
        page,
        per_page: 15,
      },
    },
    {
      skip: type !== COLUMN_TYPES.FOLLOWING || !currentUser?.id,
    }
  );

  // Debug logging for Following
  React.useEffect(() => {
    if (type === COLUMN_TYPES.FOLLOWING) {
      console.log("[ColumnContent] Following Feed Debug:", {
        currentUserId: currentUser?.id,
        followingData,
        followingError,
        isFetching: isFollowingFetching,
        dataCount: followingData?.data?.length || 0,
      });
    }
  }, [type, followingData, followingError, isFollowingFetching, currentUser]);

  // Ghost Posts - Sử dụng feed API và filter client-side
  const {
    data: ghostPostsData,
    isFetching: isGhostPostsFetching,
    error: ghostPostsError,
  } = useGetFeedQuery(
    {
      type: "for_you",
      page,
      per_page: 15,
    },
    {
      skip: type !== COLUMN_TYPES.GHOST_POSTS,
    }
  );

  // Debug logging for Ghost Posts
  React.useEffect(() => {
    if (type === COLUMN_TYPES.GHOST_POSTS) {
      const ghostPosts = (ghostPostsData?.data || []).filter(
        (post) => post.is_ghost
      );
      console.log("[ColumnContent] Ghost Posts Debug:", {
        rawDataCount: ghostPostsData?.data?.length || 0,
        ghostPostsCount: ghostPosts.length,
        ghostPostsError,
        isFetching: isGhostPostsFetching,
        sampleGhostPost: ghostPosts[0],
      });
    }
  }, [type, ghostPostsData, ghostPostsError, isGhostPostsFetching]);

  // Activity (Liked posts) - Sử dụng feed API và filter client-side
  const {
    data: activityData,
    isFetching: isActivityFetching,
    error: activityError,
  } = useGetFeedQuery(
    {
      type: "for_you",
      page,
      per_page: 15,
    },
    {
      skip: type !== COLUMN_TYPES.ACTIVITY,
    }
  );

  // Debug logging for Activity
  React.useEffect(() => {
    if (type === COLUMN_TYPES.ACTIVITY) {
      const likedPosts = (activityData?.data || []).filter(
        (post) => post.is_liked_by_auth
      );
      console.log("[ColumnContent] Activity Debug:", {
        rawDataCount: activityData?.data?.length || 0,
        likedPostsCount: likedPosts.length,
        activityError,
        isFetching: isActivityFetching,
        sampleLikedPost: likedPosts[0],
      });
    }
  }, [type, activityData, activityError, isActivityFetching]);

  // Determine data source based on column type
  const { posts, pagination, isFetching } = useMemo(() => {
    switch (type) {
      case COLUMN_TYPES.FOR_YOU:
        return {
          posts: forYouData?.data || [],
          pagination: forYouData?.pagination,
          isFetching: isForYouFetching,
        };

      case COLUMN_TYPES.FOLLOWING:
        return {
          posts: followingData?.data || [],
          pagination: followingData?.pagination,
          isFetching: isFollowingFetching,
        };

      case COLUMN_TYPES.GHOST_POSTS:
        return {
          posts: (ghostPostsData?.data || []).filter((post) => post.is_ghost),
          pagination: ghostPostsData?.pagination,
          isFetching: isGhostPostsFetching,
        };

      case COLUMN_TYPES.ACTIVITY:
        return {
          posts: (activityData?.data || []).filter(
            (post) => post.is_liked_by_auth
          ),
          pagination: activityData?.pagination,
          isFetching: isActivityFetching,
        };

      case COLUMN_TYPES.SEARCH:
        // TODO: Implement search page
        return { posts: [], pagination: null, isFetching: false };

      case COLUMN_TYPES.PROFILE:
        // TODO: Implement profile page
        return { posts: [], pagination: null, isFetching: false };

      default:
        return { posts: [], pagination: null, isFetching: false };
    }
  }, [
    type,
    forYouData,
    followingData,
    ghostPostsData,
    activityData,
    isForYouFetching,
    isFollowingFetching,
    isGhostPostsFetching,
    isActivityFetching,
  ]);

  const hasMore = pagination
    ? pagination.current_page < pagination.last_page
    : false;

  const handleLoadMore = useCallback(() => {
    if (!isFetching && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [isFetching, hasMore]);

  const handleCreatePost = () => {
    console.log("Open create post modal");
  };

  // Get column config
  const config = COLUMN_CONFIG[type];

  // Render Search Column
  if (type === COLUMN_TYPES.SEARCH) {
    const allPosts = getPostsWithUserInfo();
    return (
      <SearchColumn
        tabs={[{ id: "search", label: config.label }]}
        activeTab="search"
        onTabChange={() => {}}
        onSearch={() => console.log("Search")}
        posts={allPosts}
        showReply={true}
        enableScroll={enableScroll}
        hasOptions={false}
      />
    );
  }

  // Render Profile Column
  if (type === COLUMN_TYPES.PROFILE) {
    const allPosts = getPostsWithUserInfo();
    const userPosts = allPosts.filter(
      (post) => post.user.id === currentUser?.id
    );
    return (
      <ProfileColumn
        tabs={[{ id: "profile", label: config.label }]}
        activeTab="profile"
        onTabChange={() => {}}
        user={currentUser}
        posts={userPosts}
        showReply={true}
        enableScroll={enableScroll}
        isOwnProfile={true}
        isFinish={true}
        hasOptions={false}
      />
    );
  }

  return (
    <FeedColumn
      tabs={[{ id: type, label: config.label }]}
      activeTab={type}
      onTabChange={() => {}}
      hasCreatePost={type === COLUMN_TYPES.FOR_YOU}
      onCreatePost={handleCreatePost}
      posts={posts}
      showReply={true}
      enableScroll={enableScroll}
      onLoadMore={handleLoadMore}
      hasMore={hasMore}
      onChangeType={onChangeType}
      currentType={type}
      columnIndex={columnIndex}
      onRemoveColumn={onRemoveColumn}
    />
  );
}
