import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";

const BlueSapphireCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(156);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Vikram S.", location: "Mumbai", time: "3 minutes ago", product: "Ceylon Blue Sapphire 5.12 Ct" },
    { name: "Neha K.", location: "Delhi", time: "7 minutes ago", product: "Kashmir Blue Sapphire 4.85 Ct" },
    { name: "Amit R.", location: "Pune", time: "15 minutes ago", product: "Royal Blue Ceylon Sapphire 6.21 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 45, seconds: 23 });
  const [stockLevels] = useState({
    "bs-kashmir-4": 2,
    "bs-ceylon-5": 4,
    "bs-ceylon-6": 3,
    "bs-burma-4": 6,
    "bs-ceylon-7": 1,
    "bs-african-4": 7,
    "bs-ceylon-8": 2,
    "bs-premium-9": 1,
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
      setViewingCount(prev => Math.max(120, prev + Math.floor(Math.random() * 7) - 3));
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
    { id: "bs-kashmir-4", name: "Kashmir Blue Sapphire", price: 85999, originalPrice: 125999, image: blueSapphireImage, rating: 4.9, reviews: 167, weight: "4.15 Carat", origin: "Kashmir (India)", certified: true, clarity: "VVS", sku: "BS142922", shape: "Oval", treatment: "Natural Untreated", inStock: 2 },
    { id: "bs-ceylon-5", name: "Ceylon Blue Sapphire", price: 45999, originalPrice: 68999, image: blueSapphireImage, rating: 4.9, reviews: 312, weight: "5.12 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "BS78604", shape: "Cushion", treatment: "Natural Untreated", inStock: 4 },
    { id: "bs-ceylon-6", name: "Royal Blue Ceylon Sapphire", price: 58999, originalPrice: 89999, image: blueSapphireImage, rating: 4.9, reviews: 245, weight: "6.21 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "BS72497", shape: "Oval", treatment: "Natural Untreated", inStock: 3 },
    { id: "bs-burma-4", name: "Burma Blue Sapphire", price: 35999, originalPrice: 52999, image: blueSapphireImage, rating: 4.8, reviews: 189, weight: "4.85 Carat", origin: "Myanmar (Burma)", certified: true, clarity: "VS", sku: "BS112965", shape: "Oval", treatment: "Natural Untreated", inStock: 6 },
    { id: "bs-ceylon-7", name: "Cornflower Blue Sapphire", price: 78999, originalPrice: 115999, image: blueSapphireImage, rating: 4.9, reviews: 134, weight: "7.34 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "BS234567", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "bs-african-4", name: "African Blue Sapphire", price: 25999, originalPrice: 38999, image: blueSapphireImage, rating: 4.7, reviews: 276, weight: "4.45 Carat", origin: "Africa (Madagascar)", certified: true, clarity: "VS", sku: "BS345678", shape: "Oval", treatment: "Natural Untreated", inStock: 7 },
    { id: "bs-ceylon-8", name: "Premium Ceylon Sapphire", price: 95999, originalPrice: 142999, image: blueSapphireImage, rating: 4.9, reviews: 98, weight: "8.12 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "IF", sku: "BS456789", shape: "Oval", treatment: "Natural Untreated", inStock: 2 },
    { id: "bs-premium-9", name: "Collector's Kashmir Sapphire", price: 185999, originalPrice: 275999, image: blueSapphireImage, rating: 5.0, reviews: 45, weight: "9.25 Carat", origin: "Kashmir (India)", certified: true, clarity: "IF", sku: "BS567890", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Rajendra Joshi", location: "Mumbai", rating: 5, text: "I was facing constant delays and obstacles in my career for 5 years. After wearing Blue Sapphire on astrologer's advice, got promoted within 60 days! Saturn's blessings are real!", avatar: "RJ", verified: true },
    { name: "Kavita Mehta", location: "Ahmedabad", rating: 5, text: "Was struggling with chronic health issues. Blue Sapphire not only improved my health but also brought unexpected wealth. Best decision of my life!", avatar: "KM", verified: true },
    { name: "Sanjay Verma", location: "Kolkata", rating: 5, text: "Neelam changed my life completely. From debt to owning my own business in 1 year. The quality and certification from AstroSage is unmatched!", avatar: "SV", verified: true },
    { name: "Priyanka Singh", location: "Jaipur", rating: 5, text: "Was advised Blue Sapphire for Sade Sati. All my problems started resolving one by one. Genuine stone with proper certification. Highly recommended!", avatar: "PS", verified: true },
  ];

  const faqs = [
    { q: "What is Blue Sapphire (Neelam)?", a: "Blue Sapphire, known as Neelam in Hindi, is the gemstone of Planet Saturn (Shani). It's one of the most powerful and fastest-acting gemstones in Vedic astrology. Belonging to the Corundum family, it's known for its intense blue color ranging from light blue to deep royal blue. It can bring sudden fortune or misfortune, hence must be worn after proper astrological consultation." },
    { q: "Who should wear Blue Sapphire?", a: "Blue Sapphire is highly recommended for Capricorn (Makar) and Aquarius (Kumbh) Rashi natives. It's also beneficial during Sade Sati period, for those facing delays in career/marriage, or having a weak Saturn in their horoscope. IMPORTANT: Always do a trial period of 3-7 days before permanent wear as Saturn can give adverse effects if the stone doesn't suit you." },
    { q: "What are the benefits of wearing Blue Sapphire?", a: "Blue Sapphire offers remarkable benefits: instant wealth and fortune, removal of obstacles and delays, career advancement and recognition, protection from enemies and evil eye, improved health (especially bones and nervous system), and spiritual enlightenment. Results can be seen within 72 hours to 30 days of wearing." },
    { q: "How to test if Blue Sapphire suits you?", a: "Before wearing permanently, keep the Blue Sapphire under your pillow for 3 nights or tie it on your arm for 3-7 days. If you experience good dreams, positive news, or feel energetic, the stone suits you. If you have nightmares, accidents, or negative experiences, don't wear this stone. This trial is crucial for Blue Sapphire." },
    { q: "How to wear Blue Sapphire for best results?", a: "Wear Blue Sapphire on the middle finger of the right hand, set in silver or white gold metal (panch dhatu). The ideal day to wear is Saturday during Shukla Paksha after sunset. Energize it by chanting 'Om Sham Shanaishcharaye Namah' 108 times. Minimum weight should be 3-5 carats for effective results." },
    { q: "What is the price range of Blue Sapphire?", a: "Blue Sapphire prices vary significantly based on origin and quality. Kashmir Blue Sapphires (rarest) range from ₹50,000 to ₹5,00,000+ per carat. Ceylon stones are ₹15,000-₹80,000 per carat. Burma stones cost ₹10,000-₹50,000 per carat. African sapphires are most affordable at ₹5,000-₹25,000 per carat." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-50k": filtered = filtered.filter(p => p.price < 50000); break;
        case "50k-80k": filtered = filtered.filter(p => p.price >= 50000 && p.price < 80000); break;
        case "80k-150k": filtered = filtered.filter(p => p.price >= 80000 && p.price < 150000); break;
        case "above-150k": filtered = filtered.filter(p => p.price >= 150000); break;
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
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">SATURN TRANSIT SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 20% OFF on Kashmir & Ceylon Sapphires</span>
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
            <span className="text-foreground font-medium">Blue Sapphire (Neelam)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-slate-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-slate-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-blue-600 text-white border-0">
                  <Moon className="w-3 h-3 mr-1" />
                  Saturn (Shani)
                </Badge>
                <Badge variant="outline" className="border-blue-500 text-blue-700 dark:text-blue-400">
                  Capricorn & Aquarius
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-red-500 text-white border-0 animate-pulse">
                  <Zap className="w-3 h-3 mr-1" />
                  Fastest Acting Stone
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Blue Sapphire (Neelam) <span className="text-blue-600">नीलम</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The most powerful gemstone of Saturn, known for instant wealth, career success, and protection from obstacles. 
                  Trusted by 45,000+ customers for life-transforming results.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Instant Wealth", "Career Success", "Obstacle Removal", "Saturn Protection"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Warning Badge */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">Important: Trial Period Recommended</p>
                  <p className="text-sm text-muted-foreground">Blue Sapphire is powerful and fast-acting. Always test for 3-7 days before permanent wear. Our experts provide FREE trial guidance.</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-blue-200 dark:border-blue-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['R', 'K', 'S', 'P', 'A'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold text-foreground">45,000+</span> Happy Customers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(2,156 reviews)</span>
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
                    <span className="text-3xl font-bold text-blue-600">₹25,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹38,999</span>
                    <Badge className="bg-green-500 text-white">Save 33%</Badge>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-500 text-blue-700 hover:bg-blue-50" onClick={() => navigate('/gemstone-calculator')}>
                    <Gem className="w-4 h-4 mr-2" />
                    Check If Neelam Suits You
                  </Button>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xl italic text-center text-muted-foreground">
                "Harness Saturn's power for instant transformation and protection."
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
                <p className="text-xs text-muted-foreground">Lab Tested Gemstones</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Truck className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-semibold text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On Orders ₹5000+</p>
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
                  <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                  <SelectItem value="50k-80k">₹50,000 - ₹80,000</SelectItem>
                  <SelectItem value="80k-150k">₹80,000 - ₹1,50,000</SelectItem>
                  <SelectItem value="above-150k">Above ₹1,50,000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weights</SelectItem>
                  <SelectItem value="4-5">4-5 Carat</SelectItem>
                  <SelectItem value="5-6">5-6 Carat</SelectItem>
                  <SelectItem value="6-8">6-8 Carat</SelectItem>
                  <SelectItem value="8+">8+ Carat</SelectItem>
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
          <h2 className="text-xl font-bold">Premium Blue Sapphire Collection</h2>
          <p className="text-muted-foreground">Hand-picked, certified stones from Kashmir, Ceylon & Burma</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product, idx) => (
            <Card 
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-blue-500/50 relative"
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
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
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
                    <Badge className="bg-blue-600 text-white text-xs font-bold">
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
                  <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-blue-600 transition-colors">
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
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-blue-400 text-blue-400' : 'fill-muted text-muted'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg md:text-xl font-bold text-blue-600">
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
                  <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white" size="sm">
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Need Help Choosing the Right Blue Sapphire?</h3>
              <p className="opacity-90">Get FREE expert consultation + trial period guidance from our certified astrologers</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
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
            <Badge className="mb-3 bg-blue-500/10 text-blue-700 border-blue-500/30">
              <ThumbsUp className="w-3 h-3 mr-1" />
              Customer Success Stories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Real Results from Real Customers</h2>
            <p className="text-muted-foreground mt-2">See how Blue Sapphire transformed their lives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold flex items-center gap-1">
                      {testimonial.name}
                      {testimonial.verified && <BadgeCheck className="w-4 h-4 text-blue-500" />}
                    </p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Blue Sapphire */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Everything About Blue Sapphire (Neelam)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Moon className="w-5 h-5 text-blue-500" />
                Astrological Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Planet</span>
                  <span className="font-medium">Saturn (Shani)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Zodiac Signs</span>
                  <span className="font-medium">Capricorn & Aquarius</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Element</span>
                  <span className="font-medium">Air (Vayu)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Chakra</span>
                  <span className="font-medium">Third Eye (Ajna)</span>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Gem className="w-5 h-5 text-blue-500" />
                How to Wear
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Metal</span>
                  <span className="font-medium">Silver / White Gold</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Finger</span>
                  <span className="font-medium">Middle Finger (Right Hand)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Day & Time</span>
                  <span className="font-medium">Saturday, After Sunset</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Mantra</span>
                  <span className="font-medium text-xs">Om Sham Shanaishcharaye...</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              Benefits of Blue Sapphire
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Instant Wealth", desc: "Brings sudden fortune and financial windfalls" },
                { title: "Career Success", desc: "Removes obstacles and accelerates professional growth" },
                { title: "Protection", desc: "Guards against enemies, evil eye, and negative energies" },
                { title: "Health Benefits", desc: "Improves bones, nerves, and chronic ailments" },
                { title: "Mental Clarity", desc: "Enhances focus, discipline, and decision-making" },
                { title: "Sade Sati Relief", desc: "Reduces Saturn's malefic effects during transit" },
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
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
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

export default BlueSapphireCollection;
