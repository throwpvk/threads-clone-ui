import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { storage } from "@/lib/storage";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    const token = storage.getToken();
    if (token?.access_token) {
      headers.set("authorization", `Bearer ${token.access_token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const token = storage.getToken();

    if (token?.refresh_token) {
      const refreshResult = await baseQuery(
        {
          url: "/api/auth/refresh",
          method: "POST",
          body: { refresh_token: token.refresh_token },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const newToken = {
          ...token,
          access_token: refreshResult.data.access_token,
          refresh_token:
            refreshResult.data.refresh_token || token.refresh_token,
        };
        storage.setToken(newToken);

        result = await baseQuery(args, api, extraOptions);
      } else {
        storage.clearToken();
        // Optional: Dispatch logout action
        // api.dispatch(logout());
      }
    } else {
      storage.clearToken();
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Post", "Comment", "Follow", "Notification"],
  endpoints: (builder) => ({}),
});
