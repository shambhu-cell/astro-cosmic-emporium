import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrustLogos from "@/components/TrustLogos";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustLogos />
      <CategorySection />
      <FeaturedProducts />
      <ValueProposition />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </main>
  );
};

export default Index;
