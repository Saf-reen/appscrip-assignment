import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          {onMenuClick && (
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={onMenuClick}
              aria-label="Toggle filters"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}

          {/* Logo */}
          <div className="flex-1 lg:flex-none">
            <Link to="/">
              <h1 className="text-2xl font-bold tracking-tight font-display hover:text-muted-foreground transition-colors cursor-pointer">
                LOGO
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wide">
              SHOP
            </Link>
            <Link to="/skills" className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wide">
              SKILLS
            </Link>
            <Link to="/stories" className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wide">
              STORIES
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wide">
              ABOUT
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-muted-foreground transition-colors uppercase tracking-wide">
              CONTACT US
            </Link>
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
