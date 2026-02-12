import { useState } from "react";
import { Link } from "react-router-dom";
import { Gem, ArrowRight, ArrowLeft, Sparkles, Target, Wallet, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import blueSapphireImg from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImg from "@/assets/gemstones/ruby.jpg";
import emeraldImg from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImg from "@/assets/gemstones/yellow-sapphire.jpg";
import pearlImg from "@/assets/gemstones/pearl.jpg";
import hessoniteImg from "@/assets/gemstones/hessonite.jpg";

const steps = [
  {
    title: "What's your purpose?",
    icon: Target,
    options: [
      { id: "career", label: "Career & Success", emoji: "💼" },
      { id: "wealth", label: "Wealth & Prosperity", emoji: "💰" },
      { id: "health", label: "Health & Wellness", emoji: "🧘" },
      { id: "love", label: "Love & Relationships", emoji: "❤️" },
      { id: "education", label: "Education & Knowledge", emoji: "📚" },
      { id: "protection", label: "Protection & Safety", emoji: "🛡️" },
    ],
  },
  {
    title: "What's your budget?",
    icon: Wallet,
    options: [
      { id: "under-10k", label: "Under ₹10,000", emoji: "💵" },
      { id: "10k-25k", label: "₹10,000 - ₹25,000", emoji: "💎" },
      { id: "25k-50k", label: "₹25,000 - ₹50,000", emoji: "👑" },
      { id: "50k-1l", label: "₹50,000 - ₹1 Lakh", emoji: "🏆" },
      { id: "1l-plus", label: "₹1 Lakh+", emoji: "⭐" },
    ],
  },
];

type Recommendation = {
  name: string;
  hindi: string;
  image: string;
  link: string;
  price: string;
  benefit: string;
};

const recommendations: Record<string, Recommendation[]> = {
  career: [
    { name: "Blue Sapphire", hindi: "Neelam", image: blueSapphireImg, link: "/blue-sapphire", price: "₹45,000+", benefit: "Accelerates career growth & removes obstacles" },
    { name: "Yellow Sapphire", hindi: "Pukhraj", image: yellowSapphireImg, link: "/yellow-sapphire", price: "₹15,000+", benefit: "Brings divine wisdom & professional success" },
  ],
  wealth: [
    { name: "Yellow Sapphire", hindi: "Pukhraj", image: yellowSapphireImg, link: "/yellow-sapphire", price: "₹15,000+", benefit: "Attracts wealth & financial prosperity" },
    { name: "Emerald", hindi: "Panna", image: emeraldImg, link: "/gemstones", price: "₹35,000+", benefit: "Enhances business acumen & income streams" },
  ],
  health: [
    { name: "Ruby", hindi: "Manik", image: rubyImg, link: "/ruby", price: "₹55,000+", benefit: "Boosts vitality, energy & overall health" },
    { name: "Pearl", hindi: "Moti", image: pearlImg, link: "/pearl", price: "₹5,000+", benefit: "Calms mind, reduces stress & improves sleep" },
  ],
  love: [
    { name: "Ruby", hindi: "Manik", image: rubyImg, link: "/ruby", price: "₹55,000+", benefit: "Strengthens love, passion & commitment" },
    { name: "Pearl", hindi: "Moti", image: pearlImg, link: "/pearl", price: "₹5,000+", benefit: "Enhances emotional balance & harmony" },
  ],
  education: [
    { name: "Emerald", hindi: "Panna", image: emeraldImg, link: "/gemstones", price: "₹35,000+", benefit: "Sharpens intellect & communication skills" },
    { name: "Yellow Sapphire", hindi: "Pukhraj", image: yellowSapphireImg, link: "/yellow-sapphire", price: "₹15,000+", benefit: "Enhances wisdom & academic performance" },
  ],
  protection: [
    { name: "Hessonite", hindi: "Gomed", image: hessoniteImg, link: "/hessonite", price: "₹8,000+", benefit: "Shields from negative energies & evil eye" },
    { name: "Blue Sapphire", hindi: "Neelam", image: blueSapphireImg, link: "/blue-sapphire", price: "₹45,000+", benefit: "Powerful protection & fortune reversal" },
  ],
};

const ProductFinderQuiz = () => {
  const [step, setStep] = useState(0);
  const [purpose, setPurpose] = useState("");
  const [budget, setBudget] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (value: string) => {
    if (step === 0) {
      setPurpose(value);
      setStep(1);
    } else {
      setBudget(value);
      setShowResults(true);
    }
  };

  const reset = () => {
    setStep(0);
    setPurpose("");
    setBudget("");
    setShowResults(false);
  };

  const results = recommendations[purpose] || recommendations.career;

  return (
    <section className="py-14 lg:py-20 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-accent/15 text-accent border-accent/25 px-4 py-1.5 text-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            AI-Powered Recommendation
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Find Your Perfect Gemstone
          </h2>
          <p className="text-muted-foreground">Answer 2 quick questions to get personalized recommendations</p>
        </div>

        {!showResults ? (
          <Card className="p-6 lg:p-10 border-2 border-accent/10 shadow-card bg-card">
            {/* Progress */}
            <div className="flex items-center gap-3 mb-8">
              {[0, 1].map((s) => (
                <div key={s} className="flex-1 flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    s <= step ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {s < step ? <CheckCircle2 className="w-5 h-5" /> : s + 1}
                  </div>
                  <div className={`flex-1 h-1 rounded-full ${s < step ? "bg-accent" : "bg-muted"}`} />
                </div>
              ))}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                showResults ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
              }`}>
                <Gem className="w-4 h-4" />
              </div>
            </div>

            {/* Step content */}
            <div className="text-center mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground">{steps[step].title}</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
              {steps[step].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className="p-4 lg:p-5 rounded-xl border-2 border-border hover:border-accent bg-background hover:bg-accent/5 transition-all duration-200 text-center group"
                >
                  <span className="text-2xl mb-2 block">{option.emoji}</span>
                  <span className="text-sm lg:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {step > 0 && (
              <Button variant="ghost" className="mt-6" onClick={() => setStep(0)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            )}
          </Card>
        ) : (
          <Card className="p-6 lg:p-10 border-2 border-accent/20 shadow-card bg-card">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Your Recommended Gemstones</h3>
              <p className="text-muted-foreground">Based on your purpose & budget preferences</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {results.map((gem, index) => (
                <Link key={index} to={gem.link} className="group">
                  <div className="flex gap-4 p-4 rounded-xl border border-border hover:border-accent/50 hover:shadow-card bg-background transition-all">
                    <img
                      src={gem.image}
                      alt={gem.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {gem.name} <span className="text-muted-foreground font-normal text-sm">({gem.hindi})</span>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{gem.benefit}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-accent font-semibold text-sm">{gem.price}</span>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={reset} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Retake Quiz
              </Button>
              <Link to="/consultation">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" /> Get Expert Consultation
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ProductFinderQuiz;
