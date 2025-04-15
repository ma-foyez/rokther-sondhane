"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { useAuth } from "@/lib/auth/auth-context"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Search Donor", href: "/search" },
  { name: "Health Tips", href: "/health-tips" },
  { name: "Emergency Services", href: "/emergency" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-red-600" />
          <span className="text-xl font-bold">Rokther Sondhane</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-red-600">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Button asChild variant="outline">
                <Link href={user?.role === "admin" ? "/admin" : "/dashboard"}>Dashboard</Link>
              </Button>
              <Button asChild className="bg-red-600 hover:bg-red-700" onClick={handleLogout}>
                <a href="#">Logout</a>
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium py-2 transition-colors hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              {isAuthenticated ? (
                <>
                  <Button asChild variant="outline">
                    <Link href={user?.role === "admin" ? "/admin" : "/dashboard"}>Dashboard</Link>
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="outline">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
