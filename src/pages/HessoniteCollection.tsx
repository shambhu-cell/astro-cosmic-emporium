import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Target, Info, UserCheck, 
  Sparkle, BookOpen, HelpCircle, Globe, Verified, CircleDot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import hessoniteImage from "@/assets/gemstones/hessonite.jpg";

const HessoniteCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [originFilter, setOriginFilter] = useState("all");
  const [viewingCount, setViewingCount] = useState(89);
  const [activeTab, setActiveTab] = useState("products");

  const navigationTabs = [
    { id: "products", label: "Products", icon: Gem },
    { id: "about", label: "About Gomed", icon: Info },
    { id: "who-should-wear", label: "Who Should Wear", icon: UserCheck },
    { id: "benefits", label: "Benefits", icon: Sparkle },
    { id: "how-to-wear", label: "How to Wear", icon: BookOpen },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
  ];

  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Rohit M.", location: "Delhi", time: "2 minutes ago", product: "Ceylon Hessonite 4.25 Ct" },
    { name: "Priya S.", location: "Mumbai", time: "6 minutes ago", product: "Premium Gomed 5.12 Ct" },
    { name: "Ankur K.", location: "Bangalore", time: "11 minutes ago", product: "Natural Hessonite 6.35 Ct" },
    { name: "Suman D.", location: "Kolkata", time: "18 minutes ago", product: "African Gomed 4.85 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 6, minutes: 18, seconds: 42 });

  // Countdown timer for offer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate live viewing count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => Math.max(70, prev + Math.floor(Math.random() * 7) - 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Recent buyer notification popup
  useEffect(() => {
    const showNotification = () => {
      setShowBuyerNotification(true);
      setTimeout(() => {
        setShowBuyerNotification(false);
        setCurrentBuyerIndex(prev => (prev + 1) % recentBuyers.length);
      }, 5000);
    };
    
    const interval = setInterval(showNotification, 15000);
    setTimeout(showNotification, 3000);
    return () => clearInterval(interval);
  }, [recentBuyers.length]);

  const products = [
    { id: "hs-ceylon-4", name: "Ceylon Hessonite (Gomed)", price: 12999, originalPrice: 19999, image: hessoniteImage, rating: 4.9, reviews: 156, weight: "4.25 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS142922", shape: "Oval", treatment: "Natural Untreated", inStock: 2, badge: "bestseller" },
    { id: "hs-premium-5", name: "Premium Hessonite", price: 18999, originalPrice: 28999, image: hessoniteImage, rating: 4.9, reviews: 203, weight: "5.12 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS78604", shape: "Cushion", treatment: "Natural Untreated", inStock: 3, badge: "premium" },
    { id: "hs-ceylon-6", name: "Natural Ceylon Gomed", price: 25999, originalPrice: 39999, image: hessoniteImage, rating: 4.9, reviews: 178, weight: "6.35 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS72497", shape: "Oval", treatment: "Natural Untreated", inStock: 1, badge: "collectors" },
    { id: "hs-african-4", name: "African Hessonite", price: 8999, originalPrice: 13999, image: hessoniteImage, rating: 4.8, reviews: 234, weight: "4.85 Carat", origin: "Africa (Tanzania)", certified: true, clarity: "VS", sku: "HS112965", shape: "Oval", treatment: "Natural Untreated", inStock: 5, badge: null },
    { id: "hs-premium-7", name: "Collector's Ceylon Gomed", price: 35999, originalPrice: 54999, image: hessoniteImage, rating: 4.9, reviews: 89, weight: "7.18 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS234567", shape: "Cushion", treatment: "Natural Untreated", inStock: 1, badge: "collectors" },
    { id: "hs-indian-4", name: "Indian Hessonite", price: 6999, originalPrice: 10999, image: hessoniteImage, rating: 4.7, reviews: 312, weight: "4.45 Carat", origin: "India", certified: true, clarity: "VS", sku: "HS345678", shape: "Oval", treatment: "Natural Untreated", inStock: 7, badge: null },
    { id: "hs-ceylon-8", name: "Premium Ceylon Hessonite", price: 45999, originalPrice: 68999, image: hessoniteImage, rating: 4.9, reviews: 112, weight: "8.25 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS456789", shape: "Oval", treatment: "Natural Untreated", inStock: 2, badge: "premium" },
    { id: "hs-collectors-9", name: "Rare Cinnamon Hessonite", price: 65999, originalPrice: 99999, image: hessoniteImage, rating: 5.0, reviews: 67, weight: "9.42 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "IF", sku: "HS567890", shape: "Cushion", treatment: "Natural Untreated", inStock: 1, badge: "collectors" },
  ];

  const testimonials = [
    { name: "Aditya Sharma", location: "Delhi", rating: 5, text: "I was facing constant delays and obstacles for years. After wearing this Hessonite, my confusion cleared within 3 months. Got promoted at work and my health improved dramatically!", avatar: "AS", verified: true, purchasedProduct: "Ceylon Hessonite 5.12 Ct" },
    { name: "Rashmi Patel", location: "Ahmedabad", rating: 5, text: "My astrologer recommended Gomed for clearing obstacles. The quality from AstroSage is unmatched. I've seen remarkable positive changes in my career and relationships.", avatar: "RP", verified: true, purchasedProduct: "Premium Gomed 4.85 Ct" },
    { name: "Vikram Singh", location: "Chandigarh", rating: 5, text: "Working abroad was my dream but kept failing. Started wearing Hessonite and within 6 months, I got my visa approved and an amazing job offer from UK. Truly life-changing!", avatar: "VS", verified: true, purchasedProduct: "Ceylon Gomed 6.35 Ct" },
    { name: "Sneha Gupta", location: "Pune", rating: 5, text: "Hessonite helped me overcome severe anxiety and confusion. My decision-making improved and I finally got clarity in life. The stone quality is exceptional!", avatar: "SG", verified: true, purchasedProduct: "African Hessonite 4.45 Ct" },
  ];

  const faqs = [
    { q: "What is Hessonite (Gomed)?", a: "Hessonite, known as Gomed in Hindi, is a beautiful gemstone associated with Planet Saturn (Shani). It belongs to the Grossular Garnet family and is known for its distinctive honey-brown to cinnamon color with a characteristic 'treacle' effect. It's one of the most important gems in Vedic astrology for removing obstacles and bringing mental clarity." },
    { q: "Who should wear Hessonite?", a: "Hessonite is highly recommended for those facing sudden obstacles, confusion, and failures. It's especially beneficial for Aquarius ascendant natives and those seeking success in foreign lands, research, politics, or unconventional fields. Always consult an astrologer before wearing." },
    { q: "What are the benefits of wearing Hessonite?", a: "Hessonite offers remarkable benefits: removes obstacles and confusion, success in foreign lands and abroad opportunities, career growth in unconventional fields, protection from enemies and evil eye, mental clarity and focus, relief from phobias and addictions, and success in research, politics, and technology sectors." },
    { q: "How to identify genuine Hessonite?", a: "Genuine Hessonite has a honey-brown to cinnamon color with a characteristic 'treacle' or 'roiled' effect (swirling patterns inside). Ceylon (Sri Lanka) hessonites are considered the finest. The stone should be transparent with good luster. Always buy certified stones from reputed labs like GIA, IGI, or GRS." },
    { q: "How to wear Hessonite for best results?", a: "Wear Hessonite on the middle finger of the right hand, set in silver or ashtadhatu metal. The ideal day to wear is Saturday during evening hours. Energize it by chanting 'Om Sham Shanaishcharaye Namah' 108 times. Minimum weight should be 3-5 carats for effective results." },
    { q: "What is the price range of Hessonite?", a: "Hessonite prices vary based on origin and quality. Ceylon Hessonites (finest quality) range from ₹1,500 to ₹8,000 per carat. African stones are ₹800-₹3,000 per carat. Indian hessonites are most affordable at ₹500-₹2,000 per carat. The 'cinnamon' color variety commands premium prices." },
    { q: "Can Hessonite be worn with other gemstones?", a: "Hessonite can be worn with gemstones that are compatible with Saturn. It pairs well with Blue Sapphire (Neelam), Amethyst, and Diamond. Avoid wearing it with Ruby, Pearl, and Red Coral as they represent conflicting planetary energies." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-15k": filtered = filtered.filter(p => p.price < 15000); break;
        case "15k-30k": filtered = filtered.filter(p => p.price >= 15000 && p.price < 30000); break;
        case "30k-50k": filtered = filtered.filter(p => p.price >= 30000 && p.price < 50000); break;
        case "above-50k": filtered = filtered.filter(p => p.price >= 50000); break;
      }
    }

    if (weightRange !== "all") {
      switch(weightRange) {
        case "4-5": filtered = filtered.filter(p => parseFloat(p.weight) >= 4 && parseFloat(p.weight) < 5); break;
        case "5-7": filtered = filtered.filter(p => parseFloat(p.weight) >= 5 && parseFloat(p.weight) < 7); break;
        case "7-9": filtered = filtered.filter(p => parseFloat(p.weight) >= 7 && parseFloat(p.weight) < 9); break;
        case "9+": filtered = filtered.filter(p => parseFloat(p.weight) >= 9); break;
      }
    }

    if (originFilter !== "all") {
      filtered = filtered.filter(p => p.origin.toLowerCase().includes(originFilter.toLowerCase()));
    }

    switch(sortBy) {
      case "price-low": filtered.sort((a, b) => a.price - b.price); break;
      case "price-high": filtered.sort((a, b) => b.price - a.price); break;
      case "rating": filtered.sort((a, b) => b.rating - a.rating); break;
    }

    return filtered;
  };

  const sortedProducts = filterProducts();

  const getBadgeInfo = (badge: string | null) => {
    switch(badge) {
      case "bestseller": return { icon: TrendingUp, text: "Bestseller", color: "bg-red-500" };
      case "premium": return { icon: Sparkles, text: "Premium", color: "bg-orange-500" };
      case "collectors": return { icon: Crown, text: "Collector's Choice", color: "bg-purple-500" };
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Recent Buyer Notification */}
      {showBuyerNotification && (
        <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-left duration-500">
          <Card className="p-4 bg-background border-2 border-green-500/50 shadow-2xl max-w-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                {recentBuyers[currentBuyerIndex].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{recentBuyers[currentBuyerIndex].name} from {recentBuyers[currentBuyerIndex].location}</p>
                <p className="text-xs text-muted-foreground">just purchased</p>
                <p className="text-xs text-amber-600 font-medium">{recentBuyers[currentBuyerIndex].product}</p>
                <p className="text-xs text-muted-foreground mt-1">{recentBuyers[currentBuyerIndex].time}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          </Card>
        </div>
      )}

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">SATURN BLESSING SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 35% OFF on Ceylon Hessonites</span>
            <div className="flex items-center gap-1 bg-black/20 rounded px-2 py-1">
              <Timer className="w-3 h-3" />
              <span className="font-mono font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button onClick={() => navigate('/')} className="hover:text-foreground transition-colors">Home</button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => navigate('/gemstones-collection')} className="hover:text-foreground transition-colors">Gemstones</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Hessonite (Gomed)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-amber-600 text-white border-0">
                  <Moon className="w-3 h-3 mr-1" />
                  Saturn (Shani)
                </Badge>
                <Badge variant="outline" className="border-amber-500 text-amber-700 dark:text-amber-400">
                  Aquarius Ascendant
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-purple-500 text-white border-0 animate-pulse">
                  <Target className="w-3 h-3 mr-1" />
                  Obstacle Remover
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Hessonite (Gomed) <span className="text-amber-600">गोमेद</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The powerful gemstone of Saturn, known for removing obstacles, success in foreign lands, and mental clarity. 
                  Trusted by <span className="font-bold text-foreground">28,000+</span> customers for life-transforming results.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { text: "Removes Obstacles", icon: Target },
                  { text: "Foreign Success", icon: Globe },
                  { text: "Mental Clarity", icon: Zap },
                  { text: "Saturn Protection", icon: Shield }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <benefit.icon className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">Ideal for Removing Life Obstacles & Foreign Success</p>
                  <p className="text-sm text-muted-foreground">Hessonite is highly effective for clearing confusion and achieving success abroad. Our experts provide FREE consultation to check suitability.</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-amber-200 dark:border-amber-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['A', 'R', 'V', 'S', 'P'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold text-foreground">28,000+</span> Happy Customers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(1,351 reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full animate-pulse">
                  <Eye className="w-4 h-4" />
                  <span className="font-semibold">{viewingCount} people viewing now</span>
                </div>
              </div>

              {/* Price & CTA Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-amber-600">Starting ₹6,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹10,999</span>
                    <Badge className="bg-green-500 text-white">36% OFF</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">EMI from ₹583/month | Free Lab Certificate</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                    <Phone className="w-4 h-4" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-amber-300 text-amber-700 hover:bg-amber-50" onClick={() => navigate('/gemstone-calculator')}>
                    <Gem className="w-4 h-4" />
                    Check If Gomed Suits You
                  </Button>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xl italic text-center text-muted-foreground">
                "Clear obstacles and unlock success with the power of Saturn's gemstone."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges - Enhanced */}
      <div className="bg-muted/30 border-b py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 justify-center">
              <Shield className="w-8 h-8 text-green-600" />
              <div>
                <p className="font-semibold text-sm">100% Certified</p>
                <p className="text-xs text-muted-foreground">GIA/IGI Lab Tested</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Truck className="w-8 h-8 text-amber-600" />
              <div>
                <p className="font-semibold text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Insured Delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <RefreshCcw className="w-8 h-8 text-orange-600" />
              <div>
                <p className="font-semibold text-sm">7-Day Returns</p>
                <p className="text-xs text-muted-foreground">100% Money Back</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Headphones className="w-8 h-8 text-purple-600" />
              <div>
                <p className="font-semibold text-sm">Expert Support</p>
                <p className="text-xs text-muted-foreground">21+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Navigation - Sticky */}
      <div className="bg-background border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            {navigationTabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const element = document.getElementById(tab.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto">
              <Select value={originFilter} onValueChange={setOriginFilter}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Origins</SelectItem>
                  <SelectItem value="ceylon">Ceylon (Sri Lanka)</SelectItem>
                  <SelectItem value="africa">African</SelectItem>
                  <SelectItem value="india">Indian</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-15k">Under ₹15,000</SelectItem>
                  <SelectItem value="15k-30k">₹15,000 - ₹30,000</SelectItem>
                  <SelectItem value="30k-50k">₹30,000 - ₹50,000</SelectItem>
                  <SelectItem value="above-50k">Above ₹50,000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weights</SelectItem>
                  <SelectItem value="4-5">4-5 Carat</SelectItem>
                  <SelectItem value="5-7">5-7 Carat</SelectItem>
                  <SelectItem value="7-9">7-9 Carat</SelectItem>
                  <SelectItem value="9+">9+ Carat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{sortedProducts.length}</span> Products
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px] h-9">
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
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="container mx-auto px-4 py-8 scroll-mt-20">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Premium Hessonite (Gomed) Collection</h2>
          <p className="text-muted-foreground">Hand-picked, certified stones from Ceylon, Africa & India</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product) => {
            const badgeInfo = getBadgeInfo(product.badge);
            return (
              <Card 
                key={product.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-amber-500/50 relative"
                onClick={() => navigate(`/gemstone/${product.id}`)}
              >
                <CardContent className="p-0">
                  {/* Stock Warning */}
                  {product.inStock <= 3 && (
                    <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs py-1 px-2 text-center z-20 flex items-center justify-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Only {product.inStock} left in stock!
                    </div>
                  )}

                  {/* Badges */}
                  {badgeInfo && (
                    <div className={`absolute ${product.inStock <= 3 ? 'top-8' : 'top-2'} left-2 z-10`}>
                      <Badge className={`${badgeInfo.color} hover:${badgeInfo.color} text-xs text-white`}>
                        <badgeInfo.icon className="w-3 h-3 mr-1" />
                        {badgeInfo.text}
                      </Badge>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.certified && (
                      <div className={`absolute ${product.inStock <= 3 ? 'top-8' : 'top-2'} right-2`}>
                        <Badge variant="secondary" className="bg-green-500/90 text-white text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Certified
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-amber-600 text-white text-xs font-bold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>
                    {/* Wishlist */}
                    <button 
                      className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-4 space-y-2">
                    <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {product.name} - {product.weight}
                    </h3>
                    
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p className="flex items-center gap-1">
                        <span className="font-medium">SKU:</span> {product.sku}
                      </p>
                      <p className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {product.origin}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg md:text-xl font-bold text-amber-600">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-green-600 font-medium">
                        You save ₹{(product.originalPrice - product.price).toLocaleString()}
                      </p>
                    </div>

                    {/* Stock Progress */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-red-600 font-medium flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          High Demand!
                        </span>
                        <span className="text-muted-foreground">{product.inStock} left</span>
                      </div>
                      <Progress value={product.inStock * 10} className="h-1.5" />
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm mt-2">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Expert Consultation CTA */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 py-8 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Not Sure Which Hessonite is Right for You?</h3>
              <p className="text-muted-foreground">Our expert astrologers will analyze your birth chart and recommend the perfect stone.</p>
            </div>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white gap-2 whitespace-nowrap">
              <Phone className="w-4 h-4" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container mx-auto px-4 py-12 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About Hessonite (Gomed) गोमेद</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hessonite, known as Gomed in Sanskrit and Hindi, is a variety of Grossular Garnet that exhibits a distinctive honey-yellow to reddish-brown color. The name "Hessonite" comes from the Greek word "hesson," meaning "inferior," as early gemologists mistakenly believed it to be an inferior form of other garnet varieties.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-amber-200">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-amber-600" />
                  Physical Properties
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CircleDot className="w-3 h-3 text-amber-500" /> Hardness: 6.5-7.5 on Mohs scale</li>
                  <li className="flex items-center gap-2"><CircleDot className="w-3 h-3 text-amber-500" /> Color: Honey-yellow to cinnamon brown</li>
                  <li className="flex items-center gap-2"><CircleDot className="w-3 h-3 text-amber-500" /> Luster: Vitreous to resinous</li>
                  <li className="flex items-center gap-2"><CircleDot className="w-3 h-3 text-amber-500" /> Specific Gravity: 3.57-3.73</li>
                </ul>
              </Card>
              <Card className="p-6 border-amber-200">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Moon className="w-5 h-5 text-amber-600" />
                  Astrological Significance
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CircleDot className="w-3 h-3 text-amber-500" /> Planet: Saturn (Shani)</li>
                  <li className="flex items-center gap-2"><CircleDot className="w-3 h-3 text-amber-500" /> Best for: Aquarius ascendant</li>
                  <li className="flex items-center gap-2"><CircleDot className="w-3 h-3 text-amber-500" /> Chakra: Root and Sacral</li>
                  <li className="flex items-center gap-2"><CircleDot className="w-3 h-3 text-amber-500" /> Element: Earth</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Who Should Wear Section */}
      <div id="who-should-wear" className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Who Should Wear Hessonite?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "By Zodiac", items: ["Aquarius (Kumbh) Ascendant", "Capricorn Moon Sign", "Those with Saturn in key houses"], icon: Moon },
              { title: "By Situation", items: ["Facing sudden obstacles", "Confusion in life decisions", "Seeking abroad opportunities"], icon: Target },
              { title: "By Profession", items: ["Politicians & Leaders", "Researchers & Scientists", "Technology professionals"], icon: Users },
            ].map((category, idx) => (
              <Card key={idx} className="p-6 border-amber-200/50">
                <category.icon className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="font-bold text-lg mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="container mx-auto px-4 py-12 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Benefits of Wearing Hessonite</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Removes Obstacles", desc: "Clears path to success by removing hidden barriers and enemies" },
            { icon: TrendingUp, title: "Career Growth", desc: "Rapid advancement especially in research, politics & technology" },
            { icon: Globe, title: "Foreign Success", desc: "Excellent for abroad opportunities and international business" },
            { icon: Zap, title: "Mental Clarity", desc: "Removes confusion, enhances focus and decision-making" },
            { icon: Shield, title: "Protection", desc: "Guards against negative energies and psychic attacks" },
            { icon: Heart, title: "Emotional Balance", desc: "Reduces anxiety, fear, and promotes inner peace" },
            { icon: Crown, title: "Leadership", desc: "Enhances authority, influence, and public recognition" },
            { icon: Sparkles, title: "Spiritual Growth", desc: "Aids in meditation and spiritual awakening" },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 bg-muted/30 rounded-xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Wear Section */}
      <div id="how-to-wear" className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Wear Hessonite</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-amber-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  Wearing Guidelines
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-700 mt-0.5">Day</Badge>
                    <span className="text-muted-foreground">Saturday, during evening hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-700 mt-0.5">Finger</Badge>
                    <span className="text-muted-foreground">Middle finger of right hand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-700 mt-0.5">Metal</Badge>
                    <span className="text-muted-foreground">Silver or Ashtadhatu (8 metals)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-700 mt-0.5">Weight</Badge>
                    <span className="text-muted-foreground">Minimum 3-5 carats for effective results</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6 border-amber-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  Energization Process
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Purify the stone in raw milk for 30 minutes</li>
                  <li>Wash with Ganga Jal (holy water)</li>
                  <li>Place on Saturn yantra or black cloth</li>
                  <li>Chant "Om Sham Shanaishcharaye Namah" 108 times</li>
                  <li>Wear on Saturday during evening hours</li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6 border-amber-200/50 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                {testimonial.verified && (
                  <Badge className="ml-auto bg-green-500 text-white text-xs">
                    <Verified className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{testimonial.text}"</p>
              <Badge variant="outline" className="text-xs text-amber-600 border-amber-300">
                Purchased: {testimonial.purchasedProduct}
              </Badge>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs" className="bg-muted/30 py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-4 bg-background">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Life with Hessonite?</h2>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Get expert guidance on choosing the perfect Hessonite for your horoscope. 
            Free consultation with our certified astrologers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="w-4 h-4" />
              Call: +91-9876543210
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi, I'm interested in Hessonite (Gomed) gemstones"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with Expert
        </span>
      </a>

      {/* Sticky Bottom CTA - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg p-3 flex items-center justify-between gap-3 md:hidden z-40">
        <div>
          <p className="text-xs text-muted-foreground">Starting from</p>
          <p className="font-bold text-amber-600">₹6,999</p>
        </div>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white flex-1 gap-2">
          <ShoppingCart className="w-4 h-4" />
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default HessoniteCollection;
