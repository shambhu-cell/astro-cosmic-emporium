import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Target, HeartHandshake, Coins
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import pearlImage from "@/assets/gemstones/pearl.jpg";

const RoseQuartzCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(76);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Meera S.", location: "Mumbai", time: "2 minutes ago", product: "Premium Rose Quartz 5.45 Ct" },
    { name: "Anjali R.", location: "Delhi", time: "4 minutes ago", product: "Natural Rose Quartz 6.28 Ct" },
    { name: "Kavita M.", location: "Bangalore", time: "8 minutes ago", product: "Madagascar Rose Quartz 4.92 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 47, seconds: 32 });

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
    { id: "rq-madagascar-4", name: "Madagascar Rose Quartz", price: 2999, originalPrice: 4999, image: pearlImage, rating: 4.9, reviews: 412, weight: "4.35 Carat", origin: "Madagascar", certified: true, clarity: "VVS", sku: "RQ142922", shape: "Heart Cut", treatment: "Natural Untreated", inStock: 4 },
    { id: "rq-premium-5", name: "Premium Pink Rose Quartz", price: 3999, originalPrice: 6999, image: pearlImage, rating: 4.9, reviews: 356, weight: "5.42 Carat", origin: "Brazil", certified: true, clarity: "VVS", sku: "RQ78604", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 3 },
    { id: "rq-deep-6", name: "Deep Pink Rose Quartz", price: 4999, originalPrice: 8999, image: pearlImage, rating: 4.9, reviews: 289, weight: "6.28 Carat", origin: "Madagascar", certified: true, clarity: "VVS", sku: "RQ72497", shape: "Cabochon Round", treatment: "Natural Untreated", inStock: 2 },
    { id: "rq-star-4", name: "Star Rose Quartz", price: 5499, originalPrice: 8999, image: pearlImage, rating: 4.8, reviews: 198, weight: "4.75 Carat", origin: "Madagascar", certified: true, clarity: "VS", sku: "RQ112965", shape: "Cabochon Sphere", treatment: "Natural Untreated", inStock: 2 },
    { id: "rq-collectors-7", name: "Collector's Rose Quartz", price: 7999, originalPrice: 12999, image: pearlImage, rating: 4.9, reviews: 142, weight: "7.52 Carat", origin: "Brazil", certified: true, clarity: "VVS", sku: "RQ234567", shape: "Cabochon Heart", treatment: "Natural Untreated", inStock: 1 },
    { id: "rq-translucent-5", name: "Translucent Rose Quartz", price: 3499, originalPrice: 5999, image: pearlImage, rating: 4.8, reviews: 234, weight: "5.18 Carat", origin: "South Africa", certified: true, clarity: "VS", sku: "RQ345678", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 3 },
    { id: "rq-gem-8", name: "Gem Quality Rose Quartz", price: 9999, originalPrice: 15999, image: pearlImage, rating: 4.9, reviews: 89, weight: "8.25 Carat", origin: "Madagascar", certified: true, clarity: "VVS", sku: "RQ456789", shape: "Faceted Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "rq-rare-10", name: "Rare Lavender Rose Quartz", price: 12999, originalPrice: 19999, image: pearlImage, rating: 5.0, reviews: 56, weight: "10.12 Carat", origin: "Brazil", certified: true, clarity: "IF", sku: "RQ567890", shape: "Cabochon Cushion", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "After my divorce, I was emotionally broken. Rose Quartz helped me heal and find self-love again. Within months, I attracted a wonderful partner who truly values me. This stone changed my life!", avatar: "PS", verified: true },
    { name: "Sneha Agarwal", location: "Delhi", rating: 5, text: "I was struggling with anxiety and relationship issues. Rose Quartz brought so much peace to my heart. My bond with family improved and I feel more emotionally balanced now.", avatar: "SA", verified: true },
    { name: "Kavita Nair", location: "Kochi", rating: 5, text: "Rose Quartz is magical for self-esteem. I was always insecure, but after wearing this stone, I developed genuine confidence and self-love. My skin also improved!", avatar: "KN", verified: true },
    { name: "Ritu Mehta", location: "Jaipur", rating: 5, text: "I bought this for fertility and emotional healing. Within a year, I conceived after trying for 5 years! The gentle energy of Rose Quartz is truly miraculous for heart chakra healing.", avatar: "RM", verified: true },
  ];

  const faqs = [
    { q: "What is Rose Quartz gemstone?", a: "Rose Quartz is a pink variety of quartz crystal known as the 'Stone of Unconditional Love'. It gets its delicate pink color from trace amounts of titanium, iron, or manganese. Rose Quartz has been used since 7000 BC in jewelry and healing rituals. It's the birthstone for January (alternate) and is associated with the heart chakra, promoting love, self-care, and emotional healing." },
    { q: "Who should wear Rose Quartz?", a: "Rose Quartz benefits everyone seeking love, emotional healing, or self-care. It's especially recommended for those recovering from heartbreak, seeking romantic relationships, struggling with self-esteem, dealing with anxiety or stress, wanting to improve family relationships, pregnant women, and those with Venus-related issues in their birth chart. It's safe for all zodiac signs with no side effects." },
    { q: "What are the benefits of Rose Quartz?", a: "Rose Quartz offers numerous benefits: attracts love and romance, heals emotional wounds and past trauma, promotes self-love and self-acceptance, reduces stress and anxiety, improves relationships with family and friends, enhances skin health and complexion, supports fertility and pregnancy, balances the heart chakra, promotes forgiveness and compassion, and brings inner peace and emotional stability." },
    { q: "How to identify genuine Rose Quartz?", a: "Genuine Rose Quartz has a soft, milky pink color that's naturally uneven with slight variations. It feels cool to touch and has a hardness of 7 on the Mohs scale. Real Rose Quartz may have natural inclusions or cloudiness. Avoid stones that are too uniformly pink, too transparent, or feel warm/plastic-like. Always buy certified stones from reputed sellers." },
    { q: "How to wear Rose Quartz for maximum benefits?", a: "Rose Quartz can be worn as a pendant close to the heart (most effective), or as a ring on the ring finger of the right hand. Set it in silver, rose gold, or copper for best results. Friday is the ideal day to start wearing (ruled by Venus). Cleanse with rose water or moonlight overnight before first use. You can chant 'Om Shukraya Namah' while wearing." },
    { q: "What is the price range of Rose Quartz?", a: "Rose Quartz is highly affordable, making it accessible to everyone. Standard quality costs ₹300-₁,000 per carat. Premium quality from Madagascar or Brazil ranges ₹800-₂,500 per carat. Rare varieties like Star Rose Quartz or deep pink specimens can cost ₹2,000-₅,000 per carat. Gem-quality faceted Rose Quartz may command higher prices." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-3k": filtered = filtered.filter(p => p.price < 3000); break;
        case "3k-5k": filtered = filtered.filter(p => p.price >= 3000 && p.price < 5000); break;
        case "5k-8k": filtered = filtered.filter(p => p.price >= 5000 && p.price < 8000); break;
        case "above-8k": filtered = filtered.filter(p => p.price >= 8000); break;
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
          <Card className="p-4 bg-background border-2 border-pink-500/50 shadow-2xl max-w-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-sm">
                {recentBuyers[currentBuyerIndex].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{recentBuyers[currentBuyerIndex].name} from {recentBuyers[currentBuyerIndex].location}</p>
                <p className="text-xs text-muted-foreground">just purchased</p>
                <p className="text-xs text-primary font-medium">{recentBuyers[currentBuyerIndex].product}</p>
                <p className="text-xs text-muted-foreground mt-1">{recentBuyers[currentBuyerIndex].time}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-pink-500" />
            </div>
          </Card>
        </div>
      )}

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 animate-pulse" />
            <span className="font-bold">ROSE QUARTZ LOVE SALE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Flat 40% OFF on All Rose Quartz</span>
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
            <span className="text-foreground font-medium">Rose Quartz</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-rose-50/50 to-purple-50 dark:from-pink-950/20 dark:via-rose-950/10 dark:to-purple-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-pink-600 text-white border-0">
                  <Heart className="w-3 h-3 mr-1" />
                  Venus Energy
                </Badge>
                <Badge variant="outline" className="border-pink-500 text-pink-700 dark:text-pink-400">
                  Stone of Love
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Natural
                </Badge>
                <Badge className="bg-rose-500 text-white border-0 animate-pulse">
                  <HeartHandshake className="w-3 h-3 mr-1" />
                  Heart Chakra
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Rose Quartz <span className="text-pink-600">रोज़ क्वार्ट्ज</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The ultimate stone of unconditional love and emotional healing. Rose Quartz opens the heart chakra, 
                  attracts romance, promotes self-love, and brings inner peace. Trusted by 28,000+ customers 
                  for love, relationships, and emotional well-being.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Attracts Love", "Emotional Healing", "Self-Love", "Inner Peace"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-pink-500/10 rounded-lg px-3 py-2.5 border border-pink-500/20">
                    <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-pink-700 dark:text-pink-400 text-sm">Ideal for Love, Relationships & Emotional Balance</p>
                  <p className="text-sm text-muted-foreground">Rose Quartz is the most powerful crystal for love and self-care. Perfect for those seeking romantic relationships, healing from heartbreak, or wanting to improve self-esteem and family bonds.</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-pink-200 dark:border-pink-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['M', 'A', 'K', 'R', 'S'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
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
                      <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(1,342 reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-pink-500/10 text-pink-600 px-4 py-2 rounded-full animate-pulse">
                  <Eye className="w-4 h-4" />
                  <span className="font-semibold">{viewingCount} people viewing now</span>
                </div>
              </div>

              {/* Price & CTA Row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-pink-600">₹2,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹4,999</span>
                    <Badge className="bg-green-500 text-white">40% OFF</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">*Price varies by weight & quality</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="gap-2" onClick={() => navigate('/consultation')}>
                    <Phone className="w-4 h-4" />
                    Free Consultation
                  </Button>
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-b bg-muted/30 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-pink-500" />
              <span>Lab Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-pink-500" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCcw className="w-5 h-5 text-pink-500" />
              <span>7-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-pink-500" />
              <span>Lifetime Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-pink-500" />
              <span>Free Energization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{sortedProducts.length} Products</span>
              <span>|</span>
              <span>Showing all Rose Quartz gemstones</span>
            </div>
            <div className="flex items-center gap-3">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-3k">Under ₹3,000</SelectItem>
                  <SelectItem value="3k-5k">₹3,000 - ₹5,000</SelectItem>
                  <SelectItem value="5k-8k">₹5,000 - ₹8,000</SelectItem>
                  <SelectItem value="above-8k">Above ₹8,000</SelectItem>
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

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-pink-500/50"
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
                  <Badge className="bg-pink-600 text-white text-xs">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                  {product.certified && (
                    <Badge variant="secondary" className="text-xs">
                      <BadgeCheck className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  )}
                </div>
                {product.inStock <= 2 && (
                  <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs animate-pulse">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Only {product.inStock} left!
                  </Badge>
                )}
                {/* Quick View */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                    <Eye className="w-4 h-4 mr-2" />
                    Quick View
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">{product.weight}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-pink-400 text-pink-400" />
                      <span className="text-xs font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{product.origin}</span>
                    <span>•</span>
                    <span>{product.shape}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-lg font-bold text-pink-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white text-sm h-9 mt-2">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose Our Rose Quartz?</h2>
            <p className="text-muted-foreground">We source only the finest quality Rose Quartz with authentic certification</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Gem, title: "100% Natural", desc: "No treatments or enhancements" },
              { icon: BadgeCheck, title: "Lab Certified", desc: "With authenticity certificate" },
              { icon: Heart, title: "Pre-Energized", desc: "Activated by Vedic rituals" },
              { icon: Truck, title: "Free Shipping", desc: "Secure insured delivery" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto bg-pink-500/10 rounded-full flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Real Stories, Real Transformations</h2>
            <p className="text-muted-foreground">See how Rose Quartz has changed lives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 border-2 hover:border-pink-500/50 transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    {testimonial.verified && (
                      <Badge variant="secondary" className="text-xs mt-1">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified Buyer
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Educational Section */}
      <div className="bg-muted/30 py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Rose Quartz: The Stone of Unconditional Love</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-muted-foreground mb-4">
                Rose Quartz, known as the "Heart Stone" or "Love Stone," has been treasured for over 7,000 years for its 
                gentle pink essence and powerful ability to attract love. Ancient Egyptians and Romans used Rose Quartz 
                in beauty rituals, believing it could prevent aging and enhance beauty. Today, it remains the most 
                important crystal for the heart chakra, promoting self-love, romantic love, and unconditional love.
              </p>
              <p className="text-muted-foreground mb-4">
                In Vedic astrology, Rose Quartz is associated with Venus (Shukra), the planet of love, beauty, and 
                harmony. Wearing Rose Quartz strengthens Venus in your birth chart, bringing blessings in relationships, 
                artistic pursuits, and overall happiness. It's particularly beneficial for those going through 
                relationship challenges or seeking to heal emotional wounds from the past.
              </p>
              <p className="text-muted-foreground">
                The finest Rose Quartz comes from Madagascar and Brazil, known for their deep, uniform pink color and 
                excellent clarity. Our collection features only natural, untreated stones that have been carefully 
                selected for their quality and energetic properties. Each stone is energized through Vedic rituals 
                to maximize its benefits for the wearer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-left font-medium">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Invite Love Into Your Life?</h2>
          <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
            Our certified Rose Quartz stones are pre-energized and ready to bring love, healing, and peace into your life. 
            Start your transformation today!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 gap-2">
              <ShoppingCart className="w-5 h-5" />
              Shop Rose Quartz
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
              <Phone className="w-5 h-5" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-3 md:hidden z-50">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-pink-600">₹2,999</p>
          </div>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white flex-1">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoseQuartzCollection;