import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Target, Info, UserCheck, 
  Sparkle, BookOpen, HelpCircle, Globe, Verified, CircleDot, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

const AmethystCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [originFilter, setOriginFilter] = useState("all");
  const [viewingCount, setViewingCount] = useState(76);
  const [activeTab, setActiveTab] = useState("products");

  const navigationTabs = [
    { id: "products", label: "Products", icon: Gem },
    { id: "about", label: "About Jamunia", icon: Info },
    { id: "who-should-wear", label: "Who Should Wear", icon: UserCheck },
    { id: "benefits", label: "Benefits", icon: Sparkle },
    { id: "how-to-wear", label: "How to Wear", icon: BookOpen },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
  ];

  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Kavita M.", location: "Jaipur", time: "3 minutes ago", product: "Brazilian Amethyst 5.25 Ct" },
    { name: "Rahul S.", location: "Mumbai", time: "7 minutes ago", product: "Premium Jamunia 4.12 Ct" },
    { name: "Deepa K.", location: "Chennai", time: "12 minutes ago", product: "Natural Amethyst 6.85 Ct" },
    { name: "Suresh D.", location: "Hyderabad", time: "19 minutes ago", product: "Uruguayan Amethyst 4.45 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

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
      setViewingCount(prev => Math.max(60, prev + Math.floor(Math.random() * 7) - 3));
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
    { id: "am-brazil-5", name: "Brazilian Amethyst (Jamunia)", price: 8999, originalPrice: 14999, image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400", rating: 4.9, reviews: 189, weight: "5.25 Carat", origin: "Brazil", certified: true, clarity: "VVS", sku: "AM142922", shape: "Oval", treatment: "Natural Untreated", inStock: 3, badge: "bestseller" },
    { id: "am-premium-4", name: "Premium Jamunia Stone", price: 6999, originalPrice: 11999, image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400", rating: 4.9, reviews: 234, weight: "4.12 Carat", origin: "Brazil", certified: true, clarity: "VVS", sku: "AM78604", shape: "Cushion", treatment: "Natural Untreated", inStock: 5, badge: "premium" },
    { id: "am-uruguay-6", name: "Uruguayan Deep Purple Amethyst", price: 15999, originalPrice: 24999, image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400", rating: 4.9, reviews: 145, weight: "6.85 Carat", origin: "Uruguay", certified: true, clarity: "VVS", sku: "AM72497", shape: "Oval", treatment: "Natural Untreated", inStock: 2, badge: "collectors" },
    { id: "am-african-4", name: "African Amethyst", price: 4999, originalPrice: 8999, image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400", rating: 4.8, reviews: 312, weight: "4.45 Carat", origin: "Africa (Zambia)", certified: true, clarity: "VS", sku: "AM112965", shape: "Oval", treatment: "Natural Untreated", inStock: 7, badge: null },
    { id: "am-premium-7", name: "Collector's Siberian Amethyst", price: 22999, originalPrice: 35999, image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400", rating: 4.9, reviews: 78, weight: "7.18 Carat", origin: "Russia (Siberia)", certified: true, clarity: "VVS", sku: "AM234567", shape: "Cushion", treatment: "Natural Untreated", inStock: 1, badge: "collectors" },
    { id: "am-indian-4", name: "Indian Jamunia", price: 3999, originalPrice: 6999, image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400", rating: 4.7, reviews: 287, weight: "4.85 Carat", origin: "India", certified: true, clarity: "VS", sku: "AM345678", shape: "Oval", treatment: "Natural Untreated", inStock: 9, badge: null },
    { id: "am-brazil-8", name: "Premium Brazilian Amethyst", price: 18999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400", rating: 4.9, reviews: 98, weight: "8.25 Carat", origin: "Brazil", certified: true, clarity: "VVS", sku: "AM456789", shape: "Oval", treatment: "Natural Untreated", inStock: 2, badge: "premium" },
    { id: "am-collectors-9", name: "Rare Royal Purple Amethyst", price: 32999, originalPrice: 52999, image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400", rating: 5.0, reviews: 56, weight: "9.42 Carat", origin: "Uruguay", certified: true, clarity: "IF", sku: "AM567890", shape: "Cushion", treatment: "Natural Untreated", inStock: 1, badge: "collectors" },
  ];

  const testimonials = [
    { name: "Meera Sharma", location: "Delhi", rating: 5, text: "I struggled with insomnia and anxiety for years. After wearing this Amethyst, my sleep quality improved dramatically within weeks. I feel calmer and more balanced now!", avatar: "MS", verified: true, purchasedProduct: "Brazilian Amethyst 5.12 Ct" },
    { name: "Rajesh Patel", location: "Ahmedabad", rating: 5, text: "My astrologer recommended Jamunia for Saturn benefits without heavy effects. The quality from AstroSage is exceptional. I've noticed improved intuition and peace of mind.", avatar: "RP", verified: true, purchasedProduct: "Premium Jamunia 4.85 Ct" },
    { name: "Ananya Singh", location: "Bangalore", rating: 5, text: "The Amethyst stone helped me overcome addiction issues and brought spiritual clarity. It's been 8 months and the positive changes are remarkable. Highly recommend!", avatar: "AS", verified: true, purchasedProduct: "Uruguayan Amethyst 6.35 Ct" },
    { name: "Pradeep Gupta", location: "Pune", rating: 5, text: "I wear Jamunia for meditation and spiritual growth. The deep purple color is mesmerizing and I feel more connected during my practices. Excellent quality stone!", avatar: "PG", verified: true, purchasedProduct: "African Amethyst 4.45 Ct" },
  ];

  const faqs = [
    { q: "What is Amethyst (Jamunia)?", a: "Amethyst, known as Jamunia in Hindi, is a beautiful purple variety of quartz. It's associated with Saturn (Shani) and is highly valued for its calming, spiritual, and healing properties. The name comes from Greek 'amethystos' meaning 'not intoxicated', as ancient Greeks believed it prevented drunkenness." },
    { q: "Who should wear Amethyst (Jamunia)?", a: "Amethyst is beneficial for those seeking mental peace, spiritual growth, and protection from negative energies. It's especially recommended for Aquarius and Capricorn ascendants, those with Saturn in their chart seeking a gentler alternative to Blue Sapphire, and individuals dealing with stress, anxiety, or addiction issues." },
    { q: "What are the benefits of wearing Amethyst?", a: "Amethyst offers numerous benefits: promotes mental peace and calmness, enhances intuition and spiritual awareness, helps overcome addictions and bad habits, improves sleep quality and reduces insomnia, protects from negative energies and evil eye, aids in meditation and spiritual practices, and brings clarity in decision-making." },
    { q: "How to identify genuine Amethyst?", a: "Genuine Amethyst has a distinctive purple to violet color, ranging from light lavender to deep royal purple. Uruguayan and Siberian amethysts have the deepest colors. Look for natural color zoning and inclusions. The stone should be transparent with good luster. Always buy certified stones from reputed labs." },
    { q: "How to wear Amethyst for best results?", a: "Wear Amethyst on the middle finger of the right hand, set in silver or white gold. The ideal day to wear is Saturday during morning hours. Energize it by chanting 'Om Sham Shanaishcharaye Namah' 108 times. Minimum weight should be 3-5 carats for effective astrological results." },
    { q: "What is the price range of Amethyst?", a: "Amethyst prices vary based on origin and color depth. Uruguayan and Siberian amethysts (deepest purple) range from ₹1,500 to ₹5,000 per carat. Brazilian stones are ₹800-₹2,500 per carat. African and Indian amethysts are most affordable at ₹400-₹1,500 per carat. Deeper purple commands higher prices." },
    { q: "Can Amethyst be worn with other gemstones?", a: "Amethyst pairs well with Saturn-friendly stones like Blue Sapphire, Hessonite, and Diamond. It also complements spiritual stones like Clear Quartz and Moonstone. Avoid wearing with Ruby, Red Coral, and Yellow Sapphire as they represent conflicting planetary energies." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-5k": filtered = filtered.filter(p => p.price < 5000); break;
        case "5k-15k": filtered = filtered.filter(p => p.price >= 5000 && p.price < 15000); break;
        case "15k-25k": filtered = filtered.filter(p => p.price >= 15000 && p.price < 25000); break;
        case "above-25k": filtered = filtered.filter(p => p.price >= 25000); break;
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
      case "premium": return { icon: Sparkles, text: "Premium", color: "bg-purple-500" };
      case "collectors": return { icon: Crown, text: "Collector's Choice", color: "bg-violet-600" };
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                {recentBuyers[currentBuyerIndex].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{recentBuyers[currentBuyerIndex].name} from {recentBuyers[currentBuyerIndex].location}</p>
                <p className="text-xs text-muted-foreground">just purchased</p>
                <p className="text-xs text-purple-600 font-medium">{recentBuyers[currentBuyerIndex].product}</p>
                <p className="text-xs text-muted-foreground mt-1">{recentBuyers[currentBuyerIndex].time}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          </Card>
        </div>
      )}

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">SPIRITUAL HEALING SALE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 30% OFF on Premium Amethysts</span>
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
            <span className="text-foreground font-medium">Amethyst (Jamunia)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 via-violet-50/50 to-indigo-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-indigo-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-purple-600 text-white border-0">
                  <Moon className="w-3 h-3 mr-1" />
                  Saturn (Shani)
                </Badge>
                <Badge variant="outline" className="border-purple-500 text-purple-700 dark:text-purple-400">
                  Aquarius & Capricorn
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-violet-500 text-white border-0 animate-pulse">
                  <Brain className="w-3 h-3 mr-1" />
                  Spiritual Healing
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Amethyst (Jamunia) <span className="text-purple-600">जामुनिया</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The royal purple gemstone of Saturn, known for mental peace, spiritual growth, and protection from negativity. 
                  Trusted by <span className="font-bold text-foreground">24,000+</span> customers for holistic healing and clarity.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { text: "Mental Peace", icon: Brain },
                  { text: "Spiritual Growth", icon: Sparkles },
                  { text: "Better Sleep", icon: Moon },
                  { text: "Negativity Shield", icon: Shield }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-purple-500/10 rounded-lg px-3 py-2.5 border border-purple-500/20">
                    <benefit.icon className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-400 text-sm">Gentle Saturn Alternative & Spiritual Powerhouse</p>
                  <p className="text-sm text-muted-foreground">Amethyst offers Saturn's benefits without the intense effects of Blue Sapphire. Perfect for meditation, spiritual practices, and those seeking mental tranquility.</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-purple-200 dark:border-purple-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">+24,000 happy customers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(2,156 reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1 text-green-600">
                    <Eye className="w-4 h-4" />
                    <span className="font-medium">{viewingCount}</span>
                  </div>
                  <span className="text-muted-foreground">people viewing now</span>
                </div>
              </div>

              {/* Trust Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: BadgeCheck, text: "Lab Certified", subtext: "GIA, IGI, GRS" },
                  { icon: Sparkles, text: "Free Energization", subtext: "Vedic Rituals" },
                  { icon: Truck, text: "Free Shipping", subtext: "Insured Delivery" },
                  { icon: RefreshCcw, text: "Easy Returns", subtext: "7-Day Policy" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-background rounded-lg p-3 border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.text}</p>
                      <p className="text-xs text-muted-foreground">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Products Section */}
        <section id="products" className="mb-16">
          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                  <SelectItem value="5k-15k">₹5,000 - ₹15,000</SelectItem>
                  <SelectItem value="15k-25k">₹15,000 - ₹25,000</SelectItem>
                  <SelectItem value="above-25k">Above ₹25,000</SelectItem>
                </SelectContent>
              </Select>

              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weights</SelectItem>
                  <SelectItem value="4-5">4 - 5 Carat</SelectItem>
                  <SelectItem value="5-7">5 - 7 Carat</SelectItem>
                  <SelectItem value="7-9">7 - 9 Carat</SelectItem>
                  <SelectItem value="9+">9+ Carat</SelectItem>
                </SelectContent>
              </Select>

              <Select value={originFilter} onValueChange={setOriginFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Origins</SelectItem>
                  <SelectItem value="brazil">Brazil</SelectItem>
                  <SelectItem value="uruguay">Uruguay</SelectItem>
                  <SelectItem value="russia">Russia (Siberia)</SelectItem>
                  <SelectItem value="africa">Africa (Zambia)</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px]">
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

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map((product) => {
              const badgeInfo = getBadgeInfo(product.badge);
              const discount = Math.round((1 - product.price / product.originalPrice) * 100);
              
              return (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-500/50"
                  onClick={() => navigate(`/gemstone/${product.id}`)}
                >
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {badgeInfo && (
                        <Badge className={`${badgeInfo.color} text-white text-xs`}>
                          <badgeInfo.icon className="w-3 h-3 mr-1" />
                          {badgeInfo.text}
                        </Badge>
                      )}
                      <Badge className="bg-green-500 text-white text-xs">
                        {discount}% OFF
                      </Badge>
                    </div>

                    {/* Stock Warning */}
                    {product.inStock <= 3 && (
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-red-500/90 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          Only {product.inStock} left in stock!
                        </div>
                      </div>
                    )}

                    {/* Quick View */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[1,2,3,4,5].map(i => (
                            <Star key={i} className={`w-3 h-3 ${i <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{product.weight}</span>
                        <span>•</span>
                        <span>{product.origin.split(' ')[0]}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-purple-600">₹{product.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <BadgeCheck className="w-3 h-3" />
                        <span>Certified & Energized</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-20">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">About Amethyst (Jamunia)</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Amethyst, known as <strong className="text-foreground">Jamunia (जामुनिया)</strong> in Hindi, is one of the most beloved purple gemstones in the world. 
                    Its name derives from the Greek word "amethystos" meaning "not intoxicated," as ancient Greeks believed it could prevent drunkenness.
                  </p>
                  <p>
                    In Vedic astrology, Amethyst is associated with <strong className="text-foreground">Saturn (Shani)</strong> and serves as a gentler alternative to Blue Sapphire (Neelam). 
                    It's particularly favored for spiritual practices, meditation, and those seeking mental peace without the intense effects of primary Saturn stones.
                  </p>
                  <p>
                    The finest Amethysts come from Uruguay and Siberia, known for their deep "Royal Purple" or "Siberian" color. 
                    Brazilian Amethysts are also highly valued for their excellent quality and vibrant hue.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Hardness", value: "7 Mohs" },
                    { label: "Crystal System", value: "Trigonal" },
                    { label: "Chemical Formula", value: "SiO₂" },
                    { label: "Refractive Index", value: "1.544-1.553" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900/50 dark:to-violet-900/50 flex items-center justify-center p-8">
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-400 to-violet-600 shadow-2xl flex items-center justify-center">
                    <Gem className="w-24 h-24 md:w-32 md:h-32 text-white/80" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                    <Star className="w-6 h-6 text-yellow-800" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Who Should Wear Section */}
        <section id="who-should-wear" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Who Should Wear Amethyst?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Aquarius & Capricorn",
                description: "Those with Aquarius or Capricorn ascendant can wear Amethyst for Saturn's blessings without the intense effects of Blue Sapphire.",
                icon: Moon,
                color: "purple"
              },
              {
                title: "Spiritual Seekers",
                description: "Ideal for those pursuing meditation, spiritual growth, and enhanced intuition. It opens the third eye and crown chakras.",
                icon: Sparkles,
                color: "violet"
              },
              {
                title: "Stress & Anxiety Relief",
                description: "Highly beneficial for individuals dealing with stress, anxiety, insomnia, or those seeking mental peace and emotional balance.",
                icon: Brain,
                color: "indigo"
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
                <div className={`w-12 h-12 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Benefits of Amethyst (Jamunia)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Brain, title: "Mental Peace", desc: "Calms the mind and reduces stress, anxiety, and overthinking" },
              { icon: Moon, title: "Better Sleep", desc: "Helps overcome insomnia and promotes restful, peaceful sleep" },
              { icon: Sparkles, title: "Spiritual Growth", desc: "Enhances meditation, intuition, and spiritual awareness" },
              { icon: Shield, title: "Protection", desc: "Guards against negative energies, evil eye, and psychic attacks" },
              { icon: Heart, title: "Emotional Healing", desc: "Helps overcome grief, anger, and emotional trauma" },
              { icon: Zap, title: "Clarity", desc: "Improves focus, decision-making, and mental clarity" },
              { icon: Target, title: "Addiction Recovery", desc: "Traditionally used to overcome addictions and bad habits" },
              { icon: Crown, title: "Saturn Benefits", desc: "Brings Saturn's blessings gently without intense effects" },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Wear Section */}
        <section id="how-to-wear" className="mb-16 scroll-mt-20">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How to Wear Amethyst</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Metal", desc: "Set in Silver or White Gold for best results", icon: Gem },
                { step: "2", title: "Finger", desc: "Middle finger of right hand", icon: CircleDot },
                { step: "3", title: "Day & Time", desc: "Saturday morning during Shani Hora", icon: Calendar },
                { step: "4", title: "Mantra", desc: "Chant 'Om Sham Shanaishcharaye Namah' 108 times", icon: BookOpen },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Customer Experiences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{testimonial.name}</span>
                      {testimonial.verified && (
                        <Badge variant="outline" className="text-green-600 border-green-500">
                          <Verified className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                      <span>•</span>
                      <span className="text-purple-600">{testimonial.purchasedProduct}</span>
                    </div>
                    <div className="flex mb-3">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className={`w-4 h-4 ${i <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic">"{testimonial.text}"</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Card className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="px-6 text-left hover:no-underline">
                    <span className="font-medium">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing the Right Amethyst?</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Our expert astrologers can analyze your birth chart and recommend the perfect Amethyst for your needs. 
              Get personalized guidance on origin, weight, and wearing method.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" onClick={() => navigate('/consultation')}>
                <Phone className="w-4 h-4 mr-2" />
                Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </Card>
        </section>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210?text=Hi, I'm interested in Amethyst (Jamunia) gemstones" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-background border-t p-4 z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-purple-600">₹3,999</p>
          </div>
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700" onClick={() => navigate('/gemstones-collection')}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AmethystCollection;