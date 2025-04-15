import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Phone, Building, Clock } from "lucide-react"

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

export default function EmergencyServices() {
  return (
    <section className="py-16 px-4 bg-red-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Emergency Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our emergency services are available 24/7 to ensure blood is available when needed most.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyServices.map((service) => (
            <Card key={service.id} className="bg-white">
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
  )
}
