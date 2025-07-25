"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Upload, Save, Edit, Trash2, Plus, Eye, Search, Filter } from "lucide-react"
import Image from "next/image"

export default function ProductManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)

  // Mock product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Office Space in Bandra",
      category: "Real Estate",
      price: "₹50,000",
      unit: "per month",
      quantity: "5 units",
      description: "Modern office space with all amenities in prime location",
      image: "/images/real-estate.jpg",
      contact: "+91 98765 43210",
      email: "contact@property1.com",
      address: "Bandra West, Mumbai",
      status: "Active",
      featured: true,
    },
    {
      id: 2,
      name: "Organic Black Pepper",
      category: "Black Pepper Dealers",
      price: "₹800",
      unit: "per kg",
      quantity: "500 kg",
      description: "Premium quality organic black pepper from Kerala farms",
      image: "/images/black-pepper.jpg",
      contact: "+91 98765 43213",
      email: "kerala@spicetraders.com",
      address: "Kochi, Kerala",
      status: "Active",
      featured: false,
    },
    {
      id: 3,
      name: "Metal Scrap Collection",
      category: "Scrap Dealers",
      price: "₹45",
      unit: "per kg",
      quantity: "Unlimited",
      description: "Best rates for all types of metal scrap collection",
      image: "/images/scrap-dealers.jpg",
      contact: "+91 98765 43212",
      email: "mumbai@metalrecycle.com",
      address: "Dharavi, Mumbai",
      status: "Active",
      featured: false,
    },
    {
      id: 4,
      name: "Darjeeling Tea Premium",
      category: "Tea & Coffee Dealers",
      price: "₹1,200",
      unit: "per kg",
      quantity: "200 kg",
      description: "Premium Darjeeling tea direct from gardens",
      image: "/images/tea-coffee.jpg",
      contact: "+91 98765 43215",
      email: "sales@darjeelingtea.com",
      address: "Darjeeling, West Bengal",
      status: "Active",
      featured: true,
    },
    {
      id: 5,
      name: "Construction Services",
      category: "Building Contractors",
      price: "₹2,00,000",
      unit: "per project",
      quantity: "Available",
      description: "Complete building construction services with modern techniques",
      image: "/images/building-contractors.jpg",
      contact: "+91 98765 43217",
      email: "projects@mumbaiconst.com",
      address: "Mumbai, Maharashtra",
      status: "Active",
      featured: false,
    },
  ])

  const categories = [
    "Real Estate",
    "Scrap Dealers",
    "Black Pepper Dealers",
    "Tea & Coffee Dealers",
    "Building Contractors",
  ]

  const handleEdit = (product: any) => {
    setEditingProduct(product)
    setIsEditDialogOpen(true)
  }

  const handleSave = () => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)))
      setIsEditDialogOpen(false)
      setEditingProduct(null)
      alert("Product updated successfully!")
    }
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id))
      alert("Product deleted successfully!")
    }
  }

  const handleImageUpload = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        alert("Image uploaded successfully!")
      }
    }
    input.click()
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold gradient-text">Product Management</h2>
          <p className="text-muted-foreground">Manage products, prices, quantities, and details</p>
        </div>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Product
        </Button>
      </div>

      {/* Filters */}
      <Card className="glass-effect border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card className="glass-effect border-0 shadow-xl">
        <CardHeader>
          <CardTitle>Products ({filteredProducts.length})</CardTitle>
          <CardDescription>Manage your product listings, prices, and inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.description.substring(0, 50)}...</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{product.price}</p>
                      <p className="text-sm text-muted-foreground">{product.unit}</p>
                    </div>
                  </TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    <Badge variant={product.status === "Active" ? "default" : "secondary"}>{product.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(product.id)}>
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

      {/* Edit Product Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>Update product information, pricing, and details</DialogDescription>
          </DialogHeader>

          {editingProduct && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label>Product Name</Label>
                  <Input
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Category</Label>
                  <Select
                    value={editingProduct.category}
                    onValueChange={(value) => setEditingProduct({ ...editingProduct, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Price</Label>
                    <Input
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Unit</Label>
                    <Input
                      value={editingProduct.unit}
                      onChange={(e) => setEditingProduct({ ...editingProduct, unit: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label>Quantity Available</Label>
                  <Input
                    value={editingProduct.quantity}
                    onChange={(e) => setEditingProduct({ ...editingProduct, quantity: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Product Image</Label>
                  <div className="relative h-48 border-2 border-dashed border-muted rounded-lg overflow-hidden">
                    <Image
                      src={editingProduct.image || "/placeholder.svg"}
                      alt={editingProduct.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button onClick={handleImageUpload} variant="secondary">
                        <Upload className="h-4 w-4 mr-2" />
                        Change Image
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Contact Phone</Label>
                  <Input
                    value={editingProduct.contact}
                    onChange={(e) => setEditingProduct({ ...editingProduct, contact: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    value={editingProduct.email}
                    onChange={(e) => setEditingProduct({ ...editingProduct, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Address</Label>
                  <Textarea
                    value={editingProduct.address}
                    onChange={(e) => setEditingProduct({ ...editingProduct, address: e.target.value })}
                    rows={2}
                  />
                </div>

                <div>
                  <Label>Status</Label>
                  <Select
                    value={editingProduct.status}
                    onValueChange={(value) => setEditingProduct({ ...editingProduct, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-gradient-to-r from-green-500 to-emerald-600">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
