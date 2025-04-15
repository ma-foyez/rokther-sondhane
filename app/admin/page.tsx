"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Users, Calendar, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth/auth-context"

export default function AdminDashboardPage() {
  const { user } = useAuth()

  // Mock data
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      description: "↗ 12% from last month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Donations",
      value: "2,573",
      description: "↗ 5% from last month",
      icon: Droplet,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Pending Requests",
      value: "18",
      description: "↘ 3% from last month",
      icon: AlertTriangle,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      title: "Upcoming Events",
      value: "5",
      description: "Next event in 3 days",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      bloodGroup: "A+",
      joinDate: "2023-11-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      bloodGroup: "O-",
      joinDate: "2023-11-14",
      status: "Active",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      bloodGroup: "B+",
      joinDate: "2023-11-12",
      status: "Pending",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      bloodGroup: "AB+",
      joinDate: "2023-11-10",
      status: "Active",
    },
  ]

  const pendingRequests = [
    {
      id: 1,
      requester: "Medical College Hospital",
      bloodGroup: "O+",
      quantity: "3 units",
      urgency: "High",
      requestDate: "2023-11-15",
    },
    {
      id: 2,
      requester: "Sarah Ahmed",
      bloodGroup: "A-",
      quantity: "1 unit",
      urgency: "Medium",
      requestDate: "2023-11-14",
    },
    {
      id: 3,
      requester: "City Hospital",
      bloodGroup: "B+",
      quantity: "2 units",
      urgency: "High",
      requestDate: "2023-11-13",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome {user?.name}! Here's an overview of the platform.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`${stat.bgColor} ${stat.color} p-2 rounded-full`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Users</CardTitle>
              <CardDescription>Recently registered users on the platform</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/users">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                      {user.bloodGroup}
                    </span>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Pending Requests</CardTitle>
              <CardDescription>Blood donation requests awaiting approval</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/donation-requests">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{request.requester}</p>
                    <p className="text-sm text-muted-foreground">
                      Requested on {new Date(request.requestDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                      {request.bloodGroup}
                    </span>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        request.urgency === "High" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {request.urgency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" size="sm">
                Approve All
              </Button>
              <Button className="bg-red-600 hover:bg-red-700" size="sm">
                Review Requests
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
