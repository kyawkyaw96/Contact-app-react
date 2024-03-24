import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact.sankyitar.store/api/v1/",
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: ({ token }) => ({
        url: "/contact",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    getSingleContact: builder.query({
      query: ({ token, id }) => ({
        url: `/contact/${id}`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["contact"],
    }),
    deleteContacts: builder.mutation({
      query: ({ id, token }) => ({
        url: `/contact/${id}`,
        method: "DELETE",
        body: id,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    createContacts: builder.mutation({
      query: ({ contact, token }) => ({
        url: `/contact`,
        method: "POST",
        body: contact,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
    updateContacts: builder.mutation({
      query: ({ id, contact, token }) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: contact,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
  useUpdateContactsMutation,
  useGetSingleContactQuery,
} = contactApi;
