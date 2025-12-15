import { apiSlice } from "./apiSlice";

export const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeed: builder.query({
      query: (params) => ({
        url: "/api/posts/feed",
        params,
      }),
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        const { page, ...rest } = queryArgs;
        return `${endpointName}(${JSON.stringify(rest)})`;
      },
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          return newItems;
        }
        currentCache.data.push(...newItems.data);
        currentCache.pagination = newItems.pagination;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      providesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (id) => `/api/posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "/api/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: ({ id, body }) => {
        // If body is FormData, we append _method: PUT
        // If it's JSON, we might need to adjust, but usually update involves media so FormData is likely
        if (body instanceof FormData) {
          body.append("_method", "PUT");
        } else {
          body = { ...body, _method: "PUT" };
        }
        return {
          url: `/api/posts/${id}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/api/posts/${id}`,
        method: "POST",
        body: { _method: "DELETE" },
      }),
      invalidatesTags: ["Post"],
    }),
    getReplies: builder.query({
      query: ({ id, params }) => ({
        url: `/api/posts/${id}/replies`,
        params,
      }),
      providesTags: (result, error, { id }) => [
        { type: "Post", id: `${id}-replies` },
      ],
    }),
    getUserReposts: builder.query({
      query: ({ userId, params }) => ({
        url: `/api/users/${userId}/reposts`,
        params,
      }),
    }),
    createReply: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/posts/${id}/reply`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Post", id: `${id}-replies` },
        { type: "Post", id },
      ],
    }),
    getPendingReplies: builder.query({
      query: ({ id, params }) => ({
        url: `/api/posts/${id}/pending-replies`,
        params,
      }),
    }),
    approveReply: builder.mutation({
      query: ({ id, replyId }) => ({
        url: `/api/posts/${id}/replies/${replyId}/approve`,
        method: "POST",
      }),
    }),
    likePost: builder.mutation({
      query: (id) => ({
        url: `/api/posts/${id}/like`,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Post", id }],
    }),
    repostPost: builder.mutation({
      query: (id) => ({
        url: `/api/posts/${id}/repost`,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Post", id }],
    }),
    quotePost: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/posts/${id}/quote`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),
    savePost: builder.mutation({
      query: (id) => ({
        url: `/api/posts/${id}/save`,
        method: "POST",
      }),
    }),
    hidePost: builder.mutation({
      query: (id) => ({
        url: `/api/posts/${id}/hide`,
        method: "POST",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetFeedQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetRepliesQuery,
  useGetUserRepostsQuery,
  useCreateReplyMutation,
  useGetPendingRepliesQuery,
  useApproveReplyMutation,
  useLikePostMutation,
  useRepostPostMutation,
  useQuotePostMutation,
  useSavePostMutation,
  useHidePostMutation,
} = postsApi;
