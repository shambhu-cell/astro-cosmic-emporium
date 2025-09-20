import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Crown } from "lucide-react";
import heroCosmic from "@/assets/hero-cosmic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCosmic} 
          alt="Cosmic celestial background with stars and nebula" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-cosmic/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-mystical-float">
        <Sparkles className="h-6 w-6 text-accent opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-cosmic-pulse">
        <Crown className="h-8 w-8 text-primary opacity-40" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-mystical-float" style={{ animationDelay: '2s' }}>
        <Zap className="h-5 w-5 text-accent opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent leading-tight">
            Discover Your 
            <span className="block text-primary drop-shadow-glow">Cosmic Destiny</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore premium astrology services, sacred gemstones, and mystical treasures 
            curated by India's most trusted astrology platform
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            <Sparkles className="h-5 w-5 group-hover:animate-spin" />
            Explore Collection
          </Button>
          <Button variant="celestial" size="xl">
            <Crown className="h-5 w-5" />
            Get Reading
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">25M+</div>
            <div className="text-sm text-muted-foreground">Customers Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-sm text-muted-foreground">Expert Astrologers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Divine Guidance</div>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-celestial opacity-30 pointer-events-none" />
    </section>
  );
};

export default Hero;