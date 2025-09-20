import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, Star } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 px-4 bg-gradient-primary">
      <div className="container max-w-screen-lg mx-auto">
        <Card className="bg-white/95 backdrop-blur-sm shadow-primary">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Spiritual Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Get exclusive offers, astrological insights, and gemstone care tips delivered to your inbox
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Exclusive Discounts</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Daily Horoscope</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Astrological Tips</span>
              </div>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-secondary/50 border-border focus:border-primary/50"
              />
              <Button type="submit" variant="primary" className="px-8">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;