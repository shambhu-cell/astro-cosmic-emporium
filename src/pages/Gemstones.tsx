import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Star, Shield, Award, TrendingUp, Filter, X, ChevronRight, Flame, Users, BadgeCheck, Truck, RefreshCcw, Eye, ShoppingCart, Heart, Sparkles, MessageCircle, Phone, Timer, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

const Gemstones = () => {
  const navigate = useNavigate();
  const [selectedPlanet, setSelectedPlanet] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });
  const [viewingCount, setViewingCount] = useState(156);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 5, minutes: 42, seconds: 18 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Viewing count simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => Math.max(120, Math.min(200, prev + Math.floor(Math.random() * 11) - 5)));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const gemstones = [
    {
      id: "bs-1",
      name: "Blue Sapphire (Neelam)",
      hindiName: "नीलम",
      price: 14999,
      originalPrice: 24999,
      image: blueSapphireImage,
      rating: 4.9,
      reviews: 8420,
      sold: "15K+",
      category: "Precious",
      planet: "Saturn",
      benefits: ["Career Growth", "Mental Clarity", "Wealth"],
      certified: true,
      weight: "3-5 Carat",
      origin: "Ceylon",
      bestseller: true,
      stock: 7
    },
    {
      id: "ys-1",
      name: "Yellow Sapphire (Pukhraj)",
      hindiName: "पुखराज",
      price: 10999,
      originalPrice: 15999,
      image: yellowSapphireImage,
      rating: 4.9,
      reviews: 7890,
      sold: "18K+",
      category: "Precious",
      planet: "Jupiter",
      benefits: ["Prosperity", "Wisdom", "Marriage"],
      certified: true,
      weight: "3-5 Carat",
      origin: "Ceylon",
      bestseller: true,
      stock: 6
    },
    {
      id: "ruby-1",
      name: "Ruby (Manik)",
      hindiName: "माणिक",
      price: 11499,
      originalPrice: 16999,
      image: rubyImage,
      rating: 4.8,
      reviews: 6234,
      sold: "12K+",
      category: "Precious",
      planet: "Sun",
      benefits: ["Leadership", "Confidence", "Health"],
      certified: true,
      weight: "3-5 Carat",
      origin: "Burma",
      bestseller: true,
      stock: 5
    },
    {
      id: "e-1",
      name: "Emerald (Panna)",
      hindiName: "पन्ना",
      price: 9999,
      originalPrice: 14999,
      image: emeraldImage,
      rating: 4.7,
      reviews: 5421,
      sold: "10K+",
      category: "Precious",
      planet: "Mercury",
      benefits: ["Intelligence", "Communication", "Business"],
      certified: true,
      weight: "3-5 Carat",
      origin: "Colombian",
      bestseller: true,
      stock: 8
    },
    {
      id: "coral-1",
      name: "Red Coral (Moonga)",
      hindiName: "मूंगा",
      price: 3999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 3420,
      sold: "8K+",
      category: "Semi-Precious",
      planet: "Mars",
      benefits: ["Courage", "Energy", "Passion"],
      certified: true,
      weight: "5-7 Carat",
      origin: "Italian",
      bestseller: false,
      stock: 12
    },
    {
      id: "pearl-1",
      name: "Pearl (Moti)",
      hindiName: "मोती",
      price: 4499,
      originalPrice: 6499,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 4178,
      sold: "9K+",
      category: "Precious",
      planet: "Moon",
      benefits: ["Peace", "Emotional Balance", "Beauty"],
      certified: true,
      weight: "5-8 Carat",
      origin: "South Sea",
      bestseller: false,
      stock: 15
    },
    {
      id: "hessonite-1",
      name: "Hessonite (Gomed)",
      hindiName: "गोमेद",
      price: 2999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 2134,
      sold: "5K+",
      category: "Semi-Precious",
      planet: "Saturn",
      benefits: ["Success", "Protection", "Focus"],
      certified: true,
      weight: "5-8 Carat",
      origin: "Ceylon",
      bestseller: false,
      stock: 18
    },
    {
      id: "catseye-1",
      name: "Cat's Eye (Lehsunia)",
      hindiName: "लहसुनिया",
      price: 5499,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 1812,
      sold: "4K+",
      category: "Semi-Precious",
      planet: "Saturn",
      benefits: ["Spiritual Growth", "Protection", "Intuition"],
      certified: true,
      weight: "5-7 Carat",
      origin: "Ceylon",
      bestseller: false,
      stock: 9
    },
  ];

  const planets = [
    { name: "All", value: "all", icon: "🌟" },
    { name: "Sun", value: "Sun", icon: "☀️" },
    { name: "Moon", value: "Moon", icon: "🌙" },
    { name: "Mars", value: "Mars", icon: "🔴" },
    { name: "Mercury", value: "Mercury", icon: "💚" },
    { name: "Jupiter", value: "Jupiter", icon: "🟡" },
    { name: "Venus", value: "Venus", icon: "💎" },
    { name: "Saturn", value: "Saturn", icon: "💙" },
  ];

  const filteredGemstones = gemstones.filter(gem => {
    if (selectedPlanet !== "all" && gem.planet !== selectedPlanet) return false;
    if (selectedCategory !== "all" && gem.category !== selectedCategory) return false;
    if (priceRange !== "all") {
      if (priceRange === "under5000" && gem.price >= 5000) return false;
      if (priceRange === "5000-10000" && (gem.price < 5000 || gem.price >= 10000)) return false;
      if (priceRange === "above10000" && gem.price < 10000) return false;
    }
    return true;
  });

  const faqs = [
    {
      question: "How do I choose the right gemstone for me?",
      answer: "The right gemstone depends on your birth chart and the planetary influences. We recommend a free consultation with our expert astrologers who can analyze your chart and suggest the most beneficial gemstone for you."
    },
    {
      question: "Are your gemstones certified?",
      answer: "Yes! Every gemstone we sell comes with a certificate from a government-approved gemological laboratory. The certificate includes detailed specifications confirming the gemstone's natural origin, color, clarity, and authenticity."
    },
    {
      question: "How are the gemstones energized?",
      answer: "Each gemstone is energized by our experienced astrologers using traditional Vedic mantras and rituals specific to the planetary deity. This enhances the gemstone's astrological benefits and aligns it with your energy."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day no-questions-asked return policy. If you're not satisfied with your purchase, you can return it within 7 days for a full refund. The gemstone must be in its original condition with the certificate."
    },
    {
      question: "Do you offer COD (Cash on Delivery)?",
      answer: "Yes, we offer Cash on Delivery across India. You can also pay using UPI, credit/debit cards, net banking, or EMI options for your convenience."
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Urgency Header */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white py-2.5">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap text-sm">
          <Flame className="h-4 w-4 animate-pulse" />
          <span className="font-bold">FESTIVE SALE LIVE!</span>
          <div className="flex items-center gap-1 font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
            <Timer className="h-3 w-3" />
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <span className="hidden sm:inline">| Up to 40% OFF on All Gemstones</span>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-green-50 border-b border-green-200 py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm flex-wrap">
          <span className="flex items-center gap-1.5 text-green-700 font-medium">
            <BadgeCheck className="h-4 w-4" /> 100% Certified
          </span>
          <span className="flex items-center gap-1.5 text-green-700 font-medium">
            <Truck className="h-4 w-4" /> Free Shipping
          </span>
          <span className="flex items-center gap-1.5 text-green-700 font-medium">
            <RefreshCcw className="h-4 w-4" /> 7-Day Returns
          </span>
          <span className="flex items-center gap-1.5 text-green-700 font-medium">
            <Users className="h-4 w-4" /> 50M+ Customers
          </span>
        </div>
      </div>

      {/* Hero Section - Compact */}
      <section className="relative py-6 md:py-10 px-4 bg-gradient-to-br from-violet-50 via-purple-50 to-background">
        <div className="container max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-red-500 text-white animate-pulse">🔥 HOT</Badge>
                <Badge variant="outline" className="text-xs">
                  <Eye className="w-3 h-3 mr-1" /> {viewingCount} viewing now
                </Badge>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certified Natural Gemstones
              </h1>
              <p className="text-sm text-muted-foreground max-w-xl">
                Transform your life with authentic, lab-certified gemstones. Trusted by 50 Million+ customers worldwide.
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Free Consultation
              </Button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-2 md:gap-4 mt-6 max-w-2xl">
            {[
              { value: "50M+", label: "Customers" },
              { value: "21+", label: "Years" },
              { value: "4.9★", label: "Rating" },
              { value: "100%", label: "Certified" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-2 bg-white/60 rounded-lg">
                <p className="text-lg md:text-xl font-bold text-violet-600">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Planet Filter - Horizontal Scroll */}
      <div className="sticky top-0 z-30 bg-background border-b shadow-sm">
        <div className="container max-w-screen-xl mx-auto px-4 py-3">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max pb-1">
              {planets.map((planet) => (
                <button
                  key={planet.value}
                  onClick={() => setSelectedPlanet(planet.value)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedPlanet === planet.value
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'bg-muted hover:bg-violet-100 text-foreground'
                  }`}
                >
                  <span>{planet.icon}</span>
                  <span>{planet.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-6">
        {/* Filters Row */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filteredGemstones.length}</span> gemstones
            </p>
            {(selectedPlanet !== "all" || selectedCategory !== "all" || priceRange !== "all") && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSelectedPlanet("all");
                  setSelectedCategory("all");
                  setPriceRange("all");
                }}
                className="text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4 mr-1" /> Clear
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[140px] h-9">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Precious">Precious</SelectItem>
                <SelectItem value="Semi-Precious">Semi-Precious</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[140px] h-9">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under5000">Under ₹5,000</SelectItem>
                <SelectItem value="5000-10000">₹5K - ₹10K</SelectItem>
                <SelectItem value="above10000">Above ₹10K</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-12">
          {filteredGemstones.map((gemstone) => {
            const discount = Math.round(((gemstone.originalPrice - gemstone.price) / gemstone.originalPrice) * 100);
            return (
              <Card 
                key={gemstone.id} 
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-violet-200 cursor-pointer"
                onClick={() => navigate(`/gemstone/${gemstone.id}`)}
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={gemstone.image}
                      alt={gemstone.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {gemstone.bestseller && (
                        <Badge className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5">
                          🔥 BESTSELLER
                        </Badge>
                      )}
                      <Badge className="bg-red-500 text-white text-[10px] px-1.5 py-0.5">
                        {discount}% OFF
                      </Badge>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-green-600 text-white text-[10px] px-1.5 py-0.5">
                      <Shield className="w-2.5 h-2.5 mr-0.5" /> Certified
                    </Badge>
                    {/* Quick Actions */}
                    <div className="absolute bottom-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-violet-50"
                        onClick={(e) => { e.stopPropagation(); }}
                      >
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    {/* Low Stock Warning */}
                    {gemstone.stock <= 10 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-red-600/90 text-white text-[10px] text-center py-1 font-medium">
                        Only {gemstone.stock} left!
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    {/* Planet Badge */}
                    <div className="flex items-center gap-1 mb-1">
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5">
                        {gemstone.planet}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">{gemstone.hindiName}</span>
                    </div>

                    {/* Name */}
                    <h3 className="font-semibold text-sm mb-1 line-clamp-1 group-hover:text-violet-600 transition-colors">
                      {gemstone.name}
                    </h3>

                    {/* Rating & Sold */}
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium ml-0.5">{gemstone.rating}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">({gemstone.reviews.toLocaleString()})</span>
                      <Badge variant="secondary" className="text-[10px] px-1 py-0 h-4 ml-auto">
                        {gemstone.sold} sold
                      </Badge>
                    </div>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {gemstone.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-[10px] bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-green-700">₹{gemstone.price.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground line-through">₹{gemstone.originalPrice.toLocaleString()}</span>
                    </div>

                    {/* CTA */}
                    <Button 
                      size="sm" 
                      className="w-full mt-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-xs h-8"
                      onClick={(e) => { e.stopPropagation(); navigate(`/gemstone/${gemstone.id}`); }}
                    >
                      <ShoppingCart className="w-3 h-3 mr-1" /> View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredGemstones.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg font-medium mb-2">No gemstones found</p>
            <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
            <Button onClick={() => { setSelectedPlanet("all"); setSelectedCategory("all"); setPriceRange("all"); }}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Introduction Section */}
        <section className="mb-12 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              The Ancient Science of Vedic Gemstones
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-6">
                For over 5,000 years, Vedic astrology has recognized the profound connection between celestial bodies and gemstones. 
                Each gemstone is a cosmic transmitter, channeling the energy of its ruling planet to bring balance, prosperity, 
                and positive transformation to the wearer's life.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/60 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <h4 className="font-bold text-foreground mb-1">Cosmic Energy</h4>
                  <p className="text-sm">Gemstones absorb and transmit planetary vibrations</p>
                </div>
                <div className="bg-white/60 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-bold text-foreground mb-1">Life Transformation</h4>
                  <p className="text-sm">Correct planetary imbalances in your birth chart</p>
                </div>
                <div className="bg-white/60 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🔮</div>
                  <h4 className="font-bold text-foreground mb-1">Ancient Wisdom</h4>
                  <p className="text-sm">Backed by 5000+ years of Vedic tradition</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navratna Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">The Sacred Navratna</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            The nine sacred gemstones representing the nine celestial bodies in Vedic astrology
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { 
                planet: "☀️ Sun (Surya)", 
                gem: "Ruby (Manik)", 
                color: "from-red-500 to-orange-500",
                benefits: "Leadership, confidence, vitality, success in government & authority",
                finger: "Ring finger",
                metal: "Gold"
              },
              { 
                planet: "🌙 Moon (Chandra)", 
                gem: "Pearl (Moti)", 
                color: "from-gray-400 to-slate-500",
                benefits: "Emotional balance, peace of mind, good relationships, mental clarity",
                finger: "Little finger",
                metal: "Silver"
              },
              { 
                planet: "🔴 Mars (Mangal)", 
                gem: "Red Coral (Moonga)", 
                color: "from-red-600 to-rose-600",
                benefits: "Courage, energy, victory over enemies, property gains",
                finger: "Ring finger",
                metal: "Gold/Copper"
              },
              { 
                planet: "💚 Mercury (Budh)", 
                gem: "Emerald (Panna)", 
                color: "from-emerald-500 to-green-600",
                benefits: "Intelligence, communication, business success, education",
                finger: "Little finger",
                metal: "Gold"
              },
              { 
                planet: "🟡 Jupiter (Guru)", 
                gem: "Yellow Sapphire (Pukhraj)", 
                color: "from-yellow-400 to-amber-500",
                benefits: "Wisdom, prosperity, marriage, children, spiritual growth",
                finger: "Index finger",
                metal: "Gold"
              },
              { 
                planet: "💎 Venus (Shukra)", 
                gem: "Diamond (Heera)", 
                color: "from-violet-400 to-purple-500",
                benefits: "Love, beauty, luxury, artistic talents, marital bliss",
                finger: "Middle/Ring finger",
                metal: "Platinum/Gold"
              },
              { 
                planet: "💙 Saturn (Shani)", 
                gem: "Blue Sapphire (Neelam)", 
                color: "from-blue-600 to-indigo-700",
                benefits: "Career growth, wealth, discipline, longevity, legal matters",
                finger: "Middle finger",
                metal: "Gold/Silver"
              },
              { 
                planet: "🟤 Rahu", 
                gem: "Hessonite (Gomed)", 
                color: "from-amber-600 to-orange-700",
                benefits: "Success, protection from enemies, overseas opportunities",
                finger: "Middle finger",
                metal: "Silver"
              },
              { 
                planet: "🐱 Ketu", 
                gem: "Cat's Eye (Lehsunia)", 
                color: "from-teal-500 to-cyan-600",
                benefits: "Spiritual growth, protection, intuition, moksha",
                finger: "Middle finger",
                metal: "Silver"
              },
            ].map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{item.planet}</h3>
                  </div>
                  <p className="text-violet-600 font-semibold mb-2">{item.gem}</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.benefits}</p>
                  <div className="flex gap-2 text-xs">
                    <Badge variant="outline">👆 {item.finger}</Badge>
                    <Badge variant="outline">💍 {item.metal}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Wear Gemstones */}
        <section className="mb-12 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Wear Gemstones for Maximum Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">1</div>
              <h3 className="font-bold mb-2">Consult an Astrologer</h3>
              <p className="text-sm text-muted-foreground">Get your birth chart analyzed to identify the most beneficial gemstone for your specific planetary positions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">2</div>
              <h3 className="font-bold mb-2">Choose the Right Weight</h3>
              <p className="text-sm text-muted-foreground">Gemstone weight should be calculated based on your body weight. Generally, 1 carat per 10-12 kg body weight is recommended.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">3</div>
              <h3 className="font-bold mb-2">Wear on Auspicious Day</h3>
              <p className="text-sm text-muted-foreground">Each gemstone should be worn on the day ruled by its planet during Shukla Paksha (waxing moon) for best results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center text-white text-2xl font-bold">4</div>
              <h3 className="font-bold mb-2">Energize with Mantras</h3>
              <p className="text-sm text-muted-foreground">Before wearing, the gemstone should be energized with specific Vedic mantras to activate its planetary powers.</p>
            </div>
          </div>
          <div className="mt-8 bg-white/60 rounded-xl p-4 md:p-6">
            <h3 className="font-bold text-lg mb-4 text-center">Auspicious Days for Wearing Each Gemstone</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-center text-sm">
              <div className="p-2 bg-red-50 rounded-lg">
                <p className="font-bold text-red-600">Sunday</p>
                <p className="text-xs">Ruby</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <p className="font-bold text-gray-600">Monday</p>
                <p className="text-xs">Pearl</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <p className="font-bold text-orange-600">Tuesday</p>
                <p className="text-xs">Coral</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <p className="font-bold text-green-600">Wednesday</p>
                <p className="text-xs">Emerald</p>
              </div>
              <div className="p-2 bg-yellow-50 rounded-lg">
                <p className="font-bold text-yellow-600">Thursday</p>
                <p className="text-xs">Yellow Sapphire</p>
              </div>
              <div className="p-2 bg-pink-50 rounded-lg">
                <p className="font-bold text-pink-600">Friday</p>
                <p className="text-xs">Diamond</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <p className="font-bold text-blue-600">Saturday</p>
                <p className="text-xs">Blue Sapphire, Gomed, Cat's Eye</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gemstone Quality Guide */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Understanding Gemstone Quality</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn the 4 key factors that determine a gemstone's astrological effectiveness
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="p-5 hover:shadow-md transition-shadow border-t-4 border-t-amber-500">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="font-bold text-lg mb-2">Color (Varnam)</h3>
              <p className="text-sm text-muted-foreground">The most important factor. A gemstone should have rich, vibrant, and uniform color saturation for maximum planetary energy transmission.</p>
            </Card>
            <Card className="p-5 hover:shadow-md transition-shadow border-t-4 border-t-emerald-500">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-bold text-lg mb-2">Clarity (Nirmaltva)</h3>
              <p className="text-sm text-muted-foreground">Fewer inclusions mean better light transmission. Eye-clean gemstones with minimal visible flaws are ideal for astrological purposes.</p>
            </Card>
            <Card className="p-5 hover:shadow-md transition-shadow border-t-4 border-t-blue-500">
              <div className="text-3xl mb-3">✂️</div>
              <h3 className="font-bold text-lg mb-2">Cut (Akruti)</h3>
              <p className="text-sm text-muted-foreground">Proper cut ensures optimal light reflection and energy flow. Traditional cuts like oval, cushion, or emerald cut are preferred.</p>
            </Card>
            <Card className="p-5 hover:shadow-md transition-shadow border-t-4 border-t-violet-500">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-bold text-lg mb-2">Carat Weight (Rati)</h3>
              <p className="text-sm text-muted-foreground">Weight determines the gemstone's power. Heavier stones have stronger planetary influence. Minimum 3 carats is typically recommended.</p>
            </Card>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Real Customer Transformations</h2>
          <p className="text-center text-muted-foreground mb-8">See how gemstones have changed lives</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Sharma",
                location: "Delhi",
                gemstone: "Yellow Sapphire",
                story: "After wearing Pukhraj recommended by AstroSage, I got promoted within 3 months and my daughter got married to a wonderful family. Jupiter's blessings are real!",
                rating: 5,
                image: "RS"
              },
              {
                name: "Priya Mehta",
                location: "Mumbai",
                gemstone: "Emerald",
                story: "I was struggling in my business for years. After consulting with AstroSage and wearing Panna, my communication improved and I closed 5 major deals in 6 months.",
                rating: 5,
                image: "PM"
              },
              {
                name: "Amit Verma",
                location: "Bangalore",
                gemstone: "Blue Sapphire",
                story: "Blue Sapphire changed my career completely. I was stuck in the same position for 4 years, but after wearing Neelam, I got my dream job with 3x salary within 45 days!",
                rating: 5,
                image: "AV"
              },
            ].map((story, idx) => (
              <Card key={idx} className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {story.image}
                  </div>
                  <div>
                    <p className="font-bold">{story.name}</p>
                    <p className="text-xs text-muted-foreground">{story.location}</p>
                  </div>
                  <Badge className="ml-auto bg-violet-100 text-violet-700">{story.gemstone}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">"{story.story}"</p>
                <div className="flex gap-0.5">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Gemstone Benefits by Life Area */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Gemstones for Every Life Challenge</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find the right gemstone based on what you want to improve in your life
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { area: "Career & Job", gems: "Blue Sapphire, Ruby", icon: "💼" },
              { area: "Wealth & Money", gems: "Yellow Sapphire, Emerald", icon: "💰" },
              { area: "Marriage & Love", gems: "Diamond, Yellow Sapphire", icon: "💕" },
              { area: "Health & Energy", gems: "Ruby, Red Coral", icon: "❤️" },
              { area: "Education", gems: "Emerald, Yellow Sapphire", icon: "📚" },
              { area: "Protection", gems: "Cat's Eye, Gomed", icon: "🛡️" },
            ].map((item, idx) => (
              <Card key={idx} className="p-4 text-center hover:shadow-md transition-shadow hover:border-violet-200 cursor-pointer">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm mb-1">{item.area}</h3>
                <p className="text-xs text-muted-foreground">{item.gems}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Certification Info */}
        <section className="mb-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 md:p-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <BadgeCheck className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">100% Certified & Authentic Gemstones</h2>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Every gemstone from AstroSage Shop comes with a certificate from government-approved gemological laboratories. 
              Our certificates include detailed analysis of origin, color, clarity, cut, carat weight, and treatment status.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white px-4 py-2 text-sm">GIA Certified</Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-sm">IGI Certified</Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-sm">GII Certified</Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-sm">SSL Certified</Badge>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 md:p-10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose AstroSage Gemstones?</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: BadgeCheck, title: "100% Certified", desc: "Government lab certified authenticity" },
              { icon: Sparkles, title: "Energized", desc: "Vedic mantras by expert astrologers" },
              { icon: RefreshCcw, title: "7-Day Returns", desc: "No questions asked policy" },
              { icon: Truck, title: "Free Shipping", desc: "Secure & insured delivery" },
            ].map((item, idx) => (
              <Card key={idx} className="text-center p-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-violet-100 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Planet Guide Quick Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Quick Planet Guide</h2>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
            {[
              { planet: "Sun", gem: "Ruby", color: "bg-red-100 text-red-700 border-red-200" },
              { planet: "Moon", gem: "Pearl", color: "bg-gray-100 text-gray-700 border-gray-200" },
              { planet: "Mars", gem: "Coral", color: "bg-orange-100 text-orange-700 border-orange-200" },
              { planet: "Mercury", gem: "Emerald", color: "bg-green-100 text-green-700 border-green-200" },
              { planet: "Jupiter", gem: "Pukhraj", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
              { planet: "Venus", gem: "Diamond", color: "bg-pink-100 text-pink-700 border-pink-200" },
              { planet: "Saturn", gem: "Neelam", color: "bg-blue-100 text-blue-700 border-blue-200" },
              { planet: "Rahu", gem: "Gomed", color: "bg-amber-100 text-amber-700 border-amber-200" },
              { planet: "Ketu", gem: "Cat's Eye", color: "bg-teal-100 text-teal-700 border-teal-200" },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPlanet(item.planet)}
                className={`p-2 rounded-lg border text-center hover:shadow-md transition-all ${item.color}`}
              >
                <p className="font-bold text-xs">{item.planet}</p>
                <p className="text-[10px]">{item.gem}</p>
              </button>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-4 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left text-sm md:text-base">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-6 md:p-10 text-center text-white mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Not Sure Which Gemstone is Right for You?</h2>
          <p className="text-violet-100 mb-6 max-w-xl mx-auto">
            Get a FREE personalized recommendation from our expert astrologers based on your birth chart.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-violet-600 hover:bg-violet-50 font-bold"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 font-bold"
            >
              <Phone className="mr-2 h-5 w-5" /> Call +91 98765 43210
            </Button>
          </div>
        </section>
      </div>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl p-3 md:hidden z-40">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">{filteredGemstones.length} gemstones</p>
            <p className="text-sm font-bold text-green-700">Starting ₹2,999</p>
          </div>
          <Button 
            className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 font-bold"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4" /> Free Consult
          </Button>
        </div>
      </div>

      {/* Bottom Padding for Mobile */}
      <div className="h-20 md:h-0" />
    </main>
  );
};

export default Gemstones;
