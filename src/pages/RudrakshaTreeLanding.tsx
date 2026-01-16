import { useState, useEffect } from 'react';
import { Star, Shield, Truck, Clock, Check, Gift, Phone, MessageCircle, Users, Award, Sparkles, Heart, ChevronDown, ChevronUp, Timer, Eye, ShoppingCart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import rudrakshaTreeMain from '@/assets/rudraksha-tree/rudraksha-tree-main.jpg';
import rudrakshaTreeBenefits from '@/assets/rudraksha-tree/rudraksha-tree-benefits.jpg';

const RudrakshaTreeLanding = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });
  const [viewingNow, setViewingNow] = useState(23);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const images = [rudrakshaTreeMain, rudrakshaTreeBenefits];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 47, seconds: 33 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulated viewing users
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingNow(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const price = 2499;
  const originalPrice = 4999;
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  const benefits = [
    { icon: Sparkles, title: "Spiritual Wisdom", desc: "Awakens higher consciousness and spiritual insight" },
    { icon: Heart, title: "Peace & Calm", desc: "Creates serene energy, reduces stress and anxiety" },
    { icon: Zap, title: "Focus & Memory", desc: "Enhances concentration and mental clarity" },
    { icon: Shield, title: "Divine Protection", desc: "Guards against negative energies and evil eye" },
    { icon: Star, title: "Emotional Balance", desc: "Harmonizes emotions and inner peace" },
    { icon: Gift, title: "Prosperity & Luck", desc: "Attracts abundance and good fortune" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "This beautiful Rudraksha Tree has transformed the energy of my home office. I feel more focused and peaceful. My meditation practice has deepened significantly.",
      verified: true,
      daysAgo: 3
    },
    {
      name: "Rajesh Gupta",
      location: "Delhi",
      rating: 5,
      text: "Bought this for my parents' anniversary. They were so happy! The quality is exceptional, and the colors are vibrant. Highly recommend for gifting.",
      verified: true,
      daysAgo: 7
    },
    {
      name: "Ananya Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Since keeping this tree in my living room, there's a noticeable positive shift in the atmosphere. Family arguments have reduced and we feel more harmonious.",
      verified: true,
      daysAgo: 12
    }
  ];

  const faqs = [
    {
      question: "Are these real Rudraksha beads?",
      answer: "Yes, each tree contains 54 authentic Rudraksha beads sourced from Nepal and Indonesia. Every bead is carefully selected and certified for authenticity."
    },
    {
      question: "How should I place the Rudraksha Tree?",
      answer: "Place it in your puja room, living room, or home office facing East or North direction. Keep it in a clean, respectful place for maximum spiritual benefits."
    },
    {
      question: "Is the tree energized with mantras?",
      answer: "Yes, every Rudraksha Tree is energized with Vedic mantras by our expert pandits in a special puja ceremony before shipping."
    },
    {
      question: "What is the height of the tree?",
      answer: "The tree stands approximately 8-10 inches tall including the beautiful wooden base, making it perfect for tabletops and altars."
    },
    {
      question: "Can I gift this to someone?",
      answer: "Absolutely! This makes an auspicious gift for housewarmings, weddings, birthdays, or any special occasion. We offer premium gift packaging upon request."
    }
  ];

  const trustBadges = [
    { icon: Shield, text: "100% Authentic" },
    { icon: Award, text: "Lab Certified" },
    { icon: Truck, text: "Free Shipping" },
    { icon: Clock, text: "Fast Delivery" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Sticky Top Bar - Mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium md:hidden">
        <div className="flex items-center justify-center gap-2">
          <Timer className="w-4 h-4 animate-pulse" />
          <span>Offer ends in: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Announcement Bar - Desktop */}
      <div className="hidden md:block bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-3 text-center">
        <div className="container flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            <span className="font-medium">FREE Premium Gift Box Worth ₹299</span>
          </div>
          <div className="w-px h-6 bg-primary-foreground/30" />
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 animate-pulse" />
            <span>Flash Sale Ends In: <strong>{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</strong></span>
          </div>
          <div className="w-px h-6 bg-primary-foreground/30" />
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5" />
            <span>Free Express Delivery</span>
          </div>
        </div>
      </div>

      <main className="pt-4 md:pt-0">
        {/* Hero Section */}
        <section className="container py-6 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Live Activity Badge */}
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1.5 bg-green-100 text-green-700 border-green-200">
                  <Eye className="w-3.5 h-3.5" />
                  <span className="animate-pulse">{viewingNow} people viewing now</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1.5 bg-orange-100 text-orange-700 border-orange-200">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>47 sold in last 24 hours</span>
                </Badge>
              </div>

              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted/30 border border-border">
                <img
                  src={images[selectedImage]}
                  alt="Coloured Rudraksha Tree"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500 text-white text-lg px-4 py-1.5">
                  {discount}% OFF
                </Badge>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Trust Badges Below Image */}
              <div className="grid grid-cols-4 gap-2 pt-4">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1.5 p-3 bg-muted/50 rounded-lg">
                    <badge.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-medium text-center">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Breadcrumb */}
              <p className="text-sm text-muted-foreground">Home / Spiritual Products / Rudraksha Tree</p>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                  Coloured Rudraksha Tree (54 Beads)
                </h1>
                <p className="text-lg text-muted-foreground">
                  Sacred Vastu Item for Prosperity, Peace & Divine Protection
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-medium">4.9/5</span>
                <span className="text-muted-foreground">(2,847 Reviews)</span>
                <Badge variant="outline" className="text-green-600 border-green-300">
                  <Check className="w-3 h-3 mr-1" /> Verified
                </Badge>
              </div>

              {/* Price */}
              <div className="p-6 bg-gradient-to-r from-accent/10 to-primary/5 rounded-xl border border-accent/20">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-4xl font-bold text-primary">₹{price.toLocaleString()}</span>
                  <span className="text-xl text-muted-foreground line-through">₹{originalPrice.toLocaleString()}</span>
                  <Badge className="bg-green-500 text-white">Save ₹{(originalPrice - price).toLocaleString()}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Inclusive of all taxes | EMI from ₹833/month</p>
              </div>

              {/* Urgency */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-red-600">
                      <Clock className="w-5 h-5 animate-pulse" />
                      <span className="font-semibold">Limited Time Offer!</span>
                    </div>
                    <span className="text-red-700 font-bold">Only 7 left in stock</span>
                  </div>
                  <div className="mt-2 w-full bg-red-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }} />
                  </div>
                </CardContent>
              </Card>

              {/* Key Benefits */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Benefits:</h3>
                <ul className="space-y-2">
                  {['Spiritual Wisdom & Enlightenment', 'Peace, Calm & Stress Relief', 'Enhanced Focus & Memory', 'Emotional Balance & Harmony', 'Divine Protection from Negativity'].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ₹{(price * quantity).toLocaleString()}
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg py-6 border-2 border-accent text-accent hover:bg-accent hover:text-white">
                  <Zap className="w-5 h-5 mr-2" />
                  Buy Now - Express Checkout
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap gap-4 justify-center pt-4 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-blue-500" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>7-Day Returns</span>
                </div>
              </div>

              {/* Help */}
              <div className="flex items-center justify-center gap-6 pt-4">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
                <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-green-600 hover:underline">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Transform Your Space with Divine Energy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The 54 authentic Rudraksha beads create a powerful energy field that purifies your environment and attracts positivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-background">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof - Stats */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
                <div className="text-primary-foreground/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
                <div className="text-primary-foreground/80">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">21+</div>
                <div className="text-primary-foreground/80">Years of Trust</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/80">Authentic Products</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Product */}
        <section className="py-16 container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={rudrakshaTreeBenefits}
                alt="Rudraksha Tree Benefits"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Why the Coloured Rudraksha Tree?
              </h2>
              <p className="text-lg text-muted-foreground">
                Each Rudraksha bead is sacred and carries divine energy. When combined as a tree with 54 beads (half of the powerful 108), it creates a concentrated source of spiritual power for your space.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">54 Authentic Nepal/Indonesian Beads</h4>
                    <p className="text-muted-foreground">Carefully selected and certified for authenticity</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Handcrafted Wooden Base</h4>
                    <p className="text-muted-foreground">Premium quality base with elegant finish</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vedic Energization Included</h4>
                    <p className="text-muted-foreground">Energized with sacred mantras before shipping</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Perfect for Vastu Correction</h4>
                    <p className="text-muted-foreground">Ideal placement for home, office, or temple</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground">Join 50,000+ happy customers who transformed their lives</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      {testimonial.verified && (
                        <Badge variant="outline" className="text-green-600 border-green-300 text-xs">
                          <Check className="w-3 h-3 mr-1" /> Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{testimonial.daysAgo} days ago</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-5 pb-5 text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Invite Divine Energy Into Your Home?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Order your Coloured Rudraksha Tree today and experience the transformative power of 54 sacred beads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Order Now - ₹{price.toLocaleString()}
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">
              ✓ Free Shipping | ✓ 7-Day Returns | ✓ Secure Payment | ✓ Vedic Energization Included
            </p>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t p-3 md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">₹{price.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground line-through">₹{originalPrice.toLocaleString()}</span>
            </div>
            <p className="text-xs text-green-600">Save ₹{(originalPrice - price).toLocaleString()}</p>
          </div>
          <Button className="flex-1 bg-primary">
            Buy Now
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RudrakshaTreeLanding;
