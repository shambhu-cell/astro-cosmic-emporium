import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, ArrowLeft, Sparkles, Check, Leaf, Users, Phone, MessageCircle, Zap, Clock, Package, IndianRupee, TrendingUp, Crown, Gem, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { rudrakshaProductsData } from "@/data/rudrakshaProducts";

const ProductDetailsRudraksha = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const [viewingUsers, setViewingUsers] = useState(45);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Get product data based on ID
  const product = rudrakshaProductsData[id || "7-mukhi"];

  // If product not found, redirect to 7-mukhi
  useEffect(() => {
    if (!product) {
      navigate("/rudraksha/7-mukhi");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  // Generate FAQs dynamically
  const faqs = [
    {
      q: `What are the main benefits of ${product.name}?`,
      a: `${product.name} is blessed by ${product.deity} and rules planet ${product.planet}. ${product.benefits?.[0]?.desc || 'It provides numerous spiritual and health benefits'}. It's highly beneficial for spiritual growth, health improvements, and overall well-being. The Rudraksha provides divine protection and helps achieve life goals.`
    },
    {
      q: "Is this really authentic Nepal Rudraksha?",
      a: "Yes! This is 100% authentic Nepal origin Rudraksha, lab certified with X-ray testing. We provide authenticity certificate with each Rudraksha. We source directly from Nepal's sacred regions and guarantee natural holes and genuine quality. All our Rudraksha undergo rigorous quality checks."
    },
    {
      q: `Can anyone wear ${product.id.replace('-', ' ')} Rudraksha?`,
      a: `Yes! This Rudraksha can be worn by anyone regardless of age, gender, caste, or religion. It's especially beneficial for ${product.idealFor?.[0]?.toLowerCase() || 'spiritual seekers'}. There are no negative side effects when worn with faith and devotion.`
    },
    {
      q: "How soon will I see results?",
      a: "Results vary by individual, but many devotees report positive changes within 40-45 days of regular wearing. The benefits manifest gradually as you develop a deeper connection with the Rudraksha. For maximum benefits, wear with faith, maintain purity, and chant the mantra regularly."
    },
    {
      q: "Do you provide energization and certificate?",
      a: `Yes! Every ${product.name} comes pre-energized with Vedic mantras by expert pandits. We provide a lab certification for authenticity, energization certificate, and complete wearing instructions. You can wear it immediately upon receiving.`
    },
    {
      q: "What is your return and refund policy?",
      a: "We offer 30-day money-back guarantee. If you're not satisfied or have any issues, you can return within 30 days for full refund. Item must be in original condition with certificate. Your satisfaction and divine blessings are our priority."
    },
    {
      q: "How do I take care of my Rudraksha?",
      a: "Keep it clean - wipe with soft cloth regularly. Avoid chemicals, perfumes, and harsh soaps. Remove during sleep if uncomfortable. You can occasionally clean with water and dry properly. Apply natural oil (olive/coconut) once a month to maintain luster. Store in clean place when not wearing."
    }
  ];

  // Generate testimonials dynamically
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: `After wearing ${product.id.replace('-', ' ')} Rudraksha, my life completely transformed! The benefits are real and powerful. Highly authentic product.`,
      verified: true,
      date: "2 months ago"
    },
    {
      name: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      text: `Amazing results within 60 days! ${product.deity}'s blessings are clearly visible. The Rudraksha is original Nepal quality. Worth every rupee!`,
      verified: true,
      date: "3 months ago"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Best purchase ever! The energization is powerful and I can feel the positive vibrations. Original, certified and highly effective.",
      verified: true,
      date: "1 month ago"
    },
    {
      name: "Sunita Verma",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: `Got amazing results with ${product.id.replace('-', ' ')} Rudraksha. Life changed for better. Thank you AstroSage! 🙏`,
      verified: true,
      date: "6 weeks ago"
    }
  ];

  const certifications = [
    { title: "Lab Certified", desc: "X-ray tested authenticity" },
    { title: "Nepal Origin", desc: "Sourced from sacred regions" },
    { title: "Vedic Energized", desc: "Activated by expert pandits" },
    { title: "Quality Assured", desc: "Natural holes, no artificial" }
  ];

  const relatedProducts = [
    { id: "5-mukhi", name: "5 Mukhi Rudraksha", price: 699, image: product.images[3], rating: 4.9 },
    { id: "7-mukhi", name: "7 Mukhi Rudraksha", price: 2499, image: product.images[2], rating: 4.9 },
    { id: "9-mukhi", name: "9 Mukhi Rudraksha", price: 3499, image: product.images[1], rating: 4.8 },
    { id: "1-mukhi", name: "1 Mukhi Rudraksha", price: 8399, image: product.images[0], rating: 4.9 }
  ].filter(p => p.id !== product.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Add to Cart Bar - Mobile */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-primary/20 shadow-lg z-50 lg:hidden animate-slide-in-right">
          <div className="container mx-auto px-4 py-3 flex items-center gap-3">
            <div className="flex-shrink-0">
              <p className="font-bold text-lg">₹{product.price.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</p>
            </div>
            <div className="flex gap-2 flex-1">
              <Button className="flex-1" size="sm" variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ShoppingCart className="mr-1 h-4 w-4" />
                Cart
              </Button>
              <Button className="flex-1" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="container max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/rudraksha" className="hover:text-primary transition-colors">Rudraksha</Link>
          <span>/</span>
          <span className="text-foreground font-medium">7 Mukhi</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl overflow-hidden border-2 border-primary/10">
              <Badge className="absolute top-4 left-4 bg-accent text-white z-10 text-base px-3 py-1">
                ⚡ Limited Stock
              </Badge>
              <Badge className="absolute top-4 right-4 bg-green-600 text-white z-10 text-base px-3 py-1">
                {product.discount}% OFF
              </Badge>
              {product.stockLeft <= 10 && (
                <Badge className="absolute bottom-4 left-4 bg-red-600 text-white z-10 animate-pulse">
                  Only {product.stockLeft} Left!
                </Badge>
              )}
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {(product.images || []).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${
                    selectedImage === idx ? 'border-primary shadow-lg scale-105' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardContent className="p-3 text-center">
                    <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                    <p className="font-bold text-xs">{cert.title}</p>
                    <p className="text-[10px] text-muted-foreground">{cert.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Rating & Social Proof */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-lg">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews.toLocaleString()} verified reviews)</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Bestseller
                </Badge>
              </div>
              <p className="text-sm text-primary font-semibold flex items-center gap-2">
                <Users className="h-4 w-4" />
                🪷 {product.sold} Rudraksha Sold - Trusted Worldwide
              </p>
            </div>

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

            {/* Title & Subtitle */}
            <div>
              <Badge className="mb-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <Crown className="h-3 w-3 mr-1" />
                {product.deity}'s Blessing
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">{product.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                <div className="flex items-center gap-1">
                  <Package className="h-4 w-4 text-primary" />
                  <span className="font-medium">{product.origin}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-medium">Size: {product.size}</span>
                </div>
              </div>
            </div>

            {/* Deity & Planet Info */}
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Ruling Deity</p>
                    <p className="font-bold text-primary">{product.deity}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Ruling Planet</p>
                    <p className="font-bold text-primary">{product.planet}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Chakra</p>
                    <p className="font-bold text-primary">{product.chakra}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Mantra</p>
                    <p className="font-bold text-primary">{product.mantra}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-4xl md:text-5xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                <div className="space-y-1">
                  <span className="text-xl text-muted-foreground line-through block">₹{product.originalPrice.toLocaleString()}</span>
                  <Badge className="bg-green-600 text-white">Save ₹{(product.originalPrice - product.price).toLocaleString()}</Badge>
                </div>
              </div>
              {product.emiAvailable && (
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <IndianRupee className="h-4 w-4" />
                  or 3 interest-free payments of ₹{product.emiAmount} <Badge variant="outline" className="ml-2">EMI Available</Badge>
                </p>
              )}
              <p className="text-sm font-medium text-green-700 dark:text-green-400 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Order in the next 2 hours for delivery by {product.deliveryDate}
              </p>
            </div>

            {/* Key Highlights */}
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
              <CardContent className="p-5 space-y-3">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Why Choose This Rudraksha?
                </h3>
                <div className="space-y-2">
                  {(product.keyHighlights || []).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quantity & CTA */}
            <div className="space-y-4 p-6 bg-muted/50 rounded-xl border-2 border-primary/20">
              <div className="flex items-center justify-between">
                <label className="font-semibold text-lg">Quantity:</label>
                <div className="flex items-center border-2 border-primary/20 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-primary/10 transition-colors font-bold"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 border-x-2 border-primary/20 font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-primary/10 transition-colors font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" className="text-base md:text-lg py-6 md:py-7 bg-accent hover:bg-accent/90 font-bold shadow-lg">
                  <ShoppingCart className="mr-1 md:mr-2 h-5 w-5 md:h-6 md:w-6" />
                  <span className="whitespace-nowrap">ADD TO CART</span>
                </Button>
                <Button size="lg" className="text-base md:text-lg py-6 md:py-7 bg-primary hover:bg-primary/90 font-bold shadow-lg">
                  <span className="whitespace-nowrap">BUY NOW</span>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg" className="border-2">
                  <Heart className="mr-2 h-5 w-5" />
                  Save for Later
                </Button>
                <Button variant="outline" size="lg" className="border-2">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>

            {/* Urgency & Trust */}
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-green-800 dark:text-green-400 font-bold flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  ✓ In Stock - {product.stockLeft} pieces available at this price
                </p>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-amber-800 dark:text-amber-400 font-medium flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  ⚡ 127 people are viewing this right now
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground py-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Free Shipping</span>
                </div>
              </div>
            </div>

            {/* Expert Consultation */}
            <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Need Expert Guidance?</h4>
                      <p className="text-xs text-muted-foreground">Talk to our astrologer - FREE</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://wa.me/1234567890?text=I need guidance about 7 Mukhi Rudraksha', '_blank')}
                  >
                    <Phone className="mr-1 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-base">
              <Crown className="h-4 w-4 mr-2" />
              Divine Blessings of 7 Mukhi Rudraksha
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Powerful Benefits of 7 Mukhi Rudraksha
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Blessed by Goddess Mahalakshmi - Attracts wealth, prosperity and removes financial obstacles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(product.benefits || []).map((benefit, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Benefits Accordion */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Complete Benefits Guide</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {(product.detailedBenefits || []).map((section, idx) => (
                  <AccordionItem key={idx} value={`benefits-${idx}`}>
                    <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                      {section.category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 ml-2">
                        {(section.points || []).map((point, pidx) => (
                          <li key={pidx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Ideal For Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Who Should Wear 7 Mukhi Rudraksha?</h2>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(product.idealFor || []).map((person, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-sm font-medium">{person}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Wearing Instructions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">How to Wear 7 Mukhi Rudraksha</h2>
          <Card className="max-w-3xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-4">
                {(product.wearingInstructions || []).map((instruction, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-sm leading-relaxed pt-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-3">Real Reviews from Devotees</h2>
          <p className="text-center text-muted-foreground mb-10">
            See how 7 Mukhi Rudraksha transformed lives
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold">{testimonial.name}</p>
                        {testimonial.verified && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px]">
                            <Check className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">"{testimonial.text}"</p>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-10">
            Everything you need to know about 7 Mukhi Rudraksha
          </p>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/rudraksha/${item.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg mb-3 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain p-4" />
                    </div>
                    <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{item.rating}</span>
                    </div>
                    <p className="font-bold text-primary text-lg">₹{item.price.toLocaleString()}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Trusted by Devotees Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
              <h4 className="font-bold text-lg">100% Authentic</h4>
              <p className="text-sm text-muted-foreground">Lab X-ray certified</p>
            </div>
            <div className="text-center">
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-2" />
              <h4 className="font-bold text-lg">Pre-Energized</h4>
              <p className="text-sm text-muted-foreground">By expert pandits</p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-2" />
              <h4 className="font-bold text-lg">15K+ Happy</h4>
              <p className="text-sm text-muted-foreground">Satisfied customers</p>
            </div>
            <div className="text-center">
              <Award className="h-10 w-10 text-primary mx-auto mb-2" />
              <h4 className="font-bold text-lg">20+ Years</h4>
              <p className="text-sm text-muted-foreground">Trusted legacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsRudraksha;