import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, ArrowLeft, Sparkles, Check, MessageCircle, Clock, Package, RefreshCcw, ChevronDown, Phone, Mail, MapPin, Users, TrendingUp, CheckCircle2, AlertCircle, Eye, CreditCard, Smartphone, Building2, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    deliveryDate: "October 22",
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
    description: "This magnificent Blue Sapphire (Neelam) is a natural, unheated gemstone sourced from the legendary mines of Sri Lanka. Known for its deep royal blue color and exceptional clarity, this gemstone has been carefully selected and certified by government-approved laboratories. Blue Sapphire is the gemstone of Saturn (Shani) and is renowned in Vedic astrology for its powerful effects on career, wealth, and protection. Each stone is energized by our expert astrologers with proper mantras and rituals before delivery.",
    customerReviews: [
      { name: "Rajesh Kumar", rating: 5, date: "2 weeks ago", comment: "Excellent quality gemstone! Got promotion within 3 months of wearing. Highly recommended!", verified: true },
      { name: "Priya Sharma", rating: 5, date: "1 month ago", comment: "Beautiful blue color and came with authentic certificate. Very happy with purchase.", verified: true },
      { name: "Amit Patel", rating: 4, date: "1 month ago", comment: "Good quality, but took little time for delivery. Overall satisfied with the product.", verified: true },
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
    deliveryDate: "October 22",
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
    description: "This exquisite Ruby (Manik) is sourced from the prestigious mines of Burma, known worldwide for producing the finest rubies. With its intense pigeon blood red color and exceptional clarity, this gemstone represents the power of the Sun (Surya). Ruby is highly regarded in Vedic astrology for enhancing leadership qualities, vitality, and success. Each stone is carefully certified and energized with Vedic mantras.",
    customerReviews: [
      { name: "Vikram Singh", rating: 5, date: "1 week ago", comment: "Amazing quality ruby! My confidence has improved significantly. Worth every penny!", verified: true },
      { name: "Meera Reddy", rating: 5, date: "3 weeks ago", comment: "Beautiful deep red color. Certificate is authentic. Highly satisfied!", verified: true },
      { name: "Arjun Mehta", rating: 4, date: "1 month ago", comment: "Good gemstone, slightly pricey but quality justifies it.", verified: true },
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
    deliveryDate: "October 22",
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
    description: "This stunning Emerald (Panna) hails from the emerald capital of the world - Colombia. Known for its vivid green color and clarity, emerald is the gemstone of Mercury (Budh) in Vedic astrology. It's renowned for enhancing intelligence, communication skills, and business acumen. Each emerald is carefully selected, certified, and energized to maximize its astrological benefits.",
    customerReviews: [
      { name: "Neha Kapoor", rating: 5, date: "2 weeks ago", comment: "Gorgeous green color! My communication skills have definitely improved. Great purchase!", verified: true },
      { name: "Rohit Sharma", rating: 4, date: "3 weeks ago", comment: "Good quality emerald. Delivery was quick. Happy with the product.", verified: true },
      { name: "Anjali Desai", rating: 5, date: "1 month ago", comment: "Beautiful gemstone with authentic certificate. Highly recommend!", verified: true },
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
    deliveryDate: "October 22",
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
    description: "This magnificent Yellow Sapphire (Pukhraj) is a premium quality gemstone from Sri Lanka, representing the planet Jupiter (Guru) in Vedic astrology. Known for its brilliant golden yellow color and exceptional clarity, this gemstone is highly sought after for attracting prosperity, wisdom, and marital happiness. Each stone is unheated, certified, and energized with traditional Vedic rituals.",
    customerReviews: [
      { name: "Suresh Gupta", rating: 5, date: "1 week ago", comment: "Excellent quality! My business has seen significant growth. Truly blessed!", verified: true },
      { name: "Kavita Joshi", rating: 5, date: "2 weeks ago", comment: "Beautiful yellow color and came with proper certificate. Very satisfied!", verified: true },
      { name: "Manish Agarwal", rating: 5, date: "3 weeks ago", comment: "Best investment I made! Quality is superb and effects are amazing!", verified: true },
    ]
  }
};

const ProductDetailsGemstone = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [viewingUsers, setViewingUsers] = useState(45);

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

  // Get product data based on URL parameter with ID mapping
  const productId = id || "blue-sapphire";
  const mappedId = idMapping[productId] || productId;
  const product = gemstonesData[mappedId];

  // If product not found, show default or redirect
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
      question: "How do I know if Blue Sapphire will suit me?",
      answer: "Blue Sapphire is a powerful gemstone recommended for Saturn (Shani). We recommend consulting with our expert astrologers before purchasing. Click 'Talk to Expert' for a free consultation based on your birth chart."
    },
    {
      question: "Is this gemstone certified?",
      answer: "Yes, every gemstone comes with an authentic certificate from a government-approved gemological laboratory. The certificate includes detailed specifications and confirms the gemstone's natural origin."
    },
    {
      question: "How is the gemstone energized?",
      answer: "Each gemstone is energized by our experienced astrologers using traditional Vedic mantras and rituals. The energization process enhances the gemstone's astrological benefits and aligns it with your energy."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7 days money back no question asked return policy. If you're not satisfied with your purchase, you can return it within 7 days for a full refund. The gemstone must be in original condition with certificate."
    },
    {
      question: "How long does delivery take?",
      answer: "We offer free express shipping across India. Most orders are delivered within 3-5 business days. You'll receive a tracking number once your order is shipped."
    },
    {
      question: "Can I get this gemstone in a different metal?",
      answer: "Yes! We can customize the setting in gold (available in 18K, 22K) or platinum. Contact our experts for customization options and pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Money Back Guarantee Bar */}
      <div className="bg-accent text-white py-3 text-center font-medium">
        ✓ 7 Days Money Back No Question Asked - 100% Authentic Gemstones
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/gemstones" className="text-muted-foreground hover:text-primary transition-colors">
            Gemstones
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden">
              <Badge className="absolute top-4 left-4 bg-accent text-white z-10">
                Bestseller ⭐
              </Badge>
              <Badge className="absolute top-4 right-4 bg-green-600 text-white z-10">
                Save {product.discount}%
              </Badge>
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary shadow-md scale-105' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                <span className="font-medium">Lab Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <Truck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <Award className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                <span className="font-medium">Energized</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Rating & Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-bold text-lg">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <p className="text-sm text-primary font-semibold">
              ⭐ {product.sold} Gemstones Sold - Trusted Worldwide
            </p>

            {/* Live Activity Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="default" className="bg-green-50 text-green-700 border-green-200 px-4 py-2">
                <Eye className="w-4 h-4 mr-2" />
                {viewingUsers} people viewing now
              </Badge>
              <Badge variant="default" className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Sale ends in 12:45:32
              </Badge>
            </div>

            {/* Title */}
            <div>
              <Badge variant="outline" className="mb-2">
                {product.hindiName} | {product.planet}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              <Badge className="bg-green-600 text-white px-3 py-1 text-base">Save ₹{(product.originalPrice - product.price).toLocaleString()}</Badge>
            </div>

            {/* Key Benefits */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-bold text-lg mb-3">Transform Your Life with {product.name}</h3>
                {product.keyPoints.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>


            {/* Quantity & CTA */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" className="text-lg py-6 bg-accent hover:bg-accent/90">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  ADD TO CART
                </Button>
                <Button size="lg" className="text-lg py-6 bg-primary hover:bg-primary/90">
                  BUY NOW
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg" className="w-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>

              {/* Payment & Shipping Info */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-2 flex-1">
                      <Truck className="h-4 w-4 text-green-600" />
                      <span className="font-medium">Free Delivery</span>
                    </div>
                    <span className="text-xs text-muted-foreground">All Orders</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-2 flex-1">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="font-medium">COD Available</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Pay on Delivery</span>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-xs font-medium mb-2">We Accept:</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-medium flex items-center gap-1"><CreditCard className="h-3 w-3" /> Cards</span>
                      <span className="font-medium flex items-center gap-1"><Smartphone className="h-3 w-3" /> UPI</span>
                      <span className="font-medium flex items-center gap-1"><Building2 className="h-3 w-3" /> Net Banking</span>
                      <span className="font-medium flex items-center gap-1"><Banknote className="h-3 w-3" /> COD</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stock & Delivery */}
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✓ In Stock - {product.stockLeft} items left at this price
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Order today to receive by {product.deliveryDate}
                </p>
              </div>

              {/* Expert Consultation CTA */}
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.open('https://wa.me/1234567890?text=Hi, I need expert consultation about ' + product.name, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to Gem Expert - FREE
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Certified Authentic</p>
                  <p className="text-muted-foreground">Lab certificate included</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RefreshCcw className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Easy Returns</p>
                  <p className="text-muted-foreground">30-day money back</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Truck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-muted-foreground">Secure packaging</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Secure Payment</p>
                  <p className="text-muted-foreground">100% safe checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs Section */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start h-auto p-1 bg-muted/50 rounded-lg overflow-x-auto flex-wrap md:flex-nowrap">
              <TabsTrigger value="description" className="flex-1 md:flex-none px-6 py-3 text-sm md:text-base whitespace-nowrap">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="flex-1 md:flex-none px-6 py-3 text-sm md:text-base whitespace-nowrap">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1 md:flex-none px-6 py-3 text-sm md:text-base whitespace-nowrap">
                Reviews ({product.reviewCount.toLocaleString()})
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1 md:flex-none px-6 py-3 text-sm md:text-base whitespace-nowrap">
                Shipping & Returns
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">About This Blue Sapphire</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <Separator className="my-4" />
                  <h4 className="text-lg font-bold">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">Customer Reviews</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <span className="font-bold text-lg">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviewCount.toLocaleString()} reviews)</span>
                      </div>
                    </div>
                    <Button variant="outline">Write a Review</Button>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-6">
                    {product.customerReviews.map((review, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{review.name}</p>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                  ))}
                                </div>
                                {review.verified && (
                                  <Badge variant="outline" className="text-xs">
                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                    Verified Purchase
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground ml-12">{review.comment}</p>
                        {idx < product.customerReviews.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Shipping Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Truck className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Free Express Shipping</p>
                          <p className="text-muted-foreground">All orders ship within 24 hours. Delivery in 3-5 business days across India.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Package className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Secure Packaging</p>
                          <p className="text-muted-foreground">Premium packaging with tamper-proof seals and certificate protection.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Track Your Order</p>
                          <p className="text-muted-foreground">Real-time tracking details sent to your email and SMS.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Return & Exchange Policy</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <RefreshCcw className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">7 Days Money Back Guarantee</p>
                          <p className="text-muted-foreground">Not satisfied? Return within 7 days for a full refund. No questions asked.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Easy Return Process</p>
                          <p className="text-muted-foreground">Contact us for return. We'll arrange free pickup. Refund processed within 5-7 days.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Return Conditions</p>
                          <p className="text-muted-foreground">Gemstone must be unworn, in original condition with certificate and packaging intact.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-4">Astrological Benefits</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience the transformative power of {product.name} in your life
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 bg-gradient-premium rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose AstroSage?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">21 Years of Trust</h3>
              <p className="text-muted-foreground">No 1 astrology platform since 2004</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">100% Authentic</h3>
              <p className="text-muted-foreground">Government lab certified gemstones</p>
            </div>
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Expert Energized</h3>
              <p className="text-muted-foreground">Activated by experienced astrologers</p>
            </div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 border-2 border-primary/20 rounded-xl p-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <h2 className="text-2xl font-bold text-center mb-6">Need Help? Our Experts Are Here</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <p className="font-medium mb-1">Call Us</p>
              <p className="text-sm text-muted-foreground">+91-9876543210</p>
              <p className="text-xs text-muted-foreground mt-1">Mon-Sat, 9 AM - 7 PM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <p className="font-medium mb-1">WhatsApp</p>
              <Button 
                variant="link" 
                className="text-primary p-0 h-auto"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                Chat with Expert
              </Button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <p className="font-medium mb-1">Email Us</p>
              <p className="text-sm text-muted-foreground">support@astrosage.com</p>
              <p className="text-xs text-muted-foreground mt-1">24-48 hour response</p>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16 bg-accent/10 border border-accent/20 rounded-xl p-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-accent">5 Lakh+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-accent">4.9/5</p>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground">Authentic Products</p>
            </div>
            <div>
              <Award className="h-8 w-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-accent">23+ Years</p>
              <p className="text-sm text-muted-foreground">Industry Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-primary/20 p-4 lg:hidden z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Total Price</p>
            <p className="text-xl font-bold text-primary">₹{(product.price * quantity).toLocaleString()}</p>
          </div>
          <Button 
            size="lg" 
            className="flex-1 bg-accent hover:bg-accent/90"
            onClick={() => {
              // Add to cart logic
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button 
            size="lg" 
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsGemstone;