"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Save, Edit, Trash2, Plus, ImageIcon } from "lucide-react"

export default function ContentManagement() {
  const [selectedSection, setSelectedSection] = useState("hero")
  const [isEditing, setIsEditing] = useState(false)

  // Mock content data
  const [content, setContent] = useState({
    hero: {
      title: "Your Gateway to Sustainable Business",
      subtitle:
        "Connecting businesses across Real Estate, Recycling, Spices, Beverages, and Construction with nature-conscious solutions and sustainable practices.",
      badge: "🌿 Nature-Based Business Solutions",
      primaryButton: "Explore Categories",
      secondaryButton: "Join Our Network",
      backgroundImage: "/placeholder.svg?height=600&width=1200",
    },
    about: {
      title: "About Weather Land Groups",
      description:
        "Weather Land Groups India Pvt Ltd is committed to fostering sustainable business practices across diverse industries. We connect businesses and individuals in real estate, recycling, spices, beverages, and construction sectors.",
      features: ["Trusted by 500+ businesses", "Eco-friendly business solutions", "24/7 customer support"],
      image: "/placeholder.svg?height=400&width=600",
    },
    contact: {
      phone: "+91 98765 43210",
      email: "info@weatherlandgroups.com",
      address: "Mumbai, Maharashtra, India",
      socialMedia: {
        facebook: "https://facebook.com/weatherlandgroups",
        twitter: "https://twitter.com/weatherlandgroups",
        linkedin: "https://linkedin.com/company/weatherlandgroups",
      },
    },
    categories: [
      {
        id: 1,
        title: "Real Estate",
        description: "Premium properties and land development",
        image: "/images/real-estate.jpg",
        count: "150+ Properties",
      },
      {
        id: 2,
        title: "Scrap Dealers",
        description: "Eco-friendly scrap metal and recycling services",
        image: "/images/scrap-dealers.jpg",
        count: "50+ Dealers",
      },
      {
        id: 3,
        title: "Black Pepper Dealers",
        description: "Premium quality spices and black pepper",
        image: "/images/black-pepper.jpg",
        count: "30+ Suppliers",
      },
      {
        id: 4,
        title: "Tea & Coffee Dealers",
        description: "Fresh tea leaves and coffee beans",
        image: "/images/tea-coffee.jpg",
        count: "40+ Dealers",
      },
      {
        id: 5,
        title: "Building Contractors",
        description: "Professional construction and building services",
        image: "/images/building-contractors.jpg",
        count: "80+ Contractors",
      },
    ],
  })

  const handleSave = () => {
    alert("Content saved successfully!")
    setIsEditing(false)
  }

  const handleImageUpload = (section: string, field: string) => {
    // Simulate image upload
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        // In real implementation, upload to cloud storage
        alert(`Image uploaded for ${section} - ${field}`)
      }
    }
    input.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-green-900">Content Management</h2>
          <p className="text-green-700">Manage all website content, images, and text</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
            className="border-green-600 text-green-600"
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? "Cancel" : "Edit Mode"}
          </Button>
          {isEditing && (
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          )}
        </div>
      </div>

      <Tabs value={selectedSection} onValueChange={setSelectedSection}>
        <TabsList className="grid w-full grid-cols-4 bg-green-50">
          <TabsTrigger value="hero">Hero Section</TabsTrigger>
          <TabsTrigger value="about">About Section</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
        </TabsList>

        <TabsContent value="hero" className="space-y-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-900">Hero Section Content</CardTitle>
              <CardDescription>Main landing page hero section</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-green-900">Main Title</Label>
                    <Input
                      value={content.hero.title}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, title: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">Subtitle</Label>
                    <Textarea
                      value={content.hero.subtitle}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, subtitle: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">Badge Text</Label>
                    <Input
                      value={content.hero.badge}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, badge: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-green-900">Primary Button Text</Label>
                    <Input
                      value={content.hero.primaryButton}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, primaryButton: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">Secondary Button Text</Label>
                    <Input
                      value={content.hero.secondaryButton}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          hero: { ...content.hero, secondaryButton: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">Background Image</Label>
                    <div className="flex space-x-2">
                      <Input value={content.hero.backgroundImage} disabled className="border-green-300" />
                      <Button
                        onClick={() => handleImageUpload("hero", "background")}
                        disabled={!isEditing}
                        variant="outline"
                        className="border-green-600 text-green-600"
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-900">About Section Content</CardTitle>
              <CardDescription>Company information and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-green-900">Section Title</Label>
                    <Input
                      value={content.about.title}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          about: { ...content.about, title: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">Description</Label>
                    <Textarea
                      value={content.about.description}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          about: { ...content.about, description: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                      rows={4}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-green-900">Features (one per line)</Label>
                    <Textarea
                      value={content.about.features.join("\n")}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          about: { ...content.about, features: e.target.value.split("\n") },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">About Image</Label>
                    <div className="flex space-x-2">
                      <Input value={content.about.image} disabled className="border-green-300" />
                      <Button
                        onClick={() => handleImageUpload("about", "image")}
                        disabled={!isEditing}
                        variant="outline"
                        className="border-green-600 text-green-600"
                      >
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card className="border-green-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-green-900">Business Categories</CardTitle>
                  <CardDescription>Manage business category information</CardDescription>
                </div>
                <Button disabled={!isEditing} className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Category
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {content.categories.map((category, index) => (
                  <Card key={category.id} className="border-green-100">
                    <CardContent className="p-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-green-900">Category Title</Label>
                          <Input
                            value={category.title}
                            onChange={(e) => {
                              const newCategories = [...content.categories]
                              newCategories[index].title = e.target.value
                              setContent({ ...content, categories: newCategories })
                            }}
                            disabled={!isEditing}
                            className="border-green-300"
                          />
                        </div>
                        <div>
                          <Label className="text-green-900">Description</Label>
                          <Input
                            value={category.description}
                            onChange={(e) => {
                              const newCategories = [...content.categories]
                              newCategories[index].description = e.target.value
                              setContent({ ...content, categories: newCategories })
                            }}
                            disabled={!isEditing}
                            className="border-green-300"
                          />
                        </div>
                        <div>
                          <Label className="text-green-900">Count Display</Label>
                          <Input
                            value={category.count}
                            onChange={(e) => {
                              const newCategories = [...content.categories]
                              newCategories[index].count = e.target.value
                              setContent({ ...content, categories: newCategories })
                            }}
                            disabled={!isEditing}
                            className="border-green-300"
                          />
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Button
                            onClick={() => handleImageUpload("category", category.id.toString())}
                            disabled={!isEditing}
                            variant="outline"
                            size="sm"
                            className="border-green-600 text-green-600"
                          >
                            <ImageIcon className="h-4 w-4 mr-2" />
                            Change Image
                          </Button>
                        </div>
                        <Button
                          disabled={!isEditing}
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-900">Contact Information</CardTitle>
              <CardDescription>Update company contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-green-900">Phone Number</Label>
                    <Input
                      value={content.contact.phone}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: { ...content.contact, phone: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">Email Address</Label>
                    <Input
                      value={content.contact.email}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: { ...content.contact, email: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">Address</Label>
                    <Textarea
                      value={content.contact.address}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: { ...content.contact, address: e.target.value },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                      rows={2}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-green-900">Facebook URL</Label>
                    <Input
                      value={content.contact.socialMedia.facebook}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: {
                            ...content.contact,
                            socialMedia: { ...content.contact.socialMedia, facebook: e.target.value },
                          },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">Twitter URL</Label>
                    <Input
                      value={content.contact.socialMedia.twitter}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: {
                            ...content.contact,
                            socialMedia: { ...content.contact.socialMedia, twitter: e.target.value },
                          },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                  <div>
                    <Label className="text-green-900">LinkedIn URL</Label>
                    <Input
                      value={content.contact.socialMedia.linkedin}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          contact: {
                            ...content.contact,
                            socialMedia: { ...content.contact.socialMedia, linkedin: e.target.value },
                          },
                        })
                      }
                      disabled={!isEditing}
                      className="border-green-300"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
