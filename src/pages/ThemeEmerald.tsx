import { useState } from "react";
import { ChevronLeft, ChevronRight, Shield, Award, Clock, BadgeCheck, Headphones, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import CollectionsSlider from "@/components/CollectionsSlider";
import ShopByPurpose from "@/components/ShopByPurpose";
import TopSellingRudraksha from "@/components/TopSellingRudraksha";
import TopSellingBracelets from "@/components/TopSellingBracelets";
import TopSellingGemstones from "@/components/TopSellingGemstones";
import TopSellingMala from "@/components/TopSellingMala";
import FAQ from "@/components/FAQ";
import TrustLogos from "@/components/TrustLogos";
import Newsletter from "@/components/Newsletter";

const ThemeEmerald = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "FASHION MEETS FAITH:",
      subtitle: "Energy Bracelets",
      description: "THAT WORK",
      cta: "SHOP BRACELETS",
      link: "/bracelets",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&h=600&fit=crop"
    },
    {
      title: "PURE GEMSTONES",
      subtitle: "Certified Authentic",
      description: "FOR ASTROLOGICAL BENEFITS",
      cta: "SHOP GEMSTONES",
      link: "/gemstones",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop"
    },
    {
      title: "ORIGINAL RUDRAKSHA",
      subtitle: "Nepali Quality",
      description: "SPIRITUAL PROTECTION",
      cta: "SHOP RUDRAKSHA",
      link: "/rudraksha",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&h=600&fit=crop"
    },
    {
      title: "SACRED YANTRAS",
      subtitle: "Energized & Blessed",
      description: "DIVINE POWER",
      cta: "SHOP YANTRA",
      link: "/yantra",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&h=600&fit=crop"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="min-h-screen"
      style={{
        // Emerald & Copper Theme - Luxurious & Natural
        '--background': '30 25% 98%',
        '--foreground': '160 20% 15%',
        '--primary': '160 85% 35%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '30 30% 95%',
        '--secondary-foreground': '160 20% 15%',
        '--accent': '20 70% 60%',
        '--accent-foreground': '160 20% 15%',
        '--muted': '30 25% 94%',
        '--muted-foreground': '160 15% 45%',
        '--border': '30 20% 88%',
        '--ring': '160 85% 35%',
        '--gradient-hero': 'linear-gradient(135deg, hsl(30 35% 96%), hsl(160 25% 92%))',
        '--gradient-primary': 'linear-gradient(135deg, hsl(160 85% 35%), hsl(160 75% 45%))',
        '--shadow-primary': '0 8px 25px -5px hsl(160 85% 35% / 0.35)',
      } as React.CSSProperties}
    >
      <main className="min-h-screen">
        {/* Theme Info Banner */}
        <div className="bg-primary text-primary-foreground py-3 text-center">
          <p className="text-sm font-medium">🎨 Emerald & Copper - Luxurious & Natural Theme | <a href="/" className="underline">View Original</a> | <a href="/theme-royal" className="underline">Royal</a> | <a href="/theme-sapphire" className="underline">Sapphire</a></p>
        </div>

        {/* Hero Slider */}
        <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(5,80,50,0.6), rgba(6,95,70,0.7)), url(${slide.image})`
                }}
              />
              <div className="relative container h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">{slide.title}</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent leading-tight">
                    {slide.subtitle}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8">{slide.description}</p>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-bold px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-sm sm:text-base md:text-lg shadow-lg"
                    onClick={() => window.location.href = slide.link}
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-1.5 sm:p-2 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-1.5 sm:p-2 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-orange-400" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 sm:py-10 md:py-12 bg-muted/30">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">100% Authentic</h3>
                <p className="text-xs text-muted-foreground hidden sm:block">Lab Certified Products</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">21 Years Trust</h3>
                <p className="text-xs text-muted-foreground hidden sm:block">Serving Since 2004</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Fast Delivery</h3>
                <p className="text-xs text-muted-foreground hidden sm:block">3-7 Days Shipping</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">5 Lakh+ Customers</h3>
                <p className="text-xs text-muted-foreground hidden sm:block">Trusted Worldwide</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Headphones className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Expert Support</h3>
                <p className="text-xs text-muted-foreground hidden sm:block">Free Consultation</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Vedic Energized</h3>
                <p className="text-xs text-muted-foreground hidden sm:block">Blessed By Pandits</p>
              </div>
            </div>
          </div>
        </section>

        <CollectionsSlider />
        <ShopByPurpose />
        <TopSellingRudraksha />
        <TopSellingBracelets />
        <TopSellingGemstones />
        <TopSellingMala />
        <FAQ />
        <TrustLogos />
        <Newsletter />
      </main>
    </div>
  );
};

export default ThemeEmerald;
