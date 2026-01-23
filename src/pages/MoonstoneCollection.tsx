import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Shield, Truck, Award, Clock, ChevronRight, Eye, ShoppingCart, Heart, Filter, Phone, MessageCircle, CheckCircle2, Sparkles, Users, TrendingUp, Moon, Headphones, CheckCircle, UserCheck, BookOpen, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MoonstoneCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(45);
  const [recentBuyers] = useState([
    { name: "Priya S.", location: "Mumbai", time: "3 mins ago" },
    { name: "Ankit R.", location: "Delhi", time: "8 mins ago" },
    { name: "Meera K.", location: "Bangalore", time: "12 mins ago" }
  ]);
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [countdown, setCountdown] = useState({ hours: 5, minutes: 32, seconds: 45 });
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
    { id: "moonstone-1", name: "Rainbow Moonstone - 5.25 Carat", price: 4500, originalPrice: 6500, rating: 4.9, reviews: 87, weight: "5.25", origin: "Sri Lanka", certified: true, inStock: true, badge: "bestseller" },
    { id: "moonstone-2", name: "Blue Moonstone Premium - 4.10 Carat", price: 6200, originalPrice: 8500, rating: 4.8, reviews: 65, weight: "4.10", origin: "India", certified: true, inStock: true, badge: "premium" },
    { id: "moonstone-3", name: "White Moonstone - 6.50 Carat", price: 3800, originalPrice: 5200, rating: 4.7, reviews: 92, weight: "6.50", origin: "Sri Lanka", certified: true, inStock: true, badge: null },
    { id: "moonstone-4", name: "Peach Moonstone - 3.80 Carat", price: 5500, originalPrice: 7800, rating: 5.0, reviews: 43, weight: "3.80", origin: "India", certified: true, inStock: true, badge: "rare" },
  ];

  const testimonials = [
    { name: "Kavitha R.", location: "Chennai", rating: 5, text: "The Rainbow Moonstone is absolutely stunning! The adularescence effect is mesmerizing. Perfect for Moon benefits.", date: "1 week ago" },
    { name: "Rahul M.", location: "Pune", rating: 5, text: "Moon benefits are noticeable. Great for emotional balance and intuition. Highly recommend!", date: "2 weeks ago" },
    { name: "Sneha D.", location: "Bangalore", rating: 5, text: "Blue Moonstone helped with my anxiety. Feeling calmer and more centered now.", date: "3 weeks ago" }
  ];

  const faqs = [
    { question: "What are the benefits of Moonstone?", answer: "Moonstone is associated with the Moon and brings emotional balance, intuition, and fertility. It's especially beneficial for women, those seeking emotional healing, and people in creative fields." },
    { question: "Who should wear Moonstone?", answer: "Those with weak Moon in their horoscope, people in creative fields, women seeking hormonal balance, and those experiencing emotional turbulence benefit most from Moonstone." },
    { question: "What is Adularescence in Moonstone?", answer: "Adularescence is the unique optical phenomenon in Moonstone that creates a glowing, floating light effect on the surface, resembling moonlight. Higher quality moonstones show stronger adularescence." },
    { question: "How to wear Moonstone for best results?", answer: "Wear Moonstone in silver on the little finger of the right hand on Monday evening during Shukla Paksha. The stone should touch the skin for maximum benefits." },
    { question: "Which type of Moonstone is best?", answer: "Rainbow Moonstone with strong blue adularescence from Sri Lanka is considered the finest. Blue Moonstone and Peach Moonstone are also highly valued." }
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
      case "premium": return { icon: Award, text: "Premium", color: "bg-blue-600" };
      case "rare": return { icon: Star, text: "Rare", color: "bg-purple-600" };
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
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
                <p className="text-xs text-muted-foreground">Purchased Moonstone • {recentBuyers[currentBuyerIndex].time}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <Moon className="w-4 h-4" />
            <span className="font-semibold">Lunar Special Sale!</span>
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

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate("/")}>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate("/gemstones")}>Gemstones</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary font-medium">Moonstone</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge className="bg-blue-100 text-blue-700">Moon Stone</Badge>
            <Badge className="bg-purple-100 text-purple-700">Emotional Balance</Badge>
            <Badge variant="outline" className="border-blue-300 text-blue-700">Lab Certified</Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Natural Moonstone Collection
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Premium quality Rainbow, Blue, and White Moonstones with mesmerizing adularescence effect. Associated with Moon for emotional balance, intuition, and feminine energy.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 bg-blue-50 rounded-lg px-3 py-2.5 border border-blue-200">
              <Moon className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Moon Energy</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-blue-50 rounded-lg px-3 py-2.5 border border-blue-200">
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Emotional Healing</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-blue-50 rounded-lg px-3 py-2.5 border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Adularescence</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-blue-50 rounded-lg px-3 py-2.5 border border-blue-200">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Lab Certified</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['M', 'K', 'P', 'R', 'S'].map((letter, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">3,500+</span> Happy Customers
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm font-medium ml-1">4.8/5</span>
              <span className="text-sm text-muted-foreground">(280+ reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full animate-pulse">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">{viewingCount} viewing now</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Phone className="w-4 h-4 mr-2" />
              Free Expert Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
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
            {["products", "about", "types", "benefits", "faqs"].map(tab => (
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
            <span className="font-medium">{sortedProducts.length} Moonstones</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-5000">Under ₹5,000</SelectItem>
                <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
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

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product) => {
            const badgeInfo = getBadgeInfo(product.badge);
            return (
              <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all" onClick={() => navigate(`/gemstone/${product.id}`)}>
                <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-purple-50">
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
                    <Moon className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
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

      {/* Expert Consultation CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Seeking Emotional Balance & Intuition?</h2>
            <p className="text-blue-100 mb-6">Get personalized guidance on choosing the right Moonstone based on your birth chart and emotional needs.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                <Phone className="w-4 h-4 mr-2" />
                Free Expert Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Customer Stories</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-muted-foreground mb-4">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                  <Badge variant="outline"><CheckCircle2 className="w-3 h-3 mr-1" />Verified</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Moonstone Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About Moonstone</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Moon className="w-5 h-5 text-blue-600" />
                  Astrological Significance
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Planet:</strong> Moon (Chandra)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Zodiac Signs:</strong> Cancer (Karka)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Chakra:</strong> Third Eye & Crown Chakra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Day to Wear:</strong> Monday</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  How to Wear Moonstone
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Metal:</strong> Silver (preferred)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Finger:</strong> Little finger of right hand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Day & Time:</strong> Monday evening during Shukla Paksha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Mantra:</strong> "Om Som Somaya Namah" (108 times)</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Who Should Wear */}
            <h3 className="text-xl font-bold text-center mb-6">Who Should Wear Moonstone?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Heart, title: "Women", desc: "Hormonal balance & fertility" },
                { icon: Brain, title: "Intuitives", desc: "Psychics & healers" },
                { icon: UserCheck, title: "Cancer Natives", desc: "Moon-ruled zodiac" },
                { icon: Sparkles, title: "Creative Souls", desc: "Artists & writers" }
              ].map((item, i) => (
                <Card key={i} className="p-4 text-center hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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

      {/* Final CTA */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Embrace Lunar Energy?</h2>
            <p className="text-muted-foreground mb-6">Choose from our certified Moonstone collection and experience emotional harmony.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop Moonstone Collection
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-blue-700">₹3,800</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">View Collection</Button>
        </div>
      </div>
    </div>
  );
};

export default MoonstoneCollection;