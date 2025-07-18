import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [reviewData, setReviewData] = useState({
    customerName: "",
    rating: 0,
    comment: "",
    productId: ""
  });

  // Mock reviews data
  const reviews = [
    {
      id: "1",
      customerName: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely delicious! The chocolate cake was perfect for our anniversary.",
      date: "2024-01-15",
      productName: "Chocolate Delight Cake"
    },
    {
      id: "2", 
      customerName: "Mike Chen",
      rating: 4,
      comment: "Great taste and beautiful presentation. Will definitely order again!",
      date: "2024-01-10",
      productName: "Vanilla Dream Cake"
    },
    {
      id: "3",
      customerName: "Emily Davis",
      rating: 5,
      comment: "The red velvet cake exceeded our expectations. Thank you!",
      date: "2024-01-08",
      productName: "Red Velvet Supreme"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented with backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Review submission logic will be implemented with backend
    console.log("Review submitted:", reviewData);
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback. Your review helps us improve.",
    });
    setReviewData({
      customerName: "",
      rating: 0,
      comment: "",
      productId: ""
    });
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? "fill-gold text-gold"
            : "text-muted-foreground"
        } ${interactive ? "cursor-pointer hover:text-gold transition-colors" : ""}`}
        onClick={() => interactive && onRatingChange?.(i + 1)}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our cakes or need a custom order? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="custom">Custom Order</SelectItem>
                        <SelectItem value="catering">Catering Services</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-button hover:scale-105 transition-transform shadow-button"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Sweet Street<br />
                      Bakery District, City 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@cakeandcream.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Mon-Sat: 8AM - 8PM<br />
                      Sunday: 9AM - 6PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-card">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-accent rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Submit Review */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Leave a Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="customerName">Your Name *</Label>
                  <Input
                    id="customerName"
                    value={reviewData.customerName}
                    onChange={(e) => setReviewData({...reviewData, customerName: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="productId">Product</Label>
                  <Select value={reviewData.productId} onValueChange={(value) => setReviewData({...reviewData, productId: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Chocolate Delight Cake</SelectItem>
                      <SelectItem value="2">Vanilla Dream Cake</SelectItem>
                      <SelectItem value="3">Red Velvet Supreme</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Rating *</Label>
                  <div className="flex items-center space-x-1 mt-2">
                    {renderStars(reviewData.rating, true, (rating) => setReviewData({...reviewData, rating}))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment">Your Review *</Label>
                  <Textarea
                    id="comment"
                    rows={4}
                    value={reviewData.comment}
                    onChange={(e) => setReviewData({...reviewData, comment: e.target.value})}
                    placeholder="Tell us about your experience..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-button hover:scale-105 transition-transform shadow-button"
                  size="lg"
                >
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Customer Reviews */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Customer Reviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{review.customerName}</h4>
                        <p className="text-sm text-muted-foreground">{review.productName}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {renderStars(review.rating)}
                    </div>
                    
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;