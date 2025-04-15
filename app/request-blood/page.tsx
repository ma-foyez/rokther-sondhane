import MainLayout from "@/components/layouts/main-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RequestBloodPage() {
  return (
    <MainLayout>
      <section className="bg-red-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Request Blood</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit a blood request and we'll help connect you with suitable donors. For emergency requests, please call our
            emergency hotline or visit the emergency services page.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="request" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="request">Request Blood</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="request">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Blood Request Form</CardTitle>
                    <CardDescription>
                      Please fill out this form with accurate information to help us find suitable donors.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Patient Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="patientName">Patient Name</Label>
                            <Input id="patientName" placeholder="Full name of patient" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="patientAge">Patient Age</Label>
                            <Input id="patientAge" type="number" placeholder="Age in years" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="bloodGroup">Blood Group Needed</Label>
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
                            <Label htmlFor="units">Units Required</Label>
                            <Input id="units" type="number" min="1" placeholder="Number of units" required />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Hospital/Location Information</h3>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="hospital">Hospital Name</Label>
                            <Input id="hospital" placeholder="Name of hospital/clinic" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="hospitalAddress">Hospital Address</Label>
                            <Textarea
                              id="hospitalAddress"
                              placeholder="Full address including area, city"
                              rows={2}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Requester Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="requesterName">Your Name</Label>
                            <Input id="requesterName" placeholder="Your full name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="relation">Relation to Patient</Label>
                            <Input id="relation" placeholder="E.g. Family member, friend" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Contact Phone</Label>
                            <Input id="phone" placeholder="Your phone number" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="altPhone">Alternative Phone</Label>
                            <Input id="altPhone" placeholder="Alternative contact number" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Your email address" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Request Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="needDate">When Needed</Label>
                            <Input id="needDate" type="date" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="urgency">Urgency Level</Label>
                            <select
                              id="urgency"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              required
                            >
                              <option value="">Select Urgency</option>
                              <option value="normal">Normal - Within a few days</option>
                              <option value="urgent">Urgent - Within 24 hours</option>
                              <option value="emergency">Emergency - As soon as possible</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reason">Reason for Blood Request</Label>
                          <Textarea
                            id="reason"
                            placeholder="Surgery, accident, illness, etc."
                            rows={3}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            placeholder="Any other relevant information"
                            rows={3}
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 pt-2">
                        <input
                          type="checkbox"
                          id="terms"
                          className="h-4 w-4 rounded border-gray-300"
                          required
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I confirm that the information provided is accurate and I agree to the terms and conditions.
                        </Label>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit" className="bg-red-600 hover:bg-red-700">
                          Submit Blood Request
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="process">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">How Blood Request Process Works</h2>
                
                <ol className="relative border-l border-gray-200">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-red-100 rounded-full -left-4 ring-4 ring-white">
                      <div className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold">Submit Blood Request</h3>
                    <p className="text-base font-normal text-gray-600 mb-2">
                      Fill out the blood request form with all required information, including patient details, blood group needed, and contact information.
                    </p>
                  </li>
                  
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-red-100 rounded-full -left-4 ring-4 ring-white">
                      <div className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold">Request Verification</h3>
                    <p className="text-base font-normal text-gray-600 mb-2">
                      Our team verifies the request details and may contact you for additional information if needed.
                    </p>
                  </li>

                  <li className="mb-\
