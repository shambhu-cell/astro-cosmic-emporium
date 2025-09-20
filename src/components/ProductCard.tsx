import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isFeatured?: boolean;
  isPopular?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  category,
  isFeatured = false,
  isPopular = false,
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-cosmic transition-all duration-500 hover:scale-105 hover:border-primary/50">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isFeatured && (
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        {isPopular && (
          <Badge variant="outline" className="bg-accent/20 text-accent border-accent/50">
            Popular
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-primary"
      >
        <Heart className="h-4 w-4" />
      </Button>

      {/* Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs text-muted-foreground border-muted">
            {category}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating)
                    ? "fill-accent text-accent"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-primary">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
          {originalPrice && (
            <Badge variant="secondary" className="text-xs bg-accent/20 text-accent">
              {Math.round((1 - price / originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          variant="cosmic" 
          className="w-full group-hover:shadow-glow transition-all duration-300"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;