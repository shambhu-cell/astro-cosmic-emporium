export interface PendantProduct {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  images: string[];
  category: string;
  type: string;
  rating: number;
  reviewCount: number;
  metal: string;
  deity: string;
  description: string;
  features: string[];
  benefits: string[];
  specifications: {
    metal: string;
    deity: string;
    size: string;
    weight: string;
    chainIncluded: string;
    madeIn: string;
  };
  careInstructions: string[];
  usage: string[];
}

export const pendantProducts: PendantProduct[] = [
  {
    id: "pd-001",
    name: "Shri Ganesh Silver Pendant",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Pendant",
    type: "Religious",
    rating: 4.8,
    reviewCount: 145,
    metal: "925 Sterling Silver",
    deity: "Lord Ganesh",
    description: "This exquisite Lord Ganesh pendant is crafted in pure 925 sterling silver, representing the remover of obstacles and the god of wisdom. Wearing this pendant brings positive energy, removes barriers in life, and attracts success and prosperity. Perfect for daily wear or special occasions.",
    features: [
      "Made from authentic 925 sterling silver",
      "Detailed craftsmanship with clear deity features",
      "Lightweight and comfortable for daily wear",
      "Energized and blessed pendant",
      "Comes with authenticity certificate"
    ],
    benefits: [
      "Removes obstacles from your path",
      "Enhances wisdom and intelligence",
      "Brings success in new ventures",
      "Provides divine protection",
      "Attracts prosperity and good fortune"
    ],
    specifications: {
      metal: "925 Sterling Silver",
      deity: "Lord Ganesh",
      size: "1.5 inch",
      weight: "8 grams",
      chainIncluded: "Yes (18 inch silver chain)",
      madeIn: "India"
    },
    careInstructions: [
      "Clean with soft cloth regularly",
      "Store in dry place when not wearing",
      "Avoid contact with perfumes and chemicals",
      "Remove before bathing or swimming",
      "Keep away from harsh cleaning agents"
    ],
    usage: [
      "Wear during important meetings and exams",
      "Perfect for starting new businesses",
      "Daily wear for continuous blessings",
      "Gift for auspicious occasions"
    ]
  },
  {
    id: "pd-002",
    name: "Hanuman Chalisa Gold Plated Pendant",
    price: 1999,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80"
    ],
    category: "Pendant",
    type: "Religious",
    rating: 4.9,
    reviewCount: 289,
    metal: "Gold Plated Brass",
    deity: "Lord Hanuman",
    description: "A powerful Hanuman Chalisa pendant engraved with sacred verses, gold plated for lasting shine. This pendant is known for providing courage, strength, and protection from negative energies. Ideal for devotees seeking Lord Hanuman's blessings.",
    features: [
      "Hanuman Chalisa verses engraved",
      "24K gold plating for premium finish",
      "Durable brass base metal",
      "Clear and readable engravings",
      "Traditional design with modern craftsmanship"
    ],
    benefits: [
      "Provides divine protection",
      "Increases courage and strength",
      "Removes fear and negativity",
      "Enhances devotion and faith",
      "Protects from evil influences"
    ],
    specifications: {
      metal: "24K Gold Plated Brass",
      deity: "Lord Hanuman",
      size: "1.2 inch",
      weight: "6 grams",
      chainIncluded: "Yes (20 inch gold plated chain)",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe with soft, dry cloth after use",
      "Avoid water and moisture exposure",
      "Store in jewelry box separately",
      "Do not spray perfume directly on pendant",
      "Polish gently to maintain shine"
    ],
    usage: [
      "Wear on Tuesdays and Saturdays",
      "Daily wear for protection",
      "During travel for safety",
      "For overcoming challenges"
    ]
  },
  {
    id: "pd-003",
    name: "Om Trishul Silver Pendant",
    price: 1799,
    originalPrice: 2599,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
    ],
    category: "Pendant",
    type: "Spiritual",
    rating: 4.7,
    reviewCount: 178,
    metal: "Pure Silver",
    deity: "Lord Shiva",
    description: "A powerful combination of Om and Trishul (trident) symbols in pure silver. This pendant represents Lord Shiva's energy and provides spiritual strength, inner peace, and protection from negative forces.",
    features: [
      "Pure silver construction",
      "Om and Trishul symbolic combination",
      "Oxidized finish for traditional look",
      "Comfortable wearing experience",
      "Suitable for both men and women"
    ],
    benefits: [
      "Enhances spiritual connection",
      "Provides protection from negativity",
      "Brings peace and calmness",
      "Strengthens inner power",
      "Promotes meditation practice"
    ],
    specifications: {
      metal: "Pure Silver (92.5%)",
      deity: "Lord Shiva",
      size: "1.8 inch",
      weight: "10 grams",
      chainIncluded: "Yes (22 inch oxidized silver chain)",
      madeIn: "India"
    },
    careInstructions: [
      "Clean with silver cleaning cloth",
      "Store in anti-tarnish bag",
      "Avoid harsh chemicals",
      "Remove during physical activities",
      "Polish periodically to maintain shine"
    ],
    usage: [
      "Wear during meditation",
      "Monday worship for Lord Shiva",
      "Daily spiritual practice",
      "Protection during negative situations"
    ]
  },
  {
    id: "pd-004",
    name: "Navratna Nine Gems Pendant",
    price: 4999,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
    ],
    category: "Pendant",
    type: "Astrological",
    rating: 4.9,
    reviewCount: 234,
    metal: "Gold Plated Silver",
    deity: "Nine Planets",
    description: "This magnificent Navratna pendant contains nine precious gemstones representing the nine planets in Vedic astrology. It balances planetary energies, brings good fortune, and provides overall protection and prosperity.",
    features: [
      "Contains all nine authentic gemstones",
      "Gold plated sterling silver setting",
      "Traditional square design",
      "Energized by expert astrologers",
      "Certificate of authenticity included"
    ],
    benefits: [
      "Balances all planetary influences",
      "Brings overall prosperity",
      "Protects from negative planetary effects",
      "Enhances health and wealth",
      "Promotes harmony in all life aspects"
    ],
    specifications: {
      metal: "Gold Plated Sterling Silver",
      deity: "Nine Planets (Navagraha)",
      size: "1 inch x 1 inch",
      weight: "12 grams",
      chainIncluded: "Yes (20 inch gold plated chain)",
      madeIn: "India"
    },
    careInstructions: [
      "Clean gently with soft brush",
      "Avoid contact with cosmetics",
      "Store in soft pouch separately",
      "Recharge under moonlight monthly",
      "Handle gemstones with care"
    ],
    usage: [
      "Wear as per astrological guidance",
      "Daily wear for balanced energies",
      "During important life events",
      "For overall well-being and success"
    ]
  },
  {
    id: "pd-005",
    name: "Shri Yantra Copper Pendant",
    price: 899,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
    ],
    category: "Pendant",
    type: "Yantra",
    rating: 4.6,
    reviewCount: 156,
    metal: "Pure Copper",
    deity: "Goddess Lakshmi",
    description: "The sacred Shri Yantra geometry engraved on pure copper. This powerful yantra pendant attracts wealth, prosperity, and success while removing financial obstacles. Copper enhances the yantra's energy transmission.",
    features: [
      "Pure copper for energy conduction",
      "Precise Shri Yantra geometry",
      "Detailed engraving work",
      "Lightweight and comfortable",
      "Affordable spiritual tool"
    ],
    benefits: [
      "Attracts wealth and prosperity",
      "Removes financial obstacles",
      "Enhances business success",
      "Brings Goddess Lakshmi's blessings",
      "Improves overall abundance"
    ],
    specifications: {
      metal: "Pure Copper",
      deity: "Goddess Lakshmi (Shri Yantra)",
      size: "1.3 inch diameter",
      weight: "7 grams",
      chainIncluded: "Yes (18 inch copper chain)",
      madeIn: "India"
    },
    careInstructions: [
      "Clean with lemon and salt periodically",
      "Wipe dry immediately after cleaning",
      "Store in dry place",
      "Natural patina is beneficial",
      "Avoid excessive moisture"
    ],
    usage: [
      "Wear on Fridays for Lakshmi blessings",
      "Business meetings and deals",
      "Daily wear for prosperity",
      "Keep close during financial activities"
    ]
  },
  {
    id: "pd-006",
    name: "Mahamrityunjaya Mantra Locket",
    price: 1599,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1589674781759-c791126c1c5c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1589674781759-c791126c1c5c?w=800&q=80",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&q=80"
    ],
    category: "Pendant",
    type: "Mantra",
    rating: 4.8,
    reviewCount: 267,
    metal: "German Silver",
    deity: "Lord Shiva",
    description: "This protective locket contains the powerful Mahamrityunjaya Mantra, known for healing, protection, and longevity. It provides divine protection from accidents, illnesses, and untimely death.",
    features: [
      "Mahamrityunjaya Mantra engraved inside",
      "Opens to reveal mantra",
      "Durable German silver",
      "Tarnish-resistant finish",
      "Traditional locket design"
    ],
    benefits: [
      "Provides health protection",
      "Shields from accidents",
      "Promotes healing and recovery",
      "Enhances longevity",
      "Removes fear of death and illness"
    ],
    specifications: {
      metal: "German Silver",
      deity: "Lord Shiva (Mahamrityunjaya)",
      size: "1.4 inch",
      weight: "9 grams",
      chainIncluded: "Yes (20 inch chain)",
      madeIn: "India"
    },
    careInstructions: [
      "Keep locket closed when not viewing",
      "Clean exterior with soft cloth",
      "Do not wet the interior mantra",
      "Store safely in jewelry box",
      "Handle with respect and reverence"
    ],
    usage: [
      "Wear during illness for healing",
      "Travel protection",
      "Daily wear for health",
      "Gift for elderly family members"
    ]
  },
  {
    id: "pd-007",
    name: "Panchmukhi Hanuman Rudraksha Pendant",
    price: 2199,
    originalPrice: 3199,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80"
    ],
    category: "Pendant",
    type: "Rudraksha",
    rating: 4.9,
    reviewCount: 312,
    metal: "Silver Capping",
    deity: "Panchmukhi Hanuman",
    description: "Authentic five-faced Rudraksha bead with Lord Hanuman's image, capped in pure silver. This rare combination provides immense spiritual power, protection, and success in all endeavors.",
    features: [
      "Genuine five-faced Rudraksha",
      "Hanuman deity engraving",
      "Pure silver capping and chain",
      "Naturally formed Rudraksha",
      "Blessed and energized"
    ],
    benefits: [
      "Five-fold protection (Panchmukhi)",
      "Removes negativity and black magic",
      "Enhances courage and strength",
      "Success in challenges",
      "Spiritual and material growth"
    ],
    specifications: {
      metal: "Silver Capping",
      deity: "Panchmukhi Hanuman",
      size: "Rudraksha: 18mm, Total: 2 inch",
      weight: "15 grams",
      chainIncluded: "Yes (24 inch silver chain)",
      madeIn: "India"
    },
    careInstructions: [
      "Oil Rudraksha occasionally with mustard oil",
      "Clean silver parts separately",
      "Store in breathable cloth",
      "Avoid chemicals on Rudraksha",
      "Chant Hanuman Chalisa while wearing"
    ],
    usage: [
      "Wear on Tuesdays after worship",
      "Continuous wear for protection",
      "During meditation and prayer",
      "For overcoming enemies and obstacles"
    ]
  },
  {
    id: "pd-008",
    name: "Durga Maa Kavach Pendant",
    price: 1899,
    originalPrice: 2699,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    category: "Pendant",
    type: "Kavach",
    rating: 4.8,
    reviewCount: 198,
    metal: "Brass with Gold Plating",
    deity: "Goddess Durga",
    description: "A protective Kavach (shield) pendant featuring Goddess Durga, the ultimate protector. This pendant provides divine feminine energy, courage to fight challenges, and protection from all forms of negativity.",
    features: [
      "Detailed Durga Maa image",
      "Gold plated brass construction",
      "Octagonal Kavach design",
      "Powerful protective symbol",
      "Elegant and traditional styling"
    ],
    benefits: [
      "Ultimate protection from evil",
      "Enhances feminine energy",
      "Provides courage in adversity",
      "Removes obstacles and fears",
      "Blesses with victory and success"
    ],
    specifications: {
      metal: "24K Gold Plated Brass",
      deity: "Goddess Durga",
      size: "1.6 inch",
      weight: "11 grams",
      chainIncluded: "Yes (22 inch gold plated chain)",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe with soft jewelry cloth",
      "Avoid water and perfume contact",
      "Store in dry jewelry box",
      "Polish gently when needed",
      "Wear with faith and devotion"
    ],
    usage: [
      "Wear during Navratri for maximum blessings",
      "Daily protection for women",
      "During difficult times",
      "Gift for women empowerment"
    ]
  }
];
