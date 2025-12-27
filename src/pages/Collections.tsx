import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Shield, Star, ChevronRight, Sparkles, MessageCircle, Phone,
  Truck, RefreshCcw, BadgeCheck, Users, Eye, CheckCircle, ArrowRight, 
  Gem, Crown, Heart, Flame
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

interface Collection {
  title: string;
  subtitle?: string;
  items: number;
  image: string;
  href: string;
  badge?: string;
  hot?: boolean;
  new?: boolean;
  bestseller?: boolean;
}

const CollectionCard = ({ collection, index }: { collection: Collection; index: number }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="group relative cursor-pointer"
      onClick={() => navigate(collection.href)}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={collection.image} 
            alt={collection.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
            {collection.hot && (
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-[11px] font-bold px-2.5 py-1 shadow-lg animate-pulse">
                <Flame className="w-3 h-3 mr-1" /> HOT
              </Badge>
            )}
            {collection.new && (
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[11px] font-bold px-2.5 py-1 shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" /> NEW
              </Badge>
            )}
            {collection.bestseller && (
              <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-[11px] font-bold px-2.5 py-1 shadow-lg">
                <Crown className="w-3 h-3 mr-1" /> BESTSELLER
              </Badge>
            )}
            {collection.badge && !collection.hot && !collection.new && !collection.bestseller && (
              <Badge className="bg-black/60 backdrop-blur-sm text-white/90 text-[10px] px-2 py-1 ml-auto">
                {collection.badge}
              </Badge>
            )}
          </div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 group-hover:text-primary transition-colors">
              {collection.title}
            </h3>
            {collection.subtitle && (
              <p className="text-white/70 text-sm">{collection.subtitle}</p>
            )}
            <div className="flex items-center justify-between mt-3">
              <span className="text-white/90 text-sm font-medium">
                {collection.items} Products
              </span>
              <span className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Shop Now <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Collections = () => {
  const navigate = useNavigate();
  const [viewingCount, setViewingCount] = useState(234);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => Math.max(200, Math.min(300, prev + Math.floor(Math.random() * 11) - 5)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const gemstones: Collection[] = [
    { title: "Blue Sapphire", subtitle: "Neelam", items: 11, image: blueSapphireImage, href: "/blue-sapphire-collection", badge: "Saturn", hot: true },
    { title: "Yellow Sapphire", subtitle: "Pukhraj", items: 12, image: yellowSapphireImage, href: "/yellow-sapphire-collection", badge: "Jupiter", bestseller: true },
    { title: "Ruby", subtitle: "Manik", items: 9, image: rubyImage, href: "/ruby-collection", badge: "Sun" },
    { title: "Emerald", subtitle: "Panna", items: 53, image: emeraldImage, href: "/gemstones", badge: "Mercury", new: true },
    { title: "Pearl", subtitle: "Moti", items: 8, image: pearlImage, href: "/pearl-collection", badge: "Moon" },
    { title: "Red Coral", subtitle: "Moonga", items: 15, image: redCoralImage, href: "/moonga-collection", badge: "Mars" },
    { title: "Hessonite", subtitle: "Gomed", items: 10, image: hessoniteImage, href: "/hessonite-collection", badge: "Rahu" },
    { title: "Cat's Eye", subtitle: "Lehsunia", items: 8, image: catsEyeImage, href: "/cats-eye-collection", badge: "Ketu" },
    { title: "Lapis Lazuli", subtitle: "Spiritual Stone", items: 6, image: lapisLazuliImage, href: "/lapis-lazuli-collection" },
  ];

  const otherCollections: Collection[] = [
    { title: "Rudraksha", subtitle: "Sacred Beads", items: 25, image: rudrakshaImage, href: "/rudraksha", hot: true },
    { title: "Bracelets", subtitle: "Healing Energy", items: 20, image: braceletImage, href: "/bracelets" },
    { title: "Mala", subtitle: "Prayer Beads", items: 12, image: malaImage, href: "/mala" },
    { title: "Yantra", subtitle: "Sacred Geometry", items: 15, image: yantraImage, href: "/yantra" },
    { title: "Vastu Paintings", subtitle: "Home Harmony", items: 12, image: vastuImage, href: "/vastu-painting" },
    { title: "Consultation", subtitle: "Expert Guidance", items: 3, image: consultationImage, href: "/consultation", badge: "Expert" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Animated Trust Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-amber-500 to-primary text-white py-2.5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] animate-[shimmer_2s_infinite]" 
          style={{ animation: 'shimmer 2s infinite', backgroundSize: '200% 100%' }} />
        <div className="container mx-auto flex items-center justify-center gap-4 text-sm font-medium relative z-10">
          <Sparkles className="w-4 h-4" />
          <span>Trusted by 50 Million+ Customers • 21+ Years of Excellence</span>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-secondary/50 border-b py-2.5">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm flex-wrap">
          <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
            <BadgeCheck className="h-4 w-4 text-green-600" /> 100% Certified
          </span>
          <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
            <Truck className="h-4 w-4 text-primary" /> Free Shipping
          </span>
          <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
            <RefreshCcw className="h-4 w-4 text-blue-600" /> 7-Day Returns
          </span>
          <span className="flex items-center gap-1.5 text-foreground/80 font-medium">
            <Users className="h-4 w-4 text-purple-600" /> 50M+ Customers
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Live Badge */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge className="bg-red-500/10 text-red-600 border border-red-200 px-3 py-1.5">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                LIVE
              </Badge>
              <Badge variant="outline" className="px-3 py-1.5">
                <Eye className="w-3.5 h-3.5 mr-1.5" /> {viewingCount} browsing now
              </Badge>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">
                Our Collections
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover certified gemstones, sacred Rudraksha, and spiritual items. 
              Each piece energized for your transformation.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 md:gap-14 mb-8">
              {[
                { value: "21+", label: "Years", icon: Crown },
                { value: "50M+", label: "Customers", icon: Heart },
                { value: "4.9★", label: "Rating", icon: Star },
                { value: "100K+", label: "Products", icon: Gem },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <stat.icon className="w-5 h-5 mx-auto mb-1 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg shadow-green-600/25 text-base px-8"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Free Expert Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8"
                onClick={() => navigate('/gemstone-calculator')}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Find Your Gemstone
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gemstones Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Badge className="bg-primary/10 text-primary mb-2">Planetary Gemstones</Badge>
            <h2 className="text-2xl md:text-3xl font-bold">Certified Gemstones</h2>
            <p className="text-muted-foreground mt-1">Lab-certified gemstones for each planet</p>
          </div>
          <Button 
            variant="ghost" 
            className="text-primary hidden md:flex"
            onClick={() => navigate('/gemstones')}
          >
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {gemstones.map((collection, idx) => (
            <CollectionCard key={idx} collection={collection} index={idx} />
          ))}
        </div>
      </section>

      {/* Other Collections Section */}
      <section className="bg-secondary/30 border-y">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Badge className="bg-primary/10 text-primary mb-2">Spiritual Items</Badge>
              <h2 className="text-2xl md:text-3xl font-bold">More Collections</h2>
              <p className="text-muted-foreground mt-1">Sacred items for spiritual growth</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {otherCollections.map((collection, idx) => (
              <CollectionCard key={idx} collection={collection} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <Badge className="bg-primary/10 text-primary mb-3">Why AstroSage?</Badge>
          <h2 className="text-2xl md:text-3xl font-bold">Trusted by Millions</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Shield, title: "100% Certified", desc: "Government lab certified with authenticity guarantee", color: "text-green-600" },
            { icon: Truck, title: "Free Shipping", desc: "Free express delivery across India", color: "text-blue-600" },
            { icon: RefreshCcw, title: "7-Day Returns", desc: "No questions asked full refund policy", color: "text-purple-600" },
            { icon: Star, title: "Expert Guidance", desc: "Free consultation with experienced astrologers", color: "text-amber-600" },
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 pb-12">
        <div className="relative overflow-hidden max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-green-600 via-green-700 to-green-600 p-8 md:p-12 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>
          
          <div className="relative z-10 text-center">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-1.5">Expert Guidance</Badge>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Not Sure Which Gemstone to Choose?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
              Get personalized recommendations from our expert astrologers. Available 24/7.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-green-50 shadow-xl text-base px-8"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk to Expert Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-base px-8"
                onClick={() => navigate('/gemstone-calculator')}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Use AI Calculator
              </Button>
            </div>
            <p className="text-sm text-green-200 mt-6 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Trusted by 50M+ customers • 21+ years of expertise
            </p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-2xl shadow-green-500/40"
          onClick={() => window.open('https://wa.me/1234567890', '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </main>
  );
};

export default Collections;
