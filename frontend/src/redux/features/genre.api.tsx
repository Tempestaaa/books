import { Genre } from "../../types/genre.type";
import apiSlice from "../api.slice";
import { GENRE_URL } from "../constants";

const genreApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createGenre: builder.mutation<Genre, Omit<Genre, "_id">>({
      query: (data) => ({
        url: `${GENRE_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Genre"],
    }),

    updateGenre: builder.mutation<Genre, { _id: string; data: Genre }>({
      query: (data) => ({
        url: `${GENRE_URL}/genre/${data._id}`,
        method: "PUT",
        body: data.data,
      }),
      invalidatesTags: ["Genre"],
    }),

    deleteGenre: builder.mutation<{}, string>({
      query: (id) => ({
        url: `${GENRE_URL}/genre/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Genre"],
    }),

    getGenres: builder.query<Genre[], void>({
      query: () => `${GENRE_URL}`,
      providesTags: ["Genre"],
    }),

    getGenre: builder.query<Genre, string>({
      query: (id) => `${GENRE_URL}/genre/${id}`,
    }),
  }),
});

export const {
  useCreateGenreMutation,
  useUpdateGenreMutation,
  useDeleteGenreMutation,
  useGetGenreQuery,
  useGetGenresQuery,
} = genreApi;
