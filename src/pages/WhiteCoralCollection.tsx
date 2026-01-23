import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Shield, Truck, Award, Clock, ChevronRight, Eye, ShoppingCart, Heart, Filter, Phone, MessageCircle, Sparkles, Users, TrendingUp, CheckCircle, Gem, Calendar, Zap, Info, UserCheck, BookOpen, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WhiteCoralCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(32);
  const [countdown, setCountdown] = useState({ hours: 3, minutes: 48, seconds: 22 });
  const [activeTab, setActiveTab] = useState("products");
  const [showNotification, setShowNotification] = useState(false);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);

  const recentBuyers = [
    { name: "Rahul S.", location: "Delhi", time: "5 mins ago" },
    { name: "Priya M.", location: "Mumbai", time: "12 mins ago" },
    { name: "Amit K.", location: "Bangalore", time: "18 mins ago" }
  ];

  const navigationTabs = [
    { id: "products", label: "Products", icon: Gem },
    { id: "about", label: "About", icon: Info },
    { id: "who-should-wear", label: "Who Should Wear", icon: UserCheck },
    { id: "benefits", label: "Benefits", icon: Sparkles },
    { id: "how-to-wear", label: "How to Wear", icon: BookOpen },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
  ];

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
    { id: "white-coral-1", name: "Italian White Coral - 6.25 Carat", price: 8500, originalPrice: 12000, rating: 4.9, reviews: 78, weight: "6.25", origin: "Italy", certified: true, inStock: true, badge: "bestseller" },
    { id: "white-coral-2", name: "Japanese White Coral - 5.50 Carat", price: 12000, originalPrice: 16500, rating: 4.8, reviews: 56, weight: "5.50", origin: "Japan", certified: true, inStock: true, badge: "premium" },
    { id: "white-coral-3", name: "Natural White Coral - 7.00 Carat", price: 6800, originalPrice: 9500, rating: 4.7, reviews: 92, weight: "7.00", origin: "Taiwan", certified: true, inStock: true, badge: null },
    { id: "white-coral-4", name: "Premium Safed Moonga - 4.80 Carat", price: 15000, originalPrice: 21000, rating: 5.0, reviews: 34, weight: "4.80", origin: "Italy", certified: true, inStock: true, badge: "collectors" },
    { id: "white-coral-5", name: "Certified Italian Coral - 8.00 Carat", price: 18500, originalPrice: 25000, rating: 4.9, reviews: 45, weight: "8.00", origin: "Italy", certified: true, inStock: true, badge: "premium" },
    { id: "white-coral-6", name: "Natural Japanese Moonga - 6.75 Carat", price: 14000, originalPrice: 19500, rating: 4.8, reviews: 67, weight: "6.75", origin: "Japan", certified: true, inStock: true, badge: null },
  ];

  const testimonials = [
    { name: "Rakesh Sharma", location: "Delhi", rating: 5, text: "I was suffering from blood-related issues for years. After wearing White Coral, my health improved significantly within 2 months. Mars blessings are truly powerful!", avatar: "RS", verified: true },
    { name: "Sunita Patel", location: "Ahmedabad", rating: 5, text: "My son lacked confidence and faced constant obstacles. White Coral gave him courage and he cleared his competitive exams. Highly recommended!", avatar: "SP", verified: true },
    { name: "Vikram Singh", location: "Jaipur", rating: 5, text: "Being in the army, I needed Mars energy. White Coral has enhanced my physical stamina and mental strength. Quality from AstroSage is unmatched!", avatar: "VS", verified: true },
    { name: "Meera Joshi", location: "Mumbai", rating: 5, text: "After marriage delays due to Mangal Dosha, I wore White Coral. Got married within 6 months! The stone truly works for Mars-related issues.", avatar: "MJ", verified: true },
  ];

  const faqs = [
    { question: "What is White Coral (Safed Moonga)?", answer: "White Coral, known as Safed Moonga in Hindi, is a precious organic gemstone formed from the skeletons of marine polyps. It's the gemstone of Planet Mars (Mangal) and is known for bringing courage, vitality, and physical strength. Unlike Red Coral, White Coral has a calming effect while still providing Mars energy." },
    { question: "Who should wear White Coral?", answer: "White Coral is beneficial for Aries (Mesh) and Scorpio (Vrishchik) Rashi natives. It's also recommended for those with Mangal Dosha, weak Mars in horoscope, blood-related issues, lack of courage, or those in military, sports, police, or surgical fields. It's gentler than Red Coral and suitable for those who need Mars energy without aggression." },
    { question: "What are the benefits of wearing White Coral?", answer: "White Coral offers numerous benefits: enhanced courage and confidence, improved blood circulation and health, victory over enemies, success in competitive exams, property gains, protection from accidents, marital bliss for Manglik individuals, and improved bone health. Results typically appear within 30-45 days." },
    { question: "How to wear White Coral for best results?", answer: "Wear White Coral on the ring finger of the right hand, set in silver or copper metal. The ideal day to wear is Tuesday during Shukla Paksha in the morning. Energize it by chanting 'Om Ang Angarakaya Namah' 108 times. Minimum weight should be 5-7 carats for effective results." },
    { question: "What is the difference between White and Red Coral?", answer: "Both are gemstones of Mars, but White Coral has a calming, balancing effect while Red Coral is more aggressive and fiery. White Coral is recommended for those who need Mars energy but want to avoid excessive aggression or heat in the body. It's also preferred by those who find Red Coral too strong." },
    { question: "Which origin White Coral is best?", answer: "Italian White Coral is considered the finest due to its superior quality and color. Japanese Coral is also highly valued for its luster and durability. Taiwan origin is more affordable while still offering good quality. We recommend Italian or Japanese for serious astrological purposes." },
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
      case "premium": return { icon: Award, text: "Premium", color: "bg-red-600" };
      case "collectors": return { icon: Star, text: "Collector's", color: "bg-amber-600" };
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-orange-50">
      {/* Recent Buyer Notification */}
      {showNotification && (
        <div className="fixed bottom-24 left-4 z-50 animate-in slide-in-from-left duration-300">
          <Card className="bg-white shadow-lg border-l-4 border-red-500 p-3 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium">{recentBuyers[currentBuyerIndex].name} from {recentBuyers[currentBuyerIndex].location}</p>
                <p className="text-xs text-muted-foreground">Purchased White Coral • {recentBuyers[currentBuyerIndex].time}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="font-semibold">Mars Transit Special!</span>
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
          <span className="text-primary font-medium">White Coral</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Badge className="bg-red-100 text-red-700">Mars Stone</Badge>
            <Badge className="bg-orange-100 text-orange-700">Courage & Vitality</Badge>
            <Badge variant="outline" className="border-red-300 text-red-700">Lab Certified</Badge>
            <Badge className="bg-green-500 text-white">Mangal Dosha Remedy</Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Natural White Coral (Safed Moonga) <span className="text-red-600">सफ़ेद मूंगा</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Premium Italian and Japanese White Coral for Mars energy. The gentle yet powerful gemstone for courage, physical strength, victory over enemies, and Mangal Dosha remedy.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            {["Mars Energy", "Physical Strength", "Victory & Courage", "Blood Health"].map((benefit, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['R', 'S', 'V', 'M', 'A'].map((letter, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">2,100+</span> Happy Customers
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm font-medium ml-1">4.8/5</span>
              <span className="text-sm text-muted-foreground">(260+ reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full animate-pulse">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">{viewingCount} viewing now</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="w-4 h-4 mr-2" />
              Free Expert Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
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
              <Award className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Lab Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">100% Authentic</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium">Vedic Energized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {navigationTabs.map(tab => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? "bg-red-600 hover:bg-red-700" : ""}
              >
                <tab.icon className="w-4 h-4 mr-1" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">{sortedProducts.length} White Corals</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[140px]"><SelectValue placeholder="Price" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-8000">Under ₹8,000</SelectItem>
                <SelectItem value="8000-15000">₹8,000 - ₹15,000</SelectItem>
                <SelectItem value="15000-50000">Above ₹15,000</SelectItem>
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

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product) => {
            const badgeInfo = getBadgeInfo(product.badge);
            return (
              <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-all" onClick={() => navigate(`/gemstone/${product.id}`)}>
                <div className="relative aspect-square bg-gradient-to-br from-red-50 to-orange-50">
                  {badgeInfo && (
                    <Badge className={`absolute top-2 left-2 ${badgeInfo.color} text-white z-10`}>
                      <badgeInfo.icon className="w-3 h-3 mr-1" />{badgeInfo.text}
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 z-10">
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white"><Heart className="w-4 h-4" /></Button>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-red-300 group-hover:scale-110 transition-transform" />
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
                    <span className="text-lg font-bold text-red-700">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <Button className="w-full mt-3 bg-red-600 hover:bg-red-700" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />Add to Cart
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Expert Consultation CTA */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing the Right White Coral?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Our Vedic astrology experts analyze your horoscope to recommend the perfect White Coral for maximum Mars benefits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Customer Success Stories</h2>
          <p className="text-muted-foreground text-center mb-8">Real experiences from verified White Coral wearers</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                  {t.verified && <Badge variant="outline" className="text-xs"><CheckCircle className="w-3 h-3 mr-1" />Verified</Badge>}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About White Coral */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About White Coral (Safed Moonga)</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Astrological Significance</h3>
              <p className="text-muted-foreground text-sm">
                White Coral is the gemstone of Mars (Mangal), the planet of energy, courage, and action. It's especially beneficial for Aries and Scorpio ascendants, and those with Mangal Dosha in their horoscope.
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">How to Wear</h3>
              <p className="text-muted-foreground text-sm">
                Wear on the ring finger of right hand in silver or copper. Ideal day is Tuesday morning during Shukla Paksha. Chant "Om Ang Angarakaya Namah" 108 times before wearing. Minimum 5-7 carats recommended.
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Key Benefits</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Enhanced courage & confidence</li>
                <li>• Improved blood circulation</li>
                <li>• Victory over enemies</li>
                <li>• Property & land gains</li>
                <li>• Mangal Dosha remedy</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Wear */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Who Should Wear White Coral?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { title: "Aries & Scorpio", desc: "Primary beneficiaries with Mars as ruling planet" },
              { title: "Mangal Dosha", desc: "Those with Mars affliction in marriage house" },
              { title: "Military/Sports", desc: "Professionals requiring physical strength & courage" },
              { title: "Blood Issues", desc: "Those with anemia, BP, or circulation problems" },
              { title: "Weak Confidence", desc: "People lacking courage and assertiveness" },
              { title: "Property Matters", desc: "Those seeking land, property, or real estate gains" },
              { title: "Competitive Exams", desc: "Students appearing for defense/police services" },
              { title: "Surgical Field", desc: "Surgeons and medical professionals" },
            ].map((item, i) => (
              <Card key={i} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-lg px-4">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-red-700 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Harness Mars Energy?</h2>
          <p className="text-lg opacity-90 mb-6">Get your certified White Coral with free Vedic energization and lifetime authenticity guarantee.</p>
          <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
            <Phone className="w-4 h-4 mr-2" />
            Get Free Consultation Now
          </Button>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600">
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-red-700">₹6,800</p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700">View Collection</Button>
        </div>
      </div>
    </div>
  );
};

export default WhiteCoralCollection;
