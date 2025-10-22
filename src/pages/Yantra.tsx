import { useState } from "react";
import { Star, Shield, Zap, Heart, TrendingUp, Filter, Award, Package, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

      </div>
    </main>
  );
};

export default Yantra;
