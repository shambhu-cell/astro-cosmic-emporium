import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, ArrowLeft, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

const ProductDetailsGemstone = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: id || "1",
    name: "Certified Blue Sapphire (Neelam) Ring",
    price: 14999,
    originalPrice: 24999,
    discount: 40,
    rating: 4.9,
    reviews: 8420,
    sold: "15,000+",
    inStock: true,
    deliveryDate: "October 18",
    images: [blueSapphireImage, blueSapphireImage, blueSapphireImage, blueSapphireImage],
    weight: "5.25 Ratti (4.75 Carat)",
    certification: "Government Lab Certified",
    benefits: [
      { icon: Sparkles, title: "Career Success", desc: "Attracts promotions & professional growth" },
      { icon: Shield, title: "Mental Clarity", desc: "Enhances focus and decision-making" },
      { icon: Star, title: "Wealth Magnet", desc: "Opens doors to financial opportunities" },
      { icon: Award, title: "Protection", desc: "Guards against negative energies" },
    ],
    keyPoints: [
      "Natural, unheated Blue Sapphire",
      "Energized by expert astrologers",
      "100% genuine with certificate",
      "Perfect for Saturn (Shani) remedies"
    ],
    upsells: [
      { name: "Gemstone Energization Kit", desc: "Activation mantras & guide", price: 499 },
      { name: "Silver Chain", desc: "Premium 92.5 silver chain", price: 1299 },
      { name: "Gemstone Care Kit", desc: "Cleaning & storage solution", price: 799 },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Money Back Guarantee Bar */}
      <div className="bg-accent text-white py-3 text-center font-medium">
        ✓ 30 Day Money Back Guarantee - 100% Authentic Gemstones
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
                Bestseller ⭐
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

            {/* Trust Badges */}
            <div className="flex gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-medium">Lab Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-5 w-5 text-green-600" />
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
              <span className="text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
            </div>
            <p className="text-sm text-primary font-semibold">
              ⭐ {product.sold} Gemstones Sold - Trusted Worldwide
            </p>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.weight}</p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              <Badge className="bg-green-600 text-white px-3 py-1 text-base">Save ₹{(product.originalPrice - product.price).toLocaleString()}</Badge>
            </div>

            {/* Key Benefits */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-bold text-lg mb-3">Transform Your Life with Blue Sapphire</h3>
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
                <Button variant="outline" size="lg" className="w-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>

            {/* Stock & Delivery */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                ✓ In Stock, Order Today To Receive It By {product.deliveryDate}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Astrological Benefits</h2>
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

        {/* Upsells */}
        <div className="mt-12 border-2 border-dashed border-primary/30 rounded-xl p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-xl font-bold mb-4">89% of customers also add...</h3>
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

        {/* Why Choose Section */}
        <div className="mt-16 bg-gradient-premium rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose AstroSage?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">23+ Years Trusted</h3>
              <p className="text-muted-foreground">India's #1 astrology platform since 2001</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">100% Authentic</h3>
              <p className="text-muted-foreground">Government lab certified gemstones</p>
            </div>
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Expert Energized</h3>
              <p className="text-muted-foreground">Activated by experienced astrologers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsGemstone;