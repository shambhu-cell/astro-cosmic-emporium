import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { 
  Star, Shield, Award, ChevronRight, Sparkles, Heart, 
  MessageCircle, Check, Eye, Phone, ArrowRight, Truck, 
  RefreshCcw, BadgeCheck, Gem, Timer, ShoppingCart, 
  Flame, Crown, ChevronDown, Play, Package, Ruler,
  CircleDot, Hexagon, Info, Zap, Clock, CheckCircle2,
  Users, Quote, MapPin, Calendar, Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

// Product data for Yellow Sapphire variants
const yellowSapphireProducts = [
  {
    id: "ys-ceylon-premium",
    name: "Ceylon Yellow Sapphire",
    subtitle: "Premium Unheated",
    hindiName: "पुखराज",
    price: 24999,
    originalPrice: 39999,
    pricePerCarat: 4800,
    discount: 38,
    rating: 4.9,
    reviewCount: 3247,
    sold: "8,500+",
    inStock: true,
    stockLeft: 3,
    weight: "5.21 Carat",
    weightRatti: "5.73 Ratti",
    images: [yellowSapphireImage, yellowSapphireImage, yellowSapphireImage, yellowSapphireImage],
    origin: "Sri Lanka (Ceylon)",
    clarity: "VVS - Eye Clean",
    cut: "Cushion Mixed Cut",
    color: "Vivid Golden Yellow",
    treatment: "100% Natural Unheated",
    dimensions: "10.2 x 8.4 x 5.1 mm",
    certifications: ["GIA Certified", "IGI Certified", "Govt Lab"],
    sku: "YS-CEY-5521"
  },
  {
    id: "ys-ceylon-standard",
    name: "Ceylon Yellow Sapphire",
    subtitle: "Natural Certified",
    hindiName: "पुखराज",
    price: 14999,
    originalPrice: 21999,
    pricePerCarat: 3300,
    discount: 32,
    rating: 4.8,
    reviewCount: 2156,
    sold: "12,000+",
    inStock: true,
    stockLeft: 7,
    weight: "4.52 Carat",
    weightRatti: "4.97 Ratti",
    images: [yellowSapphireImage, yellowSapphireImage, yellowSapphireImage, yellowSapphireImage],
    origin: "Sri Lanka (Ceylon)",
    clarity: "VS - Very Slightly Included",
    cut: "Oval Mixed Cut",
    color: "Golden Yellow",
    treatment: "Natural Unheated",
    dimensions: "9.8 x 7.6 x 4.8 mm",
    certifications: ["IGI Certified", "Govt Lab"],
    sku: "YS-CEY-4452"
  }
];

// Jewelry configuration
const jewelryTypes = [
  { id: "loose", name: "Loose Stone", icon: Gem, priceModifier: 0, popular: false },
  { id: "ring", name: "Ring", icon: CircleDot, priceModifier: 3500, popular: true },
  { id: "pendant", name: "Pendant", icon: Hexagon, priceModifier: 2800, popular: false },
];

const metalOptions = [
  { id: "silver", name: "Sterling Silver 925", priceModifier: 0 },
  { id: "gold-18k", name: "18K Yellow Gold", priceModifier: 12000 },
  { id: "gold-22k", name: "22K Yellow Gold", priceModifier: 18000 },
  { id: "panchdhatu", name: "Panchdhatu (5 Metals)", priceModifier: 2000 },
];

const ringSizes = ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

const YellowSapphireProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedJewelry, setSelectedJewelry] = useState("ring");
  const [selectedMetal, setSelectedMetal] = useState("gold-18k");
  const [selectedSize, setSelectedSize] = useState("14");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [viewingCount, setViewingCount] = useState(67);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 32, seconds: 17 });

  // Get product data
  const product = yellowSapphireProducts.find(p => p.id === id) || yellowSapphireProducts[0];

  // Live viewing count simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => Math.max(45, Math.min(85, prev + Math.floor(Math.random() * 5) - 2)));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  // Calculate final price
  const jewelryPrice = jewelryTypes.find(j => j.id === selectedJewelry)?.priceModifier || 0;
  const metalPrice = selectedJewelry !== "loose" ? (metalOptions.find(m => m.id === selectedMetal)?.priceModifier || 0) : 0;
  const finalPrice = product.price + jewelryPrice + metalPrice;
  const originalFinalPrice = product.originalPrice + jewelryPrice + metalPrice;

  const specifications = [
    { label: "Weight", value: `${product.weight} (${product.weightRatti})` },
    { label: "Origin", value: product.origin },
    { label: "Color", value: product.color },
    { label: "Clarity", value: product.clarity },
    { label: "Cut & Shape", value: product.cut },
    { label: "Dimensions", value: product.dimensions },
    { label: "Treatment", value: product.treatment },
    { label: "SKU", value: product.sku },
  ];

  const benefits = [
    { icon: Crown, title: "Wisdom & Knowledge", desc: "Enhances intellect, learning ability, and decision-making power" },
    { icon: Sparkles, title: "Wealth & Prosperity", desc: "Attracts financial abundance and business success" },
    { icon: Heart, title: "Marital Harmony", desc: "Brings happiness in marriage and helps find a suitable partner" },
    { icon: Shield, title: "Health & Vitality", desc: "Improves liver function, digestion, and overall well-being" },
  ];

  const reviews = [
    { name: "Suresh Kumar", location: "Chennai", rating: 5, date: "2 weeks ago", text: "Exceptional quality! The color is exactly as shown. Got engaged within 3 months of wearing.", verified: true, helpful: 47 },
    { name: "Priya Sharma", location: "Mumbai", rating: 5, date: "1 month ago", text: "Best investment I made. Business has grown 40% after wearing this Pukhraj. Certificate is authentic.", verified: true, helpful: 35 },
    { name: "Rajesh Patel", location: "Ahmedabad", rating: 5, date: "1 month ago", text: "The expert consultation was incredibly helpful. They matched the perfect stone for my chart.", verified: true, helpful: 28 },
  ];

  const faqs = [
    { q: "Is this Yellow Sapphire natural and certified?", a: `Yes, this ${product.name} is 100% natural and comes with ${product.certifications.join(", ")} certifications. Each certificate includes detailed specifications including origin, treatment status, and quality parameters.` },
    { q: "How do I know if Yellow Sapphire will suit me?", a: "Yellow Sapphire is the gemstone of Jupiter (Guru) and is especially beneficial for Sagittarius and Pisces. However, we recommend a free consultation with our expert astrologers to ensure it's right for your birth chart before purchasing." },
    { q: "What is the ideal weight for me?", a: "The traditional recommendation is minimum 1/10th of your body weight in carats. For most adults, 3-5 carats is optimal. Our experts can guide you on the perfect weight during consultation." },
    { q: "How should I wear Yellow Sapphire?", a: "Wear on the index finger of your right hand, set in gold (preferred) or Panchdhatu. The ideal day is Thursday during Shukla Paksha. We provide complete wearing instructions and mantra with every purchase." },
    { q: "What is your return policy?", a: "We offer a 7-day money-back guarantee. If you're not satisfied with the stone's quality or it doesn't match your expectations, return it for a full refund - no questions asked." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Top Bar */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-b border-amber-100 dark:border-amber-900/50">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-6 text-sm">
          <span className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
            <Timer className="w-4 h-4" />
            <span className="font-medium">Sale ends in:</span>
            <span className="font-mono font-bold bg-amber-900 dark:bg-amber-100 text-amber-50 dark:text-amber-900 px-2 py-0.5 rounded">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </span>
          <span className="hidden md:flex items-center gap-2 text-amber-700 dark:text-amber-300">
            <Truck className="w-4 h-4" />
            Free Express Shipping
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/gemstones-collection" className="hover:text-foreground transition-colors">Gemstones</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/yellow-sapphire" className="hover:text-foreground transition-colors">Yellow Sapphire</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950/50 dark:to-yellow-950/50 border border-amber-200 dark:border-amber-800">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Certification Badge */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.certifications.map((cert, idx) => (
                  <Badge key={idx} className="bg-white/95 dark:bg-black/80 text-foreground border-0 shadow-lg backdrop-blur-sm">
                    <BadgeCheck className="w-3.5 h-3.5 mr-1 text-green-600" />
                    {cert}
                  </Badge>
                ))}
              </div>

              {/* Stock Badge */}
              <Badge className="absolute top-4 right-4 bg-red-500 text-white border-0 animate-pulse">
                Only {product.stockLeft} left
              </Badge>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute bottom-4 right-4 p-3 rounded-full bg-white/90 dark:bg-black/80 shadow-lg backdrop-blur-sm hover:scale-110 transition-transform"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx 
                      ? 'border-amber-500 shadow-lg scale-105' 
                      : 'border-border hover:border-amber-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
              <button className="w-20 h-20 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center hover:border-amber-400 transition-colors">
                <Play className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>

            {/* Trust Indicators - Desktop */}
            <div className="hidden lg:grid grid-cols-3 gap-3 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">100% Authentic</p>
                  <p className="text-xs text-muted-foreground">Govt. Lab Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Vedic Energized</p>
                  <p className="text-xs text-muted-foreground">By Expert Astrologers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <RefreshCcw className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">7-Day Returns</p>
                  <p className="text-xs text-muted-foreground">No Questions Asked</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-700">
                  Jupiter (Guru) Stone
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-700 dark:text-green-400">
                  {product.treatment}
                </Badge>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {product.name}
              </h1>
              <p className="text-lg text-amber-600 dark:text-amber-400 font-medium">
                {product.subtitle} • {product.weight}
              </p>
              
              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}`} />
                  ))}
                  <span className="text-sm font-semibold ml-1">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({product.reviewCount.toLocaleString()} reviews)</span>
                <span className="text-sm text-green-600 font-medium">{product.sold} sold</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200 dark:border-amber-800">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-foreground">₹{finalPrice.toLocaleString()}</span>
                <span className="text-lg text-muted-foreground line-through">₹{originalFinalPrice.toLocaleString()}</span>
                <Badge className="bg-green-500 text-white border-0">Save {product.discount}%</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Gemstone: ₹{product.pricePerCarat.toLocaleString()}/carat • Inclusive of all taxes
              </p>
              
              {/* Live Viewers */}
              <div className="flex items-center gap-2 mt-3 text-sm">
                <span className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-medium">
                  <Eye className="w-4 h-4 animate-pulse" />
                  {viewingCount} people viewing
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  12 bought in last 24 hours
                </span>
              </div>
            </div>

            {/* Jewelry Configuration */}
            <div className="space-y-5">
              {/* Jewelry Type */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">
                  Select Style
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {jewelryTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedJewelry(type.id)}
                      className={`relative p-4 rounded-xl border-2 transition-all ${
                        selectedJewelry === type.id
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30'
                          : 'border-border hover:border-amber-300'
                      }`}
                    >
                      {type.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] px-1.5 py-0.5 border-0">
                          Popular
                        </Badge>
                      )}
                      <type.icon className={`w-6 h-6 mx-auto mb-2 ${selectedJewelry === type.id ? 'text-amber-600' : 'text-muted-foreground'}`} />
                      <p className="text-sm font-medium">{type.name}</p>
                      {type.priceModifier > 0 && (
                        <p className="text-xs text-muted-foreground">+₹{type.priceModifier.toLocaleString()}</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Metal Selection (if not loose) */}
              {selectedJewelry !== "loose" && (
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Select Metal
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {metalOptions.map((metal) => (
                      <button
                        key={metal.id}
                        onClick={() => setSelectedMetal(metal.id)}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${
                          selectedMetal === metal.id
                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30'
                            : 'border-border hover:border-amber-300'
                        }`}
                      >
                        <p className="text-sm font-medium">{metal.name}</p>
                        {metal.priceModifier > 0 && (
                          <p className="text-xs text-muted-foreground">+₹{metal.priceModifier.toLocaleString()}</p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ring Size (if ring selected) */}
              {selectedJewelry === "ring" && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-foreground">
                      Ring Size (Indian)
                    </label>
                    <Dialog open={showSizeGuide} onOpenChange={setShowSizeGuide}>
                      <DialogTrigger asChild>
                        <button className="text-sm text-amber-600 hover:underline flex items-center gap-1">
                          <Ruler className="w-4 h-4" />
                          Size Guide
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Ring Size Guide</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <p className="text-sm text-muted-foreground">
                            Measure the inside diameter of a ring that fits well, then use the chart below:
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="p-2 bg-muted rounded">Size 10 = 15.7mm</div>
                            <div className="p-2 bg-muted rounded">Size 12 = 16.5mm</div>
                            <div className="p-2 bg-muted rounded">Size 14 = 17.3mm</div>
                            <div className="p-2 bg-muted rounded">Size 16 = 18.1mm</div>
                            <div className="p-2 bg-muted rounded">Size 18 = 18.9mm</div>
                            <div className="p-2 bg-muted rounded">Size 20 = 19.8mm</div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Need help? Our experts can guide you during consultation.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ringSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-lg border-2 text-sm font-medium transition-all ${
                          selectedSize === size
                            ? 'border-amber-500 bg-amber-500 text-white'
                            : 'border-border hover:border-amber-300'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <Button size="lg" className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg shadow-amber-500/25 h-14 text-base">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart • ₹{finalPrice.toLocaleString()}
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" variant="outline" className="border-green-500 text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950/30 h-12">
                  <Phone className="w-4 h-4 mr-2" />
                  Talk to Expert
                </Button>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white h-12">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
              
              <p className="text-center text-xs text-muted-foreground">
                💡 Not sure? Get free consultation before purchasing
              </p>
            </div>

            {/* Key Specifications */}
            <div className="p-5 rounded-2xl bg-muted/50 border">
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <Gem className="w-4 h-4 text-amber-600" />
                Quick Specifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {specifications.slice(0, 6).map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                    <span className="text-sm font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators - Mobile */}
            <div className="lg:hidden grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-muted/50 text-center">
                <Shield className="w-5 h-5 text-green-600" />
                <p className="text-xs font-medium">Authentic</p>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-muted/50 text-center">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <p className="text-xs font-medium">Energized</p>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-muted/50 text-center">
                <RefreshCcw className="w-5 h-5 text-blue-600" />
                <p className="text-xs font-medium">7-Day Return</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs Section */}
        <div className="mt-16">
          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 h-12 bg-muted/50 p-1 rounded-xl">
              <TabsTrigger value="benefits" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow">Benefits</TabsTrigger>
              <TabsTrigger value="specs" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow">Specifications</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow">Reviews</TabsTrigger>
              <TabsTrigger value="faqs" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow">FAQs</TabsTrigger>
            </TabsList>

            {/* Benefits Tab */}
            <TabsContent value="benefits" className="mt-8">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Choose Yellow Sapphire?</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Yellow Sapphire (Pukhraj) is the gemstone of Jupiter, the planet of wisdom, wealth, and divine blessings.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, idx) => (
                    <Card key={idx} className="border-amber-100 dark:border-amber-900/50 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30">
                          <benefit.icon className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Astrological Info */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200 dark:border-amber-800">
                  <h3 className="text-xl font-bold mb-6 text-center">Astrological Significance</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Crown className="w-8 h-8 text-amber-600" />
                      </div>
                      <h4 className="font-semibold mb-1">Ruling Planet</h4>
                      <p className="text-muted-foreground text-sm">Jupiter (Guru/Brihaspati)</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Star className="w-8 h-8 text-amber-600" />
                      </div>
                      <h4 className="font-semibold mb-1">Best For</h4>
                      <p className="text-muted-foreground text-sm">Sagittarius & Pisces</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-amber-600" />
                      </div>
                      <h4 className="font-semibold mb-1">Wear On</h4>
                      <p className="text-muted-foreground text-sm">Thursday, Index Finger</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specs" className="mt-8">
              <div className="max-w-3xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Gem className="w-5 h-5 text-amber-600" />
                      Complete Specifications
                    </h3>
                    <div className="space-y-4">
                      {specifications.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                          <span className="text-muted-foreground">{spec.label}</span>
                          <span className="font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Certifications */}
                    <div className="mt-8 p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-green-600" />
                        Certifications Included
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.map((cert, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white dark:bg-green-900/50">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        Every certificate includes detailed specifications, origin verification, and treatment disclosure.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="mt-8">
              <div className="max-w-4xl mx-auto">
                {/* Rating Summary */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="text-center">
                        <p className="text-5xl font-bold text-amber-600">{product.rating}</p>
                        <div className="flex items-center gap-1 my-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{product.reviewCount.toLocaleString()} reviews</p>
                      </div>
                      <Separator orientation="vertical" className="h-20 hidden md:block" />
                      <div className="flex-1 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold">98%</p>
                          <p className="text-xs text-muted-foreground">Recommend</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">95%</p>
                          <p className="text-xs text-muted-foreground">Saw Results</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">99%</p>
                          <p className="text-xs text-muted-foreground">Quality Match</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Individual Reviews */}
                <div className="space-y-4">
                  {reviews.map((review, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-bold">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-semibold flex items-center gap-2">
                                {review.name}
                                {review.verified && (
                                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                                    <CheckCircle2 className="w-3 h-3 mr-0.5" />
                                    Verified
                                  </Badge>
                                )}
                              </p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {review.location}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.text}</p>
                        <div className="mt-3 flex items-center gap-4 text-sm">
                          <button className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                            👍 Helpful ({review.helpful})
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <Button variant="outline">View All Reviews</Button>
                </div>
              </div>
            </TabsContent>

            {/* FAQs Tab */}
            <TabsContent value="faqs" className="mt-8">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-xl px-5">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Still have questions */}
                <Card className="mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Our expert astrologers are here to help you make the right choice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Consultation CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-900 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Not Sure If Yellow Sapphire Is Right For You?
          </h2>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Get personalized gemstone recommendation based on your birth chart. 
            Our experts have helped 50,000+ customers find their perfect stone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
              <Phone className="w-5 h-5 mr-2" />
              Free Expert Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-amber-200 text-sm mt-4">
            ⚡ Response within 5 hours • 25+ years of experience
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default YellowSapphireProduct;
