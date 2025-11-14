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
    if (!formData.name || !formData.dateOfBirth) {
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
        <section className="relative py-8 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 hover-scale">
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                  <span>100% Free Consultation</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 lg:mb-6 leading-tight">
                  Personalized Gemstone & Rudraksha Consultation
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                  Discover the perfect gemstones and rudraksha beads aligned with your birth chart. 
                  Get expert guidance from certified Vedic astrologers completely free.
                </p>
                
                <div className="flex flex-col gap-3 mb-4 md:mb-6 lg:mb-8">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-foreground">Certified Astrologers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-foreground">5 hrs Response Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-foreground">Personalized Report</span>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in mt-6 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl" />
                <img
                  src={consultationImg}
                  alt="Expert astrologer providing gemstone and rudraksha consultation based on birth chart analysis"
                  className="rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl md:shadow-2xl w-full h-auto relative z-10 hover-scale transition-transform duration-500"
                />
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-card p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl shadow-lg md:shadow-xl border border-border z-20 animate-scale-in">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-primary/10 p-1.5 sm:p-2 md:p-3 rounded-full flex-shrink-0">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">5000+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-6 md:py-10 lg:py-12 border-y border-border bg-gradient-to-r from-card/30 via-card/50 to-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <div className="text-center group cursor-default animate-fade-in">
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-2 sm:p-3 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-0.5 md:mb-1">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground px-2">Authentic Stones</div>
              </div>
              <div className="text-center group cursor-default animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-2 sm:p-3 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-0.5 md:mb-1">4.9/5</div>
                <div className="text-xs sm:text-sm text-muted-foreground px-2">Customer Rating</div>
              </div>
              <div className="text-center group cursor-default animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-2 sm:p-3 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-0.5 md:mb-1">21+</div>
                <div className="text-xs sm:text-sm text-muted-foreground px-2">Years Experience</div>
              </div>
              <div className="text-center group cursor-default animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-2 sm:p-3 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-0.5 md:mb-1">47000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground px-2">Consultations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-8 md:py-16 lg:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="text-center mb-6 md:mb-10 lg:mb-12 animate-fade-in">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 px-4">
                Book Your Free Consultation
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Fill in your details below and our expert astrologer will prepare a personalized report for you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-border backdrop-blur-sm animate-scale-in">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {/* Name */}
                <div className="animate-fade-in">
                  <Label htmlFor="name" className="text-foreground font-medium text-sm md:text-base">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-1.5 md:mt-2 h-10 sm:h-11 md:h-12 text-sm md:text-base"
                  />
                </div>

                {/* Birth Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div>
                    <Label htmlFor="dateOfBirth" className="text-foreground font-medium text-sm md:text-base">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="mt-1.5 md:mt-2 h-10 sm:h-11 md:h-12 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeOfBirth" className="text-foreground font-medium text-sm md:text-base">Time of Birth</Label>
                    <Input
                      id="timeOfBirth"
                      name="timeOfBirth"
                      type="time"
                      value={formData.timeOfBirth}
                      onChange={handleInputChange}
                      className="mt-1.5 md:mt-2 h-10 sm:h-11 md:h-12 text-sm md:text-base"
                    />
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <Label htmlFor="placeOfBirth" className="text-foreground font-medium text-sm md:text-base">Place of Birth</Label>
                    <Input
                      id="placeOfBirth"
                      name="placeOfBirth"
                      value={formData.placeOfBirth}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="mt-1.5 md:mt-2 h-10 sm:h-11 md:h-12 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Consultation Type */}
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <Label className="text-foreground font-medium mb-2 md:mb-3 block text-sm md:text-base">Consultation Type *</Label>
                  <RadioGroup
                    value={formData.consultationType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, consultationType: value as any }))
                    }
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4"
                  >
                    <div className="flex items-center space-x-2 border-2 border-border rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4 cursor-pointer hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
                      <RadioGroupItem value="gemstone" id="gemstone" />
                      <Label htmlFor="gemstone" className="cursor-pointer flex-1 text-xs sm:text-sm md:text-base">Gemstone Only</Label>
                    </div>
                    <div className="flex items-center space-x-2 border-2 border-border rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4 cursor-pointer hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
                      <RadioGroupItem value="rudraksha" id="rudraksha" />
                      <Label htmlFor="rudraksha" className="cursor-pointer flex-1 text-xs sm:text-sm md:text-base">Rudraksha Only</Label>
                    </div>
                    <div className="flex items-center space-x-2 border-2 border-border rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4 cursor-pointer hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 sm:col-span-3 lg:col-span-1">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both" className="cursor-pointer flex-1 text-xs sm:text-sm md:text-base">Both</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Concerns */}
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <Label htmlFor="concerns" className="text-foreground font-medium text-sm md:text-base">
                    Your Concerns / Questions (Optional)
                  </Label>
                  <Textarea
                    id="concerns"
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleInputChange}
                    placeholder="Tell us about your life challenges, goals, or specific areas you'd like guidance on..."
                    rows={4}
                    className="mt-1.5 md:mt-2 resize-none text-sm md:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-semibold hover-scale animate-fade-in"
                  style={{ animationDelay: '0.5s' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Submitting...
                    </span>
                  ) : (
                    "Get Free Consultation"
                  )}
                </Button>

                <p className="text-xs sm:text-sm text-center text-muted-foreground animate-fade-in px-2" style={{ animationDelay: '0.6s' }}>
                  By submitting this form, you agree to our{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </Link>
                  . We respect your privacy and never share your information.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-10 lg:mb-12 animate-fade-in">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4 px-4">
                What You'll Receive
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Our comprehensive consultation includes everything you need
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in group">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 md:mb-3">Birth Chart Analysis</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Detailed analysis of your planetary positions and their influence on your life
                </p>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 md:mb-3">Stone Recommendations</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  Personalized gemstone and rudraksha recommendations based on your chart
                </p>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in group sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 md:mb-3">Wearing Instructions</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
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
