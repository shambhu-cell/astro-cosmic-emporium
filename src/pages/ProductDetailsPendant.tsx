import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingCart, 
  Plus, 
  Minus,
  Shield,
  Truck,
  RefreshCw,
  Award
} from "lucide-react";
import { pendantProducts } from "@/data/pendantProducts";

const ProductDetailsPendant = () => {
  const { id } = useParams();
  const product = pendantProducts.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/pendant">
            <Button>Back to Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/pendant" className="hover:text-foreground">Pendants</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border border-border bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{product.type}</Badge>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground">{product.deity}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-4 py-4 border-y border-border">
              <span className="text-4xl font-bold text-foreground">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-xl text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {discount}% OFF
              </Badge>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Metal</p>
                <p className="font-semibold text-foreground">{product.metal}</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Size</p>
                <p className="font-semibold text-foreground">{product.specifications.size}</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">100% Authentic</p>
                  <p className="text-sm text-muted-foreground">
                    Certified metals and gemstones with guarantee
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">
                    On all prepaid orders above ₹499
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Easy Returns</p>
                  <p className="text-sm text-muted-foreground">
                    7-day return policy for your peace of mind
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Energized & Blessed</p>
                  <p className="text-sm text-muted-foreground">
                    Each pendant energized through Vedic rituals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description & Features</TabsTrigger>
              <TabsTrigger value="usage">How to Use</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Product Description
                </h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <h4 className="text-xl font-semibold mb-3 text-foreground">Key Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">Benefits</h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="usage" className="mt-8">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  How to Use Your Sacred Pendant
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      When to Wear
                    </h4>
                    <ul className="space-y-2">
                      {product.usage.map((use, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      Activation & Energizing
                    </h4>
                    <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                      <li>Clean the pendant before first use with pure water</li>
                      <li>Place it in your prayer room overnight</li>
                      <li>Light incense and offer prayers the next morning</li>
                      <li>Chant the relevant deity mantra 108 times</li>
                      <li>Wear it with faith and positive intentions</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      Best Practices
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Wear close to your heart chakra for maximum benefit</li>
                      <li>• Remove before sleeping (unless specifically advised otherwise)</li>
                      <li>• Keep it clean and treat with reverence</li>
                      <li>• Re-energize during auspicious occasions</li>
                      <li>• Combine with meditation and mantra chanting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Product Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center p-4 bg-muted/30 rounded-lg"
                    >
                      <span className="font-medium text-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-8">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Care Instructions
                </h3>
                <p className="text-muted-foreground mb-6">
                  Proper care ensures your sacred pendant maintains its beauty and spiritual
                  effectiveness for years to come.
                </p>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    Daily Care
                  </h4>
                  <ul className="space-y-3">
                    {product.careInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    Important Notes
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Avoid wearing during intense physical activities</li>
                    <li>• Remove before applying lotions or cosmetics</li>
                    <li>• Keep away from other jewelry to prevent scratching</li>
                    <li>• Store in the provided pouch or a soft cloth</li>
                    <li>• Recharge monthly under moonlight for spiritual cleansing</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this pendant energized before shipping?</AccordionTrigger>
              <AccordionContent>
                Yes, all our pendants are energized through proper Vedic rituals by experienced
                priests before shipping. However, we recommend re-energizing it with your personal
                prayers and intentions when you receive it.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I wear this pendant daily?</AccordionTrigger>
              <AccordionContent>
                Absolutely! These pendants are designed for daily wear. In fact, continuous wearing
                enhances their effectiveness as you build a stronger energy connection with the
                pendant over time.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Is the chain included with the pendant?</AccordionTrigger>
              <AccordionContent>
                Yes, each pendant comes with a matching chain as mentioned in the specifications.
                The chain length and material are carefully selected to complement the pendant.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I know if this pendant is right for me?</AccordionTrigger>
              <AccordionContent>
                Each pendant description includes its specific benefits and purposes. You can also
                consult with our astrologers for personalized recommendations based on your birth
                chart and current life situations. Contact us for a free consultation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>What if the pendant tarnishes or loses shine?</AccordionTrigger>
              <AccordionContent>
                Natural tarnishing is normal for silver and copper items. Follow the care
                instructions provided to maintain shine. We also offer polishing and restoration
                services. Contact our customer support for assistance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPendant;
