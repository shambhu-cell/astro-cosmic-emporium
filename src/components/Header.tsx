import { ShoppingCart, Search, User, Star, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import astrosageLogo from "@/assets/astrosage-logo.webp";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-soft">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={astrosageLogo} 
            alt="AstroSage Logo" 
            className="h-10 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-primary">
              AstroSage Store
            </h1>
            <p className="text-xs text-muted-foreground">Trusted Since 2001</p>
          </div>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Gemstones
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Rudraksha
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Bracelets
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Mala
          </a>
        </nav>

        {/* Search */}
        <div className="flex-1 max-w-md mx-4 md:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-secondary/50 border-border focus:border-primary/50 focus:bg-background"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Heart className="h-4 w-4" />
            <span className="hidden lg:inline">Wishlist</span>
          </Button>
          
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
            <span className="hidden lg:inline">Account</span>
          </Button>
          
          <Button variant="shop" size="sm" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <Badge 
              variant="secondary" 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
            >
              3
            </Badge>
            <span className="hidden lg:inline ml-2">Cart</span>
          </Button>

          {/* Mobile menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;