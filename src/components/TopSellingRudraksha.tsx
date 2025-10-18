import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag } from "lucide-react";
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
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Top Selling Rudraksha
          </h2>
          <p className="text-lg text-muted-foreground">
            Certified Authentic Rudraksha from Nepal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-background border-2 border-dashed border-amber-400 hover:border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Certified Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-muted/80 text-foreground border-2 border-amber-400 rounded-full px-3 py-1 text-xs font-bold shadow-lg">
                  CERTIFIED
                </Badge>
              </div>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-white p-8 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-3 bg-background">
                <div className="text-center space-y-1">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-xs text-center text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.reviews} reviews
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* EMI Option */}
                {product.emi && (
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground">or ₹{product.emiAmount}/Month</span>
                    <Badge variant="secondary" className="ml-2 text-xs">Buy on EMI</Badge>
                  </div>
                )}

                {/* Add Button */}
                <Button 
                  className="w-full bg-foreground hover:bg-foreground/90 text-background"
                  size="lg"
                  onClick={() => window.location.href = product.link}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            size="lg"
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
