import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Target, Sun, Coins
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import tigersEyeImage from "@/assets/bracelets/tiger-eye.jpg";

const TigersEyeCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(89);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Vikram S.", location: "Mumbai", time: "2 minutes ago", product: "Premium Tiger's Eye 5.25 Ct" },
    { name: "Priya R.", location: "Delhi", time: "5 minutes ago", product: "Natural Tiger Eye 6.18 Ct" },
    { name: "Arjun M.", location: "Bangalore", time: "9 minutes ago", product: "South African Tiger Eye 4.82 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 23, seconds: 45 });

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
    { id: "te-south-africa-4", name: "South African Tiger's Eye", price: 3999, originalPrice: 6999, image: tigersEyeImage, rating: 4.9, reviews: 342, weight: "4.25 Carat", origin: "South Africa", certified: true, clarity: "VVS", sku: "TE142922", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 3 },
    { id: "te-premium-5", name: "Premium Golden Tiger Eye", price: 5499, originalPrice: 8999, image: tigersEyeImage, rating: 4.9, reviews: 287, weight: "5.32 Carat", origin: "South Africa", certified: true, clarity: "VVS", sku: "TE78604", shape: "Cabochon Round", treatment: "Natural Untreated", inStock: 2 },
    { id: "te-golden-6", name: "Natural Golden Tiger Eye", price: 6999, originalPrice: 11999, image: tigersEyeImage, rating: 4.9, reviews: 263, weight: "6.18 Carat", origin: "South Africa", certified: true, clarity: "VVS", sku: "TE72497", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 2 },
    { id: "te-blue-4", name: "Blue Tiger's Eye (Hawk Eye)", price: 4999, originalPrice: 7999, image: tigersEyeImage, rating: 4.8, reviews: 198, weight: "4.65 Carat", origin: "South Africa", certified: true, clarity: "VS", sku: "TE112965", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 4 },
    { id: "te-collectors-7", name: "Collector's Tiger Eye", price: 9999, originalPrice: 15999, image: tigersEyeImage, rating: 4.9, reviews: 128, weight: "7.42 Carat", origin: "South Africa", certified: true, clarity: "VVS", sku: "TE234567", shape: "Cabochon Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "te-red-4", name: "Red Tiger's Eye", price: 4499, originalPrice: 7499, image: tigersEyeImage, rating: 4.8, reviews: 176, weight: "4.28 Carat", origin: "South Africa", certified: true, clarity: "VS", sku: "TE345678", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 3 },
    { id: "te-premium-8", name: "Premium Chatoyant Tiger Eye", price: 12999, originalPrice: 19999, image: tigersEyeImage, rating: 4.9, reviews: 98, weight: "8.15 Carat", origin: "South Africa", certified: true, clarity: "VVS", sku: "TE456789", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "te-rare-9", name: "Rare Multi-Color Tiger Eye", price: 15999, originalPrice: 24999, image: tigersEyeImage, rating: 5.0, reviews: 64, weight: "9.68 Carat", origin: "Australia", certified: true, clarity: "IF", sku: "TE567890", shape: "Cabochon Cushion", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Rohit Kapoor", location: "Mumbai", rating: 5, text: "I was struggling with low confidence and career stagnation. After wearing Tiger's Eye, my focus improved dramatically and I got promoted within 3 months. My decision-making ability has become much sharper!", avatar: "RK", verified: true },
    { name: "Sneha Patel", location: "Ahmedabad", rating: 5, text: "Tiger's Eye helped me overcome my fear of public speaking. Now I lead client meetings confidently. The stone's energy gives me courage and mental clarity. Best investment for personal growth!", avatar: "SP", verified: true },
    { name: "Amit Sharma", location: "Delhi", rating: 5, text: "As an entrepreneur, I needed protection from negative energy and enhanced willpower. Tiger's Eye gave me both. My business decisions are now more confident and profitable.", avatar: "AS", verified: true },
    { name: "Deepika Nair", location: "Kochi", rating: 5, text: "I was facing financial instability and lack of motivation. Tiger's Eye attracted prosperity and boosted my self-discipline. Within 6 months, I cleared all my debts!", avatar: "DN", verified: true },
  ];

  const faqs = [
    { q: "What is Tiger's Eye gemstone?", a: "Tiger's Eye is a chatoyant gemstone that belongs to the quartz family. It displays a remarkable golden-brown color with a silky luster and distinctive cat's-eye effect (chatoyancy). The stone is formed when crocidolite (blue asbestos) is replaced by quartz while retaining its fibrous structure. It's named for its resemblance to a tiger's eye and is considered one of the most powerful stones for courage, willpower, and protection." },
    { q: "Who should wear Tiger's Eye?", a: "Tiger's Eye is beneficial for everyone, especially those seeking confidence, courage, and mental clarity. It's highly recommended for business professionals, entrepreneurs, students, public speakers, and anyone facing challenges in decision-making. People with Sun or Mars-related issues in their birth chart find it particularly helpful. It's also ideal for those working in competitive environments or seeking protection from negative energies." },
    { q: "What are the benefits of Tiger's Eye?", a: "Tiger's Eye offers numerous benefits: boosts confidence and courage, enhances willpower and determination, improves focus and concentration, attracts wealth and prosperity, provides protection from evil eye and negativity, balances emotions and reduces anxiety, enhances creativity and artistic abilities, strengthens the solar plexus chakra, and promotes mental clarity in decision-making." },
    { q: "How to identify genuine Tiger's Eye?", a: "Genuine Tiger's Eye displays a characteristic chatoyancy (cat's-eye effect) that moves across the stone when rotated. Look for natural color variations in golden-brown tones with silk-like luster. Real Tiger's Eye has a hardness of 7 on the Mohs scale and feels cool to touch. Avoid stones that look too uniform or have a plastic-like appearance. Always buy certified stones from reputed sellers." },
    { q: "How to wear Tiger's Eye for maximum benefits?", a: "Tiger's Eye can be worn as a ring on the index finger or ring finger of the right hand, set in gold, silver, or copper. The ideal day to start wearing is Sunday during sunrise (for Sun energy) or Tuesday (for Mars energy). Cleanse the stone in rock salt water overnight before first use. There's no specific mantra required, but you can chant 'Om Suryaya Namah' while wearing it." },
    { q: "What is the price range of Tiger's Eye?", a: "Tiger's Eye is one of the most affordable semi-precious gemstones. Prices range from ₹500 to ₹2,000 per carat for standard quality. Premium South African Tiger's Eye with excellent chatoyancy costs ₹1,500-₃,500 per carat. Rare varieties like Blue Tiger Eye (Hawk Eye) or Red Tiger Eye may command ₹2,000-₅,000 per carat. Collector's pieces with exceptional clarity can go higher." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-5k": filtered = filtered.filter(p => p.price < 5000); break;
        case "5k-8k": filtered = filtered.filter(p => p.price >= 5000 && p.price < 8000); break;
        case "8k-12k": filtered = filtered.filter(p => p.price >= 8000 && p.price < 12000); break;
        case "above-12k": filtered = filtered.filter(p => p.price >= 12000); break;
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
      <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">TIGER EYE MEGA SALE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Flat 40% OFF on All Tiger's Eye</span>
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
            <span className="text-foreground font-medium">Tiger's Eye</span>
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
                  <Sun className="w-3 h-3 mr-1" />
                  Sun & Mars Energy
                </Badge>
                <Badge variant="outline" className="border-amber-500 text-amber-700 dark:text-amber-400">
                  Courage Stone
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Natural
                </Badge>
                <Badge className="bg-orange-500 text-white border-0 animate-pulse">
                  <Coins className="w-3 h-3 mr-1" />
                  Wealth Magnet
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Tiger's Eye <span className="text-amber-600">टाइगर आई</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The powerful stone of courage, willpower, and prosperity. Known as the "Stone of the Mind", 
                  Tiger's Eye enhances focus, attracts wealth, and provides protection from negative energies. 
                  Trusted by 35,000+ customers for personal transformation.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Boosts Confidence", "Attracts Wealth", "Mental Clarity", "Evil Eye Protection"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-amber-500/10 rounded-lg px-3 py-2.5 border border-amber-500/20">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">Ideal for Business, Career & Confidence</p>
                  <p className="text-sm text-muted-foreground">Tiger's Eye is the go-to stone for entrepreneurs, professionals, and anyone seeking success. It's one of the most versatile and affordable protective stones available.</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-amber-200 dark:border-amber-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['V', 'P', 'A', 'D', 'S'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
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
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(1,556 reviews)</span>
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
                    <span className="text-3xl md:text-4xl font-bold text-foreground">₹3,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹6,999</span>
                    <Badge className="bg-green-500 text-white">43% OFF</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Most Affordable Semi-Precious Stone | Free Certification</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: BadgeCheck, text: "Lab Certified", sub: "100% Authentic" },
              { icon: Truck, text: "Free Shipping", sub: "Pan India Delivery" },
              { icon: RefreshCcw, text: "7-Day Returns", sub: "Easy Returns" },
              { icon: Lock, text: "Secure Payment", sub: "100% Safe" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <item.icon className="w-6 h-6 text-amber-600" />
                <span className="font-semibold text-sm">{item.text}</span>
                <span className="text-xs text-muted-foreground">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="sticky top-0 z-40 bg-background border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{sortedProducts.length} Tiger's Eye Gemstones</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                  <SelectItem value="5k-8k">₹5,000 - ₹8,000</SelectItem>
                  <SelectItem value="8k-12k">₹8,000 - ₹12,000</SelectItem>
                  <SelectItem value="above-12k">Above ₹12,000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[140px] h-9">
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
                <SelectTrigger className="w-[140px] h-9">
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
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, idx) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-green-500 text-white text-xs">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                  {idx < 3 && (
                    <Badge className="bg-amber-600 text-white text-xs">Bestseller</Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-white/90 text-xs">
                    <Shield className="w-3 h-3 mr-1" />
                    Certified
                  </Badge>
                </div>
                {/* Stock Progress */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <div className="flex items-center justify-between text-white text-xs mb-1">
                    <span className="flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-amber-400" />
                      Only {product.inStock} left!
                    </span>
                    <span>Selling Fast</span>
                  </div>
                  <Progress value={20 + idx * 10} className="h-1.5 bg-white/30" />
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{product.weight} | {product.origin}</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted'}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-sm">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing the Right Tiger's Eye?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Our gemstone experts will help you select the perfect Tiger's Eye based on your goals - whether it's career success, confidence, or protection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with Expert
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Customer Success Stories</h2>
            <p className="text-muted-foreground">Real transformations from Tiger's Eye wearers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-200 mb-2" />
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  {testimonial.verified && (
                    <Badge variant="outline" className="ml-auto text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              About Tiger's Eye - The Stone of Courage & Prosperity
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Tiger's Eye is a powerful chatoyant gemstone renowned for its stunning golden-brown color and mesmerizing silk-like luster. This remarkable stone has been used for centuries across cultures for protection, courage, and attracting prosperity. The ancient Romans wore Tiger's Eye amulets into battle, believing it granted courage and protection. Today, it remains one of the most popular stones for boosting confidence and mental clarity.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    Key Properties & Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Enhances willpower, courage, and self-confidence
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Attracts wealth, prosperity, and good luck
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Provides powerful protection from negative energies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Improves focus, concentration, and decision-making
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    How to Wear Tiger's Eye
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Finger:</strong> Index or Ring finger of right hand
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Metal:</strong> Gold, Silver, or Copper
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Day:</strong> Sunday (Sun energy) or Tuesday (Mars energy)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Cleansing:</strong> Salt water overnight before first use
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
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

      {/* Fixed Bottom CTA (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-bold">₹3,999</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="border-amber-500 text-amber-600">
              <Phone className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Padding for Fixed CTA */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default TigersEyeCollection;
