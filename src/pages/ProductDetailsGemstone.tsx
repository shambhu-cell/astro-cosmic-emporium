import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, ArrowLeft, Sparkles, Check, MessageCircle, Clock, Package, RefreshCcw, ChevronDown, Phone, Mail, MapPin, Users, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";
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

const ProductDetailsGemstone = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: id || "1",
    name: "Certified Blue Sapphire (Neelam) Ring",
    price: 14999,
    originalPrice: 24999,
    discount: 40,
    rating: 4.9,
    reviewCount: 8420,
    sold: "15,000+",
    inStock: true,
    stockLeft: 7,
    deliveryDate: "October 18",
    images: [blueSapphireImage, blueSapphireImage, blueSapphireImage, blueSapphireImage],
    weight: "5.25 Ratti (4.75 Carat)",
    certification: "Government Lab Certified",
    origin: "Sri Lanka (Ceylon)",
    clarity: "Eye Clean",
    cut: "Oval Mixed Cut",
    color: "Royal Blue",
    treatment: "No Heat, No Treatment",
    metal: "92.5% Sterling Silver",
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
    upsells: [
      { name: "Gemstone Energization Kit", desc: "Activation mantras & guide", price: 499 },
      { name: "Silver Chain", desc: "Premium 92.5 silver chain", price: 1299 },
      { name: "Gemstone Care Kit", desc: "Cleaning & storage solution", price: 799 },
    ],
    specifications: {
      "Gemstone": "Natural Blue Sapphire (Neelam)",
      "Weight": "5.25 Ratti (4.75 Carat)",
      "Origin": "Sri Lanka (Ceylon)",
      "Color": "Royal Blue",
      "Clarity": "Eye Clean (VVS)",
      "Cut & Shape": "Oval Mixed Cut",
      "Treatment": "No Heat, No Treatment",
      "Certification": "Government Approved Lab",
      "Metal": "92.5% Sterling Silver",
      "Planet": "Saturn (Shani)",
      "Chakra": "Throat Chakra",
      "Zodiac": "Capricorn, Aquarius"
    },
    description: "This magnificent Blue Sapphire (Neelam) is a natural, unheated gemstone sourced from the legendary mines of Sri Lanka. Known for its deep royal blue color and exceptional clarity, this gemstone has been carefully selected and certified by government-approved laboratories. Blue Sapphire is the gemstone of Saturn (Shani) and is renowned in Vedic astrology for its powerful effects on career, wealth, and protection. Each stone is energized by our expert astrologers with proper mantras and rituals before delivery.",
    customerReviews: [
      { name: "Rajesh Kumar", rating: 5, date: "2 weeks ago", comment: "Excellent quality gemstone! Got promotion within 3 months of wearing. Highly recommended!", verified: true },
      { name: "Priya Sharma", rating: 5, date: "1 month ago", comment: "Beautiful blue color and came with authentic certificate. Very happy with purchase.", verified: true },
      { name: "Amit Patel", rating: 4, date: "1 month ago", comment: "Good quality, but took little time for delivery. Overall satisfied with the product.", verified: true },
    ]
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
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. The gemstone must be in original condition with certificate."
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
        ✓ 30 Day Money Back Guarantee - 100% Authentic Gemstones
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

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
            <div className="flex gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-medium">Lab Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-5 w-5 text-green-600" />
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

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.weight}</p>
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
                <h3 className="font-bold text-lg mb-3">Transform Your Life with Blue Sapphire</h3>
                {product.keyPoints.map((point, idx) => (
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
                    {Object.entries(product.specifications).map(([key, value]) => (
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
                          <p className="font-medium">30-Day Money Back Guarantee</p>
                          <p className="text-muted-foreground">Not satisfied? Return within 30 days for a full refund. No questions asked.</p>
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
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Astrological Benefits</h2>
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

        {/* Upsells */}
        <div className="mt-12 border-2 border-dashed border-primary/30 rounded-xl p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-xl font-bold mb-4">89% of customers also add...</h3>
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
              <h3 className="font-bold text-lg mb-2">23+ Years Trusted</h3>
              <p className="text-muted-foreground">India's #1 astrology platform since 2001</p>
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
    </div>
  );
};

export default ProductDetailsGemstone;