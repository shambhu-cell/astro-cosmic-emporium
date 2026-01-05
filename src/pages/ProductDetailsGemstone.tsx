import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, Sparkles, Check, MessageCircle, Clock, Package, RefreshCcw, Phone, CheckCircle2, Eye, CreditCard, Smartphone, Building2, Banknote, Flame, Users, Zap, Gift, BadgeCheck, Timer, TrendingUp, Gem, CircleDot, Hexagon, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

// ID mapping for different URL formats
const idMapping: Record<string, string> = {
  "bs-1": "blue-sapphire",
  "bs-2": "blue-sapphire",
  "bs-3": "blue-sapphire",
  "bs-4": "blue-sapphire",
  "ys-1": "yellow-sapphire",
  "ys-2": "yellow-sapphire",
  "ys-3": "yellow-sapphire",
  "ys-4": "yellow-sapphire",
  "ruby-1": "ruby",
  "ruby-2": "ruby",
  "ruby-3": "ruby",
  "ruby-4": "ruby",
  "emerald-1": "emerald",
  "e-1": "emerald",
  "emerald-2": "emerald",
  "emerald-3": "emerald",
  "emerald-4": "emerald",
};

// Gemstone data repository
const gemstonesData: Record<string, any> = {
  "blue-sapphire": {
    id: "blue-sapphire",
    name: "Certified Blue Sapphire (Neelam)",
    hindiName: "नीलम",
    price: 14999,
    originalPrice: 24999,
    discount: 40,
    rating: 4.9,
    reviewCount: 8420,
    sold: "15,000+",
    inStock: true,
    stockLeft: 7,
    deliveryDate: "December 15",
    images: [blueSapphireImage, blueSapphireImage, blueSapphireImage, blueSapphireImage],
    weightOptions: ["3 Ratti (2.7 Carat)", "4 Ratti (3.6 Carat)", "5.25 Ratti (4.75 Carat)", "6 Ratti (5.4 Carat)", "7 Ratti (6.3 Carat)"],
    metalOptions: ["Silver 92.5%", "Panchdhatu", "Gold (18K)", "Platinum"],
    certification: "Government Lab Certified",
    origin: "Sri Lanka (Ceylon)",
    clarity: "Eye Clean (VVS)",
    cut: "Oval Mixed Cut",
    color: "Royal Blue",
    treatment: "No Heat, No Treatment",
    planet: "Saturn (Shani)",
    chakra: "Throat Chakra",
    zodiac: "Capricorn, Aquarius",
    benefits: [
      { icon: Sparkles, title: "Career Success", desc: "Attracts promotions & professional growth" },
      { icon: Shield, title: "Mental Clarity", desc: "Enhances focus and decision-making" },
      { icon: Star, title: "Wealth Magnet", desc: "Opens doors to financial opportunities" },
      { icon: Award, title: "Protection", desc: "Guards against negative energies" },
    ],
    keyPoints: [
      "Natural, unheated Blue Sapphire",
      "Energized by expert astrologers",
      "100% genuine with certificate",
      "Perfect for Saturn (Shani) remedies"
    ],
    description: "This magnificent Blue Sapphire (Neelam) is a natural, unheated gemstone sourced from the legendary mines of Sri Lanka. Known for its deep royal blue color and exceptional clarity, this gemstone has been carefully selected and certified by government-approved laboratories.",
    customerReviews: [
      { name: "Rajesh Kumar", rating: 5, date: "2 weeks ago", comment: "Excellent quality gemstone! Got promotion within 3 months of wearing. Highly recommended!", verified: true, location: "Mumbai" },
      { name: "Priya Sharma", rating: 5, date: "1 month ago", comment: "Beautiful blue color and came with authentic certificate. Very happy with purchase.", verified: true, location: "Delhi" },
      { name: "Amit Patel", rating: 4, date: "1 month ago", comment: "Good quality, but took little time for delivery. Overall satisfied with the product.", verified: true, location: "Ahmedabad" },
    ]
  },
  "ruby": {
    id: "ruby",
    name: "Certified Ruby (Manik)",
    hindiName: "माणिक",
    price: 11499,
    originalPrice: 16999,
    discount: 32,
    rating: 4.8,
    reviewCount: 6234,
    sold: "12,000+",
    inStock: true,
    stockLeft: 5,
    deliveryDate: "December 15",
    images: [rubyImage, rubyImage, rubyImage, rubyImage],
    weightOptions: ["3 Ratti (2.7 Carat)", "4 Ratti (3.6 Carat)", "5 Ratti (4.5 Carat)", "6 Ratti (5.4 Carat)", "7 Ratti (6.3 Carat)"],
    metalOptions: ["Silver 92.5%", "Panchdhatu", "Gold (18K)", "Platinum"],
    certification: "Government Lab Certified",
    origin: "Burma (Myanmar)",
    clarity: "Eye Clean (VVS)",
    cut: "Oval Mixed Cut",
    color: "Pigeon Blood Red",
    treatment: "No Heat, No Treatment",
    planet: "Sun (Surya)",
    chakra: "Root Chakra",
    zodiac: "Leo, Aries",
    benefits: [
      { icon: Star, title: "Leadership", desc: "Enhances authority and confidence" },
      { icon: Sparkles, title: "Vitality", desc: "Boosts energy and physical health" },
      { icon: Award, title: "Success", desc: "Brings fame and recognition" },
      { icon: Shield, title: "Protection", desc: "Guards against enemies and negativity" },
    ],
    keyPoints: [
      "Natural Burmese Ruby",
      "Energized for Sun (Surya)",
      "Government certified authentic",
      "Perfect for leadership roles"
    ],
    description: "This exquisite Ruby (Manik) is sourced from the prestigious mines of Burma, known worldwide for producing the finest rubies. With its intense pigeon blood red color and exceptional clarity, this gemstone represents the power of the Sun (Surya).",
    customerReviews: [
      { name: "Vikram Singh", rating: 5, date: "1 week ago", comment: "Amazing quality ruby! My confidence has improved significantly. Worth every penny!", verified: true, location: "Jaipur" },
      { name: "Meera Reddy", rating: 5, date: "3 weeks ago", comment: "Beautiful deep red color. Certificate is authentic. Highly satisfied!", verified: true, location: "Hyderabad" },
      { name: "Arjun Mehta", rating: 4, date: "1 month ago", comment: "Good gemstone, slightly pricey but quality justifies it.", verified: true, location: "Pune" },
    ]
  },
  "emerald": {
    id: "emerald",
    name: "Certified Emerald (Panna)",
    hindiName: "पन्ना",
    price: 9999,
    originalPrice: 14999,
    discount: 33,
    rating: 4.7,
    reviewCount: 5421,
    sold: "10,000+",
    inStock: true,
    stockLeft: 8,
    deliveryDate: "December 15",
    images: [emeraldImage, emeraldImage, emeraldImage, emeraldImage],
    weightOptions: ["3 Ratti (2.7 Carat)", "4 Ratti (3.6 Carat)", "5 Ratti (4.5 Carat)", "6 Ratti (5.4 Carat)"],
    metalOptions: ["Silver 92.5%", "Panchdhatu", "Gold (18K)"],
    certification: "Government Lab Certified",
    origin: "Colombia",
    clarity: "Eye Clean",
    cut: "Emerald Cut",
    color: "Vivid Green",
    treatment: "Minor Oil Treatment",
    planet: "Mercury (Budh)",
    chakra: "Heart Chakra",
    zodiac: "Gemini, Virgo",
    benefits: [
      { icon: Sparkles, title: "Intelligence", desc: "Enhances memory and learning" },
      { icon: Star, title: "Communication", desc: "Improves speech and expression" },
      { icon: Shield, title: "Healing", desc: "Promotes emotional balance" },
      { icon: Award, title: "Business Success", desc: "Attracts wealth in trade" },
    ],
    keyPoints: [
      "Natural Colombian Emerald",
      "Energized for Mercury (Budh)",
      "Certified by government lab",
      "Perfect for business & studies"
    ],
    description: "This stunning Emerald (Panna) hails from the emerald capital of the world - Colombia. Known for its vivid green color and clarity, emerald is the gemstone of Mercury (Budh) in Vedic astrology.",
    customerReviews: [
      { name: "Neha Kapoor", rating: 5, date: "2 weeks ago", comment: "Gorgeous green color! My communication skills have definitely improved. Great purchase!", verified: true, location: "Bangalore" },
      { name: "Rohit Sharma", rating: 4, date: "3 weeks ago", comment: "Good quality emerald. Delivery was quick. Happy with the product.", verified: true, location: "Chennai" },
      { name: "Anjali Desai", rating: 5, date: "1 month ago", comment: "Beautiful gemstone with authentic certificate. Highly recommend!", verified: true, location: "Kolkata" },
    ]
  },
  "yellow-sapphire": {
    id: "yellow-sapphire",
    name: "Certified Yellow Sapphire (Pukhraj)",
    hindiName: "पुखराज",
    price: 10999,
    originalPrice: 15999,
    discount: 31,
    rating: 4.9,
    reviewCount: 7890,
    sold: "18,000+",
    inStock: true,
    stockLeft: 6,
    deliveryDate: "December 15",
    images: [yellowSapphireImage, yellowSapphireImage, yellowSapphireImage, yellowSapphireImage],
    weightOptions: ["3 Ratti (2.7 Carat)", "4 Ratti (3.6 Carat)", "5 Ratti (4.5 Carat)", "6 Ratti (5.4 Carat)", "7 Ratti (6.3 Carat)"],
    metalOptions: ["Silver 92.5%", "Panchdhatu", "Gold (22K)", "Platinum"],
    certification: "Government Lab Certified",
    origin: "Sri Lanka (Ceylon)",
    clarity: "Eye Clean (VVS)",
    cut: "Cushion Cut",
    color: "Golden Yellow",
    treatment: "No Heat, No Treatment",
    planet: "Jupiter (Guru)",
    chakra: "Solar Plexus Chakra",
    zodiac: "Sagittarius, Pisces",
    benefits: [
      { icon: Star, title: "Prosperity", desc: "Attracts wealth and abundance" },
      { icon: Sparkles, title: "Wisdom", desc: "Enhances knowledge and spirituality" },
      { icon: Award, title: "Marriage", desc: "Brings marital bliss and harmony" },
      { icon: Shield, title: "Health", desc: "Improves overall well-being" },
    ],
    keyPoints: [
      "Natural unheated Yellow Sapphire",
      "Energized for Jupiter (Guru)",
      "100% certified authentic",
      "Perfect for prosperity & marriage"
    ],
    description: "This magnificent Yellow Sapphire (Pukhraj) is a premium quality gemstone from Sri Lanka, representing the planet Jupiter (Guru) in Vedic astrology. Known for its brilliant golden yellow color and exceptional clarity.",
    customerReviews: [
      { name: "Suresh Gupta", rating: 5, date: "1 week ago", comment: "Excellent quality! My business has seen significant growth. Truly blessed!", verified: true, location: "Lucknow" },
      { name: "Kavita Joshi", rating: 5, date: "2 weeks ago", comment: "Beautiful yellow color and came with proper certificate. Very satisfied!", verified: true, location: "Indore" },
      { name: "Manish Agarwal", rating: 5, date: "3 weeks ago", comment: "Best investment I made! Quality is superb and effects are amazing!", verified: true, location: "Surat" },
    ]
  }
};

// Jewelry type options
const jewelryTypes = [
  { id: "loose", name: "Loose Gemstone", icon: Gem, priceModifier: 0 },
  { id: "ring", name: "Ring", icon: CircleDot, priceModifier: 2500 },
  { id: "pendant", name: "Pendant", icon: Hexagon, priceModifier: 2000 },
];

const metalOptions = [
  { id: "silver", name: "Silver 92.5%", priceModifier: 0 },
  { id: "gold-18k", name: "18K Gold", priceModifier: 8000 },
  { id: "gold-22k", name: "22K Gold", priceModifier: 12000 },
  { id: "panchdhatu", name: "Panchdhatu", priceModifier: 1500 },
];

// Ring size systems with conversion
const ringSizeSystems = {
  indian: {
    name: "Indian",
    sizes: ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
  },
  us: {
    name: "US/Canada",
    sizes: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13"]
  },
  uk: {
    name: "UK/Australia",
    sizes: ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  }
};

const ProductDetailsGemstone = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [viewingUsers, setViewingUsers] = useState(47);
  const [recentBuyer, setRecentBuyer] = useState({ name: "Rahul M.", city: "Delhi", time: "2 min ago" });
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 32 });
  const [selectedJewelryType, setSelectedJewelryType] = useState("loose");
  const [selectedMetal, setSelectedMetal] = useState("silver");
  const [selectedSizeSystem, setSelectedSizeSystem] = useState<"indian" | "us" | "uk">("indian");
  const [selectedRingSize, setSelectedRingSize] = useState("");
  const [showRingSizeGuide, setShowRingSizeGuide] = useState(false);

  // Simulate live viewing count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingUsers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(35, Math.min(65, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 45, seconds: 32 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Recent buyer notifications
  useEffect(() => {
    const buyers = [
      { name: "Rahul M.", city: "Delhi", time: "2 min ago" },
      { name: "Priya S.", city: "Mumbai", time: "5 min ago" },
      { name: "Amit K.", city: "Bangalore", time: "8 min ago" },
      { name: "Sneha R.", city: "Pune", time: "12 min ago" },
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % buyers.length;
      setRecentBuyer(buyers[index]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const productId = id || "blue-sapphire";
  const mappedId = idMapping[productId] || productId;
  const product = gemstonesData[mappedId];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Gemstone Not Found</h2>
          <p className="text-muted-foreground mb-4">The gemstone you're looking for doesn't exist.</p>
          <Button onClick={() => window.location.href = '/gemstones'}>
            Browse All Gemstones
          </Button>
        </Card>
      </div>
    );
  }

  const specifications = {
    "Gemstone": product.name,
    "Origin": product.origin,
    "Color": product.color,
    "Clarity": product.clarity,
    "Cut & Shape": product.cut,
    "Treatment": product.treatment,
    "Certification": product.certification,
    "Metal": "92.5% Sterling Silver",
    "Planet": product.planet,
    "Chakra": product.chakra,
    "Zodiac": product.zodiac
  };

  const faqs = [
    {
      question: `How do I know if ${product.name.split('(')[0].trim()} will suit me?`,
      answer: `${product.name.split('(')[0].trim()} is recommended for ${product.planet}. We recommend consulting with our expert astrologers before purchasing. Click 'Talk to Expert' for a free consultation based on your birth chart.`
    },
    {
      question: "Is this gemstone certified?",
      answer: "Yes, every gemstone comes with an authentic certificate from a government-approved gemological laboratory. The certificate includes detailed specifications and confirms the gemstone's natural origin."
    },
    {
      question: "How is the gemstone energized?",
      answer: "Each gemstone is energized by our experienced astrologers using traditional Vedic mantras and rituals. The energization process enhances the gemstone's astrological benefits."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7 days money back no question asked return policy. If you're not satisfied, return within 7 days for a full refund."
    },
    {
      question: "How long does delivery take?",
      answer: "We offer free express shipping across India. Most orders are delivered within 3-5 business days."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Urgency Header Bar */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-2.5 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap text-sm md:text-base">
          <Flame className="h-4 w-4 animate-pulse" />
          <span className="font-bold">FLASH SALE ENDING:</span>
          <div className="flex items-center gap-1 font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
          <span className="hidden sm:inline">| Extra {product.discount}% OFF</span>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-green-50 border-b border-green-200 py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm flex-wrap">
          <span className="flex items-center gap-1.5 text-green-700 font-medium">
            <BadgeCheck className="h-4 w-4" /> 100% Authentic
          </span>
          <span className="flex items-center gap-1.5 text-green-700 font-medium">
            <Shield className="h-4 w-4" /> Lab Certified
          </span>
          <span className="flex items-center gap-1.5 text-green-700 font-medium">
            <RefreshCcw className="h-4 w-4" /> 7-Day Returns
          </span>
          <span className="flex items-center gap-1.5 text-green-700 font-medium">
            <Truck className="h-4 w-4" /> Free Shipping
          </span>
        </div>
      </div>

      {/* Recent Purchase Notification */}
      <div className="fixed bottom-20 left-4 z-50 animate-in slide-in-from-left duration-500 md:bottom-4">
        <div className="bg-white shadow-xl border rounded-lg p-3 max-w-xs flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-sm">
            <p className="font-semibold">{recentBuyer.name} from {recentBuyer.city}</p>
            <p className="text-muted-foreground text-xs">just purchased this • {recentBuyer.time}</p>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-4 md:py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-4 flex-wrap">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/gemstones" className="text-muted-foreground hover:text-primary">Gemstones</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden group">
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                <Badge className="bg-red-500 text-white font-bold animate-pulse">
                  🔥 BESTSELLER
                </Badge>
                <Badge className="bg-green-600 text-white font-bold">
                  {product.discount}% OFF
                </Badge>
              </div>
              <Badge className="absolute top-3 right-3 z-10 bg-black/70 text-white">
                <Eye className="w-3 h-3 mr-1" /> {viewingUsers} viewing
              </Badge>
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary ring-2 ring-primary/30' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Desktop Trust Badges */}
            <div className="hidden md:grid grid-cols-4 gap-3 pt-2">
              {[
                { icon: BadgeCheck, label: "Certified" },
                { icon: Truck, label: "Free Ship" },
                { icon: Sparkles, label: "Energized" },
                { icon: RefreshCcw, label: "Easy Return" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1 p-3 bg-muted/50 rounded-lg">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-4">
            {/* Social Proof Header */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviewCount.toLocaleString()} reviews)</span>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                ✓ {product.sold} Sold
              </Badge>
            </div>

            {/* Title & Planet */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {product.hindiName}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {product.planet}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{product.name}</h1>
            </div>

            {/* Jewelry Type Navigation */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-foreground">Choose Your Style:</h3>
              <div className="bg-muted/50 p-1.5 rounded-xl">
                <div className="grid grid-cols-3 gap-1.5">
                  {jewelryTypes.map((type) => {
                    const IconComponent = type.icon;
                    const isActive = selectedJewelryType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedJewelryType(type.id)}
                        className={`relative flex items-center justify-center gap-2 py-3 px-2 rounded-lg font-medium transition-all duration-300 ${
                          isActive
                            ? 'bg-background text-primary shadow-md border border-primary/20'
                            : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                        }`}
                      >
                        <IconComponent className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
                        <span className="text-sm">{type.name}</span>
                        {type.priceModifier > 0 && (
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 ml-0.5">
                            +₹{(type.priceModifier / 1000).toFixed(0)}K
                          </Badge>
                        )}
                        {isActive && (
                          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Quick Navigation Links */}
              <div className="flex items-center gap-2 pt-1 overflow-x-auto scrollbar-hide">
                <span className="text-xs text-muted-foreground whitespace-nowrap">Jump to:</span>
                <div className="flex items-center gap-1.5">
                  {[
                    { id: "specifications", label: "Specs" },
                    { id: "benefits", label: "Benefits" },
                    { id: "reviews", label: "Reviews" },
                    { id: "faqs", label: "FAQs" },
                  ].map((link) => (
                    <button
                      key={link.id}
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                      className="text-xs px-2.5 py-1 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Metal Options - Only show for Ring or Pendant */}
            {selectedJewelryType !== "loose" && (
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-foreground">Select Metal:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {metalOptions.map((metal) => (
                    <button
                      key={metal.id}
                      onClick={() => setSelectedMetal(metal.id)}
                      className={`flex flex-col items-center gap-1 p-3 rounded-lg border-2 transition-all ${
                        selectedMetal === metal.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className={`text-sm font-medium ${
                        selectedMetal === metal.id ? 'text-primary' : 'text-foreground'
                      }`}>
                        {metal.name}
                      </span>
                      {metal.priceModifier > 0 && (
                        <span className="text-xs text-muted-foreground">
                          +₹{metal.priceModifier.toLocaleString()}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Ring Size System - Only show for Ring */}
            {selectedJewelryType === "ring" && (
              <div className="space-y-4 bg-muted/30 rounded-xl p-4 border">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Select Ring Size</h3>
                  <Dialog open={showRingSizeGuide} onOpenChange={setShowRingSizeGuide}>
                    <DialogTrigger asChild>
                      <button className="text-xs text-primary hover:underline flex items-center gap-1">
                        <Ruler className="w-3 h-3" /> Find Your Size
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-center">Ring Size Guide</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6 py-4">
                        {/* Method 1 */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                            Using String/Paper Strip
                          </h4>
                          {/* Illustration for Method 1 */}
                          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 flex justify-center">
                            <svg viewBox="0 0 200 100" className="w-full max-w-[200px] h-auto">
                              {/* Hand outline */}
                              <ellipse cx="70" cy="60" rx="15" ry="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6"/>
                              {/* String wrapped around finger */}
                              <path d="M55 45 Q50 60 55 75" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
                              <path d="M85 45 Q90 60 85 75" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
                              <path d="M55 45 L55 35 L95 35" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4"/>
                              <path d="M85 45 L85 35" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4"/>
                              {/* Measurement arrows */}
                              <line x1="55" y1="30" x2="85" y2="30" stroke="hsl(var(--primary))" strokeWidth="2"/>
                              <polygon points="55,30 60,27 60,33" fill="hsl(var(--primary))"/>
                              <polygon points="85,30 80,27 80,33" fill="hsl(var(--primary))"/>
                              {/* Ruler */}
                              <rect x="120" y="20" width="60" height="60" rx="4" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"/>
                              <line x1="120" y1="35" x2="180" y2="35" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                              <line x1="120" y1="50" x2="180" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                              <line x1="120" y1="65" x2="180" y2="65" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                              <text x="150" y="52" textAnchor="middle" fontSize="8" fill="hsl(var(--primary))" fontWeight="bold">mm</text>
                            </svg>
                          </div>
                          <ol className="text-sm text-muted-foreground space-y-2 ml-8 list-decimal">
                            <li>Wrap a thin strip of paper or string around your ring finger</li>
                            <li>Mark the point where the ends meet</li>
                            <li>Measure the length in millimeters</li>
                            <li>Use the chart below to find your size</li>
                          </ol>
                        </div>
                        
                        {/* Method 2 */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary flex items-center gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                            Using Existing Ring
                          </h4>
                          {/* Illustration for Method 2 */}
                          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 flex justify-center">
                            <svg viewBox="0 0 200 100" className="w-full max-w-[200px] h-auto">
                              {/* Ring */}
                              <circle cx="60" cy="50" r="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="6"/>
                              <circle cx="60" cy="50" r="15" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="3"/>
                              {/* Diameter line */}
                              <line x1="45" y1="50" x2="75" y2="50" stroke="hsl(var(--foreground))" strokeWidth="2"/>
                              <circle cx="45" cy="50" r="2" fill="hsl(var(--foreground))"/>
                              <circle cx="75" cy="50" r="2" fill="hsl(var(--foreground))"/>
                              {/* Diameter label */}
                              <text x="60" y="42" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">diameter</text>
                              {/* Arrow pointing to ruler */}
                              <path d="M95 50 L115 50" stroke="hsl(var(--muted-foreground))" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                              <polygon points="115,50 110,47 110,53" fill="hsl(var(--muted-foreground))"/>
                              {/* Ruler */}
                              <rect x="125" y="30" width="55" height="40" rx="3" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"/>
                              {/* Ruler markings */}
                              {[0,1,2,3,4,5].map((i) => (
                                <g key={i}>
                                  <line x1={130 + i*8} y1="45" x2={130 + i*8} y2={i % 2 === 0 ? "55" : "52"} stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                                </g>
                              ))}
                              <text x="152" y="65" textAnchor="middle" fontSize="8" fill="hsl(var(--primary))" fontWeight="bold">mm</text>
                            </svg>
                          </div>
                          <ol className="text-sm text-muted-foreground space-y-2 ml-8 list-decimal">
                            <li>Take a ring that fits well on your finger</li>
                            <li>Measure the inner diameter in millimeters</li>
                            <li>Match it with the chart below</li>
                          </ol>
                        </div>

                        {/* Size Chart */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Ring Size Conversion Chart</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs border border-border rounded-lg overflow-hidden">
                              <thead className="bg-primary/10">
                                <tr>
                                  <th className="p-2 border-b border-r text-left">Indian</th>
                                  <th className="p-2 border-b border-r text-left">US/Canada</th>
                                  <th className="p-2 border-b border-r text-left">UK/AU</th>
                                  <th className="p-2 border-b text-left">Diameter (mm)</th>
                                </tr>
                              </thead>
                              <tbody className="text-muted-foreground">
                                <tr><td className="p-2 border-b border-r">6</td><td className="p-2 border-b border-r">4</td><td className="p-2 border-b border-r">H</td><td className="p-2 border-b">14.9</td></tr>
                                <tr className="bg-muted/30"><td className="p-2 border-b border-r">8</td><td className="p-2 border-b border-r">5</td><td className="p-2 border-b border-r">J</td><td className="p-2 border-b">15.7</td></tr>
                                <tr><td className="p-2 border-b border-r">10</td><td className="p-2 border-b border-r">6</td><td className="p-2 border-b border-r">L</td><td className="p-2 border-b">16.5</td></tr>
                                <tr className="bg-muted/30"><td className="p-2 border-b border-r">12</td><td className="p-2 border-b border-r">7</td><td className="p-2 border-b border-r">N</td><td className="p-2 border-b">17.3</td></tr>
                                <tr><td className="p-2 border-b border-r">14</td><td className="p-2 border-b border-r">8</td><td className="p-2 border-b border-r">P</td><td className="p-2 border-b">18.1</td></tr>
                                <tr className="bg-muted/30"><td className="p-2 border-b border-r">16</td><td className="p-2 border-b border-r">9</td><td className="p-2 border-b border-r">R</td><td className="p-2 border-b">18.9</td></tr>
                                <tr><td className="p-2 border-b border-r">18</td><td className="p-2 border-b border-r">10</td><td className="p-2 border-b border-r">T</td><td className="p-2 border-b">19.8</td></tr>
                                <tr className="bg-muted/30"><td className="p-2 border-b border-r">20</td><td className="p-2 border-b border-r">11</td><td className="p-2 border-b border-r">V</td><td className="p-2 border-b">20.6</td></tr>
                                <tr><td className="p-2 border-r">22</td><td className="p-2 border-r">12</td><td className="p-2 border-r">X</td><td className="p-2">21.4</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Tips */}
                        <div className="bg-primary/5 rounded-lg p-4 space-y-2">
                          <h4 className="font-semibold text-sm text-foreground">💡 Pro Tips</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Measure at end of day when fingers are slightly larger</li>
                            <li>• Avoid measuring when hands are cold</li>
                            <li>• If between sizes, choose the larger one</li>
                            <li>• Measure 2-3 times for accuracy</li>
                          </ul>
                        </div>

                        {/* WhatsApp Help */}
                        <a 
                          href="https://wa.me/919876543210?text=Hi, I need help finding my ring size for a gemstone ring"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Need Help? Chat with Expert
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                {/* Size System Dropdown */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Ring Size System:</label>
                  <select
                    value={selectedSizeSystem}
                    onChange={(e) => {
                      setSelectedSizeSystem(e.target.value as "indian" | "us" | "uk");
                      setSelectedRingSize("");
                    }}
                    className="w-full h-12 px-4 rounded-lg border-2 border-border bg-background text-foreground font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                  >
                    {Object.entries(ringSizeSystems).map(([key, system]) => (
                      <option key={key} value={key}>{system.name} Ring Size System</option>
                    ))}
                  </select>
                </div>

                {/* Ring Size Dropdown */}
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Select {ringSizeSystems[selectedSizeSystem].name} Ring Size:</label>
                  <select
                    value={selectedRingSize}
                    onChange={(e) => setSelectedRingSize(e.target.value)}
                    className="w-full h-12 px-4 rounded-lg border-2 border-border bg-background text-foreground font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                  >
                    <option value="">Select {ringSizeSystems[selectedSizeSystem].name} Size</option>
                    {ringSizeSystems[selectedSizeSystem].sizes.map((size) => (
                      <option key={size} value={size}>Size {size}</option>
                    ))}
                  </select>
                </div>

                {/* Size Selected Confirmation */}
                {selectedRingSize && (
                  <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 rounded-lg p-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Ring Size: <strong>{selectedRingSize}</strong> ({ringSizeSystems[selectedSizeSystem].name} System)</span>
                  </div>
                )}
              </div>
            )}

            {/* Why This Gemstone - Above CTA for better conversion */}
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-4">
                <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" /> Why Choose This {product.name.split('(')[0].trim()}?
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.keyPoints.map((point: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Benefits - Quick Scan */}
            <div className="grid grid-cols-2 gap-2">
              {product.benefits.map((benefit: any, idx: number) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Trust Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: BadgeCheck, title: "Lab Certified", desc: "Government approved" },
                { icon: RefreshCcw, title: "7-Day Returns", desc: "No questions asked" },
                { icon: Truck, title: "Free Shipping", desc: "Secure packaging" },
                { icon: Shield, title: "100% Genuine", desc: "Authentic guarantee" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <item.icon className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing - High Impact */}
            {(() => {
              const jewelryType = jewelryTypes.find(j => j.id === selectedJewelryType);
              const metal = metalOptions.find(m => m.id === selectedMetal);
              const jewelryModifier = jewelryType?.priceModifier || 0;
              const metalModifier = selectedJewelryType !== "loose" ? (metal?.priceModifier || 0) : 0;
              const totalPrice = product.price + jewelryModifier + metalModifier;
              const totalOriginalPrice = product.originalPrice + jewelryModifier + metalModifier;
              
              return (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl md:text-5xl font-bold text-green-700">₹{totalPrice.toLocaleString()}</span>
                    <span className="text-xl text-muted-foreground line-through">₹{totalOriginalPrice.toLocaleString()}</span>
                    <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                      SAVE ₹{(totalOriginalPrice - totalPrice).toLocaleString()}
                    </Badge>
                  </div>
                  {selectedJewelryType !== "loose" && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Base: ₹{product.price.toLocaleString()} + {jewelryType?.name}: ₹{jewelryModifier.toLocaleString()} + {metal?.name}: ₹{metalModifier.toLocaleString()}
                    </p>
                  )}
                  <p className="text-green-600 text-sm mt-2 font-medium flex items-center gap-1">
                    <Timer className="h-4 w-4" /> Offer valid for limited time only
                  </p>
                </div>
              );
            })()}

            {/* Quantity & CTA */}
            {(() => {
              const jewelryType = jewelryTypes.find(j => j.id === selectedJewelryType);
              const metal = metalOptions.find(m => m.id === selectedMetal);
              const jewelryModifier = jewelryType?.priceModifier || 0;
              const metalModifier = selectedJewelryType !== "loose" ? (metal?.priceModifier || 0) : 0;
              const unitPrice = product.price + jewelryModifier + metalModifier;
              
              return (
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <label className="font-semibold text-sm">Qty:</label>
                    <div className="flex items-center border rounded-lg">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 hover:bg-muted font-bold"
                      >
                        -
                      </button>
                      <span className="px-5 py-2 border-x font-semibold">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 hover:bg-muted font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-red-600 font-medium">Only {product.stockLeft} left!</span>
                  </div>

                  {/* Selection Summary */}
                  {selectedJewelryType !== "loose" && (
                    <div className="bg-muted/50 rounded-lg p-3 text-sm">
                      <p className="font-medium">Your Selection:</p>
                      <p className="text-muted-foreground">
                        {product.name} • {jewelryType?.name} • {metal?.name}
                        {selectedJewelryType === "ring" && selectedRingSize && ` • Size ${selectedRingSize} (${ringSizeSystems[selectedSizeSystem].name})`}
                      </p>
                    </div>
                  )}

                  {/* Primary CTAs */}
                  <div className="grid grid-cols-1 gap-2">
                    <Button size="lg" className="text-lg py-7 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg shadow-orange-500/30 font-bold">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      ADD TO CART - ₹{(unitPrice * quantity).toLocaleString()}
                    </Button>
                    <Button size="lg" className="text-lg py-7 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/30 font-bold">
                      <Zap className="mr-2 h-5 w-5" />
                      BUY NOW - INSTANT CHECKOUT
                    </Button>
                  </div>

                  {/* Secondary Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Heart className="mr-2 h-4 w-4" /> Wishlist
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>

                  {/* Stock & Delivery Urgency */}
                  <div className="space-y-2">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                      <Flame className="h-5 w-5 text-red-500 shrink-0" />
                      <div>
                        <p className="text-red-700 font-semibold text-sm">🔥 High Demand - Only {product.stockLeft} left at this price!</p>
                        <p className="text-red-600 text-xs">23 people added this to cart in last hour</p>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 font-medium text-sm flex items-center gap-2">
                        <Truck className="h-4 w-4" /> Order in next 3 hrs 45 min - Get by {product.deliveryDate}
                      </p>
                      <p className="text-green-700 text-xs mt-1">FREE Express Shipping • Secure Packaging</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Payment Options */}
            <Card className="bg-muted/30">
              <CardContent className="p-3 space-y-2">
                <div className="flex items-center gap-3 flex-wrap text-xs">
                  <span className="font-medium">Pay with:</span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded"><CreditCard className="h-3 w-3" /> Cards</span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded"><Smartphone className="h-3 w-3" /> UPI</span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded"><Building2 className="h-3 w-3" /> NetBanking</span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded"><Banknote className="h-3 w-3" /> COD</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3" /> 100% Secure Payment • SSL Encrypted
                </div>
              </CardContent>
            </Card>

            {/* Expert Help */}
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi, I need expert consultation about ' + product.name, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to Gem Expert - FREE Consultation
            </Button>

          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "50M+", label: "Happy Customers", icon: Users },
            { number: "21+", label: "Years Trusted", icon: Award },
            { number: "4.9★", label: "Avg Rating", icon: Star },
            { number: "47K+", label: "Consultations", icon: MessageCircle },
          ].map((stat, idx) => (
            <Card key={idx} className="text-center p-4">
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-primary">{stat.number}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="mt-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-2xl p-6 md:p-10 scroll-mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Astrological Benefits</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
            Experience powerful transformation with {product.name}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.benefits.map((benefit: any, idx: number) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Tabs */}
        <div id="specifications" className="mt-12 scroll-mt-4">
          <Tabs defaultValue="reviews" className="w-full" id="reviews">
            <TabsList className="w-full justify-start h-auto p-1 bg-muted/50 rounded-lg overflow-x-auto">
              <TabsTrigger value="reviews" className="px-4 py-2.5 text-sm whitespace-nowrap">
                Reviews ({product.reviewCount.toLocaleString()})
              </TabsTrigger>
              <TabsTrigger value="specifications" className="px-4 py-2.5 text-sm whitespace-nowrap">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="description" className="px-4 py-2.5 text-sm whitespace-nowrap">
                Description
              </TabsTrigger>
              <TabsTrigger value="shipping" className="px-4 py-2.5 text-sm whitespace-nowrap">
                Shipping
              </TabsTrigger>
            </TabsList>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Customer Reviews</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-bold">{product.rating}</span>
                        <span className="text-muted-foreground text-sm">based on {product.reviewCount.toLocaleString()} reviews</span>
                      </div>
                    </div>
                    <Button>Write a Review</Button>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-6">
                    {product.customerReviews.map((review: any, idx: number) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{review.name}</p>
                              <div className="flex items-center gap-2 flex-wrap">
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                {review.verified && (
                                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle2 className="h-3 w-3 mr-1" /> Verified
                                  </Badge>
                                )}
                                <span className="text-xs text-muted-foreground">{review.location}</span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground text-sm ml-13 pl-13">{review.comment}</p>
                        {idx < product.customerReviews.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium text-sm">{key}:</span>
                        <span className="text-muted-foreground text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">About This {product.name.split('(')[0].trim()}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <h4 className="font-bold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.keyPoints.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Truck className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Free Express Shipping</p>
                          <p className="text-sm text-muted-foreground">Delivery in 3-5 business days across India.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Package className="h-5 w-5 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Secure Packaging</p>
                          <p className="text-sm text-muted-foreground">Premium tamper-proof packaging with certificate.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-xl font-bold mb-4">Return Policy</h3>
                    <div className="flex items-start gap-3">
                      <RefreshCcw className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="font-medium">7 Days Money Back Guarantee</p>
                        <p className="text-sm text-muted-foreground">Not satisfied? Return within 7 days for full refund. No questions asked.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQs */}
        <div id="faqs" className="mt-12 scroll-mt-4">
          <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Your Life?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join {product.sold} happy customers who have experienced positive changes with our certified gemstones.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Button size="lg" className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 font-bold">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1 border-2 font-bold">
              <Phone className="mr-2 h-5 w-5" /> Call Expert
            </Button>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center pb-24 md:pb-8">
          <p className="text-sm text-muted-foreground mb-2">Need help? Our experts are available 24/7</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="ghost" size="sm">
              <Phone className="mr-2 h-4 w-4" /> +91 98765 43210
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl p-3 md:hidden z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</p>
            <p className="text-xl font-bold text-green-700">₹{product.price.toLocaleString()}</p>
          </div>
          <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 font-bold py-6">
            <ShoppingCart className="mr-2 h-5 w-5" /> ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsGemstone;
