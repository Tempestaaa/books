import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user.type";

const initialState: { userInfo: User | null } = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    logOut: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
