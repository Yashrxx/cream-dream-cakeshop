import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const cartCount = 0; // Will be dynamic later

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">🧁</span>
            </div>
            <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              Cake N Cream
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-button rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-accent">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-accent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-accent">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="py-4 space-y-2 border-t border-border bg-background/95 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-accent text-primary font-medium"
                      : "text-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;