import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authorizeUser = createAsyncThunk(
  "user/authorizeUser",
  async (param, thunkAPI) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/me`,
        withCredentials: true,
      });

      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error(res.data.message);
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
