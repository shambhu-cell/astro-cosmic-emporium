import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Award, 
  Gem, 
  BadgeCheck, 
  Star,
  Sparkles,
  ArrowRight,
  Play,
  Users,
  Clock,
  CheckCircle2,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TrustLogos from "@/components/TrustLogos";
import ShopByPurpose from "@/components/ShopByPurpose";
import TopSellingRudraksha from "@/components/TopSellingRudraksha";
import TopSellingBracelets from "@/components/TopSellingBracelets";
import TopSellingGemstones from "@/components/TopSellingGemstones";
import TopSellingMala from "@/components/TopSellingMala";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

// Import images
import blueSapphireImg from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImg from "@/assets/gemstones/ruby.jpg";
import emeraldImg from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImg from "@/assets/gemstones/yellow-sapphire.jpg";
import pearlImg from "@/assets/gemstones/pearl.jpg";
import hessoniteImg from "@/assets/gemstones/hessonite.jpg";
import heroCosmic from "@/assets/hero-cosmic.jpg";
import founderImg from "@/assets/founder-puneet-pandey.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      badge: "New Arrivals",
      title: "Rare Ceylon",
      highlight: "Blue Sapphires",
      description: "Hand-selected from the finest mines of Sri Lanka. Each stone certified by GIA for authenticity and brilliance.",
      cta: "Explore Collection",
      link: "/blue-sapphire",
      price: "Starting ₹45,000",
      image: blueSapphireImg
    },
    {
      badge: "Most Popular",
      title: "Natural Burmese",
      highlight: "Pigeon Blood Ruby",
      description: "The world's most sought-after rubies. Untreated, natural stones with exceptional color saturation.",
      cta: "View Rubies",
      link: "/ruby",
      price: "Starting ₹75,000",
      image: rubyImg
    },
    {
      badge: "Limited Stock",
      title: "Colombian",
      highlight: "Emeralds",
      description: "Vivid green emeralds with exceptional clarity. Perfect for those seeking prosperity and wisdom.",
      cta: "Shop Emeralds",
      link: "/gemstones",
      price: "Starting ₹55,000",
      image: emeraldImg
    }
  ];

  const premiumCollections = [
    { name: "Blue Sapphire", planet: "Saturn", image: blueSapphireImg, link: "/blue-sapphire", price: "₹45,000+" },
    { name: "Ruby", planet: "Sun", image: rubyImg, link: "/ruby", price: "₹75,000+" },
    { name: "Emerald", planet: "Mercury", image: emeraldImg, link: "/gemstones", price: "₹55,000+" },
    { name: "Yellow Sapphire", planet: "Jupiter", image: yellowSapphireImg, link: "/yellow-sapphire", price: "₹35,000+" },
    { name: "Pearl", planet: "Moon", image: pearlImg, link: "/pearl", price: "₹8,000+" },
    { name: "Hessonite", planet: "Saturn", image: hessoniteImg, link: "/hessonite", price: "₹12,000+" },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Purchased a 5-carat Blue Sapphire for ₹2.5 lakhs. The quality exceeded my expectations. Within 3 months, I received a major promotion at work.",
      product: "Blue Sapphire - 5.2 Carat",
      verified: true
    },
    {
      name: "Priya Mehta",
      location: "Delhi",
      rating: 5,
      text: "The Yellow Sapphire I bought is absolutely stunning. The certification and energization process gave me complete confidence in my purchase.",
      product: "Yellow Sapphire - 4.1 Carat",
      verified: true
    },
    {
      name: "Dr. Anil Kumar",
      location: "Bangalore",
      rating: 5,
      text: "As a doctor, I was skeptical initially. But the Ruby I purchased has brought remarkable positive changes. The quality is museum-grade.",
      product: "Burmese Ruby - 3.8 Carat",
      verified: true
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <main className="min-h-screen bg-background">
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[hsl(30,15%,8%)] via-[hsl(30,12%,12%)] to-[hsl(30,10%,15%)]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 py-12 lg:py-0 min-h-[90vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left Content */}
            <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Trust Badge */}
              <div className="flex items-center gap-3">
                <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1.5 text-sm font-medium">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  {heroSlides[currentSlide].badge}
                </Badge>
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent" />
                  ))}
                  <span className="text-white/80 text-sm ml-2">4.9/5 (2,847 reviews)</span>
                </div>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  {heroSlides[currentSlide].title}
                  <span className="block text-gradient-gold mt-2">
                    {heroSlides[currentSlide].highlight}
                  </span>
                </h1>
                <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* Price & CTA */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <Link to={heroSlides[currentSlide].link}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-accent to-[hsl(38,70%,45%)] hover:from-[hsl(38,70%,45%)] hover:to-accent text-foreground font-semibold px-8 py-6 text-base shadow-gold transition-all duration-300 hover:scale-105"
                  >
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Free Consultation
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/80">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm">GIA Certified</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <BadgeCheck className="w-5 h-5 text-accent" />
                  <span className="text-sm">Vedic Energized</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm">21 Years Legacy</span>
                </div>
              </div>
            </div>

            {/* Right - Featured Image */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-3xl animate-soft-pulse" />
                
                {/* Main image container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-elevated">
                  {heroSlides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      alt={slide.highlight}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Price tag overlay */}
                  <div className="absolute bottom-4 left-4 glass-dark rounded-lg px-4 py-2">
                    <span className="text-white/60 text-xs">Starting from</span>
                    <p className="text-accent font-bold text-lg">{heroSlides[currentSlide].price}</p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg animate-float">
                  <span className="text-sm font-semibold">Premium Quality</span>
                </div>
              </div>

              {/* Slide controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-y border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">100% Certified</p>
                <p className="text-sm text-muted-foreground">GIA & IGI Labs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">5,00,000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">21+ Years</p>
                <p className="text-sm text-muted-foreground">Trusted Legacy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Vedic Energized</p>
                <p className="text-sm text-muted-foreground">By Expert Pandits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Collections Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">
              Premium Collections
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Curated Gemstones for
              <span className="text-gradient-gold"> Discerning Buyers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Each gemstone is hand-selected by our experts, certified by international laboratories, 
              and energized through authentic Vedic rituals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {premiumCollections.map((item, index) => (
              <Link 
                key={index} 
                to={item.link}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-transparent hover:border-accent/50 transition-all duration-500 hover:shadow-gold bg-card">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-xs text-white/70 mb-1">{item.planet}</p>
                      <h3 className="font-bold text-sm lg:text-base">{item.name}</h3>
                      <p className="text-accent text-sm font-semibold mt-1">{item.price}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/gemstones-collection">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                View All Collections
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[hsl(30,15%,8%)] via-[hsl(30,12%,12%)] to-[hsl(30,10%,15%)] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 px-4 py-1">
                The AstroSage Difference
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Why India's Elite Trust 
                <span className="text-gradient-gold"> AstroSage</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                When investing ₹50,000 to ₹5,00,000 in a gemstone, you deserve absolute authenticity, 
                expert guidance, and impeccable service. Here's why over 5 lakh customers choose us.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Gem, title: "Museum-Grade Quality", desc: "Only top 1% of gemstones pass our rigorous selection" },
                  { icon: Shield, title: "Triple Certification", desc: "GIA, IGI & Government lab certified authenticity" },
                  { icon: Sparkles, title: "Authentic Energization", desc: "108 mantra chanting by senior Vedic pandits" },
                  { icon: Clock, title: "Lifetime Buyback", desc: "100% value buyback guarantee on all gemstones" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={heroCosmic} 
                  alt="Premium gemstone collection"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="glass-dark rounded-lg p-4 text-center">
                      <p className="text-2xl lg:text-3xl font-bold text-accent">21+</p>
                      <p className="text-xs text-white/60">Years Trust</p>
                    </div>
                    <div className="glass-dark rounded-lg p-4 text-center">
                      <p className="text-2xl lg:text-3xl font-bold text-accent">5L+</p>
                      <p className="text-xs text-white/60">Customers</p>
                    </div>
                    <div className="glass-dark rounded-lg p-4 text-center">
                      <p className="text-2xl lg:text-3xl font-bold text-accent">4.9★</p>
                      <p className="text-xs text-white/60">Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - High Value Purchases */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">
              Customer Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Trusted by <span className="text-gradient-gold">High-Value Buyers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from customers who invested in premium gemstones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 lg:p-8 bg-card border-border hover:shadow-card transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs">Verified</span>
                      </div>
                    )}
                  </div>
                  <Badge variant="outline" className="mt-3 text-xs">
                    {testimonial.product}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Purpose */}
      <ShopByPurpose />

      {/* Product Sections */}
      <TopSellingGemstones />
      <TopSellingRudraksha />
      <TopSellingBracelets />
      <TopSellingMala />

      {/* Expert Consultation CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Not Sure Which Gemstone is Right for You?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Our expert astrologers analyze your birth chart to recommend the perfect gemstone 
                that aligns with your planetary positions. Get personalized guidance worth ₹2,100 - absolutely free.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/consultation">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-foreground font-semibold px-8"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={founderImg} 
                    alt="Expert Astrologer"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <p className="font-semibold text-lg">Puneet Pandey</p>
                    <p className="text-primary-foreground/70 text-sm">Chief Astrologer, 25+ Years Exp.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Birth chart analysis",
                    "Gemstone recommendation",
                    "Wearing procedure guidance",
                    "Lifetime support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Trust */}
      <FAQ />
      <TrustLogos />
      <Newsletter />
    </main>
  );
};

export default Index;
