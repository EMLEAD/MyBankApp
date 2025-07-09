import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

export const register = createAsyncThunk(
  "/api/auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const {
        email,
        password,
        phoneNumber,
        firstName,
        lastName,
        middleName,
    
      } = userData;
      const response = await axios.post(`${baseURL}/api/auth/register`, {
        email,
        password,
        phoneNumber,
        firstName,
        lastName,
        middleName,
      });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);


export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    console.log("Login attempt with email:", email);
    console.log("Login attempt with password:", password);
    try {
    const response = await axios.post(`${baseURL}/api/auth/login`, {
        email,
        password,
      });
      console.log("Login response:", response);
      localStorage.setItem("token", response.token);
      return response.data;
    } catch (error) {
      console.error("Login cannot be completed:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.success = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Registration failed";
        state.success = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
         state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.success = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login failed";
        state.success = false;
      });
  },
});

export const sendMoney = createAsyncThunk(
  "auth/sendMoney",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/api/transfer`, data);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Transfer failed. Please try again."
      );
    }
  }
);

export default authSlice.reducer;
