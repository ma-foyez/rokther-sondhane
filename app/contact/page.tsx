import MainLayout from "@/components/layouts/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const contactInfo = {
  address: "123 Blood Donor Street, Mirpur-10, Dhaka-1216, Bangladesh",
  phone: ["+880 1712-345678", "+880 1712-345679"],
  email: ["info@rokthersondhane.org", "support@rokthersondhane.org"],
  hours: [
    "Monday - Friday: 9:00 AM - 6:00 PM",
    "Saturday: 10:00 AM - 4:00 PM",
    "Sunday: Closed (Emergency services available)",
  ],
}

const offices = [
  {
    name: "Dhaka Central Office",
    address: "123 Blood Donor Street, Mirpur-10, Dhaka-1216",
    phone: "+880 1712-345678",
    email: "dhaka@rokthersondhane.org",
  },
  {
    name: "Chittagong Branch",
    address: "45 Health Avenue, GEC Circle, Chittagong",
    phone: "+880 1712-345680",
    email: "chittagong@rokthersondhane.org",
  },
  {
    name: "Rajshahi Branch",
    address: "78 Medical Road, New Market, Rajshahi",
    phone: "+880 1712-345681",
    email: "rajshahi@rokthersondhane.org",
  },
  {
    name: "Khulna Branch",
    address: "32 Hospital Lane, KDA Avenue, Khulna",
    phone: "+880 1712-345682",
    email: "khulna@rokthersondhane.org",
  },
]

const faqs = [
  {
    question: "How can I organize a blood donation camp?",
    answer:
      "To organize a blood donation camp, please contact our events team at events@rokthersondhane.org or call our main office. We'll provide guidance, equipment, and trained staff for your camp.",
  },
  {
    question: "How do I become a regular blood donor?",
    answer:
      "To become a regular donor, register on our website or visit any of our blood donation centers. After registration, we'll schedule regular appointments and send you reminders.",
  },
  {
    question: "Can I donate blood if I have a medical condition?",
    answer:
      "It depends on the condition. Some medical conditions may temporarily or permanently prevent you from donating blood. Please consult with our medical staff for specific advice.",
  },
  {
    question: "How can I volunteer with your organization?",
    answer:
      "We're always looking for volunteers! Fill out the volunteer application form on our website or contact our volunteer coordinator at volunteer@rokthersondhane.org.",
  },
  {
    question: "Do you provide blood for free to patients?",
    answer:
      "We provide blood free of charge to underprivileged patients. For others, there may be a processing fee to cover collection, testing, and storage costs.",
  },
]

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="bg-red-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="contact-form" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
                <TabsTrigger value="locations">Locations</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="contact-form">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Your Name
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="+880 1712-345678" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Your Message
                      </label>
                      <Textarea id="message" placeholder="Type your message here..." rows={5} required />
                    </div>

                    <Button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700">
                      Send Message
                    </Button>
                  </form>
                </div>

                <div>
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-gray-600">{contactInfo.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Phone</p>
                          {contactInfo.phone.map((phone, index) => (
                            <p key={index} className="text-gray-600">
                              {phone}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          {contactInfo.email.map((email, index) => (
                            <p key={index} className="text-gray-600">
                              {email}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Working Hours</p>
                          {contactInfo.hours.map((hours, index) => (
                            <p key={index} className="text-gray-600">
                              {hours}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Emergency Hotline</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="locations">
              <div className="space-y-8">
                <div className="aspect-w-16 aspect-h-9 w-full h-96 rounded-lg overflow-hidden">
                  {/* This would typically be a Google Maps embed */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    Interactive Map Would Be Displayed Here
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {offices.map((office, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="font-semibold text-lg">{office.name}</h3>

                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 text-red-600" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Phone className="h-4 w-4 mt-0.5 text-red-600" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Mail className="h-4 w-4 mt-0.5 text-red-600" />
                            <span>{office.email}</span>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full" asChild>
                          <a
                            href={`https://maps.google.com/?q=${office.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Directions <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faqs">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Didn't find the answer you were looking for?</p>
                  <Button className="bg-red-600 hover:bg-red-700">Contact Our Support Team</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Blood Donor Community</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Become a part of our mission to save lives through blood donation. Register today to join our community of
            heroes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Register as a Donor
            </Button>
            <Button size="lg" variant="outline">
              Learn More About Donation
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
