import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ShoppingBag, Shield, Award, Truck, CheckCircle2, TrendingUp, Users, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { allBraceletProducts } from "@/data/braceletProducts";

const Bracelets = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Bracelets", count: allBraceletProducts.length },
    { id: "Chakra", name: "Chakra", count: allBraceletProducts.filter(p => p.category === "Chakra").length },
    { id: "Protection", name: "Protection", count: allBraceletProducts.filter(p => p.category === "Protection").length },
    { id: "Love", name: "Love", count: allBraceletProducts.filter(p => p.category === "Love").length },
    { id: "Prosperity", name: "Prosperity", count: allBraceletProducts.filter(p => p.category === "Prosperity").length },
    { id: "Healing", name: "Healing", count: allBraceletProducts.filter(p => p.category === "Healing").length },
    { id: "Confidence", name: "Confidence", count: allBraceletProducts.filter(p => p.category === "Confidence").length },
    { id: "Money", name: "Money", count: allBraceletProducts.filter(p => p.category === "Money").length }
  ];

  const filteredBracelets = selectedCategory === "all" 
    ? allBraceletProducts 
    : allBraceletProducts.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background py-8">
      {/* Trust Bar */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y">
        <div className="container max-w-screen-2xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center md:justify-around items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">100% Natural Crystals</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-medium">Lab Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="font-medium">Free Shipping Pan India</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-medium">30-Day Money Back</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-2xl px-4 mx-auto mt-8">
        {/* Hero Section */}
        <div className="mb-12 text-center space-y-4">
          <Badge className="mb-4 px-4 py-2 text-sm" variant="outline">
            <Sparkles className="h-4 w-4 mr-2" />
            Trusted by 150,000+ Happy Customers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Crystal Healing Bracelets
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handcrafted with 100% Natural Crystals • Lab Certified • Energized for Maximum Benefits
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold">4.8/5</span>
              <span className="text-muted-foreground">(150,000+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="font-medium">250,000+ Sold</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                {category.name}
                {category.count > 0 && (
                  <Badge variant="secondary" className="ml-1 px-2 py-0 text-xs">
                    {category.count}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredBracelets.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredBracelets.map((bracelet) => (
            <Card 
              key={bracelet.id} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
              onClick={() => navigate(`/bracelet/${bracelet.id}`)}
            >
              <CardContent className="p-4">
                {/* Image Container */}
                <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={bracelet.images[0]}
                    alt={bracelet.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                    <Badge className="bg-accent text-white">
                      ⭐ Bestseller
                    </Badge>
                    <Badge className="bg-green-600 text-white font-bold">
                      {bracelet.discount}% OFF
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="rounded-full shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {bracelet.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{bracelet.rating}</span>
                      <span className="text-xs text-muted-foreground">({bracelet.reviews.toLocaleString()})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {bracelet.name}
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {bracelet.material} • {bracelet.beadSize}
                  </p>

                  {/* Social Proof */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{bracelet.sold} sold</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-2xl font-bold text-primary">₹{bracelet.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{bracelet.originalPrice.toLocaleString()}</span>
                  </div>
                  
                  {/* CTA Button */}
                  <Button className="w-full group-hover:bg-accent group-hover:shadow-lg transition-all" size="lg">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    View Details
                  </Button>

                  {/* Trust Indicators */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>Natural</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-green-600" />
                      <span>Certified</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-green-600" />
                      <span>Energized</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Crystal Bracelets?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">100% Natural Crystals</h3>
              <p className="text-sm text-muted-foreground">
                Hand-selected, lab-certified authentic crystals from ethical sources
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Cleansed & Energized</h3>
              <p className="text-sm text-muted-foreground">
                Every bracelet is cleansed and charged for maximum healing power
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">150,000+ Happy Customers</h3>
              <p className="text-sm text-muted-foreground">
                Join thousands experiencing real transformation and healing
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">30-Day Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                Not satisfied? Get 100% money back, no questions asked
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Bracelets;
