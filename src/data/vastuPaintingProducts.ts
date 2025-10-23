export interface VastuPaintingProduct {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  images: string[];
  category: string;
  theme: string;
  rating: number;
  reviewCount: number;
  size: string;
  material: string;
  description: string;
  features: string[];
  benefits: string[];
  specifications: {
    size: string;
    material: string;
    paintingType: string;
    pattern: string;
    madeIn: string;
  };
  careInstructions: string[];
  usage: string[];
}

export const vastuPaintingProducts: VastuPaintingProduct[] = [
  {
    id: "wp-0226",
    name: "Golden Forest and Mountains Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Sunset & Nature",
    rating: 4.8,
    reviewCount: 124,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "Sunset Vastu paintings are designed to harness the positive energy associated with the setting sun, creating a harmonious and balanced atmosphere within your living or working space. These paintings aim to bring about a sense of tranquility, promote relaxation, and enhance the overall well-being of individuals. The warm hues and serene landscapes in Sunset Vastu paintings are believed to positively influence the energy flow, fostering a connection to nature and encouraging a peaceful environment in accordance with Vastu principles.",
    features: [
      "Superior Quality Canvas with textured high definition printing artwork",
      "Ready to hang with no assembly required",
      "Perfect for living room, bedroom, office, or study room",
      "A great present for housewarming parties or birthdays"
    ],
    benefits: [
      "Eliminates Vastu Dosh from your space",
      "Creates harmonious and balanced atmosphere",
      "Promotes tranquility and relaxation",
      "Enhances positive energy flow",
      "Connects you with nature's peaceful energy"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious & Nature",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe with a clean, dry cloth when needed",
      "Avoid direct sunlight exposure for prolonged periods",
      "Keep away from moisture and humidity",
      "Handle with care to avoid damage to the frame"
    ],
    usage: [
      "Living room wall decoration",
      "Dining hall enhancement",
      "Bedroom peaceful ambiance",
      "Study room or children's room",
      "Office reception or cabin decoration"
    ]
  },
  {
    id: "wp-0222",
    name: "Golden Mountain Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Sunset & Nature",
    rating: 4.7,
    reviewCount: 98,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "This stunning Golden Mountain painting captures the majestic beauty of mountains during sunset, creating a powerful Vastu effect in your space. The golden hues represent prosperity and positive energy flow, making it perfect for enhancing the northwestern direction of your home or office.",
    features: [
      "Superior Quality Canvas with textured high definition printing artwork",
      "Ready to hang with no assembly required",
      "Versatile placement for any room",
      "Professional grade printing quality"
    ],
    benefits: [
      "Attracts wealth and prosperity",
      "Creates stable and grounding energy",
      "Promotes mental clarity and focus",
      "Enhances positive vibrations",
      "Balances earth element in space"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious & Nature",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe with a clean, dry cloth when needed",
      "Avoid direct sunlight exposure for prolonged periods",
      "Keep away from moisture and humidity",
      "Handle with care to avoid damage to the frame"
    ],
    usage: [
      "Living room for prosperity",
      "Office cabin for success",
      "Meditation room for peace",
      "Conference room for stability"
    ]
  },
  {
    id: "wp-0201",
    name: "Modern Sunset Lake Forest Natural Scenery 3D Mural Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Sunset & Nature",
    rating: 4.9,
    reviewCount: 156,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "Experience the depth and beauty of nature with this stunning 3D mural effect painting. The combination of sunset, lake, and forest creates a perfect balance of all five elements - water, fire, earth, air, and space - making it an ideal Vastu painting for your home.",
    features: [
      "3D mural effect for enhanced depth",
      "Natural scenery promoting calmness",
      "Superior Quality Canvas with textured HD printing",
      "Ready to hang decoration piece"
    ],
    benefits: [
      "Balances all five Vastu elements",
      "Creates serene and peaceful atmosphere",
      "Reduces stress and anxiety",
      "Enhances water element for prosperity",
      "Promotes emotional well-being"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious & Nature",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe with a clean, dry cloth when needed",
      "Avoid direct sunlight exposure",
      "Keep away from moisture",
      "Do not use chemical cleaners"
    ],
    usage: [
      "Living room focal point",
      "Bedroom relaxation area",
      "Meditation space",
      "Yoga room decoration"
    ]
  },
  {
    id: "wp-0207",
    name: "Oil Painting - Venice, Italy Beautiful Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Sunset & Nature",
    rating: 4.6,
    reviewCount: 87,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "This beautiful Venice-inspired painting captures the romantic sunset over water canals, bringing the energy of flowing water and warm sunset colors into your space. Perfect for enhancing the water element in your Vastu layout.",
    features: [
      "Oil painting effect on canvas",
      "Architectural and natural beauty combined",
      "Professional HD printing quality",
      "Ready to hang frame"
    ],
    benefits: [
      "Enhances water element for wealth",
      "Brings romantic and peaceful energy",
      "Promotes creativity and imagination",
      "Creates positive flow of energy",
      "Attracts prosperity through water element"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious & Nature",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe with a clean, dry cloth when needed",
      "Keep away from direct water contact",
      "Avoid humid environments",
      "Clean gently to preserve texture"
    ],
    usage: [
      "North direction for career growth",
      "Northeast for spiritual energy",
      "Living room decoration",
      "Office space enhancement"
    ]
  },
  {
    id: "wp-0333",
    name: "Radha Krishna Abstract Green-Pink Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Radha Krishna",
    rating: 4.9,
    reviewCount: 203,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "Radha Krishna paintings have numerous benefits as per Vastu which include bringing harmony and positive energy, enhancing spiritual connection, helping in balancing the 5 elements - earth, fire, water, air, space, improving relationships, and inspiring love, devotion, and compassion. This beautiful abstract rendition in green and pink hues represents the divine love and spiritual connection.",
    features: [
      "Abstract artistic style with spiritual essence",
      "Vibrant green and pink color palette",
      "High definition textured canvas print",
      "Ready to hang religious artwork"
    ],
    benefits: [
      "Brings harmony and positive energy",
      "Enhances spiritual connection",
      "Balances the 5 elements",
      "Improves relationships",
      "Inspires love, devotion, and compassion",
      "Creates divine atmosphere"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe with a clean, dry cloth when needed",
      "Keep in respectful, clean place",
      "Avoid touching the painting surface",
      "Keep away from direct sunlight"
    ],
    usage: [
      "Pooja room or prayer area",
      "Bedroom for relationship harmony",
      "Living room for positive energy",
      "Meditation space"
    ]
  },
  {
    id: "wp-0330",
    name: "Radha Krishna Abstract Multicolor Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Radha Krishna",
    rating: 4.8,
    reviewCount: 178,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "This vibrant multicolor Radha Krishna painting represents the joyful and colorful nature of divine love. The multiple colors symbolize the various aspects of life and spirituality, creating a complete Vastu balance in your sacred space.",
    features: [
      "Multicolor abstract design",
      "Spiritual and artistic fusion",
      "Premium canvas quality",
      "Easy installation"
    ],
    benefits: [
      "Balances all Vastu directions with multiple colors",
      "Enhances spiritual growth",
      "Attracts divine blessings",
      "Promotes harmony in relationships",
      "Creates joyful atmosphere"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe gently with dry cloth",
      "Place in clean, respectful location",
      "Avoid moisture exposure",
      "Keep away from heat sources"
    ],
    usage: [
      "Temple or pooja room",
      "Living room for family harmony",
      "Bedroom for love and peace",
      "Meditation area"
    ]
  },
  {
    id: "wp-0331",
    name: "Radha Krishna Abstract Multicolor Canvas Wall Painting (Variant 2)",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Radha Krishna",
    rating: 4.7,
    reviewCount: 145,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "Another beautiful interpretation of Radha Krishna in abstract multicolor style, this painting brings divine energy and colorful vibrations to your space, promoting spiritual well-being and positive relationships.",
    features: [
      "Unique abstract interpretation",
      "Rich color palette",
      "High-quality canvas printing",
      "Wooden frame included"
    ],
    benefits: [
      "Spiritual upliftment",
      "Relationship enhancement",
      "Positive energy attraction",
      "Vastu Dosh removal",
      "Divine protection"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious",
      madeIn: "India"
    },
    careInstructions: [
      "Dust regularly with soft cloth",
      "Avoid direct sunlight",
      "Keep in sacred, clean space",
      "Handle with reverence"
    ],
    usage: [
      "Spiritual room decoration",
      "Living area enhancement",
      "Gift for auspicious occasions",
      "Vastu correction tool"
    ]
  },
  {
    id: "wp-0332",
    name: "Radha Krishna Abstract Multicolor Canvas Wall Painting (Variant 3)",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Radha Krishna",
    rating: 4.8,
    reviewCount: 167,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "This third variant of the multicolor Radha Krishna series offers yet another beautiful perspective on divine love, with its own unique color composition and artistic expression, perfect for those seeking specific Vastu energy.",
    features: [
      "Distinctive color scheme",
      "Abstract spiritual art",
      "Museum-quality canvas",
      "Frame ready to mount"
    ],
    benefits: [
      "Attracts divine grace",
      "Harmonizes living space",
      "Strengthens bonds of love",
      "Purifies environment",
      "Invites prosperity and peace"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious",
      madeIn: "India"
    },
    careInstructions: [
      "Clean with dry, soft cloth only",
      "Position in sacred direction",
      "Protect from humidity",
      "Maintain with respect"
    ],
    usage: [
      "Pooja room focal point",
      "Bedroom for marital harmony",
      "Study room for concentration",
      "Entrance for positive welcome"
    ]
  },
  {
    id: "wp-0325",
    name: "Radha Krishna Blue Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Radha Krishna",
    rating: 4.9,
    reviewCount: 189,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "The blue color in this Radha Krishna painting represents the infinite nature of Lord Krishna and the depth of divine love. Blue is also associated with the water element in Vastu, bringing calmness, peace, and prosperity to your space.",
    features: [
      "Serene blue color theme",
      "Traditional spiritual imagery",
      "Premium quality canvas",
      "Ready for immediate display"
    ],
    benefits: [
      "Calms mind and emotions",
      "Enhances water element",
      "Promotes spiritual depth",
      "Attracts peace and tranquility",
      "Improves meditation practice"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe with clean, dry cloth",
      "Keep in peaceful location",
      "Avoid direct moisture",
      "Respect and maintain cleanliness"
    ],
    usage: [
      "North direction for career and opportunities",
      "Northeast for spiritual growth",
      "Prayer room or altar",
      "Peaceful bedroom corner"
    ]
  },
  {
    id: "wp-0328",
    name: "Radha Krishna Blue Canvas Wall Painting (Variant 2)",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Radha Krishna",
    rating: 4.8,
    reviewCount: 172,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "Another beautiful blue-themed Radha Krishna painting that captures the essence of divine love in a different artistic style. The blue hues create a soothing atmosphere while maintaining the spiritual energy of the deities.",
    features: [
      "Alternative blue design",
      "Spiritual artistic expression",
      "High-quality materials",
      "Installation-ready frame"
    ],
    benefits: [
      "Deepens spiritual connection",
      "Creates peaceful environment",
      "Balances emotions",
      "Attracts divine energy",
      "Enhances relationship harmony"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious",
      madeIn: "India"
    },
    careInstructions: [
      "Dust gently with soft material",
      "Place in clean, sacred area",
      "Protect from environmental damage",
      "Handle with devotion"
    ],
    usage: [
      "Temple room decoration",
      "Master bedroom for couple harmony",
      "Living room spiritual corner",
      "Office for peaceful work environment"
    ]
  },
  {
    id: "wp-0324",
    name: "Radha Krishna Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Radha Krishna",
    rating: 4.7,
    reviewCount: 158,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "A classic representation of Radha Krishna that brings timeless spiritual energy to your home. This painting is perfect for those who want traditional Vastu benefits with divine blessings of the celestial couple.",
    features: [
      "Classic Radha Krishna depiction",
      "Balanced color composition",
      "Durable canvas material",
      "Easy wall mounting"
    ],
    benefits: [
      "Blesses relationships with love",
      "Removes Vastu doshas",
      "Creates harmonious atmosphere",
      "Attracts prosperity",
      "Provides spiritual protection"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious",
      madeIn: "India"
    },
    careInstructions: [
      "Clean regularly with dry cloth",
      "Keep in appropriate direction",
      "Avoid excessive humidity",
      "Maintain with care and respect"
    ],
    usage: [
      "Pooja ghar or temple area",
      "Bedroom for marital bliss",
      "Reception area for positive first impression",
      "Any room needing divine energy"
    ]
  },
  {
    id: "wp-0336",
    name: "Radha Krishna Green Canvas Wall Painting",
    price: 4099,
    originalPrice: 4699,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Vastu Painting",
    theme: "Radha Krishna",
    rating: 4.8,
    reviewCount: 194,
    size: '23" H X 47" W',
    material: "High-quality cotton canvas stretched on wooden frame",
    description: "Green represents growth, prosperity, and the heart chakra in Vastu. This Radha Krishna painting in green tones brings healing energy, growth in relationships, and connection with nature's abundance to your living space.",
    features: [
      "Refreshing green color theme",
      "Heart chakra activation",
      "Premium canvas quality",
      "Ready to hang design"
    ],
    benefits: [
      "Promotes growth and prosperity",
      "Heals emotional wounds",
      "Strengthens relationships",
      "Connects with nature energy",
      "Opens heart chakra",
      "Attracts abundance"
    ],
    specifications: {
      size: '23" H X 47" W',
      material: "High-quality cotton canvas stretched on wooden frame",
      paintingType: "Superior Quality Canvas with textured HD printing",
      pattern: "Religious",
      madeIn: "India"
    },
    careInstructions: [
      "Wipe gently when needed",
      "Display in respectful location",
      "Keep away from moisture",
      "Preserve with devotion"
    ],
    usage: [
      "East direction for family growth",
      "Living room for prosperity",
      "Bedroom for relationship healing",
      "Business place for growth"
    ]
  }
];
