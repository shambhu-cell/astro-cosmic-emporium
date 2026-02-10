import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Check,
  Shield,
  Truck,
  RefreshCw,
  ChevronLeft,
  Package,
  Award,
  Paintbrush,
} from "lucide-react";
import { vastuPaintingProducts } from "@/data/vastuPaintingProducts";
import WhoBuysThis from "@/components/WhoBuysThis";

const ProductDetailsVastuPainting = () => {
  const { id } = useParams();
  const product = vastuPaintingProducts.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/vastu-painting">
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
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/vastu-painting" className="hover:text-primary transition-colors">
              Vastu Painting
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/vastu-painting"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-border hover:border-muted-foreground"
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
            <WhoBuysThis />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3" variant="secondary">
                {product.theme}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-foreground">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <Badge variant="destructive" className="text-sm">
                  {discount}% OFF
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Inclusive of all taxes
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Size</span>
                </div>
                <p className="text-sm text-muted-foreground">{product.size}</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Paintbrush className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Material</span>
                </div>
                <p className="text-sm text-muted-foreground">Canvas & Wood</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground">Quantity:</span>
              <div className="flex items-center gap-3 border border-border rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
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
            <div className="space-y-3 pt-4 border-t border-border">
              {[
                { icon: Shield, text: "100% Authentic Products" },
                { icon: Truck, text: "Free Shipping on Prepaid Orders" },
                { icon: RefreshCw, text: "7 Days Easy Return" },
                { icon: Award, text: "Made in India" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Description & Features
              </TabsTrigger>
              <TabsTrigger
                value="usage"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                How to Use
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="care"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Care Instructions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  About This Painting
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  Vastu Benefits
                </h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="usage" className="mt-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  How to Use This Vastu Painting
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As per recommendations of your Vastu experts or Astrologer, our wall paintings are the right choice for various spaces in your home or office.
                </p>
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  Ideal Placement
                </h4>
                <ul className="space-y-2">
                  {product.usage.map((use, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-6 rounded-lg border border-border bg-card"
                  >
                    <h4 className="font-semibold text-foreground mb-2 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </h4>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="care" className="mt-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Care Instructions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To maintain the beauty and longevity of your Vastu painting, please follow these care instructions:
                </p>
                <ul className="space-y-2">
                  {product.careInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is a Vastu painting and how does it work?
                </AccordionTrigger>
                <AccordionContent>
                  Vastu paintings are specially designed artworks that align with Vastu Shastra principles to enhance positive energy flow in your space. They work through specific colors, images, and symbols that eliminate Vastu Dosh and create harmony by balancing the five elements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Which direction should I hang this painting?
                </AccordionTrigger>
                <AccordionContent>
                  The ideal direction depends on the specific painting and your Vastu needs. We recommend consulting with a Vastu expert for personalized guidance. Generally, Radha Krishna paintings work well in the northeast or east, while sunset paintings are suitable for the west or northwest.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is this painting ready to hang?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all our paintings come ready to hang with a sturdy wooden frame. No additional assembly or framing is required.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do I care for this canvas painting?
                </AccordionTrigger>
                <AccordionContent>
                  Simply wipe with a clean, dry cloth when needed. Avoid direct sunlight exposure for prolonged periods and keep away from moisture. Handle with care to preserve the frame and canvas quality.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can this painting be gifted?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our Vastu paintings make excellent gifts for housewarmings, birthdays, weddings, or any auspicious occasion. They carry positive energy and blessings for the recipient.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsVastuPainting;
