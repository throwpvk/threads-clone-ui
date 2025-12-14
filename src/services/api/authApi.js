import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/api/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
        method: "POST",
      }),
    }),
    getMe: builder.query({
      query: () => "/api/auth/user",
      providesTags: ["User"],
    }),
    validateUsername: builder.mutation({
      query: (body) => ({
        url: "/api/auth/validate/username",
        method: "POST",
        body,
      }),
    }),
    validateEmail: builder.mutation({
      query: (body) => ({
        url: "/api/auth/validate/email",
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "/api/auth/forgot-password",
        method: "POST",
        body,
      }),
    }),
    validateResetToken: builder.query({
      query: (token) => `/api/auth/reset-password/validate?token=${token}`,
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/api/auth/reset-password",
        method: "POST",
        body,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (body) => ({
        url: "/api/auth/verify-email",
        method: "POST",
        body,
      }),
    }),
    resendVerificationEmail: builder.mutation({
      query: () => ({
        url: "/api/auth/resend-verification-email",
        method: "POST",
      }),
    }),
    deleteAccount: builder.mutation({
      query: (body) => ({
        url: "/api/auth/account",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetMeQuery,
  useValidateUsernameMutation,
  useValidateEmailMutation,
  useForgotPasswordMutation,
  useValidateResetTokenQuery,
  useResetPasswordMutation,
  useVerifyEmailMutation,
  useResendVerificationEmailMutation,
  useDeleteAccountMutation,
} = authApi;
