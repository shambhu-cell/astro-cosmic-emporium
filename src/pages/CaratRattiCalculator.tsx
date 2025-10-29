import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRightLeft, Gem, Info, Sparkles, TrendingUp, BookOpen, AlertCircle, CheckCircle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import blueSapphireImg from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImg from "@/assets/gemstones/ruby.jpg";
import emeraldImg from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImg from "@/assets/gemstones/yellow-sapphire.jpg";

const CaratRattiCalculator = () => {
  const [carat, setCarat] = useState<string>("");
  const [ratti, setRatti] = useState<string>("");
  const [gram, setGram] = useState<string>("");
  const [milligram, setMilligram] = useState<string>("");

  // Conversion constants
  const CARAT_TO_RATTI = 1.09375;
  const CARAT_TO_GRAM = 0.2;
  const CARAT_TO_MILLIGRAM = 200;

  const handleCaratChange = (value: string) => {
    setCarat(value);
    if (value === "" || isNaN(Number(value))) {
      setRatti("");
      setGram("");
      setMilligram("");
      return;
    }
    const caratNum = parseFloat(value);
    setRatti((caratNum * CARAT_TO_RATTI).toFixed(4));
    setGram((caratNum * CARAT_TO_GRAM).toFixed(4));
    setMilligram((caratNum * CARAT_TO_MILLIGRAM).toFixed(2));
  };

  const handleRattiChange = (value: string) => {
    setRatti(value);
    if (value === "" || isNaN(Number(value))) {
      setCarat("");
      setGram("");
      setMilligram("");
      return;
    }
    const rattiNum = parseFloat(value);
    const caratNum = rattiNum / CARAT_TO_RATTI;
    setCarat(caratNum.toFixed(4));
    setGram((caratNum * CARAT_TO_GRAM).toFixed(4));
    setMilligram((caratNum * CARAT_TO_MILLIGRAM).toFixed(2));
  };

  const handleGramChange = (value: string) => {
    setGram(value);
    if (value === "" || isNaN(Number(value))) {
      setCarat("");
      setRatti("");
      setMilligram("");
      return;
    }
    const gramNum = parseFloat(value);
    const caratNum = gramNum / CARAT_TO_GRAM;
    setCarat(caratNum.toFixed(4));
    setRatti((caratNum * CARAT_TO_RATTI).toFixed(4));
    setMilligram((caratNum * CARAT_TO_MILLIGRAM).toFixed(2));
  };

  const handleMilligramChange = (value: string) => {
    setMilligram(value);
    if (value === "" || isNaN(Number(value))) {
      setCarat("");
      setRatti("");
      setGram("");
      return;
    }
    const milligramNum = parseFloat(value);
    const caratNum = milligramNum / CARAT_TO_MILLIGRAM;
    setCarat(caratNum.toFixed(4));
    setRatti((caratNum * CARAT_TO_RATTI).toFixed(4));
    setGram((caratNum * CARAT_TO_GRAM).toFixed(4));
  };

  const handleReset = () => {
    setCarat("");
    setRatti("");
    setGram("");
    setMilligram("");
  };

  const topGemstones = [
    {
      name: "Blue Sapphire",
      image: blueSapphireImg,
      link: "/gemstones",
      benefit: "Wealth & Success"
    },
    {
      name: "Ruby",
      image: rubyImg,
      link: "/gemstones",
      benefit: "Leadership & Power"
    },
    {
      name: "Emerald",
      image: emeraldImg,
      link: "/gemstones",
      benefit: "Communication & Wisdom"
    },
    {
      name: "Yellow Sapphire",
      image: yellowSapphireImg,
      link: "/gemstones",
      benefit: "Prosperity & Knowledge"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 space-y-4">
            <Badge className="mb-4 px-4 py-1.5 text-sm" variant="secondary">
              <Calculator className="w-3.5 h-3.5 mr-1.5" />
              Professional Weight Converter
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Carat to Ratti Calculator
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Convert gemstone weights instantly with precision accuracy. Essential tool for gemstone buyers and sellers.
            </p>
          </div>

          {/* Main Calculator Card */}
          <Card className="max-w-4xl mx-auto shadow-2xl border-2 bg-card/95 backdrop-blur">
            <CardHeader className="text-center border-b bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <ArrowRightLeft className="w-6 h-6 text-primary" />
                Weight Conversion Calculator
              </CardTitle>
              <CardDescription className="text-base">
                Enter any value below and watch all units convert automatically
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Carat Input */}
                <div className="space-y-2 group">
                  <Label htmlFor="carat" className="text-base font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Carat
                    <Badge variant="secondary" className="text-xs ml-auto">Most Common</Badge>
                  </Label>
                  <Input
                    id="carat"
                    type="number"
                    placeholder="Enter carats"
                    value={carat}
                    onChange={(e) => handleCaratChange(e.target.value)}
                    className="h-14 text-lg font-medium border-2 focus:border-primary transition-all group-hover:border-primary/50"
                    step="0.01"
                  />
                  <p className="text-xs text-muted-foreground">1 Carat = 1.09375 Ratti</p>
                </div>

                {/* Ratti Input */}
                <div className="space-y-2 group">
                  <Label htmlFor="ratti" className="text-base font-semibold flex items-center gap-2">
                    <Gem className="w-4 h-4 text-accent" />
                    Ratti
                    <Badge variant="secondary" className="text-xs ml-auto">Traditional</Badge>
                  </Label>
                  <Input
                    id="ratti"
                    type="number"
                    placeholder="Enter ratti"
                    value={ratti}
                    onChange={(e) => handleRattiChange(e.target.value)}
                    className="h-14 text-lg font-medium border-2 focus:border-accent transition-all group-hover:border-accent/50"
                    step="0.01"
                  />
                  <p className="text-xs text-muted-foreground">1 Ratti = 0.9143 Carat</p>
                </div>

                {/* Gram Input */}
                <div className="space-y-2 group">
                  <Label htmlFor="gram" className="text-base font-semibold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Gram
                  </Label>
                  <Input
                    id="gram"
                    type="number"
                    placeholder="Enter grams"
                    value={gram}
                    onChange={(e) => handleGramChange(e.target.value)}
                    className="h-14 text-lg font-medium border-2 focus:border-primary transition-all group-hover:border-primary/50"
                    step="0.01"
                  />
                  <p className="text-xs text-muted-foreground">1 Carat = 0.2 Gram</p>
                </div>

                {/* Milligram Input */}
                <div className="space-y-2 group">
                  <Label htmlFor="milligram" className="text-base font-semibold flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-accent" />
                    Milligram
                  </Label>
                  <Input
                    id="milligram"
                    type="number"
                    placeholder="Enter milligrams"
                    value={milligram}
                    onChange={(e) => handleMilligramChange(e.target.value)}
                    className="h-14 text-lg font-medium border-2 focus:border-accent transition-all group-hover:border-accent/50"
                    step="1"
                  />
                  <p className="text-xs text-muted-foreground">1 Carat = 200 Milligrams</p>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button onClick={handleReset} variant="outline" size="lg" className="gap-2">
                  <ArrowRightLeft className="w-4 h-4" />
                  Reset Calculator
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Reference Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-4 text-primary">Carat ↔ Ratti</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-primary/10">
                    <span className="font-semibold">1 Carat</span>
                    <span>1.09375 Ratti</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">1 Ratti</span>
                    <span>0.9143 Carat</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-4 text-accent">Carat ↔ Gram</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-accent/10">
                    <span className="font-semibold">1 Carat</span>
                    <span>0.2 Gram</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">1 Gram</span>
                    <span>5 Carats</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-4 text-primary">Carat ↔ Milligram</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-primary/10">
                    <span className="font-semibold">1 Carat</span>
                    <span>200 mg</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">1000 mg</span>
                    <span>5 Carats</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="secondary">
              <Info className="w-3.5 h-3.5 mr-1.5" />
              Essential Knowledge
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Accurate Weight Conversion Matters
            </h2>
            <p className="text-muted-foreground text-lg">
              Understanding gemstone weights is crucial for making informed purchasing decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-primary" />
                  About Carats
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The carat is the international standard for measuring gemstone weight. One carat equals 200 milligrams. Larger gemstones are exponentially rarer and more valuable.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  About Ratti
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ratti is a traditional Indian unit for measuring gemstones, especially in Vedic astrology. One ratti equals approximately 0.9143 carats and is widely used for recommending gemstone weights.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Astrological Significance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  In Vedic astrology, astrologers recommend gemstone weights in ratti based on your birth chart. Converting to carats ensures you purchase the correct size for maximum astrological benefits.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Pricing Transparency
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding weight conversions helps you compare prices accurately across sellers. Gemstone prices are typically quoted per carat, making this knowledge essential for value assessment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Selling Gemstones */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
              Premium Selection
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Top Selling Gemstones
            </h2>
            <p className="text-muted-foreground text-lg">
              Calculate the perfect weight for your chosen gemstone
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topGemstones.map((gemstone, index) => (
              <Link key={index} to={gemstone.link}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden h-full">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={gemstone.image}
                      alt={gemstone.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur">
                      Premium
                    </Badge>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {gemstone.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {gemstone.benefit}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/gemstones">
              <Button size="lg" className="gap-2">
                <Gem className="w-4 h-4" />
                Explore All Gemstones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Common Conversion Examples */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Scale className="w-3.5 h-3.5 mr-1.5" />
              Quick Reference
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Gemstone Weight Conversions
            </h2>
            <p className="text-muted-foreground text-lg">
              Real-world examples to help you make informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Gem className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Small Gemstone</h3>
                    <p className="text-sm text-muted-foreground">Delicate jewelry</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">3 Ratti</span>
                    <span className="text-primary">2.74 Carats</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Weight</span>
                    <span>0.548 Grams</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">Use Case</span>
                    <span>Rings, Pendants</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Medium Gemstone</h3>
                    <p className="text-sm text-muted-foreground">Standard size</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">5 Ratti</span>
                    <span className="text-accent">4.57 Carats</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Weight</span>
                    <span>0.914 Grams</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">Use Case</span>
                    <span>Most Popular</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Large Gemstone</h3>
                    <p className="text-sm text-muted-foreground">Premium quality</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">7 Ratti</span>
                    <span className="text-primary">6.40 Carats</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Weight</span>
                    <span>1.28 Grams</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">Use Case</span>
                    <span>Statement Pieces</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Buyer's Guide */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />
              Expert Tips
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Essential Gemstone Buying Guide
            </h2>
            <p className="text-muted-foreground text-lg">
              Professional insights to help you choose the right gemstone weight
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">What to Consider When Choosing Weight</h3>
                    <p className="text-muted-foreground mb-4">Make informed decisions based on these key factors</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Astrological Recommendation</p>
                      <p className="text-sm text-muted-foreground">Always consult an astrologer for the ideal weight based on your birth chart. Typically recommended in Ratti.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Body Weight Calculation</p>
                      <p className="text-sm text-muted-foreground">General rule: 1/10th to 1/12th of your body weight in kg equals recommended gemstone weight in Ratti.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Visual Appearance</p>
                      <p className="text-sm text-muted-foreground">Consider how the gemstone will look on your finger or neck. Larger stones make bolder statements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Budget Considerations</p>
                      <p className="text-sm text-muted-foreground">Gemstone prices increase exponentially with carat weight. Balance quality and size within your budget.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Common Mistakes to Avoid</h3>
                    <p className="text-muted-foreground mb-4">Protect yourself from these frequent purchasing errors</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Confusing Carat with Karat</p>
                      <p className="text-sm text-muted-foreground">Carat measures gemstone weight, while karat measures gold purity. Don't mix them up!</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Ignoring Density Differences</p>
                      <p className="text-sm text-muted-foreground">Same carat weight looks different on different gemstones. A 5-carat sapphire is smaller than a 5-carat emerald.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Buying Without Certification</p>
                      <p className="text-sm text-muted-foreground">Always ask for a certified lab report verifying the gemstone's weight and authenticity.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Focusing Only on Weight</p>
                      <p className="text-sm text-muted-foreground">Quality matters more than size. A smaller, high-quality gemstone is more valuable than a larger, flawed one.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-16 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-4" variant="secondary">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                  Historical Context
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  The Story Behind Gemstone Measurements
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-bold text-foreground text-xl mb-2">Origin of Carat</h3>
                  <p>The word "carat" comes from the carob seed, which ancient traders used as counterweights on their balance scales. These seeds were remarkably uniform in weight, making them perfect for measuring precious gemstones. In 1907, the metric carat was internationally standardized at 200 milligrams.</p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-bold text-foreground text-xl mb-2">Origin of Ratti</h3>
                  <p>Ratti is a traditional Indian unit of measurement derived from the red and black seeds of the Gunja plant (Abrus precatorius). These seeds were historically used in India for weighing gold and gemstones. The measurement has been preserved in Vedic astrology, where gemstone recommendations are still given in Ratti.</p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-bold text-foreground text-xl mb-2">Modern Usage</h3>
                  <p>Today, while the international jewelry industry primarily uses carats, Ratti remains prevalent in India, especially for astrological gemstones. Understanding both measurements is essential for anyone interested in authentic gemstone astrology or purchasing gemstones from Indian sellers.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comprehensive FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Info className="w-3.5 h-3.5 mr-1.5" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-muted-foreground text-lg">
              Expert answers to common questions about gemstone weight conversion
            </p>
          </div>

          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">Q</span>
                  </div>
                  <span>How many Ratti are in 1 Carat?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-16">
                <p className="text-muted-foreground">1 Carat equals 1.09375 Ratti. This is a precise conversion ratio used universally in the gemstone industry. So if you have a 5-carat gemstone, it would be approximately 5.47 Ratti.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start gap-3">
                  <div className="p-2 rounded-full bg-accent/10 flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">Q</span>
                  </div>
                  <span>Which unit should I use when buying gemstones?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-16">
                <p className="text-muted-foreground">For astrological purposes, use Ratti as recommended by Vedic astrologers. For international purchases or comparing prices globally, use Carats as it's the standard unit worldwide. Our calculator helps you convert between both seamlessly.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">Q</span>
                  </div>
                  <span>How do I calculate the right gemstone weight for me?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-16">
                <p className="text-muted-foreground">The traditional method is to divide your body weight (in kg) by 10 to 12 to get the recommended Ratti. For example, if you weigh 60kg, a gemstone between 5-6 Ratti (4.5-5.5 carats) would be appropriate. However, always consult a qualified astrologer for personalized recommendations.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start gap-3">
                  <div className="p-2 rounded-full bg-accent/10 flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">Q</span>
                  </div>
                  <span>Is a heavier gemstone always better?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-16">
                <p className="text-muted-foreground">Not necessarily. While weight is important for astrological effects, quality factors like clarity, color, and cut are equally crucial. A smaller, high-quality gemstone with good energy is more effective than a larger, flawed stone. Balance size with quality and your budget.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">Q</span>
                  </div>
                  <span>Why do different gemstones of the same carat look different in size?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-16">
                <p className="text-muted-foreground">Gemstones have different densities. A 5-carat diamond will appear smaller than a 5-carat emerald because diamond is denser. Carat measures weight, not size. Sapphires and rubies (corundum) are denser than emeralds, so they appear smaller at the same carat weight.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-start gap-3">
                  <div className="p-2 rounded-full bg-accent/10 flex-shrink-0 mt-1">
                    <span className="text-accent font-bold">Q</span>
                  </div>
                  <span>Can I wear a gemstone lighter than recommended?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-16">
                <p className="text-muted-foreground">While lighter gemstones may have reduced astrological effects, it's better to wear a lighter, high-quality, natural gemstone than nothing at all. If budget is a concern, prioritize quality over weight. Consult your astrologer for minimum weight recommendations specific to your needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Accurate Conversions</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <p className="text-sm text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaratRattiCalculator;
