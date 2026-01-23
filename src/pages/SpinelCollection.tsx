import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Shield, Truck, Award, Clock, ChevronRight, Eye, ShoppingCart, Heart, Filter, Phone, MessageCircle, CheckCircle2, Sparkles, Users, TrendingUp, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SpinelCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(34);
  const [recentBuyers] = useState([
    { name: "Rohit M.", location: "Mumbai", time: "6 mins ago" },
    { name: "Shreya K.", location: "Bangalore", time: "12 mins ago" },
    { name: "Arun P.", location: "Chennai", time: "18 mins ago" }
  ]);
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [countdown, setCountdown] = useState({ hours: 3, minutes: 52, seconds: 27 });
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
    { id: "spinel-1", name: "Red Spinel - 2.45 Carat", price: 35000, originalPrice: 48000, rating: 4.9, reviews: 45, weight: "2.45", origin: "Burma", certified: true, inStock: true, badge: "bestseller" },
    { id: "spinel-2", name: "Pink Spinel Premium - 3.10 Carat", price: 42000, originalPrice: 58000, rating: 5.0, reviews: 32, weight: "3.10", origin: "Sri Lanka", certified: true, inStock: true, badge: "premium" },
    { id: "spinel-3", name: "Blue Spinel - 2.80 Carat", price: 55000, originalPrice: 75000, rating: 4.9, reviews: 28, weight: "2.80", origin: "Burma", certified: true, inStock: true, badge: "rare" },
    { id: "spinel-4", name: "Black Spinel - 4.50 Carat", price: 8500, originalPrice: 12000, rating: 4.7, reviews: 67, weight: "4.50", origin: "Thailand", certified: true, inStock: true, badge: null },
    { id: "spinel-5", name: "Cobalt Blue Spinel - 1.85 Carat", price: 85000, originalPrice: 120000, rating: 5.0, reviews: 18, weight: "1.85", origin: "Vietnam", certified: true, inStock: true, badge: "collectors" },
    { id: "spinel-6", name: "Lavender Spinel - 2.20 Carat", price: 28000, originalPrice: 38000, rating: 4.8, reviews: 41, weight: "2.20", origin: "Sri Lanka", certified: true, inStock: true, badge: "premium" }
  ];

  const testimonials = [
    { name: "Anand R.", location: "Delhi", rating: 5, text: "The Red Spinel is absolutely stunning! Better than Ruby at fraction of cost.", date: "1 week ago" },
    { name: "Prerna M.", location: "Mumbai", rating: 5, text: "Cobalt Blue Spinel is mesmerizing. Rare find and excellent quality!", date: "2 weeks ago" },
    { name: "Kiran S.", location: "Bangalore", rating: 5, text: "Pink Spinel ring looks gorgeous. Amazing sparkle and fire!", date: "3 weeks ago" }
  ];

  const faqs = [
    { question: "What is Spinel and why is it valuable?", answer: "Spinel is a rare gemstone that was historically confused with Ruby and Sapphire. Many famous 'rubies' in crown jewels are actually Spinels! It has excellent hardness (8 on Mohs) and brilliant sparkle." },
    { question: "What colors does Spinel come in?", answer: "Spinel comes in a rainbow of colors - Red, Pink, Blue, Purple, Lavender, Black, and the rare Cobalt Blue. Each color has its own appeal and value." },
    { question: "Is Spinel a good investment?", answer: "Yes! Spinel is increasingly recognized by collectors and investors. Fine Spinels, especially Cobalt Blue and Burmese Red, have shown significant appreciation in value." },
    { question: "What are the astrological benefits of Spinel?", answer: "Spinel is associated with Sun energy and is believed to bring vitality, confidence, and protection. It's recommended for those seeking leadership qualities and success." }
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
      case "bestseller": return { icon: TrendingUp, text: "Bestseller", color: "bg-orange-500" };
      case "premium": return { icon: Award, text: "Premium", color: "bg-pink-600" };
      case "rare": return { icon: Star, text: "Rare", color: "bg-blue-600" };
      case "collectors": return { icon: Sparkles, text: "Collector's", color: "bg-purple-600" };
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-red-50">
      {/* Recent Buyer Notification */}
      {showNotification && (
        <div className="fixed bottom-24 left-4 z-50 animate-in slide-in-from-left duration-300">
          <Card className="bg-white shadow-lg border-l-4 border-pink-500 p-3 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{recentBuyers[currentBuyerIndex].name} from {recentBuyers[currentBuyerIndex].location}</p>
                <p className="text-xs text-muted-foreground">Purchased Spinel • {recentBuyers[currentBuyerIndex].time}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <Gem className="w-4 h-4" />
            <span className="font-semibold">Collector's Special!</span>
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
          <span className="text-primary font-medium">Spinel</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge className="bg-pink-100 text-pink-700">The Collector's Gem</Badge>
            <Badge className="bg-red-100 text-red-700">Ruby Alternative</Badge>
            <Badge variant="outline" className="border-pink-300 text-pink-700">Lab Certified</Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Natural Spinel Collection
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover the "Great Imposter" - Spinel, historically mistaken for Ruby and Sapphire. Premium quality stones from Burma, Sri Lanka, and Vietnam.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 bg-pink-50 rounded-lg px-3 py-2.5 border border-pink-200">
              <Gem className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium">Collector's Choice</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-pink-50 rounded-lg px-3 py-2.5 border border-pink-200">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium">Brilliant Fire</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-pink-50 rounded-lg px-3 py-2.5 border border-pink-200">
              <Shield className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium">Hardness 8</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-pink-50 rounded-lg px-3 py-2.5 border border-pink-200">
              <Award className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium">Lab Certified</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['S', 'P', 'I', 'N', 'L'].map((letter, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-red-600 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">1,200+</span> Happy Customers
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm font-medium ml-1">4.9/5</span>
              <span className="text-sm text-muted-foreground">(230+ reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full animate-pulse">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">{viewingCount} viewing now</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Free Expert Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-medium">Lab Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-medium">100% Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-medium">Vedic Energized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {["products", "about", "colors", "investment", "faqs"].map(tab => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "bg-pink-600 hover:bg-pink-700" : ""}
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
            <span className="font-medium">{sortedProducts.length} Spinels</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-20000">Under ₹20,000</SelectItem>
                <SelectItem value="20000-50000">₹20,000 - ₹50,000</SelectItem>
                <SelectItem value="50000-500000">Above ₹50,000</SelectItem>
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
                <div className="relative aspect-square bg-gradient-to-br from-pink-50 to-red-50">
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
                    <Gem className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
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
                  <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{product.origin} • {product.weight} Ct</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-pink-700">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <Button className="w-full mt-3 bg-pink-600 hover:bg-pink-700" size="sm">
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About Spinel</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Great Imposter</h3>
              <p className="text-muted-foreground mb-4">
                For centuries, Spinel was mistaken for Ruby and Sapphire. The famous "Black Prince's Ruby" in the British Crown Jewels is actually a 170-carat Red Spinel!
              </p>
              <p className="text-muted-foreground">
                Today, Spinel is recognized as a premium gemstone in its own right, prized by collectors for its brilliance, durability, and range of stunning colors.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-red-50">
                <Gem className="w-8 h-8 text-red-600 mb-2" />
                <h4 className="font-semibold">Red Spinel</h4>
                <p className="text-sm text-muted-foreground">Ruby alternative</p>
              </Card>
              <Card className="p-4 bg-pink-50">
                <Heart className="w-8 h-8 text-pink-600 mb-2" />
                <h4 className="font-semibold">Pink Spinel</h4>
                <p className="text-sm text-muted-foreground">Most popular</p>
              </Card>
              <Card className="p-4 bg-blue-50">
                <Sparkles className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-semibold">Cobalt Blue</h4>
                <p className="text-sm text-muted-foreground">Rarest variety</p>
              </Card>
              <Card className="p-4 bg-gray-100">
                <Shield className="w-8 h-8 text-gray-800 mb-2" />
                <h4 className="font-semibold">Black Spinel</h4>
                <p className="text-sm text-muted-foreground">Protection stone</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-b from-pink-50 to-white">
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
      <section className="bg-gradient-to-r from-pink-600 to-red-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Spinel Collection</h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Get personalized recommendations from our gemstone experts. Find the perfect Spinel for you.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-pink-700 hover:bg-pink-50">
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
            <p className="text-lg font-bold text-pink-700">₹8,500</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
            </Button>
            <Button className="bg-pink-600 hover:bg-pink-700">
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinelCollection;
