import { Book, BookCreate } from "../../types/book.type";
import { ReviewType } from "../../types/review.type";
import apiSlice from "../api.slice";
import { BOOK_URL, UPLOAD_URL } from "../constants";

const bookApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBook: builder.mutation<
      Book,
      Omit<Book, "_id" | "numberOfReviews" | "reviews">
    >({
      query: (data) => ({
        url: `${BOOK_URL}/admin/book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),

    updateBook: builder.mutation<Book, { _id: string; data: BookCreate }>({
      query: (data) => ({
        url: `${BOOK_URL}/admin/book/${data._id}`,
        method: "PUT",
        body: data.data,
      }),
      invalidatesTags: ["Book"],
    }),

    deleteBook: builder.mutation<{}, string>({
      query: (id) => ({
        url: `${BOOK_URL}/admin/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),

    getBooks: builder.query<Book[], void>({
      query: () => `${BOOK_URL}`,
      providesTags: ["Book"],
    }),

    getBook: builder.query<Book, string>({
      query: (id) => `${BOOK_URL}/book/${id}`,
      providesTags: ["Book"],
    }),

    uploadCover: builder.mutation<string, FormData>({
      query: (data) => ({
        url: `${UPLOAD_URL}/cover`,
        method: "POST",
        body: data,
      }),
    }),

    createReview: builder.mutation<
      ReviewType,
      { id: string; data: Omit<ReviewType, "_id"> }
    >({
      query: (data) => ({
        url: `${BOOK_URL}/book/${data.id}/reviews`,
        method: "POST",
        body: data.data,
      }),
      invalidatesTags: ["Book"],
    }),

    deleteReviewAdmin: builder.mutation<
      {},
      { book_Id: string; review_Id: string }
    >({
      query: (data) => ({
        url: `${BOOK_URL}/admin/reviews`,
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useUploadCoverMutation,
  useCreateReviewMutation,
  useDeleteReviewAdminMutation,
  useGetBooksQuery,
  useGetBookQuery,
} = bookApi;
