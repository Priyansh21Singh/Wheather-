"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Save, Palette, Globe, Shield, Bell } from "lucide-react"
import Image from "next/image"

export default function AdvancedSettings() {
  const [settings, setSettings] = useState({
    site: {
      name: "Weather Land Groups India Pvt Ltd",
      tagline: "Sustainable Business Solutions",
      description:
        "Connecting businesses across Real Estate, Recycling, Spices, Beverages, and Construction with nature-conscious solutions and sustainable practices.",
      logo: "/images/wlg-logo.png",
      favicon: "/favicon.ico",
      language: "en",
      timezone: "Asia/Kolkata",
    },
    theme: {
      primaryColor: "#059669",
      secondaryColor: "#10b981",
      accentColor: "#34d399",
      darkMode: false,
      customCSS: "",
    },
    contact: {
      primaryPhone: "+91 98765 43210",
      secondaryPhone: "+91 98765 43211",
      primaryEmail: "info@weatherlandgroups.com",
      supportEmail: "support@weatherlandgroups.com",
      address: "Weather Land Groups India Pvt Ltd\nMumbai, Maharashtra, India",
      socialMedia: {
        facebook: "https://facebook.com/weatherlandgroups",
        twitter: "https://twitter.com/weatherlandgroups",
        linkedin: "https://linkedin.com/company/weatherlandgroups",
        instagram: "https://instagram.com/weatherlandgroups",
      },
    },
    business: {
      gstNumber: "27AAAAA0000A1Z5",
      panNumber: "AAAAA0000A",
      businessHours: "Monday - Friday: 9:00 AM - 6:00 PM",
      emergencyContact: "+91 98765 43299",
      businessType: "Private Limited Company",
      yearEstablished: "2017",
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: true,
      pushNotifications: false,
      marketingEmails: true,
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: "30",
      passwordPolicy: "strong",
      ipWhitelist: "",
    },
  })

  const handleSave = () => {
    alert("Settings saved successfully!")
  }

  const handleImageUpload = (type: string) => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/*"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        alert(`${type} uploaded successfully!`)
      }
    }
    input.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold gradient-text">Advanced Settings</h2>
          <p className="text-muted-foreground">Configure all aspects of your website</p>
        </div>
        <Button
          onClick={handleSave}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
        >
          <Save className="h-4 w-4 mr-2" />
          Save All Settings
        </Button>
      </div>

      <Tabs defaultValue="site" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 bg-white/80 border">
          <TabsTrigger
            value="site"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Globe className="h-4 w-4 mr-2" />
            Site
          </TabsTrigger>
          <TabsTrigger
            value="theme"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Palette className="h-4 w-4 mr-2" />
            Theme
          </TabsTrigger>
          <TabsTrigger
            value="contact"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Contact
          </TabsTrigger>
          <TabsTrigger
            value="business"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Business
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Bell className="h-4 w-4 mr-2" />
            Alerts
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="site" className="space-y-6">
          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Site Configuration</CardTitle>
              <CardDescription>Basic website information and branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Site Name</Label>
                    <Input
                      value={settings.site.name}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          site: { ...settings.site, name: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Tagline</Label>
                    <Input
                      value={settings.site.tagline}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          site: { ...settings.site, tagline: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={settings.site.description}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          site: { ...settings.site, description: e.target.value },
                        })
                      }
                      rows={4}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Site Logo</Label>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={settings.site.logo || "/placeholder.svg"}
                        alt="Site Logo"
                        width={60}
                        height={60}
                        className="rounded-full border shadow-lg"
                      />
                      <Button onClick={() => handleImageUpload("Logo")} variant="outline">
                        <Upload className="h-4 w-4 mr-2" />
                        Change Logo
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label>Language</Label>
                    <Select
                      value={settings.site.language}
                      onValueChange={(value) =>
                        setSettings({
                          ...settings,
                          site: { ...settings.site, language: value },
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                        <SelectItem value="mr">Marathi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Timezone</Label>
                    <Select
                      value={settings.site.timezone}
                      onValueChange={(value) =>
                        setSettings({
                          ...settings,
                          site: { ...settings.site, timezone: value },
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                        <SelectItem value="UTC">UTC</SelectItem>
                        <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theme" className="space-y-6">
          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Theme Customization</CardTitle>
              <CardDescription>Customize colors, fonts, and appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Primary Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        type="color"
                        value={settings.theme.primaryColor}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            theme: { ...settings.theme, primaryColor: e.target.value },
                          })
                        }
                        className="w-16 h-10"
                      />
                      <Input
                        value={settings.theme.primaryColor}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            theme: { ...settings.theme, primaryColor: e.target.value },
                          })
                        }
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Secondary Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        type="color"
                        value={settings.theme.secondaryColor}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            theme: { ...settings.theme, secondaryColor: e.target.value },
                          })
                        }
                        className="w-16 h-10"
                      />
                      <Input
                        value={settings.theme.secondaryColor}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            theme: { ...settings.theme, secondaryColor: e.target.value },
                          })
                        }
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Accent Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        type="color"
                        value={settings.theme.accentColor}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            theme: { ...settings.theme, accentColor: e.target.value },
                          })
                        }
                        className="w-16 h-10"
                      />
                      <Input
                        value={settings.theme.accentColor}
                        onChange={(e) =>
                          setSettings({
                            ...settings,
                            theme: { ...settings.theme, accentColor: e.target.value },
                          })
                        }
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Dark Mode</Label>
                    <Switch
                      checked={settings.theme.darkMode}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          theme: { ...settings.theme, darkMode: checked },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Custom CSS</Label>
                    <Textarea
                      value={settings.theme.customCSS}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          theme: { ...settings.theme, customCSS: e.target.value },
                        })
                      }
                      rows={6}
                      placeholder="/* Add your custom CSS here */"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Update all contact details and social media</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Primary Phone</Label>
                    <Input
                      value={settings.contact.primaryPhone}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: { ...settings.contact, primaryPhone: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Secondary Phone</Label>
                    <Input
                      value={settings.contact.secondaryPhone}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: { ...settings.contact, secondaryPhone: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Primary Email</Label>
                    <Input
                      value={settings.contact.primaryEmail}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: { ...settings.contact, primaryEmail: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Support Email</Label>
                    <Input
                      value={settings.contact.supportEmail}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: { ...settings.contact, supportEmail: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Business Address</Label>
                    <Textarea
                      value={settings.contact.address}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: { ...settings.contact, address: e.target.value },
                        })
                      }
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Facebook URL</Label>
                    <Input
                      value={settings.contact.socialMedia.facebook}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: {
                            ...settings.contact,
                            socialMedia: { ...settings.contact.socialMedia, facebook: e.target.value },
                          },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>LinkedIn URL</Label>
                    <Input
                      value={settings.contact.socialMedia.linkedin}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          contact: {
                            ...settings.contact,
                            socialMedia: { ...settings.contact.socialMedia, linkedin: e.target.value },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Legal and operational business details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>GST Number</Label>
                    <Input
                      value={settings.business.gstNumber}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          business: { ...settings.business, gstNumber: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>PAN Number</Label>
                    <Input
                      value={settings.business.panNumber}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          business: { ...settings.business, panNumber: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Business Type</Label>
                    <Select
                      value={settings.business.businessType}
                      onValueChange={(value) =>
                        setSettings({
                          ...settings,
                          business: { ...settings.business, businessType: value },
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Private Limited Company">Private Limited Company</SelectItem>
                        <SelectItem value="Public Limited Company">Public Limited Company</SelectItem>
                        <SelectItem value="Partnership">Partnership</SelectItem>
                        <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Year Established</Label>
                    <Input
                      value={settings.business.yearEstablished}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          business: { ...settings.business, yearEstablished: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Business Hours</Label>
                    <Input
                      value={settings.business.businessHours}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          business: { ...settings.business, businessHours: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Emergency Contact</Label>
                    <Input
                      value={settings.business.emergencyContact}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          business: { ...settings.business, emergencyContact: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive alerts and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.notifications.emailNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, emailNotifications: checked },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                  </div>
                  <Switch
                    checked={settings.notifications.smsNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, smsNotifications: checked },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
                  </div>
                  <Switch
                    checked={settings.notifications.pushNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, pushNotifications: checked },
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive promotional and marketing emails</p>
                  </div>
                  <Switch
                    checked={settings.notifications.marketingEmails}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: { ...settings.notifications, marketingEmails: checked },
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="glass-effect border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    checked={settings.security.twoFactorAuth}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, twoFactorAuth: checked },
                      })
                    }
                  />
                </div>
                <div>
                  <Label>Session Timeout (minutes)</Label>
                  <Select
                    value={settings.security.sessionTimeout}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, sessionTimeout: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Password Policy</Label>
                  <Select
                    value={settings.security.passwordPolicy}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, passwordPolicy: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                      <SelectItem value="strong">Strong (8+ chars, numbers, symbols)</SelectItem>
                      <SelectItem value="very-strong">Very Strong (12+ chars, mixed case, numbers, symbols)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>IP Whitelist</Label>
                  <Textarea
                    value={settings.security.ipWhitelist}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, ipWhitelist: e.target.value },
                      })
                    }
                    placeholder="Enter IP addresses (one per line)"
                    rows={3}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Leave empty to allow all IPs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
