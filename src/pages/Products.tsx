import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import vanillaCake from "@/assets/vanilla-cake.jpg";
import redVelvetCake from "@/assets/red-velvet-cake.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  // Mock product data - will be replaced with backend data
  const allProducts = [
    {
      id: "1",
      title: "Chocolate Delight Cake",
      image: chocolateCake,
      price: 45.99,
      originalPrice: 52.99,
      rating: 4.8,
      reviews: 124,
      category: "Chocolate",
      isNew: true
    },
    {
      id: "2",
      title: "Vanilla Dream Cake", 
      image: vanillaCake,
      price: 39.99,
      rating: 4.7,
      reviews: 89,
      category: "Vanilla"
    },
    {
      id: "3",
      title: "Red Velvet Supreme",
      image: redVelvetCake,
      price: 48.99,
      originalPrice: 55.99,
      rating: 4.9,
      reviews: 156,
      category: "Red Velvet"
    },
    {
      id: "4",
      title: "Double Chocolate Fudge",
      image: chocolateCake,
      price: 52.99,
      rating: 4.6,
      reviews: 98,
      category: "Chocolate"
    },
    {
      id: "5",
      title: "Classic Vanilla Bean",
      image: vanillaCake,
      price: 36.99,
      originalPrice: 42.99,
      rating: 4.5,
      reviews: 67,
      category: "Vanilla"
    },
    {
      id: "6",
      title: "Red Velvet Classic",
      image: redVelvetCake,
      price: 44.99,
      rating: 4.8,
      reviews: 134,
      category: "Red Velvet",
      isNew: true
    }
  ];

  const categories = ["all", "Chocolate", "Vanilla", "Red Velvet", "Fruit", "Custom"];

  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.title.localeCompare(b.title);
      }
    });

  const handleAddToCart = (id: string) => {
    console.log("Adding to cart:", id);
    // Cart functionality will be implemented later
  };

  const handleToggleFavorite = (id: string) => {
    console.log("Toggle favorite:", id);
    // Favorites functionality will be implemented later
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Delicious Cakes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of handcrafted cakes made with premium ingredients
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search cakes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <Tabs value={viewMode} onValueChange={setViewMode}>
                <TabsList>
                  <TabsTrigger value="grid">
                    <Grid className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="list">
                    <List className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 mb-12 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}>
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  {...product}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No cakes found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More Button (for pagination) */}
        {filteredProducts.length > 0 && (
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;