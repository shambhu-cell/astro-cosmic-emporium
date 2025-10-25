import { CreditCard, Landmark, Wallet, Shield, CheckCircle2, HelpCircle, Mail, Phone, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import contactBanner from "@/assets/contact-banner.png";

const Payment = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Credit & Debit Cards",
      description: "All major credit and debit cards issued by Indian banks",
      features: ["Visa", "Mastercard", "RuPay", "American Express"]
    },
    {
      icon: Landmark,
      title: "Net Banking",
      description: "Direct payment from your bank account",
      features: ["All Major Banks", "Instant Processing", "Secure Transfer"]
    },
    {
      icon: Wallet,
      title: "UPI & Wallets",
      description: "Pay using UPI or digital wallets",
      features: ["Google Pay", "PhonePe", "Paytm", "Amazon Pay"]
    },
    {
      icon: FileText,
      title: "Cheque / DD",
      description: "Pay via Cheque or Demand Draft",
      features: ["Order No. Required", "Advance Payment", "Email Confirmation"]
    }
  ];

  const faqs = [
    {
      question: "I am trying to pay through credit card but am getting a transaction failure. What should I do?",
      answer: "In case you do NOT receive any confirmation of payment, you should NOT select the Back/Refresh buttons. In such cases, first check with your bank whether the amount has been debited from your account. Please re-confirm that you are entering the correct 16 digit card number, CVV number, and the correct expiry date. Otherwise please contact our customer care team at customercare@astrosage.com who will send you an electronic bill to make your payment online through credit card without re-entering your order details."
    },
    {
      question: "Do you accept cheques/drafts?",
      answer: "Yes, we accept both. Please ensure that you use a reliable courier service to send your cheque/draft. Once you receive your order confirmation, please write your order number and email ID at the back of the cheque/draft. Once we receive it, you will receive a confirmation e-mail from us. Kindly note that no order is processed unless we receive your payment in advance."
    },
    {
      question: "Do you collect cheques/drafts?",
      answer: "No, as of now we do not have cheque collection facility. You need to courier/post it to our address."
    },
    {
      question: "Do you cash-on-delivery payment option?",
      answer: "No, we do not have cash-on-delivery facility at the moment. All payments must be made in advance."
    },
    {
      question: "Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on AstroSage?",
      answer: "There are zero hidden charges when you make a purchase on AstroSage. The prices listed for all items are final and all-inclusive. Only shipping charge will be levied which will be shown before the order."
    },
    {
      question: "Is it safe to use my credit/debit card on AstroSage?",
      answer: "Yes, it is absolutely safe to use your credit/debit card on AstroSage. We use secure encryption technology provided by trusted payment gateway partners to keep your transaction details confidential at all times. Your card information is never stored on our servers."
    }
  ];

  const securityFeatures = [
    "256-bit SSL Encryption",
    "PCI DSS Compliant",
    "Secure Payment Gateway",
    "No Card Details Stored",
    "Bank-Level Security",
    "Fraud Protection"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src={contactBanner} 
          alt="AstroSage Payment Methods - Safe & Secure" 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
          <div className="container max-w-screen-xl px-4">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in">
              <Shield className="w-3 h-3 mr-2 inline" />
              Secure Payments
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              Payment Methods
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in">
              Multiple secure payment options for your convenience. Your transaction details are always protected.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Introduction */}
      <section className="py-16 px-4 -mt-20 relative z-10">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Safe & Secure Transactions</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    AstroSage offers multiple payment methods for your convenience. Whatever your online mode of payment, 
                    you can rest assured that AstroSage's trusted payment gateway partners use secure encryption technology 
                    to keep your transaction details confidential at all times.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You can pay by all major credit cards and debit cards issued by Indian banks. You can also use 
                    Internet Banking, UPI, and digital wallets to make your purchase.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <CreditCard className="w-3 h-3 mr-2 inline" />
              Payment Options
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Payment Method</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We support multiple payment options to make your shopping experience convenient and secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cheque/DD Information */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Cheque or DD Payment</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Once you receive your order confirmation, please ensure that you clearly write your order number and 
                    email ID at the back of the cheque/draft. Once we receive the same, you will receive a confirmation 
                    e-mail from us. <strong>Kindly note that no order is processed unless we receive your payment in advance.</strong>
                  </p>
                  
                  <div className="bg-background p-6 rounded-lg border-2 border-primary/20">
                    <h4 className="font-bold text-lg mb-3">Within India send to:</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="font-semibold text-foreground">A-139, Sector 63</p>
                      <p className="font-semibold text-foreground">Noida - 201307</p>
                      <p className="font-semibold text-foreground">Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Shield className="w-3 h-3 mr-2 inline" />
              Security
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Security is Our Priority</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use industry-leading security measures to protect your payment information
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-semibold">{feature}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <HelpCircle className="w-3 h-3 mr-2 inline" />
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common payment-related questions
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Payment?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                If you're facing any issues with payment or have questions about your transaction, 
                our customer care team is here to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" asChild className="group">
                  <a href="mailto:customercare@astrosage.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Support
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="group">
                  <a href="tel:+919560267006">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91-95602 67006
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

export default Payment;
