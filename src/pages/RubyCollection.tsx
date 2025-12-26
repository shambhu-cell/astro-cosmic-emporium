import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Sun, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import rubyImage from "@/assets/gemstones/ruby.jpg";

const RubyCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(142);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Rahul M.", location: "Mumbai", time: "2 minutes ago", product: "Burma Ruby 4.25 Ct" },
    { name: "Sunita P.", location: "Delhi", time: "5 minutes ago", product: "Pigeon Blood Ruby 3.85 Ct" },
    { name: "Arun K.", location: "Bangalore", time: "12 minutes ago", product: "Natural Burma Ruby 5.12 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 32, seconds: 18 });

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
      setViewingCount(prev => Math.max(110, prev + Math.floor(Math.random() * 7) - 3));
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
    { id: "rb-burma-4", name: "Burma Pigeon Blood Ruby", price: 95999, originalPrice: 145999, image: rubyImage, rating: 4.9, reviews: 189, weight: "4.25 Carat", origin: "Myanmar (Burma)", certified: true, clarity: "VVS", sku: "RB142922", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "rb-mozambique-5", name: "Mozambique Ruby", price: 55999, originalPrice: 82999, image: rubyImage, rating: 4.9, reviews: 278, weight: "5.12 Carat", origin: "Mozambique", certified: true, clarity: "VVS", sku: "RB78604", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "rb-burma-6", name: "Natural Burma Ruby", price: 125999, originalPrice: 189999, image: rubyImage, rating: 4.9, reviews: 156, weight: "6.35 Carat", origin: "Myanmar (Burma)", certified: true, clarity: "VVS", sku: "RB72497", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "rb-thai-4", name: "Thai Ruby", price: 35999, originalPrice: 54999, image: rubyImage, rating: 4.8, reviews: 234, weight: "4.85 Carat", origin: "Thailand", certified: true, clarity: "VS", sku: "RB112965", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "rb-burma-7", name: "Premium Pigeon Blood Ruby", price: 165999, originalPrice: 249999, image: rubyImage, rating: 4.9, reviews: 98, weight: "7.18 Carat", origin: "Myanmar (Burma)", certified: true, clarity: "VVS", sku: "RB234567", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "rb-african-4", name: "African Ruby", price: 28999, originalPrice: 42999, image: rubyImage, rating: 4.7, reviews: 312, weight: "4.45 Carat", origin: "Africa (Tanzania)", certified: true, clarity: "VS", sku: "RB345678", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "rb-mozambique-8", name: "Premium Mozambique Ruby", price: 89999, originalPrice: 135999, image: rubyImage, rating: 4.9, reviews: 145, weight: "8.25 Carat", origin: "Mozambique", certified: true, clarity: "VVS", sku: "RB456789", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "rb-burma-9", name: "Collector's Burma Ruby", price: 245999, originalPrice: 375999, image: rubyImage, rating: 5.0, reviews: 67, weight: "9.42 Carat", origin: "Myanmar (Burma)", certified: true, clarity: "IF", sku: "RB567890", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Vikram Sharma", location: "Mumbai", rating: 5, text: "I was lacking confidence and facing constant failures. After wearing Ruby on astrologer's advice, my career took off within 45 days! Sun's blessings are transformative!", avatar: "VS", verified: true },
    { name: "Meera Patel", location: "Ahmedabad", rating: 5, text: "Ruby brought me recognition and fame in my field. From being ignored to being the go-to expert - the change was miraculous. Quality from AstroSage is unmatched!", avatar: "MP", verified: true },
    { name: "Rohit Kapoor", location: "Delhi", rating: 5, text: "Manikya restored my father's health and brought vitality back. The government job I was trying for 3 years finally came through. Highly recommended!", avatar: "RK", verified: true },
    { name: "Anjali Gupta", location: "Jaipur", rating: 5, text: "Ruby enhanced my leadership abilities. Got promoted to director level and now command respect everywhere. The pigeon blood quality is exceptional!", avatar: "AG", verified: true },
  ];

  const faqs = [
    { q: "What is Ruby (Manikya)?", a: "Ruby, known as Manikya or Manik in Hindi, is the precious gemstone of Planet Sun (Surya). It belongs to the Corundum family and is second only to Diamond in hardness. The finest rubies display a vivid red color called 'Pigeon Blood' - the most prized variety. Ruby represents authority, power, leadership, and vitality in Vedic astrology." },
    { q: "Who should wear Ruby?", a: "Ruby is highly recommended for Leo (Simha) Rashi natives as Sun is their ruling planet. It's also beneficial for those in leadership positions, government jobs, politics, or those seeking authority and recognition. People with weak Sun in their horoscope experiencing lack of confidence, poor health, or father-related issues should consider wearing Ruby after consultation." },
    { q: "What are the benefits of wearing Ruby?", a: "Ruby offers remarkable benefits: enhanced leadership and authority, government job success, fame and recognition, improved health and vitality (especially heart and bones), confidence and willpower, success in politics and administration, better relationship with father, and spiritual enlightenment. Results typically show within 30-45 days of wearing." },
    { q: "How to identify genuine Ruby?", a: "Genuine Ruby shows a rich, vibrant red color with slight purple or pink undertones. It has natural inclusions (silk) that are visible under magnification. The 'Pigeon Blood' red is the most valuable color. Burma (Myanmar) rubies are considered the finest, followed by Mozambique and Thai rubies. Always buy certified rubies with lab reports." },
    { q: "How to wear Ruby for best results?", a: "Wear Ruby on the ring finger of the right hand, set in gold or copper metal (panch dhatu). The ideal day to wear is Sunday during Shukla Paksha, early morning during sunrise. Energize it by chanting 'Om Suryaya Namah' or 'Om Hreem Suryaya Namah' 108 times. Minimum weight should be 3-5 carats for effective results." },
    { q: "What is the price range of Ruby?", a: "Ruby prices vary significantly based on origin, color, and clarity. Burma Pigeon Blood Rubies (rarest) range from ₹50,000 to ₹5,00,000+ per carat. Mozambique rubies are ₹15,000-₹80,000 per carat. Thai rubies cost ₹8,000-₹40,000 per carat. African rubies are most affordable at ₹5,000-₹20,000 per carat." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-50k": filtered = filtered.filter(p => p.price < 50000); break;
        case "50k-100k": filtered = filtered.filter(p => p.price >= 50000 && p.price < 100000); break;
        case "100k-200k": filtered = filtered.filter(p => p.price >= 100000 && p.price < 200000); break;
        case "above-200k": filtered = filtered.filter(p => p.price >= 200000); break;
      }
    }

    if (weightRange !== "all") {
      switch(weightRange) {
        case "3-5": filtered = filtered.filter(p => parseFloat(p.weight) >= 3 && parseFloat(p.weight) < 5); break;
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
            <span className="font-bold">SUN TRANSIT SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 25% OFF on Burma Pigeon Blood Rubies</span>
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
            <span className="text-foreground font-medium">Ruby (Manikya)</span>
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
                  <Sun className="w-3 h-3 mr-1" />
                  Sun (Surya)
                </Badge>
                <Badge variant="outline" className="border-red-500 text-red-700 dark:text-red-400">
                  Leo (Simha) Rashi
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-amber-500 text-white border-0 animate-pulse">
                  <Crown className="w-3 h-3 mr-1" />
                  King of Gemstones
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Ruby (Manikya) <span className="text-red-600">माणिक्य</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The King of Gemstones representing the mighty Sun, known for leadership, authority, fame, and vitality. 
                  Trusted by 38,000+ customers for life-transforming results.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Leadership & Authority", "Fame & Recognition", "Health & Vitality", "Government Success"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-red-200 dark:border-red-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['V', 'M', 'R', 'A', 'S'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-rose-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold text-foreground">38,000+</span> Happy Customers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(1,879 reviews)</span>
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
                    <span className="text-3xl md:text-4xl font-bold text-foreground">₹10,000</span>
                    <span className="text-lg text-muted-foreground line-through">₹15,000</span>
                    <Badge className="bg-green-500 text-white">33% OFF</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">EMI from ₹833/month | Free Lab Certificate</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2">
                    <Phone className="w-4 h-4" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-red-300 text-red-700 hover:bg-red-50">
                    <Play className="w-4 h-4" />
                    Watch Ruby Guide
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { icon: Shield, text: "GIA/IGI Certified", subtext: "100% Authentic" },
              { icon: Truck, text: "Free Shipping", subtext: "Insured Delivery" },
              { icon: RefreshCcw, text: "7-Day Returns", subtext: "No Questions Asked" },
              { icon: Lock, text: "Secure Payment", subtext: "256-bit SSL" },
              { icon: Headphones, text: "Expert Support", subtext: "24/7 Available" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-center">
                <item.icon className="w-5 h-5 text-red-600" />
                <div className="text-left">
                  <p className="text-sm font-medium">{item.text}</p>
                  <p className="text-xs text-muted-foreground">{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Filter Header */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                {sortedProducts.length} Rubies Available
              </Badge>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                | Showing certified natural rubies only
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[130px] h-9 text-sm">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-50k">Under ₹50K</SelectItem>
                  <SelectItem value="50k-100k">₹50K - ₹1L</SelectItem>
                  <SelectItem value="100k-200k">₹1L - ₹2L</SelectItem>
                  <SelectItem value="above-200k">Above ₹2L</SelectItem>
                </SelectContent>
              </Select>
              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[120px] h-9 text-sm">
                  <SelectValue placeholder="Weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weights</SelectItem>
                  <SelectItem value="3-5">3-5 Carat</SelectItem>
                  <SelectItem value="5-7">5-7 Carat</SelectItem>
                  <SelectItem value="7-9">7-9 Carat</SelectItem>
                  <SelectItem value="9+">9+ Carat</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[130px] h-9 text-sm">
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
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-red-300">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-red-50 to-rose-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <Badge className="bg-red-600 text-white text-xs">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                  {product.certified && (
                    <Badge className="bg-green-600 text-white text-xs">
                      <BadgeCheck className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  )}
                </div>

                {/* Stock Warning */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-red-600 text-white text-xs px-2 py-1.5 rounded flex items-center justify-center gap-1">
                    <Flame className="w-3 h-3 animate-pulse" />
                    Only 1 left in stock!
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-red-600 font-medium mb-1">{product.origin}</p>
                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-muted px-2 py-1 rounded">{product.weight}</span>
                  <span className="bg-muted px-2 py-1 rounded">{product.shape}</span>
                  <span className="bg-muted px-2 py-1 rounded">{product.clarity}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-red-400 text-red-400' : 'text-muted'}`} />
                  ))}
                  <span className="text-sm font-medium ml-1">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-green-600 font-medium">
                    EMI from ₹{Math.round(product.price / 12).toLocaleString()}/mo
                  </p>
                </div>

                {/* CTA */}
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Expert Consultation CTA */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Not Sure Which Ruby is Right for You?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get FREE expert consultation from our certified astrologers. We'll analyze your birth chart and recommend the perfect Ruby for maximum benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="w-5 h-5" />
              Call: +91 95829 08007
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat with Expert
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-2 bg-red-100 text-red-700">Customer Stories</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Real Results from Real Customers</h2>
            <p className="text-muted-foreground">See how Ruby has transformed lives across India</p>
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
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                  {testimonial.verified && (
                    <Badge variant="secondary" className="ml-auto text-xs bg-green-100 text-green-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Ruby Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-2 bg-red-100 text-red-700">Learn More</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">About Ruby (Manikya) - माणिक्य</h2>
            <p className="text-muted-foreground">The gemstone of the mighty Sun (Surya Dev)</p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-red-600" />
                  Astrological Significance
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Ruby represents Sun (Surya), the king of planets and source of life
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Ideal for Leo (Simha) ascendant and those with Sun mahadasha
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Strengthens Sun in 1st, 4th, 5th, 9th, and 10th houses
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Recommended during Sun antardasha for maximum benefits
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-red-600" />
                  How to Wear Ruby
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <strong>Day:</strong> Sunday, during Shukla Paksha
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <strong>Time:</strong> During sunrise (within 1 hour of sunrise)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <strong>Metal:</strong> Gold or Copper (Panch Dhatu)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <strong>Finger:</strong> Ring finger of right hand
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <strong>Mantra:</strong> "Om Suryaya Namah" - 108 times
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-2 bg-red-100 text-red-700">FAQ</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about Ruby</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-background rounded-lg border px-6">
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
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg p-4 md:hidden">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 gap-2">
            <Phone className="w-4 h-4" />
            Call Expert
          </Button>
          <Button className="flex-1 bg-red-600 hover:bg-red-700 gap-2">
            <ShoppingCart className="w-4 h-4" />
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RubyCollection;
