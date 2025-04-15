"use client"

import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import donorReducer from "./slices/donorSlice"
import searchReducer from "./slices/searchSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donors: donorReducer,
    search: searchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
