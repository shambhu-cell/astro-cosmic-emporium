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
import Gemstones from "./pages/Gemstones";
import Rudraksha from "./pages/Rudraksha";
import Bracelets from "./pages/Bracelets";
import Mala from "./pages/Mala";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          <Route path="/rudraksha" element={<Rudraksha />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/mala" element={<Mala />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/gemstone/:id" element={<ProductDetailsGemstone />} />
          <Route path="/bracelet/:id" element={<ProductDetailsBracelet />} />
          <Route path="/rudraksha/:id" element={<ProductDetailsRudraksha />} />
          <Route path="/yantra/:id" element={<ProductDetailsYantra />} />
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
