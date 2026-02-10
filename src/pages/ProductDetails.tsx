import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Shield, 
  Truck, 
  RotateCcw, 
  Award,
  Clock,
  Users,
  CheckCircle,
  Minus,
  Plus,
  Zap
} from "lucide-react";
import gemstones from "@/assets/gemstones.jpg";
import consultation from "@/assets/consultation.jpg";
import WhoBuysThis from "@/components/WhoBuysThis";

// Mock product data - in real app, this would come from API
const getProductData = (id: string) => ({
  id,
  name: "Premium Blue Sapphire Ring - Certified Natural Stone",
  price: 15999,
  originalPrice: 22999,
  discount: 30,
  rating: 4.8,
  reviewCount: 892,
  images: [gemstones, consultation, gemstones],
  category: "Gemstones",
  availability: "In Stock",
  deliveryTime: "2-3 business days",
  description: "Experience the powerful energy of this certified natural Blue Sapphire ring, carefully selected by our expert astrologers for maximum astrological benefits.",
  benefits: [
    "Enhances wisdom and mental clarity",
    "Attracts wealth and prosperity", 
    "Provides protection from negative energies",
    "Improves focus and concentration",
    "Strengthens Saturn's positive influence"
  ],
  specifications: {
    "Stone Type": "Natural Blue Sapphire",
    "Carat Weight": "3.25 Ratti (2.95 Carats)",
    "Origin": "Ceylon (Sri Lanka)",
    "Treatment": "No Heat, No Treatment",
    "Metal": "Sterling Silver 925",
    "Ring Size": "Adjustable (US 6-9)",
    "Certification": "Gemological Institute Certified"
  },
  guarantee: "Lifetime authenticity guarantee with free resizing",
});

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Got this ring 3 months ago and my career has taken a wonderful turn! The quality is exceptional and exactly as described.",
    verified: true
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi", 
    rating: 5,
    text: "Excellent quality gemstone. I can feel the positive energy. Fast delivery and great packaging. Highly recommended!",
    verified: true
  },
  {
    name: "Meera Patel",
    location: "Bangalore",
    rating: 4,
    text: "Beautiful ring with authentic stone. The astrologer consultation was very helpful in choosing the right piece.",
    verified: true
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductData(id || "1");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("7");

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <span className="text-muted-foreground">Home</span>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-muted-foreground">{product.category}</span>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg shadow-card overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                {product.discount}% OFF
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <WhoBuysThis />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <Badge className="bg-green-100 text-green-800">
                  Save ₹{(product.originalPrice - product.price).toLocaleString()}
                </Badge>
              </div>
            </div>

            {/* Key Benefits */}
            <Card className="bg-gradient-premium border-primary/20">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  Astrological Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium mb-3">Ring Size (US)</h3>
              <div className="flex gap-2">
                {["6", "7", "8", "9", "Adjustable"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button variant="cta" size="xl" className="w-full">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ₹{(product.price * quantity).toLocaleString()}
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="premium" size="lg">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Authentic Guarantee</p>
              </div>
              <div className="text-center">
                <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Easy Returns</p>
              </div>
            </div>

            {/* Urgency Indicators */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-orange-800">Limited Time Offer</span>
                </div>
                <Badge variant="destructive">23 left in stock</Badge>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-orange-600 mr-2" />
                <span className="text-sm text-orange-700">45 people viewing this product</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This magnificent Blue Sapphire has been carefully selected by our team of expert astrologers 
                  and gemologists. Each stone undergoes rigorous quality checks and comes with proper certification 
                  to ensure you receive only the finest quality gemstone for your astrological needs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Astrological Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {testimonials.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.name}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              <Award className="h-3 w-3 mr-1" />
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-accent text-accent"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Trust Section */}
        <Card className="bg-gradient-premium mb-16">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Choose AstroSage Store?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">100% Authentic</h3>
                <p className="text-muted-foreground text-sm">
                  All gemstones are certified and come with lifetime authenticity guarantee
                </p>
              </div>
              <div>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground text-sm">
                  Free consultation with certified astrologers for perfect stone selection
                </p>
              </div>
              <div>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">25M+ Satisfied Customers</h3>
                <p className="text-muted-foreground text-sm">
                  Trusted by millions worldwide since 2001 with 4.9/5 rating
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;