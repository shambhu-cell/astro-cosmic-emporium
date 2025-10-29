import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Lock, 
  Truck, 
  RotateCcw, 
  Shield, 
  Heart,
  AlertCircle,
  Clock,
  Users,
  Sparkles,
  Tag,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

// Mock cart items
const initialCartItems = [
  {
    id: 1,
    name: "7 Chakra Healing Bracelet",
    category: "Crystal Bracelet",
    price: 1299,
    originalPrice: 1999,
    quantity: 1,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 342,
    inStock: 8,
    energized: true
  },
  {
    id: 2,
    name: "Natural Rudraksha Mala",
    category: "Spiritual Mala",
    price: 2499,
    originalPrice: 3499,
    quantity: 2,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 521,
    inStock: 12,
    energized: true
  }
];

const recommendedProducts = [
  {
    id: 101,
    name: "Tiger Eye Protection Bracelet",
    price: 899,
    originalPrice: 1499,
    image: "/placeholder.svg",
    discount: 40
  },
  {
    id: 102,
    name: "Rose Quartz Love Bracelet",
    price: 1099,
    originalPrice: 1699,
    image: "/placeholder.svg",
    discount: 35
  },
  {
    id: 103,
    name: "Black Obsidian Shield Bracelet",
    price: 1199,
    originalPrice: 1899,
    image: "/placeholder.svg",
    discount: 37
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [viewingCount] = useState(Math.floor(Math.random() * 15) + 8);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const shipping = subtotal >= 1500 ? 0 : 99;
  const promoDiscount = promoApplied ? Math.floor(subtotal * 0.1) : 0;
  const total = subtotal - promoDiscount + shipping;
  const freeShippingThreshold = 1500;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Math.min(10, item.quantity + delta)) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "first10") {
      setPromoApplied(true);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center py-16">
            <CardContent className="space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
                <p className="text-muted-foreground">Add some spiritual treasures to begin your journey</p>
              </div>
              <Button asChild size="lg" variant="primary">
                <Link to="/bracelets">
                  Start Shopping <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Urgency Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-sm font-medium">
          <Clock className="w-4 h-4" />
          <span>Flash Sale ends in 2h 34m - Complete your order now!</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <ShoppingBag className="w-8 h-8" />
              Shopping Cart
            </h1>
            <p className="text-muted-foreground mt-1">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">{viewingCount} people</strong> viewing their carts right now
            </span>
          </div>
        </div>

        {/* Free Shipping Alert */}
        {remainingForFreeShipping > 0 && (
          <Alert className="mb-6 border-primary/20 bg-primary/5">
            <Truck className="w-4 h-4 text-primary" />
            <AlertDescription>
              Add <strong className="text-primary">₹{remainingForFreeShipping}</strong> more to get <strong>FREE shipping!</strong>
              <div className="mt-2 w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                />
              </div>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {item.energized && (
                        <Badge className="absolute top-1 left-1 text-xs" variant="default">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Energized
                        </Badge>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <Link to={`/product/${item.id}`} className="hover:text-primary transition-colors">
                            <h3 className="font-semibold text-lg leading-tight mb-1">{item.name}</h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                          
                          {/* Rating & Stock */}
                          <div className="flex items-center gap-4 text-sm mb-3">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              <span className="font-medium">{item.rating}</span>
                              <span className="text-muted-foreground">({item.reviews})</span>
                            </div>
                            {item.inStock < 10 && (
                              <Badge variant="destructive" className="text-xs">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                Only {item.inStock} left
                              </Badge>
                            )}
                          </div>

                          {/* Price */}
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold">₹{item.price}</span>
                            <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                            <Badge variant="secondary" className="text-xs">
                              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                            </Badge>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-4 font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 1)}
                            disabled={item.quantity >= 10}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <Button variant="outline" size="sm" className="gap-2">
                          <Heart className="w-4 h-4" />
                          Save for Later
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Recommended Products */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  Frequently Bought Together
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {recommendedProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow group">
                      <div className="relative aspect-square bg-muted">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                          {product.discount}% OFF
                        </Badge>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h4>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold">₹{product.price}</span>
                            <span className="text-xs text-muted-foreground line-through ml-2">₹{product.originalPrice}</span>
                          </div>
                          <Button size="sm" variant="outline" className="h-8 px-3">
                            <Plus className="w-3 h-3 mr-1" />
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              {/* Trust Badges */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span><strong>100% Authentic</strong> - Certified Products</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <RotateCcw className="w-5 h-5 text-primary flex-shrink-0" />
                    <span><strong>Easy Returns</strong> - 7 Days Return Policy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Truck className="w-5 h-5 text-primary flex-shrink-0" />
                    <span><strong>Fast Delivery</strong> - 2-4 Business Days</span>
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Order Summary</h3>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">You Save</span>
                      <span className="font-medium text-green-600">-₹{savings}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Promo Discount</span>
                        <span className="font-medium text-green-600">-₹{promoDiscount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className={cn("font-medium", shipping === 0 && "text-green-600")}>
                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  {/* Promo Code */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Have a Promo Code?</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                        className="flex-1"
                      />
                      <Button 
                        variant="outline" 
                        onClick={applyPromo}
                        disabled={promoApplied || !promoCode}
                      >
                        {promoApplied ? <CheckCircle2 className="w-4 h-4" /> : "Apply"}
                      </Button>
                    </div>
                    {promoApplied && (
                      <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Promo code applied successfully!
                      </p>
                    )}
                  </div>

                  <Separator />

                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary">₹{total}</span>
                  </div>

                  {/* Checkout Button */}
                  <Button variant="primary" size="lg" className="w-full" asChild>
                    <Link to="/payment">
                      <Lock className="mr-2 w-4 h-4" />
                      Secure Checkout
                    </Link>
                  </Button>

                  {/* Continue Shopping */}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/bracelets">Continue Shopping</Link>
                  </Button>

                  {/* Security Badge */}
                  <div className="pt-4 text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Lock className="w-3 h-3" />
                      <span>Secure SSL Encrypted Payment</span>
                    </div>
                    <div className="flex justify-center gap-3 grayscale opacity-60">
                      <img src="/placeholder.svg" alt="Visa" className="h-6" />
                      <img src="/placeholder.svg" alt="Mastercard" className="h-6" />
                      <img src="/placeholder.svg" alt="UPI" className="h-6" />
                      <img src="/placeholder.svg" alt="Paytm" className="h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Proof */}
              <Alert className="border-primary/20 bg-primary/5">
                <Users className="w-4 h-4 text-primary" />
                <AlertDescription className="text-sm">
                  <strong>2,341 orders</strong> placed in the last 24 hours
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}