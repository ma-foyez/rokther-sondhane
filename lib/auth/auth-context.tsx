"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { User, AuthState, UserRole } from "./types"

// Mock user data - in a real app, this would come from your API/database
const MOCK_USERS = [
  {
    id: "1",
    email: "donor@example.com",
    password: "password123", // In a real app, NEVER store plain text passwords
    name: "John Donor",
    role: "donor",
    bloodGroup: "A+",
    lastDonation: "2023-10-15",
  },
  {
    id: "2",
    email: "admin@example.com",
    password: "admin123", // In a real app, NEVER store plain text passwords
    name: "Admin User",
    role: "admin",
  },
]

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  checkAccess: (allowedRoles: UserRole[]) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
  })

  const router = useRouter()
  const pathname = usePathname()

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("rokthersondhaneUser")

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser) as User
        setAuthState({
          user,
          isAuthenticated: true,
          loading: false,
        })
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("rokthersondhaneUser")
        setAuthState({ user: null, isAuthenticated: false, loading: false })
      }
    } else {
      setAuthState({ user: null, isAuthenticated: false, loading: false })
    }
  }, [])

  // Handle route protection
  useEffect(() => {
    if (authState.loading) return

    // Public routes that don't require authentication
    const publicRoutes = ["/login", "/register", "/forgot-password"]

    // Routes that require authentication
    const protectedRoutes = ["/dashboard", "/admin"]

    // Check if current path is a protected route
    const isProtectedRoute = protectedRoutes.some((route) => pathname?.startsWith(route))

    // Check if current path is a public route
    const isPublicRoute = publicRoutes.some((route) => pathname === route)

    if (isProtectedRoute && !authState.isAuthenticated) {
      // Redirect to login if trying to access protected route without authentication
      router.push("/login")
    } else if (isPublicRoute && authState.isAuthenticated) {
      // Redirect to appropriate dashboard if already logged in
      if (authState.user?.role === "admin") {
        router.push("/admin")
      } else {
        router.push("/dashboard")
      }
    }

    // Redirect based on role
    if (authState.isAuthenticated && pathname?.startsWith("/admin") && authState.user?.role !== "admin") {
      router.push("/dashboard")
    }
  }, [authState.isAuthenticated, authState.loading, authState.user, pathname, router])

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    const user = MOCK_USERS.find((u) => u.email === email && u.password === password)

    if (user) {
      // Remove password before storing
      const { password: _, ...safeUser } = user

      // Store in localStorage
      localStorage.setItem("rokthersondhaneUser", JSON.stringify(safeUser))

      setAuthState({
        user: safeUser as User,
        isAuthenticated: true,
        loading: false,
      })

      return true
    }

    return false
  }

  const logout = () => {
    localStorage.removeItem("rokthersondhaneUser")
    setAuthState({
      user: null,
      isAuthenticated: false,
      loading: false,
    })
    router.push("/login")
  }

  const checkAccess = (allowedRoles: UserRole[]): boolean => {
    if (!authState.isAuthenticated || !authState.user) return false
    return allowedRoles.includes(authState.user.role as UserRole)
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        checkAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
