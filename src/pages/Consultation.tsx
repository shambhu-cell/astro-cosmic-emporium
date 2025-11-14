import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  CheckCircle, 
  Star, 
  Shield, 
  Users, 
  Calendar,
  Sparkles
} from "lucide-react";
import consultationImg from "@/assets/consultation.jpg";

interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  consultationType: "gemstone" | "rudraksha" | "both";
  concerns: string;
}

const Consultation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ConsultationForm>({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    consultationType: "both",
    concerns: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.dateOfBirth) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Store in localStorage for now
      const consultations = JSON.parse(localStorage.getItem("consultations") || "[]");
      consultations.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        id: Date.now().toString(),
      });
      localStorage.setItem("consultations", JSON.stringify(consultations));

      toast({
        title: "Consultation Request Submitted! 🎉",
        description: "Our expert will contact you within 24 hours",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        timeOfBirth: "",
        placeOfBirth: "",
        consultationType: "both",
        concerns: "",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Gemstone & Rudraksha Consultation | Expert Astrology Guidance</title>
        <meta 
          name="description" 
          content="Get free personalized gemstone and rudraksha consultation from certified astrologers. Discover the right stones for your birth chart and life goals." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span>100% Free Consultation</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Personalized Gemstone & Rudraksha Consultation
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover the perfect gemstones and rudraksha beads aligned with your birth chart. 
                  Get expert guidance from certified Vedic astrologers completely free.
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Certified Astrologers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">24hr Response Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Personalized Report</span>
                  </div>
                </div>

                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>info@astroshaktivedicgems.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={consultationImg}
                  alt="Gemstone and Rudraksha Consultation"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">5000+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 border-y border-border bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Authentic Stones</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Consultations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Book Your Free Consultation
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill in your details below and our expert astrologer will prepare a personalized report for you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-xl border border-border">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-2"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Birth Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="dateOfBirth" className="text-foreground">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeOfBirth" className="text-foreground">Time of Birth</Label>
                    <Input
                      id="timeOfBirth"
                      name="timeOfBirth"
                      type="time"
                      value={formData.timeOfBirth}
                      onChange={handleInputChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="placeOfBirth" className="text-foreground">Place of Birth</Label>
                    <Input
                      id="placeOfBirth"
                      name="placeOfBirth"
                      value={formData.placeOfBirth}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <Label className="text-foreground mb-3 block">Consultation Type *</Label>
                  <RadioGroup
                    value={formData.consultationType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, consultationType: value as any }))
                    }
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                      <RadioGroupItem value="gemstone" id="gemstone" />
                      <Label htmlFor="gemstone" className="cursor-pointer flex-1">Gemstone Only</Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                      <RadioGroupItem value="rudraksha" id="rudraksha" />
                      <Label htmlFor="rudraksha" className="cursor-pointer flex-1">Rudraksha Only</Label>
                    </div>
                    <div className="flex items-center space-x-2 border border-border rounded-lg p-4 cursor-pointer hover:bg-accent transition-colors">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both" className="cursor-pointer flex-1">Both</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Concerns */}
                <div>
                  <Label htmlFor="concerns" className="text-foreground">
                    Your Concerns / Questions (Optional)
                  </Label>
                  <Textarea
                    id="concerns"
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleInputChange}
                    placeholder="Tell us about your life challenges, goals, or specific areas you'd like guidance on..."
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  . We respect your privacy and never share your information.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What You'll Receive
              </h2>
              <p className="text-lg text-muted-foreground">
                Our comprehensive consultation includes everything you need
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-background p-6 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Birth Chart Analysis</h3>
                <p className="text-muted-foreground">
                  Detailed analysis of your planetary positions and their influence on your life
                </p>
              </div>

              <div className="bg-background p-6 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Stone Recommendations</h3>
                <p className="text-muted-foreground">
                  Personalized gemstone and rudraksha recommendations based on your chart
                </p>
              </div>

              <div className="bg-background p-6 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Wearing Instructions</h3>
                <p className="text-muted-foreground">
                  Complete guidance on how, when, and where to wear your recommended stones
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Consultation;
