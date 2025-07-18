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
            alt="Hero Cake"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <div className="mb-6 animate-float">
            <span className="inline-block text-6xl mb-4">🧁</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome to
            <span className="block text-primary">Cake N Cream</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Indulge in our handcrafted cakes made with love, premium ingredients, 
            and years of baking expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-button hover:scale-105 transition-transform shadow-button text-lg px-8 py-6"
            >
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">
                Custom Orders
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border"></div>
            <span className="hidden sm:inline">1000+ Happy Customers</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and unforgettable taste experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-button rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-button">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Cakes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and delicious cake creations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Make Your Day Sweeter?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our collection of handcrafted cakes and place your order today
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-button hover:scale-105 transition-transform shadow-button text-lg px-8 py-6"
            >
              <Link to="/products">
                Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;