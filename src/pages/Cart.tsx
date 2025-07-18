import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import vanillaCake from "@/assets/vanilla-cake.jpg";

const Cart = () => {
  // Mock cart data - will be replaced with context/state management
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Chocolate Delight Cake",
      image: chocolateCake,
      price: 45.99,
      quantity: 2,
      size: "Medium"
    },
    {
      id: "2", 
      title: "Vanilla Dream Cake",
      image: vanillaCake,
      price: 39.99,
      quantity: 1,
      size: "Large"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you haven't added any delicious cakes to your cart yet.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-button hover:scale-105 transition-transform shadow-button"
            >
              <Link to="/products">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Start Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground mt-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-card">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between">
                        <div className="mb-4 sm:mb-0">
                          <h3 className="font-semibold text-lg text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Size: {item.size}
                          </p>
                          <p className="text-lg font-bold text-primary">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-border rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-3 py-1 min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          Item Total:
                        </span>
                        <span className="font-semibold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-card sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping:</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax:</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <div className="mt-4 p-3 bg-accent rounded-lg">
                    <p className="text-sm text-center">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  <Button 
                    className="w-full bg-gradient-button hover:scale-105 transition-transform shadow-button"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/products">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>

                {/* Security Badge */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center text-sm text-muted-foreground">
                    <span className="mr-2">🔒</span>
                    Secure Checkout
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;