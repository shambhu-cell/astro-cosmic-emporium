import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, Eye, Shield, Award } from "lucide-react";
import { vastuPaintingProducts } from "@/data/vastuPaintingProducts";

const VastuPainting = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [filterTheme, setFilterTheme] = useState("all");

  const themes = ["all", "Sunset & Nature", "Radha Krishna"];

  const filteredProducts = vastuPaintingProducts
    .filter((product) => {
      if (filterTheme === "all") return true;
      return product.theme === filterTheme;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Vastu Paintings Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Transform your space with powerful Vastu paintings that eliminate doshas, enhance positive energy, and create harmony in your home or office
          </p>
          
          {/* Trust Factors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">100% Authentic</h3>
              <p className="text-sm text-muted-foreground text-center">
                Certified Vastu-compliant paintings designed by experts
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Premium Quality</h3>
              <p className="text-sm text-muted-foreground text-center">
                HD canvas prints with wooden frames, ready to hang
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">5000+ Happy Customers</h3>
              <p className="text-sm text-muted-foreground text-center">
                Trusted by thousands for positive energy transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Theme Filter */}
            <div className="flex flex-wrap gap-2">
              {themes.map((theme) => (
                <Button
                  key={theme}
                  variant={filterTheme === theme ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterTheme(theme)}
                  className="capitalize"
                >
                  {theme === "all" ? "All Paintings" : theme}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {vastuPaintingProducts.length} paintings
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border"
              >
                <Link to={`/vastu-painting/${product.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge
                      className="absolute top-3 left-3 bg-primary/90 text-primary-foreground"
                    >
                      {product.theme}
                    </Badge>
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-background/90 hover:bg-background"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-background/90 hover:bg-background"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviewCount})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-foreground">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </Badge>
                    </div>

                    <div className="text-xs text-muted-foreground mb-3">
                      Size: {product.size}
                    </div>

                    <Button
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              About Vastu Paintings
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Our lives are profoundly impacted by paintings. However, the effects of Vastu artworks go beyond simple sensations. They provide us with numerous forms of assistance as well as vibrations and energies that have the power to drastically alter our life.
              </p>
              <p>
                The true aim of Vastu paintings is to eliminate Vastu Dosh, the diseased figure in space, improve our lives, and much more. Vastu-specific paintings provide a message through texture, color, images, quotations, clip arts, symbols, and so on.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Benefits of Vastu Paintings:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Eliminate Vastu Dosh from your space</li>
                <li>Create harmonious and balanced atmosphere</li>
                <li>Promote tranquility and relaxation</li>
                <li>Enhance positive energy flow</li>
                <li>Balance the five elements (earth, fire, water, air, space)</li>
                <li>Improve relationships and family harmony</li>
                <li>Attract prosperity and abundance</li>
                <li>Provide spiritual protection and divine blessings</li>
              </ul>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Our Collection:
              </h3>
              <p>
                <strong>Sunset & Nature Paintings:</strong> Designed to harness the positive energy of the setting sun and natural landscapes, creating tranquility and connecting you with nature's peaceful energy.
              </p>
              <p>
                <strong>Radha Krishna Paintings:</strong> Bring harmony, spiritual connection, and divine love into your space. These paintings help balance the five elements, improve relationships, and inspire devotion and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VastuPainting;
