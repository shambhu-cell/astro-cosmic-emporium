import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Star, 
  Shield, 
  Clock, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Users, 
  Award,
  Zap,
  Heart,
  TrendingUp,
  Eye,
  ShoppingCart,
  Timer,
  Flame,
  Crown,
  Target,
  Moon
} from "lucide-react";

const HessoniteCollection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 59
  });
  
  const [viewersCount, setViewersCount] = useState(47);
  const [recentBuyer, setRecentBuyer] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const recentBuyers = [
    "Rohit from Delhi",
    "Priya from Mumbai", 
    "Ankur from Bangalore",
    "Sneha from Pune",
    "Vikram from Jaipur",
    "Meera from Chennai",
    "Arjun from Hyderabad",
    "Kavita from Kolkata"
  ];

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
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(viewerInterval);
  }, []);

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      const randomBuyer = recentBuyers[Math.floor(Math.random() * recentBuyers.length)];
      setRecentBuyer(randomBuyer);
      setShowNotification(true);
      
      setTimeout(() => setShowNotification(false), 4000);
    }, 15000);

    return () => clearInterval(notificationInterval);
  }, []);

  const hessoniteProducts = [
    {
      id: "hessonite-3-carat",
      name: "Premium Hessonite (Gomed) - 3 Carat",
      price: 8999,
      originalPrice: 14999,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 156,
      weight: "3.00 Carat",
      origin: "Sri Lanka",
      certification: "GIA Certified",
      stockLeft: 1,
      benefits: ["Rahu Dosha Remedy", "Career Growth", "Mental Clarity"]
    },
    {
      id: "hessonite-5-carat",
      name: "Natural Hessonite (Gomed) - 5 Carat",
      price: 14999,
      originalPrice: 24999,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 203,
      weight: "5.00 Carat",
      origin: "Sri Lanka",
      certification: "IGI Certified",
      stockLeft: 1,
      benefits: ["Strong Rahu Protection", "Success in Foreign Lands", "Removes Obstacles"]
    },
    {
      id: "hessonite-7-carat",
      name: "Collector's Hessonite (Gomed) - 7 Carat",
      price: 21999,
      originalPrice: 35999,
      image: "/placeholder.svg",
      rating: 5.0,
      reviews: 89,
      weight: "7.00 Carat",
      origin: "Sri Lanka (Ceylon)",
      certification: "GRS Certified",
      stockLeft: 1,
      benefits: ["Maximum Rahu Benefits", "Political Success", "Research Excellence"]
    }
  ];

  const testimonials = [
    {
      name: "Aditya Sharma",
      location: "Delhi",
      rating: 5,
      text: "I was suffering from Rahu Mahadasha effects for years. After wearing this Hessonite, my confusion cleared within 3 months. Got promoted at work and my health improved dramatically!",
      image: "/placeholder.svg",
      verified: true
    },
    {
      name: "Rashmi Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "My astrologer recommended Gomed for Kaal Sarp Dosha. The quality from AstroSage is unmatched. I've seen remarkable positive changes in my career and relationships.",
      image: "/placeholder.svg",
      verified: true
    },
    {
      name: "Vikram Singh",
      location: "Chandigarh",
      rating: 5,
      text: "Working abroad was my dream but kept failing. Started wearing Hessonite and within 6 months, I got my visa approved and an amazing job offer from UK. Truly life-changing!",
      image: "/placeholder.svg",
      verified: true
    }
  ];

  const faqs = [
    {
      question: "Who should wear Hessonite (Gomed)?",
      answer: "Hessonite is recommended for individuals with Rahu Mahadasha, Kaal Sarp Dosha, or those seeking success in foreign lands, research, politics, and unconventional fields. It's particularly beneficial for Aquarius ascendant natives."
    },
    {
      question: "What is the ideal weight for Hessonite?",
      answer: "For best astrological results, wear a Hessonite of minimum 3-5 carats. The weight should ideally be 1/10th of your body weight in kg (e.g., 70 kg person should wear 7+ carats for maximum benefits)."
    },
    {
      question: "On which finger and day should I wear Hessonite?",
      answer: "Wear Hessonite on the middle finger of the right hand on Saturday during Rahu Kaal or after sunset. Set it in silver for best results."
    },
    {
      question: "How can I identify genuine Hessonite?",
      answer: "Genuine Hessonite has a honey-brown to cinnamon color with a characteristic 'treacle' effect (swirling patterns). All our stones come with internationally recognized certification from GIA/IGI/GRS labs."
    },
    {
      question: "What are the benefits of wearing Hessonite?",
      answer: "Hessonite pacifies Rahu and brings success in foreign lands, removes obstacles, enhances research abilities, provides protection from enemies, improves mental clarity, and helps in overcoming addictions and phobias."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Buy Certified Hessonite (Gomed) Stone Online | Rahu Gemstone | AstroSage</title>
        <meta name="description" content="Shop certified natural Hessonite (Gomed) gemstones for Rahu. Lab-certified with expert consultation. Free shipping & lifetime authenticity guarantee." />
      </Helmet>

      <Header />

      {/* Recent Purchase Notification */}
      {showNotification && (
        <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-left duration-300">
          <Card className="bg-background border-amber-500/30 shadow-lg max-w-xs">
            <CardContent className="p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">{recentBuyer}</p>
                <p className="text-xs text-muted-foreground">just purchased Hessonite</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <main className="min-h-screen bg-background">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white py-2.5 px-4">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">Rahu Transit Special Offer</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">Ends in:</span>
              <div className="flex items-center gap-1">
                <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white text-amber-600 hover:bg-white/90">
              40% OFF
            </Badge>
          </div>
        </div>

        {/* Live Viewers */}
        <div className="bg-muted/50 py-2 border-b">
          <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
            <Eye className="w-4 h-4 text-green-500 animate-pulse" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">{viewersCount} people</strong> are viewing this page right now
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-amber-500/10 text-amber-600 border-amber-500/30">
                <Moon className="w-3 h-3 mr-1" />
                Rahu's Gemstone
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Certified Hessonite (Gomed) Collection
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Harness the mystical power of Rahu with our premium certified Hessonite stones. 
                Ideal for removing obstacles, success in foreign lands & research excellence.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-medium">100% Natural & Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-medium">35+ Years Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-medium">5 Lakh+ Happy Customers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25 w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Free Consultation: +91-9876543210
                </Button>
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-500/10 w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rahu Benefits Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Wear Hessonite (Gomed)?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hessonite is the gemstone of Rahu (North Node) - the shadow planet that governs 
                unconventional success, foreign connections, and spiritual transformation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Target, title: "Removes Obstacles", desc: "Clears path to success" },
                { icon: TrendingUp, title: "Career Growth", desc: "Rapid professional rise" },
                { icon: Crown, title: "Foreign Success", desc: "Abroad opportunities" },
                { icon: Zap, title: "Mental Clarity", desc: "Removes confusion" },
                { icon: Shield, title: "Rahu Protection", desc: "Neutralizes malefic effects" },
                { icon: Heart, title: "Health Benefits", desc: "Improves vitality" },
                { icon: Star, title: "Research Success", desc: "Enhances innovation" },
                { icon: Eye, title: "Intuition", desc: "Heightens perception" }
              ].map((benefit, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow border-amber-500/20 hover:border-amber-500/40">
                  <benefit.icon className="w-8 h-8 mx-auto mb-3 text-amber-500" />
                  <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Listings */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Hessonite Collection</h2>
              <p className="text-muted-foreground">Starting from ₹8,999 | All stones GIA/IGI certified</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {hessoniteProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-amber-500/20 hover:border-amber-500/40">
                  {/* Urgency Badge */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      <Timer className="w-3 h-3 mr-1" />
                      Only {product.stockLeft} left in stock!
                    </Badge>
                    <Badge className="bg-amber-500 text-white">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-amber-100 to-orange-50 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <CardContent className="p-5">
                    {/* Certification */}
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-600">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {product.certification}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.origin}
                      </Badge>
                    </div>

                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.benefits.map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-amber-600">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-500/10">
                        <Phone className="w-4 h-4 mr-2" />
                        Get Expert Advice
                      </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Shield className="w-3 h-3" /> Authentic
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Free Shipping
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why AstroSage */}
        <section className="py-12 bg-gradient-to-br from-amber-500/5 to-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose AstroSage?</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "100% Certified", desc: "Every stone comes with GIA/IGI/GRS certification" },
                { icon: Users, title: "Expert Astrologers", desc: "Free consultation with Vedic astrology experts" },
                { icon: Clock, title: "48hr Delivery", desc: "Express shipping across India with tracking" },
                { icon: Award, title: "Lifetime Guarantee", desc: "Authentic gemstone guarantee for life" }
              ].map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Customer Success Stories</h2>
              <p className="text-muted-foreground">Real experiences from our satisfied customers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 border-amber-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">"{testimonial.text}"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border border-amber-500/20 px-4">
                    <AccordionTrigger className="text-left font-medium hover:text-amber-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-amber-500 to-orange-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Life with Hessonite?
            </h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our Vedic astrology experts to find the perfect Hessonite for your horoscope.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 shadow-lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +91-9876543210
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HessoniteCollection;
