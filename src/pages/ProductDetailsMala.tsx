import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, RefreshCw, Award, Phone, CheckCircle2, Sparkles, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { malaProducts, type MalaProduct } from "@/data/malaProducts";

const ProductDetailsMala = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [viewCount, setViewCount] = useState(0);

  const product = malaProducts.find(p => p.id === Number(id));

  useEffect(() => {
    // Simulate live viewing count
    setViewCount(Math.floor(Math.random() * 50) + 20);
    const interval = setInterval(() => {
      setViewCount(prev => Math.max(15, prev + Math.floor(Math.random() * 3) - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => navigate('/mala')}>Return to Mala Collection</Button>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image, product.image]; // Using same image for demo

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container max-w-screen-2xl px-4 md:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/mala')} className="hover:text-primary">Mala Collection</button>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-2xl px-4 md:px-6 py-8 md:py-12">
        <Button
          variant="ghost"
          onClick={() => navigate('/mala')}
          className="mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Collection
        </Button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border bg-card">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
              {!product.inStock && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <Badge variant="secondary" className="text-lg px-6 py-2">Out of Stock</Badge>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-3">
                <Sparkles className="w-3 h-3 mr-1" />
                {product.type}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
              </div>

              <p className="text-muted-foreground mb-6">{product.description}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                <span className="text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                <Badge variant="secondary" className="text-sm">
                  Save ₹{(product.originalPrice - product.price).toLocaleString()}
                </Badge>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>100% Authentic</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Energized & Blessed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-primary" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RefreshCw className="w-4 h-4 text-primary" />
                  <span>30-Day Returns</span>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1" size="lg" disabled={!product.inStock}>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" disabled={!product.inStock}>
                    Buy Now
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {/* Payment & Shipping Info */}
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-2 flex-1">
                        <Truck className="h-4 w-4 text-green-600" />
                        <span className="font-medium">Free Delivery</span>
                      </div>
                      <span className="text-xs text-muted-foreground">All Orders</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-2 flex-1">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="font-medium">COD Available</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Pay on Delivery</span>
                    </div>
                    <div className="border-t pt-3">
                      <p className="text-xs font-medium mb-2">We Accept:</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="font-medium">💳 Cards</span>
                        <span className="font-medium">📱 UPI</span>
                        <span className="font-medium">🏦 Net Banking</span>
                        <span className="font-medium">💰 COD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Live Viewing */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{viewCount} people are viewing this product right now</span>
              </div>

              {/* Contact */}
              <Card className="mt-6 border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Need help choosing?</p>
                      <p className="text-sm text-muted-foreground">Call our astrology experts</p>
                    </div>
                    <Button variant="outline" className="ml-auto">
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">About This Mala</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This authentic 108 beads prayer mala is perfect for meditation, japa, and spiritual practices. 
                  Each bead has been carefully selected and strung to create a powerful tool for your spiritual journey. 
                  The mala has been energized through traditional Vedic rituals to enhance its spiritual potency.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Spiritual Benefits</h3>
                <div className="space-y-3">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="font-semibold ml-2">Amazing Quality!</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      The mala is beautiful and I can feel its positive energy. Perfect for daily meditation.
                    </p>
                    <span className="text-xs text-muted-foreground">- Priya S. | Verified Purchase</span>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="font-semibold ml-2">Authentic & Powerful</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Received with proper certification. The energization is clearly felt during use.
                    </p>
                    <span className="text-xs text-muted-foreground">- Raj K. | Verified Purchase</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Shipping & Delivery</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-sm text-muted-foreground">On all orders above ₹999</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Secure Packaging</p>
                      <p className="text-sm text-muted-foreground">Carefully packaged with energization certificate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">30-Day Returns</p>
                      <p className="text-sm text-muted-foreground">Easy returns and exchanges</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I use this mala?</AccordionTrigger>
              <AccordionContent>
                Hold the mala in your right hand and use your thumb to move from one bead to the next while reciting your chosen mantra. 
                Start from the bead next to the guru bead (larger bead) and continue until you reach it again, completing 108 repetitions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is this mala energized?</AccordionTrigger>
              <AccordionContent>
                Yes, all our malas are energized through traditional Vedic rituals and mantras by experienced priests. 
                This enhances their spiritual potency and makes them ready for immediate use.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How should I care for my mala?</AccordionTrigger>
              <AccordionContent>
                Keep your mala in a clean, sacred space when not in use. You can cleanse it periodically by placing it under moonlight 
                or using sage smoke. Avoid getting it wet and handle it with clean hands.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can anyone use this mala?</AccordionTrigger>
              <AccordionContent>
                Yes, malas can be used by anyone regardless of religion, age, or background. They are tools for meditation and 
                spiritual practice that work with your intention and dedication.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Why Choose Us */}
        <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose AstroSage Mala?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">100% Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  Sourced from trusted suppliers with certification
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Vedic Energization</h3>
                <p className="text-sm text-muted-foreground">
                  Energized through traditional rituals by expert priests
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Free consultation with our astrology experts
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 md:hidden z-50">
        <div className="flex gap-3">
          <Button className="flex-1" size="lg" disabled={!product.inStock}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          <Button variant="outline" size="lg" disabled={!product.inStock}>
            Buy Now
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsMala;
