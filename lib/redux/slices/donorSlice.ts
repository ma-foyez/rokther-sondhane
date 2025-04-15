"use client"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Mock data
const mockDonors = [
  {
    id: 1,
    name: "John Doe",
    bloodGroup: "A+",
    division: "Dhaka",
    district: "Dhaka",
    area: "Mirpur",
    phone: "+8801712345678",
    lastDonation: "2023-10-15",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Jane Smith",
    bloodGroup: "O-",
    division: "Dhaka",
    district: "Dhaka",
    area: "Gulshan",
    phone: "+8801712345679",
    lastDonation: "2023-11-05",
    image: "/placeholder.svg?height=100&width=100",
  },
  // Add more mock donors as needed
]

// Async thunks
export const fetchDonors = createAsyncThunk("donors/fetchDonors", async (_, { rejectWithValue }) => {
  try {
    // In a real app, this would be an API call
    // const response = await axios.get("/api/donors")
    // return response.data

    // Mock response
    return mockDonors
  } catch (error) {
    return rejectWithValue("Failed to fetch donors")
  }
})

export const addDonation = createAsyncThunk("donors/addDonation", async (donationData: any, { rejectWithValue }) => {
  try {
    // In a real app, this would be an API call
    // const response = await axios.post("/api/donations", donationData)
    // return response.data

    // Mock response
    return {
      id: Math.floor(Math.random() * 1000),
      ...donationData,
      status: "Completed",
      createdAt: new Date().toISOString(),
    }
  } catch (error) {
    return rejectWithValue("Failed to add donation")
  }
})

interface DonorState {
  donors: any[]
  donations: any[]
  isLoading: boolean
  error: string | null
}

const initialState: DonorState = {
  donors: [],
  donations: [],
  isLoading: false,
  error: null,
}

const donorSlice = createSlice({
  name: "donors",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonors.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchDonors.fulfilled, (state, action) => {
        state.isLoading = false
        state.donors = action.payload
      })
      .addCase(fetchDonors.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(addDonation.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(addDonation.fulfilled, (state, action) => {
        state.isLoading = false
        state.donations.push(action.payload)
      })
      .addCase(addDonation.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { clearError } = donorSlice.actions
export default donorSlice.reducer
