"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Download, Trash2, Eye, Search, ImageIcon, File, Video } from "lucide-react"
import Image from "next/image"

export default function MediaManagement() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock media data
  const mediaFiles = [
    {
      id: 1,
      name: "wlg-logo.png",
      type: "image",
      size: "45 KB",
      url: "/images/wlg-logo.png",
      category: "logos",
      uploadDate: "2024-01-15",
      usedIn: ["Header", "Footer", "Auth Page"],
    },
    {
      id: 2,
      name: "real-estate.jpg",
      type: "image",
      size: "2.3 MB",
      url: "/images/real-estate.jpg",
      category: "listings",
      uploadDate: "2024-01-14",
      usedIn: ["Real Estate Category", "Homepage"],
    },
    {
      id: 3,
      name: "scrap-dealers.jpg",
      type: "image",
      size: "1.8 MB",
      url: "/images/scrap-dealers.jpg",
      category: "listings",
      uploadDate: "2024-01-13",
      usedIn: ["Scrap Dealers Category"],
    },
    {
      id: 4,
      name: "black-pepper.jpg",
      type: "image",
      size: "1.9 MB",
      url: "/images/black-pepper.jpg",
      category: "listings",
      uploadDate: "2024-01-12",
      usedIn: ["Black Pepper Category"],
    },
    {
      id: 5,
      name: "tea-coffee.jpg",
      type: "image",
      size: "2.1 MB",
      url: "/images/tea-coffee.jpg",
      category: "listings",
      uploadDate: "2024-01-11",
      usedIn: ["Tea & Coffee Category"],
    },
    {
      id: 6,
      name: "building-contractors.jpg",
      type: "image",
      size: "2.4 MB",
      url: "/images/building-contractors.jpg",
      category: "listings",
      uploadDate: "2024-01-10",
      usedIn: ["Building Contractors Category"],
    },
    {
      id: 7,
      name: "company-video.mp4",
      type: "video",
      size: "15.2 MB",
      url: "/placeholder-video.mp4",
      category: "videos",
      uploadDate: "2024-01-09",
      usedIn: ["About Page"],
    },
    {
      id: 8,
      name: "brochure.pdf",
      type: "document",
      size: "3.4 MB",
      url: "/placeholder-document.pdf",
      category: "documents",
      uploadDate: "2024-01-08",
      usedIn: ["Downloads"],
    },
  ]

  const handleFileUpload = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.multiple = true
    input.accept = "image/*,video/*,.pdf,.doc,.docx"
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files
      if (files) {
        Array.from(files).forEach((file) => {
          console.log("Uploading:", file.name)
          // In real implementation, upload to cloud storage
        })
        alert(`${files.length} file(s) uploaded successfully!`)
      }
    }
    input.click()
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this file?")) {
      alert("File deleted successfully!")
    }
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-5 w-5 text-blue-600" />
      case "video":
        return <Video className="h-5 w-5 text-purple-600" />
      case "document":
        return <File className="h-5 w-5 text-red-600" />
      default:
        return <File className="h-5 w-5 text-gray-600" />
    }
  }

  const filteredFiles = mediaFiles.filter((file) => {
    const matchesCategory = selectedCategory === "all" || file.category === selectedCategory
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-green-900">Media Management</h2>
          <p className="text-green-700">Upload and manage images, videos, and documents</p>
        </div>
        <Button onClick={handleFileUpload} className="bg-green-600 hover:bg-green-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      {/* Filters */}
      <Card className="border-green-200">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                <Input
                  placeholder="Search files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-green-300"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 border-green-300">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="logos">Logos</SelectItem>
                <SelectItem value="backgrounds">Backgrounds</SelectItem>
                <SelectItem value="listings">Listings</SelectItem>
                <SelectItem value="videos">Videos</SelectItem>
                <SelectItem value="documents">Documents</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Media Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFiles.map((file) => (
          <Card key={file.id} className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="space-y-3">
                {/* File Preview */}
                <div className="relative h-32 bg-green-50 rounded-lg flex items-center justify-center overflow-hidden">
                  {file.type === "image" ? (
                    <Image src={file.url || "/placeholder.svg"} alt={file.name} fill className="object-cover" />
                  ) : (
                    <div className="flex flex-col items-center space-y-2">
                      {getFileIcon(file.type)}
                      <span className="text-xs text-green-600 font-medium">{file.type.toUpperCase()}</span>
                    </div>
                  )}
                </div>

                {/* File Info */}
                <div>
                  <h3 className="font-medium text-green-900 truncate" title={file.name}>
                    {file.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-green-600 mt-1">
                    <span>{file.size}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {file.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-green-500 mt-1">Uploaded: {file.uploadDate}</p>
                </div>

                {/* Usage Info */}
                <div>
                  <p className="text-xs text-green-600 mb-1">Used in:</p>
                  <div className="flex flex-wrap gap-1">
                    {file.usedIn.map((usage, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-green-300 text-green-700">
                        {usage}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 border-green-300 text-green-700">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="border-green-300 text-green-700">
                    <Download className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-300 text-red-600"
                    onClick={() => handleDelete(file.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload Zone */}
      <Card className="border-green-200 border-dashed">
        <CardContent className="p-8">
          <div
            className="text-center cursor-pointer hover:bg-green-50 transition-colors rounded-lg p-8"
            onClick={handleFileUpload}
          >
            <Upload className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-green-900 mb-2">Upload Media Files</h3>
            <p className="text-green-700 mb-4">Drag and drop files here, or click to browse</p>
            <p className="text-sm text-green-600">
              Supports: Images (JPG, PNG, GIF), Videos (MP4, MOV), Documents (PDF, DOC)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Storage Info */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-900">Storage Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-green-700">Used Storage</span>
              <span className="text-green-900 font-medium">2.4 GB / 10 GB</span>
            </div>
            <div className="w-full bg-green-100 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: "24%" }}></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <p className="text-green-900 font-medium">156</p>
                <p className="text-green-600">Images</p>
              </div>
              <div className="text-center">
                <p className="text-green-900 font-medium">12</p>
                <p className="text-green-600">Videos</p>
              </div>
              <div className="text-center">
                <p className="text-green-900 font-medium">34</p>
                <p className="text-green-600">Documents</p>
              </div>
              <div className="text-center">
                <p className="text-green-900 font-medium">7.6 GB</p>
                <p className="text-green-600">Available</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
