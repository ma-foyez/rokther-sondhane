"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth/auth-context"
import type { UserRole } from "@/lib/auth/types"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles: UserRole[]
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login")
    } else if (!loading && isAuthenticated && user && !allowedRoles.includes(user.role as UserRole)) {
      if (user.role === "admin") {
        router.push("/admin")
      } else if (user.role === "donor") {
        router.push("/dashboard")
      } else {
        router.push("/")
      }
    }
  }, [isAuthenticated, user, loading, router, allowedRoles])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!isAuthenticated || !user || !allowedRoles.includes(user.role as UserRole)) {
    return null
  }

  return <>{children}</>
}
