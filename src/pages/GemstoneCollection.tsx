import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Shield, Award, Filter, ChevronDown, Sparkles, Heart, Users, MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

const GemstoneCollection = () => {
  const { gemstoneType } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  // Define all gemstone collections with multiple products per type
  const gemstoneCollections: Record<string, any> = {
    "blue-sapphire": {
      name: "Blue Sapphire (Neelam)",
      planet: "Saturn",
      mainBenefits: ["Career Growth", "Mental Clarity", "Wealth Protection"],
      description: "Blue Sapphire is one of the most powerful gemstones, associated with Saturn. It brings discipline, focus, and removes obstacles in career and life.",
      products: [
        {
          id: "bs-1",
          name: "Premium Blue Sapphire - 3 Carat",
          price: 12999,
          originalPrice: 18999,
          image: blueSapphireImage,
          rating: 4.9,
          reviews: 243,
          weight: "3 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "bs-2",
          name: "Premium Blue Sapphire - 4 Carat",
          price: 16999,
          originalPrice: 24999,
          image: blueSapphireImage,
          rating: 4.9,
          reviews: 189,
          weight: "4 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "bs-3",
          name: "Premium Blue Sapphire - 5 Carat",
          price: 21999,
          originalPrice: 32999,
          image: blueSapphireImage,
          rating: 4.8,
          reviews: 156,
          weight: "5 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VS",
        },
        {
          id: "bs-4",
          name: "Royal Blue Sapphire - 3.5 Carat",
          price: 14999,
          originalPrice: 21999,
          image: blueSapphireImage,
          rating: 4.9,
          reviews: 201,
          weight: "3.5 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "bs-5",
          name: "Premium Blue Sapphire - 6 Carat",
          price: 29999,
          originalPrice: 44999,
          image: blueSapphireImage,
          rating: 4.8,
          reviews: 134,
          weight: "6 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VS",
        },
        {
          id: "bs-6",
          name: "Natural Blue Sapphire - 2.5 Carat",
          price: 9999,
          originalPrice: 14999,
          image: blueSapphireImage,
          rating: 4.7,
          reviews: 167,
          weight: "2.5 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VS",
        },
      ]
    },
    "yellow-sapphire": {
      name: "Yellow Sapphire (Pukhraj)",
      planet: "Jupiter",
      mainBenefits: ["Prosperity", "Wisdom", "Marriage Harmony", "Good Fortune"],
      description: "Yellow Sapphire is the gemstone of Jupiter, bringing wealth, wisdom, and marital bliss. It's highly recommended for career and financial growth.",
      products: [
        {
          id: "ys-1",
          name: "Premium Yellow Sapphire - 3 Carat",
          price: 10999,
          originalPrice: 15999,
          image: yellowSapphireImage,
          rating: 4.9,
          reviews: 289,
          weight: "3 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "ys-2",
          name: "Premium Yellow Sapphire - 4 Carat",
          price: 14999,
          originalPrice: 21999,
          image: yellowSapphireImage,
          rating: 4.8,
          reviews: 234,
          weight: "4 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "ys-3",
          name: "Premium Yellow Sapphire - 5 Carat",
          price: 19999,
          originalPrice: 29999,
          image: yellowSapphireImage,
          rating: 4.9,
          reviews: 198,
          weight: "5 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VS",
        },
        {
          id: "ys-4",
          name: "Royal Yellow Sapphire - 3.5 Carat",
          price: 12999,
          originalPrice: 18999,
          image: yellowSapphireImage,
          rating: 4.8,
          reviews: 176,
          weight: "3.5 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "ys-5",
          name: "Premium Yellow Sapphire - 6 Carat",
          price: 26999,
          originalPrice: 39999,
          image: yellowSapphireImage,
          rating: 4.9,
          reviews: 145,
          weight: "6 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VS",
        },
        {
          id: "ys-6",
          name: "Natural Yellow Sapphire - 2.5 Carat",
          price: 8999,
          originalPrice: 12999,
          image: yellowSapphireImage,
          rating: 4.7,
          reviews: 203,
          weight: "2.5 Carat",
          origin: "Ceylon",
          certified: true,
          clarity: "VS",
        },
      ]
    },
    "ruby": {
      name: "Ruby (Manik)",
      planet: "Sun",
      mainBenefits: ["Leadership", "Confidence", "Health"],
      description: "Ruby is the gemstone of the Sun, bringing vitality, leadership qualities, and success in authoritative positions.",
      products: [
        {
          id: "r-1",
          name: "Premium Ruby - 3 Carat",
          price: 11499,
          originalPrice: 16999,
          image: rubyImage,
          rating: 4.8,
          reviews: 267,
          weight: "3 Carat",
          origin: "Burma",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "r-2",
          name: "Premium Ruby - 4 Carat",
          price: 15999,
          originalPrice: 23999,
          image: rubyImage,
          rating: 4.9,
          reviews: 189,
          weight: "4 Carat",
          origin: "Burma",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "r-3",
          name: "Premium Ruby - 5 Carat",
          price: 20999,
          originalPrice: 31999,
          image: rubyImage,
          rating: 4.8,
          reviews: 156,
          weight: "5 Carat",
          origin: "Burma",
          certified: true,
          clarity: "VS",
        },
        {
          id: "r-4",
          name: "Royal Ruby - 3.5 Carat",
          price: 13999,
          originalPrice: 20999,
          image: rubyImage,
          rating: 4.9,
          reviews: 201,
          weight: "3.5 Carat",
          origin: "Burma",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "r-5",
          name: "Premium Ruby - 6 Carat",
          price: 28999,
          originalPrice: 43999,
          image: rubyImage,
          rating: 4.8,
          reviews: 134,
          weight: "6 Carat",
          origin: "Burma",
          certified: true,
          clarity: "VS",
        },
        {
          id: "r-6",
          name: "Natural Ruby - 2.5 Carat",
          price: 9499,
          originalPrice: 13999,
          image: rubyImage,
          rating: 4.7,
          reviews: 178,
          weight: "2.5 Carat",
          origin: "Burma",
          certified: true,
          clarity: "VS",
        },
      ]
    },
    "emerald": {
      name: "Emerald (Panna)",
      planet: "Mercury",
      mainBenefits: ["Intelligence", "Communication", "Business Success"],
      description: "Emerald is the gemstone of Mercury, enhancing intellectual abilities, communication skills, and business acumen.",
      products: [
        {
          id: "e-1",
          name: "Premium Emerald - 3 Carat",
          price: 9999,
          originalPrice: 14999,
          image: emeraldImage,
          rating: 4.8,
          reviews: 243,
          weight: "3 Carat",
          origin: "Colombian",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "e-2",
          name: "Premium Emerald - 4 Carat",
          price: 13999,
          originalPrice: 20999,
          image: emeraldImage,
          rating: 4.9,
          reviews: 189,
          weight: "4 Carat",
          origin: "Colombian",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "e-3",
          name: "Premium Emerald - 5 Carat",
          price: 18999,
          originalPrice: 28999,
          image: emeraldImage,
          rating: 4.8,
          reviews: 167,
          weight: "5 Carat",
          origin: "Colombian",
          certified: true,
          clarity: "VS",
        },
        {
          id: "e-4",
          name: "Royal Emerald - 3.5 Carat",
          price: 11999,
          originalPrice: 17999,
          image: emeraldImage,
          rating: 4.8,
          reviews: 201,
          weight: "3.5 Carat",
          origin: "Colombian",
          certified: true,
          clarity: "VVS",
        },
        {
          id: "e-5",
          name: "Premium Emerald - 6 Carat",
          price: 25999,
          originalPrice: 38999,
          image: emeraldImage,
          rating: 4.9,
          reviews: 134,
          weight: "6 Carat",
          origin: "Colombian",
          certified: true,
          clarity: "VS",
        },
        {
          id: "e-6",
          name: "Natural Emerald - 2.5 Carat",
          price: 7999,
          originalPrice: 11999,
          image: emeraldImage,
          rating: 4.7,
          reviews: 189,
          weight: "2.5 Carat",
          origin: "Colombian",
          certified: true,
          clarity: "VS",
        },
      ]
    },
  };

  const currentCollection = gemstoneType ? gemstoneCollections[gemstoneType] : null;

  if (!currentCollection) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Gemstone Not Found</h1>
        <Button onClick={() => navigate("/gemstones")}>Back to All Gemstones</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="cursor-pointer hover:text-foreground" onClick={() => navigate("/")}>Home</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-foreground" onClick={() => navigate("/gemstones")}>Gemstones</span>
            <span>/</span>
            <span className="text-foreground">{currentCollection.name}</span>
          </div>
        </div>
      </div>


      {/* Header Section */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCollection.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{currentCollection.description}</p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {currentCollection.mainBenefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-center gap-2 bg-background/80 backdrop-blur rounded-lg px-3 py-2 border">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" />
                <span className="font-medium">100% Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-medium">5000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-medium">23+ Years Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Products Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                Showing {currentCollection.products.length} products
              </p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden w-full"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCollection.products.map((product: any, idx: number) => (
              <Card 
                key={product.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50 relative"
                onClick={() => navigate(`/gemstone/${product.id}`)}
              >
                <CardContent className="p-0">
                  {/* Urgency Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    {idx === 0 && (
                      <Badge className="bg-red-500 hover:bg-red-600 animate-pulse">
                        <Zap className="w-3 h-3 mr-1" />
                        Only 2 Left
                      </Badge>
                    )}
                    {idx === 1 && (
                      <Badge className="bg-orange-500 hover:bg-orange-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    {idx === 2 && (
                      <Badge className="bg-purple-500 hover:bg-purple-600">
                        <Eye className="w-3 h-3 mr-1" />
                        Most Viewed
                      </Badge>
                    )}
                  </div>

                  {/* Image Section */}
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {product.certified && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-500 hover:bg-green-600">
                          <Shield className="w-3 h-3 mr-1" />
                          Certified
                        </Badge>
                      </div>
                    )}
                    
                    {/* Discount Badge */}
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-primary text-primary-foreground font-bold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 space-y-3">
                    {/* Title */}
                    <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Details */}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{product.weight}</span>
                      <span>•</span>
                      <span>{product.origin}</span>
                      <span>•</span>
                      <span>{product.clarity}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-2xl font-bold text-primary">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                        <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                          Save ₹{(product.originalPrice - product.price).toLocaleString()}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        or 3 interest-free EMI of ₹{Math.round(product.price / 3).toLocaleString()}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="space-y-2">
                      <Button className="w-full group-hover:scale-105 transition-transform" size="lg">
                        <Shield className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://wa.me/1234567890?text=Hi, I need expert consultation about ' + product.name, '_blank');
                        }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Free Expert Consultation
                      </Button>
                    </div>
                    
                    {/* Trust Indicator */}
                    <div className="text-xs text-muted-foreground flex items-center justify-center gap-1 pt-2 border-t">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Free Shipping • 7-Day Return • Lifetime Certificate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-primary/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Why 5000+ Customers Trust Us</h2>
            <p className="text-muted-foreground">The most trusted name in authentic gemstones since 2001</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">100% Certified</h3>
              <p className="text-sm text-muted-foreground">Every gemstone comes with lab certification</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Thousands of success stories from real customers</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">Free consultation with 23+ years experts</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Best Prices</h3>
              <p className="text-sm text-muted-foreground">Direct sourcing, no middlemen markup</p>
            </div>
          </div>
        </div>

        {/* Content Tabs Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Everything You Need to Know</h2>
          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="wearing">How to Wear</TabsTrigger>
              <TabsTrigger value="care">Care Guide</TabsTrigger>
            </TabsList>

            {/* Benefits Tab */}
            <TabsContent value="benefits" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Spiritual Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Enhances spiritual growth and awareness</li>
                      <li>• Strengthens connection with higher consciousness</li>
                      <li>• Promotes inner peace and tranquility</li>
                      <li>• Balances energy centers (chakras)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Health Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Improves overall vitality and energy</li>
                      <li>• Supports immune system function</li>
                      <li>• Promotes better sleep quality</li>
                      <li>• Reduces stress and anxiety</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Professional Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Enhances career opportunities</li>
                      <li>• Improves decision-making abilities</li>
                      <li>• Attracts prosperity and success</li>
                      <li>• Strengthens leadership qualities</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Protective Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Shields from negative energies</li>
                      <li>• Protects against evil eye</li>
                      <li>• Provides emotional stability</li>
                      <li>• Guards against harmful influences</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* How to Wear Tab */}
          <TabsContent value="wearing" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">How to Wear {currentCollection.name}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Best Day to Wear</h3>
                  <p className="text-muted-foreground">
                    For maximum benefits, wear your {currentCollection.name.split(' ')[0]} on the day ruled by {currentCollection.planet}. 
                    Consult with an astrologer for the most auspicious time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Which Finger to Wear</h3>
                  <p className="text-muted-foreground">
                    Generally worn on the ring finger or index finger of the right hand for men, and left hand for women. 
                    However, consult an expert astrologer for personalized guidance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Metal Recommendation</h3>
                  <p className="text-muted-foreground">
                    {currentCollection.name.split(' ')[0]} gemstones are traditionally set in gold or silver. 
                    The metal choice can enhance the gemstone's astrological effects.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Mantra to Chant</h3>
                  <p className="text-muted-foreground">
                    Before wearing, purify the gemstone by chanting the mantra associated with {currentCollection.planet}. 
                    This activates the gemstone's positive energies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Who Should Wear</h3>
                  <p className="text-muted-foreground">
                    Ideal for those seeking {currentCollection.mainBenefits.join(", ").toLowerCase()}. 
                    Always consult a qualified astrologer before wearing any gemstone.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Care Guide Tab */}
          <TabsContent value="care" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Care Instructions for {currentCollection.name}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Daily Care</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Remove jewelry during physical activities or sports</li>
                    <li>• Avoid exposure to harsh chemicals and perfumes</li>
                    <li>• Store separately in a soft cloth or jewelry box</li>
                    <li>• Keep away from extreme temperatures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Cleaning Instructions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Clean with lukewarm water and mild soap</li>
                    <li>• Use a soft brush to remove dirt gently</li>
                    <li>• Pat dry with a soft, lint-free cloth</li>
                    <li>• Avoid ultrasonic cleaners for treated stones</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Energetic Cleansing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Rinse under running water once a week</li>
                    <li>• Place in moonlight overnight for recharging</li>
                    <li>• Use sage smoke or incense for purification</li>
                    <li>• Recite mantras to restore positive energy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Professional Maintenance</h3>
                  <p className="text-muted-foreground">
                    Have your gemstone jewelry professionally inspected and cleaned every 6-12 months. 
                    This ensures the setting remains secure and the stone maintains its brilliance.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> These are general care guidelines. Different gemstones may have specific requirements. 
                    Always follow any specific care instructions provided with your purchase.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
          </Tabs>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"Got promoted within 3 months of wearing the Yellow Sapphire. The expert consultation was spot on!"</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-semibold">
                  RK
                </div>
                <div>
                  <p className="font-semibold text-sm">Rajesh Kumar</p>
                  <p className="text-xs text-muted-foreground">Mumbai</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-2 border-primary">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"Authentic gemstone with proper certification. The quality exceeded my expectations. Highly recommended!"</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-semibold">
                  PS
                </div>
                <div>
                  <p className="font-semibold text-sm">Priya Sharma</p>
                  <p className="text-xs text-muted-foreground">Delhi</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"My business improved significantly. The astrologer's guidance was invaluable. Thank you AstroSage!"</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-semibold">
                  AJ
                </div>
                <div>
                  <p className="font-semibold text-sm">Amit Joshi</p>
                  <p className="text-xs text-muted-foreground">Bangalore</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Expert Consultation Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary via-accent to-primary text-white rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4 animate-pulse" />
                LIMITED TIME OFFER
              </div>
              <h3 className="text-3xl font-bold mb-2">Get FREE Expert Consultation Worth ₹2000!</h3>
              <p className="text-white/90 mb-4">
                Our expert astrologers will analyze your birth chart and recommend the perfect gemstone. Available 24/7.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Birth Chart Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Gemstone Recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">Wearing Guidelines</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform font-bold shadow-xl"
                onClick={() => {
                  window.open('https://wa.me/1234567890?text=Hi, I want FREE expert consultation for gemstones', '_blank');
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Claim FREE Consultation
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Expert Available Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border-2 border-green-500/20 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100% Money-Back Guarantee</h3>
            <p className="text-muted-foreground mb-4">
              If you're not satisfied with your gemstone within 7 days, we'll give you a full refund. No questions asked!
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>7-Day Easy Return</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Free Shipping Both Ways</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Instant Refund</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 border-t pt-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">100% Authentic</h3>
              <p className="text-sm text-muted-foreground">
                Lab certified gemstones
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">23+ Years</h3>
              <p className="text-sm text-muted-foreground">
                Trusted expertise
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">5000+</h3>
              <p className="text-sm text-muted-foreground">
                Happy customers
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 bg-primary/10 rounded-full">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">4.9/5 Rating</h3>
              <p className="text-sm text-muted-foreground">
                Excellent reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemstoneCollection;
