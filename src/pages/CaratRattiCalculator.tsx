import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRightLeft, Gem, Info, Sparkles, TrendingUp } from "lucide-react";
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
