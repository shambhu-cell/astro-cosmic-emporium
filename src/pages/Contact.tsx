import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import contactBanner from "@/assets/contact-banner.png";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().max(20, { message: "Phone number must be less than 20 characters" }).optional(),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Here you would send the data to your backend
      // For now, we'll just show a success message
      console.log("Form submitted:", validatedData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Banner */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden">
        <img 
          src={contactBanner} 
          alt="Contact AstroSage - Get in Touch" 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
          <div className="container max-w-screen-xl px-4">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm border-white/20 text-white animate-fade-in">
              <Mail className="w-3 h-3 mr-2 inline" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6 animate-fade-in">
              Questions? Comments? Let us know. We'll get back to you within 24 hours.
            </p>
            <div className="flex gap-4 animate-fade-in">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 -mt-20 relative z-10">
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Send us a Message</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      placeholder="Your full name" 
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea 
                      placeholder="Tell us how we can help you..." 
                      rows={6} 
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    We typically respond within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group cursor-pointer p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg">Address</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          A-139, Sector 63<br />
                          Noida - 201307<br />
                          Uttar Pradesh, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg">Phone</h3>
                        <a href="tel:+919560267006" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                          +91-95602 67006
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg">Email</h3>
                        <a href="mailto:support@astrosage.shop" className="text-muted-foreground hover:text-primary transition-colors break-all">
                          support@astrosage.shop
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg">Opening Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p><span className="font-semibold text-foreground">Mon - Fri:</span> 9:00 AM - 6:00 PM</p>
                          <p><span className="font-semibold text-foreground">Saturday:</span> 9:00 AM - 6:00 PM</p>
                          <p><span className="font-semibold text-foreground">Sunday:</span> Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20">
                <CardContent className="p-8 md:p-10">
                  <h3 className="font-bold text-2xl mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Why Choose AstroSage?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "23+ Years of Trusted Service",
                      "100% Authentic Products",
                      "Expert Astrological Guidance",
                      "Secure Payment Options",
                      "Fast Pan-India Delivery",
                      "Easy Returns & Refunds"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                        <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                        </span>
                        <span className="font-semibold text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <MapPin className="w-3 h-3 mr-2 inline" />
              Find Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Come visit us in person for personalized astrological consultations and to experience our authentic products firsthand.
            </p>
          </div>
          <Card className="shadow-2xl overflow-hidden border-2 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8919234567895!2d77.38123631506175!3d28.618824982422966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AstroSage Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Contact;
