import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Mala = () => {
  const malas = [
    {
      id: 1,
      name: "Sphatik Crystal Mala",
      price: 2999,
      originalPrice: 4499,
      image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 287,
      type: "Crystal Mala"
    },
    {
      id: 2,
      name: "Tulsi Mala - Holy Basil",
      price: 1499,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1590927237312-703a0d44df80?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 534,
      type: "Sacred Mala"
    },
    {
      id: 3,
      name: "Sandalwood Mala",
      price: 1999,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 412,
      type: "Meditation"
    },
    {
      id: 4,
      name: "5 Mukhi Rudraksha Mala",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 698,
      type: "Rudraksha Mala"
    },
    {
      id: 5,
      name: "Rose Quartz Mala",
      price: 2799,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 345,
      type: "Love & Peace"
    },
    {
      id: 6,
      name: "Black Tourmaline Mala",
      price: 3499,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 267,
      type: "Protection"
    }
  ];

  return (
    <main className="min-h-screen py-8">
      <div className="container max-w-screen-2xl px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Sacred Mala Beads
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            108 Beads Prayer Mala for Meditation, Japa & Spiritual Practice
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="default">All Malas</Button>
          <Button variant="outline">Rudraksha</Button>
          <Button variant="outline">Crystal</Button>
          <Button variant="outline">Sandalwood</Button>
          <Button variant="outline">Tulsi</Button>
          <Button variant="outline">Gemstone</Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {malas.map((mala) => (
            <Card key={mala.id} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={mala.image}
                    alt={mala.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary">
                    {Math.round(((mala.originalPrice - mala.price) / mala.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">{mala.type}</p>
                  <h3 className="font-semibold text-lg line-clamp-2">{mala.name}</h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{mala.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({mala.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{mala.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{mala.originalPrice}</span>
                  </div>
                  
                  <Button className="w-full" onClick={() => window.location.href = `/rudraksha/${mala.id}`}>
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

export default Mala;
