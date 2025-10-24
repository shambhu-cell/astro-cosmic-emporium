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

  const filteredProducts = pendantProducts
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
      <section className="relative py-12 px-4 bg-gradient-to-b from-primary/10 via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">✨ Handcrafted Excellence</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
            Sacred Pendant Collection
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            Discover divine protection and blessings with our authentic spiritual pendants, crafted with precision and energized for maximum benefits
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Lifetime Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Free Energization</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              <span>Free Shipping</span>
            </div>
          </div>
          
          {/* Trust Factors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">100% Authentic</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Certified metals and gemstones with authenticity guarantee
              </p>
            </div>
            
            <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Energized & Blessed</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Each pendant is energized through Vedic rituals by experts
              </p>
            </div>
            
            <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">10,000+ Happy Customers</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Trusted by thousands for divine blessings and protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="sticky top-0 z-40 py-6 border-b border-border bg-background/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="text-sm font-medium text-muted-foreground">
              {filteredProducts.length} exquisite pieces
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px] border-border/50 hover:border-primary/50 transition-colors">
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
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm"
              >
                <Link to={`/pendant/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Badge
                      className="absolute top-4 left-4 bg-primary text-primary-foreground font-medium shadow-lg"
                    >
                      {product.type}
                    </Badge>
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-9 w-9 bg-background/95 hover:bg-background shadow-lg"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-9 w-9 bg-background/95 hover:bg-background shadow-lg"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="destructive" className="text-xs font-semibold shadow-lg">
                          {Math.round(
                            ((product.originalPrice - product.price) /
                              product.originalPrice) *
                              100
                          )}% OFF
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-5">
                    <div className="mb-2">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-muted-foreground/20 text-muted-foreground/20"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        ({product.reviewCount} reviews)
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-foreground">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 pb-4 border-b border-border/50">
                      <Sparkles className="h-3 w-3 text-primary" />
                      <span className="font-medium">{product.metal}</span>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all"
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
      <section className="py-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-muted/50">
              <TabsTrigger value="about" className="text-base py-3">About Pendants</TabsTrigger>
              <TabsTrigger value="benefits" className="text-base py-3">Benefits</TabsTrigger>
              <TabsTrigger value="guide" className="text-base py-3">Selection Guide</TabsTrigger>
              <TabsTrigger value="care" className="text-base py-3">Care Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-10">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <h2 className="text-4xl font-bold mb-8 text-foreground">
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
