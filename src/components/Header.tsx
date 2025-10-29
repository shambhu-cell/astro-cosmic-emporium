import { useState } from "react";
import { ShoppingCart, Search, User, Menu, X, Home, Sparkles, Phone, Info, Calculator, Gem, Circle, Heart, Eye, Palette, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import astrosageLogo from "@/assets/astrosage-logo.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productCategories = [
    { name: "Gemstones", href: "/gemstones", icon: Gem },
    { name: "Rudraksha", href: "/rudraksha", icon: Circle },
    { name: "Bracelets", href: "/bracelets", icon: Heart },
    { name: "Mala", href: "/mala", icon: Circle },
    { name: "Yantra", href: "/yantra", icon: Eye },
    { name: "Jadi Roots", href: "/jadi-roots", icon: Droplet },
    { name: "Vastu Painting", href: "/vastu-painting", icon: Palette },
    { name: "Pendant", href: "/pendant", icon: Gem },
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
          <a href="/gemstones" className="text-sm font-medium hover:text-primary transition-colors">
            Gemstones
          </a>
          <a href="/rudraksha" className="text-sm font-medium hover:text-primary transition-colors">
            Rudraksha
          </a>
          <a href="/bracelets" className="text-sm font-medium hover:text-primary transition-colors">
            Bracelets
          </a>
          <a href="/mala" className="text-sm font-medium hover:text-primary transition-colors">
            Mala
          </a>
          <a href="/yantra" className="text-sm font-medium hover:text-primary transition-colors">
            Yantra
          </a>
          <a href="/jadi-roots" className="text-sm font-medium hover:text-primary transition-colors">
            Jadi Roots
          </a>
          <a href="/vastu-painting" className="text-sm font-medium hover:text-primary transition-colors">
            Vastu Painting
          </a>
          <a href="/pendant" className="text-sm font-medium hover:text-primary transition-colors">
            Pendant
          </a>
          <a href="/gemstone-calculator" className="text-sm font-medium hover:text-primary transition-colors bg-primary/10 px-3 py-1 rounded-full">
            Gemstone Calc
          </a>
          <a href="/rudraksha-calculator" className="text-sm font-medium hover:text-primary transition-colors bg-accent/10 px-3 py-1 rounded-full">
            Rudraksha Calc
          </a>
          <a href="/about-us" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </a>
          <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
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