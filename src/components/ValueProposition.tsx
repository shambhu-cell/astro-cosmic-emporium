import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Truck, Headphones, Clock, Users } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Authentic Guarantee",
      description: "All gemstones are certified with lifetime authenticity guarantee. No compromise on quality.",
    },
    {
      icon: Award,
      title: "Expert Astrologer Guidance",
      description: "Free consultation with certified astrologers to help you choose the perfect gemstone.",
    },
    {
      icon: Truck,
      title: "Free Shipping & Returns",
      description: "Complimentary shipping across India with hassle-free 7 days return policy.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance from our dedicated customer service team.",
    },
    {
      icon: Clock,
      title: "23+ Years of Trust",
      description: "Serving customers since 2001 with consistent quality and reliability.",
    },
    {
      icon: Users,
      title: "25M+ Happy Customers",
      description: "Join millions of satisfied customers who have transformed their lives.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose AstroSage Store?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            India's most trusted astrology platform with unmatched quality and service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;