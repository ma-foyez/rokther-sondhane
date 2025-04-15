import MainLayout from "@/components/layouts/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Truck, Phone, Building, Clock, MapPin, AlertCircle, Mail, ArrowRight, AlertTriangle } from "lucide-react"

const emergencyServices = [
  {
    id: 1,
    title: "24/7 Blood Bank",
    description: "Our central blood bank is open 24/7 for emergency blood requests.",
    contact: "+880 1712-345678",
    icon: Building,
  },
  {
    id: 2,
    title: "Ambulance Service",
    description: "Quick ambulance service available for blood transport and patient transfer.",
    contact: "+880 1712-345679",
    icon: Truck,
  },
  {
    id: 3,
    title: "Emergency Hotline",
    description: "Call our emergency hotline for immediate blood assistance.",
    contact: "+880 1712-345680",
    icon: Phone,
  },
  {
    id: 4,
    title: "Urgent Blood Request",
    description: "For urgent blood requests, we prioritize delivery within 1 hour.",
    contact: "+880 1712-345681",
    icon: Clock,
  },
]

const bloodBanks = [
  {
    name: "Central Blood Bank",
    address: "123 Hospital Road, Mirpur-10, Dhaka",
    phone: "+880 1712-345678",
    email: "central@blooddonation.org",
    hours: "24/7",
  },
  {
    name: "North Dhaka Blood Center",
    address: "45 Medical Street, Uttara, Dhaka",
    phone: "+880 1712-345679",
    email: "north@blooddonation.org",
    hours: "8:00 AM - 10:00 PM",
  },
  {
    name: "South Dhaka Blood Bank",
    address: "78 Health Avenue, Dhanmondi, Dhaka",
    phone: "+880 1712-345680",
    email: "south@blooddonation.org",
    hours: "8:00 AM - 10:00 PM",
  },
]

export default function EmergencyPage() {
  return (
    <MainLayout>
      <section className="bg-red-600 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Emergency Blood Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Fast, reliable blood services when every minute counts. Our emergency services are available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" /> Emergency Hotline
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Request Blood Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service) => (
              <Card key={service.id} className="border-t-4 border-t-red-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-red-100 rounded-full">
                      <service.icon className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="flex items-center gap-2 text-red-600 font-semibold">
                    <Phone className="h-4 w-4" />
                    <span>{service.contact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Emergency Blood Request</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Need blood urgently? Fill out this form and our team will respond immediately.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Urgent Blood Request Form</CardTitle>
                <CardDescription>
                  This form is for emergency situations only. For routine requests, please use our standard blood
                  request form.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="patientName" className="block text-sm font-medium">
                        Patient Name
                      </label>
                      <Input id="patientName" placeholder="Full name of patient" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="requesterName" className="block text-sm font-medium">
                        Requester Name
                      </label>
                      <Input id="requesterName" placeholder="Your name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="bloodGroup" className="block text-sm font-medium">
                        Blood Group Needed
                      </label>
                      <select
                        id="bloodGroup"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="units" className="block text-sm font-medium">
                        Units Required
                      </label>
                      <Input id="units" type="number" min="1" placeholder="Number of units" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="urgency" className="block text-sm font-medium">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select Urgency</option>
                        <option value="critical">Critical - Needed Immediately</option>
                        <option value="urgent">Urgent - Within 3 hours</option>
                        <option value="high">High Priority - Within 12 hours</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="hospital" className="block text-sm font-medium">
                        Hospital/Location
                      </label>
                      <Input id="hospital" placeholder="Hospital or location name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Contact Phone
                      </label>
                      <Input id="phone" placeholder="Your contact number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium">
                      Detailed Address
                    </label>
                    <Textarea
                      id="address"
                      placeholder="Provide detailed address for blood delivery"
                      rows={2}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="notes" className="block text-sm font-medium">
                      Additional Information
                    </label>
                    <Textarea id="notes" placeholder="Any additional information that might help" rows={3} />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                      Submit Emergency Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <CardTitle className="text-lg">Important Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Emergency requests are prioritized based on urgency and availability.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>Provide accurate contact information to ensure quick coordination.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span>If the situation is life-threatening, please also call our emergency hotline.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Emergency Hotline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-red-600 font-bold text-2xl mb-2">
                    <Phone className="h-6 w-6" />
                    <span>+880 1712-345680</span>
                  </div>
                  <p className="text-sm text-gray-600">Available 24/7 for emergency blood requests</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Blood Bank Locations</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Visit our blood bank locations for emergency blood needs. Our centers maintain a safe supply of all blood
            groups.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bloodBanks.map((bank, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{bank.name}</CardTitle>
                  <CardDescription>{bank.hours === "24/7" ? "Open 24/7" : `Open: ${bank.hours}`}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-sm">{bank.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-sm">{bank.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-sm">{bank.email}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <span className="text-sm">{bank.hours}</span>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`https://maps.google.com/?q=${bank.address}`} target="_blank" rel="noopener noreferrer">
                        Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
