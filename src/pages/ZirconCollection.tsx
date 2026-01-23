import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Shield, Truck, Award, Clock, ChevronRight, Eye, ShoppingCart, Heart, Filter, Phone, MessageCircle, CheckCircle2, Sparkles, Users, TrendingUp, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ZirconCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(41);
  const [recentBuyers] = useState([
    { name: "Ravi K.", location: "Chennai", time: "5 mins ago" },
    { name: "Meena S.", location: "Hyderabad", time: "10 mins ago" },
    { name: "Suresh P.", location: "Bangalore", time: "16 mins ago" }
  ]);
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [countdown, setCountdown] = useState({ hours: 5, minutes: 18, seconds: 42 });
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setCurrentBuyerIndex(prev => (prev + 1) % recentBuyers.length);
      setTimeout(() => setShowNotification(false), 4000);
    }, 15000);
    return () => clearInterval(notificationInterval);
  }, [recentBuyers.length]);

  const products = [
    { id: "zircon-1", name: "Blue Zircon - 4.25 Carat", price: 18000, originalPrice: 25000, rating: 4.9, reviews: 67, weight: "4.25", origin: "Cambodia", certified: true, inStock: true, badge: "bestseller" },
    { id: "zircon-2", name: "White Zircon Premium - 3.50 Carat", price: 8500, originalPrice: 12000, rating: 4.8, reviews: 82, weight: "3.50", origin: "Sri Lanka", certified: true, inStock: true, badge: "premium" },
    { id: "zircon-3", name: "Golden Zircon - 5.00 Carat", price: 22000, originalPrice: 30000, rating: 4.9, reviews: 45, weight: "5.00", origin: "Tanzania", certified: true, inStock: true, badge: null },
    { id: "zircon-4", name: "Green Zircon - 3.80 Carat", price: 15000, originalPrice: 21000, rating: 4.7, reviews: 38, weight: "3.80", origin: "Sri Lanka", certified: true, inStock: true, badge: "rare" },
    { id: "zircon-5", name: "Champagne Zircon - 6.20 Carat", price: 28000, originalPrice: 38000, rating: 5.0, reviews: 29, weight: "6.20", origin: "Cambodia", certified: true, inStock: true, badge: "collectors" },
    { id: "zircon-6", name: "Natural Zircon - 4.00 Carat", price: 12000, originalPrice: 16500, rating: 4.8, reviews: 56, weight: "4.00", origin: "Myanmar", certified: true, inStock: true, badge: null }
  ];

  const testimonials = [
    { name: "Karthik R.", location: "Chennai", rating: 5, text: "Blue Zircon sparkle is incredible! Even more fire than diamond. Amazing quality.", date: "1 week ago" },
    { name: "Lakshmi M.", location: "Bangalore", rating: 5, text: "White Zircon as diamond alternative is perfect. Couldn't be happier!", date: "2 weeks ago" },
    { name: "Mohan S.", location: "Mumbai", rating: 5, text: "Golden Zircon for Jupiter benefits. Noticed positive changes in career.", date: "3 weeks ago" }
  ];

  const faqs = [
    { question: "What is the difference between Zircon and Cubic Zirconia?", answer: "Zircon is a natural gemstone (mineral zirconium silicate), while Cubic Zirconia (CZ) is a synthetic diamond simulant. Natural Zircon is much more valuable and has unique optical properties." },
    { question: "What are the astrological benefits of Zircon?", answer: "Natural Zircon is associated with Venus and Jupiter. It's believed to bring prosperity, wisdom, and positive energy. Blue Zircon is especially valued for mental clarity." },
    { question: "Why does Zircon have more fire than diamond?", answer: "Zircon has a high refractive index and dispersion, giving it exceptional brilliance and fire (rainbow colors). This makes it one of the most brilliant natural gemstones." },
    { question: "Which Zircon color is most valuable?", answer: "Blue Zircon is the most sought-after, followed by Green and Champagne. White Zircon is popular as a diamond alternative. All colors have excellent brilliance." }
  ];

  const filterProducts = () => {
    let filtered = [...products];
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true));
    }
    switch (sortBy) {
      case "price-low": filtered.sort((a, b) => a.price - b.price); break;
      case "price-high": filtered.sort((a, b) => b.price - a.price); break;
      case "rating": filtered.sort((a, b) => b.rating - a.rating); break;
      default: filtered.sort((a, b) => b.reviews - a.reviews);
    }
    return filtered;
  };

  const sortedProducts = filterProducts();

  const getBadgeInfo = (badge: string | null) => {
    switch (badge) {
      case "bestseller": return { icon: TrendingUp, text: "Bestseller", color: "bg-blue-500" };
      case "premium": return { icon: Award, text: "Premium", color: "bg-amber-600" };
      case "rare": return { icon: Star, text: "Rare", color: "bg-green-600" };
      case "collectors": return { icon: Sparkles, text: "Collector's", color: "bg-purple-600" };
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-amber-50">
      {/* Recent Buyer Notification */}
      {showNotification && (
        <div className="fixed bottom-24 left-4 z-50 animate-in slide-in-from-left duration-300">
          <Card className="bg-white shadow-lg border-l-4 border-blue-500 p-3 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{recentBuyers[currentBuyerIndex].name} from {recentBuyers[currentBuyerIndex].location}</p>
                <p className="text-xs text-muted-foreground">Purchased Zircon • {recentBuyers[currentBuyerIndex].time}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold">Fire & Brilliance Sale!</span>
          </span>
          <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            {String(countdown.hours).padStart(2, '0')}:{String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{viewingCount} people viewing</span>
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate("/")}>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate("/gemstones")}>Gemstones</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">Zircon</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-blue-100 text-blue-700">More Fire Than Diamond</Badge>
              <Badge className="bg-amber-100 text-amber-700">Jupiter & Venus</Badge>
              <Badge variant="outline" className="border-blue-300 text-blue-700">Lab Certified</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Natural Zircon Collection
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Discover Earth's most brilliant natural gemstone. Premium Blue, White, Golden, and Green Zircon with exceptional fire and sparkle.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Exceptional Fire</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-blue-600" />
                <span className="text-sm">High Brilliance</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Prosperity Stone</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-sm">Lab Certified</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.8/5 from 310+ reviews</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Phone className="w-4 h-4 mr-2" />
                Talk to Expert
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center">
              <div className="text-center p-8">
                <Gem className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-700">Premium Zircon</p>
                <p className="text-muted-foreground">All Colors Available</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold">2,800+ Sold</p>
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Lab Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">100% Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Vedic Energized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {["products", "about", "colors", "benefits", "faqs"].map(tab => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">{sortedProducts.length} Zircons</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-10000">Under ₹10,000</SelectItem>
                <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                <SelectItem value="20000-100000">Above ₹20,000</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort By" />
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
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product) => {
            const badgeInfo = getBadgeInfo(product.badge);
            return (
              <Card 
                key={product.id} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => navigate(`/gemstone/${product.id}`)}
              >
                <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-amber-50">
                  {badgeInfo && (
                    <Badge className={`absolute top-2 left-2 ${badgeInfo.color} text-white z-10`}>
                      <badgeInfo.icon className="w-3 h-3 mr-1" />
                      {badgeInfo.text}
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 z-10">
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <Gem className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  {product.inStock && (
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="destructive" className="text-xs">Only 1 left</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{product.origin} • {product.weight} Ct</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-blue-700">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About Natural Zircon</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Earth's Most Brilliant Gemstone</h3>
              <p className="text-muted-foreground mb-4">
                Natural Zircon is one of the oldest minerals on Earth, dating back 4.4 billion years. Not to be confused with synthetic Cubic Zirconia, natural Zircon has exceptional optical properties.
              </p>
              <p className="text-muted-foreground">
                With higher dispersion than diamond, Zircon produces more fire and rainbow colors, making it truly spectacular under light.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-blue-50">
                <Gem className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-semibold">Blue Zircon</h4>
                <p className="text-sm text-muted-foreground">Most popular</p>
              </Card>
              <Card className="p-4 bg-amber-50">
                <Sparkles className="w-8 h-8 text-amber-600 mb-2" />
                <h4 className="font-semibold">Golden</h4>
                <p className="text-sm text-muted-foreground">Warm brilliance</p>
              </Card>
              <Card className="p-4 bg-gray-50">
                <Star className="w-8 h-8 text-gray-600 mb-2" />
                <h4 className="font-semibold">White Zircon</h4>
                <p className="text-sm text-muted-foreground">Diamond alternative</p>
              </Card>
              <Card className="p-4 bg-green-50">
                <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                <h4 className="font-semibold">Green</h4>
                <p className="text-sm text-muted-foreground">Rare variety</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Customer Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Perfect Zircon</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get personalized recommendations from our gemstone experts. Free consultation available.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
            <Phone className="w-4 h-4 mr-2" />
            Free Consultation
          </Button>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-blue-700">₹8,500</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZirconCollection;
