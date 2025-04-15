import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Droplet, Apple, Activity, Sun, Moon, Coffee, Utensils } from "lucide-react"

const healthTips = [
  {
    id: 1,
    title: "Stay Hydrated",
    description: "Drink plenty of water before and after donating blood to help your body recover.",
    icon: Droplet,
  },
  {
    id: 2,
    title: "Eat Iron-Rich Foods",
    description: "Include foods like spinach, red meat, and beans in your diet to maintain healthy iron levels.",
    icon: Apple,
  },
  {
    id: 3,
    title: "Regular Exercise",
    description: "Maintain a regular exercise routine, but avoid strenuous activities on donation day.",
    icon: Activity,
  },
  {
    id: 4,
    title: "Get Enough Sleep",
    description: "Ensure you get 7-8 hours of sleep the night before donating blood.",
    icon: Moon,
  },
  {
    id: 5,
    title: "Avoid Alcohol",
    description: "Don't consume alcohol for at least 24 hours before and after donating blood.",
    icon: Coffee,
  },
  {
    id: 6,
    title: "Eat a Healthy Meal",
    description: "Have a nutritious meal before donating, but avoid fatty foods.",
    icon: Utensils,
  },
  {
    id: 7,
    title: "Vitamin C",
    description: "Consume vitamin C-rich foods to help your body absorb iron more efficiently.",
    icon: Sun,
  },
  {
    id: 8,
    title: "Regular Donation",
    description:
      "Males can donate every 3 months, females every 4 months. Regular donation helps maintain healthy blood.",
    icon: Heart,
  },
]

export default function HealthTips() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Health Tips for Donors</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Follow these health tips to ensure you're in the best condition for blood donation and recovery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {healthTips.map((tip) => (
            <Card key={tip.id} className="border-t-4 border-t-red-500">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <tip.icon className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
