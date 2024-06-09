import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "Book", "Genre", "Review"],
  endpoints: () => ({}),
});

export default apiSlice;
