import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews?: number;
  category?: string;
  isNew?: boolean;
  onAddToCart?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

const ProductCard = ({
  id,
  title,
  image,
  price,
  originalPrice,
  rating,
  reviews = 0,
  category,
  isNew = false,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-gold text-gold"
            : i < rating
            ? "fill-gold/50 text-gold"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden bg-gradient-card border border-border/20 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] rounded-2xl">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-3">
          {isNew && (
            <Badge className="bg-gold text-primary-foreground font-semibold px-3 py-1 rounded-lg shadow-button">
              New
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-gradient-button text-primary-foreground font-semibold px-3 py-1 rounded-lg shadow-button">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-card/80 backdrop-blur-md hover:bg-card transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-xl shadow-soft"
          onClick={() => onToggleFavorite?.(id)}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-gold text-gold" : "text-foreground"}`} />
        </Button>

        {/* Luxury sparkle effect */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
          <div className="w-2 h-2 bg-gold rounded-full animate-sparkle"></div>
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <Button 
            className="bg-gradient-button hover:scale-110 transition-all duration-300 shadow-button font-semibold px-6 py-3 rounded-xl"
            onClick={() => onAddToCart?.(id)}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        {category && (
          <span className="text-sm text-gold uppercase tracking-wider font-medium">
            {category}
          </span>
        )}
        
        <h3 className="font-bold text-xl mt-2 mb-3 text-foreground group-hover:text-gold transition-colors duration-300 tracking-tight">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {rating.toFixed(1)} ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gold">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-base text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="bg-gradient-button hover:scale-110 transition-all duration-300 shadow-button rounded-xl px-4 py-2"
            onClick={() => onAddToCart?.(id)}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;