import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, ArrowLeft, Sparkles, Check, Zap, Award, Users, CheckCircle2, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { braceletProductsData } from "@/data/braceletProducts";

const ProductDetailsBracelet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [viewingUsers, setViewingUsers] = useState(45);

  const product = braceletProductsData[id || "amethyst"];

  // Simulate live viewing count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingUsers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(35, Math.min(65, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!product) {
      navigate("/bracelet/amethyst");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  // Generate dynamic FAQs
  const faqs = [
    {
      question: `What are the benefits of ${product.crystal}?`,
      answer: `${product.crystal} ${product.healingProperties[0].toLowerCase()} and ${product.healingProperties[1].toLowerCase()}. It's particularly powerful for ${product.benefits[0]?.desc.toLowerCase()}.`
    },
    {
      question: "Is this bracelet made from natural crystals?",
      answer: "Yes! All our bracelets are made from 100% natural, lab-certified crystals. Each piece is hand-selected for quality and authenticity. We provide certification upon request."
    },
    {
      question: "How do I choose the right size?",
      answer: "Measure your wrist and add 0.5 inches for a comfortable fit. Our sizes are: S (6.5in), M (7in), L (7.5in), XL (8in). Most people prefer M or L size. Contact us if you need help!"
    },
    {
      question: "How should I care for my crystal bracelet?",
      answer: `${product.wearingInstructions[0]} ${product.wearingInstructions[1]} Avoid exposure to harsh chemicals, perfumes, or extreme temperatures. Handle with care as natural crystals can be delicate.`
    },
    {
      question: "Do you offer returns?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, return it within 30 days for a full refund, no questions asked."
    }
  ];

  // Dynamic testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: `The ${product.crystal} bracelet exceeded my expectations! I've been wearing it for 2 weeks and can already feel the positive energy. Highly recommend!`,
      verified: true
    },
    {
      name: "Rahul Verma",
      rating: 5,
      text: "Excellent quality crystals. Beautifully crafted and came with proper certification. Customer service was also very helpful.",
      verified: true
    },
    {
      name: "Anjali Patel",
      rating: 5,
      text: `I bought this for ${product.benefits[0]?.desc.toLowerCase()} and it's been amazing. The energy is very strong and positive. Worth every rupee!`,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Free Shipping Bar */}
      <div className="bg-accent text-white py-3 text-center font-medium">
        🚚 Free Shipping on Orders Over ₹999 - Order Now!
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/bracelets" className="hover:text-primary">Bracelets</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden">
              <Badge className="absolute top-4 left-4 bg-primary/90 text-white z-10 backdrop-blur">
                <Sparkles className="h-3 w-3 mr-1" />
                {product.crystal} Blessing
              </Badge>
              <Badge className="absolute top-4 right-4 bg-green-600 text-white z-10">
                {product.discount}% OFF
              </Badge>
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary shadow-md scale-105' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-green-600" />
                <span className="font-medium">Natural Crystals</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-medium">30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Rating & Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-bold text-lg">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews.toLocaleString()} Happy Customers)</span>
            </div>

            {/* Live Activity Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="default" className="bg-green-50 text-green-700 border-green-200 px-4 py-2">
                <Eye className="w-4 h-4 mr-2" />
                {viewingUsers} people viewing now
              </Badge>
              <Badge variant="default" className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Sale ends in 12:45:32
              </Badge>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.material} • {product.beadSize}</p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              <Badge className="bg-green-600 text-white px-3 py-1 text-base">Save {product.discount}%</Badge>
            </div>

            {/* Key Benefits Card */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  The Power of {product.crystal}
                </h3>
                {product.keyHighlights?.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="flex items-center gap-6 text-sm pt-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span><span className="font-bold text-foreground">{product.sold}</span> sold</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-green-600 font-medium">In Stock</span>
              </div>
            </div>


            {/* Quantity & CTA */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold">Quantity:</label>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" className="text-base md:text-lg py-6 md:py-7 bg-accent hover:bg-accent/90 font-bold shadow-lg">
                  <ShoppingCart className="mr-1 md:mr-2 h-5 w-5 md:h-6 md:w-6" />
                  <span className="whitespace-nowrap">ADD TO CART</span>
                </Button>
                <Button size="lg" className="text-base md:text-lg py-6 md:py-7 bg-primary hover:bg-primary/90 font-bold shadow-lg">
                  <span className="whitespace-nowrap">BUY NOW</span>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-green-800 dark:text-green-200 font-medium">
                ✓ In Stock - Ships within 24 hours • Free Delivery Pan India
              </p>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">Crystal Properties</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            {product.crystal}'s powerful metaphysical attributes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full" style={{ backgroundColor: product.chakra.color.toLowerCase() }}></div>
                <h3 className="font-bold text-sm mb-1">Chakra</h3>
                <p className="text-xs text-muted-foreground">{product.chakra.name}</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full" style={{ backgroundColor: product.element.color.toLowerCase() }}></div>
                <h3 className="font-bold text-sm mb-1">Element</h3>
                <p className="text-xs text-muted-foreground">{product.element.name}</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full" style={{ backgroundColor: product.planet.color.toLowerCase() }}></div>
                <h3 className="font-bold text-sm mb-1">Planet</h3>
                <p className="text-xs text-muted-foreground">{product.planet.name}</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full" style={{ backgroundColor: product.zodiac.color.toLowerCase() }}></div>
                <h3 className="font-bold text-sm mb-1">Zodiac</h3>
                <p className="text-xs text-muted-foreground">{product.zodiac.name}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Healing Properties */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">Healing Properties</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience the transformative power of natural {product.crystal.toLowerCase()}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {product.healingProperties?.map((property, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm">{property}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Healing Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits?.map((benefit, idx) => {
              const icons = [Sparkles, Zap, Shield, Star];
              const Icon = icons[idx % icons.length];
              return (
                <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Ideal For Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">Perfect For</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Who can benefit most from this crystal bracelet
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {product.idealFor?.map((person, idx) => (
              <Badge key={idx} variant="outline" className="px-4 py-2 text-sm">
                <Users className="h-4 w-4 mr-2" />
                {person}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">Customer Reviews</h2>
          <p className="text-center text-muted-foreground mb-10">
            See what our customers are saying about {product.crystal}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <Badge variant="outline" className="text-xs">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm mb-3">{testimonial.text}</p>
                  <p className="text-sm font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-10">
            Everything you need to know about {product.crystal} bracelets
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsBracelet;