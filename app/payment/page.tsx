"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Smartphone, Building, Shield, CheckCircle, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [selectedPlan, setSelectedPlan] = useState("premium")

  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: "₹999",
      period: "/month",
      features: ["5 Listings", "Basic Support", "Standard Analytics", "Email Support"],
      popular: false,
      description: "Perfect for small businesses getting started",
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: "₹1,999",
      period: "/month",
      features: [
        "20 Listings",
        "Priority Support",
        "Advanced Analytics",
        "Featured Listings",
        "Phone Support",
        "Custom Branding",
      ],
      popular: true,
      description: "Most popular choice for growing businesses",
    },
    {
      id: "enterprise",
      name: "Enterprise Plan",
      price: "₹4,999",
      period: "/month",
      features: [
        "Unlimited Listings",
        "24/7 Support",
        "Custom Analytics",
        "API Access",
        "White Label",
        "Dedicated Manager",
        "Custom Integration",
      ],
      popular: false,
      description: "Complete solution for large enterprises",
    },
  ]

  const handlePayment = () => {
    alert("Payment processing... This would integrate with Razorpay/Stripe payment gateway.")
    // In real implementation, this would process the payment
  }

  return (
    <div className="min-h-screen cream-bg">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/wlg-tree-logo.png"
                alt="Weather Land Groups Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Payment Gateway</h1>
                <p className="text-sm text-gray-600">Weather Land Groups</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-green-600 text-green-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Business Plan</h2>
            <p className="text-gray-700 text-lg">Select the perfect plan for your business needs and growth</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Plan Selection */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {plans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative cursor-pointer transition-all duration-300 cream-card ${
                      selectedPlan === plan.id
                        ? "border-green-500 shadow-lg bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-gray-900">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold text-green-600">
                        {plan.price}
                        <span className="text-sm text-gray-500">{plan.period}</span>
                      </div>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Payment Methods */}
              <Card className="border-gray-200 cream-card">
                <CardHeader>
                  <CardTitle className="text-gray-900">Payment Method</CardTitle>
                  <CardDescription>Choose your preferred payment option</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-5 w-5 text-green-600" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium text-gray-900">Credit/Debit Card</p>
                          <p className="text-sm text-gray-600">Visa, Mastercard, RuPay</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                      <RadioGroupItem value="upi" id="upi" />
                      <Smartphone className="h-5 w-5 text-green-600" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium text-gray-900">UPI Payment</p>
                          <p className="text-sm text-gray-600">PhonePe, Google Pay, Paytm</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Building className="h-5 w-5 text-green-600" />
                      <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                        <div>
                          <p className="font-medium text-gray-900">Net Banking</p>
                          <p className="text-sm text-gray-600">All major banks supported</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="mt-6 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardNumber" className="text-gray-900">
                            Card Number
                          </Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="border-gray-300" />
                        </div>
                        <div>
                          <Label htmlFor="cardName" className="text-gray-900">
                            Cardholder Name
                          </Label>
                          <Input id="cardName" placeholder="John Doe" className="border-gray-300" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="text-gray-900">
                            Expiry Date
                          </Label>
                          <Input id="expiry" placeholder="MM/YY" className="border-gray-300" />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="text-gray-900">
                            CVV
                          </Label>
                          <Input id="cvv" placeholder="123" className="border-gray-300" />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="mt-6">
                      <Label htmlFor="upiId" className="text-gray-900">
                        UPI ID
                      </Label>
                      <Input id="upiId" placeholder="yourname@paytm" className="border-gray-300" />
                    </div>
                  )}

                  {paymentMethod === "netbanking" && (
                    <div className="mt-6">
                      <Label htmlFor="bank" className="text-gray-900">
                        Select Bank
                      </Label>
                      <Select>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="Choose your bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sbi">State Bank of India</SelectItem>
                          <SelectItem value="hdfc">HDFC Bank</SelectItem>
                          <SelectItem value="icici">ICICI Bank</SelectItem>
                          <SelectItem value="axis">Axis Bank</SelectItem>
                          <SelectItem value="pnb">Punjab National Bank</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-gray-200 cream-card sticky top-4">
                <CardHeader>
                  <CardTitle className="text-gray-900">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Plan</span>
                    <span className="font-medium text-gray-900">{plans.find((p) => p.id === selectedPlan)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Price</span>
                    <span className="font-medium text-gray-900">
                      {plans.find((p) => p.id === selectedPlan)?.price}/month
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">GST (18%)</span>
                    <span className="font-medium text-gray-900">
                      ₹
                      {Math.round(
                        Number.parseInt(plans.find((p) => p.id === selectedPlan)?.price.replace("₹", "") || "0") * 0.18,
                      )}
                    </span>
                  </div>
                  <Separator className="bg-gray-200" />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-green-600">
                      ₹
                      {Math.round(
                        Number.parseInt(plans.find((p) => p.id === selectedPlan)?.price.replace("₹", "") || "0") * 1.18,
                      )}
                    </span>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6" onClick={handlePayment}>
                    Complete Payment
                  </Button>

                  <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                    <Shield className="h-4 w-4" />
                    <span>Secure payment powered by Razorpay</span>
                  </div>

                  <div className="text-xs text-gray-600 text-center">
                    By proceeding, you agree to our Terms of Service and Privacy Policy
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
