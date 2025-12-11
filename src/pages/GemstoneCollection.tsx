import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Star, Shield, Award, Filter, ChevronDown, Sparkles, Heart, Users, 
  MessageCircle, TrendingUp, Clock, CheckCircle, Zap, Eye, Phone, 
  ChevronRight, ChevronLeft, ArrowRight, Truck, RefreshCcw, BadgeCheck,
  MapPin, Scale, Gem, Calendar, Sun, Moon, Flame, Timer, ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import blueSapphireImage from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImage from "@/assets/gemstones/ruby.jpg";
import emeraldImage from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImage from "@/assets/gemstones/yellow-sapphire.jpg";

const GemstoneCollection = () => {
  const { gemstoneType } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [selectedOrigin, setSelectedOrigin] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [weightRange, setWeightRange] = useState("all");
  const [viewingCount, setViewingCount] = useState(47);
  const [activeTab, setActiveTab] = useState("about");
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 34, seconds: 56 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate live viewing count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewingCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll handlers for origin filters
  const scrollOrigins = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Define comprehensive gemstone data
  const gemstoneCollections: Record<string, any> = {
    "blue-sapphire": {
      name: "Blue Sapphire (Neelam Stone)",
      hindiName: "नीलम",
      planet: "Saturn (Shani)",
      zodiacSigns: ["Capricorn", "Aquarius"],
      element: "Air",
      chakra: "Third Eye",
      mainBenefits: ["Alleviates Misfortune", "Supports Mental Health", "Increases Wisdom", "Success in Business"],
      shortDescription: "Blue Sapphire (Neelam Stone) is a precious, blue-coloured gemstone of the Corundum mineral family. Recognized as the most powerful and fastest-acting gemstone in Vedic astrology, Neelam Ratna brings instant wealth, fame, and success to the wearer's life.",
      tagline: "Wear the stone of kings and let your legacy shine.",
      priceRange: "₹2,500 - ₹2,00,000 per carat",
      origins: [
        { id: "ceylon", name: "Ceylon Blue Sapphire", shortName: "Ceylon", priceRange: "₹2,000 - ₹32,000/ct" },
        { id: "kashmir", name: "Kashmir Blue Sapphire", shortName: "Kashmir", priceRange: "₹50,000 - ₹5,00,000+/ct" },
        { id: "madagascar", name: "Madagascar Blue Sapphire", shortName: "Madagascar", priceRange: "₹3,000 - ₹40,000/ct" },
        { id: "thailand", name: "Thailand Blue Sapphire", shortName: "Thailand", priceRange: "₹2,500 - ₹25,000/ct" },
        { id: "african", name: "African Blue Sapphire", shortName: "African", priceRange: "₹2,000 - ₹20,000/ct" },
        { id: "burmese", name: "Burmese Blue Sapphire", shortName: "Burmese", priceRange: "₹15,000 - ₹1,00,000/ct" },
        { id: "star", name: "Blue Star Sapphire", shortName: "Star", priceRange: "₹5,000 - ₹50,000/ct" },
        { id: "cornflower", name: "Cornflower Blue Sapphire", shortName: "Cornflower", priceRange: "₹20,000 - ₹1,50,000/ct" },
      ],
      wearing: {
        weight: "Minimum 1/12th of body weight. E.g., 60 Kg person = 5 carat stone",
        color: "Bright medium to dark blue for best astrological results",
        metal: "Silver is highly recommended. Gold is usually avoided.",
        finger: "Middle finger of the working hand",
        dayTime: "Saturday, early morning between 5-7 am",
        mantra: "Om Sham Shanicharaya Namah, ऊँ शं शनैश्चराय नमः। (108 times)"
      },
      whoShouldWear: [
        "People undergoing 'Shani Sadhe Saati' or 'Dhaiya' phase",
        "Makar (Capricorn) and Kumbh (Aquarius) Rashi natives",
        "Libra zodiac sign (Western astrology)",
        "Gemini, Virgo, and Taurus can also wear",
        "Those with nerve, bone, or teeth issues",
        "Professionals in mining, geology, research, astrology"
      ],
      benefits: [
        { title: "Instant Success", desc: "Break career deadlocks and turn fortunes around quickly" },
        { title: "Surging Fortunes", desc: "Abundant opportunities to create and manage wealth" },
        { title: "Fame & Popularity", desc: "Makes talent and hard work recognized, bringing recognition" },
        { title: "Discipline & Focus", desc: "Inculcates discipline, determination, and progressive work ethic" },
        { title: "Overcome Obstacles", desc: "Mitigates negative effects of Shani Sadhe Saati" },
        { title: "Health Benefits", desc: "Heals joint pain, gout, arthritis; improves mental health" }
      ],
      products: [
        { id: "bs-ceylon-3", name: "Ceylon Blue Sapphire", price: 8999, originalPrice: 14999, image: blueSapphireImage, rating: 4.9, reviews: 243, weight: "3.21 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "GP142922", shape: "Oval", treatment: "Natural Untreated" },
        { id: "bs-ceylon-4", name: "Ceylon Blue Sapphire", price: 12999, originalPrice: 19999, image: blueSapphireImage, rating: 4.9, reviews: 189, weight: "4.78 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "GP78604", shape: "Cushion", treatment: "Natural Untreated" },
        { id: "bs-kashmir-4", name: "Kashmir Sapphire", price: 45999, originalPrice: 65999, image: blueSapphireImage, rating: 4.9, reviews: 156, weight: "4.83 Carat", origin: "India (Kashmir)", certified: true, clarity: "VVS", sku: "GP72497", shape: "Oval", treatment: "Natural Untreated" },
        { id: "bs-ceylon-5", name: "Ceylon Blue Sapphire 10x8 MM", price: 15999, originalPrice: 24999, image: blueSapphireImage, rating: 4.8, reviews: 201, weight: "4.65 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VS", sku: "GP112965", shape: "Oval", treatment: "Natural Untreated" },
        { id: "bs-madagascar-3", name: "Madagascar Blue Sapphire", price: 9999, originalPrice: 16999, image: blueSapphireImage, rating: 4.8, reviews: 134, weight: "3.45 Carat", origin: "Madagascar", certified: true, clarity: "VVS", sku: "GP156789", shape: "Cushion", treatment: "Natural Untreated" },
        { id: "bs-ceylon-6", name: "Royal Ceylon Sapphire", price: 21999, originalPrice: 34999, image: blueSapphireImage, rating: 4.9, reviews: 167, weight: "6.12 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "GP234567", shape: "Oval", treatment: "Natural Untreated" },
        { id: "bs-star-4", name: "Blue Star Sapphire", price: 18999, originalPrice: 29999, image: blueSapphireImage, rating: 4.7, reviews: 89, weight: "4.25 Carat", origin: "Sri Lanka", certified: true, clarity: "VS", sku: "GP345678", shape: "Cabochon", treatment: "Natural Untreated" },
        { id: "bs-cornflower-5", name: "Cornflower Blue Sapphire", price: 35999, originalPrice: 52999, image: blueSapphireImage, rating: 4.9, reviews: 112, weight: "5.08 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "GP456789", shape: "Oval", treatment: "Natural Untreated" },
      ],
      faqs: [
        { q: "What is a Blue Sapphire?", a: "Blue Sapphire is the primary gemstone for Planet Saturn according to Vedic astrology. Worn to get the blessings of Planet Saturn, it brings stability, prosperity, and reversal of long-time misfortunes of the individual." },
        { q: "How much does a Blue Sapphire cost?", a: "The original neelam stone price, gem-quality blue sapphire stones may begin from ₹2,500 per carat to ₹2,00,000 per carat and even go beyond that for exceedingly high-quality specimens." },
        { q: "Will Blue Sapphire suit me?", a: "Natural blue sapphire suits individuals aligned with Saturn's energy, offering transformative benefits. However, its strong effects require thorough astrological consultation to avoid adverse impacts." },
        { q: "How do I identify an original Blue Sapphire?", a: "Original Blue Sapphires will always have inclusions and imperfections. Enhanced stones have great colour with minimal imperfections, which are traits of the best and rare specimens." },
        { q: "Which coloured Blue Sapphire is astrologically most effective?", a: "Deeply saturated blue sapphire stones with vivid brightness, known as 'true blue' or cornflower blue, are most effective." },
        { q: "Can I wear a Blue Sapphire in less carat weight?", a: "Yes, a Blue Sapphire gemstone can be worn in a lower carat weight if it is of high quality and untreated. Even a smaller but genuine stone can deliver effective results." }
      ]
    },
    "yellow-sapphire": {
      name: "Yellow Sapphire (Pukhraj)",
      hindiName: "पुखराज",
      planet: "Jupiter (Guru)",
      zodiacSigns: ["Sagittarius", "Pisces"],
      element: "Fire",
      chakra: "Solar Plexus",
      mainBenefits: ["Prosperity & Wealth", "Wisdom & Knowledge", "Marriage Harmony", "Good Fortune"],
      shortDescription: "Yellow Sapphire (Pukhraj) is the gemstone of Jupiter, the planet of wisdom, fortune, and expansion. This precious yellow gem brings prosperity, marital bliss, and career success to the wearer.",
      tagline: "Embrace the blessings of Jupiter for unlimited prosperity.",
      priceRange: "₹3,000 - ₹1,50,000 per carat",
      origins: [
        { id: "ceylon", name: "Ceylon Yellow Sapphire", shortName: "Ceylon", priceRange: "₹5,000 - ₹50,000/ct" },
        { id: "bangkok", name: "Bangkok Yellow Sapphire", shortName: "Bangkok", priceRange: "₹3,000 - ₹25,000/ct" },
        { id: "african", name: "African Yellow Sapphire", shortName: "African", priceRange: "₹4,000 - ₹30,000/ct" },
        { id: "madagascar", name: "Madagascar Yellow Sapphire", shortName: "Madagascar", priceRange: "₹5,000 - ₹40,000/ct" },
      ],
      wearing: {
        weight: "Minimum 1/10th of body weight for best results",
        color: "Bright canary yellow to golden yellow",
        metal: "Gold is highly recommended",
        finger: "Index finger of the right hand",
        dayTime: "Thursday morning during Shukla Paksha",
        mantra: "Om Graam Greem Graum Sah Guruve Namah (108 times)"
      },
      whoShouldWear: [
        "Sagittarius (Dhanu) and Pisces (Meen) Rashi natives",
        "Those seeking marriage or marital harmony",
        "Students and academics seeking wisdom",
        "Business professionals seeking growth",
        "Those with weak Jupiter in horoscope"
      ],
      benefits: [
        { title: "Wealth & Prosperity", desc: "Attracts financial abundance and business opportunities" },
        { title: "Marriage Bliss", desc: "Strengthens marital relationships and attracts suitable partners" },
        { title: "Academic Success", desc: "Enhances wisdom, learning ability, and intellectual pursuits" },
        { title: "Career Growth", desc: "Promotes professional advancement and recognition" },
        { title: "Good Health", desc: "Improves liver health and digestive system" },
        { title: "Spiritual Growth", desc: "Enhances spiritual awareness and divine blessings" }
      ],
      products: [
        { id: "ys-ceylon-3", name: "Ceylon Yellow Sapphire", price: 10999, originalPrice: 15999, image: yellowSapphireImage, rating: 4.9, reviews: 289, weight: "3.15 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS142922", shape: "Oval", treatment: "Natural Untreated" },
        { id: "ys-ceylon-4", name: "Ceylon Yellow Sapphire", price: 14999, originalPrice: 21999, image: yellowSapphireImage, rating: 4.8, reviews: 234, weight: "4.52 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS78604", shape: "Cushion", treatment: "Natural Untreated" },
        { id: "ys-ceylon-5", name: "Premium Yellow Sapphire", price: 19999, originalPrice: 29999, image: yellowSapphireImage, rating: 4.9, reviews: 198, weight: "5.21 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS72497", shape: "Oval", treatment: "Natural Untreated" },
        { id: "ys-bangkok-4", name: "Bangkok Yellow Sapphire", price: 8999, originalPrice: 13999, image: yellowSapphireImage, rating: 4.7, reviews: 176, weight: "4.08 Carat", origin: "Thailand (Bangkok)", certified: true, clarity: "VS", sku: "YS112965", shape: "Oval", treatment: "Natural Untreated" },
        { id: "ys-ceylon-6", name: "Golden Ceylon Sapphire", price: 26999, originalPrice: 39999, image: yellowSapphireImage, rating: 4.9, reviews: 145, weight: "6.34 Carat", origin: "Sri Lanka (Ceylon)", certified: true, clarity: "VVS", sku: "YS234567", shape: "Cushion", treatment: "Natural Untreated" },
        { id: "ys-african-3", name: "African Yellow Sapphire", price: 7999, originalPrice: 11999, image: yellowSapphireImage, rating: 4.8, reviews: 203, weight: "3.45 Carat", origin: "Africa", certified: true, clarity: "VS", sku: "YS345678", shape: "Oval", treatment: "Natural Untreated" },
      ],
      faqs: [
        { q: "What is Yellow Sapphire?", a: "Yellow Sapphire (Pukhraj) is the primary gemstone for Planet Jupiter according to Vedic astrology. It brings wisdom, prosperity, and marital happiness to the wearer." },
        { q: "How much does Yellow Sapphire cost?", a: "Yellow Sapphire prices range from ₹3,000 to ₹1,50,000 per carat depending on origin, color, and clarity." },
        { q: "Which finger should I wear Yellow Sapphire?", a: "Yellow Sapphire should be worn on the index finger of the right hand, set in gold metal." },
        { q: "Can unmarried people wear Yellow Sapphire?", a: "Yes, Yellow Sapphire is especially recommended for those seeking marriage as it attracts suitable life partners." }
      ]
    },
    "ruby": {
      name: "Ruby (Manik)",
      hindiName: "माणिक",
      planet: "Sun (Surya)",
      zodiacSigns: ["Leo"],
      element: "Fire",
      chakra: "Heart",
      mainBenefits: ["Leadership & Authority", "Confidence & Courage", "Health & Vitality", "Fame & Recognition"],
      shortDescription: "Ruby (Manik) is the gemstone of the Sun, the king of all planets. This precious red gemstone brings leadership qualities, vitality, and success in authoritative positions to the wearer.",
      tagline: "Command respect and shine like the Sun.",
      priceRange: "₹5,000 - ₹3,00,000 per carat",
      origins: [
        { id: "burmese", name: "Burmese Ruby", shortName: "Burmese", priceRange: "₹50,000 - ₹3,00,000+/ct" },
        { id: "african", name: "African Ruby", shortName: "African", priceRange: "₹5,000 - ₹50,000/ct" },
        { id: "mozambique", name: "Mozambique Ruby", shortName: "Mozambique", priceRange: "₹10,000 - ₹80,000/ct" },
        { id: "thai", name: "Thai Ruby", shortName: "Thai", priceRange: "₹8,000 - ₹40,000/ct" },
      ],
      wearing: {
        weight: "Minimum 3 Ratti or 1/10th of body weight",
        color: "Pigeon blood red is most valuable",
        metal: "Gold or Copper",
        finger: "Ring finger of the right hand",
        dayTime: "Sunday morning during sunrise",
        mantra: "Om Hraam Hreem Hraum Sah Suryaya Namah (108 times)"
      },
      whoShouldWear: [
        "Leo (Simha) Rashi natives",
        "Those in leadership or government positions",
        "People seeking fame and recognition",
        "Those with weak Sun in horoscope",
        "Politicians and administrators"
      ],
      benefits: [
        { title: "Leadership Qualities", desc: "Enhances authority, command, and respect from others" },
        { title: "Confidence & Courage", desc: "Boosts self-confidence and fearlessness" },
        { title: "Health & Vitality", desc: "Improves blood circulation and heart health" },
        { title: "Fame & Recognition", desc: "Brings public recognition and social status" },
        { title: "Career Success", desc: "Promotes success in government and administrative roles" },
        { title: "Protection", desc: "Protects from enemies and negative influences" }
      ],
      products: [
        { id: "r-burma-3", name: "Burmese Ruby", price: 45999, originalPrice: 65999, image: rubyImage, rating: 4.9, reviews: 267, weight: "3.12 Carat", origin: "Burma (Myanmar)", certified: true, clarity: "VVS", sku: "RB142922", shape: "Oval", treatment: "Natural Untreated" },
        { id: "r-african-4", name: "African Ruby", price: 15999, originalPrice: 23999, image: rubyImage, rating: 4.8, reviews: 189, weight: "4.25 Carat", origin: "Africa", certified: true, clarity: "VS", sku: "RB78604", shape: "Cushion", treatment: "Natural Untreated" },
        { id: "r-mozambique-3", name: "Mozambique Ruby", price: 25999, originalPrice: 38999, image: rubyImage, rating: 4.9, reviews: 156, weight: "3.78 Carat", origin: "Mozambique", certified: true, clarity: "VVS", sku: "RB72497", shape: "Oval", treatment: "Natural Untreated" },
        { id: "r-burma-4", name: "Pigeon Blood Ruby", price: 89999, originalPrice: 129999, image: rubyImage, rating: 4.9, reviews: 98, weight: "4.15 Carat", origin: "Burma (Myanmar)", certified: true, clarity: "VVS", sku: "RB112965", shape: "Oval", treatment: "Natural Untreated" },
        { id: "r-african-5", name: "Premium African Ruby", price: 21999, originalPrice: 32999, image: rubyImage, rating: 4.8, reviews: 145, weight: "5.34 Carat", origin: "Africa", certified: true, clarity: "VS", sku: "RB234567", shape: "Cushion", treatment: "Natural Untreated" },
        { id: "r-thai-3", name: "Thai Ruby", price: 12999, originalPrice: 19999, image: rubyImage, rating: 4.7, reviews: 178, weight: "3.45 Carat", origin: "Thailand", certified: true, clarity: "VS", sku: "RB345678", shape: "Oval", treatment: "Natural Untreated" },
      ],
      faqs: [
        { q: "What is Ruby (Manik)?", a: "Ruby is the gemstone of the Sun, the king of planets. It brings leadership qualities, vitality, and success to the wearer." },
        { q: "How much does Ruby cost?", a: "Ruby prices range from ₹5,000 to ₹3,00,000 per carat. Burmese Pigeon Blood rubies are the most expensive." },
        { q: "Which finger should I wear Ruby?", a: "Ruby should be worn on the ring finger of the right hand, preferably in gold." },
        { q: "What are the benefits of wearing Ruby?", a: "Ruby brings leadership qualities, confidence, fame, good health, and protection from enemies." }
      ]
    },
    "emerald": {
      name: "Emerald (Panna)",
      hindiName: "पन्ना",
      planet: "Mercury (Budh)",
      zodiacSigns: ["Gemini", "Virgo"],
      element: "Earth",
      chakra: "Heart",
      mainBenefits: ["Intelligence & Wisdom", "Communication Skills", "Business Success", "Creative Expression"],
      shortDescription: "Emerald (Panna) is the gemstone of Mercury, the planet of intellect and communication. This precious green gemstone enhances intelligence, business acumen, and creative abilities.",
      tagline: "Unlock the power of your mind with Mercury's blessing.",
      priceRange: "₹2,000 - ₹1,00,000 per carat",
      origins: [
        { id: "colombian", name: "Colombian Emerald", shortName: "Colombian", priceRange: "₹15,000 - ₹1,00,000+/ct" },
        { id: "zambian", name: "Zambian Emerald", shortName: "Zambian", priceRange: "₹5,000 - ₹50,000/ct" },
        { id: "brazilian", name: "Brazilian Emerald", shortName: "Brazilian", priceRange: "₹3,000 - ₹25,000/ct" },
        { id: "russian", name: "Russian Emerald", shortName: "Russian", priceRange: "₹8,000 - ₹40,000/ct" },
      ],
      wearing: {
        weight: "Minimum 3.25 Ratti or 1/10th of body weight",
        color: "Deep green with good saturation",
        metal: "Gold or Silver",
        finger: "Little finger of the right hand",
        dayTime: "Wednesday morning during Mercury hora",
        mantra: "Om Bum Budhaya Namah (108 times)"
      },
      whoShouldWear: [
        "Gemini (Mithun) and Virgo (Kanya) Rashi natives",
        "Writers, artists, and creative professionals",
        "Business owners and entrepreneurs",
        "Students preparing for competitive exams",
        "Those in communication-related careers"
      ],
      benefits: [
        { title: "Enhanced Intelligence", desc: "Sharpens mind, improves memory and analytical skills" },
        { title: "Communication Skills", desc: "Improves speech, writing, and presentation abilities" },
        { title: "Business Success", desc: "Attracts profitable opportunities and wise decisions" },
        { title: "Creative Expression", desc: "Enhances artistic abilities and creative thinking" },
        { title: "Academic Excellence", desc: "Improves concentration and learning capacity" },
        { title: "Nervous System", desc: "Beneficial for nervous system and skin conditions" }
      ],
      products: [
        { id: "e-colombian-3", name: "Colombian Emerald", price: 25999, originalPrice: 38999, image: emeraldImage, rating: 4.9, reviews: 243, weight: "3.18 Carat", origin: "Colombia", certified: true, clarity: "VVS", sku: "EM142922", shape: "Oval", treatment: "Natural Minor Oil" },
        { id: "e-zambian-4", name: "Zambian Emerald", price: 15999, originalPrice: 24999, image: emeraldImage, rating: 4.8, reviews: 189, weight: "4.32 Carat", origin: "Zambia", certified: true, clarity: "VS", sku: "EM78604", shape: "Octagon", treatment: "Natural Minor Oil" },
        { id: "e-colombian-5", name: "Premium Colombian Emerald", price: 45999, originalPrice: 65999, image: emeraldImage, rating: 4.9, reviews: 167, weight: "5.05 Carat", origin: "Colombia", certified: true, clarity: "VVS", sku: "EM72497", shape: "Emerald Cut", treatment: "Natural Untreated" },
        { id: "e-brazilian-3", name: "Brazilian Emerald", price: 9999, originalPrice: 14999, image: emeraldImage, rating: 4.7, reviews: 201, weight: "3.75 Carat", origin: "Brazil", certified: true, clarity: "VS", sku: "EM112965", shape: "Oval", treatment: "Natural Minor Oil" },
        { id: "e-zambian-5", name: "Vivid Zambian Emerald", price: 21999, originalPrice: 32999, image: emeraldImage, rating: 4.9, reviews: 134, weight: "5.21 Carat", origin: "Zambia", certified: true, clarity: "VVS", sku: "EM234567", shape: "Cushion", treatment: "Natural Minor Oil" },
        { id: "e-colombian-4", name: "Muzo Colombian Emerald", price: 35999, originalPrice: 52999, image: emeraldImage, rating: 4.9, reviews: 112, weight: "4.45 Carat", origin: "Colombia (Muzo)", certified: true, clarity: "VVS", sku: "EM345678", shape: "Octagon", treatment: "Natural Untreated" },
      ],
      faqs: [
        { q: "What is Emerald (Panna)?", a: "Emerald is the gemstone of Mercury, enhancing intelligence, communication skills, and business success." },
        { q: "How much does Emerald cost?", a: "Emerald prices range from ₹2,000 to ₹1,00,000 per carat. Colombian emeralds are the most valuable." },
        { q: "Which finger should I wear Emerald?", a: "Emerald should be worn on the little finger of the right hand, in gold or silver." },
        { q: "Is treated Emerald effective astrologically?", a: "Minor oil treatment is acceptable and natural for emeralds. However, heavily treated stones may have reduced astrological effects." }
      ]
    },
  };

  const currentCollection = gemstoneType ? gemstoneCollections[gemstoneType] : null;

  if (!currentCollection) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Gemstone Collection Not Found</h1>
          <p className="text-muted-foreground">The gemstone you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/gemstones")}>View All Gemstones</Button>
        </div>
      </div>
    );
  }

  // Filter products based on selected filters
  const filteredProducts = currentCollection.products.filter((product: any) => {
    if (selectedOrigin !== "all" && !product.origin.toLowerCase().includes(selectedOrigin)) return false;
    if (priceRange === "under-10k" && product.price >= 10000) return false;
    if (priceRange === "10k-25k" && (product.price < 10000 || product.price > 25000)) return false;
    if (priceRange === "25k-50k" && (product.price < 25000 || product.price > 50000)) return false;
    if (priceRange === "above-50k" && product.price < 50000) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a: any, b: any) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews; // popular
  });

  const navTabs = [
    { id: "about", label: "About" },
    { id: "who-should-wear", label: "Who Should Wear?" },
    { id: "benefits", label: "Benefits" },
    { id: "quality", label: "Quality & Price" },
    { id: "wearing", label: "How to Wear" },
    { id: "care", label: "Care Guide" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-2.5 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="font-bold">FLASH SALE ENDING SOON!</span>
          </div>
          <div className="flex items-center gap-3 font-mono">
            <div className="bg-white/20 rounded px-2 py-1">
              <span className="font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs ml-1">HRS</span>
            </div>
            <span>:</span>
            <div className="bg-white/20 rounded px-2 py-1">
              <span className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs ml-1">MIN</span>
            </div>
            <span>:</span>
            <div className="bg-white/20 rounded px-2 py-1">
              <span className="font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs ml-1">SEC</span>
            </div>
          </div>
          <Badge className="bg-white text-red-600 hover:bg-white/90 ml-2">Up to 40% OFF</Badge>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-muted/50 border-b py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm overflow-x-auto">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Lab Certified</span>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Truck className="w-4 h-4 text-blue-600" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <RefreshCcw className="w-4 h-4 text-orange-600" />
              <span>7-Day Returns</span>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <BadgeCheck className="w-4 h-4 text-purple-600" />
              <span>21+ Years Trust</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="cursor-pointer hover:text-foreground" onClick={() => navigate("/")}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="cursor-pointer hover:text-foreground" onClick={() => navigate("/gemstones")}>Gemstones</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{currentCollection.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    <Sun className="w-3 h-3 mr-1" />
                    {currentCollection.planet}
                  </Badge>
                  <Badge variant="outline">
                    {currentCollection.zodiacSigns.join(" & ")}
                  </Badge>
                  <Badge className="bg-green-500 text-white">
                    <Shield className="w-3 h-3 mr-1" />
                    100% Certified
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{currentCollection.name}</h1>
                <p className="text-lg text-muted-foreground">{currentCollection.shortDescription}</p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {currentCollection.mainBenefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof & Price */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-xs text-white font-bold">
                          {['R', 'P', 'A', 'S'][i]}
                        </div>
                      ))}
                    </div>
                    <span className="text-muted-foreground">
                      <span className="font-bold text-foreground">50,000+</span> Happy Customers
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-red-500/10 text-red-600 px-3 py-1.5 rounded-full text-sm animate-pulse">
                    <Eye className="w-4 h-4" />
                    <span className="font-medium">{viewingCount} people viewing now</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-2xl font-bold text-primary">{currentCollection.priceRange.split(' - ')[0]}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1 sm:flex-none" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Free Expert Consultation
                </Button>
                <Button size="lg" variant="outline" className="flex-1 sm:flex-none" onClick={() => navigate('/gemstone-calculator')}>
                  <Gem className="w-4 h-4 mr-2" />
                  Check Which Suits You
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Tagline */}
          <div className="mt-8 text-center">
            <p className="text-xl md:text-2xl italic text-muted-foreground">"{currentCollection.tagline}"</p>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-background border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center overflow-x-auto scrollbar-hide py-3 gap-1">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted text-muted-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Origin Filters */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="relative">
            <button 
              onClick={() => scrollOrigins('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background rounded-full p-2 shadow-md border hidden md:block"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div 
              ref={scrollContainerRef}
              className="flex items-center gap-3 overflow-x-auto scrollbar-hide px-8 py-2"
            >
              <button
                onClick={() => setSelectedOrigin("all")}
                className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl border-2 min-w-[100px] transition-all ${
                  selectedOrigin === "all" 
                    ? 'border-primary bg-primary/5' 
                    : 'border-transparent bg-background hover:border-muted-foreground/20'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Gem className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">All Origins</span>
              </button>
              {currentCollection.origins.map((origin: any) => (
                <button
                  key={origin.id}
                  onClick={() => setSelectedOrigin(origin.id)}
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl border-2 min-w-[100px] transition-all ${
                    selectedOrigin === origin.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-transparent bg-background hover:border-muted-foreground/20'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-muted">
                    <img 
                      src={currentCollection.products[0].image} 
                      alt={origin.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{origin.shortName}</span>
                </button>
              ))}
            </div>
            <button 
              onClick={() => scrollOrigins('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background rounded-full p-2 shadow-md border hidden md:block"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="bg-background border-b sticky top-14 z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-3 overflow-x-auto w-full sm:w-auto">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                  <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                  <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="above-50k">Above ₹50,000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue placeholder="Weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weights</SelectItem>
                  <SelectItem value="2-3">2-3 Carat</SelectItem>
                  <SelectItem value="3-5">3-5 Carat</SelectItem>
                  <SelectItem value="5-7">5-7 Carat</SelectItem>
                  <SelectItem value="7+">7+ Carat</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <p className="text-sm text-muted-foreground">
                {sortedProducts.length} Products
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px] h-9">
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
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">{currentCollection.name} Online Collection</h2>
          <p className="text-muted-foreground">Select a beautiful piece from our wide online selection, or chat with our experts for more options!</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sortedProducts.map((product: any, idx: number) => (
            <Card 
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border hover:border-primary/50 relative"
              onClick={() => navigate(`/gemstone/${product.id}`)}
            >
              <CardContent className="p-0">
                {/* Badges */}
                <div className="absolute top-2 left-2 z-10 flex flex-col gap-1.5">
                  {idx === 0 && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      Only 2 Left
                    </Badge>
                  )}
                  {idx === 1 && (
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Bestseller
                    </Badge>
                  )}
                </div>

                {/* Image */}
                <div className="relative overflow-hidden aspect-square bg-muted/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.certified && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-green-500/90 text-white text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2">
                    <Badge className="bg-primary/90 text-primary-foreground text-xs font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" className="bg-white text-foreground hover:bg-white/90">
                      <Eye className="w-4 h-4 mr-1" />
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 md:p-4 space-y-2">
                  <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name} - {product.weight}
                  </h3>
                  
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="flex items-center gap-1">
                      <span className="font-medium">SKU:</span> {product.sku}
                    </p>
                    <p className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Origin: {product.origin}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg md:text-xl font-bold text-primary">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-green-600 font-medium">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button className="w-full mt-2" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-muted/20">
        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-12 border-b">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About {currentCollection.name}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{currentCollection.shortDescription}</p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <p className="text-sm text-muted-foreground">Hindi Name</p>
                  <p className="font-semibold">{currentCollection.hindiName}</p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-muted-foreground">Ruling Planet</p>
                  <p className="font-semibold">{currentCollection.planet}</p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-muted-foreground">Zodiac Signs</p>
                  <p className="font-semibold">{currentCollection.zodiacSigns.join(", ")}</p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-muted-foreground">Chakra</p>
                  <p className="font-semibold">{currentCollection.chakra}</p>
                </Card>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border">
              <h3 className="font-semibold mb-4">Price Range</h3>
              <p className="text-2xl font-bold text-primary mb-4">{currentCollection.priceRange}</p>
              <h4 className="font-medium mb-2">Price by Origin:</h4>
              <div className="space-y-2">
                {currentCollection.origins.slice(0, 4).map((origin: any) => (
                  <div key={origin.id} className="flex justify-between text-sm">
                    <span>{origin.name}</span>
                    <span className="font-medium">{origin.priceRange}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Wear Section */}
        <section id="who-should-wear" className="container mx-auto px-4 py-12 border-b">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who Should Wear {currentCollection.name}?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {currentCollection.whoShouldWear.map((item: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 bg-background rounded-lg p-4 border">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-200">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Not Sure If It Suits You?</h3>
                  <p className="text-muted-foreground mb-4">Get personalized gemstone recommendation based on your birth chart from our expert astrologers.</p>
                  <Button onClick={() => navigate('/gemstone-calculator')}>
                    Check Gemstone Suitability
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="container mx-auto px-4 py-12 border-b">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Benefits of {currentCollection.name}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currentCollection.benefits.map((benefit: any, idx: number) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Wear Section */}
        <section id="wearing" className="container mx-auto px-4 py-12 border-b">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Wear {currentCollection.name}</h2>
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y">
                  <tr>
                    <td className="py-4 font-semibold w-1/4">Weight</td>
                    <td className="py-4 text-muted-foreground">{currentCollection.wearing.weight}</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold">Color</td>
                    <td className="py-4 text-muted-foreground">{currentCollection.wearing.color}</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold">Metal</td>
                    <td className="py-4 text-muted-foreground">{currentCollection.wearing.metal}</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold">Finger</td>
                    <td className="py-4 text-muted-foreground">{currentCollection.wearing.finger}</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold">Day & Time</td>
                    <td className="py-4 text-muted-foreground">{currentCollection.wearing.dayTime}</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold">Mantra</td>
                    <td className="py-4 text-muted-foreground font-medium">{currentCollection.wearing.mantra}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {currentCollection.faqs.map((faq: any, idx: number) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {idx + 1}. {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      {/* Expert Consultation CTA */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Expert Guidance?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get personalized consultation from our experienced astrologers. We'll help you choose the perfect {currentCollection.name.split(' ')[0]} based on your birth chart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/consultation')}>
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>47,000+ Consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>21+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 Hrs Response Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-3 md:hidden z-50">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-primary">{currentCollection.priceRange.split(' - ')[0]}</p>
          </div>
          <Button className="flex-1" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
            <MessageCircle className="w-4 h-4 mr-2" />
            Get Expert Help
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GemstoneCollection;
