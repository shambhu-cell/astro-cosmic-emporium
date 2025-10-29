import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Calendar, MapPin, User, Mail, Phone, Clock, CheckCircle2, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

// Import bracelet images
import aventurineImg from "@/assets/bracelets/aventurine.jpg";
import chakraImg from "@/assets/bracelets/7-chakra.jpg";
import obsidianImg from "@/assets/bracelets/obsidian.jpg";
import tigerEyeImg from "@/assets/bracelets/tiger-eye.jpg";

const calculatorSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(20),
  calculationType: z.enum(["birth", "purpose"], { required_error: "Please select calculation type" }),
  purpose: z.string().optional(),
  birthDate: z.string().min(1, "Birth date is required"),
  birthTime: z.string().optional(),
  birthPlace: z.string().trim().min(2, "Birth place is required").max(200),
  unknownBirthTime: z.boolean().optional(),
});

type CalculatorForm = z.infer<typeof calculatorSchema>;

const purposes = [
  "General",
  "For Stability",
  "For Overall Growth",
  "For Educational Growth",
  "For Enhanced Financial Growth",
  "For Enhanced Business Growth and Concentration",
  "For Great Wealth",
  "For Love and Affection",
  "For Creativity",
  "For Wealth and Prosperity",
  "For Respect, Dignity & Confidence",
  "For Enhanced Mental Health",
  "For Love & Relationship Matters",
  "For Good Decision Making",
  "For Overcoming Deep Overthinking Issues"
];

const braceletGuide = [
  { 
    name: "7 Chakra Bracelet",
    crystal: "Multi-Crystal",
    benefits: "Complete chakra alignment, energy balance, holistic healing",
    description: "Aligns all seven chakras simultaneously, promoting complete energy system harmony and vitality. Perfect for daily chakra healing and meditation.",
    chakra: "All 7 Chakras",
    image: chakraImg
  },
  { 
    name: "Green Aventurine Bracelet",
    crystal: "Green Aventurine",
    benefits: "Good luck, prosperity, emotional calm, confidence",
    description: "Known as the Stone of Opportunity. Attracts luck, prosperity and promotes emotional calm and well-being. Opens heart chakra for giving and receiving.",
    chakra: "Heart Chakra",
    image: aventurineImg
  },
  { 
    name: "Tiger Eye Bracelet",
    crystal: "Tiger Eye",
    benefits: "Courage, confidence, prosperity, mental clarity",
    description: "Stone of courage and confidence. Activates Solar Plexus for personal power, enhances willpower, attracts wealth and provides mental clarity.",
    chakra: "Solar Plexus & Root",
    image: tigerEyeImg
  },
  { 
    name: "Black Obsidian Bracelet",
    crystal: "Black Obsidian",
    benefits: "Protection, grounding, emotional healing, negativity removal",
    description: "Powerful protection stone that shields from negative energy and EMF radiation. Grounds excess energy and transmutes negativity to positive.",
    chakra: "Root Chakra",
    image: obsidianImg
  },
  { 
    name: "Rose Quartz Bracelet",
    crystal: "Rose Quartz",
    benefits: "Love attraction, self-love, emotional healing, compassion",
    description: "Universal stone of unconditional love. Opens Heart Chakra, attracts romance, promotes self-love and heals emotional wounds.",
    chakra: "Heart Chakra",
    image: aventurineImg
  },
  { 
    name: "Amethyst Bracelet",
    crystal: "Amethyst",
    benefits: "Spiritual growth, stress relief, protection, better sleep",
    description: "Activates Crown & Third Eye Chakras. Enhances intuition, calms mind, protects against negative energy and promotes restful sleep.",
    chakra: "Crown & Third Eye",
    image: obsidianImg
  },
  { 
    name: "Citrine Bracelet",
    crystal: "Citrine",
    benefits: "Wealth attraction, manifestation, positive energy, creativity",
    description: "The Merchant's Stone. Powerful manifesting crystal for wealth and prosperity. Promotes joy, enthusiasm and dispels negative energies.",
    chakra: "Solar Plexus",
    image: tigerEyeImg
  },
  { 
    name: "Moonstone Bracelet",
    crystal: "Moonstone",
    benefits: "Intuition, emotional balance, new beginnings, feminine energy",
    description: "Stone of new beginnings and inner growth. Enhances intuition, promotes emotional balance and connects with divine feminine energy.",
    chakra: "Crown & Third Eye",
    image: chakraImg
  }
];

const BraceletCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<CalculatorForm>>({
    calculationType: "birth",
    unknownBirthTime: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CalculatorForm, string>>>({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (field: keyof CalculatorForm, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const requiredFields: (keyof CalculatorForm)[] = [
      "name",
      "email",
      "phone",
      "calculationType",
      "birthDate",
      "birthPlace"
    ];

    if (formData.calculationType === "purpose") {
      requiredFields.push("purpose");
    }

    if (!formData.unknownBirthTime) {
      requiredFields.push("birthTime");
    }

    const dataToValidate = Object.fromEntries(
      requiredFields.map(field => [field, formData[field]])
    );

    try {
      const schema = calculatorSchema.pick(
        Object.fromEntries(requiredFields.map(f => [f, true])) as any
      );
      schema.parse(dataToValidate);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof CalculatorForm, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof CalculatorForm] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please fill all required fields correctly",
          variant: "destructive",
        });
      }
      return false;
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setShowResults(true);
      toast({
        title: "Analysis Complete!",
        description: "Your personalized Bracelet recommendation is ready",
      });
      window.scrollTo({ top: document.getElementById("results")?.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 animate-fade-in">
            <Badge className="mx-auto bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Crystal Healing Powered
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Lucky Bracelet Calculator
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the Bracelet That Unlocks Your Luck, Enhances Your Wisdom, and Aligns Your True Purpose!
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="-mt-4 sm:-mt-8 md:-mt-16 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl border-2 border-primary/10 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-x-0 sm:border-x-2">
            <CardHeader className="px-4 py-4 md:p-6 space-y-2 border-b border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground">
                Lucky Bracelet Calculator
              </CardTitle>
              <p className="text-xs sm:text-sm text-center text-muted-foreground">
                Get personalized bracelet recommendations for luck, prosperity and healing
              </p>
            </CardHeader>

            <CardContent className="px-4 py-6 sm:p-6 md:p-8 lg:p-10 space-y-6">
              {/* Contact Information */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Enter your name
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter Your Name"
                    className={`h-12 text-base ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Enter your email
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Enter Your Email Address"
                    className={`h-12 text-base ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Enter your phone number
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Enter Your Mobile"
                  className={`h-12 text-base ${errors.phone ? 'border-destructive' : ''}`}
                />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
              </div>

              {/* Bracelet Suggestion Type */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  Bracelet Suggestion By
                  <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.calculationType}
                  onValueChange={(value) => handleChange("calculationType", value)}
                >
                  <SelectTrigger className={`h-12 text-base ${errors.calculationType ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Select suggestion type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birth">Birth Chart Analysis</SelectItem>
                    <SelectItem value="purpose">Purpose Based</SelectItem>
                  </SelectContent>
                </Select>
                {errors.calculationType && (
                  <p className="text-xs text-destructive">{errors.calculationType}</p>
                )}
              </div>

              {/* Purpose Selection (conditional) */}
              {formData.calculationType === "purpose" && (
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    Select Purpose
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.purpose}
                    onValueChange={(value) => handleChange("purpose", value)}
                  >
                    <SelectTrigger className={`h-12 text-base ${errors.purpose ? 'border-destructive' : ''}`}>
                      <SelectValue placeholder="Select your purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      {purposes.map((purpose) => (
                        <SelectItem key={purpose} value={purpose}>
                          {purpose}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.purpose && <p className="text-xs text-destructive">{errors.purpose}</p>}
                </div>
              )}

              {/* Birth Information */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="birthDate" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Enter your birth date
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate || ""}
                    onChange={(e) => handleChange("birthDate", e.target.value)}
                    className={`h-12 text-base ${errors.birthDate ? 'border-destructive' : ''}`}
                  />
                  {errors.birthDate && <p className="text-xs text-destructive">{errors.birthDate}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="birthTime" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Enter your birth time
                    {!formData.unknownBirthTime && <span className="text-destructive">*</span>}
                  </Label>
                  <Input
                    id="birthTime"
                    type="time"
                    value={formData.birthTime || ""}
                    onChange={(e) => handleChange("birthTime", e.target.value)}
                    disabled={formData.unknownBirthTime}
                    className={`h-12 text-base ${errors.birthTime ? 'border-destructive' : ''} ${formData.unknownBirthTime ? 'opacity-50' : ''}`}
                  />
                  {errors.birthTime && !formData.unknownBirthTime && (
                    <p className="text-xs text-destructive">{errors.birthTime}</p>
                  )}
                </div>
              </div>

              {/* Unknown Birth Time Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="unknownBirthTime"
                  checked={formData.unknownBirthTime}
                  onCheckedChange={(checked) => handleChange("unknownBirthTime", checked as boolean)}
                />
                <Label
                  htmlFor="unknownBirthTime"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  I don&apos;t know the birth time
                </Label>
              </div>

              {/* Birth Place */}
              <div className="space-y-3">
                <Label htmlFor="birthPlace" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Enter your birth place
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="birthPlace"
                  value={formData.birthPlace || ""}
                  onChange={(e) => handleChange("birthPlace", e.target.value)}
                  placeholder="Enter Birth Place Here"
                  className={`h-12 text-base ${errors.birthPlace ? 'border-destructive' : ''}`}
                />
                {errors.birthPlace && <p className="text-xs text-destructive">{errors.birthPlace}</p>}
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Get Your Bracelet Recommendation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section id="results" className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-24 animate-fade-in">
          <div className="container mx-auto max-w-6xl space-y-8">
            <div className="text-center space-y-4">
              <Badge className="mx-auto bg-primary text-primary-foreground">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                Your Personalized Recommendation
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Recommended Bracelets for You
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Based on {formData.calculationType === "birth" ? "your birth chart analysis" : "your selected purpose"}
              </p>
            </div>

            {/* Bracelet Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {braceletGuide.map((bracelet) => (
                <Card key={bracelet.name} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                    <img
                      src={bracelet.image}
                      alt={bracelet.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {bracelet.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-primary" />
                      <p className="text-sm text-muted-foreground">{bracelet.crystal}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground min-w-[60px]">Chakra:</span>
                        <span className="text-muted-foreground">{bracelet.chakra}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground min-w-[60px]">Benefits:</span>
                        <span className="text-muted-foreground">{bracelet.benefits}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t">
                      {bracelet.description}
                    </p>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary/30 to-accent/10">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Our Bracelet Calculator?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the power of crystal healing combined with personalized recommendations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "21+ Years Expertise",
                description: "Two decades of experience in crystal healing and energy work, trusted by 50 million+ customers worldwide"
              },
              {
                title: "Authentic Crystals",
                description: "100% natural, AAA grade crystals sourced directly from trusted suppliers with lab certification"
              },
              {
                title: "Personalized Analysis",
                description: "Advanced recommendations based on your birth chart or specific life purpose and goals"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
            <CardContent className="p-8 sm:p-12 text-center space-y-6">
              <Badge className="mx-auto bg-primary text-primary-foreground">
                <Sparkles className="w-4 h-4 mr-1" />
                Still Confused?
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Get Expert Crystal Healing Consultation
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                With AstroSage&apos;s trusted crystal healing consultation, get personalized guidance on choosing the perfect bracelet for your energy and goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
                <Badge variant="outline" className="border-primary/20">One-on-One</Badge>
                <Badge variant="outline" className="border-primary/20">15 Minutes</Badge>
                <Badge variant="outline" className="border-primary/20">100% Personalized</Badge>
                <Badge variant="outline" className="border-primary/20 bg-primary/10">₹699 Only</Badge>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-base font-semibold h-12 px-8">
                Book Your Consultation Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BraceletCalculator;
