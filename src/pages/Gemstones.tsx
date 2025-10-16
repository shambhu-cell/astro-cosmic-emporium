import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gemstones = () => {
  const gemstones = [
    {
      id: 1,
      name: "Blue Sapphire (Neelam)",
      price: 5999,
      originalPrice: 8999,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 234,
      category: "Precious Stone"
    },
    {
      id: 2,
      name: "Yellow Sapphire (Pukhraj)",
      price: 4999,
      originalPrice: 7499,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 189,
      category: "Precious Stone"
    },
    {
      id: 3,
      name: "Ruby (Manik)",
      price: 7999,
      originalPrice: 11999,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Precious Stone"
    },
    {
      id: 4,
      name: "Emerald (Panna)",
      price: 6999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1590927237312-703a0d44df80?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 201,
      category: "Precious Stone"
    },
    {
      id: 5,
      name: "Red Coral (Moonga)",
      price: 3999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 143,
      category: "Semi-Precious Stone"
    },
    {
      id: 6,
      name: "Pearl (Moti)",
      price: 4499,
      originalPrice: 6499,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 178,
      category: "Precious Stone"
    }
  ];

  return (
    <main className="min-h-screen py-8">
      <div className="container max-w-screen-2xl px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Pure Gemstones
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover Nature's Finest Treasures - Certified Authentic Gemstones for Astrological Benefits
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="default">All Gemstones</Button>
          <Button variant="outline">Precious Stones</Button>
          <Button variant="outline">Semi-Precious</Button>
          <Button variant="outline">For Jupiter</Button>
          <Button variant="outline">For Saturn</Button>
          <Button variant="outline">For Mars</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gemstones.map((gemstone) => (
            <Card key={gemstone.id} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={gemstone.image}
                    alt={gemstone.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary">
                    {Math.round(((gemstone.originalPrice - gemstone.price) / gemstone.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">{gemstone.category}</p>
                  <h3 className="font-semibold text-lg line-clamp-2">{gemstone.name}</h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{gemstone.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({gemstone.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{gemstone.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{gemstone.originalPrice}</span>
                  </div>
                  
                  <Button className="w-full" onClick={() => window.location.href = `/gemstone/${gemstone.id}`}>
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

export default Gemstones;
