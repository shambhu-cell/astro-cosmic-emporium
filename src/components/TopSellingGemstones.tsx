import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag } from "lucide-react";
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

const TopSellingGemstones = () => {
  const products = [
    {
      name: "Blue Sapphire (Neelam)",
      subtitle: "100% Authentic & Certified",
      description: "Natural Blue Sapphire - Premium Quality",
      image: blueSapphireImage,
      rating: 4.9,
      reviews: 143,
      price: 12999,
      originalPrice: 18999,
      emi: true,
      emiAmount: 1625,
      link: "/gemstones/blue-sapphire"
    },
    {
      name: "Ruby (Manik)",
      subtitle: "100% Authentic & Certified",
      description: "Natural Ruby Gemstone - Premium Quality",
      image: rubyImage,
      rating: 4.8,
      reviews: 118,
      price: 11499,
      originalPrice: 16999,
      emi: true,
      emiAmount: 1437,
      link: "/gemstones/ruby"
    },
    {
      name: "Emerald (Panna)",
      subtitle: "100% Authentic & Certified",
      description: "Natural Emerald Gemstone - Premium Quality",
      image: emeraldImage,
      rating: 4.7,
      reviews: 95,
      price: 9999,
      originalPrice: 14999,
      emi: true,
      emiAmount: 1250,
      link: "/gemstones/emerald"
    },
    {
      name: "Yellow Sapphire (Pukhraj)",
      subtitle: "100% Authentic & Certified",
      description: "Natural Yellow Sapphire - Premium Quality",
      image: yellowSapphireImage,
      rating: 4.9,
      reviews: 167,
      price: 10999,
      originalPrice: 15999,
      emi: true,
      emiAmount: 1375,
      link: "/gemstones/yellow-sapphire"
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Our Top Selling Gemstones
          </h2>
          <p className="text-sm text-muted-foreground">
            Certified Authentic Natural Gemstones
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-to-br from-violet-50 to-background border-2 border-dashed border-violet-400 hover:border-violet-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Certified Badge */}
              <div className="absolute top-2 right-2 z-10">
                <Badge className="bg-muted/80 text-foreground border border-violet-400 rounded-full px-2 py-0.5 text-[10px] font-bold shadow-md">
                  CERTIFIED
                </Badge>
              </div>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-violet-50 to-white p-6 flex items-center justify-center">
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
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-violet-400 text-violet-400' : 'text-gray-300'}`}
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
            onClick={() => window.location.href = '/gemstones'}
          >
            View All Gemstones
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingGemstones;
