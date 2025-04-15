"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet, Users, Calendar, Award } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth/auth-context"

export default function DashboardPage() {
  const { user } = useAuth()

  // Mock data
  const stats = [
    {
      title: "Total Donations",
      value: "5",
      description: "Lifetime donations",
      icon: Droplet,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Lives Saved",
      value: "15",
      description: "Estimated impact",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Last Donation",
      value: "45 days ago",
      description: user?.lastDonation || "No record",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Donor Status",
      value: "Active",
      description: "Eligible to donate",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Blood Donation Camp",
      date: "2023-12-15",
      location: "City Hospital, Mirpur",
      description: "Join our blood donation camp and help save lives.",
    },
    {
      id: 2,
      title: "Donor Recognition Event",
      date: "2023-12-25",
      location: "Community Center, Dhanmondi",
      description: "A special event to recognize our regular donors.",
    },
  ]

  const recentDonations = [
    {
      id: 1,
      date: "2023-10-15",
      location: "City Hospital",
      bloodGroup: user?.bloodGroup || "A+",
      status: "Completed",
    },
    {
      id: 2,
      date: "2023-07-20",
      location: "Red Cross Center",
      bloodGroup: user?.bloodGroup || "A+",
      status: "Completed",
    },
    {
      id: 3,
      date: "2023-04-05",
      location: "Medical College Hospital",
      bloodGroup: user?.bloodGroup || "A+",
      status: "Completed",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.name}! Here's an overview of your donation activities.
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">Schedule Donation</Button>
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
          <CardHeader>
            <CardTitle>Recent Donations</CardTitle>
            <CardDescription>Your donation history for the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{new Date(donation.date).toLocaleDateString()}</p>
                    <p className="text-sm text-muted-foreground">{donation.location}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                      {donation.bloodGroup}
                    </span>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                      {donation.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link href="/dashboard/donations">View All Donations</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Blood donation events in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-b pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mt-1">
                    <Award className="h-4 w-4 mt-0.5" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm mt-2">{event.description}</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-red-600">
                    Register for Event
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
