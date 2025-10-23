import { useState } from "react";
import { Star, Filter, ArrowUpDown, ShoppingCart, Shield, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { malaProducts } from "@/data/malaProducts";

const Mala = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");

  const categories = [
    { id: "all", label: "All Malas" },
    { id: "rudraksha", label: "Rudraksha" },
    { id: "crystal", label: "Crystal" },
    { id: "sandalwood", label: "Sandalwood" },
    { id: "tulsi", label: "Tulsi" },
    { id: "gemstone", label: "Gemstone" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? malaProducts 
    : malaProducts.filter(p => p.type.toLowerCase().includes(selectedCategory));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-purple-500/5 py-12 md:py-16 lg:py-24">
        <div className="container max-w-screen-2xl px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-3 md:mb-4 text-xs" variant="outline">
              <Sparkles className="w-3 h-3 mr-1" />
              Authentic 108 Beads Prayer Malas
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent leading-tight">
              Sacred Mala Collection
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 px-4">
              Premium 108 beads prayer malas for meditation, japa, and spiritual awakening. Handcrafted with authentic materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="whitespace-nowrap">100% Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="whitespace-nowrap">Energized & Blessed</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary" />
                <span className="whitespace-nowrap">4.8+ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-screen-2xl px-4 md:px-6 py-8 md:py-12">
        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6 md:mb-8">
          <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                size="sm"
                className="whitespace-nowrap shrink-0 min-h-[36px] md:min-h-0"
              >
                {cat.label}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="flex-1 md:flex-none min-h-[36px] md:min-h-0">
              <Filter className="w-4 h-4 md:mr-2" />
              <span className="md:inline">Filter</span>
            </Button>
            <Button variant="outline" size="sm" className="flex-1 md:flex-none min-h-[36px] md:min-h-0">
              <ArrowUpDown className="w-4 h-4 md:mr-2" />
              <span className="md:inline">Sort</span>
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {filteredProducts.map((mala) => (
            <Card 
              key={mala.id} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={mala.image}
                    alt={mala.name}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <Badge className="absolute top-2 right-2 md:top-3 md:right-3 bg-primary/90 backdrop-blur-sm text-xs">
                    {Math.round(((mala.originalPrice - mala.price) / mala.originalPrice) * 100)}% OFF
                  </Badge>
                  {!mala.inStock && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                      <Badge variant="secondary">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                
                <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                  <Badge variant="outline" className="text-xs">
                    {mala.type}
                  </Badge>
                  <h3 className="font-semibold text-sm md:text-base line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
                    {mala.name}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-xs md:text-sm font-medium">{mala.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({mala.reviews.toLocaleString()})
                    </span>
                  </div>
                  
                  <div className="flex items-baseline gap-2 pt-1 md:pt-2">
                    <span className="text-xl md:text-2xl font-bold text-primary">
                      ₹{mala.price.toLocaleString()}
                    </span>
                    <span className="text-xs md:text-sm text-muted-foreground line-through">
                      ₹{mala.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex gap-2 pt-1 md:pt-2">
                    <Button 
                      className="flex-1 text-xs md:text-sm h-9 md:h-10" 
                      onClick={() => window.location.href = `/mala/${mala.id}`}
                      disabled={!mala.inStock}
                    >
                      View Details
                    </Button>
                    <Button 
                      size="icon" 
                      variant="outline"
                      disabled={!mala.inStock}
                      className="h-9 w-9 md:h-10 md:w-10"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabbed Content Section */}
        <Tabs defaultValue="about" className="w-full">
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <TabsList className="inline-flex w-auto min-w-full md:min-w-0 mb-2">
              <TabsTrigger value="about" className="flex-1 md:flex-none whitespace-nowrap text-xs md:text-sm">
                About
              </TabsTrigger>
              <TabsTrigger value="benefits" className="flex-1 md:flex-none whitespace-nowrap text-xs md:text-sm">
                Benefits
              </TabsTrigger>
              <TabsTrigger value="types" className="flex-1 md:flex-none whitespace-nowrap text-xs md:text-sm">
                Types
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1 md:flex-none whitespace-nowrap text-xs md:text-sm">
                Reviews
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="mt-6 md:mt-8 space-y-4 md:space-y-6">
            <div className="prose prose-sm md:prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">About Sacred Mala Beads</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A mala is a string of 108 beads used in Hindu and Buddhist traditions for meditation, 
                prayer, and japa (mantra repetition). Each bead represents one repetition of a mantra, 
                helping practitioners maintain count and focus during spiritual practice.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">Why 108 Beads?</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      The number 108 is considered sacred in many Eastern traditions. It represents 
                      spiritual completion and is believed to align with cosmic rhythms. The number 
                      appears throughout nature, astronomy, and sacred texts.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">Energization Process</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      All our malas are energized through traditional Vedic rituals and mantras before 
                      shipping. This process enhances their spiritual potency and prepares them for 
                      your personal practice.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6 md:mt-8 space-y-4 md:space-y-6">
            <div className="prose prose-sm md:prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Benefits & How to Use</h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <Card className="border-primary/20">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <span className="text-xl md:text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">Cleanse Your Mala</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Before first use, cleanse your mala with sage smoke or place it under moonlight 
                      overnight to remove any residual energies.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <span className="text-xl md:text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">Set Your Intention</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Hold your mala and set a clear intention or choose a mantra that resonates 
                      with your spiritual goals.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <span className="text-xl md:text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">Practice Daily</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Use your mala daily for meditation or japa. Move through each bead with your 
                      thumb while reciting your chosen mantra.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">Key Benefits of Using a Mala</h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Maintains focus and concentration during meditation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Helps track mantra repetitions without mental counting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Creates a physical anchor for spiritual practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Absorbs and amplifies spiritual energy over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Reduces stress and promotes inner peace</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="types" className="mt-6 md:mt-8 space-y-4 md:space-y-6">
            <div className="prose prose-sm md:prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Different Types of Malas</h2>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-2">
                      <span className="text-xl md:text-2xl">🔮</span>
                      Crystal Malas
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3">
                      Made from natural crystals like Clear Quartz, Amethyst, or Rose Quartz. 
                      Each crystal carries unique energetic properties.
                    </p>
                    <p className="text-xs md:text-sm font-medium">Best for: Energy work, healing, clarity</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-2">
                      <span className="text-xl md:text-2xl">🌰</span>
                      Rudraksha Malas
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3">
                      Sacred beads from the Rudraksha tree, highly revered in Hindu tradition. 
                      Different mukhi (faces) offer different benefits.
                    </p>
                    <p className="text-xs md:text-sm font-medium">Best for: Spiritual power, health, protection</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-2">
                      <span className="text-xl md:text-2xl">🌿</span>
                      Tulsi Malas
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3">
                      Made from sacred Tulsi (Holy Basil) wood, especially dear to Lord Krishna 
                      devotees. Carries divine blessings.
                    </p>
                    <p className="text-xs md:text-sm font-medium">Best for: Devotion, purification, Krishna bhakti</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-2">
                      <span className="text-xl md:text-2xl">🪵</span>
                      Sandalwood Malas
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3">
                      Fragrant sandalwood beads that naturally calm the mind. The aroma 
                      enhances meditation experience.
                    </p>
                    <p className="text-xs md:text-sm font-medium">Best for: Meditation, stress relief, focus</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6 md:mt-8 space-y-4 md:space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Customer Reviews</h2>
              
              <div className="grid gap-4 md:gap-6">
                {[
                  {
                    name: "Priya Sharma",
                    rating: 5,
                    date: "2 weeks ago",
                    product: "Sphatik Crystal Mala",
                    review: "Absolutely beautiful! The crystal clarity is stunning and I can feel the positive energy. Use it daily for meditation and it has become an essential part of my spiritual practice."
                  },
                  {
                    name: "Rajesh Kumar",
                    rating: 5,
                    date: "1 month ago",
                    product: "5 Mukhi Rudraksha Mala",
                    review: "Genuine rudraksha beads with proper certification. The quality is excellent and I've noticed significant improvement in my meditation depth. Highly recommended for serious practitioners."
                  },
                  {
                    name: "Anjali Patel",
                    rating: 4,
                    date: "3 weeks ago",
                    product: "Tulsi Mala",
                    review: "Very authentic tulsi mala. The fragrance is divine and handling it during japa brings peace to my mind. Great for Krishna mantras. Would love if it came with care instructions."
                  },
                  {
                    name: "Vikram Singh",
                    rating: 5,
                    date: "1 week ago",
                    product: "Sandalwood Mala",
                    review: "The aroma is incredible! Even after weeks of use, the sandalwood scent remains. Perfect size beads and the string quality is top-notch. Worth every rupee."
                  }
                ].map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <Badge variant="outline" className="mb-3">{review.product}</Badge>
                      <p className="text-muted-foreground leading-relaxed">{review.review}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Mala;
