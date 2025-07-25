"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Users, Building2, DollarSign, TrendingUp, Plus, Edit, Trash2, Eye, Search, Upload, Save } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContentManagement from "./content-management"
import MediaManagement from "./media-management"
import ProductManagement from "./product-management"
import AdvancedSettings from "./advanced-settings"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data
  const stats = [
    { title: "Total Users", value: "1,234", icon: Users, change: "+12%" },
    { title: "Active Listings", value: "856", icon: Building2, change: "+8%" },
    { title: "Revenue", value: "₹2,45,000", icon: DollarSign, change: "+15%" },
    { title: "Growth Rate", value: "23%", icon: TrendingUp, change: "+5%" },
  ]

  const recentUsers = [
    { id: 1, name: "Rajesh Kumar", email: "rajesh@email.com", type: "Real Estate", status: "Active" },
    { id: 2, name: "Priya Sharma", email: "priya@email.com", type: "Tea Dealer", status: "Pending" },
    { id: 3, name: "Amit Singh", email: "amit@email.com", type: "Contractor", status: "Active" },
    { id: 4, name: "Sunita Devi", email: "sunita@email.com", type: "Scrap Dealer", status: "Active" },
  ]

  const listings = [
    { id: 1, title: "Premium Office Space", category: "Real Estate", price: "₹50,000/month", status: "Active" },
    { id: 2, title: "Organic Black Pepper", category: "Spices", price: "₹800/kg", status: "Active" },
    { id: 3, title: "Construction Services", category: "Contractor", price: "₹2,00,000", status: "Pending" },
    { id: 4, title: "Metal Scrap Collection", category: "Scrap", price: "₹45/kg", status: "Active" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
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
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Weather Land Groups</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">Admin Panel</Badge>
              <Link href="/">
                <Button variant="outline" className="border-green-600 text-green-600">
                  Back to Site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-9 bg-white border border-gray-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Users
            </TabsTrigger>
            <TabsTrigger value="listings" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Listings
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Products
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Content
            </TabsTrigger>
            <TabsTrigger value="media" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Media
            </TabsTrigger>
            <TabsTrigger value="payments" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Payments
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Settings
            </TabsTrigger>
            <TabsTrigger value="advanced" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Advanced
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-gray-200 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-500">{stat.change} from last month</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <stat.icon className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Recent Users</CardTitle>
                  <CardDescription>Latest user registrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.slice(0, 4).map((user) => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.type}</p>
                        </div>
                        <Badge
                          variant={user.status === "Active" ? "default" : "secondary"}
                          className={user.status === "Active" ? "bg-green-600" : ""}
                        >
                          {user.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Recent Listings</CardTitle>
                  <CardDescription>Latest business listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {listings.slice(0, 4).map((listing) => (
                      <div key={listing.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{listing.title}</p>
                          <p className="text-sm text-gray-600">{listing.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{listing.price}</p>
                          <Badge
                            variant={listing.status === "Active" ? "default" : "secondary"}
                            className={listing.status === "Active" ? "bg-green-600" : ""}
                          >
                            {listing.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-gray-900">User Management</CardTitle>
                    <CardDescription>Manage registered users and their permissions</CardDescription>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-gray-300"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-48 border-gray-300">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="scrap">Scrap Dealers</SelectItem>
                      <SelectItem value="spices">Spice Dealers</SelectItem>
                      <SelectItem value="contractor">Contractors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.type}</TableCell>
                        <TableCell>
                          <Badge
                            variant={user.status === "Active" ? "default" : "secondary"}
                            className={user.status === "Active" ? "bg-green-600" : ""}
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listings" className="space-y-6">
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-gray-900">Listing Management</CardTitle>
                    <CardDescription>Manage business listings and categories</CardDescription>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Listing
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {listings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell className="font-medium">{listing.title}</TableCell>
                        <TableCell>{listing.category}</TableCell>
                        <TableCell>{listing.price}</TableCell>
                        <TableCell>
                          <Badge
                            variant={listing.status === "Active" ? "default" : "secondary"}
                            className={listing.status === "Active" ? "bg-green-600" : ""}
                          >
                            {listing.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <ProductManagement />
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <ContentManagement />
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <MediaManagement />
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Payment Management</CardTitle>
                <CardDescription>Monitor transactions and payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card className="border-gray-200">
                    <CardContent className="p-4 text-center">
                      <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-900">₹2,45,000</p>
                      <p className="text-sm text-gray-600">Total Revenue</p>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200">
                    <CardContent className="p-4 text-center">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-900">156</p>
                      <p className="text-sm text-gray-600">Transactions</p>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200">
                    <CardContent className="p-4 text-center">
                      <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-gray-900">98%</p>
                      <p className="text-sm text-gray-600">Success Rate</p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-gray-700">
                  Payment gateway integration and transaction monitoring will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Site Configuration</CardTitle>
                  <CardDescription>Basic site settings and information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-gray-900">Site Name</Label>
                    <Input defaultValue="Weather Land Groups India Pvt Ltd" className="border-gray-300" />
                  </div>
                  <div>
                    <Label className="text-gray-900">Site Tagline</Label>
                    <Input defaultValue="Sustainable Business Solutions" className="border-gray-300" />
                  </div>
                  <div>
                    <Label className="text-gray-900">Site Description</Label>
                    <Textarea
                      defaultValue="Connecting businesses across Real Estate, Recycling, Spices, Beverages, and Construction with nature-conscious solutions and sustainable practices."
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label className="text-gray-900">Site Logo</Label>
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/images/wlg-tree-logo.png"
                        alt="Current Logo"
                        width={50}
                        height={50}
                        className="rounded-full border border-gray-300"
                      />
                      <Button variant="outline" className="border-green-600 text-green-600">
                        <Upload className="h-4 w-4 mr-2" />
                        Change Logo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Contact Settings</CardTitle>
                  <CardDescription>Update contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-gray-900">Primary Phone</Label>
                    <Input defaultValue="+91 98765 43210" className="border-gray-300" />
                  </div>
                  <div>
                    <Label className="text-gray-900">Primary Email</Label>
                    <Input defaultValue="info@weatherlandgroups.com" className="border-gray-300" />
                  </div>
                  <div>
                    <Label className="text-gray-900">Support Email</Label>
                    <Input defaultValue="support@weatherlandgroups.com" className="border-gray-300" />
                  </div>
                  <div>
                    <Label className="text-gray-900">Business Address</Label>
                    <Textarea
                      defaultValue="Weather Land Groups India Pvt Ltd&#10;Mumbai, Maharashtra, India"
                      className="border-gray-300"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">SEO Settings</CardTitle>
                  <CardDescription>Search engine optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-gray-900">Meta Title</Label>
                    <Input
                      defaultValue="Weather Land Groups India Pvt Ltd - Sustainable Business Solutions"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-900">Meta Description</Label>
                    <Textarea
                      defaultValue="Connecting businesses across Real Estate, Recycling, Spices, Beverages, and Construction with nature-conscious solutions."
                      className="border-gray-300"
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label className="text-gray-900">Keywords</Label>
                    <Input
                      defaultValue="real estate, scrap dealers, spices, tea, coffee, construction, sustainable business"
                      className="border-gray-300"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Business Categories</CardTitle>
                  <CardDescription>Manage available business categories</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[
                      "Real Estate",
                      "Scrap Dealers",
                      "Black Pepper Dealers",
                      "Tea & Coffee Dealers",
                      "Building Contractors",
                    ].map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded">
                        <span className="text-gray-900">{category}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-300 text-red-600">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Category
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end">
              <Button className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                Save All Settings
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <AdvancedSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
