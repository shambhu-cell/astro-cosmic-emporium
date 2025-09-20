import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

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
  id,
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
    <Link to={`/product/${id}`}>
      <Card className="group relative overflow-hidden bg-white border border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isFeatured && (
          <Badge className="bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        {isPopular && (
          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/50">
            Bestseller
          </Badge>
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 bg-white/90 hover:bg-white hover:text-primary shadow-soft"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Wishlist logic here
          }}
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 bg-white/90 hover:bg-white hover:text-primary shadow-soft"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Quick view logic here
          }}
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs text-muted-foreground">
            {category}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
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
            <>
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                {Math.round((1 - price / originalPrice) * 100)}% OFF
              </Badge>
            </>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          variant="primary" 
          className="w-full"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Add to cart logic here
          }}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default ProductCard;