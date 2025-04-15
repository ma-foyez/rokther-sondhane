import MainLayout from "@/components/layouts/main-layout"
import SearchBlood from "@/components/search-blood"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Droplet, MapPin, Phone, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  return (
    <MainLayout>
      <section className="bg-red-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Blood Donors</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Search our database of verified blood donors to find a match for your needs. Every search brings you closer
            to saving a life.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="donors" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="donors">Find Donors</TabsTrigger>
                <TabsTrigger value="requests">Blood Requests</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="donors">
              <SearchBlood />
            </TabsContent>

            <TabsContent value="requests">
              <div className="max-w-4xl mx-auto">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Submit a Blood Request</CardTitle>
                    <CardDescription>
                      Need blood urgently? Submit a request and our network of donors will be notified.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href="/request-blood"
                      className="flex items-center justify-center w-full p-4 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                    >
                      Submit Blood Request <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Current Blood Requests</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                      <Card key={item}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-lg font-bold">A+</span>
                            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                              Urgent
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Patient at City Hospital</h3>

                          <div className="space-y-2 mb-4 text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>Mirpur-10, Dhaka</span>
                            </div>
                            <div className="flex items-center">
                              <Droplet className="h-4 w-4 mr-2" />
                              <span>3 units needed</span>
                            </div>
                            <div className="flex items-center">
                              <AlertCircle className="h-4 w-4 mr-2" />
                              <span>Needed by: Tomorrow, 10:00 AM</span>
                            </div>
                          </div>

                          <Link
                            href={`/request-details/${item}`}
                            className="inline-flex items-center text-red-600 hover:text-red-800 font-medium"
                          >
                            View Details
                          </Link>

                          <div className="mt-4 flex justify-end">
                            <Link
                              href={`/contact-requester/${item}`}
                              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
                            >
                              <Phone className="mr-2 h-4 w-4" /> Contact
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  )
}
