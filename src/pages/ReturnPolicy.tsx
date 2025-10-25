import { Shield, PackageCheck, AlertCircle, Clock, RotateCcw, CheckCircle2, Mail, FileText, XCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import contactBanner from "@/assets/contact-banner.png";

const ReturnPolicy = () => {
  const productReturns = [
    {
      icon: PackageCheck,
      title: "Damaged/Defective/Broken",
      description: "Products received in damaged, defective, or broken condition are eligible for return"
    },
    {
      icon: AlertCircle,
      title: "Quality & Color Issues",
      description: "Products that don't meet your expectations for quality and color can be returned"
    }
  ];

  const serviceCancellation = [
    {
      icon: Clock,
      title: "Within 2 Hours",
      description: "Any cancellation made within two hours of payment is eligible for refund"
    },
    {
      icon: XCircle,
      title: "Incorrect Data",
      description: "No refund for incorrect data, but you can send correct information within 2 hours"
    },
    {
      icon: FileText,
      title: "After Delivery",
      description: "Once the report is delivered to the customer, no refund shall be made"
    },
    {
      icon: RotateCcw,
      title: "Double Payment",
      description: "In case of double payment by mistake, one payment will be refunded"
    }
  ];

  const returnSteps = [
    {
      step: "1",
      title: "Register Your Dispute",
      description: "Send an email to customercare@astrosage.com with images of broken/defective/damaged products within two working days of delivery. Include your order number in the email."
    },
    {
      step: "2",
      title: "Review Process",
      description: "After we review your return request, you will receive an email with instructions on resolution or return of your item. We will respond within three days."
    },
    {
      step: "3",
      title: "Return Shipping",
      description: "Use an online traceable courier service for returning items. We recommend using a reliable courier service with tracking."
    },
    {
      step: "4",
      title: "Refund Processing",
      description: "Once we receive your returned item, we will process your refund within 7-10 business days to your original payment method."
    }
  ];

  const exceptions = [
    "Products must be returned in original condition with all bills and labels",
    "Return request must be made within 2 working days of delivery",
    "Products damaged due to misuse or negligence are not eligible for return",
    "Customized or personalized products cannot be returned",
    "Products purchased during special sales may have different return policies"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={contactBanner} 
          alt="AstroSage Return Policy - 100% Buyer Protection" 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
          <div className="container max-w-screen-xl px-4">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in">
              <Shield className="w-3 h-3 mr-2 inline" />
              100% Buyer Protection
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              Return Policy
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in">
              Stress-free returns and refunds. We're with you before and after your purchase.
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
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    AstroSage has a friendly return and refund policy to ensure your online purchase is free of stress. 
                    We offer "100% Buyer Protection Program" for our valued customers. We are always with you, before 
                    your purchase and after your purchase. We are not perfect but we have ensured hard that our 
                    refund/return policies do not bring any ugly surprises to you post your purchase.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Returns */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <PackageCheck className="w-3 h-3 mr-2 inline" />
              Product Returns
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Can Be Returned?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our 100% Buyer Protection Program for products allows for easy returns and refunds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {productReturns.map((item, index) => (
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
              All products must be returned in the original condition they were received in along with any bills or labels. 
              Please mention your order number when requesting a return.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Service Cancellation */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <RotateCcw className="w-3 h-3 mr-2 inline" />
              Service Cancellation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Refund & Cancellation Policy for Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our 100% Buyer Protection Program for services has the following policies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCancellation.map((item, index) => (
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

      {/* Return Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <FileText className="w-3 h-3 mr-2 inline" />
              Return Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Raise a Dispute?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to process your return or refund
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {returnSteps.map((item, index) => (
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

      {/* Exceptions */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Important Points to Remember</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {exceptions.map((exception, index) => (
                  <li key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{exception}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Returns?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Customer need to register dispute by sending email to customercare@astrosage.com with images of 
                broken/defective/damaged products within two working days of delivery.
              </p>
              <Button size="lg" asChild className="group">
                <a href="mailto:customercare@astrosage.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Customer Care
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We typically respond within 3 business days
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default ReturnPolicy;
