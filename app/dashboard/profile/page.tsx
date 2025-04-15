"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
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

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"]

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1712-345678",
    bloodGroup: "A+",
    division: "Dhaka",
    district: "Dhaka",
    area: "Mirpur",
    address: "123 Main Street, Mirpur-10",
    bio: "Regular blood donor since 2018. Happy to help those in need.",
    lastDonation: "2023-10-15",
    availableForDonation: true,
    emergencyContact: true,
    profileImage: "/placeholder.svg?height=200&width=200",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name, checked) => {
    setProfileData((prev) => ({ ...prev, [name]: checked }))
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would update the profile data in your backend
    console.log("Profile updated:", profileData)
    alert("Profile updated successfully!")
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!")
      return
    }

    // In a real app, you would update the password in your backend
    console.log("Password updated")
    alert("Password updated successfully!")

    // Reset password fields
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your personal information and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={profileData.profileImage || "/placeholder.svg"} alt={profileData.name} />
                      <AvatarFallback>{profileData.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" value={profileData.name} onChange={handleProfileChange} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profileData.email}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" value={profileData.phone} onChange={handleProfileChange} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bloodGroup">Blood Group</Label>
                        <ReactSelect
                          id="bloodGroup"
                          instanceId="bloodGroup"
                          options={bloodGroups.map((group) => ({ value: group, label: group }))}
                          value={
                            profileData.bloodGroup
                              ? { value: profileData.bloodGroup, label: profileData.bloodGroup }
                              : null
                          }
                          onChange={(option) => handleSelectChange("bloodGroup", option ? option.value : "")}
                          placeholder="Select Blood Group"
                          className="react-select-container"
                          classNamePrefix="react-select"
                          styles={selectStyles}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="division">Division</Label>
                        <ReactSelect
                          id="division"
                          instanceId="division"
                          options={divisions.map((division) => ({ value: division, label: division }))}
                          value={
                            profileData.division ? { value: profileData.division, label: profileData.division } : null
                          }
                          onChange={(option) => handleSelectChange("division", option ? option.value : "")}
                          placeholder="Select Division"
                          className="react-select-container"
                          classNamePrefix="react-select"
                          styles={selectStyles}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="district">District</Label>
                        <Input
                          id="district"
                          name="district"
                          value={profileData.district}
                          onChange={handleProfileChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="area">Area</Label>
                        <Input id="area" name="area" value={profileData.area} onChange={handleProfileChange} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Full Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={profileData.address}
                        onChange={handleProfileChange}
                        rows={2}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={profileData.bio}
                        onChange={handleProfileChange}
                        placeholder="Tell us a bit about yourself"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastDonation">Last Donation Date</Label>
                      <Input
                        id="lastDonation"
                        name="lastDonation"
                        type="date"
                        value={profileData.lastDonation}
                        onChange={handleProfileChange}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="availableForDonation"
                        checked={profileData.availableForDonation}
                        onCheckedChange={(checked) => handleSwitchChange("availableForDonation", checked)}
                      />
                      <Label htmlFor="availableForDonation">Available for blood donation</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="emergencyContact"
                        checked={profileData.emergencyContact}
                        onCheckedChange={(checked) => handleSwitchChange("emergencyContact", checked)}
                      />
                      <Label htmlFor="emergencyContact">Can be contacted for emergency donations</Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Update Password
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailDonationRequests">Donation Requests</Label>
                    <Switch id="emailDonationRequests" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailEvents">Upcoming Events</Label>
                    <Switch id="emailEvents" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailNews">News and Updates</Label>
                    <Switch id="emailNews" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">SMS Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="smsEmergency">Emergency Requests</Label>
                    <Switch id="smsEmergency" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="smsReminders">Donation Reminders</Label>
                    <Switch id="smsReminders" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-red-600 hover:bg-red-700">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
