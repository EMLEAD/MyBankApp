import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

// Helper function to get auth headers
const getAuthHeaders = (getState) => {
  const token = getState().auth.token;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

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
        gender, 
      } = userData;
      const response = await axios.post(`${baseURL}/api/auth/register`, {
        email,
        password,
        phoneNumber,
        firstName,
        lastName,
        middleName,
        gender, 
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
    try {
      const response = await axios.post(`${baseURL}/api/auth/login`, {
        email,
        password,
      });
      // Save token to localStorage
      localStorage.setItem("token", response.data.token);
      return response.data; // Should include user and token
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
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

// Forgot Password - Send OTP
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/forgot-password`, { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to send password reset email'
      );
    }
  }
);

// Verify Reset Token
export const verifyResetToken = createAsyncThunk(
  'auth/verifyResetToken',
  async ({ email, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/verify-reset-token`, { email, token });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Invalid or expired token'
      );
    }
  }
);

// Reset Password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, token, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/reset-password`, {
        email,
        token,
        newPassword
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to reset password'
      );
    }
  }
);

// Update Password (for logged-in users)
export const updatePassword = createAsyncThunk(
  'auth/updatePassword',
  async ({ currentPassword, newPassword }, { getState, rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${baseURL}/api/auth/update-password`,
        { currentPassword, newPassword },
        getAuthHeaders(getState)
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to update password'
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
      })
      // Handle forgotPassword
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle verifyResetToken
      .addCase(verifyResetToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyResetToken.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(verifyResetToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle resetPassword
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle updatePassword
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const sendMoney = createAsyncThunk(
//   "auth/sendMoney",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${baseURL}/api/transfer`, data);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(
//         err.response?.data?.message || "Transfer failed. Please try again."
//       );
//     }
//   }
// );

export default authSlice.reducer;
