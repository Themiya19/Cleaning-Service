'use client';

import { useState, useEffect } from 'react';
import { 
  Save, 
  RefreshCw, 
  Plus, 
  Trash2, 
  Settings, 
  FileText, 
  Users, 
  Star,
  Phone,
  Mail,
  MapPin,
  Eye,
  EyeOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface WebsiteContent {
  company: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    stats: {
      customers: string;
      rating: string;
      experience: string;
      jobsCompleted: string;
      satisfactionRate: string;
    };
    image: string;
  };
  about: {
    title: string;
    subtitle: string;
    mission: string;
    story: {
      founded: string;
      founder: string;
      description: string;
    };
    values: Array<{
      title: string;
      description: string;
    }>;
    whyChooseUs: string[];
    image: string;
  };
  services: Array<{
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    price: string;
    duration: string;
    features: string[];
    image: string;
  }>;
  addOns: Array<{
    name: string;
    price: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    rating: number;
    text: string;
    location: string;
  }>;
  seo: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    servicesTitle: string;
    servicesDescription: string;
  };
  gallery: Array<{
    title: string;
    before: string;
    after: string;
    description: string;
  }>;
  serviceImages: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

export default function AdminPage() {
  const [content, setContent] = useState<WebsiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  // Simple password authentication (in production, use proper auth)
  const ADMIN_PASSWORD = 'sparkle2024admin';

  useEffect(() => {
    if (isAuthenticated) {
      fetchContent();
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      toast({
        title: 'Access Denied',
        description: 'Invalid password. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const fetchContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/website-content');
      if (response.ok) {
        const data = await response.json();
        setContent(data);
      } else {
        throw new Error('Failed to fetch content');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load website content',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    if (!content) return;
    
    try {
      setSaving(true);
      const response = await fetch('/api/website-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        const result = await response.json();
        toast({
          title: 'Success',
          description: 'Website content saved successfully! Pages will update shortly.',
        });
        
        // Force a page refresh after a short delay to show updated content
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            // Clear any cached content
            window.location.reload();
          }
        }, 2000);
      } else {
        throw new Error('Failed to save content');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save website content',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const refreshPages = async () => {
    try {
      setRefreshing(true);
      const response = await fetch('/api/revalidate', {
        method: 'POST',
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'All pages refreshed successfully!',
        });
      } else {
        throw new Error('Failed to refresh pages');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to refresh pages',
        variant: 'destructive',
      });
    } finally {
      setRefreshing(false);
    }
  };

  const updateContent = (path: string[], value: any) => {
    if (!content) return;
    
    const newContent = { ...content };
    let current: any = newContent;
    
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    
    current[path[path.length - 1]] = value;
    setContent(newContent);
  };

  const addArrayItem = (path: string[], item: any) => {
    if (!content) return;
    const newContent = { ...content };
    let current: any = newContent;
    for (const segment of path) {
      if (!current[segment]) current[segment] = [];
      current = current[segment];
    }
    if (!Array.isArray(current)) return;
    current.push(item);
    setContent(newContent);
  };

  const removeArrayItem = (path: string[], index: number) => {
    if (!content) return;
    
    const newContent = { ...content };
    let current: any = newContent;
    
    for (const segment of path) {
      current = current[segment];
    }
    
    current.splice(index, 1);
    setContent(newContent);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <CardDescription>
              Enter the admin password to access the website management panel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="Enter admin password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            <Button onClick={handleLogin} className="w-full">
              Access Admin Panel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading website content...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-red-600">Error</CardTitle>
            <CardDescription>Failed to load website content</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={fetchContent} className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Settings className="w-8 h-8 text-blue-600" />
              Website Admin Panel
            </h1>
            <p className="text-gray-600 mt-2">Manage your website content and settings</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={fetchContent} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </Button>
            <Button variant="outline" onClick={refreshPages} disabled={refreshing}>
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Refreshing...' : 'Refresh Pages'}
            </Button>
            <Button onClick={saveContent} disabled={saving} className="bg-green-600 hover:bg-green-700">
              <Save className={`w-4 h-4 mr-2 ${saving ? 'animate-pulse' : ''}`} />
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="company" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="testimonials">Reviews</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          {/* Company Info */}
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Company Information
                </CardTitle>
                <CardDescription>
                  Basic company details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input
                      id="company-name"
                      value={content.company.name}
                      onChange={(e) => updateContent(['company', 'name'], e.target.value)}
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-tagline">Tagline</Label>
                    <Input
                      id="company-tagline"
                      value={content.company.tagline}
                      onChange={(e) => updateContent(['company', 'tagline'], e.target.value)}
                      placeholder="Company Tagline"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="company-phone"
                      value={content.company.phone}
                      onChange={(e) => updateContent(['company', 'phone'], e.target.value)}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </Label>
                    <Input
                      id="company-email"
                      value={content.company.email}
                      onChange={(e) => updateContent(['company', 'email'], e.target.value)}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-address" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Address
                    </Label>
                    <Input
                      id="company-address"
                      value={content.company.address}
                      onChange={(e) => updateContent(['company', 'address'], e.target.value)}
                      placeholder="Business Address"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hero Section */}
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>
                  Main homepage hero content and statistics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-title">Hero Title</Label>
                    <Input
                      id="hero-title"
                      value={content.hero.title}
                      onChange={(e) => updateContent(['hero', 'title'], e.target.value)}
                      placeholder="Main hero title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                    <Textarea
                      id="hero-subtitle"
                      value={content.hero.subtitle}
                      onChange={(e) => updateContent(['hero', 'subtitle'], e.target.value)}
                      placeholder="Hero subtitle/description"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-image">Hero Image URL</Label>
                    <Input
                      id="hero-image"
                      value={content.hero.image || ''}
                      onChange={(e) => updateContent(['hero', 'image'], e.target.value)}
                      placeholder="Hero section image URL"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-cta">Primary CTA Button</Label>
                      <Input
                        id="primary-cta"
                        value={content.hero.primaryCTA}
                        onChange={(e) => updateContent(['hero', 'primaryCTA'], e.target.value)}
                        placeholder="Primary button text"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-cta">Secondary CTA Button</Label>
                      <Input
                        id="secondary-cta"
                        value={content.hero.secondaryCTA}
                        onChange={(e) => updateContent(['hero', 'secondaryCTA'], e.target.value)}
                        placeholder="Secondary button text"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-lg font-semibold mb-4">Statistics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="stat-customers">Customers</Label>
                      <Input
                        id="stat-customers"
                        value={content.hero.stats.customers}
                        onChange={(e) => updateContent(['hero', 'stats', 'customers'], e.target.value)}
                        placeholder="500+"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat-rating">Rating</Label>
                      <Input
                        id="stat-rating"
                        value={content.hero.stats.rating}
                        onChange={(e) => updateContent(['hero', 'stats', 'rating'], e.target.value)}
                        placeholder="5.0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat-experience">Experience</Label>
                      <Input
                        id="stat-experience"
                        value={content.hero.stats.experience}
                        onChange={(e) => updateContent(['hero', 'stats', 'experience'], e.target.value)}
                        placeholder="10+"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat-jobs">Jobs Completed</Label>
                      <Input
                        id="stat-jobs"
                        value={content.hero.stats.jobsCompleted}
                        onChange={(e) => updateContent(['hero', 'stats', 'jobsCompleted'], e.target.value)}
                        placeholder="2000+"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stat-satisfaction">Satisfaction Rate</Label>
                      <Input
                        id="stat-satisfaction"
                        value={content.hero.stats.satisfactionRate}
                        onChange={(e) => updateContent(['hero', 'stats', 'satisfactionRate'], e.target.value)}
                        placeholder="100%"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Section */}
          <TabsContent value="about">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Section</CardTitle>
                  <CardDescription>Company story, mission, and values</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="about-title">About Title</Label>
                      <Input
                        id="about-title"
                        value={content.about.title}
                        onChange={(e) => updateContent(['about', 'title'], e.target.value)}
                        placeholder="About section title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about-subtitle">About Subtitle</Label>
                      <Textarea
                        id="about-subtitle"
                        value={content.about.subtitle}
                        onChange={(e) => updateContent(['about', 'subtitle'], e.target.value)}
                        placeholder="About section subtitle"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mission">Mission Statement</Label>
                      <Textarea
                        id="mission"
                        value={content.about.mission}
                        onChange={(e) => updateContent(['about', 'mission'], e.target.value)}
                        placeholder="Company mission statement"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about-image">About Image URL</Label>
                      <Input
                        id="about-image"
                        value={content.about.image || ''}
                        onChange={(e) => updateContent(['about', 'image'], e.target.value)}
                        placeholder="About section image URL"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Company Story</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="founded">Founded Year</Label>
                        <Input
                          id="founded"
                          value={content.about.story.founded}
                          onChange={(e) => updateContent(['about', 'story', 'founded'], e.target.value)}
                          placeholder="2014"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="founder">Founder Name</Label>
                        <Input
                          id="founder"
                          value={content.about.story.founder}
                          onChange={(e) => updateContent(['about', 'story', 'founder'], e.target.value)}
                          placeholder="Founder Name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="story-description">Story Description</Label>
                      <Textarea
                        id="story-description"
                        value={content.about.story.description}
                        onChange={(e) => updateContent(['about', 'story', 'description'], e.target.value)}
                        placeholder="Company story and background"
                        rows={4}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Values */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Company Values
                    <Button
                      onClick={() => addArrayItem(['about', 'values'], { title: '', description: '' })}
                      size="sm"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Value
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {content.about.values.map((value, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between mb-4">
                            <Badge variant="secondary">Value {index + 1}</Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeArrayItem(['about', 'values'], index)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="space-y-3">
                            <Input
                              value={value.title}
                              onChange={(e) => {
                                const newValues = [...content.about.values];
                                newValues[index].title = e.target.value;
                                updateContent(['about', 'values'], newValues);
                              }}
                              placeholder="Value title"
                            />
                            <Textarea
                              value={value.description}
                              onChange={(e) => {
                                const newValues = [...content.about.values];
                                newValues[index].description = e.target.value;
                                updateContent(['about', 'values'], newValues);
                              }}
                              placeholder="Value description"
                              rows={2}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Why Choose Us Points
                    <Button
                      onClick={() => addArrayItem(['about', 'whyChooseUs'], '')}
                      size="sm"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Point
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {content.about.whyChooseUs.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Input
                          value={point}
                          onChange={(e) => {
                            const newPoints = [...content.about.whyChooseUs];
                            newPoints[index] = e.target.value;
                            updateContent(['about', 'whyChooseUs'], newPoints);
                          }}
                          placeholder="Why choose us point"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeArrayItem(['about', 'whyChooseUs'], index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Services Management
                  <Button
                    onClick={() => addArrayItem(['services'], {
                      id: `service-${Date.now()}`,
                      title: '',
                      description: '',
                      shortDescription: '',
                      price: '',
                      duration: '',
                      features: [],
                      image: ''
                    })}
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service
                  </Button>
                </CardTitle>
                <CardDescription>
                  Manage your service offerings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {content.services.map((service, index) => (
                    <Card key={service.id} className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            {service.title || `Service ${index + 1}`}
                          </CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeArrayItem(['services'], index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            value={service.title}
                            onChange={(e) => {
                              const newServices = [...content.services];
                              newServices[index].title = e.target.value;
                              updateContent(['services'], newServices);
                            }}
                            placeholder="Service title"
                          />
                          <Input
                            value={service.id}
                            onChange={(e) => {
                              const newServices = [...content.services];
                              newServices[index].id = e.target.value;
                              updateContent(['services'], newServices);
                            }}
                            placeholder="Service ID (URL-friendly)"
                          />
                        </div>
                        
                        <Textarea
                          value={service.shortDescription}
                          onChange={(e) => {
                            const newServices = [...content.services];
                            newServices[index].shortDescription = e.target.value;
                            updateContent(['services'], newServices);
                          }}
                          placeholder="Short description (for cards)"
                          rows={2}
                        />
                        
                        <Textarea
                          value={service.description}
                          onChange={(e) => {
                            const newServices = [...content.services];
                            newServices[index].description = e.target.value;
                            updateContent(['services'], newServices);
                          }}
                          placeholder="Full description"
                          rows={3}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input
                            value={service.price}
                            onChange={(e) => {
                              const newServices = [...content.services];
                              newServices[index].price = e.target.value;
                              updateContent(['services'], newServices);
                            }}
                            placeholder="Price (e.g., From $80)"
                          />
                          <Input
                            value={service.duration}
                            onChange={(e) => {
                              const newServices = [...content.services];
                              newServices[index].duration = e.target.value;
                              updateContent(['services'], newServices);
                            }}
                            placeholder="Duration (e.g., 1-3 hours)"
                          />
                          <Input
                            value={service.image}
                            onChange={(e) => {
                              const newServices = [...content.services];
                              newServices[index].image = e.target.value;
                              updateContent(['services'], newServices);
                            }}
                            placeholder="Image URL"
                          />
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label>Features</Label>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const newServices = [...content.services];
                                newServices[index].features.push('');
                                updateContent(['services'], newServices);
                              }}
                            >
                              <Plus className="w-4 h-4 mr-1" />
                              Add Feature
                            </Button>
                          </div>
                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <Input
                                  value={feature}
                                  onChange={(e) => {
                                    const newServices = [...content.services];
                                    newServices[index].features[featureIndex] = e.target.value;
                                    updateContent(['services'], newServices);
                                  }}
                                  placeholder="Feature description"
                                />
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => {
                                    const newServices = [...content.services];
                                    newServices[index].features.splice(featureIndex, 1);
                                    updateContent(['services'], newServices);
                                  }}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials */}
          <TabsContent value="testimonials">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Customer Testimonials
                  </span>
                  <Button
                    onClick={() => addArrayItem(['testimonials'], {
                      name: '',
                      rating: 5,
                      text: '',
                      location: ''
                    })}
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Testimonial
                  </Button>
                </CardTitle>
                <CardDescription>
                  Manage customer reviews and testimonials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {content.testimonials.map((testimonial, index) => (
                    <Card key={index} className="border-l-4 border-l-yellow-500">
                      <CardContent className="pt-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">Review {index + 1}</Badge>
                            <div className="flex text-yellow-400">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeArrayItem(['testimonials'], index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Input
                              value={testimonial.name}
                              onChange={(e) => {
                                const newTestimonials = [...content.testimonials];
                                newTestimonials[index].name = e.target.value;
                                updateContent(['testimonials'], newTestimonials);
                              }}
                              placeholder="Customer name"
                            />
                            <Input
                              type="number"
                              min="1"
                              max="5"
                              value={testimonial.rating}
                              onChange={(e) => {
                                const newTestimonials = [...content.testimonials];
                                newTestimonials[index].rating = parseInt(e.target.value);
                                updateContent(['testimonials'], newTestimonials);
                              }}
                              placeholder="Rating (1-5)"
                            />
                            <Input
                              value={testimonial.location}
                              onChange={(e) => {
                                const newTestimonials = [...content.testimonials];
                                newTestimonials[index].location = e.target.value;
                                updateContent(['testimonials'], newTestimonials);
                              }}
                              placeholder="Location"
                            />
                          </div>
                          
                          <Textarea
                            value={testimonial.text}
                            onChange={(e) => {
                              const newTestimonials = [...content.testimonials];
                              newTestimonials[index].text = e.target.value;
                              updateContent(['testimonials'], newTestimonials);
                            }}
                            placeholder="Testimonial text"
                            rows={3}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO */}
          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>
                  Meta titles and descriptions for better search engine visibility
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="home-title">Home Page Title</Label>
                    <Input
                      id="home-title"
                      value={content.seo.homeTitle}
                      onChange={(e) => updateContent(['seo', 'homeTitle'], e.target.value)}
                      placeholder="Home page meta title"
                    />
                    <p className="text-sm text-gray-500">
                      {content.seo.homeTitle.length}/60 characters
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="home-description">Home Page Description</Label>
                    <Textarea
                      id="home-description"
                      value={content.seo.homeDescription}
                      onChange={(e) => updateContent(['seo', 'homeDescription'], e.target.value)}
                      placeholder="Home page meta description"
                      rows={3}
                    />
                    <p className="text-sm text-gray-500">
                      {content.seo.homeDescription.length}/160 characters
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="about-title">About Page Title</Label>
                    <Input
                      id="about-title"
                      value={content.seo.aboutTitle}
                      onChange={(e) => updateContent(['seo', 'aboutTitle'], e.target.value)}
                      placeholder="About page meta title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="about-description">About Page Description</Label>
                    <Textarea
                      id="about-description"
                      value={content.seo.aboutDescription}
                      onChange={(e) => updateContent(['seo', 'aboutDescription'], e.target.value)}
                      placeholder="About page meta description"
                      rows={3}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="services-title">Services Page Title</Label>
                    <Input
                      id="services-title"
                      value={content.seo.servicesTitle}
                      onChange={(e) => updateContent(['seo', 'servicesTitle'], e.target.value)}
                      placeholder="Services page meta title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="services-description">Services Page Description</Label>
                    <Textarea
                      id="services-description"
                      value={content.seo.servicesDescription}
                      onChange={(e) => updateContent(['seo', 'servicesDescription'], e.target.value)}
                      placeholder="Services page meta description"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery */}
          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Gallery Images
                  <Button
                    onClick={() => addArrayItem(['gallery'], { title: '', before: '', after: '', description: '' })}
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Gallery Item
                  </Button>
                </CardTitle>
                <CardDescription>Manage before/after gallery images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {content.gallery && content.gallery.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-purple-500">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{item.title || `Gallery Item ${index + 1}`}</CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeArrayItem(['gallery'], index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Input
                          value={item.title}
                          onChange={e => {
                            const newGallery = [...content.gallery];
                            newGallery[index].title = e.target.value;
                            updateContent(['gallery'], newGallery);
                          }}
                          placeholder="Gallery item title"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Input
                            value={item.before}
                            onChange={e => {
                              const newGallery = [...content.gallery];
                              newGallery[index].before = e.target.value;
                              updateContent(['gallery'], newGallery);
                            }}
                            placeholder="Before image URL"
                          />
                          <Input
                            value={item.after}
                            onChange={e => {
                              const newGallery = [...content.gallery];
                              newGallery[index].after = e.target.value;
                              updateContent(['gallery'], newGallery);
                            }}
                            placeholder="After image URL"
                          />
                        </div>
                        <Textarea
                          value={item.description}
                          onChange={e => {
                            const newGallery = [...content.gallery];
                            newGallery[index].description = e.target.value;
                            updateContent(['gallery'], newGallery);
                          }}
                          placeholder="Gallery item description"
                          rows={2}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Behind the Scenes Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Behind the Scenes
                  <Button
                    onClick={() => addArrayItem(['serviceImages'], { image: '', title: '', description: '' })}
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Behind the Scenes Image
                  </Button>
                </CardTitle>
                <CardDescription>Manage 'Behind the Scenes' images, titles, and descriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {content.serviceImages && content.serviceImages.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-gray-500">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{item.title || `Behind the Scenes ${index + 1}`}</CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeArrayItem(['serviceImages'], index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Input
                          value={item.title}
                          onChange={e => {
                            const newImages = [...content.serviceImages];
                            newImages[index].title = e.target.value;
                            updateContent(['serviceImages'], newImages);
                          }}
                          placeholder="Image title"
                        />
                        <Input
                          value={item.image}
                          onChange={e => {
                            const newImages = [...content.serviceImages];
                            newImages[index].image = e.target.value;
                            updateContent(['serviceImages'], newImages);
                          }}
                          placeholder="Image URL"
                        />
                        <Textarea
                          value={item.description}
                          onChange={e => {
                            const newImages = [...content.serviceImages];
                            newImages[index].description = e.target.value;
                            updateContent(['serviceImages'], newImages);
                          }}
                          placeholder="Image description"
                          rows={2}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button Footer */}
        <div className="fixed bottom-6 right-6">
          <Button
            onClick={saveContent}
            disabled={saving}
            size="lg"
            className="bg-green-600 hover:bg-green-700 shadow-lg"
          >
            <Save className={`w-5 h-5 mr-2 ${saving ? 'animate-pulse' : ''}`} />
            {saving ? 'Saving...' : 'Save All Changes'}
          </Button>
        </div>
      </div>
    </div>
  );
}
