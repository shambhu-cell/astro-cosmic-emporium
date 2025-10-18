import { useState } from "react";
import { ChevronLeft, ChevronRight, Shield, Award, Clock, BadgeCheck, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TrustLogos from "@/components/TrustLogos";
import ShopByPurpose from "@/components/ShopByPurpose";
import TopSellingRudraksha from "@/components/TopSellingRudraksha";
import TopSellingBracelets from "@/components/TopSellingBracelets";
import TopSellingGemstones from "@/components/TopSellingGemstones";
import TopSellingMala from "@/components/TopSellingMala";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

const Index = () => {
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
    <main className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
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
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`
              }}
            />
            <div className="relative container h-full flex items-center justify-center text-center text-white">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-3xl mb-2">{slide.title}</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {slide.subtitle}
                </h1>
                <p className="text-3xl md:text-4xl mb-8">{slide.description}</p>
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 text-lg"
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-yellow-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-base">100% Authentic</h3>
              <p className="text-xs text-muted-foreground">Lab Certified Products</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-base">21 Years Trust</h3>
              <p className="text-xs text-muted-foreground">Serving Since 2004</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-base">Fast Delivery</h3>
              <p className="text-xs text-muted-foreground">3-7 Days Shipping</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BadgeCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-base">5 Lakh+ Customers</h3>
              <p className="text-xs text-muted-foreground">Trusted Worldwide</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-base">Expert Support</h3>
              <p className="text-xs text-muted-foreground">Free Consultation</p>
            </div>
          </div>
        </div>
      </section>

      <ShopByPurpose />
      <TopSellingRudraksha />
      <TopSellingBracelets />
      <TopSellingGemstones />
      <TopSellingMala />
      <FAQ />
      <TrustLogos />
      <Newsletter />
    </main>
  );
};

export default Index;
