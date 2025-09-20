import { ShoppingCart, Search, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-primary animate-cosmic-pulse" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AstroSage Store
              </h1>
              <p className="text-xs text-muted-foreground">Celestial Marketplace</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cosmic treasures..."
              className="pl-10 bg-muted/50 border-border/50 focus:border-primary/50"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <Badge 
              variant="secondary" 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
            >
              3
            </Badge>
            <span className="hidden sm:inline ml-2">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;