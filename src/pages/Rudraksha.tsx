import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Rudraksha = () => {
  const rudrakshas = [
    {
      id: 1,
      name: "5 Mukhi Rudraksha Mala",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 456,
      mukhi: "5 Mukhi"
    },
    {
      id: 2,
      name: "1 Mukhi Rudraksha",
      price: 15999,
      originalPrice: 21999,
      image: "https://images.unsplash.com/photo-1590927237312-703a0d44df80?w=400&h=400&fit=crop",
      rating: 5.0,
      reviews: 89,
      mukhi: "1 Mukhi"
    },
    {
      id: 3,
      name: "7 Mukhi Rudraksha",
      price: 4999,
      originalPrice: 6999,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 234,
      mukhi: "7 Mukhi"
    },
    {
      id: 4,
      name: "Gauri Shankar Rudraksha",
      price: 8999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 167,
      mukhi: "Special"
    },
    {
      id: 5,
      name: "6 Mukhi Rudraksha",
      price: 3499,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 312,
      mukhi: "6 Mukhi"
    },
    {
      id: 6,
      name: "Panchmukhi Rudraksha Mala",
      price: 1999,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 523,
      mukhi: "5 Mukhi Mala"
    }
  ];

  return (
    <main className="min-h-screen py-8">
      <div className="container max-w-screen-2xl px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Original Rudraksha
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lab Certified Rudraksha Beads - Energized by Vedic Priests for Divine Blessings
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="default">All Rudraksha</Button>
          <Button variant="outline">1 Mukhi</Button>
          <Button variant="outline">5 Mukhi</Button>
          <Button variant="outline">6 Mukhi</Button>
          <Button variant="outline">7 Mukhi</Button>
          <Button variant="outline">Mala</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rudrakshas.map((rudraksha) => (
            <Card key={rudraksha.id} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={rudraksha.image}
                    alt={rudraksha.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary">
                    {Math.round(((rudraksha.originalPrice - rudraksha.price) / rudraksha.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">{rudraksha.mukhi}</p>
                  <h3 className="font-semibold text-lg line-clamp-2">{rudraksha.name}</h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{rudraksha.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({rudraksha.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{rudraksha.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{rudraksha.originalPrice}</span>
                  </div>
                  
                  <Button className="w-full" onClick={() => window.location.href = `/rudraksha/${rudraksha.id}`}>
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

export default Rudraksha;
