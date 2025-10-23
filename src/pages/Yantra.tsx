import { useState } from "react";
import { Star, Shield, Zap, Heart, TrendingUp, Filter, Award, Package, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Yantra = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const yantras = [
    {
      id: 1,
      name: "Shri Yantra - Premium Copper",
      price: 599,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1582734289-ea1d4857c8d7?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 287,
      type: "Wealth & Prosperity",
      category: "wealth",
      stock: 12,
      bestseller: true,
      energized: true,
      benefits: "Attracts abundance, prosperity & spiritual growth"
    },
    {
      id: 2,
      name: "Kuber Yantra - Gold Plated",
      price: 499,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1609847303250-b98e962e8b82?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 198,
      type: "Financial Growth",
      category: "wealth",
      stock: 8,
      bestseller: true,
      energized: true,
      benefits: "Enhances wealth, removes financial obstacles"
    },
    {
      id: 3,
      name: "Baglamukhi Yantra",
      price: 600,
      originalPrice: 900,
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      type: "Protection",
      category: "protection",
      stock: 15,
      energized: true,
      benefits: "Defeats enemies, protects from negativity"
    },
    {
      id: 4,
      name: "Shani Yantra - Energized",
      price: 399,
      originalPrice: 600,
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 234,
      type: "Saturn Remedy",
      category: "planetary",
      stock: 6,
      bestseller: true,
      energized: true,
      benefits: "Reduces Saturn's malefic effects, brings discipline"
    },
    {
      id: 5,
      name: "Ganesh Yantra - Brass",
      price: 549,
      originalPrice: 849,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 312,
      type: "Success & Wisdom",
      category: "success",
      stock: 10,
      bestseller: true,
      energized: true,
      benefits: "Removes obstacles, brings success & wisdom"
    },
    {
      id: 6,
      name: "Durga Yantra - Silver",
      price: 599,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 189,
      type: "Divine Protection",
      category: "protection",
      stock: 14,
      energized: true,
      benefits: "Divine protection, strength & courage"
    },
    {
      id: 7,
      name: "Lakshmi Yantra - Premium",
      price: 699,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1582734289-ea1d4857c8d7?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 267,
      type: "Wealth Attraction",
      category: "wealth",
      stock: 5,
      energized: true,
      benefits: "Attracts wealth, prosperity & abundance"
    },
    {
      id: 8,
      name: "Mahamrityunjaya Yantra",
      price: 549,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1609847303250-b98e962e8b82?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 178,
      type: "Health & Longevity",
      category: "health",
      stock: 11,
      energized: true,
      benefits: "Health, longevity & protection from illness"
    }
  ];

  const filteredYantras = yantras.filter(yantra => 
    selectedCategory === "all" || yantra.category === selectedCategory
  );

  const sortedYantras = [...filteredYantras].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  const benefits = [
    { icon: Shield, title: "100% Energized", desc: "All yantras activated by experienced priests" },
    { icon: Award, title: "Authentic", desc: "Genuine copper, brass & silver materials" },
    { icon: Package, title: "Free Delivery", desc: "Safe packaging & doorstep delivery" },
    { icon: Clock, title: "24/7 Support", desc: "Expert guidance on placement & worship" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-background py-16 px-4">
        <div className="container max-w-screen-2xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30" variant="outline">
            <Zap className="w-3 h-3 mr-1" />
            Energized by Vedic Priests
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Sacred Energized Yantras
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform Your Life with Ancient Vedic Power Instruments. Attract Wealth, Protection, Success & Spiritual Growth.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span><strong>12,000+</strong> Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span><strong>4.8</strong> Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="border-y bg-card">
        <div className="container max-w-screen-2xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{benefit.title}</p>
                  <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container max-w-screen-2xl mx-auto px-4 py-12">
        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              All Yantras
            </Button>
            <Button 
              variant={selectedCategory === "wealth" ? "default" : "outline"}
              onClick={() => setSelectedCategory("wealth")}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Wealth
            </Button>
            <Button 
              variant={selectedCategory === "protection" ? "default" : "outline"}
              onClick={() => setSelectedCategory("protection")}
            >
              <Shield className="w-4 h-4 mr-2" />
              Protection
            </Button>
            <Button 
              variant={selectedCategory === "health" ? "default" : "outline"}
              onClick={() => setSelectedCategory("health")}
            >
              <Heart className="w-4 h-4 mr-2" />
              Health
            </Button>
            <Button 
              variant={selectedCategory === "success" ? "default" : "outline"}
              onClick={() => setSelectedCategory("success")}
            >
              <Award className="w-4 h-4 mr-2" />
              Success
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {sortedYantras.length} {sortedYantras.length === 1 ? 'yantra' : 'yantras'}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedYantras.map((yantra) => (
            <Card key={yantra.id} className="group hover:shadow-glow transition-all duration-300 relative overflow-hidden">
              <CardContent className="p-4">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={yantra.image}
                    alt={yantra.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                    {yantra.bestseller && (
                      <Badge className="bg-accent text-accent-foreground">
                        Bestseller
                      </Badge>
                    )}
                    <Badge className="bg-destructive ml-auto">
                      {Math.round(((yantra.originalPrice - yantra.price) / yantra.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                  {yantra.energized && (
                    <Badge className="absolute bottom-2 left-2 bg-primary/90">
                      <Zap className="w-3 h-3 mr-1" />
                      Energized
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">{yantra.type}</p>
                  <h3 className="font-semibold text-base line-clamp-2 min-h-[48px]">{yantra.name}</h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{yantra.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({yantra.reviews} reviews)</span>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-2 min-h-[32px]">
                    {yantra.benefits}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">₹{yantra.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{yantra.originalPrice}</span>
                    </div>
                  </div>

                  {yantra.stock < 10 && (
                    <p className="text-xs text-destructive font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Only {yantra.stock} left in stock!
                    </p>
                  )}
                  
                  <Button 
                    className="w-full mt-2" 
                    onClick={() => window.location.href = `/yantra/${yantra.id}`}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section After Products */}
        <div className="mt-16 bg-card border rounded-lg p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-base mb-1">{benefit.title}</p>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed Content After Products */}
        <Tabs defaultValue="about" className="w-full mt-16">
          <TabsList className="w-full justify-start mb-8 bg-muted/50">
            <TabsTrigger value="about">About Yantras</TabsTrigger>
            <TabsTrigger value="benefits">Benefits & Usage</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="max-w-5xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What are Yantras?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base md:text-lg leading-relaxed">
                    Yantras are sacred geometric diagrams used in Hindu and Buddhist practices as powerful tools for meditation, worship, and achieving specific spiritual or material goals. The word "Yantra" comes from the Sanskrit root "yam" meaning to sustain or hold the essence of an object or concept.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Each Yantra is a symbolic representation of divine energy patterns. When properly energized and worshipped, they act as cosmic receptors, channeling positive energies and divine blessings into the lives of devotees. They are considered to be visual mantras - tools that focus cosmic energy into a geometric pattern.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    The science behind Yantras is rooted in sacred geometry and Vedic mathematics. The intricate patterns create specific energy fields that resonate with universal cosmic vibrations, helping practitioners align their consciousness with divine frequencies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Energized Yantras?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Properly Energized</h4>
                      <p className="text-sm text-muted-foreground">All our Yantras are energized by experienced Vedic priests through authentic rituals, mantras, and specific ceremonies performed on auspicious days.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Authentic Materials</h4>
                      <p className="text-sm text-muted-foreground">Crafted using genuine copper, brass, silver, and gold-plated materials according to Vedic specifications for maximum energy conductivity.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Accurate Geometry</h4>
                      <p className="text-sm text-muted-foreground">Each Yantra is precisely crafted with correct proportions, angles, and symbols as prescribed in ancient Vedic texts for optimal energy flow.</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">Expert Guidance</h4>
                      <p className="text-sm text-muted-foreground">Receive complete instructions for worship, placement, mantras, and rituals along with 24/7 support from our spiritual advisors.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Types of Yantras</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        <h4 className="font-bold text-lg">Wealth & Prosperity Yantras</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Attract abundance, financial growth, and material prosperity into your life.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Shri Yantra - Ultimate wealth & spiritual growth</li>
                        <li>• Kuber Yantra - Financial abundance & business success</li>
                        <li>• Lakshmi Yantra - Wealth attraction & blessings</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-primary" />
                        <h4 className="font-bold text-lg">Protection Yantras</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Divine protection from negative energies, enemies, and obstacles.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Baglamukhi Yantra - Protection from enemies</li>
                        <li>• Durga Yantra - Divine strength & courage</li>
                        <li>• Kali Yantra - Destruction of negativity</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="w-6 h-6 text-primary" />
                        <h4 className="font-bold text-lg">Health & Wellness Yantras</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Promote physical health, mental peace, and overall well-being.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Mahamrityunjaya Yantra - Health & longevity</li>
                        <li>• Dhanvantari Yantra - Healing & wellness</li>
                        <li>• Hanuman Yantra - Physical strength & vitality</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="w-6 h-6 text-primary" />
                        <h4 className="font-bold text-lg">Success & Career Yantras</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Remove obstacles and achieve success in education and career.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ganesh Yantra - Obstacle removal & success</li>
                        <li>• Saraswati Yantra - Knowledge & wisdom</li>
                        <li>• Vyapar Vridhi Yantra - Business growth</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">How Yantras Work</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Yantras work on the principle of sacred geometry and cosmic resonance. The geometric patterns create specific energy fields that interact with the universal cosmic energy. When you meditate on a Yantra and chant its associated mantra, you align your personal energy with the divine energy it represents.
                  </p>
                  <p className="leading-relaxed">
                    The center point (Bindu) of the Yantra represents the source of cosmic energy, while the surrounding geometric patterns represent the various levels of consciousness and manifestation. Regular worship and meditation help you tap into these energies for spiritual growth and material benefits.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <div className="max-w-5xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Use Yantras Effectively</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Follow these traditional Vedic guidelines to maximize the benefits of your Yantra and establish a powerful spiritual practice.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</span>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Placement Direction</h3>
                        <p className="text-muted-foreground">Place your Yantra in a clean, sacred space facing East or North. These directions are considered most auspicious for spiritual practices. The worship area should be peaceful and free from distractions.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</span>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Initial Cleansing</h3>
                        <p className="text-muted-foreground">Upon receiving, cleanse the Yantra with pure water, milk, or Ganga jal. Wipe it gently with a clean cloth. Apply sandalwood paste or kumkum at the center to honor and activate it.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</span>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Daily Worship Ritual</h3>
                        <p className="text-muted-foreground">Light incense and a ghee lamp in front of the Yantra. Offer fresh flowers, fruits, or sweets. Chant the associated mantra 108 times daily, preferably during Brahma Muhurta (4-6 AM) or evening.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">4</span>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Meditation Practice</h3>
                        <p className="text-muted-foreground">Sit in front of the Yantra in a comfortable meditative posture. Focus your gaze on the center point (Bindu) for 10-15 minutes. Let your mind absorb its sacred geometry and energy.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">5</span>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Maintain Sanctity</h3>
                        <p className="text-muted-foreground">Keep the Yantra clean and dust-free. Don't let anyone else touch it. Cover it with a clean cloth when not in use. Treat it with reverence as a form of the deity it represents.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">6</span>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Consistent Practice</h3>
                        <p className="text-muted-foreground">Results manifest with consistent worship over time. Maintain your practice for at least 40 days without break. Faith, devotion, and regularity are key to experiencing the full benefits.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Key Benefits of Regular Yantra Worship</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-6">
                      <TrendingUp className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Material Prosperity</h4>
                      <p className="text-sm text-muted-foreground">Attract wealth, success, and abundance in all areas of life through aligned cosmic energies.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-6">
                      <Shield className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Divine Protection</h4>
                      <p className="text-sm text-muted-foreground">Shield yourself from negative energies, evil eye, and harmful influences with divine blessings.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-6">
                      <Heart className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Health & Wellness</h4>
                      <p className="text-sm text-muted-foreground">Promote physical health, mental peace, and emotional balance through cosmic healing energies.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-6">
                      <Award className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Success & Growth</h4>
                      <p className="text-sm text-muted-foreground">Remove obstacles and achieve success in career, education, and personal endeavors.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-6">
                      <Zap className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Spiritual Awakening</h4>
                      <p className="text-sm text-muted-foreground">Accelerate your spiritual journey and connect with higher consciousness through meditation.</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-6">
                      <Users className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold mb-2">Harmony & Peace</h4>
                      <p className="text-sm text-muted-foreground">Bring peace, harmony, and positive relationships in family and social circles.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Important Do's and Don'ts</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-primary">✓ Do's</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Worship with faith and devotion</li>
                      <li>✓ Maintain cleanliness and purity</li>
                      <li>✓ Chant mantras with correct pronunciation</li>
                      <li>✓ Offer fresh flowers and incense daily</li>
                      <li>✓ Practice during auspicious times</li>
                      <li>✓ Keep in a sacred, elevated place</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-destructive">✗ Don'ts</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✗ Don't place near bathrooms or feet level</li>
                      <li>✗ Don't let others touch your Yantra</li>
                      <li>✗ Don't worship without cleanliness</li>
                      <li>✗ Don't use for selfish or harmful purposes</li>
                      <li>✗ Don't skip daily worship once started</li>
                      <li>✗ Don't display disrespect or doubt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Customer Reviews</h2>
                  <p className="text-muted-foreground">Real experiences from our satisfied customers</p>
                </div>
                <div className="flex items-center gap-4 bg-card border rounded-lg p-4">
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-3xl font-bold">4.8</span>
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-xs text-muted-foreground">Based on 1,287 reviews</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    name: "Rajesh Kumar", 
                    rating: 5, 
                    yantra: "Shri Yantra - Premium Copper", 
                    review: "Absolutely amazing! Within 2 months of regular worship, I noticed significant improvements in my business. The copper quality is excellent and it came properly energized. The packaging was secure and it included detailed instructions for worship. Highly recommend to anyone seeking prosperity!", 
                    date: "2 weeks ago",
                    verified: true
                  },
                  { 
                    name: "Priya Sharma", 
                    rating: 5, 
                    yantra: "Kuber Yantra - Gold Plated", 
                    review: "Very authentic product. I can feel the positive energy emanating from this Yantra. My financial situation has improved remarkably and I feel more confident about my future. The gold plating is beautiful and the craftsmanship is top-notch.", 
                    date: "1 month ago",
                    verified: true
                  },
                  { 
                    name: "Amit Patel", 
                    rating: 5, 
                    yantra: "Ganesh Yantra - Brass", 
                    review: "This Yantra helped me overcome major obstacles in my career. I got the promotion I was waiting for after 3 years! The energy is palpable when I meditate in front of it. Customer support was also very helpful with placement guidance.", 
                    date: "3 weeks ago",
                    verified: true
                  },
                  { 
                    name: "Meera Reddy", 
                    rating: 4, 
                    yantra: "Durga Yantra - Silver", 
                    review: "Beautiful craftsmanship and authentic material. I feel protected and my anxiety has reduced significantly since I started worshipping. The packaging was very good with bubble wrap. Only giving 4 stars because delivery took slightly longer than expected, but worth the wait!", 
                    date: "1 week ago",
                    verified: true
                  },
                  { 
                    name: "Vikram Singh", 
                    rating: 5, 
                    yantra: "Shani Yantra - Energized", 
                    review: "I was going through a very difficult Saturn period (Sade Sati) and this Yantra has brought immense relief. My troubles have reduced and I feel more stable. The priest energization certificate that came with it gave me confidence it's authentic.", 
                    date: "5 days ago",
                    verified: true
                  },
                  { 
                    name: "Anjali Desai", 
                    rating: 5, 
                    yantra: "Lakshmi Yantra - Premium", 
                    review: "Excellent quality! The intricate design is mesmerizing to look at. I've been worshipping daily for a month now and have noticed positive changes in my finances. Money is coming from unexpected sources. The mantra guide provided was very helpful.", 
                    date: "2 weeks ago",
                    verified: true
                  }
                ].map((review, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                                <Shield className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{review.yantra}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{review.review}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Share Your Experience</h3>
                <p className="text-muted-foreground mb-6">
                  Have you experienced the power of our Yantras? We'd love to hear your story!
                </p>
                <Button size="lg">Write a Review</Button>
              </div>

              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      How long does it take to see results from Yantra worship?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Results vary based on individual devotion, consistency, and karmic factors. Many devotees report experiencing positive changes within 21-40 days of regular worship. However, some may notice subtle shifts earlier while others may take longer. The key is consistent daily worship with faith and proper rituals.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Are your Yantras properly energized?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, all our Yantras are energized by experienced Vedic priests through authentic rituals performed on auspicious days. Each Yantra comes with an energization certificate. The energization involves specific mantras, offerings, and rituals prescribed in ancient texts to activate the Yantra's divine energy.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Can I keep multiple Yantras together?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, you can keep multiple Yantras in your worship space, but ensure each has adequate space and isn't overcrowded. It's best to focus on one or two Yantras at a time for worship. If you have specific goals for different areas of life, you can worship different Yantras on different days of the week.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      What is the best time to worship a Yantra?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      The most auspicious time is Brahma Muhurta (4-6 AM), considered the time of maximum positive cosmic energy. However, if this isn't possible, worship during sunrise or evening twilight (Sandhya time) is also very effective. The most important factor is consistency and devotion rather than the exact time.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      Do I need to chant mantras while using a Yantra?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, mantra chanting is an integral part of Yantra worship. Each Yantra has specific mantras associated with it. We provide detailed mantra instructions with each Yantra. Chanting 108 times daily using a mala is recommended. The vibrations of mantras activate and align you with the Yantra's energy.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">
                      Can women worship Yantras during menstruation?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      This varies by tradition and personal belief. In many modern interpretations, the divine energy is beyond physical states and women can continue worship. However, some traditional practices suggest pausing physical worship during this time while continuing mental meditation. Choose what feels right for your spiritual practice.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left">
                      What materials are your Yantras made from?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We use authentic Vedic-prescribed materials: copper (excellent energy conductor), brass (durable and traditional), silver (pure and auspicious), and gold-plated (most divine). Each material has specific properties and benefits. The choice depends on the deity, purpose, and your budget. All materials are genuine and tested for purity.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left">
                      Where should I place the Yantra in my home?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Place Yantras in your prayer room or altar, facing East or North. They should be at eye level or higher, never at feet level. Avoid placing them in bathrooms, bedrooms (except specific Yantras), or kitchens. Ensure the space is clean, quiet, and peaceful. Wealth Yantras can be placed in living rooms or offices facing the main entrance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Yantra;
