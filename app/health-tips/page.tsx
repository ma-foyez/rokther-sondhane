import MainLayout from "@/components/layouts/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Heart,
  Droplet,
  Apple,
  Activity,
  Moon,
  Coffee,
  Utensils,
  Award,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react"

// Data for the health tips page
const beforeDonationTips = [
  {
    title: "Eat a Healthy Meal",
    description:
      "Have a nutritious meal 2-3 hours before donating blood. Avoid fatty foods, but ensure you're well-fed.",
    icon: Utensils,
  },
  {
    title: "Stay Hydrated",
    description:
      "Drink plenty of water before donating blood. Being well-hydrated makes the donation process easier and helps prevent dizziness.",
    icon: Droplet,
  },
  {
    title: "Get Enough Sleep",
    description: "Ensure you get 7-8 hours of sleep the night before donating blood to feel your best.",
    icon: Moon,
  },
  {
    title: "Avoid Alcohol",
    description: "Don't consume alcohol for at least 24 hours before donating blood.",
    icon: Coffee,
  },
  {
    title: "Wear Comfortable Clothing",
    description:
      "Choose clothing with sleeves that can be rolled up above the elbow, making the donation process easier.",
    icon: Activity,
  },
]

const afterDonationTips = [
  {
    title: "Rest and Recover",
    description: "Take a few minutes to rest after donating. Avoid strenuous activities for 24 hours.",
    icon: Moon,
  },
  {
    title: "Stay Hydrated",
    description: "Drink extra fluids in the next 48 hours to help your body replace the donated blood volume.",
    icon: Droplet,
  },
  {
    title: "Eat Iron-Rich Foods",
    description:
      "Consume iron-rich foods like lean red meat, spinach, and beans to help your body replace red blood cells.",
    icon: Apple,
  },
  {
    title: "Avoid Heavy Lifting",
    description: "Don't lift heavy objects or engage in strenuous exercise for at least 24 hours after donation.",
    icon: Activity,
  },
  {
    title: "Keep the Bandage On",
    description: "Keep the bandage on for at least 4 hours after donation to prevent bleeding.",
    icon: Heart,
  },
]

const eligibilityItems = [
  {
    question: "Who can donate blood?",
    answer:
      "Most healthy adults who are at least 17 years old (16 with parental consent in some states), weigh at least 110 pounds, and are in good general health can donate blood. Eligibility requirements may vary slightly depending on the donation center.",
  },
  {
    question: "How often can I donate blood?",
    answer:
      "You can donate whole blood every 56 days (8 weeks). If you donate platelets, you can give every 7 days up to 24 times a year. Plasma donors can donate every 28 days, and double red cell donors can give every 112 days.",
  },
  {
    question: "Are there medical conditions that prevent donation?",
    answer:
      "Yes, certain conditions may prevent you from donating, including anemia, blood-borne diseases, cancer, heart disease, and certain medications. It's important to disclose all medical conditions to the donation staff for evaluation.",
  },
  {
    question: "Can I donate if I have high blood pressure?",
    answer:
      "If your blood pressure is below 180/100 at the time of donation, you may be eligible to donate. Blood pressure medication does not disqualify you from donating.",
  },
  {
    question: "Can I donate if I have diabetes?",
    answer:
      "Most people with diabetes can donate blood if their diabetes is well-controlled with diet or oral medication. Those who use insulin may be eligible depending on individual assessment.",
  },
  {
    question: "Are there any temporary restrictions for donation?",
    answer:
      "Yes, temporary restrictions include recent tattoos or piercings (typically a 3-month wait), certain vaccinations, travel to malaria-risk areas, pregnancy, and certain infections or illnesses.",
  },
  {
    question: "Does taking medication disqualify me from donating?",
    answer:
      "Most medications do not disqualify you from donating blood. However, some medications require a waiting period. Blood thinners, certain acne medications, and some other drugs may affect eligibility.",
  },
]

const donationProcess = [
  {
    title: "Registration",
    description: "Fill out a form with your personal information and medical history.",
    icon: CheckCircle,
    time: "10-15 minutes",
  },
  {
    title: "Health Screening",
    description: "Quick health check including temperature, blood pressure, pulse, and hemoglobin levels.",
    icon: Heart,
    time: "10-15 minutes",
  },
  {
    title: "Blood Donation",
    description: "The actual donation takes about 8-10 minutes. A whole blood donation is approximately 450ml.",
    icon: Droplet,
    time: "8-10 minutes",
  },
  {
    title: "Refreshment and Recovery",
    description: "Rest and enjoy a snack and drink to help your body start to replenish fluids.",
    icon: Coffee,
    time: "15 minutes",
  },
]

const bloodFacts = [
  "One donation can save up to three lives",
  "The average adult has about 10 pints of blood in their body",
  "Red blood cells live for about 120 days",
  "Blood makes up about 7% of your body's weight",
  "Type O negative blood is known as the universal donor",
  "Type AB positive blood is known as the universal recipient",
  "Only 7% of people have O negative blood",
  "The first successful blood transfusion was performed in 1665",
  "45% of people in the U.S. have Type O (positive or negative) blood",
  "The body replenishes plasma within 24 hours of donation",
]

export default function HealthTipsPage() {
  return (
    <MainLayout>
      <section className="bg-red-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Health Tips for Blood Donors</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about blood donation, from preparation to recovery, and general health
            guidelines for donors.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="tips" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="tips">Donation Tips</TabsTrigger>
                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                <TabsTrigger value="process">The Process</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tips" className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-center mb-10">Before Donation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {beforeDonationTips.map((tip, index) => (
                    <Card key={index} className="border-t-4 border-t-red-500 h-full">
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

              <div>
                <h2 className="text-3xl font-bold text-center mb-10">After Donation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {afterDonationTips.map((tip, index) => (
                    <Card key={index} className="border-t-4 border-t-green-500 h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <tip.icon className="h-5 w-5 text-green-500" />
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

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Did You Know?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bloodFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="eligibility">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Blood Donation Eligibility</CardTitle>
                    <CardDescription>
                      Learn about who can donate blood and what factors may affect eligibility. This information is
                      general guidance - specific requirements may vary by location.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-4">Basic Eligibility Requirements</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Be at least 17 years old (16 with parental consent in some areas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Weigh at least 110 pounds (50 kg)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Be in good general health</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Have normal blood pressure, pulse, and temperature</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Have adequate hemoglobin levels</span>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-4">Frequently Asked Eligibility Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {eligibilityItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>

                    <div className="mt-8 p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <h4 className="font-semibold">Important Note:</h4>
                      </div>
                      <p className="text-sm">
                        Final eligibility determination is made by medical professionals at the donation site. When in
                        doubt, it's best to visit a donation center where trained staff can evaluate your eligibility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="process">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">The Blood Donation Process</h2>

                <div className="relative">
                  {/* Timeline connector */}
                  <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-red-100"></div>

                  <div className="space-y-12">
                    {donationProcess.map((step, index) => (
                      <div
                        key={index}
                        className={`relative flex flex-col lg:flex-row gap-6 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center z-10">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>

                        {/* Content card */}
                        <div className="ml-12 lg:ml-0 lg:w-1/2">
                          <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                              <div className="p-2 bg-red-100 rounded-full">
                                <step.icon className="h-5 w-5 text-red-600" />
                              </div>
                              <div>
                                <CardTitle>{step.title}</CardTitle>
                                <CardDescription>
                                  <Clock className="h-4 w-4 inline mr-1" />
                                  <span>{step.time}</span>
                                </CardDescription>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p>{step.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Total Time: Approximately 1 Hour</h3>
                  <p>
                    The actual blood donation only takes about 8-10 minutes. The entire process, from registration to
                    refreshments, takes about an hour. We recommend setting aside 60-90 minutes for your donation visit.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  )
}
