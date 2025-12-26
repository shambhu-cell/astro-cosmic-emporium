import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import pearlImage from "@/assets/gemstones/pearl.jpg";

const PearlCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(98);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Kavita M.", location: "Mumbai", time: "3 minutes ago", product: "South Sea Pearl 8.25 Ct" },
    { name: "Deepak S.", location: "Delhi", time: "7 minutes ago", product: "Basra Pearl 6.45 Ct" },
    { name: "Neha K.", location: "Jaipur", time: "15 minutes ago", product: "Japanese Akoya Pearl 5.12 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 18 });
  const [stockLevels] = useState({
    "pearl-south-5": 4,
    "pearl-basra-6": 2,
    "pearl-akoya-5": 6,
    "pearl-south-7": 3,
    "pearl-south-8": 1,
    "pearl-freshwater-4": 8,
    "pearl-tahitian-6": 2,
    "pearl-basra-8": 1,
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
      setViewingCount(prev => Math.max(80, prev + Math.floor(Math.random() * 5) - 2));
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
    { id: "pearl-south-5", name: "South Sea Pearl", price: 8999, originalPrice: 13999, image: pearlImage, rating: 4.9, reviews: 267, weight: "5.15 Carat", origin: "Australia", certified: true, luster: "Excellent", sku: "PL142922", shape: "Round", treatment: "Natural Untreated", inStock: 4 },
    { id: "pearl-basra-6", name: "Basra Pearl (Rare)", price: 24999, originalPrice: 35999, image: pearlImage, rating: 4.9, reviews: 89, weight: "6.45 Carat", origin: "Persian Gulf", certified: true, luster: "Excellent", sku: "PL78604", shape: "Round", treatment: "Natural Untreated", inStock: 2 },
    { id: "pearl-akoya-5", name: "Japanese Akoya Pearl", price: 6999, originalPrice: 10999, image: pearlImage, rating: 4.8, reviews: 198, weight: "5.12 Carat", origin: "Japan", certified: true, luster: "Very Good", sku: "PL72497", shape: "Round", treatment: "Natural Untreated", inStock: 6 },
    { id: "pearl-south-7", name: "South Sea Pearl Premium", price: 15999, originalPrice: 23999, image: pearlImage, rating: 4.9, reviews: 145, weight: "7.28 Carat", origin: "Australia", certified: true, luster: "Excellent", sku: "PL112965", shape: "Round", treatment: "Natural Untreated", inStock: 3 },
    { id: "pearl-south-8", name: "Golden South Sea Pearl", price: 32999, originalPrice: 48999, image: pearlImage, rating: 4.9, reviews: 78, weight: "8.25 Carat", origin: "Philippines", certified: true, luster: "Excellent", sku: "PL234567", shape: "Round", treatment: "Natural Untreated", inStock: 1 },
    { id: "pearl-freshwater-4", name: "Freshwater Pearl", price: 3999, originalPrice: 5999, image: pearlImage, rating: 4.7, reviews: 312, weight: "4.56 Carat", origin: "China", certified: true, luster: "Good", sku: "PL345678", shape: "Round", treatment: "Natural Untreated", inStock: 8 },
    { id: "pearl-tahitian-6", name: "Tahitian Black Pearl", price: 18999, originalPrice: 27999, image: pearlImage, rating: 4.8, reviews: 112, weight: "6.78 Carat", origin: "Tahiti", certified: true, luster: "Excellent", sku: "PL456789", shape: "Round", treatment: "Natural Untreated", inStock: 2 },
    { id: "pearl-basra-8", name: "Collector's Basra Pearl", price: 55999, originalPrice: 79999, image: pearlImage, rating: 4.9, reviews: 34, weight: "8.92 Carat", origin: "Persian Gulf", certified: true, luster: "Exceptional", sku: "PL567890", shape: "Round", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "I was facing severe mood swings and emotional instability. After wearing Pearl as per my astrologer's advice, I feel so calm and peaceful now. My relationships have improved significantly!", avatar: "PS", verified: true },
    { name: "Ravi Menon", location: "Kerala", rating: 5, text: "My mother was suffering from anxiety and sleep issues. Within 30 days of wearing Moti ring, her sleep quality improved dramatically. Moon's blessings are real!", avatar: "RM", verified: true },
    { name: "Sunita Gupta", location: "Delhi", rating: 5, text: "As a creative professional, I was struggling with mental blocks. Pearl enhanced my intuition and creativity. Got my biggest project within 2 months!", avatar: "SG", verified: true },
    { name: "Amit Joshi", location: "Pune", rating: 5, text: "My wife wore Pearl for fertility as suggested by our astrologer. We were blessed with a baby girl after 4 years of waiting. Forever grateful!", avatar: "AJ", verified: true },
  ];

  const faqs = [
    { q: "What is Pearl (Moti)?", a: "Pearl, known as Moti in Hindi, is the gemstone of Planet Moon (Chandra). It's an organic gem formed inside oysters and is one of the most sacred stones in Vedic astrology. Pearl brings emotional balance, mental peace, and enhances intuition. It's associated with feminine energy and the water element." },
    { q: "Who should wear Pearl?", a: "Pearl is highly recommended for Cancer (Kark) Rashi natives as Moon is their ruling planet. It's also beneficial for those with weak Moon in their horoscope, people suffering from mental stress, anxiety, or emotional instability, those seeking fertility and maternal blessings, and creative professionals needing enhanced intuition." },
    { q: "What are the benefits of wearing Pearl?", a: "Pearl brings multiple benefits: promotes emotional stability and mental peace, enhances memory and concentration, improves relationships especially with mother, helps with fertility and hormonal balance, reduces anger and stress, improves sleep quality, enhances beauty and charm, and brings prosperity through creative endeavors." },
    { q: "How to wear Pearl for best results?", a: "Wear Pearl on the little finger of the right hand, set in silver metal. The ideal day to wear is Monday during Shukla Paksha (waxing moon). Wake up early, take a bath, and chant 'Om Som Somaya Namah' 108 times before wearing. Minimum weight should be 5 carats for visible results. Energize the Pearl with Ganga Jal and milk before wearing." },
    { q: "What is the price range of Pearl?", a: "Pearl prices vary based on origin, luster, size, and shape. Freshwater Pearls are most affordable at ₹1,000-₹5,000 per carat. South Sea Pearls range from ₹5,000-₹30,000 per carat. Rare Basra Pearls can cost ₹20,000-₹1,00,000 per carat. The most valuable are natural, round pearls with excellent luster." },
    { q: "How to identify original Pearl?", a: "Original Pearl will have natural surface imperfections when examined closely. It will feel cold initially and slowly warm up. Rub two pearls together - real pearls feel slightly gritty due to nacre layers. Real pearls have unique weight and don't bounce like fake ones. Always buy certified pearls from reputable sources." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-5k": filtered = filtered.filter(p => p.price < 5000); break;
        case "5k-15k": filtered = filtered.filter(p => p.price >= 5000 && p.price < 15000); break;
        case "15k-30k": filtered = filtered.filter(p => p.price >= 15000 && p.price < 30000); break;
        case "above-30k": filtered = filtered.filter(p => p.price >= 30000); break;
      }
    }

    if (weightRange !== "all") {
      switch(weightRange) {
        case "4-5": filtered = filtered.filter(p => parseFloat(p.weight) >= 4 && parseFloat(p.weight) < 5); break;
        case "5-6": filtered = filtered.filter(p => parseFloat(p.weight) >= 5 && parseFloat(p.weight) < 6); break;
        case "6-8": filtered = filtered.filter(p => parseFloat(p.weight) >= 6 && parseFloat(p.weight) < 8); break;
        case "8+": filtered = filtered.filter(p => parseFloat(p.weight) >= 8); break;
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
      <div className="bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4 animate-pulse" />
            <span className="font-bold">FULL MOON SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 20% OFF on all Pearls</span>
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
            <span className="text-foreground font-medium">Pearl (Moti)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-gray-50/50 to-white dark:from-slate-950/20 dark:via-gray-950/10 dark:to-slate-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-slate-500 text-white border-0">
                  <Moon className="w-3 h-3 mr-1" />
                  Moon (Chandra)
                </Badge>
                <Badge variant="outline" className="border-slate-500 text-slate-700 dark:text-slate-400">
                  Cancer (Kark Rashi)
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-red-500 text-white border-0 animate-pulse">
                  <Zap className="w-3 h-3 mr-1" />
                  Limited Stock
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Pearl (Moti) <span className="text-slate-600">मोती</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The sacred gemstone of Moon, bringing emotional balance, mental peace, and divine feminine blessings. 
                  Trusted by 35,000+ customers for transformative results.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Emotional Balance", "Mental Peace", "Enhanced Intuition", "Fertility Blessings"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['P', 'R', 'S', 'A', 'N'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold text-foreground">35,000+</span> Happy Customers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(1,847 reviews)</span>
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
                    <span className="text-3xl font-bold text-slate-600">₹3,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹5,999</span>
                    <Badge className="bg-green-500 text-white">Save 33%</Badge>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-500 text-slate-700 hover:bg-slate-50" onClick={() => navigate('/gemstone-calculator')}>
                    <Gem className="w-4 h-4 mr-2" />
                    Check Compatibility
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-muted/30 border-b py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <RefreshCcw className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">7-Day Returns</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Lab Certified</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Headphones className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Expert Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Moon Benefits Card */}
            <Card className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/50 border-slate-200 dark:border-slate-800">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Moon className="w-6 h-6 text-slate-600" />
                  <h3 className="font-bold">Moon (Chandra) Benefits</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Controls emotions & mind",
                    "Enhances intuition & psychic abilities",
                    "Improves relationships with mother",
                    "Balances hormones & fertility",
                    "Reduces stress & anxiety",
                    "Promotes sound sleep",
                    "Enhances creativity & imagination",
                    "Brings mental clarity"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Droplets className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How to Wear */}
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-4 space-y-3">
                <h3 className="font-bold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-slate-600" />
                  How to Wear Pearl
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Metal:</span>
                    <span className="font-medium">Silver</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Finger:</span>
                    <span className="font-medium">Little Finger</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Day:</span>
                    <span className="font-medium">Monday</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">Morning (6-8 AM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min. Weight:</span>
                    <span className="font-medium">5 Carats</span>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    <strong>Mantra:</strong> "Om Som Somaya Namah" (108 times)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-bold">Filters</h3>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Prices" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                      <SelectItem value="5k-15k">₹5,000 - ₹15,000</SelectItem>
                      <SelectItem value="15k-30k">₹15,000 - ₹30,000</SelectItem>
                      <SelectItem value="above-30k">Above ₹30,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Weight (Carat)</label>
                  <Select value={weightRange} onValueChange={setWeightRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Weights" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Weights</SelectItem>
                      <SelectItem value="4-5">4 - 5 Carat</SelectItem>
                      <SelectItem value="5-6">5 - 6 Carat</SelectItem>
                      <SelectItem value="6-8">6 - 8 Carat</SelectItem>
                      <SelectItem value="8+">8+ Carat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Most Popular" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Pearl (Moti) Collection</h2>
              <Badge variant="outline">{sortedProducts.length} Products</Badge>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-slate-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      <Badge className="bg-green-500 text-white text-xs">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </Badge>
                      {product.certified && (
                        <Badge className="bg-blue-500 text-white text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Certified
                        </Badge>
                      )}
                    </div>

                    {/* Stock Warning */}
                    {product.inStock <= 3 && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-red-500 text-white text-xs animate-pulse">
                          Only {product.inStock} left!
                        </Badge>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white">
                        <Eye className="w-4 h-4 mr-1" />
                        Quick View
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h3 className="font-bold text-lg line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.weight} | {product.origin}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-muted/50 rounded px-2 py-1">
                        <span className="text-muted-foreground">Luster:</span>
                        <span className="ml-1 font-medium">{product.luster}</span>
                      </div>
                      <div className="bg-muted/50 rounded px-2 py-1">
                        <span className="text-muted-foreground">Shape:</span>
                        <span className="ml-1 font-medium">{product.shape}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-slate-600 hover:bg-slate-700">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-950/50 py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-slate-100 text-slate-700 mb-3">
              <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
              Customer Stories
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Real Results from Real Customers</h2>
            <p className="text-muted-foreground">See how Pearl has transformed lives through Moon's divine blessings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="relative">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-slate-200 absolute top-4 right-4" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
                  {testimonial.verified && (
                    <Badge variant="outline" className="mt-4 text-xs">
                      <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                      Verified Purchase
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about Pearl (Moti)</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 md:hidden z-40">
        <div className="flex gap-2">
          <Button className="flex-1 bg-slate-600 hover:bg-slate-700" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
            <Phone className="w-4 h-4 mr-2" />
            Call Expert
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PearlCollection;
