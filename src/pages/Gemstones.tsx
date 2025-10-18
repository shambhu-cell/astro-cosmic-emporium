import { useState } from "react";
import { Star, Shield, Award, TrendingUp, Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

const Gemstones = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const gemstones = [
    {
      id: 1,
      name: "Blue Sapphire (Neelam)",
      price: 12999,
      originalPrice: 18999,
      image: blueSapphireImage,
      rating: 4.9,
      reviews: 243,
      category: "Precious",
      planet: "Saturn",
      benefits: ["Career Growth", "Mental Clarity", "Wealth"],
      certified: true,
      weight: "3-5 Carat",
      origin: "Ceylon"
    },
    {
      id: 2,
      name: "Yellow Sapphire (Pukhraj)",
      price: 10999,
      originalPrice: 15999,
      image: yellowSapphireImage,
      rating: 4.9,
      reviews: 189,
      category: "Precious",
      planet: "Jupiter",
      benefits: ["Prosperity", "Wisdom", "Marriage"],
      certified: true,
      weight: "3-5 Carat",
      origin: "Ceylon"
    },
    {
      id: 3,
      name: "Ruby (Manik)",
      price: 11499,
      originalPrice: 16999,
      image: rubyImage,
      rating: 4.8,
      reviews: 156,
      category: "Precious",
      planet: "Sun",
      benefits: ["Leadership", "Confidence", "Health"],
      certified: true,
      weight: "3-5 Carat",
      origin: "Burma"
    },
    {
      id: 4,
      name: "Emerald (Panna)",
      price: 9999,
      originalPrice: 14999,
      image: emeraldImage,
      rating: 4.8,
      reviews: 201,
      category: "Precious",
      planet: "Mercury",
      benefits: ["Intelligence", "Communication", "Business"],
      certified: true,
      weight: "3-5 Carat",
      origin: "Colombian"
    },
    {
      id: 5,
      name: "Red Coral (Moonga)",
      price: 3999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 143,
      category: "Semi-Precious",
      planet: "Mars",
      benefits: ["Courage", "Energy", "Passion"],
      certified: true,
      weight: "5-7 Carat",
      origin: "Italian"
    },
    {
      id: 6,
      name: "Pearl (Moti)",
      price: 4499,
      originalPrice: 6499,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 178,
      category: "Precious",
      planet: "Moon",
      benefits: ["Peace", "Emotional Balance", "Beauty"],
      certified: true,
      weight: "5-8 Carat",
      origin: "South Sea"
    },
    {
      id: 7,
      name: "Hessonite (Gomed)",
      price: 2999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 134,
      category: "Semi-Precious",
      planet: "Rahu",
      benefits: ["Success", "Protection", "Focus"],
      certified: true,
      weight: "5-8 Carat",
      origin: "Ceylon"
    },
    {
      id: 8,
      name: "Cat's Eye (Lehsunia)",
      price: 5499,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 112,
      category: "Semi-Precious",
      planet: "Ketu",
      benefits: ["Spiritual Growth", "Protection", "Intuition"],
      certified: true,
      weight: "5-7 Carat",
      origin: "Ceylon"
    }
  ];

  const planets = [
    { name: "All Planets", value: "all" },
    { name: "Sun", value: "Sun" },
    { name: "Moon", value: "Moon" },
    { name: "Mars", value: "Mars" },
    { name: "Mercury", value: "Mercury" },
    { name: "Jupiter", value: "Jupiter" },
    { name: "Venus", value: "Venus" },
    { name: "Saturn", value: "Saturn" },
    { name: "Rahu", value: "Rahu" },
    { name: "Ketu", value: "Ketu" }
  ];

  const filteredGemstones = gemstones.filter(gem => {
    if (selectedPlanet !== "all" && gem.planet !== selectedPlanet) return false;
    if (selectedCategory !== "all" && gem.category !== selectedCategory) return false;
    if (priceRange !== "all") {
      if (priceRange === "under5000" && gem.price >= 5000) return false;
      if (priceRange === "5000-10000" && (gem.price < 5000 || gem.price >= 10000)) return false;
      if (priceRange === "above10000" && gem.price < 10000) return false;
    }
    return true;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 px-4 bg-gradient-to-br from-violet-50 via-purple-50 to-background">
        <div className="container max-w-screen-xl mx-auto text-center">
          <Badge className="mb-2 bg-violet-100 text-violet-700 border-violet-300 text-xs">100% Certified & Authentic</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Premium Natural Gemstones
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-4">
            Certified authentic gemstones trusted by 5 Lakh+ customers
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-violet-600" />
              <p className="text-xs font-semibold">Lab Certified</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="w-6 h-6 text-violet-600" />
              <p className="text-xs font-semibold">21 Years Trust</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-6 h-6 text-violet-600" />
              <p className="text-xs font-semibold">Best Prices</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Shop Gemstones ({filteredGemstones.length})
            </h2>
            <Button 
              variant="outline" 
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
            <div>
              <label className="text-sm font-medium mb-2 block">Filter by Planet</label>
              <Select value={selectedPlanet} onValueChange={setSelectedPlanet}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Planet" />
                </SelectTrigger>
                <SelectContent>
                  {planets.map(planet => (
                    <SelectItem key={planet.value} value={planet.value}>
                      {planet.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Precious">Precious Stones</SelectItem>
                  <SelectItem value="Semi-Precious">Semi-Precious</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Price Range</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under5000">Under ₹5,000</SelectItem>
                  <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                  <SelectItem value="above10000">Above ₹10,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSelectedPlanet("all");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
              >
                <X className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredGemstones.map((gemstone) => (
            <Card 
              key={gemstone.id} 
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-violet-200"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={gemstone.image}
                    alt={gemstone.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                    {Math.round(((gemstone.originalPrice - gemstone.price) / gemstone.originalPrice) * 100)}% OFF
                  </Badge>
                  {gemstone.certified && (
                    <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                      <Shield className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <Badge variant="secondary" className="text-xs">
                      For {gemstone.planet}
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{gemstone.category} • {gemstone.origin}</p>
                    <h3 className="font-bold text-lg line-clamp-1 group-hover:text-violet-600 transition-colors">
                      {gemstone.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{gemstone.weight}</p>
                  </div>
                  
                  {/* Benefits */}
                  <div className="flex flex-wrap gap-1">
                    {gemstone.benefits.slice(0, 3).map((benefit, idx) => (
                      <Badge key={idx} variant="outline" className="text-[10px] py-0 px-2">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-semibold">{gemstone.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({gemstone.reviews} reviews)</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      ₹{gemstone.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{gemstone.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  
                  {/* CTA */}
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => window.location.href = `/gemstones/${gemstone.id}`}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.location.href = `/contact`}
                    >
                      Consult Gem Expert
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informational Tabs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Complete Gemstone Guide</h2>
          
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent p-0 mb-6">
              <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">About</TabsTrigger>
              <TabsTrigger value="who-should-wear" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Who Should Wear?</TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Benefits</TabsTrigger>
              <TabsTrigger value="quality-price" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Quality & Price</TabsTrigger>
              <TabsTrigger value="jewellery" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Jewellery</TabsTrigger>
              <TabsTrigger value="cleaning-care" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Cleaning & Care</TabsTrigger>
              <TabsTrigger value="buyer-beware" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Buyer Beware</TabsTrigger>
              <TabsTrigger value="faqs" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What are Natural Gemstones?</AccordionTrigger>
                  <AccordionContent>
                    Natural gemstones are minerals that form naturally in the Earth's crust over millions of years. They are valued for their beauty, rarity, and durability. Each gemstone has unique physical and metaphysical properties that make it special.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Importance in Vedic Astrology</AccordionTrigger>
                  <AccordionContent>
                    In Vedic astrology, gemstones are worn to strengthen weak planets in one's birth chart. Each gemstone is associated with a specific planet and can help balance planetary energies, bringing positive changes in various life areas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Our Gemstone Authentication Process</AccordionTrigger>
                  <AccordionContent>
                    Every gemstone is sourced from trusted mines and undergoes rigorous quality checks. We provide lab certification from recognized gemological laboratories to ensure 100% authenticity. Our experts personally inspect each stone for clarity, color, cut, and carat weight.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="who-should-wear" className="mt-6">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Consultation Recommended</AccordionTrigger>
                  <AccordionContent>
                    We strongly recommend consulting with a qualified Vedic astrologer before wearing any gemstone. The right gemstone should be selected based on your complete birth chart (Kundali), not just your sun sign or moon sign.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Birth Chart Analysis</AccordionTrigger>
                  <AccordionContent>
                    Your astrologer will analyze planetary positions, dashas (periods), and transits to determine which gemstone will benefit you most. Wearing the wrong gemstone can sometimes have adverse effects, making professional consultation essential.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Trial Period</AccordionTrigger>
                  <AccordionContent>
                    Many astrologers recommend a trial period before permanently wearing a gemstone. This helps observe how the stone affects your life and whether it brings positive changes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="benefits" className="mt-6">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Physical Benefits</AccordionTrigger>
                  <AccordionContent>
                    Gemstones are believed to emit vibrations that can positively affect the body's energy field. Different stones may help with specific health concerns, improve vitality, boost immunity, and promote overall well-being.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Mental & Emotional Benefits</AccordionTrigger>
                  <AccordionContent>
                    Wearing the right gemstone can help reduce stress and anxiety, improve focus and concentration, enhance emotional stability, boost confidence, and bring mental clarity. They can also help overcome fears and negative thought patterns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Career & Financial Benefits</AccordionTrigger>
                  <AccordionContent>
                    Gemstones can attract prosperity and wealth, improve career opportunities, enhance business success, strengthen decision-making abilities, and help overcome professional obstacles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Relationship Benefits</AccordionTrigger>
                  <AccordionContent>
                    The right gemstone can improve relationships, attract love and companionship, strengthen marriage bonds, enhance family harmony, and resolve conflicts in personal relationships.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="quality-price" className="mt-6">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>The 4 C's of Gemstones</AccordionTrigger>
                  <AccordionContent>
                    Quality is determined by four main factors: Color (hue, tone, and saturation), Clarity (presence of inclusions), Cut (shape and proportion), and Carat Weight (size). We ensure all our gemstones meet high standards across these parameters.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Origin Matters</AccordionTrigger>
                  <AccordionContent>
                    The origin of a gemstone significantly affects its quality and price. Certain locations produce superior quality stones. For example, Burmese rubies, Ceylon sapphires, and Colombian emeralds are highly valued. All our products clearly state their origin.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Treatment & Enhancement</AccordionTrigger>
                  <AccordionContent>
                    We transparently disclose any treatments. Most gemstones undergo standard heating or oiling treatments which are industry-accepted. We never sell synthetic or lab-created stones as natural gemstones.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Pricing Transparency</AccordionTrigger>
                  <AccordionContent>
                    Our prices are competitive because we source directly from mines and cutters. We maintain transparency in pricing with detailed information about quality factors. Lab certificates accompany each stone to justify the pricing.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="jewellery" className="mt-6">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Metal Selection</AccordionTrigger>
                  <AccordionContent>
                    The metal used for setting your gemstone is important in Vedic astrology. Different gemstones work best with specific metals. For example, Ruby is typically set in gold, Blue Sapphire in silver or white gold, and Emerald in gold or Panchdhatu (five-metal alloy).
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Ring Design & Settings</AccordionTrigger>
                  <AccordionContent>
                    For astrological benefits, the gemstone should touch your skin. We recommend open-back settings that allow the stone to make contact with your finger. The ring should be worn on the correct finger as advised by your astrologer.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Custom Jewellery Options</AccordionTrigger>
                  <AccordionContent>
                    We offer custom jewellery design services. You can choose your preferred design, metal purity (14K, 18K, 22K gold or pure silver), and ring size. Our craftsmen create beautiful pieces that are both astrologically effective and aesthetically pleasing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Pendant & Other Designs</AccordionTrigger>
                  <AccordionContent>
                    Besides rings, gemstones can be set in pendants, bracelets, and other jewelry forms. Some people prefer pendants for certain gemstones. Consult with your astrologer about the most appropriate form for your specific gemstone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="cleaning-care" className="mt-6">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Daily Care Tips</AccordionTrigger>
                  <AccordionContent>
                    Remove your gemstone jewelry before bathing, swimming, or applying cosmetics. Avoid contact with harsh chemicals, perfumes, and cleaning agents. Store each piece separately in a soft cloth pouch to prevent scratches.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Cleaning Methods</AccordionTrigger>
                  <AccordionContent>
                    Clean your gemstones regularly with lukewarm water and mild soap. Use a soft brush to gently remove dirt from crevices. Rinse thoroughly and pat dry with a soft, lint-free cloth. Avoid ultrasonic cleaners unless specifically recommended for your stone type.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Energizing Your Gemstone</AccordionTrigger>
                  <AccordionContent>
                    In Vedic tradition, gemstones should be energized before wearing. This is typically done on an auspicious day and time determined by your astrologer. The stone may need re-energizing periodically, especially if you've experienced negative events while wearing it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Professional Maintenance</AccordionTrigger>
                  <AccordionContent>
                    We recommend professional inspection and cleaning every 6-12 months. This ensures the setting is secure and the stone remains in optimal condition. We offer free inspection and cleaning services for all gemstones purchased from us.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="buyer-beware" className="mt-6">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Beware of Fake Gemstones</AccordionTrigger>
                  <AccordionContent>
                    The market is flooded with glass imitations, synthetic stones, and treated gemstones sold as natural. Always buy from reputable dealers who provide lab certification. Be suspicious of prices that seem too good to be true.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Importance of Certification</AccordionTrigger>
                  <AccordionContent>
                    Never buy expensive gemstones without proper certification from recognized labs. The certificate should detail the stone's authenticity, origin, treatments (if any), and specifications. Keep these certificates safe for future reference and resale value.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Misleading Claims</AccordionTrigger>
                  <AccordionContent>
                    Be wary of sellers making unrealistic promises about gemstone effects. While gemstones can be beneficial, they work gradually and in conjunction with positive actions. No gemstone can guarantee instant results or replace medical treatment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Return Policy Awareness</AccordionTrigger>
                  <AccordionContent>
                    Check the seller's return and exchange policy before purchasing. Reputable dealers offer reasonable return periods. We provide a 7-day return policy with full refund, ensuring you can buy with confidence.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Verify Before Energizing</AccordionTrigger>
                  <AccordionContent>
                    Once a gemstone is energized or set in jewelry, it typically cannot be returned. Therefore, verify the authenticity and quality of your loose gemstone before getting it energized or mounted.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="faqs" className="mt-6">
              <Accordion type="single" collapsible className="bg-white rounded-lg p-4 shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I choose the right gemstone?</AccordionTrigger>
                  <AccordionContent>
                    The right gemstone is selected based on your birth chart, current planetary positions, and specific life goals. We recommend consulting with our expert astrologers for personalized guidance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Are all gemstones certified?</AccordionTrigger>
                  <AccordionContent>
                    Yes, every gemstone comes with a lab certification from reputed gemological laboratories, ensuring 100% authenticity and quality.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How long does delivery take?</AccordionTrigger>
                  <AccordionContent>
                    We deliver within 3-7 business days across India. International shipping is also available with tracking.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer returns or exchanges?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 7-day return policy. If you're not satisfied with your purchase, you can return it for a full refund or exchange.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How long should I wear a gemstone to see results?</AccordionTrigger>
                  <AccordionContent>
                    Gemstone effects typically begin within 30-45 days of wearing. However, significant results may take 3-6 months. Consistency is important - wear your gemstone regularly as advised by your astrologer.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I wear multiple gemstones together?</AccordionTrigger>
                  <AccordionContent>
                    Some gemstones can be worn together while others should not be combined. This depends on planetary relationships. Always consult your astrologer before wearing multiple gemstones simultaneously.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </section>

        {/* Educational Content */}
        <section className="mb-12 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Gemstones?</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-violet-600" />
                <h3 className="font-bold text-lg mb-2">100% Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Every gemstone comes with lab certification ensuring authenticity and quality
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-violet-600" />
                <h3 className="font-bold text-lg mb-2">21 Years Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Serving customers since 2004 with premium quality gemstones
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-violet-600" />
                <h3 className="font-bold text-lg mb-2">Best Prices</h3>
                <p className="text-sm text-muted-foreground">
                  Direct sourcing ensures you get authentic gemstones at best market rates
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Accordion type="single" collapsible className="bg-white rounded-lg p-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I choose the right gemstone?</AccordionTrigger>
              <AccordionContent>
                The right gemstone is selected based on your birth chart, current planetary positions, and specific life goals. We recommend consulting with our expert astrologers for personalized guidance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Are all gemstones certified?</AccordionTrigger>
              <AccordionContent>
                Yes, every gemstone comes with a lab certification from reputed gemological laboratories, ensuring 100% authenticity and quality.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>How long does delivery take?</AccordionTrigger>
              <AccordionContent>
                We deliver within 3-7 business days across India. International shipping is also available with tracking.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer returns or exchanges?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 7-day return policy. If you're not satisfied with your purchase, you can return it for a full refund or exchange.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  );
};

export default Gemstones;
