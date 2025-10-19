import aventurineImg from "@/assets/bracelets/aventurine.jpg";
import chakraImg from "@/assets/bracelets/7-chakra.jpg";
import obsidianImg from "@/assets/bracelets/obsidian.jpg";
import tigerEyeImg from "@/assets/bracelets/tiger-eye.jpg";

export interface BraceletProduct {
  id: string;
  name: string;
  crystal: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  sold: string;
  inStock: boolean;
  images: string[];
  sizes: string[];
  beadSize: string;
  material: string;
  chakra: { name: string; color: string };
  element: { name: string; color: string };
  planet: { name: string; color: string };
  zodiac: { name: string; color: string };
  keyHighlights: string[];
  benefits: Array<{
    title: string;
    desc: string;
  }>;
  detailedBenefits: string[];
  healingProperties: string[];
  idealFor: string[];
  wearingInstructions: string[];
  upsells: Array<{
    name: string;
    desc: string;
    price: number;
  }>;
  category: string;
  certifications: string[];
}

export const braceletProductsData: Record<string, BraceletProduct> = {
  "amethyst": {
    id: "amethyst",
    name: "Natural Amethyst Crystal Bracelet",
    crystal: "Amethyst",
    price: 1499,
    originalPrice: 3499,
    discount: 57,
    rating: 4.9,
    reviews: 18452,
    sold: "32,000+",
    inStock: true,
    images: [aventurineImg, chakraImg, obsidianImg, tigerEyeImg],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    beadSize: "8mm Round Beads",
    material: "AAA Grade Natural Amethyst",
    chakra: { name: "Crown & Third Eye", color: "Purple" },
    element: { name: "Air & Water", color: "Blue" },
    planet: { name: "Jupiter & Neptune", color: "Indigo" },
    zodiac: { name: "Pisces, Aquarius", color: "Purple" },
    keyHighlights: [
      "AAA Grade natural amethyst crystals",
      "Activates Crown & Third Eye Chakras",
      "Powerful for meditation & spiritual work",
      "Reduces stress, anxiety & promotes clarity"
    ],
    benefits: [
      { title: "Spiritual Growth", desc: "Enhances intuition & third eye" },
      { title: "Stress Relief", desc: "Calms mind and promotes peace" },
      { title: "Protection", desc: "Shields from negative energy" },
      { title: "Better Sleep", desc: "Reduces insomnia & nightmares" }
    ],
    detailedBenefits: [
      "Opens and activates the Crown and Third Eye Chakras",
      "Enhances spiritual awareness and psychic abilities",
      "Promotes emotional balance and inner peace",
      "Protects against negative energies and psychic attacks"
    ],
    healingProperties: [
      "Calms the mind and reduces stress",
      "Enhances spiritual awareness & intuition",
      "Promotes restful sleep & vivid dreams",
      "Protects against psychic attacks",
      "Aids in overcoming addictions",
      "Balances emotional highs and lows"
    ],
    idealFor: [
      "Meditation practitioners",
      "People seeking spiritual growth",
      "Those experiencing stress or anxiety",
      "Individuals with sleep issues",
      "Energy workers and healers"
    ],
    wearingInstructions: [
      "Cleanse with sage or moonlight before first use",
      "Wear on left wrist to receive healing energy",
      "Remove during shower or swimming",
      "Recharge under full moon monthly"
    ],
    upsells: [
      { name: "Amethyst Geode", desc: "Natural crystal cluster", price: 2499 },
      { name: "Crystal Cleansing Kit", desc: "Sage & selenite plate", price: 599 },
      { name: "Meditation Guide", desc: "Amethyst activation ebook", price: 299 }
    ],
    category: "Healing",
    certifications: ["Lab Certified", "Natural Crystal", "Energized"]
  },
  "7-chakra": {
    id: "7-chakra",
    name: "7 Chakra Crystal Healing Bracelet",
    crystal: "Multi-Crystal",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.9,
    reviews: 24567,
    sold: "45,000+",
    inStock: true,
    images: [chakraImg, aventurineImg, tigerEyeImg, obsidianImg],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    beadSize: "8mm Round Beads",
    material: "7 Natural Chakra Crystals",
    chakra: { name: "All 7 Chakras", color: "Rainbow" },
    element: { name: "All Elements", color: "Multi" },
    planet: { name: "All Planets", color: "Rainbow" },
    zodiac: { name: "All Zodiac Signs", color: "Multi" },
    keyHighlights: [
      "Complete 7 chakra alignment system",
      "7 authentic natural crystals",
      "Balances entire energy system",
      "Perfect for daily chakra healing"
    ],
    benefits: [
      { title: "Complete Balance", desc: "Aligns all 7 chakras" },
      { title: "Energy Flow", desc: "Removes energy blockages" },
      { title: "Holistic Healing", desc: "Mind, body & spirit harmony" },
      { title: "Universal Protection", desc: "Complete energy shield" }
    ],
    detailedBenefits: [
      "Aligns and balances all seven chakras simultaneously",
      "Promotes complete energy system harmony",
      "Enhances overall well-being and vitality",
      "Creates a protective energy shield around the aura"
    ],
    healingProperties: [
      "Balances all chakra points",
      "Enhances energy flow throughout body",
      "Promotes physical and emotional healing",
      "Strengthens aura and energy field",
      "Improves overall vitality and wellness",
      "Harmonizes mind, body and spirit"
    ],
    idealFor: [
      "Anyone starting chakra work",
      "Energy healing practitioners",
      "Yoga and meditation enthusiasts",
      "People seeking complete balance",
      "Those feeling energetically blocked"
    ],
    wearingInstructions: [
      "Wear on left wrist for receiving energy",
      "Cleanse weekly with sage or palo santo",
      "Set intention while wearing",
      "Charge under full moon for maximum power"
    ],
    upsells: [
      { name: "Chakra Singing Bowl", desc: "For meditation", price: 1999 },
      { name: "Chakra Meditation Mat", desc: "7 crystal grid", price: 2499 },
      { name: "Chakra Guidebook", desc: "Complete healing guide", price: 399 }
    ],
    category: "Chakra",
    certifications: ["Natural Crystals", "Handcrafted", "Energized"]
  },
  "black-tourmaline": {
    id: "black-tourmaline",
    name: "Black Tourmaline Protection Bracelet",
    crystal: "Black Tourmaline",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.8,
    reviews: 15234,
    sold: "28,000+",
    inStock: true,
    images: [obsidianImg, chakraImg, aventurineImg, tigerEyeImg],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    beadSize: "8mm Round Beads",
    material: "Natural Black Tourmaline",
    chakra: { name: "Root Chakra", color: "Black" },
    element: { name: "Earth", color: "Brown" },
    planet: { name: "Saturn", color: "Black" },
    zodiac: { name: "Capricorn, Scorpio", color: "Black" },
    keyHighlights: [
      "Most powerful protection stone",
      "Blocks negative energy & EMF radiation",
      "Grounds and stabilizes root chakra",
      "Transmutes negativity to positive energy"
    ],
    benefits: [
      { title: "EMF Protection", desc: "Shields from electronics" },
      { title: "Negativity Block", desc: "Repels bad energy" },
      { title: "Grounding", desc: "Connects to Earth energy" },
      { title: "Psychic Shield", desc: "Protects aura field" }
    ],
    detailedBenefits: [
      "Creates powerful protective shield around aura",
      "Blocks electromagnetic radiation from devices",
      "Grounds excess energy and promotes stability",
      "Transmutes negative energy into positive"
    ],
    healingProperties: [
      "Strongest psychic protection stone",
      "Shields from EMF and negative energies",
      "Grounds and centers during meditation",
      "Releases stress and tension",
      "Purifies and cleanses aura",
      "Enhances physical vitality"
    ],
    idealFor: [
      "People sensitive to negative energy",
      "Office workers (EMF protection)",
      "Empaths and energy workers",
      "Those needing grounding",
      "Anyone seeking protection"
    ],
    wearingInstructions: [
      "Wear on left wrist for protection",
      "Cleanse weekly under running water",
      "Recharge on earth or with hematite",
      "Keep near electronics for EMF shield"
    ],
    upsells: [
      { name: "Black Tourmaline Tower", desc: "Large protection stone", price: 1499 },
      { name: "Selenite Charging Plate", desc: "Cleanse & charge", price: 699 },
      { name: "Protection Grid Kit", desc: "4 tourmaline stones", price: 1999 }
    ],
    category: "Protection",
    certifications: ["Natural Stone", "Lab Tested", "Authentic"]
  },
  "rose-quartz": {
    id: "rose-quartz",
    name: "Rose Quartz Love & Heart Bracelet",
    crystal: "Rose Quartz",
    price: 1199,
    originalPrice: 2399,
    discount: 50,
    rating: 4.9,
    reviews: 21445,
    sold: "38,000+",
    inStock: true,
    images: [aventurineImg, chakraImg, tigerEyeImg, obsidianImg],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    beadSize: "8mm Round Beads",
    material: "AAA Grade Rose Quartz",
    chakra: { name: "Heart Chakra", color: "Pink" },
    element: { name: "Water", color: "Pink" },
    planet: { name: "Venus", color: "Pink" },
    zodiac: { name: "Taurus, Libra", color: "Pink" },
    keyHighlights: [
      "Universal stone of love & compassion",
      "Opens and heals heart chakra",
      "Attracts love and relationships",
      "Promotes self-love and acceptance"
    ],
    benefits: [
      { title: "Attract Love", desc: "Draws romantic relationships" },
      { title: "Self-Love", desc: "Enhances self-acceptance" },
      { title: "Emotional Healing", desc: "Heals heartbreak & trauma" },
      { title: "Compassion", desc: "Opens heart to forgiveness" }
    ],
    detailedBenefits: [
      "Opens and activates the Heart Chakra",
      "Attracts love, romance and relationships",
      "Promotes self-love and self-acceptance",
      "Heals emotional wounds and past trauma"
    ],
    healingProperties: [
      "The stone of unconditional love",
      "Heals heartbreak and emotional pain",
      "Enhances all types of love relationships",
      "Promotes peace and emotional healing",
      "Releases childhood trauma",
      "Encourages self-forgiveness"
    ],
    idealFor: [
      "Those seeking romantic love",
      "Healing from heartbreak",
      "Building self-esteem",
      "Improving relationships",
      "Opening heart chakra"
    ],
    wearingInstructions: [
      "Wear close to heart area",
      "Cleanse with rose water monthly",
      "Set love intentions while wearing",
      "Charge in moonlight for love energy"
    ],
    upsells: [
      { name: "Rose Quartz Heart", desc: "Polished crystal heart", price: 899 },
      { name: "Love Attraction Oil", desc: "Rose & jasmine blend", price: 499 },
      { name: "Self-Love Journal", desc: "30-day guided practice", price: 599 }
    ],
    category: "Love",
    certifications: ["AAA Grade", "Natural Crystal", "Energized"]
  },
  "tiger-eye": {
    id: "tiger-eye",
    name: "Tiger Eye Courage & Confidence Bracelet",
    crystal: "Tiger Eye",
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    rating: 4.8,
    reviews: 16298,
    sold: "29,000+",
    inStock: true,
    images: [tigerEyeImg, obsidianImg, aventurineImg, chakraImg],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    beadSize: "8mm Round Beads",
    material: "Natural Tiger Eye",
    chakra: { name: "Solar Plexus & Root", color: "Gold" },
    element: { name: "Fire & Earth", color: "Gold" },
    planet: { name: "Sun", color: "Gold" },
    zodiac: { name: "Leo, Capricorn", color: "Gold" },
    keyHighlights: [
      "Stone of courage and confidence",
      "Enhances willpower and focus",
      "Attracts wealth and prosperity",
      "Provides grounding and protection"
    ],
    benefits: [
      { title: "Confidence Boost", desc: "Enhances self-esteem" },
      { title: "Clear Vision", desc: "Improves decision making" },
      { title: "Prosperity", desc: "Attracts wealth & success" },
      { title: "Protection", desc: "Shields from negativity" }
    ],
    detailedBenefits: [
      "Activates Solar Plexus for personal power",
      "Enhances courage and fearlessness",
      "Improves focus and mental clarity",
      "Attracts wealth and prosperity"
    ],
    healingProperties: [
      "Boosts confidence and courage",
      "Enhances willpower and motivation",
      "Attracts wealth and good fortune",
      "Provides mental clarity and focus",
      "Grounds energy and provides stability",
      "Protects from negative energies"
    ],
    idealFor: [
      "Business professionals",
      "Students and learners",
      "Those lacking confidence",
      "People seeking prosperity",
      "Anyone needing courage"
    ],
    wearingInstructions: [
      "Wear on right wrist for manifesting",
      "Cleanse with sunlight for 2 hours",
      "Set prosperity intentions",
      "Recharge monthly in sunlight"
    ],
    upsells: [
      { name: "Tiger Eye Pyramid", desc: "For workspace", price: 1299 },
      { name: "Success Manifestation Kit", desc: "Crystal & candles", price: 1799 },
      { name: "Abundance Journal", desc: "Wealth mindset guide", price: 499 }
    ],
    category: "Confidence",
    certifications: ["Natural Stone", "Hand Selected", "Energized"]
  },
  "citrine": {
    id: "citrine",
    name: "Citrine Abundance & Prosperity Bracelet",
    crystal: "Citrine",
    price: 1399,
    originalPrice: 2799,
    discount: 50,
    rating: 4.9,
    reviews: 19412,
    sold: "35,000+",
    inStock: true,
    images: [aventurineImg, tigerEyeImg, chakraImg, obsidianImg],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    beadSize: "8mm Round Beads",
    material: "Natural Citrine Crystal",
    chakra: { name: "Solar Plexus", color: "Yellow" },
    element: { name: "Fire", color: "Gold" },
    planet: { name: "Sun", color: "Yellow" },
    zodiac: { name: "Aries, Leo, Gemini", color: "Gold" },
    keyHighlights: [
      "The ultimate money & success stone",
      "Attracts wealth and prosperity",
      "Enhances manifestation power",
      "Promotes positive energy & joy"
    ],
    benefits: [
      { title: "Wealth Magnet", desc: "Attracts money & success" },
      { title: "Manifestation", desc: "Amplifies intentions" },
      { title: "Positive Energy", desc: "Dispels negativity" },
      { title: "Creativity", desc: "Enhances innovation" }
    ],
    detailedBenefits: [
      "Powerful manifesting stone for wealth",
      "Activates Solar Plexus chakra for personal power",
      "Attracts success and prosperity in business",
      "Promotes joy, enthusiasm and positive energy"
    ],
    healingProperties: [
      "Known as the Merchant's Stone",
      "Attracts wealth and prosperity",
      "Enhances manifestation abilities",
      "Promotes joy and positive attitude",
      "Boosts self-confidence",
      "Dispels negative energies"
    ],
    idealFor: [
      "Business owners and entrepreneurs",
      "Those manifesting abundance",
      "People seeking success",
      "Anyone needing positivity",
      "Creative professionals"
    ],
    wearingInstructions: [
      "Wear on receiving hand (left)",
      "Keep in cash register or wallet",
      "Cleanse with sunlight monthly",
      "Set financial goals while wearing"
    ],
    upsells: [
      { name: "Citrine Money Tree", desc: "Feng shui prosperity", price: 1899 },
      { name: "Abundance Candle", desc: "Citrine-infused", price: 699 },
      { name: "Prosperity Ritual Guide", desc: "Complete ebook", price: 399 }
    ],
    category: "Prosperity",
    certifications: ["Natural Citrine", "Energized", "Certified"]
  },
  "green-aventurine": {
    id: "green-aventurine",
    name: "Green Aventurine Luck & Money Bracelet",
    crystal: "Green Aventurine",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.8,
    reviews: 14523,
    sold: "26,000+",
    inStock: true,
    images: [aventurineImg, chakraImg, tigerEyeImg, obsidianImg],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    beadSize: "8mm Round Beads",
    material: "Natural Green Aventurine",
    chakra: { name: "Heart Chakra", color: "Green" },
    element: { name: "Earth", color: "Green" },
    planet: { name: "Mercury", color: "Green" },
    zodiac: { name: "Virgo, Libra", color: "Green" },
    keyHighlights: [
      "Stone of opportunity & good luck",
      "Attracts wealth and prosperity",
      "Heart chakra healing crystal",
      "Promotes emotional calm & well-being"
    ],
    benefits: [
      { title: "Good Luck", desc: "Attracts opportunities" },
      { title: "Prosperity", desc: "Money & success magnet" },
      { title: "Heart Healing", desc: "Emotional balance" },
      { title: "Confidence", desc: "Boosts self-belief" }
    ],
    detailedBenefits: [
      "Attracts luck and opportunities",
      "Opens heart chakra for giving and receiving",
      "Promotes prosperity in all areas",
      "Enhances decision-making confidence"
    ],
    healingProperties: [
      "Known as the Stone of Opportunity",
      "Attracts luck and prosperity",
      "Heals and opens the heart chakra",
      "Promotes emotional calm and well-being",
      "Enhances creativity and motivation",
      "Releases old patterns and habits"
    ],
    idealFor: [
      "Gamblers and risk-takers",
      "Job seekers and interviewees",
      "Those starting new ventures",
      "People seeking heart healing",
      "Anyone needing good luck"
    ],
    wearingInstructions: [
      "Wear on left wrist for luck",
      "Carry during interviews or meetings",
      "Cleanse in earth or with sage",
      "Recharge under new moon"
    ],
    upsells: [
      { name: "Aventurine Wealth Bowl", desc: "Crystal money magnet", price: 999 },
      { name: "Lucky Charm Set", desc: "5 crystal pieces", price: 1499 },
      { name: "Luck Attraction Guide", desc: "Ritual ebook", price: 299 }
    ],
    category: "Money",
    certifications: ["Natural Crystal", "Hand Selected", "Energized"]
  },
  "clear-quartz": {
    id: "clear-quartz",
    name: "Clear Quartz Master Healer Bracelet",
    crystal: "Clear Quartz",
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    rating: 4.9,
    reviews: 22134,
    sold: "40,000+",
    inStock: true,
    images: [chakraImg, aventurineImg, obsidianImg, tigerEyeImg],
    sizes: ["S (6.5in)", "M (7in)", "L (7.5in)", "XL (8in)"],
    beadSize: "8mm Round Beads",
    material: "AAA Grade Clear Quartz",
    chakra: { name: "Crown & All Chakras", color: "White" },
    element: { name: "All Elements", color: "Clear" },
    planet: { name: "All Planets", color: "White" },
    zodiac: { name: "All Zodiac Signs", color: "Clear" },
    keyHighlights: [
      "Master healer crystal for all purposes",
      "Amplifies energy and intentions",
      "Clears and activates all chakras",
      "Programs for any healing need"
    ],
    benefits: [
      { title: "Universal Healer", desc: "Works on all levels" },
      { title: "Energy Amplifier", desc: "Boosts other crystals" },
      { title: "Mental Clarity", desc: "Clear thinking & focus" },
      { title: "Spiritual Growth", desc: "Higher consciousness" }
    ],
    detailedBenefits: [
      "The most versatile healing crystal",
      "Amplifies energy and intentions",
      "Harmonizes and balances all chakras",
      "Enhances spiritual growth and awareness"
    ],
    healingProperties: [
      "Known as the Master Healer",
      "Works on all physical, mental, emotional levels",
      "Amplifies other crystals' energies",
      "Enhances mental clarity and focus",
      "Promotes spiritual development",
      "Programmable for specific intentions"
    ],
    idealFor: [
      "Crystal healing beginners",
      "Meditation practitioners",
      "Energy workers",
      "Anyone seeking clarity",
      "Those needing universal healing"
    ],
    wearingInstructions: [
      "Program with your intention first",
      "Cleanse weekly under full moon",
      "Wear on either wrist",
      "Recharge in sunlight for 1 hour"
    ],
    upsells: [
      { name: "Quartz Crystal Point", desc: "Large healing wand", price: 1599 },
      { name: "Crystal Grid Set", desc: "Sacred geometry", price: 1999 },
      { name: "Crystal Programming Guide", desc: "Complete manual", price: 499 }
    ],
    category: "Healing",
    certifications: ["AAA Grade", "Natural Quartz", "Certified"]
  }
};

// Export array of all products for collection page
export const allBraceletProducts = Object.values(braceletProductsData);
