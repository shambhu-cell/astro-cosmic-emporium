import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronRight, Sparkles, 
  CheckCircle, Zap, Eye, Timer, Gem, Crown, Flame, 
  Users, TrendingUp, Phone, Lock, Truck, RefreshCcw,
  BadgeCheck, MessageCircle, Moon, Sun, Heart, 
  BookOpen, HelpCircle, ShoppingBag, Info, FileCheck, ListFilter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [colorFilter, setColorFilter] = useState("all");
  const [alphabetFilter, setAlphabetFilter] = useState("All");
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 32, seconds: 17 });
  const [showBuyerNotification, setShowBuyerNotification] = useState(false);
  const [currentBuyerIndex, setCurrentBuyerIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("popular");

  // Refs for scroll navigation
  const aboutRef = useRef<HTMLDivElement>(null);
  const popularRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);

  const recentBuyers = [
    { name: "Priya S.", location: "Mumbai", time: "2 minutes ago", product: "Blue Sapphire Ring" },
    { name: "Rahul M.", location: "Delhi", time: "5 minutes ago", product: "Ruby Gold Pendant" },
    { name: "Anita K.", location: "Bangalore", time: "8 minutes ago", product: "Emerald Pendant" },
    { name: "Vikram R.", location: "Chennai", time: "12 minutes ago", product: "Yellow Sapphire" },
    { name: "Meera J.", location: "Jaipur", time: "15 minutes ago", product: "Pearl Necklace" },
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
    
    const interval = setInterval(showNotification, 15000);
    setTimeout(showNotification, 3000);
    return () => clearInterval(interval);
  }, [recentBuyers.length]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, tab: string) => {
    setActiveTab(tab);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const gemstoneCollections = [
    { 
      id: "emerald", 
      name: "Emerald", 
      hindiName: "पन्ना",
      planet: "Mercury",
      planetIcon: "☿",
      color: "Green",
      image: emeraldImage, 
      href: "/gemstones",
      category: "precious",
      priceRange: "₹15,000 - ₹2,50,000",
      avgPrice: 50000,
      benefits: ["Intelligence", "Communication", "Business Success"],
      mainBenefits: "Intellect, creativity, speech, and memory",
      certified: true,
      popular: true,
      stock: 24,
      rating: 4.9,
      reviews: 2847
    },
    { 
      id: "yellow-sapphire", 
      name: "Yellow Sapphire", 
      hindiName: "पुखराज",
      planet: "Jupiter",
      planetIcon: "♃",
      color: "Yellow",
      image: yellowSapphireImage, 
      href: "/yellow-sapphire",
      category: "precious",
      priceRange: "₹8,000 - ₹1,80,000",
      avgPrice: 45000,
      benefits: ["Wealth", "Wisdom", "Marriage"],
      mainBenefits: "Prosperity, wisdom, marriage, and spiritual development",
      certified: true,
      popular: true,
      stock: 31,
      rating: 4.8,
      reviews: 3421
    },
    { 
      id: "blue-sapphire", 
      name: "Blue Sapphire", 
      hindiName: "नीलम",
      planet: "Saturn",
      planetIcon: "♄",
      color: "Blue",
      image: blueSapphireImage, 
      href: "/blue-sapphire",
      category: "precious",
      priceRange: "₹25,000 - ₹5,00,000",
      avgPrice: 85000,
      benefits: ["Career", "Protection", "Wealth"],
      mainBenefits: "Sudden wealth, mental clarity, quick success",
      certified: true,
      fastestActing: true,
      stock: 12,
      rating: 4.9,
      reviews: 4156
    },
    { 
      id: "ruby", 
      name: "Ruby", 
      hindiName: "माणिक्य",
      planet: "Sun",
      planetIcon: "☉",
      color: "Red",
      image: rubyImage, 
      href: "/ruby",
      category: "precious",
      priceRange: "₹12,000 - ₹3,00,000",
      avgPrice: 65000,
      benefits: ["Authority", "Fame", "Confidence"],
      mainBenefits: "Leadership, self-confidence, fame, and achievement",
      certified: true,
      popular: true,
      stock: 18,
      rating: 4.8,
      reviews: 2934
    },
    { 
      id: "pearl", 
      name: "Pearl", 
      hindiName: "मोती",
      planet: "Moon",
      planetIcon: "☽",
      color: "White",
      image: pearlImage, 
      href: "/pearl",
      category: "precious",
      priceRange: "₹2,500 - ₹45,000",
      avgPrice: 12000,
      benefits: ["Peace", "Emotional Balance", "Beauty"],
      mainBenefits: "Emotional poise, calmness, harmony in relationships",
      certified: true,
      affordable: true,
      stock: 56,
      rating: 4.7,
      reviews: 5123
    },
    { 
      id: "red-coral", 
      name: "Red Coral", 
      hindiName: "मूंगा",
      planet: "Mars",
      planetIcon: "♂",
      color: "Red",
      image: redCoralImage, 
      href: "/moonga",
      category: "semi-precious",
      priceRange: "₹3,500 - ₹65,000",
      avgPrice: 18000,
      benefits: ["Courage", "Energy", "Victory"],
      mainBenefits: "Bravery, energy, strength, and triumph over foes",
      certified: true,
      stock: 38,
      rating: 4.6,
      reviews: 1876
    },
    { 
      id: "hessonite", 
      name: "Hessonite", 
      hindiName: "गोमेद",
      planet: "Saturn",
      planetIcon: "♄",
      color: "Brown",
      image: hessoniteImage, 
      href: "/hessonite",
      category: "semi-precious",
      priceRange: "₹4,000 - ₹55,000",
      avgPrice: 15000,
      benefits: ["Success", "Clarity", "Protection"],
      mainBenefits: "Clarity, courtroom victory, and political power",
      certified: true,
      stock: 42,
      rating: 4.5,
      reviews: 1234
    },
    { 
      id: "cats-eye", 
      name: "Cat's Eye", 
      hindiName: "लहसुनिया",
      planet: "Saturn",
      planetIcon: "♄",
      color: "Green",
      image: catsEyeImage, 
      href: "/cats-eye",
      category: "semi-precious",
      priceRange: "₹5,000 - ₹75,000",
      avgPrice: 22000,
      benefits: ["Spiritual Growth", "Protection", "Healing"],
      mainBenefits: "Refuge from evil, spiritual realization, and healing",
      certified: true,
      stock: 28,
      rating: 4.6,
      reviews: 987
    },
    { 
      id: "lapis-lazuli", 
      name: "Lapis Lazuli", 
      hindiName: "लाजवर्द",
      planet: "Saturn",
      planetIcon: "♄",
      color: "Blue",
      image: lapisLazuliImage, 
      href: "/lapis-lazuli",
      category: "semi-precious",
      priceRange: "₹1,500 - ₹25,000",
      avgPrice: 8000,
      benefits: ["Wisdom", "Truth", "Inner Peace"],
      mainBenefits: "Wisdom, truth, and inner peace",
      certified: true,
      affordable: true,
      stock: 67,
      rating: 4.4,
      reviews: 756
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
  ];

  const colorFilters = [
    { id: "all", label: "All Colors", color: "transparent" },
    { id: "Red", label: "Red", color: "#EF4444" },
    { id: "Blue", label: "Blue", color: "#3B82F6" },
    { id: "Green", label: "Green", color: "#22C55E" },
    { id: "Yellow", label: "Yellow", color: "#EAB308" },
    { id: "White", label: "White", color: "#F5F5F5" },
    { id: "Brown", label: "Brown", color: "#A16207" },
  ];

  const alphabetFilters = ["All", "A", "B", "C", "E", "H", "L", "P", "R", "Y"];

  const filteredCollections = gemstoneCollections.filter(gem => {
    if (activeFilter !== "all" && gem.planet !== activeFilter) return false;
    if (categoryFilter !== "all" && gem.category !== categoryFilter) return false;
    if (colorFilter !== "all" && gem.color !== colorFilter) return false;
    if (alphabetFilter !== "All" && !gem.name.startsWith(alphabetFilter)) return false;
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
    setColorFilter("all");
    setAlphabetFilter("All");
  };

  const stickyNavItems = [
    { id: "about", label: "About", icon: Info, ref: aboutRef },
    { id: "popular", label: "Popular Gemstones", icon: Crown, ref: popularRef },
    { id: "certification", label: "Certification", icon: FileCheck, ref: certificationRef },
    { id: "types", label: "Types", icon: ListFilter, ref: typesRef },
    { id: "guide", label: "Buying Guide", icon: BookOpen, ref: guideRef },
    { id: "faq", label: "FAQs", icon: HelpCircle, ref: faqRef },
  ];

  const faqData = [
    {
      q: "What are gemstones used for?",
      a: "Gemstones are used for astrology, healing, fashion jewelry, and investment. Each stone carries unique energy that can benefit mental clarity, emotional balance, prosperity, and spiritual growth."
    },
    {
      q: "What are the Navratna (9 Gemstones)?",
      a: "The Navratna are nine precious gems representing the nine planets: Ruby (Sun), Pearl (Moon), Red Coral (Mars), Emerald (Mercury), Yellow Sapphire (Jupiter), Diamond (Venus), Blue Sapphire (Saturn), Hessonite (Saturn), and Cat's Eye (Saturn)."
    },
    {
      q: "How do I know if a gemstone is real?",
      a: "Always request certification from reputed labs like GIA, IGI, or government labs. Natural gems have inclusions and slight imperfections. If a stone looks too perfect, it may be synthetic."
    },
    {
      q: "Which gemstone should I wear according to my zodiac?",
      a: "Gemstone recommendation depends on your birth chart analysis. Our expert astrologers can analyze your horoscope and recommend the perfect gemstone for you. Book a free consultation today."
    },
    {
      q: "What is the minimum carat weight for astrological benefits?",
      a: "For astrological benefits, gemstones should typically be at least 3-5 carats. However, the ideal weight depends on your body weight - generally 1 carat per 12 kg of body weight is recommended."
    },
    {
      q: "Are treated gemstones effective for astrology?",
      a: "For astrological purposes, untreated natural gemstones are recommended as they contain the purest planetary energy. Treated stones may have reduced effectiveness for astrological benefits."
    },
  ];

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
              <span className="text-sm font-medium">100% Certified & Authentic Gemstones</span>
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium">4.9/5 (25,000+ Reviews)</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-500 to-amber-500 bg-clip-text text-transparent">
              Buy Certified Natural Gemstones Online
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Premium quality astrological gemstones with <span className="font-bold text-foreground">government lab certification</span>. 
              Trusted by <span className="font-bold text-foreground">5 Lakh+ customers</span> across India.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">21+</div>
                <div className="text-sm text-muted-foreground">Years Trust</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">5 Lakh+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Gemstones Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
            </div>

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
                <span className="text-sm font-medium">Free Energization</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <RefreshCcw className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation Tabs */}
      <section className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            {stickyNavItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref, item.id)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  activeTab === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-10 bg-muted/20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Gemstones</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Gemstones are nature's masterpieces, formed over millions of years deep within the Earth. Each stone carries unique energy that influences our mood, fortune, and spiritual well-being. Wearing the right gemstone connects you to cosmic energies and planetary forces.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-background rounded-xl p-5 border">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-primary" />
                  History & Evolution
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ancient Egyptians, Romans, and Indians believed gemstones possessed divine energy. From royal crowns to protective amulets, they symbolized status, protection, and power.
                </p>
              </div>
              <div className="bg-background rounded-xl p-5 border">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Value & Investment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Premium gemstones like Kashmir Sapphires, Burmese Rubies, and Colombian Emeralds appreciate in value. They become treasured family heirlooms passed through generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Gemstones Table */}
      <section ref={popularRef} className="py-10 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Popular Gemstones & Their Benefits</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every gemstone has a planet to represent, bestowing benefits like mental clarity, prosperity, and emotional stability.
          </p>
          
          {/* Gemstone Benefits Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold border">Gemstone</th>
                  <th className="text-left p-3 font-semibold border">Color</th>
                  <th className="text-left p-3 font-semibold border">Main Benefits</th>
                  <th className="text-left p-3 font-semibold border">Planet</th>
                </tr>
              </thead>
              <tbody>
                {gemstoneCollections.slice(0, 8).map((gem, idx) => (
                  <tr key={gem.id} className={idx % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="p-3 border">
                      <button 
                        onClick={() => navigate(gem.href)}
                        className="flex items-center gap-2 font-medium text-primary hover:underline"
                      >
                        <img src={gem.image} alt={gem.name} className="w-8 h-8 rounded-full object-cover" />
                        {gem.name} ({gem.hindiName})
                      </button>
                    </td>
                    <td className="p-3 border">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: colorFilters.find(c => c.id === gem.color)?.color || '#ccc' }}></div>
                        {gem.color}
                      </div>
                    </td>
                    <td className="p-3 border text-sm">{gem.mainBenefits}</td>
                    <td className="p-3 border">
                      <span className="flex items-center gap-1">
                        <span className="text-lg">{gem.planetIcon}</span>
                        {gem.planet}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section ref={certificationRef} className="py-10 bg-green-50 dark:bg-green-950/20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Gemstone Certification & Authenticity</h2>
            <p className="text-muted-foreground mb-8">
              Certification is absolutely crucial when dealing with gemstones. It's your assurance that the stone is natural, properly tested for quality, and worth your investment.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-5 border text-center">
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Government Lab Certified</h3>
                <p className="text-sm text-muted-foreground">All our gemstones come with certification from recognized government labs</p>
              </div>
              <div className="bg-background rounded-xl p-5 border text-center">
                <Shield className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">100% Natural & Untreated</h3>
                <p className="text-sm text-muted-foreground">We never sell synthetic or heavily treated stones. Only natural gems</p>
              </div>
              <div className="bg-background rounded-xl p-5 border text-center">
                <Award className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Origin Verified</h3>
                <p className="text-sm text-muted-foreground">Every gemstone origin is verified and documented for transparency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section ref={collectionsRef} className="sticky top-12 z-40 bg-background/95 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          {/* Alphabet Filter */}
          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">By Name:</span>
            <div className="flex gap-1">
              {alphabetFilters.map(letter => (
                <button
                  key={letter}
                  onClick={() => setAlphabetFilter(letter)}
                  className={`w-8 h-8 text-sm font-medium rounded transition-all ${
                    alphabetFilter === letter
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Type:</span>
              <div className="flex gap-1.5">
                {[
                  { id: "all", label: "All" },
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

            {/* Color Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Color:</span>
              <div className="flex gap-1.5">
                {colorFilters.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setColorFilter(color.id)}
                    title={color.label}
                    className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                      colorFilter === color.id
                        ? 'border-primary ring-2 ring-primary/30'
                        : 'border-muted hover:border-foreground'
                    }`}
                    style={{ backgroundColor: color.id === 'all' ? 'transparent' : color.color }}
                  >
                    {color.id === 'all' && <span className="text-xs">All</span>}
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

          {/* Price & Planet Filters */}
          <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t">
            {/* Planet Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Planet:</span>
              <div className="flex flex-wrap gap-1.5">
                {planetFilters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-1 text-sm rounded-full transition-all ${
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

            {/* Price Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Price:</span>
              <div className="flex gap-1.5 flex-wrap">
                {[
                  { id: "all", label: "All" },
                  { id: "under-10k", label: "Under ₹10K" },
                  { id: "10k-30k", label: "₹10K-30K" },
                  { id: "30k-60k", label: "₹30K-60K" },
                  { id: "above-60k", label: "₹60K+" },
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

            {(activeFilter !== "all" || categoryFilter !== "all" || priceFilter !== "all" || colorFilter !== "all" || alphabetFilter !== "All") && (
              <button
                onClick={clearFilters}
                className="text-sm text-red-500 hover:text-red-600 underline underline-offset-2"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* List Header */}
      <section className="py-6 border-b bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">List of All Gemstones</h2>
          <p className="text-center text-muted-foreground mt-1">
            Click on any gem to get detailed information, prices, photos and videos.
          </p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {gem.stock <= 15 && (
                      <Badge className="bg-red-500 text-white text-xs border-0 shadow-lg">
                        <Zap className="w-3 h-3 mr-1" />
                        Only {gem.stock} Left
                      </Badge>
                    )}
                    {gem.popular && (
                      <Badge className="bg-amber-500 text-white text-xs border-0 shadow-lg">
                        <Flame className="w-3 h-3 mr-1" />
                        Best Seller
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

                  {/* Rating Badge - Top Right */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <Badge className="bg-background/90 text-foreground text-xs border shadow-lg">
                      <Star className="w-3 h-3 mr-1 text-amber-500 fill-amber-500" />
                      {gem.rating} ({gem.reviews?.toLocaleString()})
                    </Badge>
                    {gem.certified && (
                      <Badge className="bg-green-500 text-white text-xs border-0 shadow-lg">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                  </div>

                  {/* Planet Badge - Bottom */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{gem.planetIcon}</span>
                        <span className="text-white text-sm font-medium">{gem.planet}</span>
                      </span>
                      <span className="text-white/80 text-xs">
                        {gem.category === 'precious' ? 'Precious' : 'Semi-Precious'}
                      </span>
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
                      <span className="text-muted-foreground">Starting from </span>
                      <span className="font-bold text-lg text-primary">{gem.priceRange.split(' - ')[0]}</span>
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
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        View Collection
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://wa.me/919876543210?text=Hi, I want to know about ' + gem.name, '_blank');
                        }}
                      >
                        <MessageCircle className="w-4 h-4" />
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

      {/* Types Section */}
      <section ref={typesRef} className="py-10 bg-muted/20 border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Types of Gemstones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl p-5 border text-center hover:shadow-lg transition-shadow">
              <Crown className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Precious Gemstones</h3>
              <p className="text-sm text-muted-foreground">
                Ruby, Sapphire, Emerald - Rare, valuable, and perfect for luxury jewelry and astrology
              </p>
            </div>
            <div className="bg-background rounded-xl p-5 border text-center hover:shadow-lg transition-shadow">
              <Gem className="w-10 h-10 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Semi-Precious</h3>
              <p className="text-sm text-muted-foreground">
                Coral, Hessonite, Cat's Eye - Beautiful, affordable, and equally powerful for astrology
              </p>
            </div>
            <div className="bg-background rounded-xl p-5 border text-center hover:shadow-lg transition-shadow">
              <Sparkles className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Birthstones</h3>
              <p className="text-sm text-muted-foreground">
                Every birth month has a stone bringing fortune and balancing life energies
              </p>
            </div>
            <div className="bg-background rounded-xl p-5 border text-center hover:shadow-lg transition-shadow">
              <Heart className="w-10 h-10 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Healing Crystals</h3>
              <p className="text-sm text-muted-foreground">
                Rose Quartz, Amethyst - Used for chakra work, meditation, and emotional well-being
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide Section */}
      <section ref={guideRef} className="py-10 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Step-by-Step Buying Guide</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { step: 1, title: "Identify Your Purpose", desc: "Are you buying for astrology, healing, investment, or jewelry?" },
                { step: 2, title: "Choose the Right Gemstone", desc: "Know the best stone for your zodiac sign or planetary influence" },
                { step: 3, title: "Verify Quality Factors", desc: "Check origin, color, clarity, carat weight, and cut quality" },
                { step: 4, title: "Check Certification", desc: "Always buy with lab certificates from GIA, IGI, or government labs" },
                { step: 5, title: "Buy from Trusted Seller", desc: "Choose transparent sellers with clear return policies and reviews" },
                { step: 6, title: "Care & Maintenance", desc: "Learn proper cleaning, storage, and wearing instructions" },
              ].map(item => (
                <div key={item.step} className="flex gap-4 p-4 bg-muted/30 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-10 bg-muted/20 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {faqData.map((faq, idx) => (
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
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-background border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "100% Certified", desc: "Government lab certified" },
              { icon: Truck, label: "Free Shipping", desc: "On all orders" },
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
