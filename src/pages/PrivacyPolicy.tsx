import { Shield, Lock, Eye, Database, Users, Mail, Phone, MapPin, FileText, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import contactBanner from "@/assets/contact-banner.png";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          points: [
            "Name, email address, phone number, and shipping address",
            "Payment information (processed securely through our payment partners)",
            "Birth details for astrological consultations (date, time, place of birth)",
            "Account credentials and preferences"
          ]
        },
        {
          subtitle: "Automatically Collected Information",
          points: [
            "IP address, browser type, and device information",
            "Browsing behavior and interaction with our website",
            "Cookies and similar tracking technologies",
            "Purchase history and product preferences"
          ]
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Primary Uses",
          points: [
            "Process and fulfill your orders and consultations",
            "Provide personalized astrological recommendations",
            "Send order confirmations, shipping updates, and customer service communications",
            "Improve our products, services, and website experience",
            "Prevent fraud and maintain security of our platform"
          ]
        },
        {
          subtitle: "Marketing Communications",
          points: [
            "Send promotional offers and newsletters (with your consent)",
            "Inform you about new products and special events",
            "You can opt-out of marketing emails at any time"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "Information Security",
      content: [
        {
          subtitle: "Security Measures",
          points: [
            "SSL encryption for all data transmission",
            "Secure payment processing through PCI DSS compliant partners",
            "Regular security audits and vulnerability assessments",
            "Restricted access to personal information on need-to-know basis",
            "Encrypted storage of sensitive data"
          ]
        },
        {
          subtitle: "Your Responsibility",
          points: [
            "Keep your account credentials confidential",
            "Use strong, unique passwords",
            "Log out of your account after use on shared devices",
            "Notify us immediately of any unauthorized access"
          ]
        }
      ]
    }
  ];

  const additionalSections = [
    {
      icon: Users,
      title: "Information Sharing & Disclosure",
      points: [
        "We never sell your personal information to third parties",
        "Shipping partners receive only necessary delivery information",
        "Payment processors handle financial data per industry standards",
        "Legal authorities may receive information if required by law",
        "Service providers bound by confidentiality agreements"
      ]
    },
    {
      icon: Shield,
      title: "Your Privacy Rights",
      points: [
        "Access and review your personal information",
        "Request correction of inaccurate data",
        "Request deletion of your account and data",
        "Opt-out of marketing communications",
        "Object to certain data processing activities",
        "Request data portability in standard formats"
      ]
    },
    {
      icon: FileText,
      title: "Cookies & Tracking",
      points: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior",
        "Marketing cookies for personalized advertising",
        "You can control cookies through browser settings",
        "Some features may not work without cookies"
      ]
    }
  ];

  const specificPolicies = [
    {
      title: "Astrological Consultations",
      description: "Birth details provided for consultations are kept strictly confidential. Our astrologers are bound by professional ethics and confidentiality agreements. Your astrological data will never be shared publicly or with third parties without explicit consent."
    },
    {
      title: "Children's Privacy",
      description: "Our services are intended for users aged 18 and above. We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal information, please contact us immediately."
    },
    {
      title: "Third-Party Links",
      description: "Our website may contain links to external sites. We are not responsible for the privacy practices of these third-party websites. Please review their privacy policies before providing any information."
    },
    {
      title: "Data Retention",
      description: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Account data is typically retained for 7 years as per legal requirements."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={contactBanner} 
          alt="AstroSage Privacy Policy - Your Data Security" 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
          <div className="container max-w-screen-xl px-4">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in">
              <Shield className="w-3 h-3 mr-2 inline" />
              Your Privacy Matters
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in">
              We are committed to protecting your privacy and handling your data with transparency and care. Learn how we collect, use, and safeguard your information.
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
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Protecting Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    At AstroSage Shop, your privacy is of utmost importance to us. This Privacy Policy explains how we collect, 
                    use, disclose, and safeguard your information when you visit our website and use our services. 
                    By using AstroSage.shop, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>
              </div>
              <Alert className="border-primary/20 bg-primary/5 mt-6">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-base">
                  <strong>Last Updated:</strong> January 2025 • <strong>Effective Date:</strong> January 1, 2025
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <FileText className="w-3 h-3 mr-2 inline" />
              Privacy Details
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Handle Your Data</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive information about our data practices and your privacy rights
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                      <section.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((subsection, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {subsection.subtitle}
                      </h3>
                      <ul className="space-y-2 ml-7">
                        {subsection.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSections.map((section, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Policies */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <AlertCircle className="w-3 h-3 mr-2 inline" />
              Important Information
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specific Privacy Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional policies and practices relevant to our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {specificPolicies.map((policy, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    {policy.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {policy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Changes */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may update our Privacy Policy from time to time to reflect changes in our practices, technology, 
                    legal requirements, or other factors. We will notify you of any material changes by:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Posting the new Privacy Policy on this page with a new \"Last Updated\" date",
                      "Sending an email notification to registered users",
                      "Displaying a prominent notice on our website for 30 days",
                      "Requesting your consent if required by applicable law"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    We encourage you to review this Privacy Policy periodically. Your continued use of our services 
                    after any modifications indicates your acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please don't hesitate to contact us. We're here to help and ensure your privacy is protected.
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
                    Contact Privacy Team
                  </a>
                </Button>
              </div>

              <Alert className="mt-8 border-primary/20 bg-primary/5">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Data Protection Rights:</strong> You have the right to access, correct, or delete your personal information at any time. 
                  Contact us to exercise your privacy rights, and we will respond within 30 days.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
