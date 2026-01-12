import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronRight, Sparkles, 
  CheckCircle, Zap, Eye, Timer, Gem, Crown, Flame, 
  Users, TrendingUp, Phone, Lock, Truck, RefreshCcw,
  BadgeCheck, MessageCircle, Moon, Sun, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import gemstone images
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import pearlImage from "@/assets/gemstones/pearl.jpg";
import redCoralImage from "@/assets/gemstones/red-coral.jpg";
import hessoniteImage from "@/assets/gemstones/hessonite.jpg";
import catsEyeImage from "@/assets/gemstones/cats-eye.jpg";
import lapisLazuliImage from "@/assets/gemstones/lapis-lazuli.jpg";

const GemstonesPendantCollection = () => {
  const navigate = useNavigate();
  const [viewingCount, setViewingCount] = useState(234);
  const [activeFilter, setActiveFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 32, seconds: 17 });
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);

  const recentBuyers = [
    { name: "Priya S.", location: "Mumbai", time: "2 minutes ago", product: "Blue Sapphire Pendant" },
    { name: "Rahul M.", location: "Delhi", time: "5 minutes ago", product: "Ruby Gold Pendant" },
    { name: "Anita K.", location: "Bangalore", time: "8 minutes ago", product: "Emerald Silver Pendant" },
  ];

  // Countdown timer
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

  // Live viewing count simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => Math.max(180, prev + Math.floor(Math.random() * 9) - 4));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Buyer notification popup
  useEffect(() => {
    const showNotification = () => {
      setShowBuyerNotification(true);
      setTimeout(() => {
        setShowBuyerNotification(false);
        setCurrentBuyerIndex(prev => (prev + 1) % recentBuyers.length);
      }, 5000);
    };
    
    const interval = setInterval(showNotification, 18000);
    setTimeout(showNotification, 4000);
    return () => clearInterval(interval);
  }, [recentBuyers.length]);

  const gemstoneCollections = [
    { 
      id: "emerald", 
      name: "Emerald", 
      hindiName: "पन्ना",
      planet: "Mercury",
      planetIcon: "☿",
      image: emeraldImage, 
      href: "/gemstones",
      category: "precious",
      priceRange: "₹15,000 - ₹2,50,000",
      avgPrice: 50000,
      benefits: ["Intelligence", "Communication", "Business Success"],
      certified: true,
      popular: true,
      stock: 24
    },
    { 
      id: "yellow-sapphire", 
      name: "Yellow Sapphire", 
      hindiName: "पुखराज",
      planet: "Jupiter",
      planetIcon: "♃",
      image: yellowSapphireImage, 
      href: "/yellow-sapphire",
      category: "precious",
      priceRange: "₹8,000 - ₹1,80,000",
      avgPrice: 45000,
      benefits: ["Wealth", "Wisdom", "Marriage"],
      certified: true,
      popular: true,
      stock: 31
    },
    { 
      id: "blue-sapphire", 
      name: "Blue Sapphire", 
      hindiName: "नीलम",
      planet: "Saturn",
      planetIcon: "♄",
      image: blueSapphireImage, 
      href: "/blue-sapphire",
      category: "precious",
      priceRange: "₹25,000 - ₹5,00,000",
      avgPrice: 85000,
      benefits: ["Career", "Protection", "Wealth"],
      certified: true,
      fastestActing: true,
      stock: 12
    },
    { 
      id: "ruby", 
      name: "Ruby", 
      hindiName: "माणिक्य",
      planet: "Sun",
      planetIcon: "☉",
      image: rubyImage, 
      href: "/ruby",
      category: "precious",
      priceRange: "₹12,000 - ₹3,00,000",
      avgPrice: 65000,
      benefits: ["Authority", "Fame", "Confidence"],
      certified: true,
      popular: true,
      stock: 18
    },
    { 
      id: "pearl", 
      name: "Pearl", 
      hindiName: "मोती",
      planet: "Moon",
      planetIcon: "☽",
      image: pearlImage, 
      href: "/pearl",
      category: "precious",
      priceRange: "₹2,500 - ₹45,000",
      avgPrice: 12000,
      benefits: ["Peace", "Emotional Balance", "Beauty"],
      certified: true,
      affordable: true,
      stock: 56
    },
    { 
      id: "red-coral", 
      name: "Red Coral", 
      hindiName: "मूंगा",
      planet: "Mars",
      planetIcon: "♂",
      image: redCoralImage, 
      href: "/moonga",
      category: "semi-precious",
      priceRange: "₹3,500 - ₹65,000",
      avgPrice: 18000,
      benefits: ["Courage", "Energy", "Victory"],
      certified: true,
      stock: 38
    },
    { 
      id: "hessonite", 
      name: "Hessonite", 
      hindiName: "गोमेद",
      planet: "Rahu",
      planetIcon: "☊",
      image: hessoniteImage, 
      href: "/hessonite",
      category: "semi-precious",
      priceRange: "₹4,000 - ₹55,000",
      avgPrice: 15000,
      benefits: ["Success", "Clarity", "Protection"],
      certified: true,
      stock: 42
    },
    { 
      id: "cats-eye", 
      name: "Cat's Eye", 
      hindiName: "लहसुनिया",
      planet: "Ketu",
      planetIcon: "☋",
      image: catsEyeImage, 
      href: "/cats-eye",
      category: "semi-precious",
      priceRange: "₹5,000 - ₹75,000",
      avgPrice: 22000,
      benefits: ["Spiritual Growth", "Protection", "Healing"],
      certified: true,
      stock: 28
    },
    { 
      id: "lapis-lazuli", 
      name: "Lapis Lazuli", 
      hindiName: "लाजवर्द",
      planet: "Saturn",
      planetIcon: "♄",
      image: lapisLazuliImage, 
      href: "/lapis-lazuli",
      category: "semi-precious",
      priceRange: "₹1,500 - ₹25,000",
      avgPrice: 8000,
      benefits: ["Wisdom", "Truth", "Inner Peace"],
      certified: true,
      affordable: true,
      stock: 67
    },
  ];

  const planetFilters = [
    { id: "all", label: "All Planets" },
    { id: "Saturn", label: "Saturn", icon: "♄" },
    { id: "Jupiter", label: "Jupiter", icon: "♃" },
    { id: "Mars", label: "Mars", icon: "♂" },
    { id: "Sun", label: "Sun", icon: "☉" },
    { id: "Moon", label: "Moon", icon: "☽" },
    { id: "Mercury", label: "Mercury", icon: "☿" },
    { id: "Rahu", label: "Rahu", icon: "☊" },
    { id: "Ketu", label: "Ketu", icon: "☋" },
  ];

  const filteredCollections = gemstoneCollections.filter(gem => {
    if (activeFilter !== "all" && gem.planet !== activeFilter) return false;
    if (categoryFilter !== "all" && gem.category !== categoryFilter) return false;
    if (priceFilter !== "all") {
      switch(priceFilter) {
        case "under-10k": if (gem.avgPrice > 10000) return false; break;
        case "10k-30k": if (gem.avgPrice < 10000 || gem.avgPrice > 30000) return false; break;
        case "30k-60k": if (gem.avgPrice < 30000 || gem.avgPrice > 60000) return false; break;
        case "above-60k": if (gem.avgPrice < 60000) return false; break;
      }
    }
    return true;
  });

  const clearFilters = () => {
    setActiveFilter("all");
    setCategoryFilter("all");
    setPriceFilter("all");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Buyer Notification */}
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
      <div className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" />
            <span className="font-bold">NAVRATNA SPECIAL OFFER</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Extra 15% OFF + Free Pendant Setting</span>
            <div className="flex items-center gap-1 bg-black/20 rounded px-2 py-1">
              <Timer className="w-3 h-3" />
              <span className="font-mono font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="bg-muted/50 border-b py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <BadgeCheck className="w-3 h-3 text-green-500" />
            <span>100% Certified & Authentic</span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button onClick={() => navigate('/')} className="hover:text-foreground transition-colors">Home</button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => navigate('/collections')} className="hover:text-foreground transition-colors">Collections</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Gemstones</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50/50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/20 border-b">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full border mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">100% Certified & Authentic</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-500 to-amber-500 bg-clip-text text-transparent">
              Premium Natural Gemstones
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Certified authentic gemstones trusted by <span className="font-bold text-foreground">5 Lakh+</span> customers
            </p>

            {/* Trust Icons */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Lab Certified</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">21 Years Trust</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Best Prices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4 justify-between">
            {/* Planet Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-muted-foreground">Filter by Planet</span>
              <div className="flex flex-wrap gap-1.5">
                {planetFilters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                      activeFilter === filter.id
                        ? 'bg-primary text-primary-foreground font-medium shadow-md'
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                    }`}
                  >
                    {filter.icon && <span className="mr-1">{filter.icon}</span>}
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Viewing */}
            <div className="flex items-center gap-2 bg-red-500/10 text-red-600 px-3 py-1.5 rounded-full animate-pulse">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">{viewingCount} viewing now</span>
            </div>
          </div>

          {/* Secondary Filters */}
          <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Category</span>
              <div className="flex gap-1.5">
                {[
                  { id: "all", label: "All Categories" },
                  { id: "precious", label: "Precious" },
                  { id: "semi-precious", label: "Semi-Precious" },
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-3 py-1 text-sm rounded-full transition-all ${
                      categoryFilter === cat.id
                        ? 'bg-orange-500 text-white font-medium'
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Price Range</span>
              <div className="flex gap-1.5">
                {[
                  { id: "all", label: "All Prices" },
                  { id: "under-10k", label: "₹0 - ₹9,999" },
                  { id: "10k-30k", label: "₹10,000 - ₹29,999" },
                  { id: "30k-60k", label: "₹30,000 - ₹59,999" },
                  { id: "above-60k", label: "₹60,000+" },
                ].map(price => (
                  <button
                    key={price.id}
                    onClick={() => setPriceFilter(price.id)}
                    className={`px-3 py-1 text-sm rounded-full transition-all ${
                      priceFilter === price.id
                        ? 'bg-green-500 text-white font-medium'
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                    }`}
                  >
                    {price.label}
                  </button>
                ))}
              </div>
            </div>

            {(activeFilter !== "all" || categoryFilter !== "all" || priceFilter !== "all") && (
              <button
                onClick={clearFilters}
                className="text-sm text-red-500 hover:text-red-600 underline underline-offset-2"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCollections.map((gem) => (
              <Card
                key={gem.id}
                onClick={() => navigate(gem.href)}
                className="group cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 hover:border-primary/50 bg-card"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {gem.stock <= 5 && (
                      <Badge className="bg-red-500 text-white text-xs border-0 shadow-lg">
                        <Zap className="w-3 h-3 mr-1" />
                        Only {gem.stock} Left
                      </Badge>
                    )}
                    {gem.popular && (
                      <Badge className="bg-amber-500 text-white text-xs border-0 shadow-lg">
                        <Flame className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    {gem.fastestActing && (
                      <Badge className="bg-purple-600 text-white text-xs border-0 shadow-lg animate-pulse">
                        <Zap className="w-3 h-3 mr-1" />
                        Fastest Acting
                      </Badge>
                    )}
                    {gem.affordable && (
                      <Badge className="bg-green-500 text-white text-xs border-0 shadow-lg">
                        Best Value
                      </Badge>
                    )}
                  </div>

                  {/* Certified Badge - Top Right */}
                  {gem.certified && (
                    <Badge className="absolute top-3 right-3 bg-green-500 text-white text-xs border-0 shadow-lg">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  )}

                  {/* Planet Badge - Bottom */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-lg">{gem.planetIcon}</span>
                      <span className="text-white text-sm font-medium">{gem.planet}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {gem.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{gem.hindiName}</p>
                    </div>

                    {/* Price Range */}
                    <div className="text-sm">
                      <span className="text-muted-foreground">Price Range: </span>
                      <span className="font-semibold text-foreground">{gem.priceRange}</span>
                    </div>

                    {/* Benefits Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {gem.benefits.map((benefit, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(gem.href);
                        }}
                      >
                        View Collection
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/consultation');
                        }}
                      >
                        Consult Expert
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCollections.length === 0 && (
            <div className="text-center py-16">
              <Gem className="w-16 h-16 mx-auto text-muted-foreground/40 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No gemstones found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters to see more results</p>
              <Button onClick={clearFilters} variant="outline">Clear All Filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "100% Certified", desc: "Lab-certified gemstones" },
              { icon: Truck, label: "Free Shipping", desc: "On orders above ₹2,999" },
              { icon: RefreshCcw, label: "Easy Returns", desc: "7-day return policy" },
              { icon: Lock, label: "Secure Payment", desc: "100% secure checkout" },
            ].map((trust, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <trust.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{trust.label}</h4>
                  <p className="text-sm text-muted-foreground">{trust.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Not Sure Which Gemstone is Right for You?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Get FREE personalized recommendation from our expert astrologers based on your birth chart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-white/90 font-semibold shadow-xl"
              onClick={() => navigate('/consultation')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default GemstonesPendantCollection;
