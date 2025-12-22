import { useState } from "react";
import { ShoppingCart, Search, User, Menu, X, Home, Sparkles, Phone, Info, Calculator, Gem, Circle, Heart, Eye, Palette, Droplet, ChevronDown, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import astrosageLogo from "@/assets/astrosage-logo.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navaratna = [
    { name: "Ruby (Manikya)", href: "/ruby", planet: "Sun" },
    { name: "Pearl (Moti)", href: "/gemstones/pearl", planet: "Moon" },
    { name: "Red Coral (Moonga)", href: "/gemstones/coral", planet: "Mars" },
    { name: "Emerald (Panna)", href: "/gemstones/emerald", planet: "Mercury" },
    { name: "Yellow Sapphire (Pukhraj)", href: "/gemstones/yellow-sapphire", planet: "Jupiter" },
    { name: "Diamond (Heera)", href: "/gemstones/diamond", planet: "Venus" },
    { name: "Blue Sapphire (Neelam)", href: "/blue-sapphire", planet: "Saturn" },
    { name: "Hessonite (Gomed)", href: "/gemstones/hessonite", planet: "Rahu" },
    { name: "Cat's Eye (Lehsunia)", href: "/gemstones/cats-eye", planet: "Ketu" },
  ];

  const rudrakshaTypes = [
    { name: "1 Mukhi Rudraksha", href: "/rudraksha/1-mukhi" },
    { name: "2 Mukhi Rudraksha", href: "/rudraksha/2-mukhi" },
    { name: "3 Mukhi Rudraksha", href: "/rudraksha/3-mukhi" },
    { name: "4 Mukhi Rudraksha", href: "/rudraksha/4-mukhi" },
    { name: "5 Mukhi Rudraksha", href: "/rudraksha/5-mukhi" },
    { name: "6 Mukhi Rudraksha", href: "/rudraksha/6-mukhi" },
    { name: "7 Mukhi Rudraksha", href: "/rudraksha/7-mukhi" },
    { name: "Gauri Shankar", href: "/rudraksha/gauri-shankar" },
  ];

  const braceletTypes = [
    { name: "Crystal Bracelets", href: "/bracelets/crystal" },
    { name: "Gemstone Bracelets", href: "/bracelets/gemstone" },
    { name: "Rudraksha Bracelets", href: "/bracelets/rudraksha" },
    { name: "7 Chakra Bracelets", href: "/bracelets/7-chakra" },
    { name: "Tiger Eye Bracelets", href: "/bracelets/tiger-eye" },
    { name: "Black Obsidian", href: "/bracelets/obsidian" },
  ];

  const malaTypes = [
    { name: "Rudraksha Mala", href: "/mala/rudraksha" },
    { name: "Crystal Mala", href: "/mala/crystal" },
    { name: "Tulsi Mala", href: "/mala/tulsi" },
    { name: "Sandalwood Mala", href: "/mala/sandalwood" },
    { name: "Gemstone Mala", href: "/mala/gemstone" },
    { name: "Sphatik Mala", href: "/mala/sphatik" },
  ];

  const yantraTypes = [
    { name: "Sri Yantra", href: "/yantra/sri-yantra" },
    { name: "Kuber Yantra", href: "/yantra/kuber" },
    { name: "Shree Yantra", href: "/yantra/shree" },
    { name: "Mahamrityunjaya Yantra", href: "/yantra/mahamrityunjaya" },
    { name: "Baglamukhi Yantra", href: "/yantra/baglamukhi" },
    { name: "Durga Yantra", href: "/yantra/durga" },
    { name: "Ganesh Yantra", href: "/yantra/ganesh" },
    { name: "Vastu Yantra", href: "/yantra/vastu" },
  ];

  const productCategories = [
    { name: "Gemstones", href: "/gemstones", icon: Gem },
    { name: "Rudraksha", href: "/rudraksha", icon: Circle },
    { name: "Bracelets", href: "/bracelets", icon: Heart },
    { name: "Mala", href: "/mala", icon: Circle },
    { name: "Yantra", href: "/yantra", icon: Eye },
    { name: "Rings", href: "/rings", icon: Circle },
    { name: "Lockets", href: "/lockets", icon: Heart },
    { name: "Idols", href: "/idols", icon: Sparkles },
    { name: "Puja Items", href: "/puja-items", icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-soft">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img 
            src={astrosageLogo} 
            alt="AstroSage Logo" 
            className="h-10 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-primary">
              AstroSage Shop
            </h1>
            <p className="text-xs text-muted-foreground">Trusted Since 2004</p>
          </div>
        </a>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          
          {/* Gemstones Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Gem className="w-3.5 h-3.5" />
                Gemstones
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 bg-background border-border z-50">
              <div className="px-2 py-2">
                <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase">Navratna - 9 Sacred Gemstones</p>
              </div>
              {navaratna.map((gem) => (
                <DropdownMenuItem key={gem.name} asChild>
                  <a href={gem.href} className="cursor-pointer flex items-center justify-between gap-2 py-2">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="font-medium">{gem.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{gem.planet}</span>
                  </a>
                </DropdownMenuItem>
              ))}
              <div className="border-t mt-1 pt-1">
                <DropdownMenuItem asChild>
                  <a href="/gemstones" className="cursor-pointer font-semibold text-primary py-2">
                    View All Gemstones →
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Rudraksha Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Circle className="w-3.5 h-3.5" />
                Rudraksha
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-background border-border z-50">
              <div className="px-2 py-2">
                <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase">Popular Types</p>
              </div>
              {rudrakshaTypes.map((type) => (
                <DropdownMenuItem key={type.name} asChild>
                  <a href={type.href} className="cursor-pointer flex items-center gap-2 py-2">
                    <Circle className="w-4 h-4 text-primary" />
                    <span className="font-medium">{type.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
              <div className="border-t mt-1 pt-1">
                <DropdownMenuItem asChild>
                  <a href="/rudraksha" className="cursor-pointer font-semibold text-primary py-2">
                    View All Rudraksha →
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Bracelets Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Heart className="w-3.5 h-3.5" />
                Bracelets
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-background border-border z-50">
              <div className="px-2 py-2">
                <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase">Popular Collections</p>
              </div>
              {braceletTypes.map((type) => (
                <DropdownMenuItem key={type.name} asChild>
                  <a href={type.href} className="cursor-pointer flex items-center gap-2 py-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="font-medium">{type.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
              <div className="border-t mt-1 pt-1">
                <DropdownMenuItem asChild>
                  <a href="/bracelets" className="cursor-pointer font-semibold text-primary py-2">
                    View All Bracelets →
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mala Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Circle className="w-3.5 h-3.5" />
                Mala
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-background border-border z-50">
              <div className="px-2 py-2">
                <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase">Popular Types</p>
              </div>
              {malaTypes.map((type) => (
                <DropdownMenuItem key={type.name} asChild>
                  <a href={type.href} className="cursor-pointer flex items-center gap-2 py-2">
                    <Circle className="w-4 h-4 text-primary" />
                    <span className="font-medium">{type.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
              <div className="border-t mt-1 pt-1">
                <DropdownMenuItem asChild>
                  <a href="/mala" className="cursor-pointer font-semibold text-primary py-2">
                    View All Mala →
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Yantra Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                Yantra
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-background border-border z-50">
              <div className="px-2 py-2">
                <p className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase">Sacred Yantras</p>
              </div>
              {yantraTypes.map((type) => (
                <DropdownMenuItem key={type.name} asChild>
                  <a href={type.href} className="cursor-pointer flex items-center gap-2 py-2">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="font-medium">{type.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
              <div className="border-t mt-1 pt-1">
                <DropdownMenuItem asChild>
                  <a href="/yantra" className="cursor-pointer font-semibold text-primary py-2">
                    View All Yantras →
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Calculators Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium hover:text-primary transition-colors bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1">
                <Calculator className="w-3.5 h-3.5" />
                Calculators
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-background border-border z-50">
              <DropdownMenuItem asChild>
                <a href="/gemstone-calculator" className="cursor-pointer flex items-center gap-2 py-2">
                  <Gem className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Gemstone Calculator</p>
                    <p className="text-xs text-muted-foreground">Find your lucky gemstone</p>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/rudraksha-calculator" className="cursor-pointer flex items-center gap-2 py-2">
                  <Circle className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Rudraksha Calculator</p>
                    <p className="text-xs text-muted-foreground">Get Rudraksha recommendation</p>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/bracelet-calculator" className="cursor-pointer flex items-center gap-2 py-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Bracelet Calculator</p>
                    <p className="text-xs text-muted-foreground">Discover healing bracelets</p>
                  </div>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="/blog" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            Blog
          </a>
          
          <a href="/consultation" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Free Consultation
          </a>
        </nav>

        {/* Search */}
        <div className="flex-1 max-w-[200px] mx-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-secondary/50 border-border focus:border-primary/50 focus:bg-background"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge 
              variant="secondary" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
            >
              3
            </Badge>
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 overflow-y-auto">
              {/* Header */}
              <SheetHeader className="px-6 py-4 border-b bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={astrosageLogo} 
                      alt="AstroSage Logo" 
                      className="h-10 w-auto"
                    />
                    <div>
                      <SheetTitle className="text-lg font-bold text-primary">
                        AstroSage Shop
                      </SheetTitle>
                      <p className="text-xs text-muted-foreground">Trusted Since 2004</p>
                    </div>
                  </div>
                </div>
              </SheetHeader>

              {/* Menu Content */}
              <div className="px-6 py-6 space-y-6">
                {/* Product Categories - First Section */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Shop by Category
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {productCategories.map((category) => (
                      <a
                        key={category.name}
                        href={category.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gradient-to-br from-secondary/50 to-secondary/30 hover:from-primary/10 hover:to-accent/10 border border-border hover:border-primary/20 transition-all group"
                      >
                        <category.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-center text-foreground leading-tight">
                          {category.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Calculator Buttons */}
                <div className="space-y-3">
                  <a 
                    href="/gemstone-calculator" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-base font-semibold shadow-lg group">
                      <Calculator className="w-5 h-5 mr-2" />
                      Gemstone Calculator
                      <Sparkles className="w-4 h-4 ml-auto" />
                    </Button>
                  </a>
                  
                  <a 
                    href="/rudraksha-calculator" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button className="w-full h-12 bg-gradient-to-r from-accent to-accent/80 hover:opacity-90 text-base font-semibold shadow-lg group">
                      <Calculator className="w-5 h-5 mr-2" />
                      Rudraksha Calculator
                      <Sparkles className="w-4 h-4 ml-auto" />
                    </Button>
                  </a>
                  
                  <a 
                    href="/bracelet-calculator" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <Button className="w-full h-12 bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 text-base font-semibold shadow-lg group">
                      <Heart className="w-5 h-5 mr-2" />
                      Bracelet Calculator
                      <Sparkles className="w-4 h-4 ml-auto" />
                    </Button>
                  </a>
                </div>

                <Separator />

                {/* Quick Links */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Quick Links
                  </h3>
                  <div className="space-y-1">
                    <a 
                      href="/" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary/80 transition-colors group"
                    >
                      <Home className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-base font-medium text-foreground">Home</span>
                    </a>
                    <a 
                      href="/about-us" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary/80 transition-colors group"
                    >
                      <Info className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-base font-medium text-foreground">About Us</span>
                    </a>
                    <a 
                      href="/contact" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary/80 transition-colors group"
                    >
                      <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-base font-medium text-foreground">Contact</span>
                    </a>
                  </div>
                </div>

                <Separator />

                {/* Account Actions */}
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full h-11 justify-start text-base"
                  >
                    <User className="w-5 h-5 mr-2" />
                    My Account
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-11 justify-start text-base relative"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    My Cart
                    <Badge className="ml-auto bg-primary text-primary-foreground">3</Badge>
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 text-center">
                  <p className="text-xs text-muted-foreground font-medium">
                    ✨ Trusted by 50 Million+ Customers Worldwide
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;