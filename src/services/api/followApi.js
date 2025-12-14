import { apiSlice } from "./apiSlice";

export const followApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    followUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}/follow`,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "User", id },
        { type: "Follow", id },
      ],
    }),
    unfollowUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}/follow`,
        method: "POST",
        body: { _method: "DELETE" },
      }),
      invalidatesTags: (result, error, id) => [
        { type: "User", id },
        { type: "Follow", id },
      ],
    }),
    getFollowers: builder.query({
      query: ({ id, params }) => ({
        url: `/api/users/${id}/followers`,
        params,
      }),
      providesTags: (result, error, { id }) => [
        { type: "Follow", id: `${id}-followers` },
      ],
    }),
    getFollowings: builder.query({
      query: ({ id, params }) => ({
        url: `/api/users/${id}/followings`,
        params,
      }),
      providesTags: (result, error, { id }) => [
        { type: "Follow", id: `${id}-followings` },
      ],
    }),
  }),
});

export const {
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetFollowersQuery,
  useGetFollowingsQuery,
} = followApi;
