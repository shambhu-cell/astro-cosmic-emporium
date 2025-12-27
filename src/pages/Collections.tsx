import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Shield, Star, ChevronRight, Sparkles, MessageCircle, Phone,
  Truck, RefreshCcw, BadgeCheck, Users, Timer, Zap, Eye, CheckCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import images
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";
import pearlImage from "@/assets/gemstones/pearl.jpg";
import hessoniteImage from "@/assets/gemstones/hessonite.jpg";
import catsEyeImage from "@/assets/gemstones/cats-eye.jpg";
import redCoralImage from "@/assets/gemstones/red-coral.jpg";
import lapisLazuliImage from "@/assets/gemstones/lapis-lazuli.jpg";
import rudrakshaImage from "@/assets/rudraksha/1-mukhi.jpg";
import braceletImage from "@/assets/bracelets/7-chakra.jpg";
import malaImage from "@/assets/mala/rudraksha-mala.jpg";
import yantraImage from "@/assets/yantras.jpg";
import vastuImage from "@/assets/vastu-painting/radha-krishna-1.jpg";
import consultationImage from "@/assets/consultation.jpg";
import careerImage from "@/assets/purpose/career.jpg";
import healthImage from "@/assets/purpose/health.jpg";
import loveImage from "@/assets/purpose/love.jpg";
import moneyImage from "@/assets/purpose/money.jpg";
import giftingImage from "@/assets/purpose/gifting.jpg";
import evilEyeImage from "@/assets/purpose/evil-eye.jpg";

const Collections = () => {
  const navigate = useNavigate();
  const [viewingCount, setViewingCount] = useState(234);

  // Simulate live viewing count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => Math.max(200, Math.min(300, prev + Math.floor(Math.random() * 11) - 5)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const collections = [
    // Gemstones
    { title: "Blue Sapphire", subtitle: "Neelam", items: 11, image: blueSapphireImage, href: "/blue-sapphire-collection", badge: "Saturn", hot: true },
    { title: "Yellow Sapphire", subtitle: "Pukhraj", items: 12, image: yellowSapphireImage, href: "/yellow-sapphire-collection", badge: "Jupiter" },
    { title: "Ruby", subtitle: "Manik", items: 9, image: rubyImage, href: "/ruby-collection", badge: "Sun" },
    { title: "Emerald", subtitle: "Panna", items: 53, image: emeraldImage, href: "/gemstones", badge: "Mercury", new: true },
    { title: "Pearl", subtitle: "Moti", items: 8, image: pearlImage, href: "/pearl-collection", badge: "Moon" },
    { title: "Red Coral", subtitle: "Moonga", items: 15, image: redCoralImage, href: "/moonga-collection", badge: "Mars" },
    { title: "Hessonite", subtitle: "Gomed", items: 10, image: hessoniteImage, href: "/hessonite-collection", badge: "Rahu" },
    { title: "Cat's Eye", subtitle: "Lehsunia", items: 8, image: catsEyeImage, href: "/cats-eye-collection", badge: "Ketu" },
    { title: "Lapis Lazuli", subtitle: "", items: 6, image: lapisLazuliImage, href: "/lapis-lazuli-collection", badge: "" },
    
    // Other Collections
    { title: "Rudraksha", subtitle: "", items: 25, image: rudrakshaImage, href: "/rudraksha", badge: "Shiva", hot: true },
    { title: "Bracelets", subtitle: "", items: 20, image: braceletImage, href: "/bracelets", badge: "" },
    { title: "Mala", subtitle: "", items: 12, image: malaImage, href: "/mala", badge: "" },
    { title: "Yantra", subtitle: "", items: 15, image: yantraImage, href: "/yantra", badge: "" },
    { title: "Vastu Paintings", subtitle: "", items: 12, image: vastuImage, href: "/vastu-painting", badge: "" },
    { title: "Consultation", subtitle: "", items: 3, image: consultationImage, href: "/consultation", badge: "Expert" },
    
    // Shop by Purpose
    { title: "Career", subtitle: "Growth & Success", items: 4, image: careerImage, href: "/gemstones?purpose=career", badge: "Purpose" },
    { title: "Health", subtitle: "Wellness & Healing", items: 5, image: healthImage, href: "/gemstones?purpose=health", badge: "Purpose" },
    { title: "Love", subtitle: "Relationships", items: 4, image: loveImage, href: "/gemstones?purpose=love", badge: "Purpose" },
    { title: "Money", subtitle: "Wealth & Prosperity", items: 6, image: moneyImage, href: "/gemstones?purpose=money", badge: "Purpose" },
    { title: "Gifting", subtitle: "Special Occasions", items: 10, image: giftingImage, href: "/gemstones?purpose=gifting", badge: "Gift" },
    { title: "Evil Eye", subtitle: "Protection", items: 3, image: evilEyeImage, href: "/gemstones?purpose=protection", badge: "Protection" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Trust Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white py-2.5 px-4">
        <div className="container mx-auto flex items-center justify-center gap-4 text-sm font-medium">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>✨ Trusted by 50 Million+ Customers Worldwide</span>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-green-50 dark:bg-green-950/30 border-b border-green-200 dark:border-green-800 py-2.5">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm flex-wrap">
          <span className="flex items-center gap-1.5 text-green-700 dark:text-green-400 font-medium">
            <BadgeCheck className="h-4 w-4" /> 100% Certified
          </span>
          <span className="flex items-center gap-1.5 text-green-700 dark:text-green-400 font-medium">
            <Truck className="h-4 w-4" /> Free Shipping
          </span>
          <span className="flex items-center gap-1.5 text-green-700 dark:text-green-400 font-medium">
            <RefreshCcw className="h-4 w-4" /> 7-Day Returns
          </span>
          <span className="flex items-center gap-1.5 text-green-700 dark:text-green-400 font-medium">
            <Users className="h-4 w-4" /> 50M+ Customers
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button onClick={() => navigate('/')} className="hover:text-foreground transition-colors">Home</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">All Collections</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background dark:from-amber-950/20 dark:via-orange-950/10 dark:to-background py-8 md:py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Live Badge */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Badge className="bg-red-500 text-white animate-pulse">
                <Zap className="w-3 h-3 mr-1" /> LIVE
              </Badge>
              <Badge variant="outline" className="text-xs border-red-300 text-red-600 dark:border-red-700 dark:text-red-400">
                <Eye className="w-3 h-3 mr-1" /> {viewingCount} people browsing
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Explore Our Collections
            </h1>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Discover authentic gemstones, sacred Rudraksha, spiritual malas, and Vastu remedies. 
              Each item is certified, energized, and ready to transform your life.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 md:gap-10 mb-6">
              {[
                { value: "21+", label: "Years Trust" },
                { value: "50M+", label: "Customers" },
                { value: "4.9★", label: "Rating" },
                { value: "100K+", label: "Products" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-amber-600">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Free Expert Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/gemstone-calculator')}
              >
                Find Your Gemstone
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, idx) => (
            <Card 
              key={idx}
              className="group relative overflow-hidden cursor-pointer border-2 border-dashed border-amber-200/50 dark:border-amber-800/50 hover:border-amber-400 dark:hover:border-amber-600 bg-gradient-to-br from-white to-amber-50/30 dark:from-background dark:to-amber-950/10 transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/30 dark:hover:shadow-amber-900/20"
              onClick={() => navigate(collection.href)}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-100/50 to-orange-100/50 dark:from-amber-900/20 dark:to-orange-900/20">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badges */}
                  {collection.hot && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-0.5 animate-pulse">
                      🔥 HOT
                    </Badge>
                  )}
                  {collection.new && (
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-0.5">
                      ✨ NEW
                    </Badge>
                  )}
                  {collection.badge && !collection.hot && !collection.new && (
                    <Badge className="absolute top-2 right-2 bg-amber-500/90 text-white text-[10px] px-2 py-0.5">
                      {collection.badge}
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="font-bold text-base md:text-lg text-foreground group-hover:text-amber-600 transition-colors">
                    {collection.title}
                  </h3>
                  {collection.subtitle && (
                    <p className="text-xs text-muted-foreground">{collection.subtitle}</p>
                  )}
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mt-1">
                    {collection.items} items
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 mb-3">
              <Star className="w-3 h-3 mr-1 fill-amber-500 text-amber-500" />
              Customer Verified
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose AstroSage?</h2>
            <p className="text-muted-foreground">Trusted by millions for authentic spiritual products</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "100% Certified", desc: "Government lab certified gemstones with authenticity guarantee" },
              { icon: Truck, title: "Free Shipping", desc: "Free express delivery across India on all orders" },
              { icon: RefreshCcw, title: "7-Day Returns", desc: "No questions asked return policy with full refund" },
              { icon: Star, title: "Expert Guidance", desc: "Free consultation with experienced astrologers" },
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 bg-white/60 dark:bg-background/60 rounded-2xl border border-amber-200/50 dark:border-amber-800/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Not Sure Which Gemstone to Choose?
          </h2>
          <p className="text-green-100 mb-6">
            Get personalized recommendations from our expert astrologers. Free consultation available 24/7.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Talk to Expert Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/gemstone-calculator')}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Use AI Calculator
            </Button>
          </div>
          <p className="text-xs text-green-200 mt-4 flex items-center justify-center gap-2">
            <CheckCircle className="w-3 h-3" />
            Trusted by 50M+ customers • 21+ years of expertise
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-xl shadow-green-500/30 animate-bounce"
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </main>
  );
};

export default Collections;
