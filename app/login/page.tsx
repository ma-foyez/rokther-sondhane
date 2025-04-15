"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart } from "lucide-react"
import { useAuth } from "@/lib/auth/auth-context"
import MainLayout from "@/components/layouts/main-layout"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const success = await login(formData.email, formData.password)

      if (success) {
        // Redirect will be handled by the auth context
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("An error occurred during login")
      console.error(err)
    }
  }

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <Heart className="h-10 w-10 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">{error}</div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-red-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked === true }))}
                />
                <Label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Sign in
              </Button>
              <div className="text-center text-sm text-gray-500">
                <p>Demo Accounts:</p>
                <p>Donor: donor@example.com / password123</p>
                <p>Admin: admin@example.com / admin123</p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-red-600 hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  )
}
