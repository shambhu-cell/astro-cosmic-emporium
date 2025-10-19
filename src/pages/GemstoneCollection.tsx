import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Shield, Award, Filter, ChevronDown, Sparkles, Heart, Users } from "lucide-react";
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
      mainBenefits: ["Prosperity", "Wisdom", "Marriage Harmony"],
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentCollection.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{currentCollection.description}</p>
            <div className="flex flex-wrap gap-2">
              {currentCollection.mainBenefits.map((benefit: string, index: number) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs Section */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="products">All Products</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="wearing">How to Wear</TabsTrigger>
            <TabsTrigger value="care">Care Guide</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCollection.products.map((product: any) => (
            <Card 
              key={product.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-2 hover:border-primary/50"
              onClick={() => navigate(`/gemstone/${product.id}`)}
            >
              <CardContent className="p-0">
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
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      or 3 interest-free EMI of ₹{Math.round(product.price / 3).toLocaleString()}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full" size="lg">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            ))}
            </div>
          </TabsContent>

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

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">100% Authentic</h3>
              <p className="text-sm text-muted-foreground">
                All gemstones are certified and tested for authenticity
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Lab Certified</h3>
              <p className="text-sm text-muted-foreground">
                Comes with certificate from reputed gem labs
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Handpicked gemstones with excellent clarity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GemstoneCollection;
