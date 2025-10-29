import { useState, useEffect } from "react";
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
import chakraBracelet from "@/assets/bracelets/7-chakra.jpg";
import tigerEyeBracelet from "@/assets/bracelets/tiger-eye.jpg";
import aventurineBracelet from "@/assets/bracelets/aventurine.jpg";
import rudrakshaMala from "@/assets/mala/rudraksha-mala.jpg";
import crystalMala from "@/assets/mala/crystal-mala.jpg";

// Mock cart items with real images
const initialCartItems = [
  {
    id: 1,
    name: "7 Chakra Healing Bracelet",
    category: "Crystal Bracelet",
    description: "Balance your energy centers",
    price: 1299,
    originalPrice: 1999,
    quantity: 1,
    image: chakraBracelet,
    rating: 4.8,
    reviews: 342,
    inStock: 8,
    energized: true,
    benefits: ["Chakra Balancing", "Energy Healing", "Spiritual Growth"]
  },
  {
    id: 2,
    name: "Natural Rudraksha Mala (108 Beads)",
    category: "Spiritual Mala",
    description: "Authentic Nepali Rudraksha",
    price: 2499,
    originalPrice: 3499,
    quantity: 2,
    image: rudrakshaMala,
    rating: 4.9,
    reviews: 521,
    inStock: 12,
    energized: true,
    benefits: ["Peace of Mind", "Meditation Support", "Divine Blessings"]
  }
];

const recommendedProducts = [
  {
    id: 101,
    name: "Tiger Eye Protection Bracelet",
    price: 899,
    originalPrice: 1499,
    image: tigerEyeBracelet,
    discount: 40,
    benefit: "Protection & Courage"
  },
  {
    id: 102,
    name: "Green Aventurine Prosperity",
    price: 1099,
    originalPrice: 1699,
    image: aventurineBracelet,
    discount: 35,
    benefit: "Wealth & Luck"
  },
  {
    id: 103,
    name: "Crystal Quartz Healing Mala",
    price: 1199,
    originalPrice: 1899,
    image: crystalMala,
    discount: 37,
    benefit: "Clarity & Healing"
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [viewingCount] = useState(Math.floor(Math.random() * 15) + 8);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 34, seconds: 28 });
  
  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      {/* Urgency Bar with Live Timer */}
      <div className="bg-gradient-primary text-primary-foreground py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-sm font-medium flex-wrap">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="text-base">⚡ Flash Sale Ending Soon:</span>
            <div className="flex items-center gap-2 bg-background/20 px-3 py-1 rounded-lg backdrop-blur-sm">
              <span className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span>:</span>
              <span className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span>:</span>
              <span className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
            <span className="text-xs opacity-90">Don't miss out on massive savings!</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header with Enhanced Savings Display */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold flex items-center gap-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                <ShoppingBag className="w-10 h-10 text-primary" />
                Your Cart
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} ready for checkout
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
              <Users className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-muted-foreground">
                <strong className="text-primary">{viewingCount} shoppers</strong> active now
              </span>
            </div>
          </div>
          
          {/* Savings Highlight Banner */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-green-900 dark:text-green-100 text-lg">
                  🎉 You're Saving ₹{savings} Today!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  That's {Math.round((savings / (subtotal + savings)) * 100)}% off your purchase
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-2xl font-bold text-green-600 dark:text-green-400">
              <Tag className="w-6 h-6" />
              ₹{savings}
            </div>
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
                    <div className="relative w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden bg-muted group">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.energized && (
                        <Badge className="absolute top-1 left-1 text-xs shadow-lg animate-pulse">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Energized
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <Link to={`/bracelet/${item.id}`} className="hover:text-primary transition-colors group">
                            <h3 className="font-bold text-lg leading-tight mb-1 group-hover:underline">{item.name}</h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mb-1">{item.category}</p>
                          <p className="text-xs text-muted-foreground italic mb-2">{item.description}</p>
                          
                          {/* Benefits Pills */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {item.benefits.map((benefit, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                          
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

                          {/* Enhanced Price Display */}
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                              <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs px-2">
                                SAVE {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                              </Badge>
                            </div>
                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                              You save ₹{(item.originalPrice - item.price) * item.quantity}
                            </span>
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

            {/* Enhanced Recommended Products */}
            <Card className="mt-8 border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                      Complete Your Spiritual Journey
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">Customers who bought these also loved...</p>
                  </div>
                  <Badge className="bg-gradient-primary text-primary-foreground">Hot Deals</Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {recommendedProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 group">
                      <div className="relative aspect-square bg-muted overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <Badge className="absolute top-3 right-3 bg-red-500 text-white shadow-lg text-sm px-3 py-1 animate-pulse">
                          -{product.discount}%
                        </Badge>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                          <p className="text-white text-xs font-medium flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {product.benefit}
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h4>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex flex-col">
                            <span className="text-xl font-bold text-primary">₹{product.price}</span>
                            <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-green-600 dark:text-green-400 font-semibold">
                              Save ₹{product.originalPrice - product.price}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="primary" className="w-full">
                          <Plus className="w-4 h-4 mr-1" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Order Summary - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              {/* Premium Trust Badges */}
              <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 border-2 border-primary/30 shadow-lg">
                <CardContent className="p-5 space-y-4">
                  <h4 className="font-bold text-center mb-3 flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Your Protection Guaranteed
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">100% Authentic</p>
                        <p className="text-xs text-muted-foreground">Lab-certified genuine products</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <RotateCcw className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Hassle-Free Returns</p>
                        <p className="text-xs text-muted-foreground">7-day money-back guarantee</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Truck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Express Shipping</p>
                        <p className="text-xs text-muted-foreground">Delivered in 2-4 business days</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Order Summary */}
              <Card className="border-2 shadow-xl">
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Order Summary</h3>
                    <Badge variant="secondary" className="text-xs">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
                    </Badge>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3 bg-muted/30 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold text-lg">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-950/30 rounded-md border border-green-200 dark:border-green-800">
                      <span className="text-green-700 dark:text-green-300 font-medium flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        Your Savings
                      </span>
                      <span className="font-bold text-lg text-green-600 dark:text-green-400">-₹{savings}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-950/30 rounded-md border border-green-200 dark:border-green-800">
                        <span className="text-green-700 dark:text-green-300 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          Promo Applied
                        </span>
                        <span className="font-bold text-green-600 dark:text-green-400">-₹{promoDiscount}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className={cn("font-semibold", shipping === 0 && "text-green-600 dark:text-green-400")}>
                        {shipping === 0 ? (
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            FREE
                          </span>
                        ) : (
                          `₹${shipping}`
                        )}
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

                  <Separator className="my-4" />

                  {/* Enhanced Total */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-lg font-semibold text-muted-foreground">Total Amount</span>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">₹{total}</div>
                        <div className="text-xs text-muted-foreground line-through">₹{subtotal + savings + shipping}</div>
                      </div>
                    </div>
                    {savings > 0 && (
                      <p className="text-center text-sm text-green-600 dark:text-green-400 font-medium">
                        🎉 You're saving ₹{savings + promoDiscount} on this order!
                      </p>
                    )}
                  </div>

                  {/* Enhanced Checkout Button */}
                  <Button variant="primary" size="xl" className="w-full text-lg shadow-xl hover:shadow-2xl" asChild>
                    <Link to="/payment">
                      <Lock className="mr-2 w-5 h-5" />
                      Proceed to Secure Checkout
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>

                  {/* Limited Time Offer Banner */}
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-3 text-center">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300 flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 animate-pulse" />
                      Complete checkout in {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')} to lock in these prices!
                    </p>
                  </div>

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

              {/* Enhanced Social Proof */}
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-4 space-y-3">
                  <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                    <Users className="w-4 h-4 text-green-600" />
                    <AlertDescription className="text-sm text-green-900 dark:text-green-100">
                      <strong>2,341 happy customers</strong> ordered in the last 24 hours
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <AlertDescription className="text-sm text-blue-900 dark:text-blue-100">
                      <strong>98.7% customers</strong> recommend us
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}