import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Bracelets = () => {
  const bracelets = [
    {
      id: 1,
      name: "Amethyst Healing Bracelet",
      price: 1299,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 342,
      type: "Crystal Healing"
    },
    {
      id: 2,
      name: "7 Chakra Crystal Bracelet",
      price: 1499,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 567,
      type: "Chakra Balancing"
    },
    {
      id: 3,
      name: "Black Tourmaline Protection",
      price: 999,
      originalPrice: 1499,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 234,
      type: "Protection"
    },
    {
      id: 4,
      name: "Rose Quartz Love Bracelet",
      price: 1199,
      originalPrice: 1799,
      image: "https://images.unsplash.com/photo-1590927237312-703a0d44df80?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 445,
      type: "Love & Relationships"
    },
    {
      id: 5,
      name: "Tiger Eye Courage Bracelet",
      price: 1099,
      originalPrice: 1699,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 298,
      type: "Confidence"
    },
    {
      id: 6,
      name: "Citrine Abundance Bracelet",
      price: 1399,
      originalPrice: 2099,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 412,
      type: "Prosperity"
    }
  ];

  return (
    <main className="min-h-screen py-8">
      <div className="container max-w-screen-2xl px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Crystal Bracelets
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted Crystal Bracelets for Healing, Protection & Prosperity
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="default">All Bracelets</Button>
          <Button variant="outline">Chakra</Button>
          <Button variant="outline">Protection</Button>
          <Button variant="outline">Love</Button>
          <Button variant="outline">Prosperity</Button>
          <Button variant="outline">Healing</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bracelets.map((bracelet) => (
            <Card key={bracelet.id} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={bracelet.image}
                    alt={bracelet.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary">
                    {Math.round(((bracelet.originalPrice - bracelet.price) / bracelet.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">{bracelet.type}</p>
                  <h3 className="font-semibold text-lg line-clamp-2">{bracelet.name}</h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{bracelet.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({bracelet.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{bracelet.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{bracelet.originalPrice}</span>
                  </div>
                  
                  <Button className="w-full" onClick={() => window.location.href = `/bracelet/${bracelet.id}`}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Bracelets;
