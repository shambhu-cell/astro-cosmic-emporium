import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, ArrowLeft, Sparkles, Check, Zap, TrendingUp, Clock, Eye, CreditCard, Smartphone, Building2, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductDetailsYantra = () => {
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

  const product = {
    id: id || "1",
    name: "Sri Yantra - Sacred Geometry for Prosperity",
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    rating: 4.9,
    reviews: 14230,
    sold: "30,000+",
    inStock: true,
    deliveryDate: "October 18",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    size: "3x3 inches",
    energization: "Lakshmi Mantra Energized",
    benefits: [
      { icon: TrendingUp, title: "Wealth Attraction", desc: "Magnetizes money & prosperity" },
      { icon: Sparkles, title: "Success Multiplier", desc: "Accelerates business & career growth" },
      { icon: Shield, title: "Vastu Protection", desc: "Removes negative energies from space" },
      { icon: Award, title: "Divine Blessings", desc: "Invokes Goddess Lakshmi's grace" },
    ],
    keyPoints: [
      "Hand-engraved sacred geometry - 9 interlocking triangles",
      "Energized with 1008 Lakshmi mantras",
      "Perfect for home, office & shop",
      "Attracts abundance & removes financial obstacles"
    ],
    howToUse: [
      { step: "1. Placement", desc: "Place in North or East direction for maximum benefits. Ideal for puja room, office desk, or cash counter." },
      { step: "2. Cleansing", desc: "Clean with water mixed with Ganga jal every Friday. Wipe dry with soft cloth." },
      { step: "3. Worship", desc: "Light a ghee diya in front of the Yantra every morning and evening. Chant 'Om Shreem Maha Lakshmiyei Namaha' 11 times." },
      { step: "4. Offerings", desc: "Offer fresh flowers, incense, and kumkum on Fridays for best results." }
    ],
    faqs: [
      {
        q: "Where should I place the Sri Yantra?",
        a: "Place it in the North (for wealth) or East (for overall prosperity) direction. Best locations: puja room, living room, office desk, or shop cash counter. Ensure it's at a clean, elevated place."
      },
      {
        q: "Do I need to energize it myself?",
        a: "No! Your Sri Yantra comes fully energized with 1008 Lakshmi mantras by our expert pandits. However, you can perform daily worship to maintain its energy and strengthen the connection."
      },
      {
        q: "How long does it take to see results?",
        a: "Most devotees experience positive shifts within 21-40 days of regular worship. Results depend on your faith, consistency in worship, and karmic factors. Keep clean and worship daily for best results."
      }
    ],
    upsells: [
      { name: "Lakshmi Idol (3 inch)", desc: "Brass goddess statue", price: 899 },
      { name: "Yantra Stand", desc: "Wooden display stand", price: 399 },
      { name: "Puja Kit", desc: "Complete worship essentials", price: 699 },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Trust Bar */}
      <div className="bg-accent text-white py-3 text-center font-medium">
        🔱 Energized with 1008 Lakshmi Mantras - Attract Wealth & Prosperity
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl sm:rounded-2xl overflow-hidden">
              <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-accent text-white z-10 text-xs sm:text-sm">
                🏆 Bestseller
              </Badge>
              <Badge className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-600 text-white z-10 text-xs sm:text-sm">
                {product.discount}% OFF
              </Badge>
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary shadow-md scale-105' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <span className="font-medium">Energized</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                <span className="font-medium">30-Day Returns</span>
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
              <span className="text-muted-foreground">({product.reviews.toLocaleString()} Happy Customers)</span>
            </div>
            <p className="text-sm text-primary font-semibold">
              ⭐ {product.sold} Yantras Blessed - Life-Changing Results
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">{product.name}</h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">{product.size} • {product.energization}</p>
            </div>

            {/* Pricing */}
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-xl sm:text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              <Badge className="bg-green-600 text-white px-2 sm:px-3 py-1 text-sm sm:text-base">{product.discount}% OFF</Badge>
            </div>

            {/* Key Benefits */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-bold text-lg mb-3">🔱 Most Powerful Wealth Yantra</h3>
                {product.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quantity & CTA */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <label className="font-semibold text-sm sm:text-base">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 sm:px-4 py-2 hover:bg-muted text-sm sm:text-base"
                  >
                    -
                  </button>
                  <span className="px-4 sm:px-6 py-2 border-x text-sm sm:text-base">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 sm:px-4 py-2 hover:bg-muted text-sm sm:text-base"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <Button size="lg" className="text-sm sm:text-base md:text-lg py-5 sm:py-6 bg-accent hover:bg-accent/90">
                  <ShoppingCart className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden xs:inline">ADD TO CART</span>
                  <span className="xs:hidden">ADD</span>
                </Button>
                <Button size="lg" className="text-sm sm:text-base md:text-lg py-5 sm:py-6 bg-primary hover:bg-primary/90">
                  <Zap className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden xs:inline">BUY NOW</span>
                  <span className="xs:hidden">BUY</span>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <Button variant="outline" size="lg" className="text-sm sm:text-base">
                  <Heart className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Wishlist</span>
                </Button>
                <Button variant="outline" size="lg" className="text-sm sm:text-base">
                  <Share2 className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Share</span>
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

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
              <p className="text-green-800 font-medium text-sm sm:text-base">
                ✓ In Stock - Order Now, Start Attracting Wealth by {product.deliveryDate}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Divine Benefits of Sri Yantra</h2>
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

        {/* How to Use */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How to Worship Sri Yantra</h2>
          <p className="text-center text-muted-foreground mb-10">
            Follow these simple steps for maximum prosperity and divine blessings
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {product.howToUse.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.step}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {product.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Upsells */}
        <div className="mt-12 border-2 border-dashed border-primary/30 rounded-xl p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-xl font-bold mb-4">Complete Your Prosperity Setup</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {product.upsells.map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <Badge className="bg-primary">₹{item.price}</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-2">
                    Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-premium rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-10">Why AstroSage Yantras Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Vedic Energization</h3>
              <p className="text-muted-foreground">1008 mantras by expert pandits</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Precision Geometry</h3>
              <p className="text-muted-foreground">Hand-engraved sacred patterns</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">30,000+ Success Stories</h3>
              <p className="text-muted-foreground">Proven results since 2001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsYantra;