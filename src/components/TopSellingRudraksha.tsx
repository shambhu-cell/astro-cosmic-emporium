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
import nirakarImage from "@/assets/rudraksha/nirakar.jpg";
import oneMukhiImage from "@/assets/rudraksha/1-mukhi.jpg";
import threeMukhiImage from "@/assets/rudraksha/3-mukhi.jpg";
import fourMukhiImage from "@/assets/rudraksha/4-mukhi.jpg";

const TopSellingRudraksha = () => {
  const products = [
    {
      name: "Nirakar Rudraksha",
      subtitle: "100% Authentic & Certified",
      description: "Nepal Origin Nirakar Rudraksha (0 Mukhi) - 18mm - 22mm",
      image: nirakarImage,
      rating: 4.8,
      reviews: 111,
      price: 999,
      originalPrice: 1699,
      link: "/rudraksha/nirakar"
    },
    {
      name: "1 Mukhi Rudraksha",
      subtitle: "100% Authentic & Certified",
      description: "Nepal Origin 1 Mukhi Rudraksha - 18mm - 22mm",
      image: oneMukhiImage,
      rating: 4.7,
      reviews: 80,
      price: 8399,
      originalPrice: 12200,
      emi: true,
      emiAmount: 1050,
      link: "/rudraksha/1-mukhi"
    },
    {
      name: "3 Mukhi Rudraksha",
      subtitle: "100% Authentic & Certified",
      description: "Nepal Origin 3 Mukhi Rudraksha - 18mm - 22mm",
      image: threeMukhiImage,
      rating: 4.9,
      reviews: 94,
      price: 1499,
      originalPrice: 1700,
      link: "/rudraksha/3-mukhi"
    },
    {
      name: "4 Mukhi Rudraksha",
      subtitle: "100% Authentic & Certified",
      description: "Nepal Origin 4 Mukhi Rudraksha - 18mm - 22mm",
      image: fourMukhiImage,
      rating: 4.8,
      reviews: 71,
      price: 899,
      originalPrice: 1499,
      link: "/rudraksha/4-mukhi"
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Our Top Selling Rudraksha
          </h2>
          <p className="text-sm text-muted-foreground">
            Certified Authentic Rudraksha from Nepal
          </p>
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="basis-[85%]">
                  <Card 
                    className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-background border-2 border-dashed border-amber-400 hover:border-amber-500 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Certified Badge */}
                    <div className="absolute top-2 right-2 z-10">
                      <Badge className="bg-muted/80 text-foreground border border-amber-400 rounded-full px-2 py-0.5 text-[10px] font-bold shadow-md">
                        CERTIFIED
                      </Badge>
                    </div>

                    {/* Product Image */}
                    <div className="aspect-square bg-gradient-to-br from-amber-50 to-white p-6 flex items-center justify-center">
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
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
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

                      {/* EMI Option */}
                      {product.emi && (
                        <div className="text-center">
                          <span className="text-[10px] text-muted-foreground">or ₹{product.emiAmount}/Month</span>
                          <Badge variant="secondary" className="ml-1 text-[9px] px-1.5 py-0">Buy on EMI</Badge>
                        </div>
                      )}

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
              className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-background border-2 border-dashed border-amber-400 hover:border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Certified Badge */}
              <div className="absolute top-2 right-2 z-10">
                <Badge className="bg-muted/80 text-foreground border border-amber-400 rounded-full px-2 py-0.5 text-[10px] font-bold shadow-md">
                  CERTIFIED
                </Badge>
              </div>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-white p-6 flex items-center justify-center">
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
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
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

                {/* EMI Option */}
                {product.emi && (
                  <div className="text-center">
                    <span className="text-[10px] text-muted-foreground">or ₹{product.emiAmount}/Month</span>
                    <Badge variant="secondary" className="ml-1 text-[9px] px-1.5 py-0">Buy on EMI</Badge>
                  </div>
                )}

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
            onClick={() => window.location.href = '/rudraksha'}
          >
            View All Rudraksha
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingRudraksha;
