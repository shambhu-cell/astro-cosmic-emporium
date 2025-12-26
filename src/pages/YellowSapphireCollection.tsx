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
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

const YellowSapphireCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(127);
  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Priya M.", location: "Mumbai", time: "2 minutes ago", product: "Ceylon Yellow Sapphire 4.52 Ct" },
    { name: "Rahul S.", location: "Delhi", time: "5 minutes ago", product: "Premium Yellow Sapphire 5.21 Ct" },
    { name: "Anjali K.", location: "Bangalore", time: "12 minutes ago", product: "Golden Ceylon Sapphire 6.34 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 34, seconds: 56 });
  const [stockLevels] = useState({
    "ys-ceylon-3": 3,
    "ys-ceylon-4": 5,
    "ys-ceylon-5": 2,
    "ys-bangkok-4": 8,
    "ys-ceylon-6": 1,
    "ys-african-3": 6,
    "ys-ceylon-7": 4,
    "ys-premium-8": 2,
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
      setViewingCount(prev => Math.max(100, prev + Math.floor(Math.random() * 5) - 2));
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
    { id: "ys-ceylon-3", name: "Ceylon Yellow Sapphire", price: 10999, originalPrice: 15999, image: yellowSapphireImage, rating: 4.9, reviews: 289, weight: "3.15 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS142922", shape: "Oval", treatment: "Natural Untreated", inStock: 3 },
    { id: "ys-ceylon-4", name: "Ceylon Yellow Sapphire", price: 14999, originalPrice: 21999, image: yellowSapphireImage, rating: 4.8, reviews: 234, weight: "4.52 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS78604", shape: "Cushion", treatment: "Natural Untreated", inStock: 5 },
    { id: "ys-ceylon-5", name: "Premium Yellow Sapphire", price: 19999, originalPrice: 29999, image: yellowSapphireImage, rating: 4.9, reviews: 198, weight: "5.21 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS72497", shape: "Oval", treatment: "Natural Untreated", inStock: 2 },
    { id: "ys-bangkok-4", name: "Bangkok Yellow Sapphire", price: 8999, originalPrice: 13999, image: yellowSapphireImage, rating: 4.7, reviews: 176, weight: "4.08 Carat", origin: "Thailand (Bangkok)", certified: true, clarity: "VS", sku: "YS112965", shape: "Oval", treatment: "Natural Untreated", inStock: 8 },
    { id: "ys-ceylon-6", name: "Golden Ceylon Sapphire", price: 26999, originalPrice: 39999, image: yellowSapphireImage, rating: 4.9, reviews: 145, weight: "6.34 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS234567", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "ys-african-3", name: "African Yellow Sapphire", price: 7999, originalPrice: 11999, image: yellowSapphireImage, rating: 4.8, reviews: 203, weight: "3.45 Carat", origin: "Africa", certified: true, clarity: "VS", sku: "YS345678", shape: "Oval", treatment: "Natural Untreated", inStock: 6 },
    { id: "ys-ceylon-7", name: "Royal Ceylon Sapphire", price: 32999, originalPrice: 48999, image: yellowSapphireImage, rating: 4.9, reviews: 167, weight: "7.12 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS456789", shape: "Oval", treatment: "Natural Untreated", inStock: 4 },
    { id: "ys-premium-8", name: "Premium Canary Sapphire", price: 45999, originalPrice: 65999, image: yellowSapphireImage, rating: 4.9, reviews: 89, weight: "8.25 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "IF", sku: "YS567890", shape: "Cushion", treatment: "Natural Untreated", inStock: 2 },
  ];

  const testimonials = [
    { name: "Suresh Kumar", location: "Chennai", rating: 5, text: "I was struggling in my business for 3 years. After wearing Yellow Sapphire as per astrologer's advice, I got a major contract within 45 days. Amazing results!", avatar: "SK", verified: true },
    { name: "Meera Sharma", location: "Jaipur", rating: 5, text: "Got engaged within 6 months of wearing Pukhraj. My astrologer said Jupiter was weak in my chart. This stone changed my life!", avatar: "MS", verified: true },
    { name: "Rajesh Patel", location: "Ahmedabad", rating: 5, text: "Best quality Yellow Sapphire with genuine certification. The expert consultation helped me choose the right stone. Highly recommended!", avatar: "RP", verified: true },
    { name: "Anita Gupta", location: "Lucknow", rating: 5, text: "My son was not performing well in studies. After wearing this stone, he topped his class. Jupiter's blessings are real!", avatar: "AG", verified: true },
  ];

  const faqs = [
    { q: "What is Yellow Sapphire (Pukhraj)?", a: "Yellow Sapphire, known as Pukhraj in Hindi, is the gemstone of Planet Jupiter (Guru). It's one of the most auspicious stones in Vedic astrology, bringing wisdom, prosperity, marital happiness, and good fortune to the wearer. It belongs to the Corundum family and is second only to Diamond in hardness." },
    { q: "Who should wear Yellow Sapphire?", a: "Yellow Sapphire is highly recommended for Sagittarius (Dhanu) and Pisces (Meen) Rashi natives. It's also beneficial for those seeking marriage, students wanting academic success, business professionals seeking growth, and anyone with a weak Jupiter in their horoscope. However, consulting an astrologer before wearing is essential." },
    { q: "What are the benefits of wearing Yellow Sapphire?", a: "Yellow Sapphire brings multiple benefits: attracts wealth and prosperity, helps find a suitable life partner, enhances wisdom and academic success, promotes career growth, improves health (especially liver and digestive system), and provides spiritual growth. Results can be seen within 30-45 days of wearing." },
    { q: "How to wear Yellow Sapphire for best results?", a: "Wear Yellow Sapphire on the index finger of the right hand, set in gold metal. The ideal day to wear is Thursday during Shukla Paksha (waxing moon). Wake up early, take a bath, and chant 'Om Graam Greem Graum Sah Guruve Namah' 108 times before wearing. Minimum weight should be 1/10th of your body weight in carats." },
    { q: "What is the price range of Yellow Sapphire?", a: "Yellow Sapphire prices vary based on origin, color, clarity, and treatment. Ceylon (Sri Lanka) Yellow Sapphires range from ₹5,000 to ₹50,000 per carat. Bangkok stones are more affordable at ₹3,000-₹25,000 per carat. Premium unheated stones with excellent color can go up to ₹1,50,000 per carat." },
    { q: "How to identify original Yellow Sapphire?", a: "Original Yellow Sapphire will have natural inclusions visible under magnification. It will be cold to touch initially but warm up quickly. Genuine stones have brilliant luster and don't have air bubbles. Always buy certified stones from reputable sellers with lab certificates from GIA, IGI, or recognized Indian labs." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-10k": filtered = filtered.filter(p => p.price < 10000); break;
        case "10k-20k": filtered = filtered.filter(p => p.price >= 10000 && p.price < 20000); break;
        case "20k-35k": filtered = filtered.filter(p => p.price >= 20000 && p.price < 35000); break;
        case "above-35k": filtered = filtered.filter(p => p.price >= 35000); break;
      }
    }

    if (weightRange !== "all") {
      switch(weightRange) {
        case "3-4": filtered = filtered.filter(p => parseFloat(p.weight) >= 3 && parseFloat(p.weight) < 4); break;
        case "4-5": filtered = filtered.filter(p => parseFloat(p.weight) >= 4 && parseFloat(p.weight) < 5); break;
        case "5-7": filtered = filtered.filter(p => parseFloat(p.weight) >= 5 && parseFloat(p.weight) < 7); break;
        case "7+": filtered = filtered.filter(p => parseFloat(p.weight) >= 7); break;
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
      <div className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">JUPITER TRANSIT SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 15% OFF on all Yellow Sapphires</span>
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
            <span className="text-foreground font-medium">Yellow Sapphire (Pukhraj)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-yellow-50 via-amber-50/50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-yellow-500 text-white border-0">
                  <Sun className="w-3 h-3 mr-1" />
                  Jupiter (Guru)
                </Badge>
                <Badge variant="outline" className="border-yellow-500 text-yellow-700 dark:text-yellow-400">
                  Sagittarius & Pisces
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
                  Yellow Sapphire (Pukhraj) <span className="text-yellow-600">पुखराज</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The most auspicious gemstone of Jupiter, bringing wisdom, wealth, marital bliss, and divine blessings. 
                  Trusted by 50,000+ customers for life-changing results.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Prosperity & Wealth", "Marriage Happiness", "Academic Success", "Career Growth"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-yellow-200 dark:border-yellow-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['R', 'P', 'A', 'S', 'M'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                          {letter}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold text-foreground">50,000+</span> Happy Customers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm font-medium ml-1">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(2,847 reviews)</span>
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
                    <span className="text-3xl font-bold text-yellow-600">₹7,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹11,999</span>
                    <Badge className="bg-green-500 text-white">Save 33%</Badge>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50" onClick={() => navigate('/gemstone-calculator')}>
                    <Gem className="w-4 h-4 mr-2" />
                    Check If Pukhraj Suits You
                  </Button>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xl italic text-center text-muted-foreground">
                "Embrace the blessings of Jupiter for unlimited prosperity."
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
                  <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                  <SelectItem value="10k-20k">₹10,000 - ₹20,000</SelectItem>
                  <SelectItem value="20k-35k">₹20,000 - ₹35,000</SelectItem>
                  <SelectItem value="above-35k">Above ₹35,000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weights</SelectItem>
                  <SelectItem value="3-4">3-4 Carat</SelectItem>
                  <SelectItem value="4-5">4-5 Carat</SelectItem>
                  <SelectItem value="5-7">5-7 Carat</SelectItem>
                  <SelectItem value="7+">7+ Carat</SelectItem>
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
          <h2 className="text-xl font-bold">Premium Yellow Sapphire Collection</h2>
          <p className="text-muted-foreground">Hand-picked, certified stones for maximum astrological benefits</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product, idx) => (
            <Card 
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-yellow-500/50 relative"
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
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">
                      <Crown className="w-3 h-3 mr-1" />
                      Editor's Choice
                    </Badge>
                  )}
                  {idx === 1 && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Bestseller
                    </Badge>
                  )}
                  {idx === 2 && (
                    <Badge className="bg-purple-500 hover:bg-purple-600 text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>

                {/* Image */}
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
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
                    <Badge className="bg-yellow-500 text-white text-xs font-bold">
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
                  <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-yellow-600 transition-colors">
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
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg md:text-xl font-bold text-yellow-600">
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
                  <Button className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-white" size="sm">
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
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Not Sure Which Yellow Sapphire to Choose?</h3>
              <p className="opacity-90">Get FREE expert consultation from our certified astrologers with 21+ years experience</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
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
            <Badge className="mb-3 bg-yellow-500/10 text-yellow-700 border-yellow-500/30">
              <ThumbsUp className="w-3 h-3 mr-1" />
              Customer Success Stories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Real Results from Real Customers</h2>
            <p className="text-muted-foreground mt-2">See how Yellow Sapphire changed their lives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center text-white font-bold">
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
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Yellow Sapphire */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Everything About Yellow Sapphire (Pukhraj)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-yellow-500" />
                Astrological Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Planet</span>
                  <span className="font-medium">Jupiter (Guru/Brihaspati)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Zodiac Signs</span>
                  <span className="font-medium">Sagittarius & Pisces</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Element</span>
                  <span className="font-medium">Fire (Agni)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Chakra</span>
                  <span className="font-medium">Solar Plexus (Manipura)</span>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Gem className="w-5 h-5 text-yellow-500" />
                How to Wear
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Metal</span>
                  <span className="font-medium">Gold (Recommended)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Finger</span>
                  <span className="font-medium">Index Finger (Right Hand)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Day & Time</span>
                  <span className="font-medium">Thursday, Sunrise</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Mantra</span>
                  <span className="font-medium text-xs">Om Graam Greem Graum...</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Benefits of Yellow Sapphire
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Wealth & Prosperity", desc: "Attracts financial abundance and business opportunities" },
                { title: "Marriage Bliss", desc: "Strengthens relationships and attracts suitable life partners" },
                { title: "Academic Success", desc: "Enhances wisdom, learning ability, and intellectual pursuits" },
                { title: "Career Growth", desc: "Promotes professional advancement and recognition" },
                { title: "Good Health", desc: "Improves liver health and digestive system" },
                { title: "Spiritual Growth", desc: "Enhances spiritual awareness and divine blessings" },
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
          <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600">
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

export default YellowSapphireCollection;
