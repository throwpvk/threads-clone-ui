import { apiSlice } from "./apiSlice";

export const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query({
      query: (params) => ({
        url: "/api/search",
        params,
      }),
    }),
    searchTopics: builder.query({
      query: (params) => ({
        url: "/api/topics/search",
        params,
      }),
    }),
  }),
});

export const { useSearchQuery, useSearchTopicsQuery } = searchApi;
