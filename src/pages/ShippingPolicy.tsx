import { Helmet } from "react-helmet";
import { Truck, Clock, MapPin, Package, Shield, Phone, CheckCircle, AlertCircle } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Shipping Policy | AstroSage Shop - Free Shipping on Gemstones & Rudraksha</title>
        <meta name="description" content="AstroSage Shop shipping policy. Free shipping across India on orders above ₹999. Secure packaging for gemstones, rudraksha & spiritual products. Delivery in 3-7 business days." />
        <link rel="canonical" href="https://astrosage.shop/shipping-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Banner */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4 text-center">
            <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Shipping Policy</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We ensure safe, secure, and timely delivery of all your spiritual products across India and worldwide.
            </p>
          </div>
        </section>

        <div className="container max-w-screen-xl mx-auto px-4 py-12">
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders above ₹999" },
              { icon: Clock, title: "3-7 Business Days", desc: "Domestic delivery" },
              { icon: Shield, title: "Insured Shipping", desc: "All orders are insured" },
              { icon: Package, title: "Secure Packaging", desc: "Tamper-proof packing" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {/* Domestic Shipping */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Domestic Shipping (Within India)
              </h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">Order Value</th>
                      <th className="text-left p-4 font-semibold text-foreground">Shipping Charge</th>
                      <th className="text-left p-4 font-semibold text-foreground">Delivery Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 text-foreground">Above ₹999</td>
                      <td className="p-4 text-primary font-semibold">FREE</td>
                      <td className="p-4 text-muted-foreground">3-7 Business Days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">Below ₹999</td>
                      <td className="p-4 text-muted-foreground">₹99</td>
                      <td className="p-4 text-muted-foreground">3-7 Business Days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">Express Delivery</td>
                      <td className="p-4 text-muted-foreground">₹199</td>
                      <td className="p-4 text-muted-foreground">1-3 Business Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                * Metro cities (Delhi NCR, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata) typically receive orders within 3-4 business days. Remote areas may take up to 7-10 business days.
              </p>
            </section>

            {/* International Shipping */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                International Shipping
              </h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">Region</th>
                      <th className="text-left p-4 font-semibold text-foreground">Shipping Charge</th>
                      <th className="text-left p-4 font-semibold text-foreground">Delivery Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 text-foreground">USA, UK, Canada, Australia</td>
                      <td className="p-4 text-muted-foreground">₹499 – ₹999</td>
                      <td className="p-4 text-muted-foreground">7-14 Business Days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">Middle East (UAE, Saudi Arabia)</td>
                      <td className="p-4 text-muted-foreground">₹399 – ₹799</td>
                      <td className="p-4 text-muted-foreground">5-10 Business Days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-foreground">Rest of World</td>
                      <td className="p-4 text-muted-foreground">₹699 – ₹1,499</td>
                      <td className="p-4 text-muted-foreground">10-21 Business Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                * International shipping charges may vary based on weight and destination. Customs duties and import taxes, if any, are the responsibility of the buyer.
              </p>
            </section>

            {/* Packaging */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Package className="h-6 w-6 text-primary" />
                Secure Packaging
              </h2>
              <div className="bg-primary/5 rounded-xl p-6 space-y-3">
                {[
                  "Gemstones are packed in velvet pouches inside cushioned boxes to prevent damage.",
                  "Rudraksha beads are wrapped in silk cloth with protective foam padding.",
                  "Yantras and paintings are shipped in rigid corrugated boxes with bubble wrap.",
                  "All packages are tamper-proof sealed with AstroSage Shop security tape.",
                  "Every order includes a lab certificate, energization certificate, and invoice.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-foreground text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Order Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Order Processing & Tracking
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  <strong className="text-foreground">Order Processing:</strong> All orders are processed within 24-48 hours of payment confirmation. For energized (pran-pratishthit) products, processing may take an additional 1-2 days as our pandits perform the necessary rituals.
                </p>
                <p>
                  <strong className="text-foreground">Tracking Information:</strong> Once your order is dispatched, you will receive an SMS and email with the tracking number and courier partner details. You can track your shipment in real-time using the provided link.
                </p>
                <p>
                  <strong className="text-foreground">Shipping Partners:</strong> We ship through trusted courier services including BlueDart, DTDC, Delhivery, and India Post for domestic orders. International orders are shipped via DHL, FedEx, or India Post EMS.
                </p>
              </div>
            </section>

            {/* Important Notes */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                Important Information
              </h2>
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                {[
                  "Delivery dates are estimates and may vary due to unforeseen circumstances like weather, strikes, or courier delays.",
                  "For Cash on Delivery (COD) orders, an additional ₹49 COD handling fee applies.",
                  "P.O. Box addresses are not accepted for shipping. Please provide a complete physical address.",
                  "If no one is available to receive the order, the courier will attempt delivery up to 3 times before returning the package.",
                  "For high-value orders (above ₹25,000), signature confirmation is required at the time of delivery.",
                  "We are not responsible for delays caused by incorrect or incomplete address details provided by the customer.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <p className="text-muted-foreground text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-xl p-8 text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl font-bold text-foreground mb-2">Have Questions About Your Shipment?</h2>
              <p className="text-muted-foreground mb-4 text-sm">Our support team is here to help you track and resolve any shipping concerns.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm">
                  Contact Support
                </a>
                <a href="https://wa.me/919560267006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-border bg-card text-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-accent transition-colors text-sm">
                  WhatsApp Us
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
