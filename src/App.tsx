import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import ProductDetailsGemstone from "./pages/ProductDetailsGemstone";
import ProductDetailsBracelet from "./pages/ProductDetailsBracelet";
import ProductDetailsRudraksha from "./pages/ProductDetailsRudraksha";
import ProductDetailsYantra from "./pages/ProductDetailsYantra";
import ProductDetailsMala from "./pages/ProductDetailsMala";
import ProductDetailsJadi from "./pages/ProductDetailsJadi";
import ProductDetailsVastuPainting from "./pages/ProductDetailsVastuPainting";
import Pendant from "./pages/Pendant";
import ProductDetailsPendant from "./pages/ProductDetailsPendant";
import Gemstones from "./pages/Gemstones";
import GemstoneCollection from "./pages/GemstoneCollection";
import Rudraksha from "./pages/Rudraksha";
import Bracelets from "./pages/Bracelets";
import Mala from "./pages/Mala";
import Yantra from "./pages/Yantra";
import JadiRoots from "./pages/JadiRoots";
import VastuPainting from "./pages/VastuPainting";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Payment from "./pages/Payment";
import ReturnPolicy from "./pages/ReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import GemstoneCalculator from "./pages/GemstoneCalculator";
import RudrakshaCalculator from "./pages/RudrakshaCalculator";
import BraceletCalculator from "./pages/BraceletCalculator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <div className="min-h-screen bg-gradient-hero">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gemstones" element={<Gemstones />} />
          <Route path="/gemstones/:gemstoneType" element={<GemstoneCollection />} />
          <Route path="/rudraksha" element={<Rudraksha />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/mala" element={<Mala />} />
          <Route path="/yantra" element={<Yantra />} />
          <Route path="/jadi-roots" element={<JadiRoots />} />
          <Route path="/vastu-painting" element={<VastuPainting />} />
          <Route path="/pendant" element={<Pendant />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/gemstone-calculator" element={<GemstoneCalculator />} />
          <Route path="/rudraksha-calculator" element={<RudrakshaCalculator />} />
          <Route path="/bracelet-calculator" element={<BraceletCalculator />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/gemstone/:id" element={<ProductDetailsGemstone />} />
          <Route path="/bracelet/:id" element={<ProductDetailsBracelet />} />
          <Route path="/rudraksha/:id" element={<ProductDetailsRudraksha />} />
          <Route path="/yantra/:id" element={<ProductDetailsYantra />} />
          <Route path="/mala/:id" element={<ProductDetailsMala />} />
          <Route path="/jadi-roots/:id" element={<ProductDetailsJadi />} />
          <Route path="/vastu-painting/:id" element={<ProductDetailsVastuPainting />} />
          <Route path="/pendant/:id" element={<ProductDetailsPendant />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
