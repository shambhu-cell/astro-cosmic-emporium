import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, Eye, Shield, Award, Sparkles } from "lucide-react";
import { pendantProducts } from "@/data/pendantProducts";

const Pendant = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [filterType, setFilterType] = useState("all");

  const types = ["all", "Religious", "Spiritual", "Astrological", "Yantra", "Mantra", "Rudraksha", "Kavach"];

  const filteredProducts = pendantProducts
    .filter((product) => {
      if (filterType === "all") return true;
      return product.type === filterType;
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
            Sacred Pendant Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover divine protection and blessings with our authentic spiritual pendants, crafted with precision and energized for maximum benefits
          </p>
          
          {/* Trust Factors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">100% Authentic</h3>
              <p className="text-sm text-muted-foreground text-center">
                Certified metals and gemstones with authenticity guarantee
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Energized & Blessed</h3>
              <p className="text-sm text-muted-foreground text-center">
                Each pendant is energized through Vedic rituals by experts
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">10,000+ Satisfied Customers</h3>
              <p className="text-sm text-muted-foreground text-center">
                Trusted by thousands for divine blessings and protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Type Filter */}
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Button
                  key={type}
                  variant={filterType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterType(type)}
                  className="capitalize"
                >
                  {type === "all" ? "All Pendants" : type}
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
              Showing {filteredProducts.length} of {pendantProducts.length} pendants
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
                <Link to={`/pendant/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge
                      className="absolute top-3 left-3 bg-primary/90 text-primary-foreground"
                    >
                      {product.type}
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
                      Metal: {product.metal}
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

      {/* Tab Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About Pendants</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="guide">Selection Guide</TabsTrigger>
              <TabsTrigger value="care">Care Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-8">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  About Sacred Pendants
                </h2>
                <p>
                  Sacred pendants have been worn for thousands of years as powerful spiritual tools for protection, healing, and attracting divine blessings. Each pendant carries specific energies based on its design, metal composition, and the deity or symbol it represents.
                </p>
                <p>
                  In Vedic tradition, wearing energized pendants close to the heart chakra creates a direct connection with divine energies. The pendant acts as a constant source of positive vibrations, protecting the wearer from negative influences while enhancing their spiritual journey.
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Types of Pendants in Our Collection:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Religious Pendants:</strong> Featuring deities like Ganesh, Hanuman, Shiva, and Durga for divine blessings</li>
                  <li><strong>Astrological Pendants:</strong> Navratna and planetary pendants to balance astrological influences</li>
                  <li><strong>Yantra Pendants:</strong> Sacred geometric designs like Shri Yantra for prosperity and success</li>
                  <li><strong>Mantra Pendants:</strong> Engraved with powerful mantras for protection and spiritual growth</li>
                  <li><strong>Rudraksha Pendants:</strong> Holy beads with deity combinations for immense spiritual power</li>
                  <li><strong>Kavach Pendants:</strong> Protective shields against negative energies and evil forces</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-8">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Benefits of Wearing Sacred Pendants
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Spiritual Benefits</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Enhances spiritual connection and devotion</li>
                      <li>Facilitates meditation and prayer</li>
                      <li>Awakens inner consciousness</li>
                      <li>Provides divine protection</li>
                      <li>Cleanses negative karma</li>
                    </ul>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Material Benefits</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Attracts wealth and prosperity</li>
                      <li>Removes obstacles to success</li>
                      <li>Enhances career opportunities</li>
                      <li>Improves business outcomes</li>
                      <li>Brings financial stability</li>
                    </ul>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Health Benefits</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Protects from illness and disease</li>
                      <li>Accelerates healing processes</li>
                      <li>Balances body energies</li>
                      <li>Reduces stress and anxiety</li>
                      <li>Promotes overall well-being</li>
                    </ul>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Protection Benefits</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Shields from negative energies</li>
                      <li>Protects from evil eye</li>
                      <li>Guards against accidents</li>
                      <li>Prevents black magic effects</li>
                      <li>Creates protective aura</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="guide" className="mt-8">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  How to Select the Right Pendant
                </h2>
                <p>
                  Choosing the right pendant is crucial for receiving maximum benefits. Here's a comprehensive guide to help you make the perfect selection:
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  By Your Purpose:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>For Removing Obstacles:</strong> Choose Ganesh pendants</li>
                  <li><strong>For Protection & Courage:</strong> Opt for Hanuman or Durga pendants</li>
                  <li><strong>For Wealth & Prosperity:</strong> Select Lakshmi Yantra or Navratna pendants</li>
                  <li><strong>For Spiritual Growth:</strong> Choose Om, Shiva, or Rudraksha pendants</li>
                  <li><strong>For Health & Healing:</strong> Select Mahamrityunjaya Mantra pendants</li>
                  <li><strong>For Overall Balance:</strong> Choose Navratna or multi-deity pendants</li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  By Metal Type:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Silver:</strong> Represents the Moon, good for mental peace and emotional balance</li>
                  <li><strong>Gold/Gold Plated:</strong> Represents the Sun, enhances power and prosperity</li>
                  <li><strong>Copper:</strong> Excellent conductor of energy, especially for yantras</li>
                  <li><strong>Brass:</strong> Durable and affordable, suitable for daily wear</li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  By Astrological Guidance:
                </h3>
                <p>
                  For personalized selection, consult with our astrologers who can recommend pendants based on your birth chart, planetary positions, and current life challenges.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-8">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Pendant Care & Maintenance
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Daily Care Tips:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remove pendant before bathing, swimming, or exercising</li>
                  <li>Avoid contact with perfumes, lotions, and chemicals</li>
                  <li>Store in a soft cloth or jewelry box when not wearing</li>
                  <li>Keep away from direct sunlight and extreme temperatures</li>
                  <li>Clean gently with a soft, dry cloth after each use</li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Cleaning Methods by Metal:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Silver:</strong> Use silver polishing cloth or mild soap and water, dry immediately</li>
                  <li><strong>Gold Plated:</strong> Wipe with soft cloth only, avoid water and chemicals</li>
                  <li><strong>Copper:</strong> Clean with lemon juice and salt, rinse and dry thoroughly</li>
                  <li><strong>Rudraksha:</strong> Apply mustard oil occasionally, avoid chemicals</li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                  Spiritual Maintenance:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Recharge under moonlight on full moon nights</li>
                  <li>Keep in your prayer room when not wearing</li>
                  <li>Chant relevant mantras while wearing</li>
                  <li>Re-energize annually by a priest or during festivals</li>
                  <li>Handle with respect and positive intentions</li>
                </ul>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mt-6">
                  <h4 className="font-semibold text-foreground mb-2">Important Note:</h4>
                  <p className="text-sm">
                    Sacred pendants are not just jewelry but spiritual tools. Treat them with reverence, keep them clean, and wear them with faith. Regular cleansing and energizing enhance their effectiveness and maintain their divine connection.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Pendant;
