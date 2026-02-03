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
import YellowSapphireCollection from "./pages/YellowSapphireCollection";
import BlueSapphireCollection from "./pages/BlueSapphireCollection";
import RubyCollection from "./pages/RubyCollection";
import HessoniteCollection from "./pages/HessoniteCollection";
import MoongaCollection from "./pages/MoongaCollection";
import CatsEyeCollection from "./pages/CatsEyeCollection";
import LapisLazuliCollection from "./pages/LapisLazuliCollection";
import PearlCollection from "./pages/PearlCollection";
import TigersEyeCollection from "./pages/TigersEyeCollection";
import RoseQuartzCollection from "./pages/RoseQuartzCollection";
import AmethystCollection from "./pages/AmethystCollection";
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
import CaratRattiCalculator from "./pages/CaratRattiCalculator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import ThemeRoyal from "./pages/ThemeRoyal";
import ThemeEmerald from "./pages/ThemeEmerald";
import ThemeSapphire from "./pages/ThemeSapphire";
import PartnerPortal from "./pages/PartnerPortal";
import PartnerAuth from "./pages/PartnerAuth";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Consultation from "./pages/Consultation";
import Collections from "./pages/Collections";
import GemstonesPendantCollection from "./pages/GemstonesPendantCollection";
import RudrakshaTreeLanding from "./pages/RudrakshaTreeLanding";
import MoonstoneCollection from "./pages/MoonstoneCollection";
import ChalcedonyCollection from "./pages/ChalcedonyCollection";
import WhiteCoralCollection from "./pages/WhiteCoralCollection";
import IoliteCollection from "./pages/IoliteCollection";
import OpalCollection from "./pages/OpalCollection";
import TourmalineCollection from "./pages/TourmalineCollection";
import WhiteSapphireCollection from "./pages/WhiteSapphireCollection";
import TurquoiseCollection from "./pages/TurquoiseCollection";
import SpinelCollection from "./pages/SpinelCollection";
import ZirconCollection from "./pages/ZirconCollection";
import YellowSapphireProduct from "./pages/YellowSapphireProduct";

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
          <Route path="/collections" element={<Collections />} />
          <Route path="/gemstones" element={<Gemstones />} />
          <Route path="/gemstones-collection" element={<GemstonesPendantCollection />} />
          <Route path="/gemstones/:gemstoneType" element={<GemstoneCollection />} />
          <Route path="/gemstone-collection/:gemstoneType" element={<GemstoneCollection />} />
          <Route path="/yellow-sapphire" element={<YellowSapphireCollection />} />
          <Route path="/yellow-sapphire-collection" element={<YellowSapphireCollection />} />
          <Route path="/yellow-sapphire-product" element={<YellowSapphireProduct />} />
          <Route path="/yellow-sapphire-product/:id" element={<YellowSapphireProduct />} />
          <Route path="/blue-sapphire" element={<BlueSapphireCollection />} />
          <Route path="/blue-sapphire-collection" element={<BlueSapphireCollection />} />
          <Route path="/ruby" element={<RubyCollection />} />
          <Route path="/ruby-collection" element={<RubyCollection />} />
          <Route path="/hessonite" element={<HessoniteCollection />} />
          <Route path="/hessonite-collection" element={<HessoniteCollection />} />
          <Route path="/moonga" element={<MoongaCollection />} />
          <Route path="/moonga-collection" element={<MoongaCollection />} />
          <Route path="/cats-eye" element={<CatsEyeCollection />} />
          <Route path="/cats-eye-collection" element={<CatsEyeCollection />} />
          <Route path="/lapis-lazuli" element={<LapisLazuliCollection />} />
          <Route path="/lapis-lazuli-collection" element={<LapisLazuliCollection />} />
          <Route path="/pearl" element={<PearlCollection />} />
          <Route path="/pearl-collection" element={<PearlCollection />} />
          <Route path="/tigers-eye" element={<TigersEyeCollection />} />
          <Route path="/tigers-eye-collection" element={<TigersEyeCollection />} />
          <Route path="/rose-quartz" element={<RoseQuartzCollection />} />
          <Route path="/rose-quartz-collection" element={<RoseQuartzCollection />} />
          <Route path="/amethyst" element={<AmethystCollection />} />
          <Route path="/amethyst-collection" element={<AmethystCollection />} />
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
          <Route path="/carat-ratti-calculator" element={<CaratRattiCalculator />} />
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
          <Route path="/theme-royal" element={<ThemeRoyal />} />
          <Route path="/theme-emerald" element={<ThemeEmerald />} />
          <Route path="/theme-sapphire" element={<ThemeSapphire />} />
          <Route path="/partners" element={<PartnerPortal />} />
          <Route path="/partners/auth" element={<PartnerAuth />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/rudraksha-tree" element={<RudrakshaTreeLanding />} />
          <Route path="/coloured-rudraksha-tree" element={<RudrakshaTreeLanding />} />
          <Route path="/moonstone" element={<MoonstoneCollection />} />
          <Route path="/moonstone-collection" element={<MoonstoneCollection />} />
          <Route path="/chalcedony" element={<ChalcedonyCollection />} />
          <Route path="/hakik" element={<ChalcedonyCollection />} />
          <Route path="/white-coral" element={<WhiteCoralCollection />} />
          <Route path="/iolite" element={<IoliteCollection />} />
          <Route path="/neeli" element={<IoliteCollection />} />
          <Route path="/opal" element={<OpalCollection />} />
          <Route path="/tourmaline" element={<TourmalineCollection />} />
          <Route path="/white-sapphire" element={<WhiteSapphireCollection />} />
          <Route path="/turquoise" element={<TurquoiseCollection />} />
          <Route path="/firoza" element={<TurquoiseCollection />} />
          <Route path="/spinel" element={<SpinelCollection />} />
          <Route path="/zircon" element={<ZirconCollection />} />
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
