import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, FileText } from "lucide-react"

// Mock data
const completedDonations = [
  {
    id: 1,
    date: "2023-10-15",
    location: "City Hospital",
    address: "123 Hospital Road, Mirpur, Dhaka",
    bloodGroup: "A+",
    status: "Completed",
    recipient: "Emergency Blood Bank",
    notes: "Regular donation",
  },
  {
    id: 2,
    date: "2023-07-20",
    location: "Red Cross Center",
    address: "45 Red Cross Avenue, Dhanmondi, Dhaka",
    bloodGroup: "A+",
    status: "Completed",
    recipient: "Sarah Ahmed",
    notes: "Direct donation to patient",
  },
  {
    id: 3,
    date: "2023-04-05",
    location: "Medical College Hospital",
    address: "78 College Road, Shahbag, Dhaka",
    bloodGroup: "A+",
    status: "Completed",
    recipient: "Blood Bank",
    notes: "Donation camp",
  },
  {
    id: 4,
    date: "2023-01-12",
    location: "Community Clinic",
    address: "32 Community Street, Uttara, Dhaka",
    bloodGroup: "A+",
    status: "Completed",
    recipient: "Mohammad Rahman",
    notes: "Emergency donation",
  },
  {
    id: 5,
    date: "2022-10-30",
    location: "City Hospital",
    address: "123 Hospital Road, Mirpur, Dhaka",
    bloodGroup: "A+",
    status: "Completed",
    recipient: "Blood Bank",
    notes: "Regular donation",
  },
]

const upcomingDonations = [
  {
    id: 1,
    date: "2024-01-15",
    time: "10:00 AM",
    location: "City Hospital",
    address: "123 Hospital Road, Mirpur, Dhaka",
    bloodGroup: "A+",
    status: "Scheduled",
  },
]

export default function DonationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Donation History</h1>
        <p className="text-muted-foreground">View your past donations and upcoming appointments</p>
      </div>

      <Tabs defaultValue="completed" className="space-y-4">
        <TabsList>
          <TabsTrigger value="completed">Completed Donations</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Donations</TabsTrigger>
        </TabsList>

        <TabsContent value="completed" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Your Donation History</h2>
            <Button variant="outline">Download History</Button>
          </div>

          {completedDonations.map((donation) => (
            <Card key={donation.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                      {donation.status}
                    </Badge>
                    <CardTitle className="text-lg">{new Date(donation.date).toLocaleDateString()}</CardTitle>
                  </div>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100 w-fit">{donation.bloodGroup}</Badge>
                </div>
                <CardDescription>{donation.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span className="text-sm">{donation.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <span className="text-sm">
                        {new Date(donation.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Recipient</p>
                        <p className="text-sm">{donation.recipient}</p>
                      </div>
                    </div>
                    {donation.notes && (
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Notes</p>
                          <p className="text-sm">{donation.notes}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    View Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Upcoming Donations</h2>
            <Button className="bg-red-600 hover:bg-red-700">Schedule New Donation</Button>
          </div>

          {upcomingDonations.length > 0 ? (
            upcomingDonations.map((donation) => (
              <Card key={donation.id}>
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        {donation.status}
                      </Badge>
                      <CardTitle className="text-lg">{new Date(donation.date).toLocaleDateString()}</CardTitle>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100 w-fit">{donation.bloodGroup}</Badge>
                  </div>
                  <CardDescription>{donation.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span className="text-sm">{donation.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span className="text-sm">
                          {new Date(donation.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <span className="text-sm">{donation.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button variant="destructive" size="sm">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-4">You don't have any upcoming donations scheduled.</p>
                <Button className="bg-red-600 hover:bg-red-700">Schedule a Donation</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
