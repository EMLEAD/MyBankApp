import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

export const register = createAsyncThunk(
  "auth/register",
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
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.error("Login cannot be completed:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get(`${baseURL}/api/auth/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data; // Return the user data
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Get token from localStorage if it exists
const tokenFromStorage = localStorage.getItem("token");

const initialState = {
  user: null,
  token: tokenFromStorage,
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
        state.token = action.payload.token; // Make sure to set the token in the Redux store
        state.success = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login failed";
        state.success = false;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch user profile";
      });
  },
});

export default authSlice.reducer;
