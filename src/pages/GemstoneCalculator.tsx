import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Calendar, MapPin, User, Mail, Phone, Weight, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Import gemstone images
import rubySrc from "@/assets/gemstones/ruby.jpg";
import emeraldSrc from "@/assets/gemstones/emerald.jpg";
import blueSapphireSrc from "@/assets/gemstones/blue-sapphire.jpg";
import yellowSapphireSrc from "@/assets/gemstones/yellow-sapphire.jpg";

const calculatorSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(20),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select gender" }),
  weight: z.string().min(1, "Weight is required"),
  birthDate: z.string().min(1, "Birth date is required"),
  birthTime: z.string().min(1, "Birth time is required"),
  birthPlace: z.string().trim().min(2, "Birth place is required").max(200),
});

type CalculatorForm = z.infer<typeof calculatorSchema>;

const gemstoneGuide = [
  { name: "Yellow Sapphire", hindi: "पुखराज", finger: "Index Finger", fingerHindi: "तर्जनी", image: yellowSapphireSrc },
  { name: "Cat's Eye", hindi: "लहसुनिया", finger: "Middle Finger", fingerHindi: "मध्यमा", image: rubySrc },
  { name: "Blue Sapphire", hindi: "नीलम", finger: "Middle Finger", fingerHindi: "मध्यमा", image: blueSapphireSrc },
  { name: "Opal", hindi: "दूधिया पत्थर", finger: "Middle Finger", fingerHindi: "मध्यमा", image: emeraldSrc },
  { name: "Hessonite", hindi: "गोमेद", finger: "Middle Finger", fingerHindi: "मध्यमा", image: rubySrc },
  { name: "Ruby", hindi: "माणिक", finger: "Ring Finger", fingerHindi: "अनामिका", image: rubySrc },
  { name: "Pearl", hindi: "मोती", finger: "Little Finger", fingerHindi: "कनिष्ठिका", image: emeraldSrc },
  { name: "Red Coral", hindi: "मूंगा", finger: "Ring Finger", fingerHindi: "अनामिका", image: rubySrc },
  { name: "Emerald", hindi: "पन्ना", finger: "Little Finger", fingerHindi: "कनिष्ठिका", image: emeraldSrc },
];

const GemstoneCalculator = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<CalculatorForm>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof CalculatorForm, string>>>({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (field: keyof CalculatorForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const fieldsToValidate: Record<number, (keyof CalculatorForm)[]> = {
      1: ["name", "email", "phone"],
      2: ["gender", "weight", "birthDate"],
      3: ["birthTime", "birthPlace"],
    };

    const fields = fieldsToValidate[currentStep];
    const stepData = Object.fromEntries(
      fields.map(field => [field, formData[field]])
    );

    try {
      calculatorSchema.pick(
        Object.fromEntries(fields.map(f => [f, true])) as any
      ).parse(stepData);
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
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    try {
      calculatorSchema.parse(formData);
      setShowResults(true);
      toast({
        title: "Calculation Complete!",
        description: "Your personalized gemstone recommendations are ready.",
      });
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
          description: "Please check all fields and try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTI0IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEyYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0tMTItMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative container max-w-screen-xl px-4 h-full flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <Badge variant="outline" className="mb-3 md:mb-4 px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base border-primary/20 bg-white/10 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2 inline" />
              Free Gemstone Recommendation
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent px-4">
              Discover Your Perfect Gemstone
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Get personalized gemstone recommendations based on your birth chart and Kundali. 
              Unlock prosperity, health, and harmony with the right gemstone.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 md:mt-8 px-4">
              <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">100% Free</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Vedic Astrology Based</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm font-medium">Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 px-0 sm:px-4 -mt-8 sm:-mt-12 md:-mt-20 relative z-20">
        <div className="container max-w-screen-xl mx-auto px-0 sm:px-4">
          <div className="grid lg:grid-cols-3 gap-0 sm:gap-6 md:gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-2 border-primary/20 animate-fade-in bg-background relative z-20 rounded-none sm:rounded-lg">
                <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-accent/5 p-4 md:p-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                      Gemstone Recommendation
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs md:text-sm">
                      Step {step} of 3
                    </Badge>
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-3 md:mt-4 h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500 ease-out"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                  {!showResults ? (
                    <>
                      {/* Step 1: Personal Details */}
                      {step === 1 && (
                        <div className="space-y-5 md:space-y-6 animate-fade-in">
                          <div>
                            <Label htmlFor="name" className="flex items-center gap-1.5 mb-2 text-sm md:text-base">
                              <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                              Full Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              placeholder="Enter your full name"
                              value={formData.name || ""}
                              onChange={(e) => handleChange("name", e.target.value)}
                              className={`h-11 md:h-12 ${errors.name ? "border-destructive" : ""}`}
                            />
                            {errors.name && <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.name}</p>}
                          </div>

                          <div>
                            <Label htmlFor="email" className="flex items-center gap-1.5 mb-2 text-sm md:text-base">
                              <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                              Email Address <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email || ""}
                              onChange={(e) => handleChange("email", e.target.value)}
                              className={`h-11 md:h-12 ${errors.email ? "border-destructive" : ""}`}
                            />
                            {errors.email && <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.email}</p>}
                          </div>

                          <div>
                            <Label htmlFor="phone" className="flex items-center gap-1.5 mb-2 text-sm md:text-base">
                              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                              Phone Number <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={formData.phone || ""}
                              onChange={(e) => handleChange("phone", e.target.value)}
                              className={`h-11 md:h-12 ${errors.phone ? "border-destructive" : ""}`}
                            />
                            {errors.phone && <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.phone}</p>}
                          </div>
                        </div>
                      )}

                      {/* Step 2: Birth Details */}
                      {step === 2 && (
                        <div className="space-y-5 md:space-y-6 animate-fade-in">
                          <div>
                            <Label htmlFor="gender" className="flex items-center gap-1.5 mb-2 text-sm md:text-base">
                              <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                              Gender <span className="text-destructive">*</span>
                            </Label>
                            <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
                              <SelectTrigger className={`h-11 md:h-12 ${errors.gender ? "border-destructive" : ""}`}>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            {errors.gender && <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.gender}</p>}
                          </div>

                          <div>
                            <Label htmlFor="weight" className="flex items-center gap-1.5 mb-2 text-sm md:text-base">
                              <Weight className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                              Body Weight (kg) <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="weight"
                              type="number"
                              placeholder="Enter your weight"
                              value={formData.weight || ""}
                              onChange={(e) => handleChange("weight", e.target.value)}
                              className={`h-11 md:h-12 ${errors.weight ? "border-destructive" : ""}`}
                            />
                            {errors.weight && <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.weight}</p>}
                          </div>

                          <div>
                            <Label htmlFor="birthDate" className="flex items-center gap-1.5 mb-2 text-sm md:text-base">
                              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                              Birth Date <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="birthDate"
                              type="date"
                              value={formData.birthDate || ""}
                              onChange={(e) => handleChange("birthDate", e.target.value)}
                              className={`h-11 md:h-12 ${errors.birthDate ? "border-destructive" : ""}`}
                            />
                            {errors.birthDate && <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.birthDate}</p>}
                          </div>
                        </div>
                      )}

                      {/* Step 3: Time & Place */}
                      {step === 3 && (
                        <div className="space-y-5 md:space-y-6 animate-fade-in">
                          <div>
                            <Label htmlFor="birthTime" className="flex items-center gap-1.5 mb-2 text-sm md:text-base">
                              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                              Birth Time <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="birthTime"
                              type="time"
                              value={formData.birthTime || ""}
                              onChange={(e) => handleChange("birthTime", e.target.value)}
                              className={`h-11 md:h-12 ${errors.birthTime ? "border-destructive" : ""}`}
                            />
                            {errors.birthTime && <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.birthTime}</p>}
                          </div>

                          <div>
                            <Label htmlFor="birthPlace" className="flex items-center gap-1.5 mb-2 text-sm md:text-base">
                              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                              Birth Place <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="birthPlace"
                              placeholder="City, State, Country"
                              value={formData.birthPlace || ""}
                              onChange={(e) => handleChange("birthPlace", e.target.value)}
                              className={`h-11 md:h-12 ${errors.birthPlace ? "border-destructive" : ""}`}
                            />
                            {errors.birthPlace && <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.birthPlace}</p>}
                          </div>

                          <div className="p-3 md:p-4 bg-primary/5 border border-primary/20 rounded-lg">
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                              <strong className="text-foreground">Note:</strong> Accurate birth time and place are essential 
                              for precise gemstone recommendations based on your Kundali and planetary positions.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
                        {step > 1 && (
                          <Button
                            variant="outline"
                            onClick={() => setStep(step - 1)}
                            className="flex-1"
                            size="default"
                          >
                            Previous
                          </Button>
                        )}
                        <Button
                          onClick={handleNext}
                          className="flex-1 group"
                          size="default"
                        >
                          <span className="hidden sm:inline">{step < 3 ? "Next Step" : "Get My Gemstone"}</span>
                          <span className="sm:hidden">{step < 3 ? "Next" : "Get Results"}</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </>
                  ) : (
                    // Results View
                    <div className="space-y-4 md:space-y-6 animate-fade-in">
                      <div className="text-center p-6 md:p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                        <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-primary" />
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Your Gemstone Recommendations</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Based on your birth chart analysis
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Card className="hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <img src={blueSapphireSrc} alt="Blue Sapphire" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h4 className="text-xl font-bold mb-2">Primary: Blue Sapphire</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Enhances focus, discipline, and career growth. Protects from negative energies.
                            </p>
                            <Badge>Best for Saturn</Badge>
                          </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <img src={yellowSapphireSrc} alt="Yellow Sapphire" className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h4 className="text-xl font-bold mb-2">Secondary: Yellow Sapphire</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              Brings wisdom, prosperity, and happiness. Strengthens Jupiter's influence.
                            </p>
                            <Badge variant="secondary">Best for Jupiter</Badge>
                          </CardContent>
                        </Card>
                      </div>

                      <Button className="w-full" size="lg" asChild>
                        <a href="/gemstones">
                          Shop Recommended Gemstones
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setShowResults(false);
                          setStep(1);
                          setFormData({});
                        }}
                      >
                        Calculate Again
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Gemstone Guide Sidebar */}
            <div className="lg:col-span-1 hidden lg:block">
              <Card className="shadow-2xl border-2 border-primary/20 sticky top-4 animate-fade-in bg-background relative z-20">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 md:p-6">
                  <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Suggested Finger Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-3 md:space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {gemstoneGuide.map((gem, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <img
                          src={gem.image}
                          alt={gem.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:scale-110 transition-transform"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{gem.name}</p>
                          <p className="text-xs text-muted-foreground">{gem.hindi}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-medium text-primary">{gem.finger}</p>
                          <p className="text-xs text-muted-foreground">{gem.fingerHindi}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-16 px-4 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why Use Our Calculator?</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Get accurate gemstone recommendations based on authentic Vedic astrology principles
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Vedic Accuracy",
                description: "Based on ancient Vedic astrology principles and planetary positions"
              },
              {
                title: "Personalized Results",
                description: "Customized recommendations based on your unique birth chart"
              },
              {
                title: "Expert Guidance",
                description: "Backed by expert astrologers with years of experience"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GemstoneCalculator;
