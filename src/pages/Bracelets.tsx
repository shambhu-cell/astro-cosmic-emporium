import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ShoppingBag, Shield, Award, Truck, CheckCircle2, TrendingUp, Users, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { allBraceletProducts } from "@/data/braceletProducts";

const Bracelets = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Bracelets", count: allBraceletProducts.length },
    { id: "Chakra", name: "Chakra", count: allBraceletProducts.filter(p => p.category === "Chakra").length },
    { id: "Protection", name: "Protection", count: allBraceletProducts.filter(p => p.category === "Protection").length },
    { id: "Love", name: "Love", count: allBraceletProducts.filter(p => p.category === "Love").length },
    { id: "Prosperity", name: "Prosperity", count: allBraceletProducts.filter(p => p.category === "Prosperity").length },
    { id: "Healing", name: "Healing", count: allBraceletProducts.filter(p => p.category === "Healing").length },
    { id: "Confidence", name: "Confidence", count: allBraceletProducts.filter(p => p.category === "Confidence").length },
    { id: "Money", name: "Money", count: allBraceletProducts.filter(p => p.category === "Money").length }
  ];

  const filteredBracelets = selectedCategory === "all" 
    ? allBraceletProducts 
    : allBraceletProducts.filter(p => p.category === selectedCategory);

  // Category descriptions and benefits
  const categoryInfo: Record<string, any> = {
    "all": {
      title: "Complete Crystal Bracelet Collection",
      description: "Explore our handpicked collection of authentic crystal healing bracelets. Each piece is crafted with natural, lab-certified crystals and energized for maximum spiritual and healing benefits.",
      benefits: [
        "100% Natural & Lab Certified Crystals",
        "Handcrafted with Premium Quality Beads",
        "Cleansed & Energized Before Shipping",
        "Multiple Size Options Available",
        "30-Day Money Back Guarantee"
      ],
      whyChoose: [
        "Authentic crystals sourced from trusted suppliers worldwide",
        "Each bracelet undergoes quality inspection and certification",
        "Powerful healing properties for mind, body, and spirit",
        "Suitable for meditation, yoga, and daily wear"
      ]
    },
    "Chakra": {
      title: "Chakra Balancing Crystal Bracelets",
      description: "Align and balance your chakras with our specially designed multi-crystal bracelets. These powerful combinations work on all seven energy centers, promoting complete harmony and well-being.",
      benefits: [
        "Balances All 7 Chakras Simultaneously",
        "Removes Energy Blockages & Stagnation",
        "Promotes Complete Mind-Body-Spirit Harmony",
        "Enhances Energy Flow Throughout Body",
        "Perfect for Beginners in Energy Work"
      ],
      crystals: "Amethyst (Crown), Lapis (Third Eye), Turquoise (Throat), Green Aventurine (Heart), Citrine (Solar Plexus), Carnelian (Sacral), Red Jasper (Root)",
      idealFor: [
        "Yoga and meditation practitioners",
        "Energy healers and Reiki practitioners",
        "Those new to crystal healing",
        "Anyone feeling energetically unbalanced"
      ]
    },
    "Protection": {
      title: "Protection & Grounding Crystal Bracelets",
      description: "Shield yourself from negative energies, EMF radiation, and psychic attacks with our powerful protection crystals. These grounding stones create a protective barrier around your aura.",
      benefits: [
        "Blocks Negative Energy & Psychic Attacks",
        "Shields from EMF Radiation (Phones, Computers)",
        "Grounds Excess Energy & Promotes Stability",
        "Transmutes Negativity into Positive Energy",
        "Creates Protective Energy Shield"
      ],
      crystals: "Black Tourmaline, Black Obsidian, Smoky Quartz, Hematite",
      idealFor: [
        "Empaths and highly sensitive people",
        "Office workers (EMF protection)",
        "Those in negative environments",
        "Energy workers and healers"
      ]
    },
    "Love": {
      title: "Love & Relationship Crystal Bracelets",
      description: "Open your heart to love with our heart chakra healing crystals. These gentle yet powerful stones attract love, heal emotional wounds, and promote self-acceptance.",
      benefits: [
        "Opens & Heals Heart Chakra",
        "Attracts Love & Romantic Relationships",
        "Promotes Self-Love & Acceptance",
        "Heals Heartbreak & Emotional Trauma",
        "Enhances Compassion & Forgiveness"
      ],
      crystals: "Rose Quartz, Rhodonite, Pink Tourmaline, Morganite",
      idealFor: [
        "Those seeking romantic love",
        "Healing from heartbreak or divorce",
        "Building self-esteem and confidence",
        "Improving existing relationships"
      ]
    },
    "Prosperity": {
      title: "Prosperity & Abundance Crystal Bracelets",
      description: "Manifest wealth and success with our powerful abundance crystals. Known as the ultimate money magnets, these stones attract prosperity in all areas of life.",
      benefits: [
        "Attracts Wealth & Financial Prosperity",
        "Enhances Manifestation Power",
        "Promotes Success in Business & Career",
        "Dispels Negative Money Mindset",
        "Boosts Confidence & Personal Power"
      ],
      crystals: "Citrine, Pyrite, Green Jade, Tiger Eye",
      idealFor: [
        "Business owners and entrepreneurs",
        "Those manifesting financial abundance",
        "Career-focused individuals",
        "Anyone seeking prosperity"
      ]
    },
    "Healing": {
      title: "Healing & Wellness Crystal Bracelets",
      description: "Experience holistic healing with our master healer crystals. These versatile stones work on physical, emotional, mental, and spiritual levels for complete well-being.",
      benefits: [
        "Promotes Physical & Emotional Healing",
        "Enhances Mental Clarity & Focus",
        "Reduces Stress, Anxiety & Depression",
        "Strengthens Immune System",
        "Accelerates Recovery & Regeneration"
      ],
      crystals: "Clear Quartz, Amethyst, Fluorite, Selenite",
      idealFor: [
        "Those recovering from illness",
        "People dealing with chronic stress",
        "Holistic health practitioners",
        "Anyone seeking overall wellness"
      ]
    },
    "Confidence": {
      title: "Confidence & Courage Crystal Bracelets",
      description: "Boost your self-esteem and courage with solar plexus activating crystals. These powerful stones enhance willpower, motivation, and personal power.",
      benefits: [
        "Boosts Self-Confidence & Self-Esteem",
        "Enhances Courage & Fearlessness",
        "Activates Solar Plexus Chakra",
        "Improves Decision-Making Ability",
        "Provides Mental Clarity & Focus"
      ],
      crystals: "Tiger Eye, Carnelian, Sunstone, Amber",
      idealFor: [
        "Public speakers and performers",
        "Students taking exams",
        "Those lacking self-confidence",
        "Business professionals"
      ]
    },
    "Money": {
      title: "Money & Good Luck Crystal Bracelets",
      description: "Attract good fortune and opportunities with our luck-enhancing crystals. Known as stones of opportunity, they open doors to prosperity and success.",
      benefits: [
        "Attracts Good Luck & Opportunities",
        "Brings Success in New Ventures",
        "Enhances Financial Fortune",
        "Promotes Optimism & Positive Outlook",
        "Aids in Decision Making"
      ],
      crystals: "Green Aventurine, Jade, Pyrite, Malachite",
      idealFor: [
        "Gamblers and risk-takers",
        "Job seekers and interviewees",
        "Those starting new projects",
        "Anyone needing a lucky boost"
      ]
    }
  };

  const currentCategoryInfo = categoryInfo[selectedCategory] || categoryInfo["all"];

  return (
    <main className="min-h-screen bg-background py-8">

      <div className="container max-w-screen-2xl px-4 mx-auto mt-8">
        {/* Hero Section */}
        <div className="mb-12 text-center space-y-4">
          <Badge className="mb-4 px-4 py-2 text-sm" variant="outline">
            <Sparkles className="h-4 w-4 mr-2" />
            Trusted by 150,000+ Happy Customers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Crystal Healing Bracelets
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handcrafted with 100% Natural Crystals • Lab Certified • Energized for Maximum Benefits
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold">4.8/5</span>
              <span className="text-muted-foreground">(150,000+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="font-medium">250,000+ Sold</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2 whitespace-nowrap flex-shrink-0"
              >
                {category.name}
                {category.count > 0 && (
                  <Badge variant="secondary" className="ml-1 px-2 py-0 text-xs">
                    {category.count}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredBracelets.map((bracelet) => (
            <Card 
              key={bracelet.id} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
              onClick={() => navigate(`/bracelet/${bracelet.id}`)}
            >
              <CardContent className="p-4">
                {/* Image Container */}
                <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={bracelet.images[0]}
                    alt={bracelet.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                    <Badge className="bg-accent text-white">
                      ⭐ Bestseller
                    </Badge>
                    <Badge className="bg-green-600 text-white font-bold">
                      {bracelet.discount}% OFF
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="rounded-full shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {bracelet.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{bracelet.rating}</span>
                      <span className="text-xs text-muted-foreground">({bracelet.reviews.toLocaleString()})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {bracelet.name}
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {bracelet.material} • {bracelet.beadSize}
                  </p>

                  {/* Social Proof */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{bracelet.sold} sold</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-2xl font-bold text-primary">₹{bracelet.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{bracelet.originalPrice.toLocaleString()}</span>
                  </div>
                  
                  {/* CTA Button */}
                  <Button className="w-full group-hover:bg-accent group-hover:shadow-lg transition-all" size="lg">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    View Details
                  </Button>

                  {/* Trust Indicators */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-green-600" />
                      <span>Natural</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-green-600" />
                      <span>Certified</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-green-600" />
                      <span>Energized</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Information Section */}
        <div className="mb-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 border-2 border-primary/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {currentCategoryInfo.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {currentCategoryInfo.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Key Benefits */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Key Benefits</h3>
                  </div>
                  <ul className="space-y-3">
                    {currentCategoryInfo.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-4">
                {currentCategoryInfo.crystals && (
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-bold">Featured Crystals</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentCategoryInfo.crystals}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {currentCategoryInfo.idealFor && (
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-bold">Perfect For</h3>
                      </div>
                      <ul className="space-y-2">
                        {currentCategoryInfo.idealFor.map((person: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {person}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {currentCategoryInfo.whyChoose && (
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-bold">Why Choose Us</h3>
                      </div>
                      <ul className="space-y-2">
                        {currentCategoryInfo.whyChoose.map((reason: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-muted-foreground">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Crystal Bracelets?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">100% Natural Crystals</h3>
              <p className="text-sm text-muted-foreground">
                Hand-selected, lab-certified authentic crystals from ethical sources
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Cleansed & Energized</h3>
              <p className="text-sm text-muted-foreground">
                Every bracelet is cleansed and charged for maximum healing power
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">150,000+ Happy Customers</h3>
              <p className="text-sm text-muted-foreground">
                Join thousands experiencing real transformation and healing
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">30-Day Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                Not satisfied? Get 100% money back, no questions asked
              </p>
            </div>
          </div>
        </div>

        {/* Informational Tabs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Complete Crystal Bracelet Guide</h2>
          
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent p-0 mb-6">
              <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">About</TabsTrigger>
              <TabsTrigger value="who-should-wear" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Who Should Wear?</TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Benefits</TabsTrigger>
              <TabsTrigger value="how-to-use" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">How to Use</TabsTrigger>
              <TabsTrigger value="cleaning-care" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Cleaning & Care</TabsTrigger>
              <TabsTrigger value="authenticity" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Authenticity</TabsTrigger>
              <TabsTrigger value="faqs" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Accordion type="single" collapsible className="bg-card rounded-lg p-4 shadow-sm border-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What are Crystal Healing Bracelets?</AccordionTrigger>
                  <AccordionContent>
                    Crystal healing bracelets are pieces of jewelry made from natural gemstones and crystals that are believed to have healing and metaphysical properties. Each crystal has unique vibrational frequencies that interact with your body's energy field, promoting balance, healing, and positive transformation in various aspects of life.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How Do Crystal Bracelets Work?</AccordionTrigger>
                  <AccordionContent>
                    Crystals work through their natural electromagnetic frequencies and piezoelectric properties. When worn close to your skin, they interact with your body's energy field (aura) and chakras. Different crystals resonate with different chakras and energy centers, helping to clear blockages, balance energies, and promote overall well-being.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Our Quality Assurance Process</AccordionTrigger>
                  <AccordionContent>
                    All our crystal bracelets are made from 100% natural, lab-certified crystals sourced from ethical suppliers worldwide. Each bracelet undergoes multiple quality checks for authenticity, energy clarity, and craftsmanship. We provide certificates of authenticity and ensure every piece is cleansed and energized before shipping.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Scientific & Spiritual Perspective</AccordionTrigger>
                  <AccordionContent>
                    While crystal healing is rooted in ancient spiritual traditions across cultures, modern science recognizes crystals' unique molecular structures and electromagnetic properties. Many users report positive effects on their mental, emotional, and physical well-being. We encourage an open mind and personal experience as the best judge of crystal effectiveness.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="who-should-wear" className="mt-6">
              <Accordion type="single" collapsible className="bg-card rounded-lg p-4 shadow-sm border-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Anyone Can Wear Crystal Bracelets</AccordionTrigger>
                  <AccordionContent>
                    Crystal bracelets are suitable for everyone regardless of age, gender, religion, or background. Unlike some traditional gemstones that require astrological consultation, crystal bracelets work harmoniously with all energy types and have no negative side effects.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Choosing Based on Your Needs</AccordionTrigger>
                  <AccordionContent>
                    Select your crystal bracelet based on your current life situation and goals: Choose protection stones (Black Tourmaline, Obsidian) if you feel drained by negative energies; Love stones (Rose Quartz) for relationships; Prosperity stones (Citrine) for financial goals; or Healing stones (Clear Quartz, Amethyst) for overall wellness.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Multiple Bracelets</AccordionTrigger>
                  <AccordionContent>
                    You can wear multiple crystal bracelets simultaneously. Many people wear 2-3 bracelets for different purposes (e.g., protection + prosperity + love). However, start with one bracelet to understand its energy, then gradually add more. Some prefer to wear different bracelets on different wrists based on giving (left) and receiving (right) energy principles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Special Considerations</AccordionTrigger>
                  <AccordionContent>
                    While crystals are generally safe for everyone, pregnant women should consult healthcare providers before wearing certain high-energy stones. Children can wear crystal bracelets with gentler energies like Rose Quartz or Clear Quartz. Always listen to your intuition - if a crystal doesn't feel right, choose another one.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="benefits" className="mt-6">
              <Accordion type="single" collapsible className="bg-card rounded-lg p-4 shadow-sm border-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Emotional & Mental Benefits</AccordionTrigger>
                  <AccordionContent>
                    Crystal bracelets can help reduce stress, anxiety, and depression; promote emotional healing and release of past traumas; enhance mental clarity and focus; boost self-confidence and self-esteem; provide emotional stability and balance; and promote peaceful sleep and reduce nightmares.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Physical Wellness Benefits</AccordionTrigger>
                  <AccordionContent>
                    While not a replacement for medical treatment, many users report that crystal bracelets help boost immune system function, reduce chronic pain and inflammation, improve sleep quality, increase energy levels, support hormonal balance, and promote faster healing and recovery. Always consult healthcare professionals for medical concerns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Spiritual & Energy Benefits</AccordionTrigger>
                  <AccordionContent>
                    Crystal bracelets can enhance meditation and spiritual practices, balance and align chakras, protect against negative energies and psychic attacks, increase intuition and spiritual awareness, strengthen connection to higher consciousness, and facilitate spiritual growth and transformation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Life & Success Benefits</AccordionTrigger>
                  <AccordionContent>
                    Different crystals attract opportunities and good fortune, enhance manifestation abilities, improve relationships and communication, boost career success and recognition, attract wealth and financial prosperity, remove obstacles and blockages in life, and promote overall success and achievement of goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="how-to-use" className="mt-6">
              <Accordion type="single" collapsible className="bg-card rounded-lg p-4 shadow-sm border-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>First Time Activation</AccordionTrigger>
                  <AccordionContent>
                    When you receive your bracelet, hold it in your hands and set your intention. Clearly state what you want the crystal to help you with. You can say it aloud or in your mind. This programs the crystal to work specifically for your needs. Our bracelets come pre-cleansed and energized, but you can add your personal intention.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Which Wrist to Wear On?</AccordionTrigger>
                  <AccordionContent>
                    Left wrist (receiving hand): Wear here to absorb crystal energies into your body - best for healing, protection, emotional work, and receiving abundance. Right wrist (giving hand): Wear here to project crystal energies outward - best for manifestation, releasing negativity, and sending love/healing to others. Trust your intuition or wear on both wrists.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Daily Wearing Guidelines</AccordionTrigger>
                  <AccordionContent>
                    Wear your bracelet daily for best results. Remove during bathing, swimming, or sleeping if you prefer. Some people sleep with their bracelets for continuous energy work, while others remove them to allow energy reset. Listen to your body and energy levels to determine what works best for you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Meditation & Affirmations</AccordionTrigger>
                  <AccordionContent>
                    Enhance your crystal's power by meditating while holding or wearing it. Focus on your intention and visualize your desired outcome. Use positive affirmations related to your crystal's properties. For example, with Rose Quartz: "I am worthy of love and I attract loving relationships" or with Citrine: "I am a magnet for abundance and prosperity."
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="cleaning-care" className="mt-6">
              <Accordion type="single" collapsible className="bg-card rounded-lg p-4 shadow-sm border-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Physical Cleaning</AccordionTrigger>
                  <AccordionContent>
                    Clean your bracelet weekly with lukewarm water and mild soap using a soft cloth. Avoid harsh chemicals, perfumes, and cosmetics. Pat dry gently with a soft towel. Some crystals (like Selenite) should not be submerged in water - use a dry cloth instead. Store in a soft pouch when not wearing.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Energy Cleansing</AccordionTrigger>
                  <AccordionContent>
                    Crystals absorb negative energies and need regular energetic cleansing. Methods include: Moonlight (especially full moon - leave outside overnight), Sunlight (30 mins - avoid for colored crystals that may fade), Sage smoke or Palo Santo, Sound vibrations (singing bowls), or placing on Selenite charging plate. Cleanse monthly or when feeling energetically heavy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Recharging & Energizing</AccordionTrigger>
                  <AccordionContent>
                    After cleansing, recharge your crystal by placing it in moonlight or sunlight for a few hours, burying in earth overnight (in a sealed pouch), placing near other charging crystals like Clear Quartz or Selenite, or holding while meditating and visualizing white light filling the crystal. Set new intentions after recharging.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Storage & Protection</AccordionTrigger>
                  <AccordionContent>
                    Store each bracelet separately in a soft cloth pouch to prevent scratches. Keep away from direct sunlight for extended periods to prevent fading. Avoid extreme temperature changes. When not wearing, place on a Selenite plate or with Clear Quartz to maintain positive energy. Never leave in damp areas as elastic cord may deteriorate.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="authenticity" className="mt-6">
              <Accordion type="single" collapsible className="bg-card rounded-lg p-4 shadow-sm border-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How to Identify Authentic Crystals</AccordionTrigger>
                  <AccordionContent>
                    Authentic natural crystals have unique patterns and inclusions (internal features). No two natural crystals are identical. They feel cool to touch initially and have some weight. Beware of perfectly uniform patterns, unnaturally bright colors, or very cheap prices. Authentic crystals have natural imperfections which prove their genuinity.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Our Certification Process</AccordionTrigger>
                  <AccordionContent>
                    Every bracelet comes with a certificate of authenticity. Our crystals are sourced from trusted suppliers and undergo lab testing. We provide detailed information about origin, crystal properties, and quality grade. Each piece is personally inspected by our experts before shipping to ensure you receive only genuine, high-quality crystals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Fake vs Real: What to Watch For</AccordionTrigger>
                  <AccordionContent>
                    Fake indicators: Glass or acrylic (too perfect, warm to touch), Dyed stones (color rubs off or is too vibrant), Reconstituted crystals (crystal powder pressed together). Real crystals have natural variations in color and pattern, feel cool initially, have some weight, may have small cracks or inclusions, and don't chip or scratch easily.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Our Quality Guarantee</AccordionTrigger>
                  <AccordionContent>
                    We stand behind every bracelet with a 30-day money-back guarantee. If you receive a bracelet that doesn't meet our quality standards or you're not satisfied for any reason, return it for a full refund. We also offer free replacement for any manufacturing defects within 90 days. Your trust is our priority.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="faqs" className="mt-6">
              <Accordion type="single" collapsible className="bg-card rounded-lg p-4 shadow-sm border-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
                  <AccordionContent>
                    Results vary by individual. Some people feel immediate subtle shifts in energy, while others notice changes over 2-4 weeks of consistent wearing. Crystals work gradually and cumulatively. For best results, wear your bracelet daily, set clear intentions, and stay open to the changes. Remember, crystals amplify your own energy and intentions.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I shower or sleep with my bracelet?</AccordionTrigger>
                  <AccordionContent>
                    It's best to remove your bracelet before showering, swimming, or bathing as water, soap, and chemicals can affect the elastic cord's durability and some crystals' energy. Sleeping with your bracelet is optional - some find it enhances dreams and healing, others prefer to let their energy rest. Listen to your comfort level.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What if my bracelet breaks?</AccordionTrigger>
                  <AccordionContent>
                    In crystal healing tradition, when a bracelet breaks, it's believed to have absorbed negative energy or completed its purpose, protecting you from harm. Thank it for its service. You can bury the beads in earth or keep them in a plant pot. We offer repair services or you can reorder the same bracelet as you may need its energy again.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Do crystals really work or is it placebo?</AccordionTrigger>
                  <AccordionContent>
                    Crystal healing combines ancient spiritual wisdom with observable physical properties (piezoelectric effects). While scientific research is ongoing, millions worldwide report positive experiences. Whether it's placebo, energetic interaction, or both - if it brings you positive change, it's working. We encourage personal experience and an open mind.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I gift a crystal bracelet to someone?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Crystal bracelets make meaningful gifts. When gifting, set positive intentions for the recipient. Cleanse the bracelet first and let them know its properties. The receiver should then set their own intentions when they first wear it. Crystal gifts are especially powerful for birthdays, celebrations, or during challenging times.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>What size bracelet should I order?</AccordionTrigger>
                  <AccordionContent>
                    Most of our bracelets are made with elastic cord and fit wrist sizes 6-8 inches comfortably. For custom sizing, measure your wrist circumference with a measuring tape or string. Add 0.5 inch for comfortable fit. Contact our customer service for custom sizes. We ensure a comfortable fit that's not too tight or loose.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
};

export default Bracelets;
