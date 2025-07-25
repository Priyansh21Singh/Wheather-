import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Recycle, Coffee, Hammer, Building, Phone, Mail, MapPin, User, HomeIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      title: "Real Estate",
      icon: Building,
      description: "Houses, Rentals, Commercial",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      slug: "real-estate",
    },
    {
      title: "Scrap Services",
      icon: Recycle,
      description: "Metal, Plastic, Electronics",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      slug: "scrap-dealers",
    },
    {
      title: "Black Pepper",
      icon: Coffee,
      description: "Premium Quality Spices",
      color: "bg-green-100",
      iconColor: "text-green-600",
      slug: "black-pepper-dealers",
    },
    {
      title: "Tea & Coffee",
      icon: Coffee,
      description: "Fresh Tea & Coffee Beans",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      slug: "tea-coffee-dealers",
    },
    {
      title: "Construction",
      icon: Hammer,
      description: "Building & Contractor Services",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      slug: "building-contractors",
    },
  ]

  return (
    <div className="min-h-screen cream-bg">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
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
                <h1 className="text-lg md:text-xl font-bold text-white">Weather Land Groups</h1>
                <p className="text-xs text-gray-300 hidden sm:block">India Pvt Ltd</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-amber-400 font-medium">
                Home
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-amber-400">
                Products
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-amber-400">
                Services
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-amber-400">
                Rent & Sales
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-amber-400">
                About
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-amber-400">
                Contact
              </Link>
            </nav>

            {/* Desktop Right side icons and Sign In */}
            <div className="hidden lg:flex items-center space-x-4">
              <HomeIcon className="h-5 w-5 text-gray-300" />
              <span className="text-sm text-gray-300">Rent & Sales</span>
              <div className="h-5 w-5 text-gray-300">☀️</div>
              <User className="h-5 w-5 text-gray-300" />
              <Link href="/auth">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6">Sign In</Button>
              </Link>
            </div>

            {/* Mobile Home Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Link href="/">
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <HomeIcon className="h-4 w-4 mr-1" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-amber-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Large Logo Circle */}
            <div className="logo-circle mb-6 md:mb-8">
              <Image
                src="/images/wlg-tree-logo.png"
                alt="Weather Land Groups Logo"
                width={80}
                height={80}
                className="md:w-[100px] md:h-[100px] rounded-full"
              />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-yellow-100 px-2">
              Welcome to Weather Land Groups
            </h1>
            <p className="text-base md:text-xl text-yellow-200 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
              Your one-stop destination for Real Estate, Scrap Services, Premium Spices, Tea & Coffee, and Construction
              Services with sustainable business solutions
            </p>

            {/* Search Interface */}
            <div className="search-container max-w-4xl mx-auto mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row">
                <Select>
                  <SelectTrigger className="w-full md:w-48 border-0 rounded-b-none md:rounded-b md:rounded-r-none bg-white mb-0 h-12 md:h-auto">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="scrap">Scrap Services</SelectItem>
                    <SelectItem value="black-pepper">Black Pepper</SelectItem>
                    <SelectItem value="tea-coffee">Tea & Coffee</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Search for properties, services, spices..."
                  className="flex-1 border-0 rounded-none focus:ring-0 text-sm md:text-base h-12 md:h-auto"
                />
                <Button className="bg-amber-800 hover:bg-amber-900 rounded-t-none md:rounded-t md:rounded-l-none px-4 md:px-8 h-12 md:h-auto">
                  Search
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 px-4">
              <Link href="/category/real-estate">
                <Button className="btn-secondary w-full sm:w-auto">
                  <Building className="h-4 w-4 mr-2" />
                  Browse Properties
                </Button>
              </Link>
              <Link href="/category/scrap-dealers">
                <Button className="btn-secondary w-full sm:w-auto">
                  <Recycle className="h-4 w-4 mr-2" />
                  Scrap Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 md:py-16 px-4 cream-bg">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Business Categories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Discover everything Weather Land Groups has to offer - from premium real estate to sustainable scrap
              services, quality spices, and professional construction solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} href={`/category/${service.slug}`}>
                <div className="text-center service-card p-4 md:p-6 rounded-lg cursor-pointer">
                  <div className={`service-icon-circle ${service.color} w-16 h-16 md:w-20 md:h-20`}>
                    <service.icon className={`h-6 w-6 md:h-8 md:w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{service.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 hidden md:block">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 md:py-16 px-4 cream-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white service-card">
              <CardContent className="p-6 md:p-8">
                <Building className="h-10 w-10 md:h-12 md:w-12 mb-4 opacity-80" />
                <h3 className="text-lg md:text-xl font-bold mb-2">Premium Properties</h3>
                <p className="text-blue-100 mb-4 text-sm md:text-base">
                  Residential, commercial, and rental properties with detailed specifications and pricing
                </p>
                <Link href="/category/real-estate">
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 w-full md:w-auto">
                    Explore Properties
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white service-card">
              <CardContent className="p-6 md:p-8">
                <Recycle className="h-10 w-10 md:h-12 md:w-12 mb-4 opacity-80" />
                <h3 className="text-lg md:text-xl font-bold mb-2">Eco Solutions</h3>
                <p className="text-green-100 mb-4 text-sm md:text-base">
                  Sustainable scrap collection and recycling services with competitive pricing
                </p>
                <Link href="/category/scrap-dealers">
                  <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 w-full md:w-auto">
                    Go Green
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white service-card">
              <CardContent className="p-6 md:p-8">
                <Coffee className="h-10 w-10 md:h-12 md:w-12 mb-4 opacity-80" />
                <h3 className="text-lg md:text-xl font-bold mb-2">Premium Spices</h3>
                <p className="text-orange-100 mb-4 text-sm md:text-base">
                  Fresh black pepper, tea, and coffee directly from certified farms and gardens
                </p>
                <Link href="/category/black-pepper-dealers">
                  <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 w-full md:w-auto">
                    Shop Spices
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-amber-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-yellow-200 text-sm md:text-base">Trusted Businesses</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-yellow-300 mb-2">1000+</div>
              <div className="text-yellow-200 text-sm md:text-base">Active Listings</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-yellow-200 text-sm md:text-base">Cities Covered</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-yellow-200 text-sm md:text-base">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-4 cream-bg">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg md:text-xl text-gray-600">Ready to grow your business with us?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="text-center service-card">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 md:h-8 md:w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm md:text-base">+91 98765 43210</p>
              </CardContent>
            </Card>

            <Card className="text-center service-card">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm md:text-base">info@weatherlandgroups.com</p>
              </CardContent>
            </Card>

            <Card className="text-center service-card">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm md:text-base">Mumbai, Maharashtra, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/wlg-tree-logo.png"
                    alt="Weather Land Groups Logo"
                    width={32}
                    height={32}
                    className="md:w-[40px] md:h-[40px] rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm md:text-base">Weather Land Groups</h3>
                  <p className="text-xs md:text-sm text-gray-400">India Pvt Ltd</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">Sustainable business solutions for a greener tomorrow.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white text-sm md:text-base">Services</h4>
              <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                <li>
                  <Link href="/category/real-estate" className="hover:text-amber-400 transition-colors">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/category/scrap-dealers" className="hover:text-amber-400 transition-colors">
                    Scrap Services
                  </Link>
                </li>
                <li>
                  <Link href="/category/black-pepper-dealers" className="hover:text-amber-400 transition-colors">
                    Black Pepper
                  </Link>
                </li>
                <li>
                  <Link href="/category/tea-coffee-dealers" className="hover:text-amber-400 transition-colors">
                    Tea & Coffee
                  </Link>
                </li>
                <li>
                  <Link href="/category/building-contractors" className="hover:text-amber-400 transition-colors">
                    Construction
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                <li>
                  <Link href="/auth" className="hover:text-amber-400 transition-colors">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/auth?mode=register" className="hover:text-amber-400 transition-colors">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-amber-400 transition-colors">
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link href="/payment" className="hover:text-amber-400 transition-colors">
                    Payment Plans
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white text-sm md:text-base">Support</h4>
              <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                <li>
                  <Link href="/help" className="hover:text-amber-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
          <p>&copy; 2024 Weather Land Groups India Pvt Ltd. All rights reserved.</p>
          <p className="mt-1">Owned by - Praneeth Gowda</p>
        </div>
      </footer>
    </div>
  )
}
