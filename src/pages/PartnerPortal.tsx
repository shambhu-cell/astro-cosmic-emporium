import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Megaphone, Wallet, Video, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const PartnerPortal = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Partner with AstroSage Shop
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Earn 10% commission for every successful referral
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our astrologer partner program and monetize your expertise by recommending authentic spiritual products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Join Partner Program</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="mailto:support@astrosage.shop">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative product images */}
        <div className="absolute top-10 right-10 opacity-20 animate-float">
          <div className="w-20 h-20 rounded-full bg-primary/30 blur-2xl" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-32 h-32 rounded-full bg-accent/30 blur-2xl" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Join Card */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <UserPlus className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Join</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  It's free and easy to join. Get up and running today.
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Register as an astrologer partner and get instant access to your dashboard with unique referral links.
                </p>
                <Button variant="primary" asChild>
                  <Link to="/contact">Join Now</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Promote Card */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-accent/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Megaphone className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Promote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Choose from our authentic spiritual products to advertise.
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Whether you're a content creator, social media influencer, or practicing astrologer, we provide simple tools to help you monetize.
                </p>
                <Button variant="secondary" disabled>
                  Linking Tools (Coming Soon)
                </Button>
              </CardContent>
            </Card>

            {/* Earn Card */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Earn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Get up to 10% in commissions on successful referrals.
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  Earn commissions from all qualifying purchases, not just the products you advertised. Competitive rates help maximize earnings.
                </p>
                <Button variant="secondary" disabled>
                  View Commissions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Partner Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 rounded-lg bg-card border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Trusted Products</h3>
                <p className="text-sm text-muted-foreground">
                  All products are certified and energized by experienced astrologers
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-card border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Real-time Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your referrals and earnings in real-time dashboard
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-card border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Marketing Materials</h3>
                <p className="text-sm text-muted-foreground">
                  Access to product images, descriptions, and promotional content
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-card border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Timely Payouts</h3>
                <p className="text-sm text-muted-foreground">
                  Monthly commission payouts directly to your bank account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Guides Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Video Guides
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Video className="w-16 h-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>How to Signup</CardTitle>
                <CardDescription>
                  Step-by-step guide to register as a partner
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <Video className="w-16 h-16 text-accent" />
              </div>
              <CardHeader>
                <CardTitle>Setup Referral Links</CardTitle>
                <CardDescription>
                  Learn how to create and share your unique links
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Video className="w-16 h-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Account & Payments</CardTitle>
                <CardDescription>
                  Configure your payment settings and withdraw earnings
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Earning?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join hundreds of astrologers who are already earning commissions by recommending authentic spiritual products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">
                Join Partner Program
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          <p className="text-sm opacity-80 pt-4">
            For any queries: <a href="mailto:support@astrosage.shop" className="underline">support@astrosage.shop</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PartnerPortal;
