"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Heart } from "lucide-react"
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

// Add this component after the imports
const OtpInput = ({ value, onChange }) => {
  const [otp, setOtp] = useState(value.split("").length === 6 ? value.split("") : Array(6).fill(""))
  const inputRefs = useRef([])

  useEffect(() => {
    // Initialize refs array
    inputRefs.current = inputRefs.current.slice(0, 6)
  }, [])

  useEffect(() => {
    // Update parent component when OTP changes
    onChange(otp.join(""))
  }, [otp, onChange])

  const handleChange = (e, index) => {
    const newValue = e.target.value

    // Only allow one digit per input
    if (newValue.length > 1) {
      // If pasting multiple digits, distribute them
      if (newValue.length === 6 && /^\d+$/.test(newValue)) {
        const digits = newValue.split("")
        setOtp(digits)
        // Focus on the last input
        inputRefs.current[5].focus()
        return
      }
      return
    }

    // Only allow digits
    if (newValue && !/^\d$/.test(newValue)) return

    // Update the OTP array
    const newOtp = [...otp]
    newOtp[index] = newValue
    setOtp(newOtp)

    // Move focus to next input if current input is filled
    if (newValue && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // If current field is empty and backspace is pressed, move to previous field
        const newOtp = [...otp]
        newOtp[index - 1] = ""
        setOtp(newOtp)
        inputRefs.current[index - 1].focus()
      } else if (otp[index]) {
        // If current field has a value, clear it
        const newOtp = [...otp]
        newOtp[index] = ""
        setOtp(newOtp)
      }
    }

    // Handle left arrow key
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus()
    }

    // Handle right arrow key
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text")

    // Check if pasted data is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("")
      setOtp(digits)
      // Focus on the last input
      inputRefs.current[5].focus()
    }
  }

  return (
    <div className="flex gap-2 justify-between">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={otp[index] || ""}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center text-xl"
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
    </div>
  )
}

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"]

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    bloodGroup: "",
    division: "",
    district: "",
    area: "",
    otp: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitRegistration = (e) => {
    e.preventDefault()
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    // In a real app, you would send registration data to your backend
    console.log("Registration form submitted:", formData)

    // Move to OTP verification step
    setStep(2)
  }

  const handleSubmitOTP = (e) => {
    e.preventDefault()
    // In a real app, you would verify OTP with your backend
    console.log("OTP submitted:", formData.otp)

    // Complete registration
    alert("Registration successful! You can now login.")
    // Redirect to login page
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <Heart className="h-10 w-10 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold">
            {step === 1 ? "Create an account" : "Verify your account"}
          </CardTitle>
          <CardDescription>
            {step === 1 ? "Enter your information to create an account" : "Enter the OTP sent to your email/phone"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <form onSubmit={handleSubmitRegistration} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+880 1712-345678"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <ReactSelect
                  id="bloodGroup"
                  instanceId="bloodGroup"
                  options={bloodGroups.map((group) => ({ value: group, label: group }))}
                  value={formData.bloodGroup ? { value: formData.bloodGroup, label: formData.bloodGroup } : null}
                  onChange={(option) => handleSelectChange("bloodGroup", option ? option.value : "")}
                  placeholder="Select Blood Group"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  styles={selectStyles}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="division">Division</Label>
                <ReactSelect
                  id="division"
                  instanceId="division"
                  options={divisions.map((division) => ({ value: division, label: division }))}
                  value={formData.division ? { value: formData.division, label: formData.division } : null}
                  onChange={(option) => handleSelectChange("division", option ? option.value : "")}
                  placeholder="Select Division"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  styles={selectStyles}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    name="district"
                    placeholder="Your district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Area</Label>
                  <Input
                    id="area"
                    name="area"
                    placeholder="Your area"
                    value={formData.area}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Register
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmitOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">OTP Code</Label>
                <OtpInput value={formData.otp} onChange={(otp) => setFormData((prev) => ({ ...prev, otp }))} />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Verify & Complete
              </Button>
              <div className="text-center text-sm">
                Didn&apos;t receive the code?{" "}
                <button type="button" className="text-red-600 hover:underline">
                  Resend OTP
                </button>
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-red-600 hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
