import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mms-it.com/api/v1",
  }),
  tagTypes: ["auth"],
  endpoints: (buidler) => ({
    register: buidler.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    login: buidler.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    logout: buidler.mutation({
      query: (token) => ({
        url: "/user-logout",
        method: "POST",
        headers : {authorization : `Bearer ${token}`}
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation ,useLogoutMutation} = authApi;
