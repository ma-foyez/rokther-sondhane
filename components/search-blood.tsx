"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone } from "lucide-react"
import ReactSelect from "react-select"

// Add this CSS for react-select
const selectStyles = {
  control: (base) => ({
    ...base,
    borderColor: "hsl(var(--input))",
    boxShadow: "none",
    "&:hover": {
      borderColor: "hsl(var(--input))",
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
}

// Mock data
const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"]
const districts = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail"],
  Chittagong: ["Chittagong", "Cox's Bazar", "Comilla", "Chandpur"],
  // Add more as needed
}
const areas = {
  Dhaka: ["Mirpur", "Dhanmondi", "Gulshan", "Uttara", "Mohammadpur"],
  Gazipur: ["Tongi", "Gazipur Sadar", "Sreepur"],
  // Add more as needed
}
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

const mockDonors = [
  {
    id: 1,
    name: "John Doe",
    bloodGroup: "A+",
    division: "Dhaka",
    district: "Dhaka",
    area: "Mirpur",
    phone: "+8801712345678",
    lastDonation: "2023-10-15",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Jane Smith",
    bloodGroup: "O-",
    division: "Dhaka",
    district: "Dhaka",
    area: "Gulshan",
    phone: "+8801712345679",
    lastDonation: "2023-11-05",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Robert Johnson",
    bloodGroup: "B+",
    division: "Dhaka",
    district: "Gazipur",
    area: "Tongi",
    phone: "+8801712345680",
    lastDonation: "2023-09-20",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Emily Davis",
    bloodGroup: "AB+",
    division: "Chittagong",
    district: "Chittagong",
    area: "Agrabad",
    phone: "+8801712345681",
    lastDonation: "2023-08-30",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Michael Wilson",
    bloodGroup: "A-",
    division: "Dhaka",
    district: "Narayanganj",
    area: "Fatullah",
    phone: "+8801712345682",
    lastDonation: "2023-10-25",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Sarah Brown",
    bloodGroup: "O+",
    division: "Rajshahi",
    district: "Rajshahi",
    area: "Boalia",
    phone: "+8801712345683",
    lastDonation: "2023-11-10",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function SearchBlood() {
  const [selectedDivision, setSelectedDivision] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedArea, setSelectedArea] = useState("")
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("")
  const [filteredDonors, setFilteredDonors] = useState(mockDonors)

  const handleSearch = () => {
    let filtered = [...mockDonors]

    if (selectedDivision) {
      filtered = filtered.filter((donor) => donor.division === selectedDivision)
    }

    if (selectedDistrict) {
      filtered = filtered.filter((donor) => donor.district === selectedDistrict)
    }

    if (selectedArea) {
      filtered = filtered.filter((donor) => donor.area === selectedArea)
    }

    if (selectedBloodGroup) {
      filtered = filtered.filter((donor) => donor.bloodGroup === selectedBloodGroup)
    }

    setFilteredDonors(filtered)
  }

  const resetFilters = () => {
    setSelectedDivision("")
    setSelectedDistrict("")
    setSelectedArea("")
    setSelectedBloodGroup("")
    setFilteredDonors(mockDonors)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Find Blood Donors</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <ReactSelect
            options={divisions.map((division) => ({ value: division, label: division }))}
            value={selectedDivision ? { value: selectedDivision, label: selectedDivision } : null}
            onChange={(option) => setSelectedDivision(option ? option.value : "")}
            placeholder="Select Division"
            className="react-select-container"
            classNamePrefix="react-select"
            instanceId="division-select"
          />

          <ReactSelect
            options={
              selectedDivision && districts[selectedDivision]
                ? districts[selectedDivision].map((district) => ({ value: district, label: district }))
                : []
            }
            value={selectedDistrict ? { value: selectedDistrict, label: selectedDistrict } : null}
            onChange={(option) => setSelectedDistrict(option ? option.value : "")}
            placeholder="Select District"
            className="react-select-container"
            classNamePrefix="react-select"
            isDisabled={!selectedDivision}
            instanceId="district-select"
          />

          <ReactSelect
            options={
              selectedDistrict && areas[selectedDistrict]
                ? areas[selectedDistrict].map((area) => ({ value: area, label: area }))
                : []
            }
            value={selectedArea ? { value: selectedArea, label: selectedArea } : null}
            onChange={(option) => setSelectedArea(option ? option.value : "")}
            placeholder="Select Area"
            className="react-select-container"
            classNamePrefix="react-select"
            isDisabled={!selectedDistrict}
            instanceId="area-select"
          />

          <ReactSelect
            options={bloodGroups.map((group) => ({ value: group, label: group }))}
            value={selectedBloodGroup ? { value: selectedBloodGroup, label: selectedBloodGroup } : null}
            onChange={(option) => setSelectedBloodGroup(option ? option.value : "")}
            placeholder="Blood Group"
            className="react-select-container"
            classNamePrefix="react-select"
            instanceId="blood-group-select"
          />
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button onClick={handleSearch} className="bg-red-600 hover:bg-red-700">
            Search Donors
          </Button>
          <Button onClick={resetFilters} variant="outline">
            Reset Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDonors.length > 0 ? (
            filteredDonors.map((donor) => (
              <Card key={donor.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={donor.image || "/placeholder.svg"} alt={donor.name} />
                      <AvatarFallback>{donor.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{donor.name}</h3>
                      <p className="text-sm text-gray-500">
                        {donor.area}, {donor.district}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full font-semibold">
                        {donor.bloodGroup}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Last donation: {new Date(donor.lastDonation).toLocaleDateString()}</p>
                    <div className="mt-4 flex justify-between">
                      <Button variant="outline" size="sm" className="w-full">
                        View Profile
                      </Button>
                      <Button size="sm" className="w-full ml-2 bg-green-600 hover:bg-green-700">
                        <Phone className="h-4 w-4 mr-2" /> Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-500">No donors found matching your criteria.</p>
              <Button onClick={resetFilters} variant="link" className="mt-2">
                Reset filters to see all donors
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
