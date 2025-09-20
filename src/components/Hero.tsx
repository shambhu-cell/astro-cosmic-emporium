import { Button } from "@/components/ui/button";
import { Sparkles, Star, ShoppingBag, TrendingUp } from "lucide-react";
import heroBright from "@/assets/hero-bright.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBright} 
          alt="Premium astrology products and services" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Trust Indicators */}
      <div className="absolute top-8 right-8 hidden lg:flex flex-col items-end space-y-2 z-10">
        <div className="flex items-center space-x-1 bg-white/90 px-3 py-1 rounded-full shadow-soft">
          <Star className="h-4 w-4 text-accent fill-accent" />
          <span className="text-sm font-medium">4.9/5 Rating</span>
        </div>
        <div className="flex items-center space-x-1 bg-white/90 px-3 py-1 rounded-full shadow-soft">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">25M+ Happy Customers</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            India's Most Trusted
            <span className="block text-primary">Astrology Store</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Get authentic gemstones, expert consultations, and detailed reports from certified astrologers. 
            Trusted by millions since 2001.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="cta" size="xl" className="group">
            <ShoppingBag className="h-5 w-5 group-hover:animate-gentle-bounce" />
            Shop Premium Collection
          </Button>
          <Button variant="premium" size="xl">
            <Sparkles className="h-5 w-5" />
            Get Free Consultation
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center bg-white/80 p-4 rounded-lg shadow-soft">
            <div className="text-2xl font-bold text-primary mb-1">25M+</div>
            <div className="text-sm text-muted-foreground">Customers Served</div>
          </div>
          <div className="text-center bg-white/80 p-4 rounded-lg shadow-soft">
            <div className="text-2xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Expert Astrologers</div>
          </div>
          <div className="text-center bg-white/80 p-4 rounded-lg shadow-soft">
            <div className="text-2xl font-bold text-primary mb-1">23+</div>
            <div className="text-sm text-muted-foreground">Years of Trust</div>
          </div>
          <div className="text-center bg-white/80 p-4 rounded-lg shadow-soft">
            <div className="text-2xl font-bold text-primary mb-1">4.9★</div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;