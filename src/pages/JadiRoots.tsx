import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Filter, ArrowUpDown, Leaf, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { jadiProductsArray } from "@/data/jadiProducts";

const JadiRoots = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [filterPlanet, setFilterPlanet] = useState("all");

  const planets = ["All", "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];

  const filteredProducts = jadiProductsArray
    .filter(product => filterPlanet === "all" || product.planetConnection === filterPlanet)
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "popular") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-background py-12 md:py-20">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1">
              <Leaf className="h-3 w-3 mr-1" />
              Jadi (Tree Roots)
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Sacred Tree Roots Collection
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Powerful tree roots blessed by ancient wisdom to balance planetary energies and bring harmony to your life. Each root is carefully selected and energized for maximum spiritual benefits.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                <span className="font-medium">100% Natural & Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                <span className="font-medium">Astrologically Energized</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                <span className="font-medium">Ancient Vedic Remedies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-6 md:py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            <div className="flex gap-2">
              {planets.map((planet) => (
                <Button
                  key={planet}
                  variant={filterPlanet === planet.toLowerCase() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterPlanet(planet.toLowerCase())}
                  className="whitespace-nowrap text-xs sm:text-sm"
                >
                  {planet}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 sm:flex-initial px-3 py-2 text-xs sm:text-sm border rounded-md bg-background"
            >
              <option value="featured">Featured</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/jadi-roots/${product.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 h-full">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/5 to-accent/5">
                    {product.discount > 0 && (
                      <Badge className="absolute top-3 right-3 bg-green-600 text-white z-10 text-xs">
                        {product.discount}% OFF
                      </Badge>
                    )}
                    <Badge className="absolute top-3 left-3 z-10 text-xs" style={{ backgroundColor: product.planetColor }}>
                      {product.planetConnection}
                    </Badge>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({product.reviews.toLocaleString()})
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                      {product.purpose}
                    </p>
                    
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 text-xs sm:text-sm py-2">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <Leaf className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-base md:text-lg mb-2">100% Natural Roots</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Sourced from sacred trees and authenticated by Vedic experts
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <Shield className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-base md:text-lg mb-2">Astrologically Verified</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Each root is energized according to planetary positions
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <TrendingUp className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-base md:text-lg mb-2">Proven Benefits</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Trusted by thousands for planetary harmony and healing
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JadiRoots;
