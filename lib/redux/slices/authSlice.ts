"use client"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Mock API calls
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // const response = await axios.post("/api/auth/login", credentials)
      // return response.data

      // Mock response
      return {
        user: {
          id: 1,
          name: "John Doe",
          email: credentials.email,
          role: "user",
        },
        token: "mock-jwt-token",
      }
    } catch (error) {
      return rejectWithValue("Invalid credentials")
    }
  },
)

export const registerUser = createAsyncThunk("auth/register", async (userData: any, { rejectWithValue }) => {
  try {
    // In a real app, this would be an API call
    // const response = await axios.post("/api/auth/register", userData)
    // return response.data

    // Mock response
    return {
      user: {
        id: 2,
        name: userData.name,
        email: userData.email,
        role: "user",
      },
      token: "mock-jwt-token",
    }
  } catch (error) {
    return rejectWithValue("Registration failed")
  }
})

export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async (data: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // const response = await axios.post("/api/auth/verify-otp", data)
      // return response.data

      // Mock response
      return {
        success: true,
        message: "OTP verified successfully",
      }
    } catch (error) {
      return rejectWithValue("OTP verification failed")
    }
  },
)

interface AuthState {
  user: any | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  otpVerified: boolean
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  otpVerified: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.error = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        // Don't authenticate yet, wait for OTP verification
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(verifyOTP.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isLoading = false
        state.otpVerified = true
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
