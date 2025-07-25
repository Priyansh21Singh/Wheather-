"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Shield, User, Building, ArrowLeft, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [showOtp, setShowOtp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("user")
  const [isRegister, setIsRegister] = useState(false)
  const [fullName, setFullName] = useState("")
  const [businessCategory, setBusinessCategory] = useState("")

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setShowOtp(true)
      alert("OTP sent to your mobile number!")
    }
  }

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      if (userType === "admin") {
        window.location.href = "/admin"
      } else {
        alert("Login successful!")
        window.location.href = "/"
      }
    }
  }

  const handleGmailLogin = () => {
    alert("Redirecting to Gmail login...")
    // In real implementation, this would redirect to Google OAuth
  }

  const handleEmailLogin = () => {
    if (email && password) {
      if (userType === "admin") {
        window.location.href = "/admin"
      } else {
        alert("Login successful!")
        window.location.href = "/"
      }
    }
  }

  const handleRegister = () => {
    if (fullName && email && password && businessCategory) {
      alert("Registration successful! Please login.")
      setIsRegister(false)
    }
  }

  return (
    <div className="min-h-screen cream-bg">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  src="/images/wlg-tree-logo.png"
                  alt="Weather Land Groups Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Weather Land Groups</h1>
                <p className="text-sm text-gray-600">India Pvt Ltd</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-md">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/images/wlg-tree-logo.png"
                  alt="Weather Land Groups Logo"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <CardTitle className="text-2xl text-gray-900">{isRegister ? "Create Account" : "Welcome Back"}</CardTitle>
              <CardDescription className="text-gray-600">
                {isRegister ? "Join Weather Land Groups today" : "Choose your preferred login method"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isRegister ? (
                <Tabs defaultValue="mobile" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                    <TabsTrigger
                      value="mobile"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Mobile
                    </TabsTrigger>
                    <TabsTrigger
                      value="email"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </TabsTrigger>
                  </TabsList>

                  {/* User Type Selection */}
                  <div className="space-y-2">
                    <Label className="text-gray-900">Login as:</Label>
                    <div className="flex space-x-2">
                      <Button
                        variant={userType === "user" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setUserType("user")}
                        className={
                          userType === "user" ? "bg-green-600 hover:bg-green-700" : "border-gray-300 text-gray-700"
                        }
                      >
                        <User className="h-4 w-4 mr-1" />
                        User
                      </Button>
                      <Button
                        variant={userType === "admin" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setUserType("admin")}
                        className={
                          userType === "admin" ? "bg-green-600 hover:bg-green-700" : "border-gray-300 text-gray-700"
                        }
                      >
                        <Building className="h-4 w-4 mr-1" />
                        Admin
                      </Button>
                    </div>
                  </div>

                  <TabsContent value="mobile" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-900">
                        Mobile Number
                      </Label>
                      <div className="flex space-x-2">
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="border-gray-300 focus:border-green-500"
                          maxLength={10}
                        />
                        <Button
                          onClick={handleSendOtp}
                          disabled={phoneNumber.length !== 10}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Send OTP
                        </Button>
                      </div>
                    </div>

                    {showOtp && (
                      <div className="space-y-2">
                        <Label htmlFor="otp" className="text-gray-900">
                          Enter OTP
                        </Label>
                        <div className="flex space-x-2">
                          <Input
                            id="otp"
                            type="text"
                            placeholder="6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="border-gray-300 focus:border-green-500"
                            maxLength={6}
                          />
                          <Button
                            onClick={handleVerifyOtp}
                            disabled={otp.length !== 6}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Verify
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600">OTP sent to +91 {phoneNumber}</p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="email" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-gray-300 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-900">
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="border-gray-300 focus:border-green-500 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Button onClick={handleEmailLogin} className="w-full bg-green-600 hover:bg-green-700">
                      Sign In
                    </Button>
                  </TabsContent>

                  {/* Gmail Login */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-600">Or continue with</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={handleGmailLogin}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Continue with Gmail
                  </Button>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center space-x-2 pt-4">
                    <Shield className="h-4 w-4 text-green-600" />
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Secure Login
                    </Badge>
                  </div>
                </Tabs>
              ) : (
                /* Registration Form */
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-900">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="border-gray-300 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regEmail" className="text-gray-900">
                      Email Address
                    </Label>
                    <Input
                      id="regEmail"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-gray-300 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regPassword" className="text-gray-900">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="regPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-gray-300 focus:border-green-500 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessCategory" className="text-gray-900">
                      Business Category
                    </Label>
                    <Select value={businessCategory} onValueChange={setBusinessCategory}>
                      <SelectTrigger className="border-gray-300 focus:border-green-500">
                        <SelectValue placeholder="Select your business category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="scrap-dealers">Scrap Dealers</SelectItem>
                        <SelectItem value="black-pepper">Black Pepper Dealers</SelectItem>
                        <SelectItem value="tea-coffee">Tea & Coffee Dealers</SelectItem>
                        <SelectItem value="building-contractors">Building Contractors</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={handleRegister} className="w-full bg-green-600 hover:bg-green-700">
                    Create Account
                  </Button>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-700">
                  {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                  <button
                    onClick={() => setIsRegister(!isRegister)}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    {isRegister ? "Sign in here" : "Register here"}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
