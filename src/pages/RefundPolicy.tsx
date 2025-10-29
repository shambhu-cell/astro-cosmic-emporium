import { Shield, PackageCheck, AlertCircle, Clock, RotateCcw, CheckCircle2, Mail, FileText, XCircle, Info, Phone, MapPin, Banknote, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import contactBanner from "@/assets/contact-banner.png";

const RefundPolicy = () => {
  const returnEligibility = [
    {
      icon: PackageCheck,
      title: "Damaged or Defective Products",
      description: "Products received in damaged, defective, or broken condition are eligible for full refund or replacement",
      timeframe: "Within 48 hours"
    },
    {
      icon: AlertCircle,
      title: "Quality Issues",
      description: "Products that don't meet quality expectations or have manufacturing defects",
      timeframe: "Within 7 days"
    },
    {
      icon: XCircle,
      title: "Wrong Item Delivered",
      description: "If you receive the wrong product, we'll arrange for return and send the correct item",
      timeframe: "Within 48 hours"
    }
  ];

  const nonReturnableItems = [
    "Energized and blessed products (Yantras, Malas that have been specially consecrated)",
    "Personalized or custom-made items with your name or custom specifications",
    "Products that have been used, worn, or altered after delivery",
    "Items marked as 'Final Sale' or 'Non-Returnable' at the time of purchase",
    "Gift cards, vouchers, and consultation services already availed",
    "Products returned without original packaging, labels, or certificate of authenticity"
  ];

  const refundProcess = [
    {
      step: "1",
      title: "Contact Customer Support",
      description: "Email support@astrosage.shop with order number, photos of defective/damaged items, and reason for return within the eligible timeframe."
    },
    {
      step: "2",
      title: "Return Authorization",
      description: "Our team will review your request within 3 business days and provide return authorization with shipping instructions if approved."
    },
    {
      step: "3",
      title: "Ship Your Return",
      description: "Pack the item securely in original packaging and ship to provided address using a trackable courier service within 3 days of authorization."
    },
    {
      step: "4",
      title: "Inspection & Processing",
      description: "Once we receive your return, our team will inspect the item. Approved refunds are processed within 7-10 business days to your original payment method."
    }
  ];

  const cancellationPolicy = [
    {
      icon: Clock,
      title: "Before Shipment",
      description: "Free cancellation if order hasn't been processed yet. Full refund within 3-5 business days."
    },
    {
      icon: PackageCheck,
      title: "After Shipment",
      description: "Once shipped, you'll need to follow the return process upon delivery. Standard return policy applies."
    },
    {
      icon: RefreshCw,
      title: "Consultation Services",
      description: "Cancel within 2 hours of payment for full refund. After consultation delivery, no refunds."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={contactBanner} 
          alt="AstroSage Return & Refund Policy" 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
          <div className="container max-w-screen-xl px-4">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in">
              <Shield className="w-3 h-3 mr-2 inline" />
              100% Buyer Protection
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              Return & Refund Policy
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in">
              Hassle-free returns and transparent refunds. Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 -mt-20 relative z-10">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">100% Buyer Protection Program</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    At AstroSage, we want you to be completely satisfied with your purchase. Our Return and Refund Policy 
                    is designed to provide a stress-free shopping experience. We offer a comprehensive buyer protection 
                    program that covers you before and after your purchase.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    This policy outlines our procedures for returns, exchanges, refunds, and cancellations. We believe in 
                    transparency and fairness, ensuring there are no surprises after your purchase.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Return Eligibility */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <PackageCheck className="w-3 h-3 mr-2 inline" />
              Return Eligibility
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Can Be Returned?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We accept returns for products that meet the following criteria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {returnEligibility.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{item.timeframe}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="border-primary/20 bg-primary/5">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-base">
              <strong>Important:</strong> All returned products must be in original condition with all bills, labels, 
              and certificates of authenticity. Please include your order number when requesting a return.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Non-Returnable Items */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <XCircle className="w-3 h-3 mr-2 inline" />
              Exclusions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Non-Returnable Items</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The following items cannot be returned due to hygiene, customization, or spiritual reasons
            </p>
          </div>

          <Card className="shadow-xl border-2 border-primary/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {nonReturnableItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <FileText className="w-3 h-3 mr-2 inline" />
              Refund Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Get Your Refund</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to process your return and receive your refund
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {refundProcess.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <RotateCcw className="w-3 h-3 mr-2 inline" />
              Cancellation Policy
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Order Cancellation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understand our cancellation policies for products and services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cancellationPolicy.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Timeline */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Refund Timeline & Processing</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Processing Time</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once we receive and inspect your returned item, refunds are processed within <strong>7-10 business days</strong>. 
                    You will receive an email notification once the refund has been approved.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Refunds are issued to your <strong>original payment method</strong>. Please allow additional time for your 
                    bank or credit card company to process and post the refund to your account (typically 3-7 business days).
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Partial Refunds</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Partial refunds may be granted for:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Items with obvious signs of use or wear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Items returned more than 7 days after delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Items not in original condition or missing parts not due to our error</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shipping Costs */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/10 bg-gradient-to-br from-secondary/10 to-background">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <PackageCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Return Shipping Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Free Return Shipping
                  </h3>
                  <p className="text-muted-foreground">
                    We provide prepaid return shipping for:
                  </p>
                  <ul className="mt-3 space-y-2 ml-6">
                    <li className="text-sm text-muted-foreground">• Defective or damaged products</li>
                    <li className="text-sm text-muted-foreground">• Wrong items delivered</li>
                    <li className="text-sm text-muted-foreground">• Manufacturing defects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Customer Paid Shipping
                  </h3>
                  <p className="text-muted-foreground">
                    You are responsible for return shipping costs for:
                  </p>
                  <ul className="mt-3 space-y-2 ml-6">
                    <li className="text-sm text-muted-foreground">• Change of mind returns</li>
                    <li className="text-sm text-muted-foreground">• Size or fit issues</li>
                    <li className="text-sm text-muted-foreground">• Personal preference changes</li>
                  </ul>
                </div>
              </div>
              <Alert className="mt-6 border-primary/20 bg-primary/5">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  We recommend using a trackable shipping service. AstroSage is not responsible for items lost or 
                  damaged during return shipment without tracking.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Returns or Refunds?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our customer support team is here to help with any questions about returns, refunds, or exchanges.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <a href="mailto:support@astrosage.shop" className="text-primary hover:underline text-sm">
                      support@astrosage.shop
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">Response within 3 business days</p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <a href="tel:+919560267006" className="text-primary hover:underline text-sm">
                      +91-95602 67006
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">Mon-Sat, 9 AM - 6 PM IST</p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      A-139, Sector 63<br />
                      Noida - 201307, India
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" asChild className="group">
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Customer Care
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <p className="text-center text-sm text-muted-foreground">
            Last Updated: January 2025 • This policy is subject to change without prior notice
          </p>
        </div>
      </section>
    </main>
  );
};

export default RefundPolicy;
