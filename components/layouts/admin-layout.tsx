"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth/auth-context"
import { LayoutDashboard, Users, FileText, Heart, Bell, Settings, LogOut, Menu, X } from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const isAdmin = user?.role === "admin"

  const sidebarItems = [
    {
      name: "Dashboard",
      href: isAdmin ? "/admin" : "/dashboard",
      icon: LayoutDashboard,
    },
    ...(isAdmin
      ? [
          {
            name: "Users",
            href: "/admin/users",
            icon: Users,
          },
          {
            name: "Donation Requests",
            href: "/admin/donation-requests",
            icon: Heart,
          },
          {
            name: "Health Tips",
            href: "/admin/health-tips",
            icon: FileText,
          },
          {
            name: "Emergency Services",
            href: "/admin/emergency",
            icon: Bell,
          },
        ]
      : [
          {
            name: "Manage Profile",
            href: "/dashboard/profile",
            icon: Users,
          },
          {
            name: "Donation History",
            href: "/dashboard/donations",
            icon: Heart,
          },
        ]),
    {
      name: "Settings",
      href: isAdmin ? "/admin/settings" : "/dashboard/settings",
      icon: Settings,
    },
  ]

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Admin Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link href={isAdmin ? "/admin" : "/dashboard"} className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold">{isAdmin ? "Admin Panel" : "Donor Dashboard"}</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium hidden md:inline-block">Welcome, {user?.name}</span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed md:static inset-y-0 left-0 z-20 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 pt-16 md:pt-0`}
        >
          <div className="p-4">
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              ))}
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="w-full justify-start px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {/* Overlay for mobile when sidebar is open */}
          {isMobile && isSidebarOpen && (
            <div className="fixed inset-0 bg-black/50 z-10" onClick={() => setIsSidebarOpen(false)} />
          )}
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
