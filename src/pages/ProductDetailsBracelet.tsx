import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, ArrowLeft, Sparkles, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetailsBracelet = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const product = {
    id: id || "1",
    name: "Natural Amethyst Crystal Bracelet",
    price: 1499,
    originalPrice: 3499,
    discount: 57,
    rating: 4.9,
    reviews: 18452,
    sold: "32,000+",
    inStock: true,
    deliveryDate: "October 18",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    material: "AAA Grade Natural Amethyst",
    beadSize: "8mm Round Beads",
    benefits: [
      { icon: Sparkles, title: "Spiritual Growth", desc: "Enhances intuition & third eye" },
      { icon: Zap, title: "Stress Relief", desc: "Calms mind and promotes peace" },
      { icon: Shield, title: "Protection", desc: "Shields from negative energy" },
      { icon: Star, title: "Better Sleep", desc: "Reduces insomnia & nightmares" },
    ],
    keyPoints: [
      "AAA Grade natural amethyst crystals",
      "Activates Crown & Third Eye Chakras",
      "Powerful for meditation & spiritual work",
      "Reduces stress, anxiety & promotes clarity"
    ],
    properties: [
      { name: "Chakra", value: "Crown & Third Eye", color: "Purple" },
      { name: "Element", value: "Air & Water", color: "Blue" },
      { name: "Planet", value: "Jupiter & Neptune", color: "Indigo" },
      { name: "Zodiac", value: "Pisces, Aquarius", color: "Purple" },
    ],
    healingProperties: [
      "Calms the mind and reduces stress",
      "Enhances spiritual awareness & intuition",
      "Promotes restful sleep & vivid dreams",
      "Protects against psychic attacks",
      "Aids in overcoming addictions",
      "Balances emotional highs and lows"
    ],
    upsells: [
      { name: "Amethyst Geode", desc: "Natural crystal cluster", price: 2499 },
      { name: "Crystal Cleansing Kit", desc: "Sage & selenite plate", price: 599 },
      { name: "Meditation Guide", desc: "Amethyst activation ebook", price: 299 },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Free Shipping Bar */}
      <div className="bg-accent text-white py-3 text-center font-medium">
        🚚 Free Shipping on Orders Over ₹999 - Order Now!
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
                <h3 className="font-bold text-lg mb-3">The Power of Amethyst at Your Wrist</h3>
                {product.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Size Selection */}
            <div className="space-y-3">
              <label className="font-semibold text-lg">Select Size:</label>
              <div className="grid grid-cols-2 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size.split(" ")[0])}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                      selectedSize === size.split(" ")[0]
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
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
                ✓ In Stock - Order Today, Delivered by {product.deliveryDate}
              </p>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">Crystal Properties</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Amethyst's powerful metaphysical attributes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.properties.map((prop, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full" style={{ backgroundColor: prop.color.toLowerCase() }}></div>
                  <h3 className="font-bold text-sm mb-1">{prop.name}</h3>
                  <p className="text-xs text-muted-foreground">{prop.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Healing Properties */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-4">Healing Properties</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience the transformative power of natural amethyst
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {product.healingProperties.map((property, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
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
          <h3 className="text-xl font-bold mb-4">Complete Your Healing Journey</h3>
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
      </div>
    </div>
  );
};

export default ProductDetailsBracelet;