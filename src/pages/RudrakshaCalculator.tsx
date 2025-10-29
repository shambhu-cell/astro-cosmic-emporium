import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Calendar, MapPin, User, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

// Import rudraksha images
import oneMukhiSrc from "@/assets/rudraksha/1-mukhi.jpg";
import threeMukhiSrc from "@/assets/rudraksha/3-mukhi.jpg";
import fourMukhiSrc from "@/assets/rudraksha/4-mukhi.jpg";

const calculatorSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(20),
  calculationType: z.enum(["birth", "purpose"], { required_error: "Please select calculation type" }),
  purpose: z.string().optional(),
  birthDate: z.string().min(1, "Birth date is required"),
  birthTime: z.string().optional(),
  unknownBirthTime: z.boolean().optional(),
});

type CalculatorForm = z.infer<typeof calculatorSchema>;

const purposes = [
  "General",
  "For Stability",
  "For Overall Growth",
  "For Educational Growth",
  "For Enhanced Financial Growth",
  "For Enhanced Business Growth",
  "For Enhanced Concentration",
  "For Respect, Dignity & Confidence",
  "For Enhanced Mental Health",
  "For Luxury",
  "For Love & Relationship Matters",
  "For Overcoming Delay in Pregnancy",
  "For Good Decision Making",
  "For Eliminating Legal Matters",
  "For Overcoming Deep Overthinking Issues",
  "For Great Wealth",
  "For Success in Real Estate",
  "For Love and Affection",
  "For Creativity",
  "For Wealth and Prosperity",
];

const rudrakshaGuide = [
  { 
    name: "1 Mukhi Rudraksha", 
    hindi: "एक मुखी रुद्राक्ष", 
    deity: "Lord Shiva",
    planet: "Sun",
    benefits: "Liberation, spiritual growth, peace, prosperity",
    image: oneMukhiSrc 
  },
  { 
    name: "3 Mukhi Rudraksha", 
    hindi: "तीन मुखी रुद्राक्ष", 
    deity: "Lord Agni",
    planet: "Mars",
    benefits: "Courage, self-confidence, health improvement",
    image: threeMukhiSrc 
  },
  { 
    name: "4 Mukhi Rudraksha", 
    hindi: "चार मुखी रुद्राक्ष", 
    deity: "Lord Brahma",
    planet: "Mercury",
    benefits: "Knowledge, focus, academic excellence, stability",
    image: fourMukhiSrc 
  },
];

const RudrakshaCalculator = () => {
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
        description: "Your personalized Rudraksha recommendation is ready",
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
              Vedic Astrology Powered
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Rudraksha Calculator
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Know which Rudraksha is the key to good fortune for you as per Birth Chart
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
                Lucky Rudraksha Calculator
              </CardTitle>
              <p className="text-xs sm:text-sm text-center text-muted-foreground">
                Get personalized Rudraksha recommendations based on Vedic astrology
              </p>
            </CardHeader>

            <CardContent className="px-4 py-6 sm:p-6 md:p-8 lg:p-10 space-y-6">
              {/* Calculation Type Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  Rudraksha Suggestion By
                  <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.calculationType}
                  onValueChange={(value) => handleChange("calculationType", value)}
                >
                  <SelectTrigger className={`h-12 text-base ${errors.calculationType ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Select calculation type" />
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

              {/* Contact Information */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Name
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className={`h-12 text-base ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className={`h-12 text-base ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Enter your mobile number"
                  className={`h-12 text-base ${errors.phone ? 'border-destructive' : ''}`}
                />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
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
                    Date of Birth
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
                    Birth Time
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
                  I don't know the birth time
                </Label>
              </div>

              {/* Info Note */}
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Note:</strong>{" "}
                  {formData.calculationType === "birth"
                    ? "Our recommended Rudraksha selection is based on your planetary positions—find your perfect fit."
                    : "Our recommended Rudraksha selection is based on your purpose—find your perfect fit."}
                </p>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Get Your Rudraksha Recommendation
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
                Recommended Rudraksha for You
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Based on {formData.calculationType === "birth" ? "your birth chart analysis" : "your selected purpose"}
              </p>
            </div>

            {/* Rudraksha Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rudrakshaGuide.map((rudraksha) => (
                <Card key={rudraksha.name} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/20">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                    <img
                      src={rudraksha.image}
                      alt={rudraksha.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {rudraksha.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{rudraksha.hindi}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground min-w-[70px]">Deity:</span>
                        <span className="text-muted-foreground">{rudraksha.deity}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground min-w-[70px]">Planet:</span>
                        <span className="text-muted-foreground">{rudraksha.planet}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-semibold text-foreground min-w-[70px]">Benefits:</span>
                        <span className="text-muted-foreground">{rudraksha.benefits}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Beej Mantra Info */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Beej Mantra</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please be advised that while we encourage chanting the Beej Mantra for each type of Rudraksha, 
                  you may alternatively choose to chant <strong className="text-foreground">"Om Namah Shivaya"</strong> as per your convenience.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  वैसे हर रुद्राक्ष का बीज मंत्र अलग-अलग होता है। आपको बीज मंत्र का ही जाप करना चाहिए, 
                  लेकिन अगर आपको बीज मंत्र का जाप करने में असुविधा हो रही हो तो आप ओम नमः शिवाय मंत्र का जाप करके भी रुद्राक्ष धारण कर सकते हैं।
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary/30 to-accent/10">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Our Rudraksha Calculator?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the wisdom of ancient Vedic astrology combined with modern technology
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "21+ Years Expertise",
                description: "Two decades of dedicated research in Vedic astrology and Rudraksha science, serving 50 million+ customers worldwide"
              },
              {
                title: "Data-Driven Analysis",
                description: "Advanced algorithmic calculations based on authentic Vedic astrological principles and planetary positions"
              },
              {
                title: "100% Authentic",
                description: "We provide lab-certified, genuine Rudraksha beads sourced directly from sacred origins"
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
    </div>
  );
};

export default RudrakshaCalculator;
