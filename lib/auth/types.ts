export type UserRole = "donor" | "admin" | "guest"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  bloodGroup?: string
  lastDonation?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
}
