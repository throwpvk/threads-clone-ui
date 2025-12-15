/**
 * Column types for HomePage
 * Mỗi type tương ứng với một loại feed/content khác nhau
 */
export const COLUMN_TYPES = {
  FOR_YOU: "for-you",
  FOLLOWING: "following",
  GHOST_POSTS: "ghost-posts",
  ACTIVITY: "activity",
  SEARCH: "search",
  PROFILE: "profile",
};

/**
 * Column configuration
 * Chứa metadata cho mỗi loại column
 */
export const COLUMN_CONFIG = {
  [COLUMN_TYPES.FOR_YOU]: {
    label: "For you",
  },
  [COLUMN_TYPES.FOLLOWING]: {
    label: "Following",
  },
  [COLUMN_TYPES.GHOST_POSTS]: {
    label: "Ghost posts",
  },
  [COLUMN_TYPES.ACTIVITY]: {
    label: "Activity",
  },
  [COLUMN_TYPES.SEARCH]: {
    label: "Search",
  },
  [COLUMN_TYPES.PROFILE]: {
    label: "Profile",
  },
};

/**
 * Switchable column types - có thể switch giữa các tab này
 * Chỉ áp dụng cho For You, Following, Ghost Posts
 */
export const SWITCHABLE_COLUMN_TYPES = [
  COLUMN_TYPES.FOR_YOU,
  COLUMN_TYPES.FOLLOWING,
  COLUMN_TYPES.GHOST_POSTS,
];

/**
 * Available column types for dropdown menu
 */
export const AVAILABLE_COLUMN_TYPES = [
  COLUMN_TYPES.FOR_YOU,
  COLUMN_TYPES.FOLLOWING,
  COLUMN_TYPES.GHOST_POSTS,
  COLUMN_TYPES.ACTIVITY,
  COLUMN_TYPES.SEARCH,
  COLUMN_TYPES.PROFILE,
];
