import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Gem, Target, Sparkles, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GemstoneFinderWidget = () => {
  const [gemstone, setGemstone] = useState("");
  const [caratWeight, setCaratWeight] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [purpose, setPurpose] = useState("");

  const gemstones = [
    { value: "blue-sapphire", label: "Blue Sapphire (Neelam)" },
    { value: "yellow-sapphire", label: "Yellow Sapphire (Pukhraj)" },
    { value: "ruby", label: "Ruby (Manik)" },
    { value: "emerald", label: "Emerald (Panna)" },
    { value: "pearl", label: "Pearl (Moti)" },
    { value: "red-coral", label: "Red Coral (Moonga)" },
    { value: "hessonite", label: "Hessonite (Gomed)" },
    { value: "cats-eye", label: "Cat's Eye (Lehsunia)" },
    { value: "amethyst", label: "Amethyst (Jamunia)" },
  ];

  const purposes = [
    { value: "career", label: "Career & Success" },
    { value: "health", label: "Health & Wellness" },
    { value: "wealth", label: "Wealth & Prosperity" },
    { value: "relationships", label: "Love & Relationships" },
    { value: "education", label: "Education & Knowledge" },
    { value: "protection", label: "Protection & Safety" },
  ];

  const caratWeights = [
    { value: "below-3", label: "Below 3 Carat" },
    { value: "3-5", label: "3 - 5 Carat" },
    { value: "5-7", label: "5 - 7 Carat" },
    { value: "7-10", label: "7 - 10 Carat" },
    { value: "10-plus", label: "10+ Carat" },
  ];

  const priceRanges = [
    { value: "under-25k", label: "Under ₹25,000" },
    { value: "25k-50k", label: "₹25,000 - ₹50,000" },
    { value: "50k-1l", label: "₹50,000 - ₹1 Lakh" },
    { value: "1l-2l", label: "₹1 Lakh - ₹2 Lakh" },
    { value: "2l-plus", label: "₹2 Lakh+" },
  ];

  const handleSearch = () => {
    if (gemstone) {
      window.location.href = `/${gemstone}`;
    } else {
      window.location.href = "/gemstones-collection";
    }
  };

  return (
    <Card className="bg-card border-2 border-accent/20 shadow-card p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
          <Gem className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Find Your Right Gemstone</h3>
          <p className="text-sm text-muted-foreground">Search from 10,000+ certified gemstones</p>
        </div>
      </div>

      <Tabs defaultValue="gemstone" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6 bg-muted">
          <TabsTrigger value="gemstone" className="flex items-center gap-2 data-[state=active]:bg-accent data-[state=active]:text-foreground">
            <Gem className="w-4 h-4" />
            By Gemstone
          </TabsTrigger>
          <TabsTrigger value="purpose" className="flex items-center gap-2 data-[state=active]:bg-accent data-[state=active]:text-foreground">
            <Target className="w-4 h-4" />
            By Purpose
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gemstone" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select value={gemstone} onValueChange={setGemstone}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select Gemstone" />
              </SelectTrigger>
              <SelectContent>
                {gemstones.map((gem) => (
                  <SelectItem key={gem.value} value={gem.value}>
                    {gem.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={caratWeight} onValueChange={setCaratWeight}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Carat Weight" />
              </SelectTrigger>
              <SelectContent>
                {caratWeights.map((carat) => (
                  <SelectItem key={carat.value} value={carat.value}>
                    {carat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((price) => (
                  <SelectItem key={price.value} value={price.value}>
                    {price.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-accent to-[hsl(38,70%,45%)] hover:from-[hsl(38,70%,45%)] hover:to-accent text-foreground font-semibold"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="purpose" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select value={purpose} onValueChange={setPurpose}>
              <SelectTrigger className="bg-background border-border col-span-1 md:col-span-2">
                <SelectValue placeholder="Select Purpose" />
              </SelectTrigger>
              <SelectContent>
                {purposes.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((price) => (
                  <SelectItem key={price.value} value={price.value}>
                    {price.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-accent to-[hsl(38,70%,45%)] hover:from-[hsl(38,70%,45%)] hover:to-accent text-foreground font-semibold"
            >
              <Search className="w-4 h-4 mr-2" />
              Find Gemstones
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Action CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
        <Link to="/consultation">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Phone className="w-4 h-4 mr-2" />
            Talk to Astrologer
          </Button>
        </Link>
        <Link to="/consultation">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Sparkles className="w-4 h-4 mr-2" />
            Free Recommendation
          </Button>
        </Link>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Expert
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default GemstoneFinderWidget;
