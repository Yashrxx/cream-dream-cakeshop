import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border/20 shadow-elegant">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-button rounded-xl flex items-center justify-center shadow-button">
                <span className="text-primary-foreground font-bold text-lg">🧁</span>
              </div>
              <span className="font-bold text-2xl text-foreground tracking-tight">Cake N Cream</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting exquisite moments with our artisan cakes and confections. 
              Made fresh daily with passion and the finest premium ingredients.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-accent/50 hover:text-gold transition-all duration-300 rounded-xl">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/50 hover:text-gold transition-all duration-300 rounded-xl">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-accent/50 hover:text-gold transition-all duration-300 rounded-xl">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-foreground">Quick Links</h3>
            <div className="space-y-3">
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
                  className="block text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-foreground">Customer Service</h3>
            <div className="space-y-3">
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
                  className="block text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-muted-foreground">
                  123 Sweet Street, Bakery District, City 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-muted-foreground">hello@cakeandcream.com</span>
              </div>
            </div>
            <div className="bg-gradient-accent p-4 rounded-xl shadow-soft">
              <p className="font-bold text-foreground mb-2">Store Hours</p>
              <p className="text-sm text-muted-foreground">
                Mon-Sat: 8AM - 8PM<br />
                Sunday: 9AM - 6PM
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <p className="text-muted-foreground font-medium">
            © 2024 Cake N Cream. All rights reserved.
          </p>
          <div className="flex space-x-6 text-muted-foreground">
            <Link to="/privacy" className="hover:text-gold transition-colors duration-300 font-medium">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors duration-300 font-medium">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-gold transition-colors duration-300 font-medium">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;