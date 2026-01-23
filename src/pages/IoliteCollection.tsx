import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Shield, Truck, Award, Clock, ChevronRight, Eye, ShoppingCart, Heart, Filter, Phone, MessageCircle, Sparkles, Users, TrendingUp, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const IoliteCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(29);
  const [countdown, setCountdown] = useState({ hours: 4, minutes: 15, seconds: 38 });

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

  const products = [
    { id: "iolite-1", name: "Natural Iolite (Neeli) - 4.25 Carat", price: 5500, originalPrice: 7800, rating: 4.9, reviews: 67, weight: "4.25", origin: "India", certified: true, inStock: true, badge: "bestseller" },
    { id: "iolite-2", name: "Premium Iolite - 3.80 Carat", price: 7200, originalPrice: 10000, rating: 4.8, reviews: 45, weight: "3.80", origin: "Madagascar", certified: true, inStock: true, badge: "premium" },
    { id: "iolite-3", name: "Eye Clean Iolite - 5.50 Carat", price: 6800, originalPrice: 9500, rating: 4.7, reviews: 78, weight: "5.50", origin: "India", certified: true, inStock: true, badge: null },
    { id: "iolite-4", name: "Collector's Iolite - 6.00 Carat", price: 12000, originalPrice: 16500, rating: 5.0, reviews: 28, weight: "6.00", origin: "Tanzania", certified: true, inStock: true, badge: "collectors" },
  ];

  const faqs = [
    { question: "What is Iolite (Neeli)?", answer: "Iolite, known as Neeli in Hindi, is a violet-blue gemstone. It's an affordable alternative to Blue Sapphire and is associated with Saturn." },
    { question: "Can Iolite replace Blue Sapphire?", answer: "Yes, Iolite is often recommended as a Blue Sapphire substitute for those who cannot afford or tolerate Blue Sapphire's strong Saturn energy." },
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
      case "premium": return { icon: Award, text: "Premium", color: "bg-indigo-600" };
      case "collectors": return { icon: Star, text: "Collector's", color: "bg-violet-600" };
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-violet-50">
      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <Gem className="w-4 h-4" />
            <span className="font-semibold">Saturn Special!</span>
          </span>
          <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            {String(countdown.hours).padStart(2, '0')}:{String(countdown.minutes).padStart(2, '0')}:{String(countdown.seconds).padStart(2, '0')}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{viewingCount} viewing</span>
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate("/")}>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate("/gemstones")}>Gemstones</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">Iolite (Neeli)</span>
        </div>
      </div>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge className="bg-indigo-100 text-indigo-700">Blue Sapphire Alternative</Badge>
            <Badge className="bg-violet-100 text-violet-700">Saturn Stone</Badge>
            <Badge variant="outline" className="border-indigo-300 text-indigo-700">Lab Certified</Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Natural Iolite (Neeli) Collection
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Premium quality Iolite - the affordable Blue Sapphire alternative. Associated with Saturn for discipline and focus.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 bg-indigo-50 rounded-lg px-3 py-2.5 border border-indigo-200">
              <Gem className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium">Saturn Energy</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-indigo-50 rounded-lg px-3 py-2.5 border border-indigo-200">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium">Discipline & Focus</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-indigo-50 rounded-lg px-3 py-2.5 border border-indigo-200">
              <Shield className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium">Sapphire Alt.</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-indigo-50 rounded-lg px-3 py-2.5 border border-indigo-200">
              <Award className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium">Lab Certified</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['I', 'O', 'L', 'I', 'T'].map((letter, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">1,800+</span> Happy Customers
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm font-medium ml-1">4.8/5</span>
              <span className="text-sm text-muted-foreground">(210+ reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full animate-pulse">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">{viewingCount} viewing now</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Phone className="w-4 h-4 mr-2" />
              Free Expert Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white border-y py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium">Lab Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium">100% Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium">Vedic Energized</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">{sortedProducts.length} Iolites</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[140px]"><SelectValue placeholder="Price" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-6000">Under ₹6,000</SelectItem>
                <SelectItem value="6000-10000">₹6,000 - ₹10,000</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px]"><SelectValue placeholder="Sort" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product) => {
            const badgeInfo = getBadgeInfo(product.badge);
            return (
              <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all" onClick={() => navigate(`/gemstone/${product.id}`)}>
                <div className="relative aspect-square bg-gradient-to-br from-indigo-50 to-violet-50">
                  {badgeInfo && (
                    <Badge className={`absolute top-2 left-2 ${badgeInfo.color} text-white z-10`}>
                      <badgeInfo.icon className="w-3 h-3 mr-1" />{badgeInfo.text}
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 z-10">
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white"><Heart className="w-4 h-4" /></Button>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <Gem className="w-16 h-16 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <Badge variant="destructive" className="absolute bottom-2 left-2 text-xs">Only 1 left</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{product.origin} • {product.weight} Ct</p>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-indigo-700">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <Button className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />Add to Cart
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="py-12 bg-indigo-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-8">FAQs</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600">
        <MessageCircle className="w-6 h-6" />
      </a>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-indigo-700">₹5,500</p>
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">View Collection</Button>
        </div>
      </div>
    </div>
  );
};

export default IoliteCollection;
