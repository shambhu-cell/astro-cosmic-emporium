import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import gemstonesImage from "@/assets/gemstones.jpg";
import yantrasImage from "@/assets/yantras.jpg";
import nirakarImage from "@/assets/rudraksha/nirakar.jpg";
import tigerEyeImage from "@/assets/bracelets/tiger-eye.jpg";
import rudrakshaMalaImage from "@/assets/mala/rudraksha-mala.jpg";

const CollectionsSlider = () => {
  const collections = [
    {
      title: "Gemstones",
      description: "Certified Natural Gemstones for Astrological Benefits",
      image: gemstonesImage,
      link: "/gemstones",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      title: "Rudraksha",
      description: "Original Nepal Rudraksha for Spiritual Protection",
      image: nirakarImage,
      link: "/rudraksha",
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Bracelets",
      description: "Energy Crystal Bracelets for Fashion & Faith",
      image: tigerEyeImage,
      link: "/bracelets",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Mala",
      description: "108 Beads Prayer Mala for Meditation & Mantras",
      image: rudrakshaMalaImage,
      link: "/mala",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Yantra",
      description: "Sacred Energized Yantras for Divine Blessings",
      image: yantrasImage,
      link: "/yantra",
      gradient: "from-yellow-500/20 to-amber-500/20"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Explore Our Collections
          </h2>
          <p className="text-sm text-muted-foreground">
            Discover Authentic Spiritual Products for Your Journey
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {collections.map((collection, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    {/* Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${collection.image})`
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} to-transparent`} />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {collection.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-4">
                        {collection.description}
                      </p>
                      <Button 
                        variant="secondary"
                        size="sm"
                        className="w-fit bg-white/90 hover:bg-white text-foreground"
                        onClick={() => window.location.href = collection.link}
                      >
                        Explore Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default CollectionsSlider;
