import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import rudrakshaMalaImage from "@/assets/mala/rudraksha-mala.jpg";
import crystalMalaImage from "@/assets/mala/crystal-mala.jpg";
import tulsiMalaImage from "@/assets/mala/tulsi-mala.jpg";
import sandalwoodMalaImage from "@/assets/mala/sandalwood-mala.jpg";

const TopSellingMala = () => {
  const products = [
    {
      name: "Rudraksha Mala",
      subtitle: "100% Authentic & Certified",
      description: "108 Beads Original Rudraksha Mala - Nepal Origin",
      image: rudrakshaMalaImage,
      rating: 4.9,
      reviews: 234,
      price: 2499,
      originalPrice: 3999,
      link: "/mala/rudraksha"
    },
    {
      name: "Crystal Mala",
      subtitle: "100% Authentic & Certified",
      description: "108 Beads Natural Crystal Mala - Clear Quartz",
      image: crystalMalaImage,
      rating: 4.8,
      reviews: 167,
      price: 1899,
      originalPrice: 2999,
      link: "/mala/crystal"
    },
    {
      name: "Tulsi Mala",
      subtitle: "100% Authentic & Certified",
      description: "108 Beads Sacred Tulsi Wood Mala - Handmade",
      image: tulsiMalaImage,
      rating: 4.7,
      reviews: 189,
      price: 899,
      originalPrice: 1499,
      link: "/mala/tulsi"
    },
    {
      name: "Sandalwood Mala",
      subtitle: "100% Authentic & Certified",
      description: "108 Beads Premium Sandalwood Mala - Aromatic",
      image: sandalwoodMalaImage,
      rating: 4.9,
      reviews: 203,
      price: 1499,
      originalPrice: 2499,
      link: "/mala/sandalwood"
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Our Top Selling Mala
          </h2>
          <p className="text-sm text-muted-foreground">
            Certified Authentic Prayer Mala Beads
          </p>
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 basis-[85%]">
                  <Card 
                    className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-background border-2 border-dashed border-orange-400 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-muted/80 text-foreground border border-orange-400 rounded-full px-2 py-0.5 text-[10px] font-bold shadow-md">
                        CERTIFIED
                      </Badge>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-orange-50 to-white p-6 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 space-y-2 bg-background">
                      <div className="text-center">
                        <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-[10px] text-muted-foreground font-medium">
                          {product.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-1.5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-muted-foreground">
                          {product.reviews} reviews
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="text-xl font-bold text-foreground">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <Button 
                        className="w-full bg-foreground hover:bg-foreground/90 text-background"
                        onClick={() => window.location.href = product.link}
                      >
                        <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                        Add
                      </Button>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-background border-2 border-dashed border-orange-400 hover:border-orange-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Certified Badge */}
              <div className="absolute top-2 right-2 z-10">
                <Badge className="bg-muted/80 text-foreground border border-orange-400 rounded-full px-2 py-0.5 text-[10px] font-bold shadow-md">
                  CERTIFIED
                </Badge>
              </div>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-white p-6 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2 bg-background">
                <div className="text-center">
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-medium">
                    {product.subtitle}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground">
                    {product.reviews} reviews
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-xl font-bold text-foreground">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Add Button */}
                <Button 
                  className="w-full bg-foreground hover:bg-foreground/90 text-background"
                  onClick={() => window.location.href = product.link}
                >
                  <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
                  Add
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="outline"
            className="border-2 hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.location.href = '/mala'}
          >
            View All Mala
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingMala;
