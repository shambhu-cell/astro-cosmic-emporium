import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Gem, BookOpen, Zap } from "lucide-react";
import gemstones from "@/assets/gemstones.jpg";
import consultation from "@/assets/consultation.jpg";
import yantras from "@/assets/yantras.jpg";

const categories = [
  {
    id: "consultations",
    title: "Astrology Consultations",
    description: "Connect with expert astrologers for personalized guidance",
    icon: Sparkles,
    image: consultation,
    color: "primary",
    count: "50+ Experts"
  },
  {
    id: "gemstones",
    title: "Sacred Gemstones",
    description: "Authentic crystals and gemstones for spiritual healing",
    icon: Gem,
    image: gemstones,
    color: "accent",
    count: "200+ Stones"
  },
  {
    id: "yantras",
    title: "Mystical Yantras",
    description: "Sacred geometric patterns for prosperity and peace",
    icon: Zap,
    image: yantras,
    color: "secondary",
    count: "75+ Designs"
  },
  {
    id: "reports",
    title: "Detailed Reports",
    description: "Comprehensive astrological analysis and predictions",
    icon: BookOpen,
    image: consultation,
    color: "primary",
    count: "25+ Types"
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Explore Our Mystical Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover ancient wisdom through our carefully curated spiritual treasures and expert guidance
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-mystical transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-mystical/60" />
                </div>

                <CardContent className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-accent font-medium">
                        {category.count}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-celestial" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="mystical" size="lg" className="px-8">
            View All Categories
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;