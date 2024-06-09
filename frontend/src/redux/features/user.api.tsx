import { Book } from "../../types/book.type";
import {
  User,
  UserLogin,
  UserRegister,
  UserUpdate,
} from "../../types/user.type";
import apiSlice from "../api.slice";
import { USER_URL } from "../constants";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<User, UserRegister>({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation<User, UserLogin>({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),

    getUsers: builder.query<User[], void>({
      query: () => `${USER_URL}/admin`,
      providesTags: ["User"],
    }),

    deleteUserById: builder.mutation<{}, string>({
      query: (id) => ({
        url: `${USER_URL}/admin/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    getUser: builder.query<User, void>({
      query: () => `${USER_URL}/user`,
    }),

    updateUser: builder.mutation<User, UserUpdate>({
      query: (data) => ({
        url: `${USER_URL}/user`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation<{}, void>({
      query: () => ({
        url: `${USER_URL}/user`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    getFavourites: builder.query<Book[], void>({
      query: () => `${USER_URL}/user/favourites`,
    }),

    addFavourites: builder.mutation<void, { bookId: string }>({
      query: (data) => ({
        url: `${USER_URL}/user/favourites`,
        method: "POST",
        body: data,
      }),
    }),

    deleteFavourite: builder.mutation<{}, { bookId: string }>({
      query: (data) => ({
        url: `${USER_URL}/user/favourites`,
        method: "DELETE",
        body: data,
      }),
    }),

    deleteAllFavourites: builder.mutation<void, void>({
      query: () => ({
        url: `${USER_URL}/user/favourites/all`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useDeleteUserByIdMutation,
  useAddFavouritesMutation,
  useDeleteFavouriteMutation,
  useDeleteAllFavouritesMutation,
  useGetFavouritesQuery,
  useGetUsersQuery,
  useGetUserQuery,
} = userApi;
