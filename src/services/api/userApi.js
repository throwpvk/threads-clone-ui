import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (username) => `/api/users/${username}`,
      providesTags: (result, error, username) => [
        { type: "User", id: username },
      ],
    }),
    updateProfile: builder.mutation({
      query: (body) => {
        if (body instanceof FormData) {
          body.append("_method", "PUT");
        } else {
          body = { ...body, _method: "PUT" };
        }
        return {
          url: "/api/users/profile",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
    muteUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}/mute`,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
    unmuteUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}/mute`,
        method: "POST",
        body: { _method: "DELETE" },
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
    restrictUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}/restrict`,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
    blockUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}/block`,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
    unblockUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}/block`,
        method: "POST",
        body: { _method: "DELETE" },
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
    getFollowSuggestions: builder.query({
      query: (params) => ({
        url: "/api/users/suggestions",
        params,
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
  useMuteUserMutation,
  useUnmuteUserMutation,
  useRestrictUserMutation,
  useBlockUserMutation,
  useUnblockUserMutation,
  useGetFollowSuggestionsQuery,
} = userApi;
