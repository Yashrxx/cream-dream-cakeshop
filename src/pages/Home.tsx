import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Truck, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import heroCake from "@/assets/hero-cake.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import vanillaCake from "@/assets/vanilla-cake.jpg";
import redVelvetCake from "@/assets/red-velvet-cake.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      title: "Chocolate Delight Cake",
      image: chocolateCake,
      price: 45.99,
      originalPrice: 52.99,
      rating: 4.8,
      reviews: 124,
      category: "Premium",
      isNew: true
    },
    {
      id: "2", 
      title: "Vanilla Dream Cake",
      image: vanillaCake,
      price: 39.99,
      rating: 4.7,
      reviews: 89,
      category: "Classic"
    },
    {
      id: "3",
      title: "Red Velvet Supreme",
      image: redVelvetCake,
      price: 48.99,
      originalPrice: 55.99,
      rating: 4.9,
      reviews: 156,
      category: "Signature"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Made with the finest ingredients and traditional recipes"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Same-day delivery to ensure maximum freshness"
    },
    {
      icon: HeartHandshake,
      title: "Custom Orders",
      description: "Personalized cakes for your special occasions"
    }
  ];

  const handleAddToCart = (id: string) => {
    console.log("Adding to cart:", id);
    // Cart functionality will be implemented later
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroCake} 
            alt="Exquisite artisan cake"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-charcoal/60 to-background/80"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 animate-fade-in">
          <div className="mb-8 animate-float">
            <span className="inline-block text-7xl mb-6 filter drop-shadow-lg">🧁</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Artisan Elegance
            <span className="block text-gold bg-gradient-button bg-clip-text text-transparent">Cake N Cream</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of confectionery artistry. Each creation is a masterpiece, 
            meticulously crafted with premium ingredients and unbounded passion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-button hover:scale-110 transition-all duration-500 shadow-button text-xl px-12 py-8 rounded-xl font-semibold"
            >
              <Link to="/products">
                Explore Collection <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500 text-xl px-12 py-8 rounded-xl font-semibold"
              asChild
            >
              <Link to="/contact">
                Bespoke Orders
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center space-x-12 text-muted-foreground">
            <div className="flex items-center space-x-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border"></div>
            <span className="hidden sm:inline font-medium">1000+ Discerning Clients</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              The Art of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to perfection is reflected in every aspect of our craft, 
              from ingredient selection to the final presentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="w-20 h-20 bg-gradient-button rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-button">
                  <feature.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Signature Masterpieces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our most celebrated confections, each one a testament to our 
              legacy of culinary excellence and artistic innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProductCard 
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500 py-4 px-8 rounded-xl font-semibold text-lg"
            >
              <Link to="/products">
                Explore Full Collection <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 to-background/90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Elevate Your Celebrations
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Discover our curated collection of artisan confections and begin your journey 
              toward culinary excellence today.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-button hover:scale-110 transition-all duration-500 shadow-button text-xl px-12 py-8 rounded-xl font-semibold"
            >
              <Link to="/products">
                Begin Your Journey <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;