"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, FileText, Heart, Bell, Settings, LogOut, Menu, X } from "lucide-react"

export default function AdminLayout({ children }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

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

  const sidebarItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
    },
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
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Admin Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link href="/admin" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold">Admin Panel</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium hidden md:inline-block">Admin User</span>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
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
