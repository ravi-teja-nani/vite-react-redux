import { createSlice } from "@reduxjs/toolkit";

export interface UsersSlice {
  user: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

const initialState: UsersSlice = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
  },
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
