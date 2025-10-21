import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Yantra = () => {
  const yantras = [
    {
      id: 1,
      name: "Shri Yantra",
      price: 599,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1582734289-ea1d4857c8d7?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 287,
      type: "Wealth & Prosperity"
    },
    {
      id: 2,
      name: "Kuber Yantra",
      price: 499,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1609847303250-b98e962e8b82?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 198,
      type: "Financial Growth"
    },
    {
      id: 3,
      name: "Baglamukhi Yantra",
      price: 600,
      originalPrice: 900,
      image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      type: "Protection"
    },
    {
      id: 4,
      name: "Shani Yantra",
      price: 399,
      originalPrice: 600,
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 234,
      type: "Saturn Remedy"
    },
    {
      id: 5,
      name: "Ganesh Yantra",
      price: 549,
      originalPrice: 849,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 312,
      type: "Success & Wisdom"
    },
    {
      id: 6,
      name: "Durga Yantra",
      price: 599,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 189,
      type: "Divine Protection"
    }
  ];

  return (
    <main className="min-h-screen py-8">
      <div className="container max-w-screen-2xl px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Sacred Yantras
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Energized Divine Instruments for Wealth, Protection & Spiritual Growth
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="default">All Yantras</Button>
          <Button variant="outline">Wealth</Button>
          <Button variant="outline">Protection</Button>
          <Button variant="outline">Health</Button>
          <Button variant="outline">Success</Button>
          <Button variant="outline">Spiritual</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {yantras.map((yantra) => (
            <Card key={yantra.id} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={yantra.image}
                    alt={yantra.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary">
                    {Math.round(((yantra.originalPrice - yantra.price) / yantra.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">{yantra.type}</p>
                  <h3 className="font-semibold text-lg line-clamp-2">{yantra.name}</h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{yantra.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({yantra.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{yantra.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{yantra.originalPrice}</span>
                  </div>
                  
                  <Button className="w-full" onClick={() => window.location.href = `/yantra/${yantra.id}`}>
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

export default Yantra;
