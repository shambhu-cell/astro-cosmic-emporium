import crystalMalaImg from "@/assets/mala/crystal-mala.jpg";
import rudrakshaImg from "@/assets/mala/rudraksha-mala.jpg";
import sandalwoodImg from "@/assets/mala/sandalwood-mala.jpg";
import tulsiImg from "@/assets/mala/tulsi-mala.jpg";

export interface MalaProduct {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  type: string;
  description: string;
  benefits: string[];
  inStock: boolean;
}

export const malaProducts: MalaProduct[] = [
  {
    id: 1,
    name: "Sphatik Crystal Mala - 108 Beads",
    price: 2999,
    originalPrice: 4499,
    image: crystalMalaImg,
    rating: 4.9,
    reviews: 287,
    type: "Crystal Mala",
    description: "Pure Sphatik (Clear Quartz) Crystal Mala for meditation and japa",
    benefits: ["Enhances clarity", "Peace of mind", "Spiritual growth"],
    inStock: true
  },
  {
    id: 2,
    name: "Tulsi Mala - Holy Basil 108 Beads",
    price: 1499,
    originalPrice: 2299,
    image: tulsiImg,
    rating: 4.8,
    reviews: 534,
    type: "Sacred Mala",
    description: "Authentic Tulsi (Holy Basil) Mala for Krishna devotees",
    benefits: ["Divine blessings", "Purification", "Devotional energy"],
    inStock: true
  },
  {
    id: 3,
    name: "Sandalwood Mala - Premium Quality",
    price: 1999,
    originalPrice: 2999,
    image: sandalwoodImg,
    rating: 4.7,
    reviews: 412,
    type: "Meditation",
    description: "Aromatic Sandalwood Mala for calming meditation practices",
    benefits: ["Calms mind", "Aromatic therapy", "Focus enhancement"],
    inStock: true
  },
  {
    id: 4,
    name: "5 Mukhi Rudraksha Mala - Certified",
    price: 2499,
    originalPrice: 3999,
    image: rudrakshaImg,
    rating: 4.9,
    reviews: 698,
    type: "Rudraksha Mala",
    description: "Certified 5 Mukhi Rudraksha Mala for health and peace",
    benefits: ["Health benefits", "Stress relief", "Spiritual power"],
    inStock: true
  },
  {
    id: 5,
    name: "Rose Quartz Mala - Love & Peace",
    price: 2799,
    originalPrice: 3999,
    image: crystalMalaImg,
    rating: 4.8,
    reviews: 345,
    type: "Love & Peace",
    description: "Rose Quartz Mala for unconditional love and emotional healing",
    benefits: ["Emotional healing", "Attracts love", "Inner peace"],
    inStock: true
  },
  {
    id: 6,
    name: "Black Tourmaline Mala - Protection",
    price: 3499,
    originalPrice: 4999,
    image: crystalMalaImg,
    rating: 4.9,
    reviews: 267,
    type: "Protection",
    description: "Powerful Black Tourmaline Mala for protection and grounding",
    benefits: ["Protection", "Grounding", "Negative energy shield"],
    inStock: true
  },
  {
    id: 7,
    name: "Red Sandalwood Mala - Premium",
    price: 3999,
    originalPrice: 5999,
    image: sandalwoodImg,
    rating: 4.8,
    reviews: 189,
    type: "Sacred Mala",
    description: "Rare Red Sandalwood Mala for powerful spiritual practices",
    benefits: ["Divine energy", "Wealth attraction", "Spiritual power"],
    inStock: true
  },
  {
    id: 8,
    name: "Amethyst Mala - Spiritual Awakening",
    price: 3299,
    originalPrice: 4799,
    image: crystalMalaImg,
    rating: 4.7,
    reviews: 223,
    type: "Crystal Mala",
    description: "Amethyst Crystal Mala for third eye activation and intuition",
    benefits: ["Third eye activation", "Intuition boost", "Spiritual insight"],
    inStock: true
  }
];
