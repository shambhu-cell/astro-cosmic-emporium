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
  Users,
  Clock,
  CheckCircle2,
  Quote,
  Phone,
  Truck,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MarqueeBanner from "@/components/MarqueeBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductFinderQuiz from "@/components/ProductFinderQuiz";
import GemstoneGridBenefits from "@/components/GemstoneGridBenefits";
import CertificationBadges from "@/components/CertificationBadges";
import TopSellingGemstones from "@/components/TopSellingGemstones";
import TopSellingRudraksha from "@/components/TopSellingRudraksha";
import TopSellingBracelets from "@/components/TopSellingBracelets";
import TopSellingMala from "@/components/TopSellingMala";
import FounderVideoSection from "@/components/FounderVideoSection";
import ShopByPurpose from "@/components/ShopByPurpose";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import TrustLogos from "@/components/TrustLogos";

// Import images
import blueSapphireImg from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImg from "@/assets/gemstones/ruby.jpg";
import emeraldImg from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImg from "@/assets/gemstones/yellow-sapphire.jpg";
import founderImg from "@/assets/founder-puneet-pandey.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      badge: "Best Seller",
      title: "Natural Blue Sapphire",
      subtitle: "Ceylon Origin • GIA Certified",
      price: "₹45,000",
      image: blueSapphireImg,
      link: "/blue-sapphire"
    },
    {
      badge: "Premium",
      title: "Burmese Pigeon Blood Ruby",
      subtitle: "Untreated • IGI Certified",
      price: "₹75,000",
      image: rubyImg,
      link: "/ruby"
    },
    {
      badge: "New Arrival",
      title: "Colombian Emerald",
      subtitle: "Vivid Green • Lab Certified",
      price: "₹55,000",
      image: emeraldImg,
      link: "/gemstones"
    },
    {
      badge: "Most Popular",
      title: "Yellow Sapphire (Pukhraj)",
      subtitle: "Sri Lankan • GIA Certified",
      price: "₹15,000",
      image: yellowSapphireImg,
      link: "/yellow-sapphire"
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Purchased a 5-carat Blue Sapphire for ₹2.5 lakhs. The quality exceeded my expectations. Within 3 months, I received a major promotion.",
      product: "Blue Sapphire - 5.2 Carat",
      verified: true
    },
    {
      name: "Priya Mehta",
      location: "Delhi",
      rating: 5,
      text: "The Yellow Sapphire I bought is absolutely stunning. The certification and energization process gave me complete confidence.",
      product: "Yellow Sapphire - 4.1 Carat",
      verified: true
    },
    {
      name: "Dr. Anil Kumar",
      location: "Bangalore",
      rating: 5,
      text: "As a doctor, I was skeptical initially. But the Ruby I purchased has brought remarkable positive changes. Museum-grade quality.",
      product: "Burmese Ruby - 3.8 Carat",
      verified: true
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Clean Hero Section - Gempundit Inspired */}
      <section className="relative bg-background py-10 lg:py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-semibold">
                  India's #1 Gemstone Store
                </Badge>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">4.9 (2,847)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Buy <span className="text-primary">Certified Gemstones</span> Online
              </h1>
              
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
                100% Natural & Lab Certified gemstones recommended by expert astrologers. 
                Every stone is Vedic energized with authentic rituals.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/gemstones-collection">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                    <Gem className="w-4 h-4 mr-2" />
                    Shop Gemstones
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 font-semibold px-6">
                    <Phone className="w-4 h-4 mr-2" />
                    Free Consultation
                  </Button>
                </Link>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>GIA Certified</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-accent" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <BadgeCheck className="w-4 h-4 text-accent" />
                  <span>Vedic Energized</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <RefreshCw className="w-4 h-4 text-accent" />
                  <span>Lifetime Buyback</span>
                </div>
              </div>
            </div>

            {/* Right - Gemstone Slider */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-muted aspect-square max-w-md mx-auto shadow-card">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                      <Badge className="mb-2 bg-accent text-accent-foreground text-xs">{slide.badge}</Badge>
                      <h3 className="text-lg font-bold text-white">{slide.title}</h3>
                      <p className="text-white/70 text-sm">{slide.subtitle}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-accent font-bold text-lg">From {slide.price}</span>
                        <Link to={slide.link}>
                          <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm text-xs">
                            View <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Nav arrows */}
                <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10">
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10">
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'w-6 bg-primary' : 'w-2 bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Clean */}
      <section className="bg-card border-b border-border py-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Shield, title: "100% Certified", sub: "GIA & IGI Labs" },
              { icon: Users, title: "5,00,000+", sub: "Happy Customers" },
              { icon: Award, title: "21+ Years", sub: "Trusted Legacy" },
              { icon: Sparkles, title: "Vedic Energized", sub: "By Expert Pandits" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 py-2">
                <item.icon className="w-6 h-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemstone Grid with Benefits */}
      <GemstoneGridBenefits />

      {/* Certification Badges */}
      <CertificationBadges />

      {/* Product Finder Quiz */}
      <ProductFinderQuiz />

      {/* Top Selling Gemstones */}
      <TopSellingGemstones />

      {/* Shop by Purpose */}
      <ShopByPurpose />

      {/* Why Choose Us - Clean White */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-4 py-1">
                The AstroSage Difference
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why India's Elite Trust AstroSage
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                When investing ₹50,000 to ₹5,00,000 in a gemstone, you deserve absolute authenticity, 
                expert guidance, and impeccable service.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Gem, title: "Museum-Grade Quality", desc: "Only top 1% of gemstones pass our selection" },
                  { icon: Shield, title: "Triple Certification", desc: "GIA, IGI & Government lab certified" },
                  { icon: Sparkles, title: "Authentic Energization", desc: "108 mantra chanting by senior Vedic pandits" },
                  { icon: Clock, title: "Lifetime Buyback", desc: "100% value buyback guarantee on all gemstones" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "21+", label: "Years Trust" },
                { value: "5L+", label: "Customers" },
                { value: "4.9★", label: "Rating" },
                { value: "10K+", label: "Products" },
                { value: "500+", label: "Astrologers" },
                { value: "100%", label: "Authentic" },
              ].map((stat, index) => (
                <Card key={index} className="p-4 text-center border-border hover:border-accent/30 hover:shadow-soft transition-all">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 px-4 py-1">
              Verified Reviews
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Trusted by Premium Buyers
            </h2>
            <p className="text-muted-foreground">Real experiences from verified customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-card transition-shadow">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-accent/20 mb-3" />
                <p className="text-foreground text-sm leading-relaxed mb-4">{t.text}</p>
                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  {t.verified && (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="text-xs">Verified</span>
                    </div>
                  )}
                </div>
                <Badge variant="outline" className="mt-3 text-xs">{t.product}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderVideoSection />

      {/* Other Product Categories */}
      <TopSellingRudraksha />
      <TopSellingBracelets />
      <TopSellingMala />

      {/* Expert Consultation CTA */}
      <section className="py-14 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Not Sure Which Gemstone is Right for You?
              </h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Our expert astrologers analyze your birth chart to recommend the perfect gemstone. 
                Get personalized guidance worth ₹2,100 — absolutely free.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/consultation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-5">
                <img src={founderImg} alt="Expert Astrologer" className="w-14 h-14 rounded-full object-cover border-2 border-accent" />
                <div>
                  <p className="font-semibold text-lg">Puneet Pandey</p>
                  <p className="text-primary-foreground/70 text-sm">Chief Astrologer, 25+ Years</p>
                </div>
              </div>
              <div className="space-y-3">
                {["Birth chart analysis", "Gemstone recommendation", "Wearing procedure guidance", "Lifetime support"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <TrustLogos />
      <Newsletter />
    </main>
  );
};

export default Index;
