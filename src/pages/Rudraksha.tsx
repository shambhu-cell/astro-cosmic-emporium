import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ShoppingBag, Shield, Award, Truck, CheckCircle2, MessageCircle, Filter, TrendingUp, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import nirakarImage from "@/assets/rudraksha/nirakar.jpg";
import oneMukhiImage from "@/assets/rudraksha/1-mukhi.jpg";
import threeMukhiImage from "@/assets/rudraksha/3-mukhi.jpg";
import fourMukhiImage from "@/assets/rudraksha/4-mukhi.jpg";

const Rudraksha = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  // Comprehensive Rudraksha collections by type
  const rudrakshaCollections: Record<string, any> = {
    "all": {
      name: "All Rudraksha",
      description: "Explore our complete collection of authentic Nepal Rudraksha beads, certified and energized for maximum spiritual benefits.",
      mainBenefits: ["Complete Protection", "Spiritual Growth", "Health & Prosperity"],
      products: [] // Will be filled with all products
    },
    "1-mukhi": {
      name: "1 Mukhi Rudraksha",
      deity: "Lord Shiva",
      planet: "Sun",
      mainBenefits: ["Supreme Consciousness", "Leadership", "Self-Realization"],
      description: "1 Mukhi Rudraksha is the rarest and most powerful Rudraksha, representing Lord Shiva himself. It brings self-realization, enhances leadership qualities, and provides divine blessings for spiritual enlightenment.",
      benefits: [
        "Enhances concentration and focus",
        "Brings prosperity and success",
        "Provides mental peace and clarity",
        "Removes obstacles in life"
      ],
      products: [
        {
          id: "1-mukhi",
          name: "Premium 1 Mukhi Rudraksha",
          price: 8399,
          originalPrice: 12200,
          image: oneMukhiImage,
          rating: 4.9,
          reviews: 80,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 1050,
          stockLeft: 5
        }
      ]
    },
    "3-mukhi": {
      name: "3 Mukhi Rudraksha",
      deity: "Agni (Fire God)",
      planet: "Mars",
      mainBenefits: ["Courage", "Confidence", "Past Life Cleansing"],
      description: "3 Mukhi Rudraksha represents the three forms of fire - Agni. It liberates from past karmas, enhances self-esteem, and provides courage to face challenges in life.",
      benefits: [
        "Frees from guilt and sins of past life",
        "Increases confidence and courage",
        "Removes negative energy",
        "Helps in blood-related disorders"
      ],
      products: [
        {
          id: "3-mukhi",
          name: "Certified 3 Mukhi Rudraksha",
          price: 1499,
          originalPrice: 1700,
          image: threeMukhiImage,
          rating: 4.9,
          reviews: 94,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 12
        }
      ]
    },
    "4-mukhi": {
      name: "4 Mukhi Rudraksha",
      deity: "Lord Brahma",
      planet: "Mercury",
      mainBenefits: ["Knowledge", "Creativity", "Communication"],
      description: "4 Mukhi Rudraksha is blessed by Lord Brahma, the creator. It enhances knowledge, creativity, memory power, and communication skills. Perfect for students and professionals.",
      benefits: [
        "Improves memory and intelligence",
        "Enhances creativity and speech",
        "Removes laziness and dullness",
        "Helps in respiratory issues"
      ],
      products: [
        {
          id: "4-mukhi",
          name: "Original 4 Mukhi Rudraksha",
          price: 899,
          originalPrice: 1499,
          image: fourMukhiImage,
          rating: 4.8,
          reviews: 71,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 15
        }
      ]
    },
    "nirakar": {
      name: "Nirakar Rudraksha",
      deity: "Lord Shiva (Formless)",
      planet: "All Planets",
      mainBenefits: ["Universal Protection", "Peace", "Harmony"],
      description: "Nirakar (0 Mukhi) Rudraksha represents the formless aspect of Lord Shiva. It provides universal protection, peace, and harmony. Suitable for everyone regardless of age or zodiac sign.",
      benefits: [
        "Universal protection and blessings",
        "Brings peace and harmony",
        "No side effects - safe for all",
        "Balances all chakras"
      ],
      products: [
        {
          id: "nirakar",
          name: "Nirakar Rudraksha (0 Mukhi)",
          price: 999,
          originalPrice: 1699,
          image: nirakarImage,
          rating: 4.8,
          reviews: 111,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 18
        }
      ]
    }
  };

  // Fill 'all' category with all products
  Object.keys(rudrakshaCollections).forEach(key => {
    if (key !== 'all') {
      rudrakshaCollections['all'].products.push(...rudrakshaCollections[key].products);
    }
  });

  const [activeTab, setActiveTab] = useState("all");
  const currentCollection = rudrakshaCollections[activeTab];

  // Filter products based on search
  const filteredProducts = currentCollection.products.filter((product: any) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const faqs = [
    {
      question: "How do I know which Mukhi Rudraksha is right for me?",
      answer: "Each Mukhi Rudraksha has specific benefits based on planetary influences and life goals. We recommend consulting with our expert astrologers for personalized guidance. Click 'Talk to Expert' for a free consultation based on your birth chart and requirements."
    },
    {
      question: "Are these Rudraksha beads authentic and certified?",
      answer: "Yes, all our Rudraksha beads are 100% authentic, sourced from Nepal, and come with government lab certification. Each bead undergoes rigorous testing including X-ray examination to verify authenticity."
    },
    {
      question: "What is the difference between energized and non-energized Rudraksha?",
      answer: "Energized Rudraksha has been activated through Vedic mantras and rituals by experienced priests. This enhances its spiritual power and makes it ready to wear immediately. All our Rudraksha come pre-energized."
    },
    {
      question: "How should I wear Rudraksha?",
      answer: "Rudraksha can be worn as a pendant, bracelet, or mala. It should touch your skin for maximum benefits. Monday is considered auspicious for wearing Rudraksha. Detailed wearing instructions and mantras are provided with each purchase."
    },
    {
      question: "Can anyone wear Rudraksha or are there restrictions?",
      answer: "Rudraksha can be worn by anyone regardless of age, gender, caste, or religion. There are no side effects. However, specific Mukhi types may be recommended based on individual needs and astrological chart."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, you can return the Rudraksha within 30 days for a full refund. The item must be in original condition with certificate and packaging intact."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Trust Bar */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-medium">100% Authentic Nepal Rudraksha</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="font-medium">Lab Certified & Energized</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span className="font-medium">Free Shipping Pan India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Rudraksha</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-base px-4 py-1">
            <Award className="h-4 w-4 mr-2" />
            Certified Authentic Rudraksha from Nepal
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Original Rudraksha Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Lab Certified Nepal Rudraksha Beads - Energized by Expert Vedic Priests for Divine Blessings & Spiritual Growth
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span><strong className="text-primary">50,000+</strong> Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
              <span><strong className="text-amber-500">4.9/5</strong> Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span><strong className="text-green-600">1 Lakh+</strong> Rudraksha Sold</span>
            </div>
          </div>
        </div>

        {/* Expert Consultation Banner */}
        <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Not Sure Which Rudraksha to Choose?</h3>
                  <p className="text-sm text-muted-foreground">Get FREE consultation from our expert astrologers</p>
                </div>
              </div>
              <Button 
                size="lg"
                className="whitespace-nowrap"
                onClick={() => window.open('https://wa.me/1234567890?text=Hi, I need expert consultation about Rudraksha', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Talk to Expert - FREE
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Mukhi Types */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="w-full justify-start h-auto p-1 bg-muted/50 rounded-lg overflow-x-auto flex-wrap md:flex-nowrap">
            <TabsTrigger value="all" className="flex-1 md:flex-none px-4 py-3 text-sm whitespace-nowrap">
              All Rudraksha
            </TabsTrigger>
            <TabsTrigger value="1-mukhi" className="flex-1 md:flex-none px-4 py-3 text-sm whitespace-nowrap">
              1 Mukhi
            </TabsTrigger>
            <TabsTrigger value="3-mukhi" className="flex-1 md:flex-none px-4 py-3 text-sm whitespace-nowrap">
              3 Mukhi
            </TabsTrigger>
            <TabsTrigger value="4-mukhi" className="flex-1 md:flex-none px-4 py-3 text-sm whitespace-nowrap">
              4 Mukhi
            </TabsTrigger>
            <TabsTrigger value="nirakar" className="flex-1 md:flex-none px-4 py-3 text-sm whitespace-nowrap">
              Nirakar (0 Mukhi)
            </TabsTrigger>
          </TabsList>

          {/* Collection Info */}
          <div className="mt-8 mb-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{currentCollection.name}</h2>
                  {currentCollection.deity && (
                    <div className="flex flex-wrap gap-3 mb-3">
                      <Badge variant="outline" className="bg-white/50">
                        <Award className="h-3 w-3 mr-1" />
                        Deity: {currentCollection.deity}
                      </Badge>
                      {currentCollection.planet && (
                        <Badge variant="outline" className="bg-white/50">
                          Planet: {currentCollection.planet}
                        </Badge>
                      )}
                    </div>
                  )}
                  <p className="text-muted-foreground">{currentCollection.description}</p>
                </div>
              </div>

              {/* Main Benefits */}
              {currentCollection.mainBenefits && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentCollection.mainBenefits.map((benefit: string, idx: number) => (
                    <Badge key={idx} className="bg-primary/10 text-primary hover:bg-primary/20">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      {benefit}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Detailed Benefits */}
              {currentCollection.benefits && (
                <div className="grid md:grid-cols-2 gap-3 mt-4">
                  {currentCollection.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Rudraksha..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product: any) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-2 hover:border-primary/50 bg-gradient-to-br from-amber-50 to-background dark:from-amber-950/20"
                onClick={() => navigate(`/rudraksha/${product.id}`)}
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 p-6">
                    {product.certified && (
                      <Badge className="absolute top-3 right-3 bg-green-600 text-white z-10">
                        <Shield className="h-3 w-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                    {product.energized && (
                      <Badge className="absolute top-3 left-3 bg-amber-600 text-white z-10">
                        Energized
                      </Badge>
                    )}
                    {product.discount && (
                      <Badge className="absolute bottom-3 right-3 bg-red-600 text-white z-10">
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </Badge>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 space-y-3 bg-background">
                    {/* Title */}
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-1">
                        {product.origin} Origin • {product.size}
                      </p>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                    </div>

                    {/* Stock */}
                    {product.stockLeft <= 10 && (
                      <p className="text-xs text-orange-600 font-medium">
                        ⚡ Only {product.stockLeft} left in stock!
                      </p>
                    )}

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
                      {product.emi && (
                        <p className="text-xs text-muted-foreground">
                          or ₹{product.emiAmount}/month
                          <Badge variant="outline" className="ml-2 text-[10px] px-1.5 py-0">EMI</Badge>
                        </p>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <Button className="w-full" size="lg">
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://wa.me/1234567890?text=Hi, I need expert consultation about ' + product.name, '_blank');
                        }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Talk to Expert
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No Rudraksha found matching your search.</p>
            </div>
          )}
        </Tabs>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose AstroSage Rudraksha?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">100% Authentic</h3>
              <p className="text-sm text-muted-foreground">Original Nepal Rudraksha with lab certification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Energized & Blessed</h3>
              <p className="text-sm text-muted-foreground">Activated by expert Vedic priests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">X-ray tested and lab verified</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">50,000+ Customers</h3>
              <p className="text-sm text-muted-foreground">Trusted by devotees worldwide</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Confused Which Rudraksha to Buy?
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Get personalized Rudraksha recommendation from our expert astrologers based on your birth chart
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            onClick={() => window.open('https://wa.me/1234567890?text=Hi, I need help choosing the right Rudraksha', '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get FREE Consultation Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rudraksha;
