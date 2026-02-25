import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ArrowRight, Truck, RefreshCcw, BadgeCheck, MapPin, Scale, Gem, 
  Calendar, Moon, Timer, ShoppingCart, Gift, Flame, Crown, 
  ThumbsUp, Quote, Play, ChevronRight, AlertTriangle, Percent,
  Lock, CreditCard, Package, Headphones, Info, UserCheck, Sparkle, BookOpen, HelpCircle, Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Helmet } from "react-helmet";

const CitrineCollection = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(89);
  const [activeTab, setActiveTab] = useState("products");

  const navigationTabs = [
    { id: "products", label: "Products", icon: Gem },
    { id: "about", label: "About Citrine", icon: Info },
    { id: "who-should-wear", label: "Who Should Wear", icon: UserCheck },
    { id: "benefits", label: "Benefits", icon: Sparkle },
    { id: "how-to-wear", label: "How to Wear", icon: BookOpen },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
  ];

  const [recentBuyers, setRecentBuyers] = useState([
    { name: "Meera S.", location: "Mumbai", time: "5 minutes ago", product: "Natural Citrine 6.25 Ct" },
    { name: "Rohit P.", location: "Delhi", time: "12 minutes ago", product: "Brazilian Citrine 4.50 Ct" },
    { name: "Anita G.", location: "Bangalore", time: "18 minutes ago", product: "Golden Citrine 7.10 Ct" },
  ]);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 30, seconds: 45 });

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

  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => Math.max(60, prev + Math.floor(Math.random() * 7) - 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const citrineImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop";

  const products = [
    { id: "ct-brazilian-4", name: "Natural Brazilian Citrine", price: 4999, originalPrice: 8999, image: citrineImage, rating: 4.9, reviews: 234, weight: "4.25 Carat", origin: "Brazil", certified: true, clarity: "VVS", sku: "CT142901", shape: "Oval", treatment: "Natural Untreated", inStock: 3 },
    { id: "ct-golden-5", name: "Golden Citrine", price: 6999, originalPrice: 11999, image: citrineImage, rating: 4.8, reviews: 189, weight: "5.50 Carat", origin: "Brazil", certified: true, clarity: "VVS", sku: "CT78602", shape: "Cushion", treatment: "Natural Untreated", inStock: 5 },
    { id: "ct-madeira-6", name: "Madeira Citrine", price: 12999, originalPrice: 19999, image: citrineImage, rating: 4.9, reviews: 156, weight: "6.25 Carat", origin: "Brazil (Madeira)", certified: true, clarity: "IF", sku: "CT72493", shape: "Oval", treatment: "Natural Untreated", inStock: 2 },
    { id: "ct-african-4", name: "African Citrine", price: 3499, originalPrice: 5999, image: citrineImage, rating: 4.7, reviews: 312, weight: "4.10 Carat", origin: "Africa (Zambia)", certified: true, clarity: "VS", sku: "CT112964", shape: "Round", treatment: "Natural Untreated", inStock: 8 },
    { id: "ct-honey-7", name: "Honey Citrine", price: 8999, originalPrice: 14999, image: citrineImage, rating: 4.8, reviews: 145, weight: "7.34 Carat", origin: "Brazil", certified: true, clarity: "VVS", sku: "CT234565", shape: "Pear", treatment: "Natural Untreated", inStock: 1 },
    { id: "ct-lemon-3", name: "Lemon Citrine", price: 2999, originalPrice: 4999, image: citrineImage, rating: 4.6, reviews: 276, weight: "3.45 Carat", origin: "India", certified: true, clarity: "VS", sku: "CT345676", shape: "Oval", treatment: "Natural Untreated", inStock: 6 },
    { id: "ct-premium-8", name: "Premium Golden Citrine", price: 15999, originalPrice: 24999, image: citrineImage, rating: 4.9, reviews: 98, weight: "8.12 Carat", origin: "Brazil", certified: true, clarity: "IF", sku: "CT456787", shape: "Cushion", treatment: "Natural Untreated", inStock: 1 },
    { id: "ct-collector-10", name: "Collector's Madeira Citrine", price: 25999, originalPrice: 39999, image: citrineImage, rating: 5.0, reviews: 45, weight: "10.25 Carat", origin: "Brazil (Madeira)", certified: true, clarity: "IF", sku: "CT567898", shape: "Oval", treatment: "Natural Untreated", inStock: 1 },
  ];

  const testimonials = [
    { name: "Pooja Sharma", location: "Jaipur", rating: 5, text: "My business was suffering huge losses for 2 years. After wearing Citrine on astrologer's advice, my revenue doubled in just 3 months! It truly is the merchant's stone.", avatar: "PS", verified: true },
    { name: "Rahul Gupta", location: "Mumbai", rating: 5, text: "Citrine completely changed my financial luck. Got unexpected inheritance and my investments started giving amazing returns. Quality from AstroSage is outstanding!", avatar: "RG", verified: true },
    { name: "Deepa Nair", location: "Kochi", rating: 5, text: "Was struggling with low confidence and negativity. Citrine brought so much positivity and clarity in my life. I feel more energetic and focused than ever!", avatar: "DN", verified: true },
    { name: "Suresh Patel", location: "Ahmedabad", rating: 5, text: "Wearing Citrine for Sade Sati relief. All the financial obstacles are clearing up one by one. Genuine certified stone with excellent color. Highly recommend AstroSage!", avatar: "SP", verified: true },
  ];

  const faqs = [
    { q: "What is Citrine (Sunela) gemstone?", a: "Citrine, known as Sunela in Hindi, is a beautiful golden-yellow variety of Quartz. It is one of the most popular gemstones for attracting wealth, abundance, and prosperity. Known as the 'Merchant's Stone' or 'Success Stone', Citrine is associated with the planet Jupiter (Guru/Brihaspati) in Vedic astrology. Its warm golden hues range from pale yellow to deep amber-orange, with the most valued being the deep golden 'Madeira' variety from Brazil." },
    { q: "Who should wear Citrine gemstone?", a: "Citrine is highly beneficial for Sagittarius (Dhanu) and Pisces (Meen) Rashi natives as it represents Jupiter. It is also excellent for business owners, entrepreneurs, sales professionals, and anyone seeking financial growth. People going through Jupiter Mahadasha or Antardasha benefit greatly. Unlike some gemstones, Citrine is considered safe for almost everyone and rarely has adverse effects, making it an ideal choice for beginners." },
    { q: "What are the benefits of wearing Citrine?", a: "Citrine offers remarkable benefits: attracts wealth, abundance, and financial prosperity; boosts confidence, creativity, and willpower; enhances business success and career growth; promotes positive energy and dispels negativity; improves digestion and metabolism; strengthens the Solar Plexus Chakra (Manipura); aids in manifestation and goal achievement; and provides protection against negative energies. It is one of the few gemstones that does not accumulate negative energy." },
    { q: "How to identify natural Citrine vs heat-treated?", a: "Natural Citrine has a pale to moderate yellow color with subtle variations, while heat-treated Amethyst (sold as Citrine) shows a uniform deep orange-red color. Natural Citrine has a smoky undertone, whereas treated stones appear overly saturated. Check for dichroism — natural Citrine shows faint color variation when viewed from different angles. Always buy from certified dealers like AstroSage who provide lab certificates confirming natural origin." },
    { q: "How to wear Citrine for best astrological results?", a: "Wear Citrine on the index finger (Tarjani) of the right hand, set in gold or Panchdhatu. The ideal day is Thursday during Shukla Paksha (waxing moon), preferably during Jupiter Hora. Energize it by chanting 'Om Gram Greem Groum Sah Gurave Namah' 108 times before wearing. Minimum weight should be 3-5 carats for effective results. Dip in Gangajal or raw milk overnight before first wear." },
    { q: "What is the price of natural Citrine in India?", a: "Natural Citrine prices vary based on origin, color, and clarity. Lemon Citrine (light yellow) costs ₹500-₹2,000 per carat. Golden Citrine ranges from ₹1,500-₹5,000 per carat. Premium Madeira Citrine (deep golden-orange) commands ₹3,000-₹10,000 per carat. Collector-grade large stones above 8 carats can go up to ₹15,000+ per carat. Always ensure certification from reputed labs." },
    { q: "Can Citrine be worn with other gemstones?", a: "Yes! Citrine pairs excellently with Yellow Sapphire (Pukhraj) for amplified Jupiter benefits. It also works well with Green Emerald for Mercury-Jupiter synergy (great for business), and Rose Quartz for love and abundance together. Avoid wearing Citrine with Blue Sapphire or Hessonite as Jupiter and Saturn are natural adversaries in Vedic astrology." },
    { q: "How to cleanse and recharge Citrine?", a: "Citrine is unique — it's a self-cleansing stone that doesn't hold negative energy. However, for best results, cleanse it monthly by placing it under moonlight (especially full moon) for 4-6 hours. You can also wash it with clean water and pat dry. Recharge by placing in sunlight for 30 minutes (not more, as prolonged sun may fade color). Chant the Jupiter mantra while holding the stone for spiritual recharging." },
  ];

  const filterProducts = () => {
    let filtered = [...products];
    if (priceRange !== "all") {
      switch(priceRange) {
        case "under-5k": filtered = filtered.filter(p => p.price < 5000); break;
        case "5k-10k": filtered = filtered.filter(p => p.price >= 5000 && p.price < 10000); break;
        case "10k-20k": filtered = filtered.filter(p => p.price >= 10000 && p.price < 20000); break;
        case "above-20k": filtered = filtered.filter(p => p.price >= 20000); break;
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Natural Citrine (Sunela) Gemstone",
    "description": "Buy certified natural Citrine (Sunela) gemstone online. Known as the Merchant's Stone for wealth, prosperity, and success. Lab-certified, 100% natural, free shipping.",
    "brand": { "@type": "Brand", "name": "AstroSage" },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "2999",
      "highPrice": "25999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "offerCount": products.length
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1455",
      "bestRating": "5"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://astrosage.shop/" },
      { "@type": "ListItem", "position": 2, "name": "Gemstones", "item": "https://astrosage.shop/gemstones" },
      { "@type": "ListItem", "position": 3, "name": "Citrine (Sunela)", "item": "https://astrosage.shop/citrine" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Buy Natural Citrine (Sunela) Gemstone Online | Certified | ₹2,999 Onwards - AstroSage</title>
        <meta name="description" content="Buy certified natural Citrine (Sunela) gemstone online at best price. Known as Merchant's Stone for wealth & prosperity. Lab-certified, 100% natural, Jupiter gemstone. Free shipping & expert consultation." />
        <meta name="keywords" content="citrine gemstone, sunela stone, citrine price, natural citrine, citrine benefits, sunela ratna, merchant stone, jupiter gemstone, citrine online india, certified citrine" />
        <link rel="canonical" href="https://astrosage.shop/citrine" />
        <meta property="og:title" content="Buy Natural Citrine (Sunela) Gemstone - Certified | AstroSage" />
        <meta property="og:description" content="Shop certified natural Citrine gemstones. The Merchant's Stone for wealth, abundance & success. Prices from ₹2,999." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://astrosage.shop/citrine" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

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
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">JUPITER TRANSIT SPECIAL</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 25% OFF on Madeira & Golden Citrine</span>
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
            <span className="text-foreground font-medium">Citrine (Sunela)</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/10 dark:to-orange-950/20 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-amber-600 text-white border-0">
                  <Sun className="w-3 h-3 mr-1" />
                  Jupiter (Brihaspati)
                </Badge>
                <Badge variant="outline" className="border-amber-500 text-amber-700 dark:text-amber-400">
                  Sagittarius & Pisces
                </Badge>
                <Badge className="bg-green-500 text-white border-0">
                  <Shield className="w-3 h-3 mr-1" />
                  100% Certified
                </Badge>
                <Badge className="bg-yellow-500 text-white border-0 animate-pulse">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Merchant's Stone
                </Badge>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
                  Citrine Quartz (Sunela) <span className="text-amber-600">सुनेला</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  The powerful Merchant's Stone of Jupiter — attracts wealth, prosperity, and abundance. 
                  Known for boosting confidence, creativity, and business success. Trusted by 35,000+ customers.
                </p>
              </div>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Wealth & Prosperity", "Business Success", "Positive Energy", "Jupiter Blessings"].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2.5 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Badge */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">Safe for Everyone — No Trial Needed</p>
                  <p className="text-sm text-muted-foreground">Unlike Blue Sapphire, Citrine is one of the safest gemstones. It never accumulates negative energy and suits almost everyone. Perfect for beginners!</p>
                </div>
              </div>

              {/* Social Proof Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-amber-200 dark:border-amber-900">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['P', 'R', 'D', 'S', 'A'].map((letter, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 border-2 border-background flex items-center justify-center text-xs text-white font-bold">
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
                    <span className="text-sm font-medium ml-1">4.8/5</span>
                    <span className="text-sm text-muted-foreground">(1,455 reviews)</span>
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
                    <span className="text-3xl font-bold text-amber-600">₹2,999</span>
                    <span className="text-lg text-muted-foreground line-through">₹4,999</span>
                    <Badge className="bg-green-500 text-white">Save 40%</Badge>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open('https://wa.me/919717308989', '_blank')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Free Expert Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50" onClick={() => navigate('/gemstone-calculator')}>
                    <Gem className="w-4 h-4 mr-2" />
                    Find Your Lucky Gemstone
                  </Button>
                </div>
              </div>

              <p className="text-xl italic text-center text-muted-foreground">
                "Unlock Jupiter's blessings for wealth, wisdom, and boundless prosperity."
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
              <Truck className="w-8 h-8 text-amber-600" />
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

      {/* Section Navigation - Sticky */}
      <div className="bg-background border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            {navigationTabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const element = document.getElementById(tab.id);
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    isActive ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px] h-9"><SelectValue placeholder="Price" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                  <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                  <SelectItem value="10k-20k">₹10,000 - ₹20,000</SelectItem>
                  <SelectItem value="above-20k">Above ₹20,000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[140px] h-9"><SelectValue placeholder="Weight" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weights</SelectItem>
                  <SelectItem value="3-5">3-5 Carat</SelectItem>
                  <SelectItem value="5-7">5-7 Carat</SelectItem>
                  <SelectItem value="7-9">7-9 Carat</SelectItem>
                  <SelectItem value="9+">9+ Carat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{sortedProducts.length}</span> Products
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px] h-9"><SelectValue placeholder="Sort by" /></SelectTrigger>
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
      <div id="products" className="container mx-auto px-4 py-8 scroll-mt-20">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Premium Citrine Quartz Collection</h2>
          <p className="text-muted-foreground">Hand-picked, certified stones from Brazil, Africa & India</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product, idx) => (
            <Card 
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-amber-500/50 relative"
              onClick={() => navigate(`/gemstone/${product.id}`)}
            >
              <CardContent className="p-0">
                {product.inStock <= 3 && (
                  <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs py-1 px-2 text-center z-20 flex items-center justify-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Only {product.inStock} left in stock!
                  </div>
                )}

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

                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
                  <img src={product.image} alt={`${product.name} - ${product.weight} Natural Certified Citrine`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  {product.certified && (
                    <div className={`absolute ${product.inStock <= 3 ? 'top-8' : 'top-2'} right-2`}>
                      <Badge variant="secondary" className="bg-green-500/90 text-white text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2">
                    <Badge className="bg-amber-600 text-white text-xs font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                  <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" onClick={(e) => e.stopPropagation()}>
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>

                <div className="p-3 md:p-4 space-y-2">
                  <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-amber-600 transition-colors">
                    {product.name} - {product.weight}
                  </h3>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="flex items-center gap-1"><span className="font-medium">SKU:</span> {product.sku}</p>
                    <p className="flex items-center gap-1"><MapPin className="w-3 h-3" />{product.origin}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg md:text-xl font-bold text-amber-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium">You save ₹{(product.originalPrice - product.price).toLocaleString()}</p>
                  </div>
                  {product.inStock <= 5 && (
                    <div className="space-y-1">
                      <Progress value={(product.inStock / 10) * 100} className="h-1.5" />
                      <p className="text-xs text-red-500 font-medium">Selling fast! {product.inStock} left</p>
                    </div>
                  )}
                  <Button className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white" size="sm">
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
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Need Help Choosing the Right Citrine?</h3>
              <p className="opacity-90">Get FREE expert consultation from our certified astrologers. 21+ years of experience.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100" onClick={() => window.open('https://wa.me/919717308989', '_blank')}>
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
            <Badge className="mb-3 bg-amber-500/10 text-amber-700 border-amber-500/30">
              <ThumbsUp className="w-3 h-3 mr-1" />
              Customer Success Stories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Real Results from Real Customers</h2>
            <p className="text-muted-foreground mt-2">See how Citrine transformed their lives</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold flex items-center gap-1">
                      {testimonial.name}
                      {testimonial.verified && <BadgeCheck className="w-4 h-4 text-amber-500" />}
                    </p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-2">
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

      {/* About Citrine - Long Form SEO Content */}
      <div id="about" className="container mx-auto px-4 py-12 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Complete Guide to Citrine Quartz (Sunela) Gemstone</h2>
          
          <article className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Citrine, known as <strong>Sunela</strong> (सुनेला) in Hindi, is one of the most sought-after gemstones for attracting wealth and prosperity. 
              A member of the Quartz family, this stunning golden-yellow stone has been prized for centuries as the <strong>"Merchant's Stone"</strong> or 
              <strong>"Success Stone"</strong> — believed to bring financial abundance to its wearer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In Vedic astrology, Citrine is associated with <strong>Planet Jupiter (Brihaspati/Guru)</strong>, the planet of wisdom, wealth, and expansion. 
              It serves as an affordable and effective alternative to Yellow Sapphire (Pukhraj) for those seeking Jupiter's blessings. 
              Natural Citrine ranges in color from pale lemon yellow to deep golden amber, with the highly coveted <strong>Madeira Citrine</strong> 
              displaying a rich, warm orange-gold hue named after the famous Madeira wine.
            </p>
          </article>

          {/* Who Should Wear */}
          <div id="who-should-wear" className="grid md:grid-cols-2 gap-6 mb-8 scroll-mt-20">
            <Card className="p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-500" />
                Astrological Details
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Planet</span>
                  <span className="font-medium">Jupiter (Brihaspati)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Zodiac Signs</span>
                  <span className="font-medium">Sagittarius & Pisces</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Element</span>
                  <span className="font-medium">Fire (Agni)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Chakra</span>
                  <span className="font-medium">Solar Plexus (Manipura)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Hardness</span>
                  <span className="font-medium">7 (Mohs Scale)</span>
                </div>
              </div>
            </Card>

            <Card id="how-to-wear" className="p-5 scroll-mt-20">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Gem className="w-5 h-5 text-amber-500" />
                How to Wear Citrine
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Metal</span>
                  <span className="font-medium">Gold / Panchdhatu</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Finger</span>
                  <span className="font-medium">Index Finger (Right Hand)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Day & Time</span>
                  <span className="font-medium">Thursday, Morning (Sunrise)</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Mantra</span>
                  <span className="font-medium text-xs">Om Gram Greem Groum...</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Min. Weight</span>
                  <span className="font-medium">3-5 Carat</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <Card id="benefits" className="p-6 mb-8 scroll-mt-20">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Benefits of Citrine Gemstone
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Wealth & Abundance", desc: "Attracts financial prosperity, new income sources, and business growth" },
                { title: "Business Success", desc: "Known as Merchant's Stone — boosts sales, negotiations, and entrepreneurship" },
                { title: "Confidence & Willpower", desc: "Strengthens self-esteem, personal power, and decision-making ability" },
                { title: "Positive Energy", desc: "Dispels negativity, fear, and depression; brings joy and optimism" },
                { title: "Creativity & Focus", desc: "Enhances imagination, mental clarity, and goal manifestation" },
                { title: "Digestive Health", desc: "Improves metabolism, digestion, and detoxification processes" },
                { title: "Solar Plexus Healing", desc: "Activates and balances the Manipura Chakra for inner strength" },
                { title: "Self-Cleansing", desc: "One of the few stones that never holds negative energy" },
                { title: "Jupiter's Blessings", desc: "Affordable alternative to Yellow Sapphire for Jupiter benefits" },
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

          {/* Long-form SEO content */}
          <section className="space-y-8 mb-12">
            <div>
              <h2 className="text-xl font-bold mb-4">Citrine vs Yellow Sapphire (Pukhraj) — Which One Should You Choose?</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-semibold">Parameter</th>
                        <th className="text-left py-3 font-semibold text-amber-600">Citrine (Sunela)</th>
                        <th className="text-left py-3 font-semibold text-yellow-600">Yellow Sapphire (Pukhraj)</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b"><td className="py-2.5 font-medium">Planet</td><td className="py-2.5">Jupiter</td><td className="py-2.5">Jupiter</td></tr>
                      <tr className="border-b"><td className="py-2.5 font-medium">Price Range</td><td className="py-2.5">₹500 - ₹15,000/ct</td><td className="py-2.5">₹10,000 - ₹1,00,000+/ct</td></tr>
                      <tr className="border-b"><td className="py-2.5 font-medium">Hardness</td><td className="py-2.5">7 (Mohs)</td><td className="py-2.5">9 (Mohs)</td></tr>
                      <tr className="border-b"><td className="py-2.5 font-medium">Effect Speed</td><td className="py-2.5">Gradual (30-90 days)</td><td className="py-2.5">Fast (7-30 days)</td></tr>
                      <tr className="border-b"><td className="py-2.5 font-medium">Safety</td><td className="py-2.5">Very Safe</td><td className="py-2.5">Safe (with consultation)</td></tr>
                      <tr><td className="py-2.5 font-medium">Best For</td><td className="py-2.5">Budget-friendly Jupiter remedy</td><td className="py-2.5">Powerful, premium remedy</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Our Recommendation:</strong> If budget allows, Yellow Sapphire is more potent. However, Citrine is an excellent and safe alternative 
                  that provides 60-70% of Yellow Sapphire's benefits at a fraction of the cost. Many astrologers recommend starting with Citrine before upgrading.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Types of Citrine Gemstone — Origin & Quality Guide</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { type: "Madeira Citrine", origin: "Brazil", color: "Deep golden-orange", quality: "Highest grade, most valued", price: "₹3,000 - ₹10,000/ct" },
                  { type: "Golden Citrine", origin: "Brazil", color: "Rich golden yellow", quality: "Premium quality", price: "₹1,500 - ₹5,000/ct" },
                  { type: "Lemon Citrine", origin: "Brazil/India", color: "Light pale yellow", quality: "Good for beginners", price: "₹500 - ₹2,000/ct" },
                  { type: "Honey Citrine", origin: "Africa/Brazil", color: "Warm honey-amber", quality: "Beautiful warm tones", price: "₹1,000 - ₹4,000/ct" },
                ].map((item, idx) => (
                  <Card key={idx} className="p-4">
                    <h3 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">{item.type}</h3>
                    <div className="text-sm space-y-1 text-muted-foreground">
                      <p><span className="font-medium text-foreground">Origin:</span> {item.origin}</p>
                      <p><span className="font-medium text-foreground">Color:</span> {item.color}</p>
                      <p><span className="font-medium text-foreground">Quality:</span> {item.quality}</p>
                      <p><span className="font-medium text-foreground">Price:</span> {item.price}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">How to Identify Real vs Fake Citrine</h2>
              <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Signs of Natural Citrine
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Pale to moderate yellow with subtle color variations</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Slight smoky undertone visible in certain angles</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Shows dichroism (faint color change at different angles)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Cool to touch initially, warms slowly</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Lab certificate from reputed gemological lab</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Signs of Fake/Treated Citrine
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />Uniform deep orange-red color (likely heat-treated Amethyst)</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />No visible inclusions at all (too perfect = suspicious)</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />Overly saturated, unnaturally bright color</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />Extremely low price for large carat weight</li>
                      <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />Seller unable to provide lab certification</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Step-by-Step Guide: How to Wear Citrine for Maximum Benefits</h2>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Choose the Right Stone", desc: "Select a natural, certified Citrine of minimum 3-5 carats. Madeira or Golden variety recommended for best results. Ensure lab certification from a reputed gemological institute." },
                  { step: 2, title: "Select the Metal", desc: "Get the Citrine set in Gold or Panchdhatu (five metals alloy) ring. Gold amplifies Jupiter's energy. Sterling Silver can also be used as a budget alternative." },
                  { step: 3, title: "Purification Ritual", desc: "On the night before wearing, immerse the ring in a bowl of raw milk or Gangajal. Keep it near a Tulsi plant or on your prayer altar overnight." },
                  { step: 4, title: "Energization (Pran Pratishtha)", desc: "On Thursday morning during Shukla Paksha (waxing moon), wake up early and take a bath. Sit facing East/North direction. Hold the ring and chant 'Om Gram Greem Groum Sah Gurave Namah' 108 times." },
                  { step: 5, title: "Wear on Index Finger", desc: "After chanting, wear the ring on the index finger (Tarjani) of your right hand. Apply a tilak of yellow sandalwood or turmeric paste before wearing. Touch the feet of elders and seek blessings." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Why Buy Citrine from AstroSage?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: "Lab Certified", desc: "Every stone comes with certification from government-approved gemological labs" },
                  { icon: Award, title: "21+ Years Trust", desc: "AstroSage has been India's most trusted astrology platform since 2004" },
                  { icon: Users, title: "5 Lakh+ Customers", desc: "Joined by over 500,000 satisfied customers across India and worldwide" },
                  { icon: RefreshCcw, title: "7-Day Returns", desc: "Not satisfied? Full money-back guarantee with free return shipping" },
                  { icon: Phone, title: "Expert Guidance", desc: "Free consultation with certified astrologers before and after purchase" },
                  { icon: Truck, title: "Free Shipping", desc: "Complimentary insured shipping on orders above ₹5,000 pan-India" },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                      <IconComp className="w-6 h-6 text-amber-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs" className="bg-muted/20 py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions about Citrine</h2>
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
          <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => window.open('https://wa.me/919717308989', '_blank')}>
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </div>

      <div className="h-20 md:hidden" />
    </div>
  );
};

export default CitrineCollection;
