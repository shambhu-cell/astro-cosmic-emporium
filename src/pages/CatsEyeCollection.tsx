import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Target, Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import catsEyeImage from "@/assets/gemstones/cats-eye.jpg";

const CatsEyeCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(67);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Suresh K.", location: "Hyderabad", time: "3 minutes ago", product: "Ceylon Cat's Eye 4.15 Ct" },
    { name: "Meena R.", location: "Chennai", time: "7 minutes ago", product: "Premium Lehsunia 5.32 Ct" },
    { name: "Prakash J.", location: "Pune", time: "12 minutes ago", product: "Natural Cat's Eye 6.18 Ct" },
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
      setViewingCount(prev => Math.max(50, prev + Math.floor(Math.random() * 7) - 3));
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
    { id: "ce-ceylon-4", name: "Ceylon Cat's Eye (Lehsunia)", price: 18999, originalPrice: 29999, image: catsEyeImage, rating: 4.9, reviews: 142, weight: "4.15 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "CE142922", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "ce-premium-5", name: "Premium Cat's Eye", price: 28999, originalPrice: 44999, image: catsEyeImage, rating: 4.9, reviews: 187, weight: "5.32 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "CE78604", shape: "Cabochon Round", treatment: "Natural Untreated", inStock: 1 },
    { id: "ce-ceylon-6", name: "Natural Ceylon Lehsunia", price: 38999, originalPrice: 59999, image: catsEyeImage, rating: 4.9, reviews: 163, weight: "6.18 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "CE72497", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "ce-brazilian-4", name: "Brazilian Cat's Eye", price: 12999, originalPrice: 19999, image: catsEyeImage, rating: 4.8, reviews: 218, weight: "4.65 Carat", origin: "Brazil", certified: true, clarity: "VS", sku: "CE112965", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "ce-premium-7", name: "Collector's Ceylon Cat's Eye", price: 52999, originalPrice: 79999, image: catsEyeImage, rating: 4.9, reviews: 78, weight: "7.42 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "CE234567", shape: "Cabochon Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "ce-indian-4", name: "Indian Cat's Eye", price: 9999, originalPrice: 15999, image: catsEyeImage, rating: 4.7, reviews: 289, weight: "4.28 Carat", origin: "India", certified: true, clarity: "VS", sku: "CE345678", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "ce-ceylon-8", name: "Premium Ceylon Lehsunia", price: 68999, originalPrice: 99999, image: catsEyeImage, rating: 4.9, reviews: 98, weight: "8.15 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "CE456789", shape: "Cabochon Oval", treatment: "Natural Untreated", inStock: 1 },
    { id: "ce-collectors-9", name: "Rare Honey Cat's Eye", price: 89999, originalPrice: 139999, image: catsEyeImage, rating: 5.0, reviews: 54, weight: "9.68 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "IF", sku: "CE567890", shape: "Cabochon Cushion", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Rajesh Menon", location: "Kerala", rating: 5, text: "I was suffering from Ketu Mahadasha effects for years. After wearing this Cat's Eye, my intuition became sharper and unexpected financial gains started coming. My spiritual journey also deepened!", avatar: "RM", verified: true },
    { name: "Kavitha Nair", location: "Coimbatore", rating: 5, text: "My astrologer recommended Lehsunia for protection from hidden enemies and sudden losses. The quality from AstroSage is exceptional. I've felt more grounded and protected ever since.", avatar: "KN", verified: true },
    { name: "Anand Kulkarni", location: "Bangalore", rating: 5, text: "Cat's Eye helped me gain psychic abilities and spiritual insights. My meditation practice improved dramatically. The chatoyancy effect in this stone is mesmerizing!", avatar: "AK", verified: true },
    { name: "Lakshmi Sharma", location: "Jaipur", rating: 5, text: "After sudden losses in business, I started wearing Lehsunia. Within 6 months, I recovered my losses and found new opportunities. This gemstone truly protects from unseen dangers.", avatar: "LS", verified: true },
  ];

  const faqs = [
    { q: "What is Cat's Eye (Lehsunia)?", a: "Cat's Eye, known as Lehsunia or Vaidurya in Hindi, is the gemstone of Planet Ketu (South Node). It's a variety of Chrysoberyl that displays a unique optical phenomenon called chatoyancy - a narrow band of light that moves across the stone's surface like a cat's eye. It's one of the most powerful gems for spiritual protection in Vedic astrology." },
    { q: "Who should wear Cat's Eye?", a: "Cat's Eye is highly recommended for those undergoing Ketu Mahadasha or Antardasha, people facing sudden and unexplained losses, those involved in spiritual practices, gambling, speculation, or seeking psychic abilities. It's especially beneficial for those with Ketu in favorable houses and seeking protection from hidden enemies." },
    { q: "What are the benefits of wearing Cat's Eye?", a: "Cat's Eye offers remarkable benefits: protection from hidden enemies and evil eye, guards against sudden losses and accidents, enhances intuition and psychic abilities, success in gambling and speculation, spiritual growth and enlightenment, relief from mysterious diseases, and protection during travel. It's known as the 'gem of psychic protection'." },
    { q: "How to identify genuine Cat's Eye?", a: "Genuine Cat's Eye shows a sharp, well-defined band of light (chatoyancy) that moves fluidly across the cabochon surface. Ceylon stones show honey-golden to greenish-yellow colors and are most valued. The 'eye' should open and close when rotated. Buy only certified stones from reputed labs like GIA, IGI, or GRS." },
    { q: "How to wear Cat's Eye for best results?", a: "Wear Cat's Eye on the middle finger of the right hand, set in silver or gold metal. The ideal day to wear is Tuesday or Saturday during Ketu Hora. Energize it by chanting 'Om Ketave Namah' 108 times. Minimum weight should be 3-5 carats. The stone should touch your skin for best astrological effects." },
    { q: "What is the price range of Cat's Eye?", a: "Cat's Eye prices vary based on origin and chatoyancy quality. Ceylon Cat's Eye (finest quality) ranges from ₹3,000 to ₹15,000 per carat. Brazilian stones are ₹1,500-₅,000 per carat. Indian cat's eye is most affordable at ₹800-₃,000 per carat. Sharp, milk-and-honey chatoyancy commands premium prices." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-20k": filtered = filtered.filter(p => p.price < 20000); break;
        case "20k-40k": filtered = filtered.filter(p => p.price >= 20000 && p.price < 40000); break;
        case "40k-70k": filtered = filtered.filter(p => p.price >= 40000 && p.price < 70000); break;
        case "above-70k": filtered = filtered.filter(p => p.price >= 70000); break;
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
      <div className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">KETU TRANSIT SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 35% OFF on Ceylon Cat's Eye</span>
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
            <span className="text-foreground font-medium">Cat's Eye (Lehsunia)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-cyan-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-emerald-600 text-white border-0">
                  <Compass className="w-3 h-3 mr-1" />
                  Ketu (South Node)
                </Badge>
                <Badge variant="outline" className="border-emerald-500 text-emerald-700 dark:text-emerald-400">
                  Spiritual Protection
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-purple-500 text-white border-0 animate-pulse">
                  <Eye className="w-3 h-3 mr-1" />
                  Psychic Powers
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Cat's Eye (Lehsunia) <span className="text-emerald-600">लहसुनिया</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The mystical gemstone of Ketu, known for psychic protection, intuition enhancement, and guarding against hidden enemies. 
                  Trusted by 24,000+ customers for spiritual transformation.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Psychic Protection", "Enhanced Intuition", "Guards from Losses", "Spiritual Growth"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 text-sm">Ideal for Ketu Mahadasha & Spiritual Seekers</p>
                  <p className="text-sm text-muted-foreground">Cat's Eye is highly effective during Ketu periods and for those seeking spiritual enlightenment. Our experts provide FREE consultation to check suitability.</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-emerald-200 dark:border-emerald-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['R', 'K', 'A', 'L', 'S'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold text-foreground">24,000+</span> Happy Customers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(1,129 reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full animate-pulse">
                  <Eye className="w-4 h-4" />
                  <span className="font-semibold">{viewingCount} people viewing now</span>
                </div>
              </div>

              {/* Price & CTA Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">₹9,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹15,999</span>
                    <Badge className="bg-green-500 text-white">37% OFF</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">EMI from ₹833/month | Free Lab Certificate</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
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
              { icon: BadgeCheck, text: "IGI/GRS Certified", sub: "100% Authentic" },
              { icon: Truck, text: "Free Shipping", sub: "Pan India Delivery" },
              { icon: RefreshCcw, text: "7-Day Returns", sub: "Easy Returns" },
              { icon: Lock, text: "Secure Payment", sub: "100% Safe" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <item.icon className="w-6 h-6 text-emerald-600" />
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
              <span className="text-sm font-medium">{sortedProducts.length} Cat's Eye Gemstones</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-20k">Under ₹20,000</SelectItem>
                  <SelectItem value="20k-40k">₹20,000 - ₹40,000</SelectItem>
                  <SelectItem value="40k-70k">₹40,000 - ₹70,000</SelectItem>
                  <SelectItem value="above-70k">Above ₹70,000</SelectItem>
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
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-300">
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
                    <Badge className="bg-emerald-600 text-white text-xs">Bestseller</Badge>
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
                  <Progress value={15 + idx * 10} className="h-1.5 bg-white/30" />
                </div>
              </div>
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-emerald-600 transition-colors">
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
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Unsure Which Cat's Eye is Right for You?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Our expert astrologers will analyze your birth chart and recommend the perfect Cat's Eye gemstone for your spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
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
            <p className="text-muted-foreground">Real transformations from Cat's Eye wearers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-emerald-200 mb-2" />
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
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
              About Cat's Eye (Lehsunia) - The Mystical Gem of Ketu
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Cat's Eye, known as Lehsunia or Vaidurya, is the sacred gemstone of Planet Ketu (South Node of Moon) in Vedic Astrology. This mesmerizing gem displays a unique optical phenomenon called "chatoyancy" - a narrow band of light that moves across the stone's surface, resembling a cat's eye. This mystical effect makes it one of the most sought-after gemstones for spiritual protection.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    Astrological Significance
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Ketu represents spirituality, detachment, and moksha (liberation)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Enhances psychic abilities and intuition
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Protects from sudden losses, accidents, and hidden enemies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Brings success in gambling, speculation, and occult sciences
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    How to Wear Cat's Eye
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Finger:</strong> Middle finger of right hand
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Metal:</strong> Silver or Gold (Panchdhatu)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Day:</strong> Tuesday or Saturday during Ketu Hora
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Mantra:</strong> "Om Ketave Namah" (108 times)
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
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold">₹9,999</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-600">
              <Phone className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
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

export default CatsEyeCollection;
