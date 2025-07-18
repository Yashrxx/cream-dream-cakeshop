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
    <Card className="group overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-button transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground">
              New
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-300 opacity-0 group-hover:opacity-100"
          onClick={() => onToggleFavorite?.(id)}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </Button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            className="bg-gradient-button hover:scale-105 transition-transform shadow-button"
            onClick={() => onAddToCart?.(id)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {category && (
          <span className="text-sm text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
        )}
        
        <h3 className="font-semibold text-lg mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating.toFixed(1)} ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="bg-gradient-button hover:scale-105 transition-transform shadow-button"
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