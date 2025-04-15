"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1712-345678"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
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
                    <p className="text-gray-600">123 Blood Donor Street, Mirpur-10, Dhaka-1216, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+880 1712-345678</p>
                    <p className="text-gray-600">+880 1712-345679</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@blooddonation.org</p>
                    <p className="text-gray-600">support@blooddonation.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed (Emergency services available)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
