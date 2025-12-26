import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import lapisLazuliImage from "@/assets/gemstones/lapis-lazuli.jpg";

const LapisLazuliCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(89);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Priya M.", location: "Bangalore", time: "2 minutes ago", product: "Afghan Lapis Lazuli 12.45 Ct" },
    { name: "Rahul K.", location: "Hyderabad", time: "8 minutes ago", product: "Royal Blue Lapis 15.32 Ct" },
    { name: "Sneha T.", location: "Chennai", time: "12 minutes ago", product: "Premium Pyrite Lapis 18.67 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 6, minutes: 32, seconds: 45 });
  const [stockLevels] = useState({
    "ll-afghan-12": 3,
    "ll-persian-15": 5,
    "ll-chilean-18": 4,
    "ll-premium-20": 2,
    "ll-royal-25": 1,
    "ll-natural-10": 6,
    "ll-pyrite-22": 3,
    "ll-collector-30": 1,
  });

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
      setViewingCount(prev => Math.max(65, prev + Math.floor(Math.random() * 7) - 3));
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
    { id: "ll-afghan-12", name: "Afghan Lapis Lazuli", price: 4999, originalPrice: 7999, image: lapisLazuliImage, rating: 4.9, reviews: 234, weight: "12.45 Carat", origin: "Afghanistan", certified: true, clarity: "AAA", sku: "LL142922", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 3 },
    { id: "ll-persian-15", name: "Persian Royal Lapis", price: 6999, originalPrice: 10999, image: lapisLazuliImage, rating: 4.9, reviews: 189, weight: "15.32 Carat", origin: "Afghanistan (Persian Grade)", certified: true, clarity: "AAA+", sku: "LL78604", shape: "Cushion Cabochon", treatment: "Natural Untreated", inStock: 5 },
    { id: "ll-chilean-18", name: "Chilean Lapis Lazuli", price: 5499, originalPrice: 8499, image: lapisLazuliImage, rating: 4.8, reviews: 156, weight: "18.67 Carat", origin: "Chile", certified: true, clarity: "AA", sku: "LL72497", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 4 },
    { id: "ll-premium-20", name: "Premium Pyrite Lapis", price: 8999, originalPrice: 13999, image: lapisLazuliImage, rating: 4.9, reviews: 145, weight: "20.15 Carat", origin: "Afghanistan", certified: true, clarity: "AAA+", sku: "LL112965", shape: "Round Cabochon", treatment: "Natural Untreated", inStock: 2 },
    { id: "ll-royal-25", name: "Royal Blue Collector", price: 12999, originalPrice: 19999, image: lapisLazuliImage, rating: 5.0, reviews: 78, weight: "25.34 Carat", origin: "Afghanistan (Badakhshan)", certified: true, clarity: "AAAA", sku: "LL234567", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 1 },
    { id: "ll-natural-10", name: "Natural Blue Lapis", price: 3499, originalPrice: 5499, image: lapisLazuliImage, rating: 4.7, reviews: 267, weight: "10.85 Carat", origin: "Afghanistan", certified: true, clarity: "AA", sku: "LL345678", shape: "Cushion Cabochon", treatment: "Natural Untreated", inStock: 6 },
    { id: "ll-pyrite-22", name: "Golden Pyrite Lapis", price: 9999, originalPrice: 14999, image: lapisLazuliImage, rating: 4.9, reviews: 98, weight: "22.56 Carat", origin: "Afghanistan", certified: true, clarity: "AAA+", sku: "LL456789", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 3 },
    { id: "ll-collector-30", name: "Museum Grade Lapis", price: 18999, originalPrice: 28999, image: lapisLazuliImage, rating: 5.0, reviews: 34, weight: "30.12 Carat", origin: "Afghanistan (Sar-e-Sang Mine)", certified: true, clarity: "AAAA", sku: "LL567890", shape: "Freeform Cabochon", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Ananya Sharma", location: "Delhi", rating: 5, text: "I was struggling with anxiety and lack of focus for years. Lapis Lazuli has transformed my mental clarity! My meditation practice has deepened significantly. Highly recommend for spiritual seekers!", avatar: "AS", verified: true },
    { name: "Vikram Reddy", location: "Hyderabad", rating: 5, text: "As an artist, I needed creative inspiration. This stone unlocked my imagination like never before! My work has been recognized in 3 exhibitions since wearing Lapis Lazuli.", avatar: "VR", verified: true },
    { name: "Meera Nair", location: "Kerala", rating: 5, text: "My throat chakra was blocked - I couldn't express myself freely. Lapis Lazuli helped me find my voice! Now I'm a confident public speaker. The quality from AstroSage is unmatched!", avatar: "MN", verified: true },
    { name: "Arun Patel", location: "Ahmedabad", rating: 5, text: "Purchased for third eye activation and spiritual growth. The deep blue with golden pyrite is absolutely stunning! Results visible within 21 days. Genuine stone with certification!", avatar: "AP", verified: true },
  ];

  const faqs = [
    { q: "What is Lapis Lazuli?", a: "Lapis Lazuli is an ancient semi-precious stone prized for over 6,500 years. It's a deep blue metamorphic rock containing lazurite (giving blue color), calcite (white streaks), and pyrite (golden flecks). Revered by Egyptian pharaohs, Persian royalty, and Buddhist monks, it's called the 'Stone of Wisdom' and 'Stone of Truth.' It's associated with the Third Eye and Throat chakras." },
    { q: "Who should wear Lapis Lazuli?", a: "Lapis Lazuli benefits those seeking mental clarity, enhanced intuition, better communication skills, and spiritual growth. It's especially powerful for: Sagittarius, Libra, and Aquarius zodiac signs; Creative professionals (artists, writers, musicians); Those in leadership or public speaking roles; Spiritual practitioners seeking third eye activation; Anyone dealing with anxiety, stress, or communication blocks." },
    { q: "What are the healing benefits of Lapis Lazuli?", a: "Lapis Lazuli offers powerful healing: Mental benefits include enhanced wisdom, intellectual ability, memory, and decision-making. Emotional healing for depression, anxiety, and emotional blocks. Spiritual benefits for third eye awakening, intuition, and dream recall. Physical support for throat, thyroid, and respiratory system. Communication enhancement for self-expression and truth-speaking. Creativity boost for artistic inspiration and innovation." },
    { q: "How to identify genuine Lapis Lazuli?", a: "Authentic Lapis Lazuli has: Deep, intense blue color (not too uniform or too light); Golden pyrite flecks (shiny metallic spots); White calcite streaks (natural inclusions); Cool touch (genuine stone feels cold); Not transparent (always opaque); Moderate weight. Beware of: Dyed howlite, synthetic lapis, or plastic imitations. All our stones come with authenticity certification." },
    { q: "How to wear Lapis Lazuli for maximum benefits?", a: "Wear Lapis Lazuli: On the throat or near heart as pendant; On the index or middle finger as ring; Set in silver or gold (silver preferred for spiritual benefits); On Saturday during Shukla Paksha; After energizing with incense and mantra 'Om Shani Shakti Namah'; Minimum 5-7 carats for astrological purposes; Cleanse regularly under moonlight or with sage smoke." },
    { q: "What is the price range of Lapis Lazuli?", a: "Lapis Lazuli prices depend on quality grades: AAA+ Grade (deep blue, minimal calcite, golden pyrite): ₹500-1000 per carat; AAA Grade (rich blue, some inclusions): ₹300-600 per carat; AA Grade (medium blue, visible calcite): ₹150-350 per carat; A Grade (lighter blue, more inclusions): ₹80-200 per carat. Origin matters - Afghan Lapis (especially Badakhshan) commands highest prices." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-5k": filtered = filtered.filter(p => p.price < 5000); break;
        case "5k-10k": filtered = filtered.filter(p => p.price >= 5000 && p.price < 10000); break;
        case "10k-15k": filtered = filtered.filter(p => p.price >= 10000 && p.price < 15000); break;
        case "above-15k": filtered = filtered.filter(p => p.price >= 15000); break;
      }
    }

    if (weightRange !== "all") {
      switch(weightRange) {
        case "10-15": filtered = filtered.filter(p => parseFloat(p.weight) >= 10 && parseFloat(p.weight) < 15); break;
        case "15-20": filtered = filtered.filter(p => parseFloat(p.weight) >= 15 && parseFloat(p.weight) < 20); break;
        case "20-25": filtered = filtered.filter(p => parseFloat(p.weight) >= 20 && parseFloat(p.weight) < 25); break;
        case "25+": filtered = filtered.filter(p => parseFloat(p.weight) >= 25); break;
      }
    }

    switch(sortBy) {
      case "price-low": filtered.sort((a, b) => a.price - b.price); break;
      case "price-high": filtered.sort((a, b) => b.price - a.price); break;
      case "rating": filtered.sort((a, b) => b.rating - a.rating); break;
    }

    return filtered;
  };

  const sortedProducts = filterProducts();

  return (
    <div className="min-h-screen bg-background">
      {/* Recent Buyer Notification */}
      {showBuyerNotification && (
        <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-left duration-500">
          <Card className="p-4 bg-background border-2 border-green-500/50 shadow-2xl max-w-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                {recentBuyers[currentBuyerIndex].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{recentBuyers[currentBuyerIndex].name} from {recentBuyers[currentBuyerIndex].location}</p>
                <p className="text-xs text-muted-foreground">just purchased</p>
                <p className="text-xs text-primary font-medium">{recentBuyers[currentBuyerIndex].product}</p>
                <p className="text-xs text-muted-foreground mt-1">{recentBuyers[currentBuyerIndex].time}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          </Card>
        </div>
      )}

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">WISDOM STONE SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 25% OFF on Premium Afghan Lapis Lazuli</span>
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
            <button onClick={() => navigate('/')} className="hover:text-foreground">Home</button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => navigate('/gemstones')} className="hover:text-foreground">Gemstones</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Lapis Lazuli</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-blue-50/50 to-slate-50 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-slate-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-indigo-600 text-white border-0">
                  <Brain className="w-3 h-3 mr-1" />
                  Third Eye Chakra
                </Badge>
                <Badge variant="outline" className="border-indigo-500 text-indigo-700 dark:text-indigo-400">
                  Sagittarius & Libra
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-amber-500 text-white border-0 animate-pulse">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Ancient Wisdom Stone
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Lapis Lazuli <span className="text-indigo-600">लाजवर्द</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The ancient "Stone of Wisdom" revered by pharaohs and royalty for 6,500+ years. 
                  Unlock your Third Eye, enhance intuition, and speak your truth with confidence.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Third Eye Activation", "Mental Clarity", "Truth & Communication", "Creative Inspiration"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4 flex items-start gap-3">
                <Brain className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-400 text-sm">Perfect for Spiritual Seekers & Creatives</p>
                  <p className="text-sm text-muted-foreground">Lapis Lazuli enhances wisdom, intuition, and self-expression. Ideal for meditation, public speaking, and artistic pursuits.</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-indigo-200 dark:border-indigo-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['A', 'V', 'M', 'S', 'P'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold text-foreground">18,000+</span> Happy Customers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(1,245 reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full animate-pulse">
                  <Eye className="w-4 h-4" />
                  <span className="font-semibold">{viewingCount} people viewing now</span>
                </div>
              </div>

              {/* Price & CTA Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-indigo-600">₹3,499</span>
                    <span className="text-lg text-muted-foreground line-through">₹5,499</span>
                    <Badge className="bg-green-500 text-white">Save 36%</Badge>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-indigo-500 text-indigo-700 hover:bg-indigo-50" onClick={() => navigate('/gemstone-calculator')}>
                    <Gem className="w-4 h-4 mr-2" />
                    Check Your Gemstone Match
                  </Button>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xl italic text-center text-muted-foreground">
                "Awaken your inner wisdom and speak your truth with ancient power."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-muted/30 border-b py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 justify-center">
              <Shield className="w-8 h-8 text-green-600" />
              <div>
                <p className="font-semibold text-sm">100% Certified</p>
                <p className="text-xs text-muted-foreground">Authenticity Guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Truck className="w-8 h-8 text-indigo-600" />
              <div>
                <p className="font-semibold text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On Orders ₹3000+</p>
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

      {/* Filters & Sort - Sticky */}
      <div className="bg-background border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                  <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                  <SelectItem value="10k-15k">₹10,000 - ₹15,000</SelectItem>
                  <SelectItem value="above-15k">Above ₹15,000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weights</SelectItem>
                  <SelectItem value="10-15">10-15 Carat</SelectItem>
                  <SelectItem value="15-20">15-20 Carat</SelectItem>
                  <SelectItem value="20-25">20-25 Carat</SelectItem>
                  <SelectItem value="25+">25+ Carat</SelectItem>
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
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Premium Lapis Lazuli Collection</h2>
          <p className="text-muted-foreground">Hand-picked, certified stones from Afghanistan's finest mines</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product, idx) => (
            <Card 
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-indigo-500/50 relative"
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
                <div className={`absolute ${product.inStock <= 3 ? 'top-8' : 'top-2'} left-2 z-10 flex flex-col gap-1.5`}>
                  {idx === 0 && (
                    <Badge className="bg-purple-500 hover:bg-purple-600 text-xs">
                      <Crown className="w-3 h-3 mr-1" />
                      Collector's Choice
                    </Badge>
                  )}
                  {idx === 1 && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Bestseller
                    </Badge>
                  )}
                  {idx === 2 && (
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>

                {/* Image */}
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20">
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
                    <Badge className="bg-indigo-600 text-white text-xs font-bold">
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
                  <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-indigo-600 transition-colors">
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
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-indigo-400 text-indigo-400' : 'fill-muted text-muted'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg md:text-xl font-bold text-indigo-600">
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
                  {product.inStock <= 5 && (
                    <div className="space-y-1">
                      <Progress value={(product.inStock / 10) * 100} className="h-1.5" />
                      <p className="text-xs text-red-500 font-medium">Selling fast! {product.inStock} left</p>
                    </div>
                  )}

                  {/* CTA */}
                  <Button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Expert Consultation CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Need Help Choosing the Right Lapis Lazuli?</h3>
              <p className="opacity-90">Get FREE expert consultation + energization guidance from our certified gemologists</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" onClick={() => navigate('/consultation')}>
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-indigo-500/10 text-indigo-700 border-indigo-500/30">
              <ThumbsUp className="w-3 h-3 mr-1" />
              Customer Success Stories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Real Results from Real Customers</h2>
            <p className="text-muted-foreground mt-2">See how Lapis Lazuli transformed their lives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold flex items-center gap-1">
                      {testimonial.name}
                      {testimonial.verified && <BadgeCheck className="w-4 h-4 text-indigo-500" />}
                    </p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Lapis Lazuli */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Everything About Lapis Lazuli</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-500" />
                Spiritual Properties
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Primary Chakra</span>
                  <span className="font-medium">Third Eye (Ajna)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Secondary Chakra</span>
                  <span className="font-medium">Throat (Vishuddha)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Zodiac Signs</span>
                  <span className="font-medium">Sagittarius & Libra</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Element</span>
                  <span className="font-medium">Water</span>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Gem className="w-5 h-5 text-indigo-500" />
                How to Wear
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Metal</span>
                  <span className="font-medium">Silver / Gold</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Finger</span>
                  <span className="font-medium">Index / Middle Finger</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Day & Time</span>
                  <span className="font-medium">Saturday, Morning</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Mantra</span>
                  <span className="font-medium text-xs">Om Shani Shakti Namah</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              Benefits of Lapis Lazuli
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Third Eye Activation", desc: "Awakens intuition and psychic abilities" },
                { title: "Mental Clarity", desc: "Enhances wisdom, memory, and focus" },
                { title: "Truth & Communication", desc: "Helps express thoughts clearly and honestly" },
                { title: "Creative Inspiration", desc: "Unlocks artistic imagination and innovation" },
                { title: "Stress Relief", desc: "Calms anxiety and promotes inner peace" },
                { title: "Spiritual Growth", desc: "Deepens meditation and self-awareness" },
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="bg-background rounded-lg border px-4">
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

      {/* Sticky Bottom CTA - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-2xl p-3 z-50 md:hidden">
        <div className="flex gap-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>

      {/* Bottom Padding for Mobile CTA */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default LapisLazuliCollection;
