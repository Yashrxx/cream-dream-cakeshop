import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🧁</span>
              </div>
              <span className="font-bold text-xl text-foreground">Cake N Cream</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting delicious moments with our premium cakes and desserts. 
              Made fresh daily with love and the finest ingredients.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Products", path: "/products" },
                { name: "Custom Orders", path: "/custom" },
                { name: "Gift Cards", path: "/gift-cards" },
                { name: "Catering", path: "/catering" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Customer Service</h3>
            <div className="space-y-2">
              {[
                { name: "FAQ", path: "/faq" },
                { name: "Shipping Info", path: "/shipping" },
                { name: "Returns", path: "/returns" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  123 Sweet Street, Bakery District, City 12345
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hello@cakeandcream.com</span>
              </div>
            </div>
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm font-medium text-foreground">Store Hours</p>
              <p className="text-xs text-muted-foreground mt-1">
                Mon-Sat: 8AM - 8PM<br />
                Sunday: 9AM - 6PM
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Cake N Cream. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;