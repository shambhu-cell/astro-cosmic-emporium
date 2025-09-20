import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </main>
  );
};

export default Index;
