import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gemstones from "@/assets/gemstones.jpg";
import consultation from "@/assets/consultation.jpg";
import yantras from "@/assets/yantras.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Premium Birth Chart Analysis",
    price: 2999,
    originalPrice: 4999,
    image: consultation,
    rating: 4.9,
    reviewCount: 1250,
    category: "Consultations",
    isFeatured: true,
    isPopular: true,
  },
  {
    id: "2",
    name: "Natural Blue Sapphire Ring",
    price: 15999,
    originalPrice: 22999,
    image: gemstones,
    rating: 4.8,
    reviewCount: 892,
    category: "Gemstones",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Sri Yantra Golden Pendant",
    price: 8999,
    originalPrice: 12999,
    image: yantras,
    rating: 4.7,
    reviewCount: 654,
    category: "Yantras",
    isPopular: true,
  },
  {
    id: "4",
    name: "Love & Relationship Reading",
    price: 1999,
    originalPrice: 3499,
    image: consultation,
    rating: 4.9,
    reviewCount: 2156,
    category: "Consultations",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Healing Crystal Set (7 Chakras)",
    price: 4999,
    originalPrice: 7999,
    image: gemstones,
    rating: 4.6,
    reviewCount: 445,
    category: "Gemstones",
    isPopular: true,
  },
  {
    id: "6",
    name: "Shree Ganesh Copper Yantra",
    price: 3999,
    originalPrice: 5999,
    image: yantras,
    rating: 4.8,
    reviewCount: 789,
    category: "Yantras",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 bg-gradient-card">
      <div className="container max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium products loved by our community of spiritual seekers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-10">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary" size="lg" className="px-10">
            Explore All Products
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;