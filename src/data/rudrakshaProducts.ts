import { Crown, Shield, Sparkles, Zap, Leaf, Gem, Heart, Brain, Users, TrendingUp, Star as StarIcon } from "lucide-react";
import nirakarImage from "@/assets/rudraksha/nirakar.jpg";
import oneMukhiImage from "@/assets/rudraksha/1-mukhi.jpg";
import threeMukhiImage from "@/assets/rudraksha/3-mukhi.jpg";
import fourMukhiImage from "@/assets/rudraksha/4-mukhi.jpg";

export const rudrakshaProductsData: Record<string, any> = {
  "1-mukhi": {
    id: "1-mukhi",
    name: "1 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Lord Shiva's Supreme Blessing for Self-Realization & Leadership",
    price: 8399,
    originalPrice: 12200,
    discount: 31,
    rating: 4.9,
    reviews: 980,
    sold: "5,000+",
    inStock: true,
    stockLeft: 5,
    deliveryDate: "October 22-23, 2025",
    images: [oneMukhiImage, nirakarImage, threeMukhiImage, fourMukhiImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Lord Shiva",
    planet: "Sun",
    element: "Fire",
    chakra: "Crown Chakra",
    mantra: "Om Hreem Namah",
    emiAvailable: true,
    emiAmount: 2800,
    keyHighlights: [
      "🕉️ Blessed by Lord Shiva - Supreme consciousness & enlightenment",
      "👑 Enhances Leadership - Boosts confidence and decision-making",
      "🔒 100% Authentic Nepal Origin - Lab certified with X-ray proof",
      "⚡ Pre-Energized & Blessed - Ready to wear immediately",
      "☀️ Sun Remedy - Strengthens Sun's positive effects",
      "📦 Free Shipping Pan India - Secure & insured delivery"
    ],
    benefits: [
      { icon: Crown, title: "Supreme Consciousness", desc: "Connects you with highest spiritual awareness and divine wisdom" },
      { icon: Sparkles, title: "Leadership Excellence", desc: "Enhances authority, confidence and decision-making abilities" },
      { icon: Shield, title: "Mental Clarity", desc: "Provides focus, concentration and removes mental confusion" },
      { icon: Zap, title: "Success & Prosperity", desc: "Attracts wealth, fame and success in all endeavors" },
      { icon: Leaf, title: "Health Benefits", desc: "Helps with headaches, right eye problems and mental stress" },
      { icon: Gem, title: "Spiritual Growth", desc: "Accelerates spiritual evolution and self-realization" }
    ],
    detailedBenefits: [
      {
        category: "🕉️ Spiritual Benefits",
        points: [
          "Supreme consciousness and self-realization",
          "Direct connection with Lord Shiva",
          "Enhances meditation and spiritual practices",
          "Removes ego and promotes humility",
          "Brings divine blessings and grace"
        ]
      },
      {
        category: "👑 Leadership & Success",
        points: [
          "Enhances leadership qualities and authority",
          "Boosts confidence and self-esteem",
          "Improves decision-making abilities",
          "Attracts fame, wealth and prosperity",
          "Provides courage to face challenges"
        ]
      },
      {
        category: "🧘 Health & Wellness",
        points: [
          "Helps with headaches and migraines",
          "Improves right eye vision",
          "Reduces mental stress and anxiety",
          "Enhances overall vitality",
          "Balances nervous system"
        ]
      },
      {
        category: "☀️ Astrological Benefits",
        points: [
          "Strengthens Sun's positive effects",
          "Removes malefic Sun influences",
          "Enhances father-son relationship",
          "Brings recognition and authority",
          "Improves government relations"
        ]
      }
    ],
    idealFor: [
      "Spiritual seekers wanting enlightenment",
      "Leaders and executives",
      "Those with weak Sun in horoscope",
      "People seeking confidence and authority",
      "Individuals wanting mental clarity",
      "Anyone desiring divine blessings"
    ],
    wearingInstructions: [
      "Best Day to Wear: Monday or Sunday morning",
      "Ideal Time: During sunrise (Brahma Muhurta)",
      "Purification: Wash with Ganga jal and milk",
      "Energization: Chant 'Om Hreem Namah' 108 times",
      "Wearing: Wear as pendant touching chest",
      "Touch: Must touch skin for maximum benefits",
      "Care: Handle with devotion and keep pure"
    ]
  },

  "2-mukhi": {
    id: "2-mukhi",
    name: "2 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Ardhanarishvara's Blessing for Unity & Harmony",
    price: 1299,
    originalPrice: 1899,
    discount: 32,
    rating: 4.8,
    reviews: 1547,
    sold: "12,000+",
    inStock: true,
    stockLeft: 14,
    deliveryDate: "October 22-23, 2025",
    images: [threeMukhiImage, oneMukhiImage, nirakarImage, fourMukhiImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Ardhanarishvara (Shiva-Parvati)",
    planet: "Moon",
    element: "Water",
    chakra: "Sacral Chakra",
    mantra: "Om Namah",
    emiAvailable: false,
    keyHighlights: [
      "💑 Blessed by Shiva-Parvati - Unity in relationships",
      "🌙 Moon Remedy - Emotional balance and peace",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚡ Pre-Energized & Blessed - Ready to wear",
      "❤️ Relationship Harmony - Strengthens bonds",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Heart, title: "Relationship Harmony", desc: "Brings unity, love and understanding in relationships" },
      { icon: Sparkles, title: "Emotional Balance", desc: "Calms emotions and reduces mood swings" },
      { icon: Shield, title: "Mental Peace", desc: "Reduces anxiety, stress and brings inner peace" },
      { icon: Zap, title: "Attracts Love", desc: "Helps in finding soulmate and strengthens existing bonds" },
      { icon: Leaf, title: "Health Benefits", desc: "Helps with kidney, urinary and reproductive issues" },
      { icon: Gem, title: "Spiritual Growth", desc: "Balances masculine-feminine energies within" }
    ],
    detailedBenefits: [
      {
        category: "💑 Relationship Benefits",
        points: [
          "Brings harmony in marriage and partnerships",
          "Resolves conflicts and misunderstandings",
          "Attracts love and strengthens bonds",
          "Helps in finding life partner",
          "Improves communication in relationships"
        ]
      },
      {
        category: "🌙 Emotional & Mental",
        points: [
          "Balances emotions and reduces mood swings",
          "Calms mind and reduces anxiety",
          "Brings inner peace and contentment",
          "Improves self-control and patience",
          "Enhances intuition and creativity"
        ]
      },
      {
        category: "🧘 Health Benefits",
        points: [
          "Helps with kidney and urinary problems",
          "Beneficial for reproductive system",
          "Reduces water retention in body",
          "Helps with left eye issues",
          "Balances hormones naturally"
        ]
      },
      {
        category: "🌟 Spiritual Benefits",
        points: [
          "Balances Ida and Pingala nadis",
          "Harmonizes masculine-feminine energies",
          "Enhances unity consciousness",
          "Removes duality in perception",
          "Brings devotion and surrender"
        ]
      }
    ],
    idealFor: [
      "People seeking relationship harmony",
      "Those wanting to find life partner",
      "Individuals with weak Moon in chart",
      "People facing emotional imbalances",
      "Couples wanting stronger bond",
      "Anyone seeking inner peace"
    ],
    wearingInstructions: [
      "Best Day to Wear: Monday morning",
      "Ideal Time: During moonrise or morning",
      "Purification: Wash with Ganga jal or water",
      "Energization: Chant 'Om Namah' 108 times",
      "Wearing: Can be worn as pendant or bracelet",
      "Touch: Should touch your skin",
      "Care: Keep clean and pure"
    ]
  },

  "3-mukhi": {
    id: "3-mukhi",
    name: "3 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Agni Dev's Blessing for Courage & Past Life Cleansing",
    price: 1499,
    originalPrice: 1700,
    discount: 12,
    rating: 4.9,
    reviews: 2094,
    sold: "18,000+",
    inStock: true,
    stockLeft: 12,
    deliveryDate: "October 22-23, 2025",
    images: [threeMukhiImage, fourMukhiImage, oneMukhiImage, nirakarImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Agni (Fire God)",
    planet: "Mars",
    element: "Fire",
    chakra: "Solar Plexus Chakra",
    mantra: "Om Kleem Namah",
    emiAvailable: false,
    keyHighlights: [
      "🔥 Blessed by Agni Dev - Burns past karma",
      "💪 Mars Remedy - Enhances courage and energy",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚡ Pre-Energized & Blessed - Ready to wear",
      "🎯 Confidence Booster - Removes inferiority complex",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Zap, title: "Burns Past Karma", desc: "Frees from guilt, sins and negative karma of past lives" },
      { icon: Crown, title: "Boosts Confidence", desc: "Removes inferiority complex and enhances self-esteem" },
      { icon: Shield, title: "Courage & Energy", desc: "Provides strength, courage and determination" },
      { icon: Sparkles, title: "Removes Depression", desc: "Eliminates depression, anxiety and negative thoughts" },
      { icon: Leaf, title: "Health Benefits", desc: "Helps with blood pressure, stomach and liver issues" },
      { icon: Gem, title: "Spiritual Cleansing", desc: "Purifies mind, body and soul from negative energies" }
    ],
    detailedBenefits: [
      {
        category: "🔥 Karmic Cleansing",
        points: [
          "Burns past life sins and karma",
          "Frees from guilt and shame",
          "Removes negative energy patterns",
          "Cleanses aura and chakras",
          "Brings fresh start in life"
        ]
      },
      {
        category: "💪 Confidence & Courage",
        points: [
          "Removes inferiority complex",
          "Boosts self-esteem and confidence",
          "Enhances courage and willpower",
          "Provides strength to face challenges",
          "Improves leadership qualities"
        ]
      },
      {
        category: "🧘 Mental & Emotional",
        points: [
          "Removes depression and anxiety",
          "Eliminates negative thoughts",
          "Brings mental clarity and focus",
          "Reduces stress and tension",
          "Enhances positive thinking"
        ]
      },
      {
        category: "🩸 Health Benefits",
        points: [
          "Helps with blood-related disorders",
          "Beneficial for stomach and digestive issues",
          "Supports liver function",
          "Regulates blood pressure",
          "Boosts immunity and vitality"
        ]
      }
    ],
    idealFor: [
      "People with guilt or past trauma",
      "Those lacking confidence and courage",
      "Individuals with weak Mars in horoscope",
      "People facing depression or anxiety",
      "Those wanting to burn past karma",
      "Anyone seeking fresh start in life"
    ],
    wearingInstructions: [
      "Best Day to Wear: Tuesday morning",
      "Ideal Time: During sunrise",
      "Purification: Wash with Ganga jal",
      "Energization: Chant 'Om Kleem Namah' 108 times",
      "Wearing: Wear as pendant or bracelet",
      "Touch: Should touch your skin",
      "Care: Keep clean and energized"
    ]
  },

  "4-mukhi": {
    id: "4-mukhi",
    name: "4 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Lord Brahma's Blessing for Knowledge & Creativity",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.8,
    reviews: 3271,
    sold: "25,000+",
    inStock: true,
    stockLeft: 15,
    deliveryDate: "October 22-23, 2025",
    images: [fourMukhiImage, threeMukhiImage, oneMukhiImage, nirakarImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Lord Brahma",
    planet: "Mercury",
    element: "Air",
    chakra: "Throat Chakra",
    mantra: "Om Hreem Namah",
    emiAvailable: false,
    keyHighlights: [
      "📚 Blessed by Lord Brahma - Creator's wisdom",
      "🧠 Mercury Remedy - Enhances intelligence",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚡ Pre-Energized & Blessed - Ready to wear",
      "🎯 Perfect for Students - Improves memory",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Brain, title: "Enhances Intelligence", desc: "Improves memory, learning ability and intellectual capacity" },
      { icon: Sparkles, title: "Boosts Creativity", desc: "Enhances creative thinking and artistic expression" },
      { icon: Crown, title: "Communication Skills", desc: "Improves speech, writing and communication abilities" },
      { icon: Shield, title: "Removes Laziness", desc: "Eliminates dullness, procrastination and mental blocks" },
      { icon: Leaf, title: "Health Benefits", desc: "Helps with respiratory, throat and speech issues" },
      { icon: Gem, title: "Knowledge & Wisdom", desc: "Brings knowledge of four Vedas and spiritual wisdom" }
    ],
    detailedBenefits: [
      {
        category: "📚 Knowledge & Learning",
        points: [
          "Enhances memory and retention power",
          "Improves concentration and focus",
          "Boosts learning capabilities",
          "Brings knowledge of Vedas",
          "Helps in academic success"
        ]
      },
      {
        category: "🧠 Mental Abilities",
        points: [
          "Enhances intelligence and IQ",
          "Improves analytical thinking",
          "Boosts logical reasoning",
          "Removes mental blocks and confusion",
          "Increases mental agility"
        ]
      },
      {
        category: "🎨 Creativity & Communication",
        points: [
          "Enhances creative expression",
          "Improves communication skills",
          "Boosts writing and speaking abilities",
          "Helps in artistic pursuits",
          "Removes speech impediments"
        ]
      },
      {
        category: "🧘 Health & Wellness",
        points: [
          "Helps with respiratory problems",
          "Beneficial for throat issues",
          "Improves thyroid function",
          "Reduces stammering and speech problems",
          "Removes dullness and laziness"
        ]
      }
    ],
    idealFor: [
      "Students and researchers",
      "Teachers and professors",
      "Writers and content creators",
      "People with weak Mercury",
      "Those wanting to improve memory",
      "Anyone seeking knowledge and wisdom"
    ],
    wearingInstructions: [
      "Best Day to Wear: Wednesday morning",
      "Ideal Time: During sunrise",
      "Purification: Wash with Ganga jal",
      "Energization: Chant 'Om Hreem Namah' 108 times",
      "Wearing: Wear as pendant or bracelet",
      "Touch: Should touch your skin",
      "Care: Keep clean and energized"
    ]
  },

  "5-mukhi": {
    id: "5-mukhi",
    name: "5 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Kalagni Rudra's Blessing for Health & Peace",
    price: 699,
    originalPrice: 1199,
    discount: 42,
    rating: 4.9,
    reviews: 8456,
    sold: "50,000+",
    inStock: true,
    stockLeft: 25,
    deliveryDate: "October 22-23, 2025",
    images: [fourMukhiImage, oneMukhiImage, threeMukhiImage, nirakarImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Kalagni Rudra",
    planet: "Jupiter",
    element: "Space",
    chakra: "Throat Chakra",
    mantra: "Om Hreem Namah",
    emiAvailable: false,
    keyHighlights: [
      "🕉️ Most Universal Rudraksha - For everyone",
      "🪐 Jupiter Remedy - Wisdom and prosperity",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚡ Pre-Energized & Blessed - Ready to wear",
      "❤️ Heart & BP Control - Health benefits",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Shield, title: "Health & Wellness", desc: "Controls blood pressure, heart issues and overall health" },
      { icon: Sparkles, title: "Mental Peace", desc: "Brings peace of mind and reduces stress, anxiety" },
      { icon: Crown, title: "Spiritual Growth", desc: "Enhances meditation and spiritual awareness" },
      { icon: Zap, title: "General Well-being", desc: "Most beneficial for overall prosperity and harmony" },
      { icon: Leaf, title: "Emotional Balance", desc: "Stabilizes emotions and brings calmness" },
      { icon: Gem, title: "Protection", desc: "Provides all-round protection from negative energies" }
    ],
    detailedBenefits: [
      {
        category: "❤️ Health Benefits",
        points: [
          "Controls high blood pressure naturally",
          "Strengthens heart and cardiovascular system",
          "Reduces stress and mental tension",
          "Improves overall physical health",
          "Boosts immunity and vitality"
        ]
      },
      {
        category: "🧘 Mental & Emotional",
        points: [
          "Brings peace of mind and calmness",
          "Reduces anxiety and depression",
          "Enhances mental clarity and focus",
          "Stabilizes emotions and mood",
          "Removes negative thoughts"
        ]
      },
      {
        category: "🪐 Spiritual Benefits",
        points: [
          "Enhances meditation and awareness",
          "Brings spiritual growth and wisdom",
          "Connects with higher consciousness",
          "Removes obstacles in spiritual path",
          "Provides divine protection"
        ]
      },
      {
        category: "🌟 General Well-being",
        points: [
          "Most universal for all-round benefits",
          "Brings prosperity and abundance",
          "Enhances luck and fortune",
          "Improves relationships and harmony",
          "Suitable for everyone without restrictions"
        ]
      }
    ],
    idealFor: [
      "Everyone - Most universal Rudraksha",
      "People with high blood pressure",
      "Those seeking mental peace",
      "Individuals with weak Jupiter",
      "Meditation practitioners",
      "Anyone wanting overall well-being"
    ],
    wearingInstructions: [
      "Best Day to Wear: Thursday or Monday morning",
      "Ideal Time: During sunrise",
      "Purification: Wash with Ganga jal",
      "Energization: Chant 'Om Hreem Namah' 108 times",
      "Wearing: Wear as pendant, bracelet or mala",
      "Touch: Should touch your skin",
      "Care: Most easy to maintain"
    ]
  },

  "6-mukhi": {
    id: "6-mukhi",
    name: "6 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Lord Kartikeya's Blessing for Willpower & Focus",
    price: 1899,
    originalPrice: 2799,
    discount: 32,
    rating: 4.8,
    reviews: 1856,
    sold: "10,000+",
    inStock: true,
    stockLeft: 11,
    deliveryDate: "October 22-23, 2025",
    images: [oneMukhiImage, threeMukhiImage, fourMukhiImage, nirakarImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Lord Kartikeya (Murugan)",
    planet: "Mars",
    element: "Fire",
    chakra: "Sacral Chakra",
    mantra: "Om Hreem Hum Namah",
    emiAvailable: true,
    emiAmount: 633,
    keyHighlights: [
      "⚔️ Blessed by Lord Kartikeya - Courage and strength",
      "💪 Mars Remedy - Enhances willpower",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚡ Pre-Energized & Blessed - Ready to wear",
      "🎯 Focus & Concentration - Mental strength",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Crown, title: "Enhances Willpower", desc: "Boosts determination, focus and mental strength" },
      { icon: Zap, title: "Success in Goals", desc: "Helps achieve goals and overcome obstacles" },
      { icon: Shield, title: "Protection", desc: "Provides protection from negative energies and enemies" },
      { icon: Sparkles, title: "Emotional Balance", desc: "Controls emotions and brings stability" },
      { icon: Leaf, title: "Health Benefits", desc: "Helps with reproductive, urinary and sexual health" },
      { icon: Gem, title: "Confidence", desc: "Removes fear, anxiety and builds courage" }
    ],
    detailedBenefits: [
      {
        category: "💪 Willpower & Focus",
        points: [
          "Enhances willpower and determination",
          "Improves concentration and focus",
          "Boosts mental strength and stamina",
          "Helps in goal achievement",
          "Removes obstacles and challenges"
        ]
      },
      {
        category: "⚔️ Courage & Protection",
        points: [
          "Provides courage and fearlessness",
          "Protects from negative energies",
          "Removes fear and anxiety",
          "Builds confidence and self-esteem",
          "Shields from enemies and evil eye"
        ]
      },
      {
        category: "🧘 Health Benefits",
        points: [
          "Helps with reproductive system issues",
          "Beneficial for urinary problems",
          "Improves sexual health and vitality",
          "Helps with prostate issues",
          "Balances hormones naturally"
        ]
      },
      {
        category: "🎯 Success & Achievement",
        points: [
          "Helps achieve goals and targets",
          "Enhances competitive spirit",
          "Brings success in examinations",
          "Improves sports performance",
          "Removes laziness and procrastination"
        ]
      }
    ],
    idealFor: [
      "Students preparing for exams",
      "Athletes and sports persons",
      "People lacking willpower and focus",
      "Those with weak Mars in chart",
      "Individuals facing obstacles",
      "Anyone seeking courage and strength"
    ],
    wearingInstructions: [
      "Best Day to Wear: Tuesday morning",
      "Ideal Time: During sunrise",
      "Purification: Wash with Ganga jal",
      "Energization: Chant 'Om Hreem Hum Namah' 108 times",
      "Wearing: Wear as pendant or bracelet",
      "Touch: Should touch your skin",
      "Care: Keep energized and clean"
    ]
  },

  "7-mukhi": {
    id: "7-mukhi",
    name: "7 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Goddess Lakshmi's Divine Blessing for Wealth & Prosperity",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.9,
    reviews: 2847,
    sold: "15,000+",
    inStock: true,
    stockLeft: 9,
    deliveryDate: "October 22-23, 2025",
    images: [oneMukhiImage, nirakarImage, threeMukhiImage, fourMukhiImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Goddess Mahalakshmi",
    planet: "Saturn (Shani)",
    element: "Earth",
    chakra: "Solar Plexus",
    mantra: "Om Hum Namah",
    emiAvailable: true,
    emiAmount: 833,
    keyHighlights: [
      "🪷 Blessed by Goddess Lakshmi - Direct blessings for wealth",
      "💰 Removes Financial Obstacles - Opens doors to prosperity",
      "🔒 100% Authentic Nepal Origin - Lab certified with X-ray proof",
      "⚡ Pre-Energized & Blessed - Ready to wear immediately",
      "🎯 Saturn (Shani) Remedy - Reduces malefic effects",
      "📦 Free Shipping Pan India - Secure & insured delivery"
    ],
    benefits: [
      { icon: Crown, title: "Attracts Wealth & Prosperity", desc: "Blessed by Goddess Lakshmi, brings abundance and financial success into your life" },
      { icon: Shield, title: "Saturn (Shani) Protection", desc: "Powerful remedy for Saturn's malefic effects, removes Shani Dosh" },
      { icon: Sparkles, title: "Business Success", desc: "Enhances career growth, business opportunities and professional success" },
      { icon: Zap, title: "Removes Bad Luck", desc: "Clears negative karma, removes obstacles and brings good fortune" },
      { icon: Leaf, title: "Health & Vitality", desc: "Improves overall health, boosts immunity and provides physical strength" },
      { icon: Gem, title: "Spiritual Growth", desc: "Enhances meditation, spiritual wisdom and divine connection" }
    ],
    detailedBenefits: [
      {
        category: "💰 Financial Benefits",
        points: [
          "Attracts wealth, prosperity and abundance",
          "Removes financial obstacles and debts",
          "Enhances business growth and opportunities",
          "Brings stability in income and savings",
          "Protects from financial losses"
        ]
      },
      {
        category: "🛡️ Astrological Benefits",
        points: [
          "Powerful remedy for Saturn (Shani) Dosh",
          "Reduces malefic effects of planet Saturn",
          "Brings relief from Sade Sati period",
          "Balances planetary energies",
          "Enhances positive Saturn influences"
        ]
      },
      {
        category: "🧘 Health & Wellness",
        points: [
          "Improves overall physical health",
          "Helps in bone and joint issues",
          "Boosts immunity and vitality",
          "Reduces stress and anxiety",
          "Enhances mental clarity and focus"
        ]
      },
      {
        category: "🌟 Spiritual & Personal",
        points: [
          "Enhances spiritual awareness",
          "Brings good luck and fortune",
          "Removes negative energies",
          "Increases confidence and willpower",
          "Attracts Lakshmi's divine blessings"
        ]
      }
    ],
    idealFor: [
      "Business owners seeking financial growth",
      "Individuals facing Saturn Dosh or Sade Sati",
      "People experiencing financial difficulties",
      "Those seeking Goddess Lakshmi's blessings",
      "Professionals wanting career advancement",
      "Anyone desiring wealth and prosperity"
    ],
    wearingInstructions: [
      "Best Day to Wear: Monday or Friday morning",
      "Ideal Time: During Shukla Paksha (waxing moon)",
      "Purification: Wash with Ganga jal or clean water",
      "Energization: Chant 'Om Hum Namah' 108 times",
      "Wearing: Can be worn as pendant or bracelet",
      "Touch: Should touch your skin for maximum benefits",
      "Care: Keep clean, avoid chemicals and perfumes"
    ]
  },

  "8-mukhi": {
    id: "8-mukhi",
    name: "8 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Lord Ganesha's Blessing for Removing Obstacles",
    price: 2999,
    originalPrice: 4299,
    discount: 30,
    rating: 4.8,
    reviews: 2134,
    sold: "13,000+",
    inStock: true,
    stockLeft: 8,
    deliveryDate: "October 22-23, 2025",
    images: [threeMukhiImage, fourMukhiImage, oneMukhiImage, nirakarImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Lord Ganesha",
    planet: "Rahu",
    element: "Earth",
    chakra: "Root Chakra",
    mantra: "Om Hum Namah",
    emiAvailable: true,
    emiAmount: 1000,
    keyHighlights: [
      "🐘 Blessed by Lord Ganesha - Removes all obstacles",
      "🎯 Rahu Remedy - Removes confusion and obstacles",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚡ Pre-Energized & Blessed - Ready to wear",
      "✨ Success & Wisdom - Enhances intelligence",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Crown, title: "Removes Obstacles", desc: "Eliminates all obstacles and barriers in life path" },
      { icon: Brain, title: "Enhances Wisdom", desc: "Boosts intelligence, analytical thinking and decision-making" },
      { icon: Shield, title: "Rahu Protection", desc: "Powerful remedy for Rahu Dosh and its negative effects" },
      { icon: Sparkles, title: "Success in Ventures", desc: "Brings success in new beginnings and business ventures" },
      { icon: Leaf, title: "Health Benefits", desc: "Helps with nervous system, skin issues and chronic diseases" },
      { icon: Gem, title: "Spiritual Growth", desc: "Removes spiritual obstacles and enhances awareness" }
    ],
    detailedBenefits: [
      {
        category: "🐘 Obstacle Removal",
        points: [
          "Removes all obstacles in life path",
          "Clears barriers in career and business",
          "Eliminates problems in new ventures",
          "Removes hurdles in education",
          "Brings smooth progress in all endeavors"
        ]
      },
      {
        category: "🧠 Wisdom & Intelligence",
        points: [
          "Enhances analytical thinking",
          "Improves problem-solving abilities",
          "Boosts memory and concentration",
          "Increases wisdom and knowledge",
          "Improves decision-making skills"
        ]
      },
      {
        category: "🎯 Astrological Benefits",
        points: [
          "Powerful remedy for Rahu Dosh",
          "Reduces malefic Rahu effects",
          "Removes confusion and illusions",
          "Protects from black magic and negative energies",
          "Brings clarity in life direction"
        ]
      },
      {
        category: "🧘 Health & Well-being",
        points: [
          "Helps with nervous system disorders",
          "Beneficial for skin diseases",
          "Helps with chronic ailments",
          "Reduces stress and anxiety",
          "Improves overall vitality"
        ]
      }
    ],
    idealFor: [
      "People facing constant obstacles",
      "Those with Rahu Dosh in horoscope",
      "Business owners starting new ventures",
      "Students facing study problems",
      "Individuals seeking wisdom and clarity",
      "Anyone wanting smooth progress in life"
    ],
    wearingInstructions: [
      "Best Day to Wear: Wednesday morning",
      "Ideal Time: During sunrise or Rahu Kaal",
      "Purification: Wash with Ganga jal",
      "Energization: Chant 'Om Hum Namah' 108 times",
      "Wearing: Wear as pendant or bracelet",
      "Touch: Should touch your skin",
      "Care: Keep energized and clean"
    ]
  },

  "9-mukhi": {
    id: "9-mukhi",
    name: "9 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Goddess Durga's Blessing for Energy & Fearlessness",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.9,
    reviews: 1812,
    sold: "9,000+",
    inStock: true,
    stockLeft: 7,
    deliveryDate: "October 22-23, 2025",
    images: [fourMukhiImage, oneMukhiImage, threeMukhiImage, nirakarImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Goddess Durga",
    planet: "Ketu",
    element: "Fire",
    chakra: "Navel Chakra",
    mantra: "Om Hreem Hum Namah",
    emiAvailable: true,
    emiAmount: 1166,
    keyHighlights: [
      "🔱 Blessed by Goddess Durga - Divine power and energy",
      "⚡ Ketu Remedy - Removes confusion and obstacles",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚔️ Pre-Energized & Blessed - Ready to wear",
      "💪 Fearlessness & Courage - Removes all fears",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Zap, title: "Immense Energy", desc: "Provides tremendous energy, power and vitality" },
      { icon: Crown, title: "Fearlessness", desc: "Removes all fears, anxiety and builds unshakeable courage" },
      { icon: Shield, title: "Ketu Protection", desc: "Powerful remedy for Ketu Dosh and spiritual obstacles" },
      { icon: Sparkles, title: "Success & Victory", desc: "Brings victory over enemies and success in challenges" },
      { icon: Leaf, title: "Health Benefits", desc: "Helps with immune system, neurological issues and vitality" },
      { icon: Gem, title: "Spiritual Power", desc: "Enhances spiritual powers and divine protection" }
    ],
    detailedBenefits: [
      {
        category: "🔱 Divine Power & Energy",
        points: [
          "Provides tremendous energy and vitality",
          "Boosts physical and mental stamina",
          "Enhances inner strength and courage",
          "Brings divine mother's blessings",
          "Protects from all negative forces"
        ]
      },
      {
        category: "⚔️ Fearlessness & Victory",
        points: [
          "Removes all kinds of fears",
          "Builds unshakeable courage",
          "Brings victory over enemies",
          "Helps overcome challenges",
          "Provides protection from evil"
        ]
      },
      {
        category: "🎯 Astrological Benefits",
        points: [
          "Powerful remedy for Ketu Dosh",
          "Reduces malefic Ketu effects",
          "Removes spiritual obstacles",
          "Enhances intuition and wisdom",
          "Brings clarity in life purpose"
        ]
      },
      {
        category: "🧘 Health & Well-being",
        points: [
          "Boosts immune system significantly",
          "Helps with neurological disorders",
          "Improves overall vitality and health",
          "Reduces chronic fatigue",
          "Provides mental strength"
        ]
      }
    ],
    idealFor: [
      "People lacking confidence and energy",
      "Those with Ketu Dosh in horoscope",
      "Individuals facing constant fears",
      "Spiritual seekers wanting protection",
      "People facing challenges and enemies",
      "Anyone seeking divine mother's blessings"
    ],
    wearingInstructions: [
      "Best Day to Wear: Tuesday or Friday morning",
      "Ideal Time: During sunrise",
      "Purification: Wash with Ganga jal",
      "Energization: Chant 'Om Hreem Hum Namah' 108 times",
      "Wearing: Wear as pendant for maximum power",
      "Touch: Must touch your skin",
      "Care: Keep energized with mantras"
    ]
  },

  "10-mukhi": {
    id: "10-mukhi",
    name: "10 Mukhi Rudraksha - Certified Nepal",
    subtitle: "Lord Vishnu's Blessing for Protection & Peace",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    rating: 4.8,
    reviews: 1289,
    sold: "7,000+",
    inStock: true,
    stockLeft: 6,
    deliveryDate: "October 22-23, 2025",
    images: [oneMukhiImage, threeMukhiImage, fourMukhiImage, nirakarImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: "Lord Vishnu",
    planet: "All Planets",
    element: "Water",
    chakra: "Heart Chakra",
    mantra: "Om Hreem Namah",
    emiAvailable: true,
    emiAmount: 1333,
    keyHighlights: [
      "🪬 Blessed by Lord Vishnu - Complete protection",
      "🛡️ All Planets Remedy - Balances all energies",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚡ Pre-Energized & Blessed - Ready to wear",
      "✨ Peace & Success - In all endeavors",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Shield, title: "Complete Protection", desc: "Protects from all negative energies, evil eye and black magic" },
      { icon: Crown, title: "Success in All Areas", desc: "Brings success and prosperity in all life endeavors" },
      { icon: Sparkles, title: "Peace & Harmony", desc: "Provides mental peace, emotional balance and harmony" },
      { icon: Zap, title: "Removes Obstacles", desc: "Eliminates all obstacles and challenges in life path" },
      { icon: Leaf, title: "Health Benefits", desc: "Helps with heart issues, sleep problems and overall health" },
      { icon: Gem, title: "Spiritual Growth", desc: "Enhances devotion, faith and spiritual progress" }
    ],
    detailedBenefits: [
      {
        category: "🛡️ Protection & Safety",
        points: [
          "Complete protection from negative energies",
          "Shields from evil eye and black magic",
          "Protects from accidents and dangers",
          "Guards against enemies and ill-wishers",
          "Provides divine Vishnu's protection"
        ]
      },
      {
        category: "✨ Peace & Prosperity",
        points: [
          "Brings mental peace and calmness",
          "Provides emotional stability",
          "Attracts prosperity and abundance",
          "Brings success in all endeavors",
          "Creates harmonious environment"
        ]
      },
      {
        category: "🎯 All-Round Benefits",
        points: [
          "Balances all planetary influences",
          "Removes all kinds of obstacles",
          "Brings good luck and fortune",
          "Enhances reputation and respect",
          "Improves relationships and social life"
        ]
      },
      {
        category: "🧘 Health & Well-being",
        points: [
          "Helps with heart-related issues",
          "Improves sleep quality",
          "Reduces stress and anxiety",
          "Boosts overall health and immunity",
          "Provides mental strength"
        ]
      }
    ],
    idealFor: [
      "People seeking complete protection",
      "Those facing multiple life challenges",
      "Individuals wanting peace and harmony",
      "Business owners and professionals",
      "Anyone seeking Lord Vishnu's blessings",
      "People with weak planetary positions"
    ],
    wearingInstructions: [
      "Best Day to Wear: Thursday morning",
      "Ideal Time: During sunrise",
      "Purification: Wash with Ganga jal",
      "Energization: Chant 'Om Hreem Namah' 108 times",
      "Wearing: Wear as pendant on silver or gold chain",
      "Touch: Should touch your skin",
      "Care: Keep clean and energized"
    ]
  }
};

// Generate products 11-21 with similar structure but varying details
for (let i = 11; i <= 21; i++) {
  const deities = {
    11: { name: "11 Rudras", planet: "All Planets", element: "Space" },
    12: { name: "Lord Surya (Sun)", planet: "Sun", element: "Fire" },
    13: { name: "Lord Indra & Kamadeva", planet: "Venus", element: "Water" },
    14: { name: "Lord Hanuman", planet: "Saturn", element: "Earth" },
    15: { name: "Lord Pashupatinath", planet: "All Planets", element: "Space" },
    16: { name: "Lord Mahamrityunjaya", planet: "All Planets", element: "Space" },
    17: { name: "Vishwakarma", planet: "All Planets", element: "Fire" },
    18: { name: "Bhumi (Mother Earth)", planet: "Earth", element: "Earth" },
    19: { name: "Lord Narayana", planet: "All Planets", element: "Water" },
    20: { name: "Brahma (Creator)", planet: "All Planets", element: "Space" },
    21: { name: "Kuber (God of Wealth)", planet: "All Planets", element: "Earth" }
  };

  const deity = deities[i as keyof typeof deities];
  const basePrice = 4999 + (i - 11) * 2000;
  const originalPrice = Math.floor(basePrice * 1.5);

  rudrakshaProductsData[`${i}-mukhi`] = {
    id: `${i}-mukhi`,
    name: `${i} Mukhi Rudraksha - Certified Nepal`,
    subtitle: `${deity.name}'s Divine Blessing for Ultimate Benefits`,
    price: basePrice,
    originalPrice: originalPrice,
    discount: Math.floor(((originalPrice - basePrice) / originalPrice) * 100),
    rating: 4.8 + Math.random() * 0.2,
    reviews: Math.floor(500 + Math.random() * 1000),
    sold: `${Math.floor(2 + Math.random() * 5)},000+`,
    inStock: true,
    stockLeft: Math.floor(2 + Math.random() * 8),
    deliveryDate: "October 22-23, 2025",
    images: [oneMukhiImage, nirakarImage, threeMukhiImage, fourMukhiImage],
    origin: "Nepal - Original",
    size: "18mm - 22mm",
    deity: deity.name,
    planet: deity.planet,
    element: deity.element,
    chakra: "Crown Chakra",
    mantra: "Om Hreem Namah",
    emiAvailable: true,
    emiAmount: Math.floor(basePrice / 3),
    keyHighlights: [
      `🕉️ Blessed by ${deity.name} - Divine blessings`,
      "💎 Rare & Powerful - Very rare to find",
      "🔒 100% Authentic Nepal Origin - Lab certified",
      "⚡ Pre-Energized & Blessed - Ready to wear",
      "✨ Ultimate Benefits - Comprehensive spiritual growth",
      "📦 Free Shipping Pan India - Secure delivery"
    ],
    benefits: [
      { icon: Crown, title: "Divine Blessings", desc: `Attracts ${deity.name}'s divine grace and protection` },
      { icon: Shield, title: "Complete Protection", desc: "Shields from all negative energies and obstacles" },
      { icon: Sparkles, title: "Spiritual Mastery", desc: "Enhances spiritual powers and consciousness" },
      { icon: Zap, title: "Ultimate Success", desc: "Brings success in all aspects of life" },
      { icon: Leaf, title: "Perfect Health", desc: "Improves overall health and vitality" },
      { icon: Gem, title: "Divine Connection", desc: "Establishes direct connection with deity" }
    ],
    detailedBenefits: [
      {
        category: "🕉️ Spiritual Benefits",
        points: [
          "Enhances spiritual consciousness",
          `Direct blessings from ${deity.name}`,
          "Accelerates spiritual evolution",
          "Removes karmic obstacles",
          "Brings divine grace and protection"
        ]
      },
      {
        category: "💰 Material Benefits",
        points: [
          "Attracts wealth and prosperity",
          "Brings success in business",
          "Enhances career growth",
          "Removes financial obstacles",
          "Brings abundance in all areas"
        ]
      },
      {
        category: "🧘 Health & Wellness",
        points: [
          "Improves overall physical health",
          "Boosts immunity and vitality",
          "Reduces stress and anxiety",
          "Enhances mental clarity",
          "Provides perfect health balance"
        ]
      },
      {
        category: "🌟 Personal Growth",
        points: [
          "Enhances leadership qualities",
          "Boosts confidence and courage",
          "Improves decision-making",
          "Brings clarity in life purpose",
          "Enhances all positive qualities"
        ]
      }
    ],
    idealFor: [
      "Advanced spiritual seekers",
      "People seeking rare divine blessings",
      "Those wanting ultimate protection",
      "Individuals seeking complete transformation",
      "Anyone desiring highest spiritual growth",
      "Devotees of specific deity"
    ],
    wearingInstructions: [
      "Best Day to Wear: Monday morning",
      "Ideal Time: During Brahma Muhurta",
      "Purification: Wash with Ganga jal and milk",
      "Energization: Chant mantra 108 times daily",
      "Wearing: Wear as pendant with devotion",
      "Touch: Must touch your skin",
      "Care: Handle with utmost reverence"
    ]
  };
}
