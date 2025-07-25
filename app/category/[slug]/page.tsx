"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, Phone, Mail, Star, ArrowLeft, Heart, Share2, Edit } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [priceRange, setPriceRange] = useState("all")

  // Enhanced mock data with detailed fields for each category
  const getCategoryData = (slug: string) => {
    const categories: Record<string, any> = {
      "real-estate": {
        title: "Real Estate",
        description: "Premium properties and land development opportunities",
        listings: [
          {
            id: 1,
            title: "Premium Office Space in Bandra",
            description: "Modern office space with all amenities in prime location",
            price: "₹50,000",
            priceUnit: "per month",
            location: "Bandra West, Mumbai",
            rating: 4.8,
            image: "/images/real-estate.jpg",
            contact: "+91 98765 43210",
            email: "contact@property1.com",
            area: "2,500 sq ft",
            bedrooms: "N/A",
            bathrooms: "4",
            parking: "Yes",
            furnished: "Semi-furnished",
            amenities: ["AC", "Elevator", "Security", "Power Backup"],
            propertyType: "Commercial",
            availableFrom: "Immediate",
            deposit: "₹2,00,000",
          },
          {
            id: 2,
            title: "Luxury Apartment Complex",
            description: "3BHK apartments with garden view and modern amenities",
            price: "₹1,20,000",
            priceUnit: "per month",
            location: "Powai, Mumbai",
            rating: 4.9,
            image: "/images/real-estate-2.jpg",
            contact: "+91 98765 43211",
            email: "info@luxury.com",
            area: "1,800 sq ft",
            bedrooms: "3",
            bathrooms: "3",
            parking: "Yes",
            furnished: "Fully furnished",
            amenities: ["Swimming Pool", "Gym", "Garden", "Club House"],
            propertyType: "Residential",
            availableFrom: "15th Jan 2024",
            deposit: "₹3,60,000",
          },
        ],
      },
      "scrap-dealers": {
        title: "Scrap Dealers",
        description: "Eco-friendly scrap metal and recycling services",
        listings: [
          {
            id: 1,
            title: "Mumbai Metal Recyclers",
            description: "Best rates for all types of metal scrap with doorstep pickup",
            price: "₹45",
            priceUnit: "per kg",
            location: "Dharavi, Mumbai",
            rating: 4.6,
            image: "/images/scrap-dealers.jpg",
            contact: "+91 98765 43212",
            email: "mumbai@metalrecycle.com",
            scrapTypes: ["Iron", "Steel", "Aluminum", "Copper", "Brass"],
            minQuantity: "50 kg",
            pickupService: "Yes",
            paymentModes: ["Cash", "Bank Transfer", "UPI"],
            workingHours: "9 AM - 6 PM",
            certifications: ["ISO 14001", "Pollution Control Board"],
            serviceArea: "Mumbai, Thane, Navi Mumbai",
          },
          {
            id: 2,
            title: "Green Scrap Solutions",
            description: "Eco-friendly metal recycling and waste management services",
            price: "₹50",
            priceUnit: "per kg",
            location: "Andheri, Mumbai",
            rating: 4.7,
            image: "/images/scrap-metal.jpg",
            contact: "+91 98765 43219",
            email: "green@scrapsolutions.com",
            scrapTypes: ["Electronic Waste", "Plastic", "Paper", "Metal"],
            minQuantity: "25 kg",
            pickupService: "Yes",
            paymentModes: ["Cash", "Cheque", "Online Transfer"],
            workingHours: "8 AM - 7 PM",
            certifications: ["Green Certification", "E-Waste Authorization"],
            serviceArea: "Western Mumbai",
          },
        ],
      },
      "black-pepper-dealers": {
        title: "Black Pepper Dealers",
        description: "Premium quality spices and black pepper suppliers",
        listings: [
          {
            id: 1,
            title: "Kerala Spice Traders",
            description: "Authentic Kerala black pepper, direct from farms",
            price: "₹800",
            priceUnit: "per kg",
            location: "Kochi, Kerala",
            rating: 4.7,
            image: "/images/black-pepper.jpg",
            contact: "+91 98765 43213",
            email: "kerala@spicetraders.com",
            origin: "Wayanad, Kerala",
            quality: "Premium Grade A",
            packaging: "Vacuum Sealed",
            minOrder: "10 kg",
            shelfLife: "24 months",
            certifications: ["Organic", "FSSAI", "Spices Board"],
            varieties: ["Malabar Black Pepper", "Tellicherry", "Wayanad Special"],
            moisture: "12% max",
            piperine: "5.5% min",
          },
          {
            id: 2,
            title: "Malabar Pepper Co.",
            description: "Organic black pepper with international certifications",
            price: "₹950",
            priceUnit: "per kg",
            location: "Kozhikode, Kerala",
            rating: 4.8,
            image: "/images/pepper-spices.jpg",
            contact: "+91 98765 43214",
            email: "info@malabarpepperco.com",
            origin: "Malabar Coast, Kerala",
            quality: "Export Quality",
            packaging: "Food Grade Bags",
            minOrder: "5 kg",
            shelfLife: "36 months",
            certifications: ["Organic", "Fair Trade", "USDA Organic"],
            varieties: ["Black Pepper Whole", "Cracked Pepper", "Pepper Powder"],
            moisture: "10% max",
            piperine: "6% min",
          },
        ],
      },
      "tea-coffee-dealers": {
        title: "Tea & Coffee Dealers",
        description: "Fresh tea leaves and premium coffee beans",
        listings: [
          {
            id: 1,
            title: "Darjeeling Tea Gardens",
            description: "Premium Darjeeling tea direct from gardens",
            price: "₹1,200",
            priceUnit: "per kg",
            location: "Darjeeling, West Bengal",
            rating: 4.9,
            image: "/images/tea-coffee.jpg",
            contact: "+91 98765 43215",
            email: "sales@darjeelingtea.com",
            teaType: "Black Tea",
            grade: "FTGFOP1",
            harvest: "Second Flush 2024",
            estate: "Makaibari Tea Estate",
            altitude: "6,000 feet",
            processing: "Orthodox",
            packaging: "Aluminum Foil Lined",
            minOrder: "2 kg",
            certifications: ["Organic", "Fair Trade", "Darjeeling Logo"],
            brewingTime: "3-5 minutes",
          },
          {
            id: 2,
            title: "Coorg Coffee Estates",
            description: "Arabica coffee beans from Coorg plantations",
            price: "₹1,500",
            priceUnit: "per kg",
            location: "Coorg, Karnataka",
            rating: 4.8,
            image: "/images/tea-plantation.jpg",
            contact: "+91 98765 43216",
            email: "info@coorgcoffee.com",
            coffeeType: "Arabica",
            roastLevel: "Medium Roast",
            processing: "Washed",
            altitude: "4,000-5,000 feet",
            harvest: "December 2023",
            cupping: "85+ Score",
            packaging: "Valve Bags",
            minOrder: "5 kg",
            certifications: ["Rainforest Alliance", "UTZ", "Organic"],
            grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
          },
        ],
      },
      "building-contractors": {
        title: "Building Contractors",
        description: "Professional construction and building services",
        listings: [
          {
            id: 1,
            title: "Mumbai Construction Co.",
            description: "Complete building construction services with modern techniques",
            price: "₹2,00,000",
            priceUnit: "per project",
            location: "Mumbai, Maharashtra",
            rating: 4.7,
            image: "/images/building-contractors.jpg",
            contact: "+91 98765 43217",
            email: "projects@mumbaiconst.com",
            services: ["Residential", "Commercial", "Industrial", "Renovation"],
            experience: "15 years",
            teamSize: "50+ workers",
            licenses: ["PWD License", "Municipal Corporation", "Labor License"],
            specialization: ["High-rise Buildings", "Luxury Homes", "Office Complexes"],
            materials: ["RCC", "Steel Structure", "Precast"],
            warranty: "5 years structural",
            timeline: "As per project scope",
            paymentTerms: "30% advance, 40% during work, 30% completion",
          },
          {
            id: 2,
            title: "Green Build Solutions",
            description: "Eco-friendly construction with sustainable materials",
            price: "₹2,50,000",
            priceUnit: "per project",
            location: "Pune, Maharashtra",
            rating: 4.9,
            image: "/images/construction-site.jpg",
            contact: "+91 98765 43218",
            email: "info@greenbuild.com",
            services: ["Green Buildings", "Solar Installation", "Rainwater Harvesting"],
            experience: "12 years",
            teamSize: "35+ workers",
            licenses: ["Green Building Certification", "Solar Installation License"],
            specialization: ["LEED Buildings", "Net Zero Homes", "Sustainable Design"],
            materials: ["Recycled Materials", "Bamboo", "Solar Panels"],
            warranty: "7 years structural + 5 years green systems",
            timeline: "20% longer for sustainable practices",
            paymentTerms: "25% advance, 50% milestones, 25% completion",
          },
        ],
      },
    }

    return (
      categories[slug] || {
        title: "Category Not Found",
        description: "The requested category could not be found",
        listings: [],
      }
    )
  }

  const categoryData = getCategoryData(params.slug)

  const renderListingDetails = (listing: any) => {
    switch (params.slug) {
      case "real-estate":
        return (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Area:</span> {listing.area}
            </div>
            <div>
              <span className="font-medium text-gray-700">Bedrooms:</span> {listing.bedrooms}
            </div>
            <div>
              <span className="font-medium text-gray-700">Bathrooms:</span> {listing.bathrooms}
            </div>
            <div>
              <span className="font-medium text-gray-700">Parking:</span> {listing.parking}
            </div>
            <div>
              <span className="font-medium text-gray-700">Furnished:</span> {listing.furnished}
            </div>
            <div>
              <span className="font-medium text-gray-700">Type:</span> {listing.propertyType}
            </div>
            <div className="col-span-2">
              <span className="font-medium text-gray-700">Amenities:</span> {listing.amenities.join(", ")}
            </div>
          </div>
        )
      case "scrap-dealers":
        return (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Min Quantity:</span> {listing.minQuantity}
            </div>
            <div>
              <span className="font-medium text-gray-700">Pickup:</span> {listing.pickupService}
            </div>
            <div>
              <span className="font-medium text-gray-700">Working Hours:</span> {listing.workingHours}
            </div>
            <div>
              <span className="font-medium text-gray-700">Service Area:</span> {listing.serviceArea}
            </div>
            <div className="col-span-2">
              <span className="font-medium text-gray-700">Scrap Types:</span> {listing.scrapTypes.join(", ")}
            </div>
          </div>
        )
      case "black-pepper-dealers":
        return (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Origin:</span> {listing.origin}
            </div>
            <div>
              <span className="font-medium text-gray-700">Quality:</span> {listing.quality}
            </div>
            <div>
              <span className="font-medium text-gray-700">Min Order:</span> {listing.minOrder}
            </div>
            <div>
              <span className="font-medium text-gray-700">Shelf Life:</span> {listing.shelfLife}
            </div>
            <div>
              <span className="font-medium text-gray-700">Moisture:</span> {listing.moisture}
            </div>
            <div>
              <span className="font-medium text-gray-700">Piperine:</span> {listing.piperine}
            </div>
          </div>
        )
      case "tea-coffee-dealers":
        return (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Type:</span> {listing.teaType || listing.coffeeType}
            </div>
            <div>
              <span className="font-medium text-gray-700">Grade/Roast:</span> {listing.grade || listing.roastLevel}
            </div>
            <div>
              <span className="font-medium text-gray-700">Origin:</span> {listing.estate || listing.altitude}
            </div>
            <div>
              <span className="font-medium text-gray-700">Min Order:</span> {listing.minOrder}
            </div>
            <div>
              <span className="font-medium text-gray-700">Processing:</span> {listing.processing}
            </div>
            <div>
              <span className="font-medium text-gray-700">Harvest:</span> {listing.harvest}
            </div>
          </div>
        )
      case "building-contractors":
        return (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Experience:</span> {listing.experience}
            </div>
            <div>
              <span className="font-medium text-gray-700">Team Size:</span> {listing.teamSize}
            </div>
            <div>
              <span className="font-medium text-gray-700">Warranty:</span> {listing.warranty}
            </div>
            <div>
              <span className="font-medium text-gray-700">Timeline:</span> {listing.timeline}
            </div>
            <div className="col-span-2">
              <span className="font-medium text-gray-700">Services:</span> {listing.services.join(", ")}
            </div>
            <div className="col-span-2">
              <span className="font-medium text-gray-700">Specialization:</span> {listing.specialization.join(", ")}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen cream-bg">
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
                <h1 className="text-xl font-bold text-gray-900">{categoryData.title}</h1>
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
        {/* Category Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{categoryData.title}</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">{categoryData.description}</p>
          <Badge className="mt-4 bg-green-100 text-green-800">{categoryData.listings.length} Active Listings</Badge>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-gray-200 cream-card">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                <Input
                  placeholder="Search listings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="border-gray-300">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-1000">₹0 - ₹1,000</SelectItem>
                  <SelectItem value="1000-5000">₹1,000 - ₹5,000</SelectItem>
                  <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                  <SelectItem value="10000+">₹10,000+</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-green-600 hover:bg-green-700">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {categoryData.listings.map((listing: any) => (
            <Card
              key={listing.id}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-green-400 cream-card"
            >
              <CardHeader className="pb-4">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/80 hover:bg-white">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      {listing.price} {listing.priceUnit}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-gray-900 group-hover:text-green-600 transition-colors">
                  {listing.title}
                </CardTitle>
                <CardDescription className="text-gray-700">{listing.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">{listing.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{listing.rating}</span>
                  <span className="text-sm text-gray-600">(4.8/5)</span>
                </div>

                {/* Category-specific details */}
                <div className="bg-gray-50 p-4 rounded-lg">{renderListingDetails(listing)}</div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      View Details
                    </Button>
                    <Link href="/payment">
                      <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Load More Listings
          </Button>
        </div>
      </div>
    </div>
  )
}
