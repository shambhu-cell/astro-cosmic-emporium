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
import hessoniteImage from "@/assets/gemstones/hessonite.jpg";

const HessoniteCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(89);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Rohit M.", location: "Delhi", time: "2 minutes ago", product: "Ceylon Hessonite 4.25 Ct" },
    { name: "Priya S.", location: "Mumbai", time: "6 minutes ago", product: "Premium Gomed 5.12 Ct" },
    { name: "Ankur K.", location: "Bangalore", time: "11 minutes ago", product: "Natural Hessonite 6.35 Ct" },
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
    { id: "hs-ceylon-4", name: "Ceylon Hessonite (Gomed)", price: 12999, originalPrice: 19999, image: hessoniteImage, rating: 4.9, reviews: 156, weight: "4.25 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS142922", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "hs-premium-5", name: "Premium Hessonite", price: 18999, originalPrice: 28999, image: hessoniteImage, rating: 4.9, reviews: 203, weight: "5.12 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS78604", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "hs-ceylon-6", name: "Natural Ceylon Gomed", price: 25999, originalPrice: 39999, image: hessoniteImage, rating: 4.9, reviews: 178, weight: "6.35 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS72497", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "hs-african-4", name: "African Hessonite", price: 8999, originalPrice: 13999, image: hessoniteImage, rating: 4.8, reviews: 234, weight: "4.85 Carat", origin: "Africa (Tanzania)", certified: true, clarity: "VS", sku: "HS112965", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "hs-premium-7", name: "Collector's Ceylon Gomed", price: 35999, originalPrice: 54999, image: hessoniteImage, rating: 4.9, reviews: 89, weight: "7.18 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS234567", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "hs-indian-4", name: "Indian Hessonite", price: 6999, originalPrice: 10999, image: hessoniteImage, rating: 4.7, reviews: 312, weight: "4.45 Carat", origin: "India", certified: true, clarity: "VS", sku: "HS345678", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "hs-ceylon-8", name: "Premium Ceylon Hessonite", price: 45999, originalPrice: 68999, image: hessoniteImage, rating: 4.9, reviews: 112, weight: "8.25 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "HS456789", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "hs-collectors-9", name: "Rare Cinnamon Hessonite", price: 65999, originalPrice: 99999, image: hessoniteImage, rating: 5.0, reviews: 67, weight: "9.42 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "IF", sku: "HS567890", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Aditya Sharma", location: "Delhi", rating: 5, text: "I was suffering from Rahu Mahadasha effects for years. After wearing this Hessonite, my confusion cleared within 3 months. Got promoted at work and my health improved dramatically!", avatar: "AS", verified: true },
    { name: "Rashmi Patel", location: "Ahmedabad", rating: 5, text: "My astrologer recommended Gomed for Kaal Sarp Dosha. The quality from AstroSage is unmatched. I've seen remarkable positive changes in my career and relationships.", avatar: "RP", verified: true },
    { name: "Vikram Singh", location: "Chandigarh", rating: 5, text: "Working abroad was my dream but kept failing. Started wearing Hessonite and within 6 months, I got my visa approved and an amazing job offer from UK. Truly life-changing!", avatar: "VS", verified: true },
    { name: "Sneha Gupta", location: "Pune", rating: 5, text: "Hessonite helped me overcome severe anxiety and confusion. My decision-making improved and I finally got clarity in life. The stone quality is exceptional!", avatar: "SG", verified: true },
  ];

  const faqs = [
    { q: "What is Hessonite (Gomed)?", a: "Hessonite, known as Gomed in Hindi, is the gemstone of Planet Rahu (North Node). It belongs to the Grossular Garnet family and is known for its distinctive honey-brown to cinnamon color with a characteristic 'treacle' effect. It's one of the most important gems in Vedic astrology for pacifying Rahu's malefic effects." },
    { q: "Who should wear Hessonite?", a: "Hessonite is highly recommended for those undergoing Rahu Mahadasha or Antardasha, suffering from Kaal Sarp Dosha, or facing sudden obstacles, confusion, and failures. It's especially beneficial for Aquarius ascendant natives and those seeking success in foreign lands, research, politics, or unconventional fields." },
    { q: "What are the benefits of wearing Hessonite?", a: "Hessonite offers remarkable benefits: removes obstacles and confusion, success in foreign lands and abroad opportunities, career growth in unconventional fields, protection from enemies and evil eye, mental clarity and focus, relief from phobias and addictions, and success in research, politics, and technology sectors." },
    { q: "How to identify genuine Hessonite?", a: "Genuine Hessonite has a honey-brown to cinnamon color with a characteristic 'treacle' or 'roiled' effect (swirling patterns inside). Ceylon (Sri Lanka) hessonites are considered the finest. The stone should be transparent with good luster. Always buy certified stones from reputed labs like GIA, IGI, or GRS." },
    { q: "How to wear Hessonite for best results?", a: "Wear Hessonite on the middle finger of the right hand, set in silver or ashtadhatu metal. The ideal day to wear is Saturday during Rahu Kaal or after sunset. Energize it by chanting 'Om Raam Rahave Namah' 108 times. Minimum weight should be 3-5 carats for effective results." },
    { q: "What is the price range of Hessonite?", a: "Hessonite prices vary based on origin and quality. Ceylon Hessonites (finest quality) range from ₹1,500 to ₹8,000 per carat. African stones are ₹800-₹3,000 per carat. Indian hessonites are most affordable at ₹500-₹2,000 per carat. The 'cinnamon' color variety commands premium prices." },
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
            <span className="font-bold">RAHU TRANSIT SPECIAL</span>
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
            <button onClick={() => navigate('/')} className="hover:text-foreground">Home</button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => navigate('/gemstones')} className="hover:text-foreground">Gemstones</button>
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
                  Rahu (North Node)
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
                  The powerful gemstone of Rahu, known for removing obstacles, success in foreign lands, and mental clarity. 
                  Trusted by 28,000+ customers for life-transforming results.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Removes Obstacles", "Foreign Success", "Mental Clarity", "Rahu Protection"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">Ideal for Rahu Mahadasha & Kaal Sarp Dosha</p>
                  <p className="text-sm text-muted-foreground">Hessonite is highly effective during Rahu periods. Our experts provide FREE consultation to check suitability.</p>
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
                    <span className="text-3xl md:text-4xl font-bold text-foreground">₹6,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹10,999</span>
                    <Badge className="bg-green-500 text-white">36% OFF</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">EMI from ₹583/month | Free Lab Certificate</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white gap-2">
                    <Phone className="w-4 h-4" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-amber-300 text-amber-700 hover:bg-amber-50">
                    <Play className="w-4 h-4" />
                    Watch Gomed Guide
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
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: Shield, text: "GIA/IGI Certified" },
              { icon: Truck, text: "Free Insured Shipping" },
              { icon: RefreshCcw, text: "7-Day Returns" },
              { icon: Lock, text: "Secure Payment" },
              { icon: Headphones, text: "Expert Support" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-amber-600" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters & Product Grid */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold">Hessonite Collection</h2>
            <p className="text-sm text-muted-foreground">{sortedProducts.length} premium stones available</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Price Range" />
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
              <SelectTrigger className="w-[150px]">
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
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-amber-200/50 hover:border-amber-400/50">
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-orange-50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  <Badge className="bg-red-500 text-white text-xs">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                  <Badge className="bg-amber-500 text-white text-xs animate-pulse">
                    Only {product.inStock} left!
                  </Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="outline" className="bg-background/90 text-xs">
                    <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                    Certified
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Origin & Weight */}
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">{product.origin}</Badge>
                  <Badge variant="outline" className="text-xs">{product.weight}</Badge>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>

                {/* Stock Progress */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-red-600 font-medium">High Demand!</span>
                    <span className="text-muted-foreground">{product.inStock} left</span>
                  </div>
                  <Progress value={15} className="h-1.5" />
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-amber-600">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                </div>

                {/* CTA */}
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Hessonite Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Wear Hessonite (Gomed)?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Removes Obstacles", desc: "Clears path to success by removing hidden barriers and enemies" },
              { icon: TrendingUp, title: "Career Growth", desc: "Rapid advancement especially in research, politics & technology" },
              { icon: Crown, title: "Foreign Success", desc: "Excellent for abroad opportunities and international business" },
              { icon: Zap, title: "Mental Clarity", desc: "Removes confusion, enhances focus and decision-making" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Customer Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 border-amber-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  {testimonial.verified && (
                    <Badge className="ml-auto bg-green-500 text-white text-xs">Verified</Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-4">
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

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
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

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 AstroSage. All rights reserved. | Certified Gemstones with Lab Reports</p>
        </div>
      </footer>
    </div>
  );
};

export default HessoniteCollection;
