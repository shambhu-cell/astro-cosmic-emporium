import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import redCoralImage from "@/assets/gemstones/red-coral.jpg";

const MoongaCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(134);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Rajesh K.", location: "Mumbai", time: "3 minutes ago", product: "Italian Moonga 5.25 Ct" },
    { name: "Meera S.", location: "Jaipur", time: "7 minutes ago", product: "Premium Red Coral 6.12 Ct" },
    { name: "Suresh P.", location: "Delhi", time: "12 minutes ago", product: "Natural Moonga 4.85 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 32, seconds: 18 });

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
      setViewingCount(prev => Math.max(100, prev + Math.floor(Math.random() * 9) - 4));
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
    { id: "mc-italian-4", name: "Italian Red Coral (Moonga)", price: 8999, originalPrice: 13999, image: redCoralImage, rating: 4.9, reviews: 245, weight: "4.25 Carat", origin: "Italy (Mediterranean)", certified: true, clarity: "AAA", sku: "MC142922", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 2 },
    { id: "mc-premium-5", name: "Premium Italian Moonga", price: 12999, originalPrice: 19999, image: redCoralImage, rating: 4.9, reviews: 312, weight: "5.12 Carat", origin: "Italy (Mediterranean)", certified: true, clarity: "AAA", sku: "MC78604", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 1 },
    { id: "mc-natural-6", name: "Natural Red Coral", price: 18999, originalPrice: 28999, image: redCoralImage, rating: 4.9, reviews: 198, weight: "6.35 Carat", origin: "Italy (Mediterranean)", certified: true, clarity: "AAA+", sku: "MC72497", shape: "Triangular", treatment: "Natural Untreated", inStock: 1 },
    { id: "mc-japanese-4", name: "Japanese Red Coral", price: 15999, originalPrice: 24999, image: redCoralImage, rating: 4.8, reviews: 167, weight: "4.85 Carat", origin: "Japan (Pacific)", certified: true, clarity: "AAA", sku: "MC112965", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 1 },
    { id: "mc-premium-7", name: "Collector's Italian Moonga", price: 28999, originalPrice: 44999, image: redCoralImage, rating: 4.9, reviews: 89, weight: "7.18 Carat", origin: "Italy (Mediterranean)", certified: true, clarity: "AAA+", sku: "MC234567", shape: "Triangular", treatment: "Natural Untreated", inStock: 1 },
    { id: "mc-taiwan-4", name: "Taiwan Red Coral", price: 6999, originalPrice: 10999, image: redCoralImage, rating: 4.7, reviews: 278, weight: "4.45 Carat", origin: "Taiwan (Pacific)", certified: true, clarity: "AA", sku: "MC345678", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 3 },
    { id: "mc-italian-8", name: "Premium Mediterranean Moonga", price: 38999, originalPrice: 58999, image: redCoralImage, rating: 4.9, reviews: 112, weight: "8.25 Carat", origin: "Italy (Mediterranean)", certified: true, clarity: "AAA+", sku: "MC456789", shape: "Oval Cabochon", treatment: "Natural Untreated", inStock: 1 },
    { id: "mc-rare-9", name: "Rare Ox Blood Red Coral", price: 55999, originalPrice: 84999, image: redCoralImage, rating: 5.0, reviews: 67, weight: "9.42 Carat", origin: "Italy (Mediterranean)", certified: true, clarity: "AAAA", sku: "MC567890", shape: "Triangular", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Ravi Kumar", location: "Bangalore", rating: 5, text: "I was facing severe Manglik Dosha effects in my marriage. After wearing this Italian Red Coral, my relationship improved dramatically within 2 months. My confidence and energy levels are at an all-time high!", avatar: "RK", verified: true },
    { name: "Anita Sharma", location: "Delhi", rating: 5, text: "My son was always falling sick and had low immunity. Our astrologer recommended Moonga for strengthening Mars. Within 3 months, his health improved significantly. Amazing quality stone!", avatar: "AS", verified: true },
    { name: "Deepak Joshi", location: "Ahmedabad", rating: 5, text: "Was struggling with property disputes and legal issues for years. Started wearing Red Coral and within 6 months, all cases were resolved in my favor. My courage and determination increased manifold!", avatar: "DJ", verified: true },
    { name: "Priyanka Patel", location: "Pune", rating: 5, text: "Red Coral helped me overcome fear and boost my confidence. I got promoted at work and my leadership skills improved. The stone quality from AstroSage is exceptional - deep red color!", avatar: "PP", verified: true },
  ];

  const faqs = [
    { q: "What is Red Coral (Moonga)?", a: "Red Coral, known as Moonga or Praval in Hindi, is the gemstone of Planet Mars (Mangal). It's an organic gemstone formed from marine organisms called coral polyps. The deep red variety from Italy is considered the finest. It's one of the Navratnas and highly valued in Vedic astrology for its Mars-strengthening properties." },
    { q: "Who should wear Red Coral?", a: "Red Coral is highly recommended for those with weak Mars in their horoscope, suffering from Manglik Dosha, facing lack of courage and confidence, or experiencing blood-related disorders. It's especially beneficial for Aries and Scorpio ascendants and those in military, police, sports, surgery, or real estate professions." },
    { q: "What are the benefits of wearing Red Coral?", a: "Red Coral offers remarkable benefits: overcomes Manglik Dosha effects, boosts courage, confidence and willpower, improves blood circulation and vitality, success in property and real estate matters, victory over enemies and competitors, enhances leadership qualities, and brings success in sports and physical activities." },
    { q: "How to identify genuine Red Coral?", a: "Genuine Red Coral has a deep, even red color (Ox Blood red is most valued), natural striations visible under magnification, and feels warm to touch. Italian (Mediterranean) corals are considered finest. The stone should have good luster without cracks. Always buy certified stones from reputed labs like GIA, IGI, or Govt. labs." },
    { q: "How to wear Red Coral for best results?", a: "Wear Red Coral on the ring finger of the right hand, set in gold or copper metal. The ideal day to wear is Tuesday during sunrise in Aries or Scorpio hora. Energize it by chanting 'Om Ang Angarakaya Namah' 108 times. Minimum weight should be 5-7 carats for effective astrological results." },
    { q: "What is the price range of Red Coral?", a: "Red Coral prices vary based on origin and quality. Italian Moonga (finest quality) ranges from ₹1,000 to ₹5,000 per carat. Japanese corals are ₹800-₹3,500 per carat. Taiwan corals are most affordable at ₹500-₹1,500 per carat. The rare 'Ox Blood' red variety commands premium prices up to ₹8,000 per carat." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-10k": filtered = filtered.filter(p => p.price < 10000); break;
        case "10k-20k": filtered = filtered.filter(p => p.price >= 10000 && p.price < 20000); break;
        case "20k-40k": filtered = filtered.filter(p => p.price >= 20000 && p.price < 40000); break;
        case "above-40k": filtered = filtered.filter(p => p.price >= 40000); break;
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
      <div className="bg-gradient-to-r from-red-700 via-rose-600 to-red-700 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">MANGAL TRANSIT SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 35% OFF on Italian Red Corals</span>
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
            <span className="text-foreground font-medium">Red Coral (Moonga)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 via-rose-50/50 to-orange-50 dark:from-red-950/20 dark:via-rose-950/10 dark:to-orange-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-red-600 text-white border-0">
                  <Flame className="w-3 h-3 mr-1" />
                  Mars (Mangal)
                </Badge>
                <Badge variant="outline" className="border-red-500 text-red-700 dark:text-red-400">
                  Aries & Scorpio Ascendant
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-orange-500 text-white border-0 animate-pulse">
                  <Target className="w-3 h-3 mr-1" />
                  Manglik Dosha Remedy
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Red Coral (Moonga) <span className="text-red-600">मूंगा</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The powerful gemstone of Mars, known for boosting courage, vitality, and overcoming Manglik Dosha. 
                  Trusted by 45,000+ customers for life-transforming results.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Manglik Dosha Remedy", "Boosts Courage", "Improves Vitality", "Victory Over Enemies"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-700 dark:text-red-400 text-sm">Ideal for Manglik Dosha & Weak Mars</p>
                  <p className="text-sm text-muted-foreground">Red Coral is highly effective for Manglik individuals. Our experts provide FREE consultation to check suitability.</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-red-200 dark:border-red-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['R', 'A', 'D', 'P', 'S'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-rose-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
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
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(1,892 reviews)</span>
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
                    <span className="text-3xl md:text-4xl font-bold text-foreground">₹6,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹10,999</span>
                    <Badge className="bg-green-500 text-white">36% OFF</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">EMI from ₹583/month | Free Lab Certificate</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2">
                    <Phone className="w-4 h-4" />
                    Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-muted/30 border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { icon: Shield, text: "100% Certified Genuine" },
              { icon: RefreshCcw, text: "7-Day Return Policy" },
              { icon: Truck, text: "Free Express Shipping" },
              { icon: Award, text: "Lab Certificate Included" },
              { icon: Headphones, text: "Lifetime Support" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <item.icon className="w-4 h-4 text-red-600" />
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters & Product Count */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold">Premium Red Coral Collection</h2>
            <p className="text-sm text-muted-foreground">{sortedProducts.length} products found</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                <SelectItem value="10k-20k">₹10,000 - ₹20,000</SelectItem>
                <SelectItem value="20k-40k">₹20,000 - ₹40,000</SelectItem>
                <SelectItem value="above-40k">Above ₹40,000</SelectItem>
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {sortedProducts.map((product, idx) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-red-500/50">
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {idx === 0 && <Badge className="bg-red-600 text-white text-xs">Bestseller</Badge>}
                  {product.inStock === 1 && <Badge className="bg-orange-500 text-white text-xs animate-pulse">Only 1 Left!</Badge>}
                  <Badge className="bg-green-600 text-white text-xs">{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</Badge>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full shadow-lg">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full shadow-lg">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Stock Progress */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center justify-between text-white text-xs mb-1">
                    <span>Stock: {product.inStock} left</span>
                    <span className="text-red-300">Selling Fast!</span>
                  </div>
                  <Progress value={product.inStock * 10} className="h-1.5 bg-white/30" />
                </div>
              </div>

              <CardContent className="p-4">
                {/* Origin & Certification */}
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs border-red-500/50 text-red-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    {product.origin.split(' ')[0]}
                  </Badge>
                  {product.certified && (
                    <Badge variant="outline" className="text-xs border-green-500/50 text-green-600">
                      <BadgeCheck className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  )}
                </div>

                {/* Product Name */}
                <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>

                {/* Weight & Shape */}
                <p className="text-xs text-muted-foreground mb-2">
                  {product.weight} | {product.shape} | {product.clarity}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm h-9">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9 border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mars Benefits Section */}
      <div className="bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 dark:from-red-950/20 dark:via-rose-950/10 dark:to-orange-950/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-600 text-white mb-4">Mars (Mangal) Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Wear Red Coral?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Red Coral is the gemstone of Mars, the planet of energy, courage, and victory. It's one of the most powerful remedies in Vedic astrology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Manglik Dosha Remedy", desc: "Reduces negative effects of Mars in 1st, 4th, 7th, 8th, or 12th house" },
              { icon: Zap, title: "Boosts Energy & Vitality", desc: "Enhances physical strength, stamina, and overall health" },
              { icon: Crown, title: "Leadership Qualities", desc: "Develops courage, confidence, and command over situations" },
              { icon: Target, title: "Victory Over Enemies", desc: "Protection from competitors, legal disputes, and opposition" },
              { icon: Heart, title: "Healthy Relationships", desc: "Improves marital harmony especially for Manglik individuals" },
              { icon: TrendingUp, title: "Career Success", desc: "Excellence in military, police, sports, surgery, and real estate" },
              { icon: Gem, title: "Property Matters", desc: "Success in land, property deals, and construction ventures" },
              { icon: Flame, title: "Blood & Bone Health", desc: "Strengthens blood circulation, bones, and immune system" },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow border-red-100 dark:border-red-900/50">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-600 text-white mb-4">Customer Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real experiences from verified buyers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  {testimonial.verified && (
                    <Badge className="ml-auto bg-green-500 text-white text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-600 text-white mb-4">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about Red Coral</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-background rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
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
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Life with Red Coral?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get personalized recommendation from our Vedic astrology experts. Free consultation available!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 gap-2">
              <Phone className="w-5 h-5" />
              Call Now: +91-9876543210
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Consultation
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-6">
            <Lock className="w-4 h-4 inline mr-1" />
            100% Secure | Free Shipping | 7-Day Returns | Lifetime Authenticity Guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoongaCollection;
