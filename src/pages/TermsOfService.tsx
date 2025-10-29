import { FileText, ShieldCheck, CreditCard, Package, RefreshCw, Scale, AlertTriangle, User, Mail, Phone, MapPin, CheckCircle2, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import contactBanner from "@/assets/contact-banner.png";

const TermsOfService = () => {
  const terms = [
    {
      icon: ShieldCheck,
      title: "Acceptance of Terms",
      content: "By accessing or using AstroSage.shop, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services."
    },
    {
      icon: User,
      title: "Use of Services",
      points: [
        "You must be at least 18 years old to make purchases on our website",
        "You agree to provide accurate and complete information when placing orders",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You agree not to use our services for any illegal or unauthorized purpose"
      ]
    },
    {
      icon: Package,
      title: "Product Information",
      content: "We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice."
    },
    {
      icon: CreditCard,
      title: "Pricing and Payment",
      points: [
        "All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated",
        "We reserve the right to change prices at any time without prior notice",
        "Payment must be received before order processing begins",
        "We accept various payment methods including credit cards, debit cards, UPI, and net banking"
      ]
    },
    {
      icon: Package,
      title: "Order Processing and Delivery",
      points: [
        "We process orders within 1-2 business days of payment confirmation",
        "Delivery times vary based on location and product availability",
        "We are not responsible for delays caused by courier services or factors beyond our control",
        "Risk of loss and title for items pass to you upon delivery to the carrier"
      ]
    },
    {
      icon: RefreshCw,
      title: "Returns and Refunds",
      content: "Please refer to our Return and Refund Policy for detailed information about returns, exchanges, and refunds. Certain products may not be eligible for returns due to their nature."
    }
  ];

  const legalTerms = [
    {
      icon: AlertTriangle,
      title: "Astrological Services Disclaimer",
      content: "Astrological consultations and predictions are provided for entertainment and informational purposes only. We do not guarantee specific outcomes or results. You should not rely solely on astrological advice for important life decisions."
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: "All content on this website, including text, images, logos, and graphics, is the property of AstroSage Shop or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission."
    },
    {
      icon: ShieldCheck,
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, AstroSage Shop shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services."
    },
    {
      icon: Scale,
      title: "Indemnification",
      content: "You agree to indemnify and hold harmless AstroSage Shop, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation of these Terms."
    }
  ];

  const additionalInfo = [
    {
      icon: RefreshCw,
      title: "Modifications to Terms",
      content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms."
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={contactBanner} 
          alt="AstroSage Terms of Service - Legal Guidelines" 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
          <div className="container max-w-screen-xl px-4">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in">
              <FileText className="w-3 h-3 mr-2 inline" />
              Legal Agreement
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in">
              Please read these terms carefully before using our services. Your use of AstroSage.shop constitutes acceptance of these terms.
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
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to AstroSage Shop</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    By accessing and using our website, you accept and agree to be bound by the terms and provisions of this agreement. 
                    These Terms of Service govern your use of AstroSage.shop, including all products, services, and content available through 
                    the website. Please read these terms carefully before proceeding.
                  </p>
                </div>
              </div>
              <Alert className="border-primary/20 bg-primary/5 mt-6">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-base">
                  Last Updated: January 2025
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Terms */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <FileText className="w-3 h-3 mr-2 inline" />
              Service Terms
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Terms and Conditions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding your rights and responsibilities when using our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {terms.map((term, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <term.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{term.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {term.content && (
                    <p className="text-muted-foreground leading-relaxed">{term.content}</p>
                  )}
                  {term.points && (
                    <ul className="space-y-3">
                      {term.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Terms */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Scale className="w-3 h-3 mr-2 inline" />
              Legal Information
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Liability & Protection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Important legal disclaimers and protections for both parties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {legalTerms.map((term, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <term.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3">{term.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{term.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {additionalInfo.map((info, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3">{info.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{info.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About Our Terms?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service, please don't hesitate to contact us. 
                  We're here to help clarify any concerns you may have.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Email Us</h3>
                    <a href="mailto:support@astrosage.shop" className="text-primary hover:underline">
                      support@astrosage.shop
                    </a>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Call Us</h3>
                    <a href="tel:+919560267006" className="text-primary hover:underline">
                      +91-95602 67006
                    </a>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">
                      A-139, Sector 63<br />Noida - 201307, India
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" asChild className="group">
                  <a href="mailto:support@astrosage.shop">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Support
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;