import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Award,
  Clock
} from "lucide-react";
import astrosageLogo from "@/assets/astrosage-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container max-w-screen-2xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={astrosageLogo} 
                  alt="AstroSage Logo" 
                  className="h-10 w-auto brightness-0 invert"
                />
                <div>
                  <h3 className="text-xl font-bold">AstroSage Shop</h3>
                  <p className="text-sm text-background/70">Trusted Since 2001</p>
                </div>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                India's most trusted astrology platform offering authentic gemstones, 
                expert consultations, and spiritual guidance to millions worldwide.
              </p>
              
              {/* Trust Badges */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-xs">Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-xs">Certified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-xs">23+ Years</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-background/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-background/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-background/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-background/10">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/gemstones" className="text-background/80 hover:text-primary transition-colors">Gemstones</a></li>
                <li><a href="/rudraksha" className="text-background/80 hover:text-primary transition-colors">Rudraksha</a></li>
                <li><a href="/bracelets" className="text-background/80 hover:text-primary transition-colors">Bracelets</a></li>
                <li><a href="/mala" className="text-background/80 hover:text-primary transition-colors">Mala</a></li>
                <li><a href="/yantra" className="text-background/80 hover:text-primary transition-colors">Yantras</a></li>
                <li><a href="/" className="text-background/80 hover:text-primary transition-colors">Home</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
              <ul className="space-y-3">
                <li><a href="/contact" className="text-background/80 hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="/refund-policy" className="text-background/80 hover:text-primary transition-colors">Returns & Refunds</a></li>
                <li><a href="/terms-of-service" className="text-background/80 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="/privacy-policy" className="text-background/80 hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-background/80">+91-95602 67006</p>
                    <p className="text-sm text-background/60">Mon-Sat: 9AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-background/80">support@astrosage.shop</p>
                    <p className="text-sm text-background/60">24/7 Email Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-background/80">A-139, Sector 63, Noida - 201307</p>
                    <p className="text-sm text-background/60">Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>

              {/* Download App */}
              <div className="mt-6">
                <h5 className="font-medium mb-3">Download Our App</h5>
                <div className="flex flex-col space-y-2">
                  <div className="bg-background/10 rounded px-3 py-2 text-center">
                    <span className="text-sm">Available on Play Store & App Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Payment Info */}
        <div className="border-t border-background/20 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-medium mb-3">Secure Payments</h5>
              <div className="flex items-center space-x-4">
                <div className="bg-background/10 rounded px-3 py-1 text-xs">VISA</div>
                <div className="bg-background/10 rounded px-3 py-1 text-xs">MasterCard</div>
                <div className="bg-background/10 rounded px-3 py-1 text-xs">RuPay</div>
                <div className="bg-background/10 rounded px-3 py-1 text-xs">UPI</div>
                <div className="bg-background/10 rounded px-3 py-1 text-xs">Net Banking</div>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-3">Security Certifications</h5>
              <div className="flex items-center space-x-4">
                <div className="bg-background/10 rounded px-3 py-1 text-xs">SSL Secured</div>
                <div className="bg-background/10 rounded px-3 py-1 text-xs">256-bit Encryption</div>
                <div className="bg-background/10 rounded px-3 py-1 text-xs">PCI DSS Compliant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/60 mb-4 md:mb-0">
              © 2024 AstroSage Shop. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="/privacy-policy" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="/refund-policy" className="text-background/60 hover:text-primary transition-colors">Refund Policy</a>
              <a href="/contact" className="text-background/60 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;