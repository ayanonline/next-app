import { createSlice } from "@reduxjs/toolkit";
import { authorizeUser } from "../actions/authorizeUser";

const userSlice: any = createSlice({
  name: "user",
  initialState: { isAuthenticated: false, error: <any>null },
  reducers: {
    setAuthenticated: (state, action) => {
      return { ...state, isAuthenticated: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizeUser.pending, (state, action) => {
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(authorizeUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export const { setAuthenticated } = userSlice.actions;
export default userSlice.reducer;
