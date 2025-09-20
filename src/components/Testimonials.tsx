import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "Got my Blue Sapphire ring from AstroSage and within 3 months, I got promoted! The consultation was spot-on and the quality is amazing. Highly recommend!",
      product: "Blue Sapphire Ring",
      verified: true,
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "Been using AstroSage for 5 years now. Their gemstone quality is unmatched and the astrologers are genuine. My business has grown significantly after wearing their recommended stones.",
      product: "Ruby Pendant",
      verified: true,
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The consultation was so detailed and accurate! Got my Emerald ring and the positive changes in my life have been remarkable. Thank you AstroSage team!",
      product: "Emerald Ring",
      verified: true,
    },
    {
      name: "Ankit Singh",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "Initially I was skeptical, but AstroSage's expert guidance and authentic gemstones have brought so much positivity in my life. Worth every penny!",
      product: "Yellow Sapphire",
      verified: true,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-premium">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 25+ million satisfied customers who have transformed their lives with our authentic gemstones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                          <Award className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">Purchased: {testimonial.product}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">50K+</div>
            <div className="text-sm text-muted-foreground">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">25M+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">99.8%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;