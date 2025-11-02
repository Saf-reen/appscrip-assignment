import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
            aria-label="Toggle filters"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex-1 lg:flex-none">
            <h1 className="text-2xl font-bold tracking-tight font-display">
              LOGO
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              SHOP
            </a>
            <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              SKILLS
            </a>
            <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              STORIES
            </a>
            <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              ABOUT
            </a>
            <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              CONTACT US
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
