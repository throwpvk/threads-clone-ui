import { apiSlice } from "./apiSlice";

export const fileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadAvatar: builder.mutation({
      query: (formData) => ({
        url: "/api/upload/avatar",
        method: "POST",
        body: formData,
      }),
    }),
    uploadMedia: builder.mutation({
      query: (formData) => ({
        url: "/api/upload/media",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadAvatarMutation, useUploadMediaMutation } = fileApi;
