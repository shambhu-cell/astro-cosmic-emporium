import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, ArrowLeft, Sparkles, Check, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductDetailsRudraksha = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: id || "1",
    name: "5 Mukhi Rudraksha Mala (108+1 Beads)",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.9,
    reviews: 18760,
    sold: "40,000+",
    inStock: true,
    deliveryDate: "October 18",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    origin: "Nepal - Authentic",
    size: "7-8mm Beads",
    certification: "X-Ray Certified Genuine",
    benefits: [
      { icon: Sparkles, title: "Spiritual Growth", desc: "Deepens meditation & connection to divine" },
      { icon: Shield, title: "Health & Vitality", desc: "Balances blood pressure & reduces stress" },
      { icon: Leaf, title: "Mental Peace", desc: "Calms mind and enhances focus" },
      { icon: Award, title: "Lord Shiva Blessings", desc: "Attracts divine grace and protection" },
    ],
    keyPoints: [
      "100% natural Nepali Rudraksha - X-ray tested",
      "Energized with Shiva mantras by pandits",
      "108+1 beads for complete mala japa",
      "Perfect for daily meditation & worship"
    ],
    faceBenefits: [
      "Represents Lord Kalagni Rudra (Shiva)",
      "Beneficial for Kaal Sarp Dosh remedy",
      "Improves concentration & memory",
      "Removes negative karma & obstacles",
      "Ideal for students & professionals"
    ],
    faqs: [
      {
        q: "How do I wear the Rudraksha mala?",
        a: "Wear it on Monday morning after bathing. First, energize it with 'Om Namah Shivaya' mantra 108 times. Keep it pure and avoid wearing during sleep or impure activities."
      },
      {
        q: "Is this really authentic Nepali Rudraksha?",
        a: "Yes! Each mala comes with X-ray certification proving authenticity. We source directly from Nepal and guarantee 100% genuine rudraksha beads with natural holes."
      },
      {
        q: "Can anyone wear 5 Mukhi Rudraksha?",
        a: "Absolutely! 5 Mukhi is the most universal Rudraksha suitable for everyone - men, women, children. No astrological restrictions. It's blessed by Lord Shiva himself."
      }
    ],
    upsells: [
      { name: "Rudraksha Care Oil", desc: "Natural oil for maintenance", price: 299 },
      { name: "Worship Kit", desc: "Complete puja essentials", price: 699 },
      { name: "Cotton Pouch", desc: "Sacred storage bag", price: 199 },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Trust Bar */}
      <div className="bg-accent text-white py-3 text-center font-medium">
        ✓ 100% Authentic Nepali Rudraksha - X-Ray Certified - 30 Day Return
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl overflow-hidden">
              <Badge className="absolute top-4 left-4 bg-accent text-white z-10">
                🕉️ Bestseller
              </Badge>
              <Badge className="absolute top-4 right-4 bg-green-600 text-white z-10">
                Save {product.discount}%
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
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-medium">X-Ray Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sparkles className="h-5 w-5 text-green-600" />
                <span className="font-medium">Energized</span>
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
              <span className="text-muted-foreground">({product.reviews.toLocaleString()} devotees)</span>
            </div>
            <p className="text-sm text-primary font-semibold">
              🕉️ {product.sold} Malas Blessed - Trusted by Devotees Worldwide
            </p>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.origin} • {product.size}</p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              <Badge className="bg-green-600 text-white px-3 py-1 text-base">₹{(product.originalPrice - product.price).toLocaleString()} Off</Badge>
            </div>

            {/* Key Benefits */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-bold text-lg mb-3">🕉️ Blessed by Lord Shiva</h3>
                {product.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

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

              <Button size="lg" className="w-full text-lg py-6 bg-accent hover:bg-accent/90">
                <ShoppingCart className="mr-2 h-5 w-5" />
                ADD TO CART - ₹{(product.price * quantity).toLocaleString()}
              </Button>

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

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                ✓ In Stock - Order Today, Receive Divine Blessings by {product.deliveryDate}
              </p>
            </div>
          </div>
        </div>

        {/* 5 Mukhi Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">5 Mukhi Rudraksha Benefits</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            The most powerful and universal Rudraksha representing Lord Shiva's five forms
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {product.faceBenefits.map((benefit, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                    {idx + 1}
                  </div>
                  <p className="text-sm">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Spiritual Benefits Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Divine Blessings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {product.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Upsells */}
        <div className="mt-12 border-2 border-dashed border-primary/30 rounded-xl p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-xl font-bold mb-4">Complete Your Sacred Collection</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {product.upsells.map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <Badge className="bg-primary">₹{item.price}</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-2">
                    Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-premium rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose AstroSage Rudraksha?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">X-Ray Certified</h3>
              <p className="text-muted-foreground">Every mala is tested for authenticity</p>
            </div>
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Vedic Energization</h3>
              <p className="text-muted-foreground">Activated with sacred Shiva mantras</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">25M+ Devotees</h3>
              <p className="text-muted-foreground">Trusted since 2001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsRudraksha;