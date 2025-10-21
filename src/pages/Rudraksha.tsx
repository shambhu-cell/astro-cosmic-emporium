import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ShoppingBag, Shield, Award, Truck, CheckCircle2, MessageCircle, Filter, TrendingUp, Users, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import nirakarImage from "@/assets/rudraksha/nirakar.jpg";
import oneMukhiImage from "@/assets/rudraksha/1-mukhi.jpg";
import threeMukhiImage from "@/assets/rudraksha/3-mukhi.jpg";
import fourMukhiImage from "@/assets/rudraksha/4-mukhi.jpg";

const Rudraksha = () => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");

  // Comprehensive Rudraksha collections by type
  const rudrakshaCollections: Record<string, any> = {
    "all": {
      name: "All Rudraksha",
      description: "Explore our complete collection of authentic Nepal Rudraksha beads, certified and energized for maximum spiritual benefits.",
      mainBenefits: ["Complete Protection", "Spiritual Growth", "Health & Prosperity"],
      products: [] // Will be filled with all products
    },
    "1-mukhi": {
      name: "1 Mukhi Rudraksha",
      deity: "Lord Shiva",
      planet: "Sun",
      mainBenefits: ["Supreme Consciousness", "Leadership", "Self-Realization"],
      description: "1 Mukhi Rudraksha is the rarest and most powerful Rudraksha, representing Lord Shiva himself. It brings self-realization, enhances leadership qualities, and provides divine blessings for spiritual enlightenment.",
      benefits: [
        "Enhances concentration and focus",
        "Brings prosperity and success",
        "Provides mental peace and clarity",
        "Removes obstacles in life"
      ],
      products: [
        {
          id: "1-mukhi",
          name: "Premium 1 Mukhi Rudraksha",
          price: 8399,
          originalPrice: 12200,
          image: oneMukhiImage,
          rating: 4.9,
          reviews: 80,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 1050,
          stockLeft: 5
        }
      ]
    },
    "3-mukhi": {
      name: "3 Mukhi Rudraksha",
      deity: "Agni (Fire God)",
      planet: "Mars",
      mainBenefits: ["Courage", "Confidence", "Past Life Cleansing"],
      description: "3 Mukhi Rudraksha represents the three forms of fire - Agni. It liberates from past karmas, enhances self-esteem, and provides courage to face challenges in life.",
      benefits: [
        "Frees from guilt and sins of past life",
        "Increases confidence and courage",
        "Removes negative energy",
        "Helps in blood-related disorders"
      ],
      products: [
        {
          id: "3-mukhi",
          name: "Certified 3 Mukhi Rudraksha",
          price: 1499,
          originalPrice: 1700,
          image: threeMukhiImage,
          rating: 4.9,
          reviews: 94,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 12
        }
      ]
    },
    "4-mukhi": {
      name: "4 Mukhi Rudraksha",
      deity: "Lord Brahma",
      planet: "Mercury",
      mainBenefits: ["Knowledge", "Creativity", "Communication"],
      description: "4 Mukhi Rudraksha is blessed by Lord Brahma, the creator. It enhances knowledge, creativity, memory power, and communication skills. Perfect for students and professionals.",
      benefits: [
        "Improves memory and intelligence",
        "Enhances creativity and speech",
        "Removes laziness and dullness",
        "Helps in respiratory issues"
      ],
      products: [
        {
          id: "4-mukhi",
          name: "Original 4 Mukhi Rudraksha",
          price: 899,
          originalPrice: 1499,
          image: fourMukhiImage,
          rating: 4.8,
          reviews: 71,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 15
        }
      ]
    },
    "nirakar": {
      name: "Nirakar Rudraksha",
      deity: "Lord Shiva (Formless)",
      planet: "All Planets",
      mainBenefits: ["Universal Protection", "Peace", "Harmony"],
      description: "Nirakar (0 Mukhi) Rudraksha represents the formless aspect of Lord Shiva. It provides universal protection, peace, and harmony. Suitable for everyone regardless of age or zodiac sign.",
      benefits: [
        "Universal protection and blessings",
        "Brings peace and harmony",
        "No side effects - safe for all",
        "Balances all chakras"
      ],
      products: [
        {
          id: "nirakar",
          name: "Nirakar Rudraksha (0 Mukhi)",
          price: 999,
          originalPrice: 1699,
          image: nirakarImage,
          rating: 4.8,
          reviews: 111,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 18
        }
      ]
    },
    "2-mukhi": {
      name: "2 Mukhi Rudraksha",
      deity: "Ardha Nareshwar (Shiva-Parvati)",
      planet: "Moon",
      mainBenefits: ["Unity", "Harmony", "Emotional Balance"],
      description: "2 Mukhi Rudraksha represents Ardha Nareshwar (union of Shiva and Parvati). It brings unity in relationships, emotional balance, and harmonizes contradictory energies.",
      products: [
        {
          id: "2-mukhi",
          name: "Certified 2 Mukhi Rudraksha",
          price: 1299,
          originalPrice: 1899,
          image: threeMukhiImage,
          rating: 4.8,
          reviews: 87,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 14
        }
      ]
    },
    "5-mukhi": {
      name: "5 Mukhi Rudraksha",
      deity: "Kalagni Rudra",
      planet: "Jupiter",
      mainBenefits: ["Health", "Peace", "General Wellness"],
      description: "5 Mukhi Rudraksha is the most common and powerful for general wellness. It controls blood pressure, mental stress, and brings overall peace and harmony.",
      products: [
        {
          id: "5-mukhi",
          name: "Premium 5 Mukhi Rudraksha",
          price: 699,
          originalPrice: 1199,
          image: fourMukhiImage,
          rating: 4.9,
          reviews: 456,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 25
        }
      ]
    },
    "6-mukhi": {
      name: "6 Mukhi Rudraksha",
      deity: "Lord Kartikeya",
      planet: "Mars",
      mainBenefits: ["Willpower", "Focus", "Courage"],
      description: "6 Mukhi Rudraksha is blessed by Lord Kartikeya. It enhances willpower, concentration, and provides courage to overcome obstacles.",
      products: [
        {
          id: "6-mukhi",
          name: "Original 6 Mukhi Rudraksha",
          price: 1899,
          originalPrice: 2799,
          image: oneMukhiImage,
          rating: 4.8,
          reviews: 156,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          stockLeft: 11
        }
      ]
    },
    "7-mukhi": {
      name: "7 Mukhi Rudraksha",
      deity: "Goddess Lakshmi",
      planet: "Saturn",
      mainBenefits: ["Wealth", "Prosperity", "Good Fortune"],
      description: "7 Mukhi Rudraksha is blessed by Goddess Lakshmi. It brings wealth, prosperity, and removes financial obstacles from life.",
      products: [
        {
          id: "7-mukhi",
          name: "Certified 7 Mukhi Rudraksha",
          price: 2499,
          originalPrice: 3499,
          image: nirakarImage,
          rating: 4.9,
          reviews: 198,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 833,
          stockLeft: 9
        }
      ]
    },
    "8-mukhi": {
      name: "8 Mukhi Rudraksha",
      deity: "Lord Ganesha",
      planet: "Rahu",
      mainBenefits: ["Remove Obstacles", "Success", "Wisdom"],
      description: "8 Mukhi Rudraksha is blessed by Lord Ganesha. It removes obstacles, brings success, and enhances wisdom and intellect.",
      products: [
        {
          id: "8-mukhi",
          name: "Premium 8 Mukhi Rudraksha",
          price: 2999,
          originalPrice: 4299,
          image: threeMukhiImage,
          rating: 4.8,
          reviews: 134,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 1000,
          stockLeft: 8
        }
      ]
    },
    "9-mukhi": {
      name: "9 Mukhi Rudraksha",
      deity: "Goddess Durga",
      planet: "Ketu",
      mainBenefits: ["Energy", "Power", "Fearlessness"],
      description: "9 Mukhi Rudraksha is blessed by Goddess Durga. It provides immense energy, power, and fearlessness to overcome all challenges.",
      products: [
        {
          id: "9-mukhi",
          name: "Certified 9 Mukhi Rudraksha",
          price: 3499,
          originalPrice: 4999,
          image: fourMukhiImage,
          rating: 4.9,
          reviews: 112,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 1166,
          stockLeft: 7
        }
      ]
    },
    "10-mukhi": {
      name: "10 Mukhi Rudraksha",
      deity: "Lord Vishnu",
      planet: "All Planets",
      mainBenefits: ["Protection", "Peace", "Success"],
      description: "10 Mukhi Rudraksha is blessed by Lord Vishnu. It provides protection from all negative energies and ensures peace and success in all endeavors.",
      products: [
        {
          id: "10-mukhi",
          name: "Original 10 Mukhi Rudraksha",
          price: 3999,
          originalPrice: 5999,
          image: oneMukhiImage,
          rating: 4.8,
          reviews: 89,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 1333,
          stockLeft: 6
        }
      ]
    },
    "11-mukhi": {
      name: "11 Mukhi Rudraksha",
      deity: "11 Rudras",
      planet: "All Planets",
      mainBenefits: ["Wisdom", "Meditation", "Divine Connection"],
      description: "11 Mukhi Rudraksha is blessed by 11 Rudras. It enhances meditation, provides divine wisdom, and establishes connection with higher consciousness.",
      products: [
        {
          id: "11-mukhi",
          name: "Premium 11 Mukhi Rudraksha",
          price: 4999,
          originalPrice: 7499,
          image: nirakarImage,
          rating: 4.9,
          reviews: 67,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 1666,
          stockLeft: 5
        }
      ]
    },
    "12-mukhi": {
      name: "12 Mukhi Rudraksha",
      deity: "Lord Surya (Sun)",
      planet: "Sun",
      mainBenefits: ["Leadership", "Confidence", "Radiance"],
      description: "12 Mukhi Rudraksha is blessed by Lord Surya. It enhances leadership qualities, brings confidence, and provides the radiance of the Sun.",
      products: [
        {
          id: "12-mukhi",
          name: "Certified 12 Mukhi Rudraksha",
          price: 5499,
          originalPrice: 8299,
          image: threeMukhiImage,
          rating: 4.8,
          reviews: 54,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 1833,
          stockLeft: 4
        }
      ]
    },
    "13-mukhi": {
      name: "13 Mukhi Rudraksha",
      deity: "Lord Indra & Kamadeva",
      planet: "Venus",
      mainBenefits: ["Attraction", "Charisma", "Fulfillment"],
      description: "13 Mukhi Rudraksha is blessed by Lord Indra and Kamadeva. It enhances attraction, charisma, and fulfills all material desires.",
      products: [
        {
          id: "13-mukhi",
          name: "Original 13 Mukhi Rudraksha",
          price: 6999,
          originalPrice: 10499,
          image: fourMukhiImage,
          rating: 4.9,
          reviews: 43,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 2333,
          stockLeft: 3
        }
      ]
    },
    "14-mukhi": {
      name: "14 Mukhi Rudraksha",
      deity: "Lord Hanuman",
      planet: "Saturn",
      mainBenefits: ["Courage", "Strength", "Protection"],
      description: "14 Mukhi Rudraksha is blessed by Lord Hanuman. It provides immense courage, physical and mental strength, and divine protection.",
      products: [
        {
          id: "14-mukhi",
          name: "Premium 14 Mukhi Rudraksha",
          price: 9999,
          originalPrice: 14999,
          image: oneMukhiImage,
          rating: 4.9,
          reviews: 38,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 3333,
          stockLeft: 3
        }
      ]
    },
    "15-mukhi": {
      name: "15 Mukhi Rudraksha",
      deity: "Lord Pashupatinath",
      planet: "All Planets",
      mainBenefits: ["Spiritual Growth", "Healing", "Fortune"],
      description: "15 Mukhi Rudraksha is blessed by Lord Pashupatinath. It accelerates spiritual growth, provides healing powers, and brings good fortune.",
      products: [
        {
          id: "15-mukhi",
          name: "Certified 15 Mukhi Rudraksha",
          price: 11999,
          originalPrice: 17999,
          image: nirakarImage,
          rating: 4.8,
          reviews: 29,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 4000,
          stockLeft: 2
        }
      ]
    },
    "16-mukhi": {
      name: "16 Mukhi Rudraksha",
      deity: "Lord Mahamrityunjaya",
      planet: "All Planets",
      mainBenefits: ["Victory", "Protection", "Longevity"],
      description: "16 Mukhi Rudraksha is blessed by Lord Mahamrityunjaya. It provides victory over death, complete protection, and enhances longevity.",
      products: [
        {
          id: "16-mukhi",
          name: "Original 16 Mukhi Rudraksha",
          price: 14999,
          originalPrice: 22499,
          image: threeMukhiImage,
          rating: 4.9,
          reviews: 21,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 5000,
          stockLeft: 2
        }
      ]
    },
    "17-mukhi": {
      name: "17 Mukhi Rudraksha",
      deity: "Vishwakarma",
      planet: "All Planets",
      mainBenefits: ["Wealth", "Creativity", "Success"],
      description: "17 Mukhi Rudraksha is blessed by Vishwakarma. It brings unexpected wealth, enhances creativity, and ensures success in all ventures.",
      products: [
        {
          id: "17-mukhi",
          name: "Premium 17 Mukhi Rudraksha",
          price: 17999,
          originalPrice: 26999,
          image: fourMukhiImage,
          rating: 4.8,
          reviews: 15,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 6000,
          stockLeft: 1
        }
      ]
    },
    "18-mukhi": {
      name: "18 Mukhi Rudraksha",
      deity: "Bhumi (Mother Earth)",
      planet: "Earth",
      mainBenefits: ["Grounding", "Stability", "Prosperity"],
      description: "18 Mukhi Rudraksha is blessed by Bhumi (Mother Earth). It provides grounding energy, stability in life, and attracts prosperity.",
      products: [
        {
          id: "18-mukhi",
          name: "Certified 18 Mukhi Rudraksha",
          price: 21999,
          originalPrice: 32999,
          image: oneMukhiImage,
          rating: 4.9,
          reviews: 12,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 7333,
          stockLeft: 1
        }
      ]
    },
    "19-mukhi": {
      name: "19 Mukhi Rudraksha",
      deity: "Lord Narayana",
      planet: "All Planets",
      mainBenefits: ["Success", "Abundance", "Divine Grace"],
      description: "19 Mukhi Rudraksha is blessed by Lord Narayana. It brings success in all endeavors, abundance, and showers divine grace upon the wearer.",
      products: [
        {
          id: "19-mukhi",
          name: "Original 19 Mukhi Rudraksha",
          price: 27999,
          originalPrice: 41999,
          image: nirakarImage,
          rating: 4.9,
          reviews: 8,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 9333,
          stockLeft: 1
        }
      ]
    },
    "20-mukhi": {
      name: "20 Mukhi Rudraksha",
      deity: "Lord Brahma",
      planet: "All Planets",
      mainBenefits: ["Creation", "Knowledge", "Divine Power"],
      description: "20 Mukhi Rudraksha is blessed by Lord Brahma, the creator. It bestows creative power, divine knowledge, and opens all doors of success.",
      products: [
        {
          id: "20-mukhi",
          name: "Premium 20 Mukhi Rudraksha",
          price: 34999,
          originalPrice: 52499,
          image: threeMukhiImage,
          rating: 5.0,
          reviews: 6,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 11666,
          stockLeft: 1
        }
      ]
    },
    "21-mukhi": {
      name: "21 Mukhi Rudraksha",
      deity: "Kuber (Lord of Wealth)",
      planet: "All Planets",
      mainBenefits: ["Immense Wealth", "Luxury", "Ultimate Success"],
      description: "21 Mukhi Rudraksha is the rarest and most powerful, blessed by Kuber. It brings immense wealth, luxury, and ultimate success in all aspects of life.",
      products: [
        {
          id: "21-mukhi",
          name: "Rare 21 Mukhi Rudraksha",
          price: 49999,
          originalPrice: 74999,
          image: fourMukhiImage,
          rating: 5.0,
          reviews: 4,
          size: "18mm - 22mm",
          origin: "Nepal",
          certified: true,
          energized: true,
          emi: true,
          emiAmount: 16666,
          stockLeft: 1
        }
      ]
    }
  };

  // Fill 'all' category with all products
  Object.keys(rudrakshaCollections).forEach(key => {
    if (key !== 'all') {
      rudrakshaCollections['all'].products.push(...rudrakshaCollections[key].products);
    }
  });

  const activeTab = "all";
  const currentCollection = rudrakshaCollections[activeTab];
  const filteredProducts = currentCollection.products;

  const faqs = [
    {
      question: "How do I know which Mukhi Rudraksha is right for me?",
      answer: "Each Mukhi Rudraksha has specific benefits based on planetary influences and life goals. We recommend consulting with our expert astrologers for personalized guidance. Click 'Talk to Expert' for a free consultation based on your birth chart and requirements."
    },
    {
      question: "Are these Rudraksha beads authentic and certified?",
      answer: "Yes, all our Rudraksha beads are 100% authentic, sourced from Nepal, and come with government lab certification. Each bead undergoes rigorous testing including X-ray examination to verify authenticity."
    },
    {
      question: "What is the difference between energized and non-energized Rudraksha?",
      answer: "Energized Rudraksha has been activated through Vedic mantras and rituals by experienced priests. This enhances its spiritual power and makes it ready to wear immediately. All our Rudraksha come pre-energized."
    },
    {
      question: "How should I wear Rudraksha?",
      answer: "Rudraksha can be worn as a pendant, bracelet, or mala. It should touch your skin for maximum benefits. Monday is considered auspicious for wearing Rudraksha. Detailed wearing instructions and mantras are provided with each purchase."
    },
    {
      question: "Can anyone wear Rudraksha or are there restrictions?",
      answer: "Rudraksha can be worn by anyone regardless of age, gender, caste, or religion. There are no side effects. However, specific Mukhi types may be recommended based on individual needs and astrological chart."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, you can return the Rudraksha within 30 days for a full refund. The item must be in original condition with certificate and packaging intact."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Rudraksha</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-base px-4 py-1">
            <Award className="h-4 w-4 mr-2" />
            Certified Authentic Rudraksha from Nepal
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Original Rudraksha Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Lab Certified Nepal Rudraksha Beads - Energized by Expert Vedic Priests for Divine Blessings & Spiritual Growth
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span><strong className="text-primary">50,000+</strong> Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
              <span><strong className="text-amber-500">4.9/5</strong> Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span><strong className="text-green-600">1 Lakh+</strong> Rudraksha Sold</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-end mb-6">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product: any) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-2 hover:border-primary/50 bg-gradient-to-br from-amber-50 to-background dark:from-amber-950/20"
              onClick={() => navigate(`/rudraksha/${product.id}`)}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-amber-50 to-white dark:from-amber-951/20 p-6">
                  <div className="absolute top-2 left-2 right-2 flex flex-col gap-1 z-10">
                    {product.certified && (
                      <Badge className="bg-green-600 text-white text-[10px] px-1.5 py-0.5 w-fit">
                        <Shield className="h-2.5 w-2.5 mr-0.5" />
                        Certified
                      </Badge>
                    )}
                    {product.energized && (
                      <Badge className="bg-amber-600 text-white text-[10px] px-1.5 py-0.5 w-fit">
                        Energized
                      </Badge>
                    )}
                  </div>
                  {product.discount && (
                    <Badge className="absolute bottom-2 right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 z-10">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3 bg-background">
                  {/* Title */}
                  <div>
                    <p className="text-xs text-muted-foreground font-medium mb-1">
                      {product.origin} Origin • {product.size}
                    </p>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  {/* Stock */}
                  {product.stockLeft <= 10 && (
                    <p className="text-xs text-orange-600 font-medium">
                      ⚡ Only {product.stockLeft} left in stock!
                    </p>
                  )}

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    {product.emi && (
                      <p className="text-xs text-muted-foreground">
                        or ₹{product.emiAmount}/month
                        <Badge variant="outline" className="ml-2 text-[10px] px-1.5 py-0">EMI</Badge>
                      </p>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full" size="lg">
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://wa.me/1234567890?text=Hi, I need expert consultation about ' + product.name, '_blank');
                      }}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Talk to Expert
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Tabs Section */}
        <Tabs defaultValue="benefits" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="wearing">How to Wear</TabsTrigger>
            <TabsTrigger value="care">Care Guide</TabsTrigger>
          </TabsList>

          {/* Benefits Tab */}
          <TabsContent value="benefits" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Spiritual Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Enhances meditation and spiritual practices</li>
                      <li>• Connects you with divine consciousness</li>
                      <li>• Balances chakras and energy flow</li>
                      <li>• Promotes inner peace and tranquility</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Health Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Reduces stress and anxiety</li>
                      <li>• Improves blood circulation</li>
                      <li>• Enhances overall vitality</li>
                      <li>• Supports mental clarity and focus</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Professional Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Attracts success and prosperity</li>
                      <li>• Enhances decision-making abilities</li>
                      <li>• Improves confidence and leadership</li>
                      <li>• Removes obstacles in career path</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Protective Benefits</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Shields from negative energies</li>
                      <li>• Protects against evil eye and black magic</li>
                      <li>• Provides emotional stability</li>
                      <li>• Creates a protective aura around wearer</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* How to Wear Tab */}
          <TabsContent value="wearing" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">How to Wear Rudraksha</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Best Day to Wear</h3>
                  <p className="text-muted-foreground">
                    Monday is considered the most auspicious day to wear Rudraksha as it's dedicated to Lord Shiva. 
                    Wear it early morning after bath during Brahma Muhurta (before sunrise) for maximum benefits.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">How to Wear</h3>
                  <p className="text-muted-foreground">
                    Rudraksha can be worn as a pendant, bracelet, or mala (necklace). It should touch your skin for maximum benefits. 
                    The bead can be worn by anyone regardless of age, gender, caste, or religion.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Energization Process</h3>
                  <p className="text-muted-foreground">
                    All our Rudraksha beads come pre-energized. However, you can re-energize them by washing with Ganga Jal or clean water, 
                    applying sandalwood paste, and chanting "Om Namah Shivaya" 108 times while holding the bead.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Mantra to Chant</h3>
                  <p className="text-muted-foreground">
                    Before wearing, chant the mantra "Om Namah Shivaya" 108 times. You can also chant specific mantras 
                    associated with each Mukhi type for enhanced benefits. Mantras are provided with each purchase.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Who Should Wear</h3>
                  <p className="text-muted-foreground">
                    Anyone can wear Rudraksha. There are no restrictions based on gender, age, caste, or religion. 
                    However, specific Mukhi types may be more beneficial for certain individuals based on their astrological chart.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Care Guide Tab */}
          <TabsContent value="care" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Care Instructions for Rudraksha</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Daily Care</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Remove Rudraksha before bathing or swimming</li>
                    <li>• Avoid wearing during sleep if possible</li>
                    <li>• Keep away from chemicals, perfumes, and soap</li>
                    <li>• Store in a clean, sacred place when not wearing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Cleaning Instructions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Clean with water and a soft brush once a week</li>
                    <li>• Apply a drop of oil (sandalwood or mustard) occasionally</li>
                    <li>• Wipe with a soft cloth after oiling</li>
                    <li>• Never use harsh chemicals or detergents</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Energetic Cleansing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Wash with Ganga Jal or clean water every full moon</li>
                    <li>• Re-energize by chanting mantras periodically</li>
                    <li>• Keep near a Shiva idol or sacred space</li>
                    <li>• Avoid wearing during inauspicious occasions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">What to Avoid</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Don't let others touch your Rudraksha</li>
                    <li>• Avoid wearing during funeral ceremonies</li>
                    <li>• Don't wear while consuming alcohol or non-vegetarian food</li>
                    <li>• Remove during intimate activities</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> Proper care ensures your Rudraksha remains energized and effective. 
                    If you notice any cracks or damage, consult with us for guidance. We offer lifetime support for all our products.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Expert Consultation Banner */}
        <Card className="mt-12 border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Not Sure Which Rudraksha to Choose?</h3>
                  <p className="text-sm text-muted-foreground">Get FREE consultation from our expert astrologers</p>
                </div>
              </div>
              <Button 
                size="lg"
                className="whitespace-nowrap"
                onClick={() => window.open('https://wa.me/1234567890?text=Hi, I need expert consultation about Rudraksha', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Talk to Expert - FREE
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose AstroSage Rudraksha?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">100% Authentic</h3>
              <p className="text-sm text-muted-foreground">Original Nepal Rudraksha with lab certification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Energized & Blessed</h3>
              <p className="text-sm text-muted-foreground">Activated by expert Vedic priests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">X-ray tested and lab verified</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">50,000+ Customers</h3>
              <p className="text-sm text-muted-foreground">Trusted by devotees worldwide</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Confused Which Rudraksha to Buy?
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Get personalized Rudraksha recommendation from our expert astrologers based on your birth chart
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            onClick={() => window.open('https://wa.me/1234567890?text=Hi, I need help choosing the right Rudraksha', '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get FREE Consultation Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rudraksha;
