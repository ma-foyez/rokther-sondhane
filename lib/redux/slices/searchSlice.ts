"use client"

import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface SearchState {
  division: string
  district: string
  area: string
  bloodGroup: string
}

const initialState: SearchState = {
  division: "",
  district: "",
  area: "",
  bloodGroup: "",
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDivision: (state, action: PayloadAction<string>) => {
      state.division = action.payload
      // Reset dependent fields
      state.district = ""
      state.area = ""
    },
    setDistrict: (state, action: PayloadAction<string>) => {
      state.district = action.payload
      // Reset dependent field
      state.area = ""
    },
    setArea: (state, action: PayloadAction<string>) => {
      state.area = action.payload
    },
    setBloodGroup: (state, action: PayloadAction<string>) => {
      state.bloodGroup = action.payload
    },
    resetFilters: (state) => {
      state.division = ""
      state.district = ""
      state.area = ""
      state.bloodGroup = ""
    },
  },
})

export const { setDivision, setDistrict, setArea, setBloodGroup, resetFilters } = searchSlice.actions
export default searchSlice.reducer
