import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, ArrowLeft, Sparkles, Check, Zap, Award, Users, CheckCircle2, Clock, Eye, CreditCard, Smartphone, Building2, Banknote, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { jadiProducts } from "@/data/jadiProducts";

const ProductDetailsJadi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [viewingUsers, setViewingUsers] = useState(32);

  const product = jadiProducts[id || "bharangi-root"];

  // Simulate live viewing count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingUsers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(25, Math.min(50, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!product) {
      navigate("/jadi-roots");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  // Dynamic FAQs
  const faqs = [
    {
      question: `What are the benefits of ${product.name}?`,
      answer: `${product.name} is associated with planet ${product.planetConnection} and ${product.benefits[0].toLowerCase()}. ${product.description}`
    },
    {
      question: "Is this root natural and authentic?",
      answer: "Yes! All our Jadi (tree roots) are 100% natural, sourced from sacred trees, and verified by Vedic astrologers. Each root comes with proper authentication and energization."
    },
    {
      question: "How should I wear this root?",
      answer: `${product.howToUse}. It's recommended to wear it after proper consultation with an astrologer for best results.`
    },
    {
      question: "When will I see the effects?",
      answer: "The effects of Jadi roots typically begin to manifest within 40 days of regular wearing. However, individual experiences may vary based on your birth chart and planetary positions."
    },
    {
      question: "Do you offer returns?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, return it within 30 days for a full refund."
    }
  ];

  // Dynamic testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: `The ${product.name} has been amazing! I've been wearing it for a month and can feel positive changes in my life. Highly authentic!`,
      verified: true
    },
    {
      name: "Priya Singh",
      rating: 5,
      text: `Excellent quality root. Properly energized and comes with proper instructions. Customer service was also very helpful.`,
      verified: true
    },
    {
      name: "Amit Sharma",
      rating: 5,
      text: `I bought this for ${product.purpose.toLowerCase()} and it's been working wonderfully. Definitely recommend!`,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Free Shipping Bar */}
      <div className="bg-accent text-white py-2 md:py-3 text-center font-medium text-xs sm:text-sm md:text-base px-4">
        🚚 Free Shipping on Orders Over ₹999 - Order Now!
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-4 md:py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 md:mb-6 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/jadi-roots" className="hover:text-primary">Jadi Roots</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl md:rounded-2xl overflow-hidden">
              <Badge className="absolute top-3 md:top-4 left-3 md:left-4 z-10 backdrop-blur text-xs md:text-sm" style={{ backgroundColor: product.planetColor }}>
                <Leaf className="h-3 w-3 mr-1" />
                {product.planetConnection} Remedy
              </Badge>
              {product.discount > 0 && (
                <Badge className="absolute top-3 md:top-4 right-3 md:right-4 bg-green-600 text-white z-10 text-xs md:text-sm">
                  {product.discount}% OFF
                </Badge>
              )}
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2 md:gap-3">
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

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 shrink-0" />
                <span className="font-medium">Natural Root</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Truck className="h-4 w-4 md:h-5 md:w-5 text-green-600 shrink-0" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-600 shrink-0" />
                <span className="font-medium">30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-4 md:space-y-6">
            {/* Rating & Social Proof */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-bold text-base md:text-lg">{product.rating}</span>
              <span className="text-xs md:text-sm text-muted-foreground">({product.reviews.toLocaleString()} Reviews)</span>
            </div>

            {/* Live Activity Badges */}
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <Badge variant="default" className="bg-green-50 text-green-700 border-green-200 px-3 md:px-4 py-1.5 md:py-2 text-xs">
                <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                {viewingUsers} viewing
              </Badge>
              <Badge variant="default" className="bg-orange-50 text-orange-700 border-orange-200 px-3 md:px-4 py-1.5 md:py-2 text-xs">
                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Sale ends soon
              </Badge>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-sm md:text-lg text-muted-foreground">Associated with {product.planetConnection}</p>
            </div>

            {/* Pricing */}
            <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
              <span className="text-3xl md:text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl md:text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <Badge className="bg-green-600 text-white px-2 md:px-3 py-1 text-sm md:text-base">Save {product.discount}%</Badge>
                </>
              )}
            </div>

            {/* Key Benefits Card */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-3 md:p-4 space-y-2">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  Purpose & Benefits
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3">{product.purpose}</p>
                {product.keyHighlights?.slice(0, 4).map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-accent shrink-0" />
                    <span className="text-xs md:text-sm">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm pt-2">
              <div className="flex items-center gap-2">
                <Users className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                <span><span className="font-bold text-foreground">{product.sold}</span> sold</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                <span className="text-green-600 font-medium">In Stock</span>
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold text-sm md:text-base">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 md:px-4 py-2 hover:bg-muted text-sm md:text-base"
                  >
                    -
                  </button>
                  <span className="px-4 md:px-6 py-2 border-x text-sm md:text-base">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 md:px-4 py-2 hover:bg-muted text-sm md:text-base"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <Button size="lg" className="text-sm md:text-base lg:text-lg py-5 md:py-6 lg:py-7 bg-accent hover:bg-accent/90 font-bold shadow-lg">
                  <ShoppingCart className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                  <span className="whitespace-nowrap">ADD TO CART</span>
                </Button>
                <Button size="lg" className="text-sm md:text-base lg:text-lg py-5 md:py-6 lg:py-7 bg-primary hover:bg-primary/90 font-bold shadow-lg">
                  <span className="whitespace-nowrap">BUY NOW</span>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <Button variant="outline" size="lg" className="text-xs sm:text-sm md:text-base">
                  <Heart className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="text-xs sm:text-sm md:text-base">
                  <Share2 className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Share
                </Button>
              </div>

              {/* Payment & Shipping Info */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-3 md:p-4 space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm">
                    <div className="flex items-center gap-2 flex-1">
                      <Truck className="h-3 w-3 md:h-4 md:w-4 text-green-600 shrink-0" />
                      <span className="font-medium">Free Delivery</span>
                    </div>
                    <span className="text-xs text-muted-foreground">All Orders</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm">
                    <div className="flex items-center gap-2 flex-1">
                      <Shield className="h-3 w-3 md:h-4 md:w-4 text-green-600 shrink-0" />
                      <span className="font-medium">COD Available</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Pay on Delivery</span>
                  </div>
                  <div className="border-t pt-2 md:pt-3">
                    <p className="text-xs font-medium mb-2">We Accept:</p>
                    <div className="flex items-center gap-2 md:gap-3 text-xs text-muted-foreground flex-wrap">
                      <span className="font-medium flex items-center gap-1"><CreditCard className="h-3 w-3" /> Cards</span>
                      <span className="font-medium flex items-center gap-1"><Smartphone className="h-3 w-3" /> UPI</span>
                      <span className="font-medium flex items-center gap-1"><Building2 className="h-3 w-3" /> Net Banking</span>
                      <span className="font-medium flex items-center gap-1"><Banknote className="h-3 w-3" /> COD</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-3 md:p-4">
              <p className="text-green-800 dark:text-green-200 font-medium text-xs md:text-sm">
                ✓ In Stock - Ships within 24 hours • Free Delivery Pan India
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 md:mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="description" className="text-xs md:text-sm py-2 md:py-3">Description</TabsTrigger>
              <TabsTrigger value="usage" className="text-xs md:text-sm py-2 md:py-3">How to Use</TabsTrigger>
              <TabsTrigger value="details" className="text-xs md:text-sm py-2 md:py-3">Details</TabsTrigger>
              <TabsTrigger value="care" className="text-xs md:text-sm py-2 md:py-3">Care Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6 md:mt-8">
              <Card>
                <CardContent className="p-4 md:p-6 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">About {product.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3 text-sm md:text-base">Key Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.keyHighlights?.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3 text-sm md:text-base">Purpose:</h4>
                    <p className="text-sm md:text-base text-muted-foreground">{product.purpose}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-6 md:mt-8">
              <Card>
                <CardContent className="p-4 md:p-6 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">How to Use {product.name}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-primary" />
                        Usage Instructions
                      </h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {product.howToUse}
                      </p>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3 text-sm md:text-base">Best Results:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Wear after consulting with an astrologer for personalized guidance</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Keep the root close to your body for maximum energy absorption</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Maintain purity of thought and positive intentions while wearing</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Regular prayers or meditation can enhance the root's effectiveness</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="mt-6 md:mt-8">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Product Specifications</h3>
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b text-xs md:text-sm">
                        <span className="font-medium">Planet Connection:</span>
                        <span className="text-muted-foreground">{product.planetConnection}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b text-xs md:text-sm">
                        <span className="font-medium">Chakra:</span>
                        <span className="text-muted-foreground">{product.chakra.name}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b text-xs md:text-sm">
                        <span className="font-medium">Element:</span>
                        <span className="text-muted-foreground">{product.element.name}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b text-xs md:text-sm">
                        <span className="font-medium">Zodiac Sign:</span>
                        <span className="text-muted-foreground">{product.zodiac.name}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b text-xs md:text-sm">
                        <span className="font-medium">Origin:</span>
                        <span className="text-muted-foreground">India</span>
                      </div>
                      <div className="flex justify-between py-2 border-b text-xs md:text-sm">
                        <span className="font-medium">Authenticity:</span>
                        <span className="text-muted-foreground">100% Natural</span>
                      </div>
                      <div className="flex justify-between py-2 border-b text-xs md:text-sm">
                        <span className="font-medium">Energization:</span>
                        <span className="text-muted-foreground">Vedic Mantras</span>
                      </div>
                      <div className="flex justify-between py-2 border-b text-xs md:text-sm">
                        <span className="font-medium">Certification:</span>
                        <span className="text-muted-foreground">Astrologer Verified</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="care" className="mt-6 md:mt-8">
              <Card>
                <CardContent className="p-4 md:p-6 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Care Instructions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm md:text-base flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        Maintenance & Storage
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Store in a clean, dry place away from direct sunlight when not in use</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Clean gently with a soft, dry cloth - avoid using water or chemicals</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Keep away from moisture, perfumes, and cosmetics to preserve its natural energy</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>Handle with clean hands and maintain respect for the sacred root</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3 text-sm md:text-base">Re-energization Tips:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Cleanse energetically every full moon by placing under moonlight</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Chant the associated planetary mantra to revitalize its power</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs md:text-sm">
                          <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Keep near sacred items or in a prayer room to maintain positive energy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Properties Grid */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">Planetary Properties</h2>
          <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
            {product.planetConnection}'s powerful astrological attributes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full" style={{ backgroundColor: product.chakra.color }}></div>
                <h3 className="font-bold text-xs md:text-sm mb-1">Chakra</h3>
                <p className="text-xs text-muted-foreground">{product.chakra.name}</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full" style={{ backgroundColor: product.element.color }}></div>
                <h3 className="font-bold text-xs md:text-sm mb-1">Element</h3>
                <p className="text-xs text-muted-foreground">{product.element.name}</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full" style={{ backgroundColor: product.planetColor }}></div>
                <h3 className="font-bold text-xs md:text-sm mb-1">Planet</h3>
                <p className="text-xs text-muted-foreground">{product.planetConnection}</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full" style={{ backgroundColor: product.zodiac.color }}></div>
                <h3 className="font-bold text-xs md:text-sm mb-1">Zodiac</h3>
                <p className="text-xs text-muted-foreground">{product.zodiac.name}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Healing Properties */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">Healing Properties</h2>
          <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
            Experience the transformative power of natural {product.name.toLowerCase()}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {product.healingProperties?.map((property, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border">
                <CardContent className="p-3 md:p-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm">{property}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {product.benefits?.slice(0, 6).map((benefit, idx) => {
              const icons = [Sparkles, Zap, Shield, Star, Award, Leaf];
              const Icon = icons[idx % icons.length];
              return (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <p className="text-xs md:text-sm font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Ideal For Section */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">Perfect For</h2>
          <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
            Who can benefit most from this sacred root
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl mx-auto">
            {product.idealFor?.map((person, idx) => (
              <Badge key={idx} variant="outline" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                <Users className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                {person}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">Customer Reviews</h2>
          <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-10">
            See what our customers are saying
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <Badge variant="outline" className="text-xs">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs md:text-sm mb-3">{testimonial.text}</p>
                  <p className="text-xs md:text-sm font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-10">
            Everything you need to know about {product.name}
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsJadi;
