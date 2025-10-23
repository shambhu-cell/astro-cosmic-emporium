export interface JadiProduct {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  sold: string;
  images: string[];
  description: string;
  purpose: string;
  planetConnection: string;
  planetColor: string;
  howToUse: string;
  benefits: string[];
  chakra: {
    name: string;
    color: string;
  };
  element: {
    name: string;
    color: string;
  };
  zodiac: {
    name: string;
    color: string;
  };
  keyHighlights: string[];
  healingProperties: string[];
  idealFor: string[];
  wearingInstructions: string[];
}

export const jadiProducts: Record<string, JadiProduct> = {
  "bharangi-root": {
    id: "bharangi-root",
    name: "Bharangi Root - Bharangi Ki Jad",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.8,
    reviews: 2543,
    sold: "3,421",
    images: [
      "https://astrosage.shop/cdn/shop/files/bharangi-root_246b08ac-22b9-44c8-80ee-fd8262802349.jpg",
      "https://astrosage.shop/cdn/shop/files/bharangi-root_246b08ac-22b9-44c8-80ee-fd8262802349.jpg",
      "https://astrosage.shop/cdn/shop/files/bharangi-root_246b08ac-22b9-44c8-80ee-fd8262802349.jpg",
      "https://astrosage.shop/cdn/shop/files/bharangi-root_246b08ac-22b9-44c8-80ee-fd8262802349.jpg"
    ],
    description: "Bharangi, also known as Pygmaeopremna herbacea, is associated with the planet Jupiter. Jupiter signifies wisdom, knowledge and virtues. Wearing Bharangi Ki Jadi heals all the negative effects of Jupiter. It also increases philanthropy, religiousness, spirituality, clear understanding and righteousness in the person wearing it.",
    purpose: "To cure negative effects of Jupiter, increase philanthropy, spirituality, brings success and marital happiness",
    planetConnection: "Jupiter",
    planetColor: "#FFA500",
    howToUse: "Wrap in a yellow-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Heals negative effects of Jupiter",
      "Increases philanthropy and spirituality",
      "Brings success and marital happiness",
      "Helps in getting progeny",
      "Improves concentration in studies"
    ],
    chakra: { name: "Solar Plexus", color: "#FDB813" },
    element: { name: "Fire", color: "#FF6B35" },
    zodiac: { name: "Sagittarius & Pisces", color: "#9D4EDD" },
    keyHighlights: [
      "100% Genuine & Authentic Bharangi Root",
      "Blessed by expert astrologers",
      "Lab-certified natural root",
      "Associated with planet Jupiter",
      "Increases wisdom and knowledge"
    ],
    healingProperties: [
      "Enhances spiritual growth",
      "Improves concentration",
      "Brings marital happiness",
      "Increases righteousness",
      "Helps in progeny issues"
    ],
    idealFor: [
      "Sagittarius natives",
      "Pisces natives",
      "Students lacking concentration",
      "Couples seeking children",
      "People seeking spiritual growth"
    ],
    wearingInstructions: [
      "Wrap in yellow-colored cloth",
      "Tie on right arm (upper part preferred)",
      "Chant Jupiter mantras while wearing",
      "Wear on Thursday morning"
    ]
  },
  "ashwagandha-mool": {
    id: "ashwagandha-mool",
    name: "Ashwagandha Mool - Asgandh Mool",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.7,
    reviews: 2134,
    sold: "2,987",
    images: [
      "https://astrosage.shop/cdn/shop/files/asghandh-mool_e01e31f2-5bb9-446d-8d2a-e9c01f6ba207.jpg",
      "https://astrosage.shop/cdn/shop/files/asghandh-mool_e01e31f2-5bb9-446d-8d2a-e9c01f6ba207.jpg",
      "https://astrosage.shop/cdn/shop/files/asghandh-mool_e01e31f2-5bb9-446d-8d2a-e9c01f6ba207.jpg",
      "https://astrosage.shop/cdn/shop/files/asghandh-mool_e01e31f2-5bb9-446d-8d2a-e9c01f6ba207.jpg"
    ],
    description: "Ashwagandha, also known as Winthania Somnifera is associated with the planet Ketu. Ketu signifies the spiritual knowledge and wisdom. The positive traits of Ketu are bringing prosperity, health, wealth, protects you from all kinds of toxins like snake bites etc.",
    purpose: "To increase positive effects of Ketu, cure skin related illnesses, gain mind peace",
    planetConnection: "Ketu",
    planetColor: "#808080",
    howToUse: "Wrap in a blue-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Increases positive effects of Ketu",
      "Cures skin disorders",
      "Helps with urinary tract infections",
      "Protection from toxins",
      "Brings mental peace"
    ],
    chakra: { name: "Root Chakra", color: "#C72C35" },
    element: { name: "Earth", color: "#8B4513" },
    zodiac: { name: "Scorpio & Pisces", color: "#800080" },
    keyHighlights: [
      "100% Natural Ashwagandha Root",
      "Associated with planet Ketu",
      "Spiritual knowledge enhancer",
      "Protection from toxins",
      "Lab-certified authentic"
    ],
    healingProperties: [
      "Cures skin diseases",
      "Treats smallpox",
      "Helps urinary infections",
      "Enhances spiritual wisdom",
      "Brings prosperity"
    ],
    idealFor: [
      "People with skin problems",
      "Spiritual seekers",
      "Those facing Ketu malefic effects",
      "Individuals seeking protection",
      "People wanting mental peace"
    ],
    wearingInstructions: [
      "Wrap in blue-colored cloth",
      "Tie on right arm",
      "Chant Ketu mantras",
      "Wear after proper consultation"
    ]
  },
  "bichchoo-mool": {
    id: "bichchoo-mool",
    name: "Bichchoo Mool",
    price: 600,
    originalPrice: 1100,
    discount: 45,
    rating: 4.6,
    reviews: 1876,
    sold: "2,345",
    images: [
      "https://astrosage.shop/cdn/shop/files/bicchu_786a56cf-71c7-4ac1-86b3-484c670500a2.jpg",
      "https://astrosage.shop/cdn/shop/files/bicchu_786a56cf-71c7-4ac1-86b3-484c670500a2.jpg",
      "https://astrosage.shop/cdn/shop/files/bicchu_786a56cf-71c7-4ac1-86b3-484c670500a2.jpg",
      "https://astrosage.shop/cdn/shop/files/bicchu_786a56cf-71c7-4ac1-86b3-484c670500a2.jpg"
    ],
    description: "Bichchoo Mool, also known as Nettle Leaf Plant Root is associated with the Planet Saturn. This Planet signifies hard work, labour, sorrow, struggle, career, job, underground, hope, justice, deep thinking, honesty, etc.",
    purpose: "To reduce ill effects of Saturn, cure joints, leg and teeth related ailments, acidity, etc.",
    planetConnection: "Saturn",
    planetColor: "#000080",
    howToUse: "Wrap in a black-coloured cloth and tie on the right wrist/shoulder",
    benefits: [
      "Reduces negative effects of Saturn",
      "Cures rheumatism and joint pain",
      "Helps with leg problems",
      "Treats teeth issues",
      "Reduces acidity"
    ],
    chakra: { name: "Root Chakra", color: "#C72C35" },
    element: { name: "Earth", color: "#8B4513" },
    zodiac: { name: "Capricorn & Aquarius", color: "#8B4513" },
    keyHighlights: [
      "Nettle Leaf Plant Root",
      "Associated with Saturn",
      "Career and job enhancer",
      "Increases hope and justice",
      "100% Authentic"
    ],
    healingProperties: [
      "Cures rheumatism",
      "Treats joint pain",
      "Helps with leg ailments",
      "Resolves teeth problems",
      "Reduces acidity"
    ],
    idealFor: [
      "People facing career issues",
      "Those with Saturn malefic effects",
      "Individuals with joint pain",
      "People with teeth problems",
      "Those lacking hope"
    ],
    wearingInstructions: [
      "Wrap in black cloth",
      "Tie on right upper arm",
      "Wear on Saturday",
      "Chant Saturn mantras"
    ]
  },
  "banana-mool": {
    id: "banana-mool",
    name: "Banana Mool",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.7,
    reviews: 1654,
    sold: "2,123",
    images: [
      "https://astrosage.shop/cdn/shop/files/banana_aa5e8d51-faff-4215-b049-a6b45ec5af87.jpg",
      "https://astrosage.shop/cdn/shop/files/banana_aa5e8d51-faff-4215-b049-a6b45ec5af87.jpg",
      "https://astrosage.shop/cdn/shop/files/banana_aa5e8d51-faff-4215-b049-a6b45ec5af87.jpg",
      "https://astrosage.shop/cdn/shop/files/banana_aa5e8d51-faff-4215-b049-a6b45ec5af87.jpg"
    ],
    description: "Banana Root, also known as Musa Acuminata is associated with the Planet Jupiter. This Planet signifies expansion, kindness, justice, finance, wisdom, good wealth, children and married life, religious nature etc.",
    purpose: "To reduce ill effects of Jupiter, cure Lever and Kidney related ailments, etc.",
    planetConnection: "Jupiter",
    planetColor: "#FFA500",
    howToUse: "Wrap in a Yellow-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Reduces negative effects of Jupiter",
      "Cures kidney ailments",
      "Helps with liver problems",
      "Treats diabetes",
      "Reduces obesity"
    ],
    chakra: { name: "Solar Plexus", color: "#FDB813" },
    element: { name: "Fire", color: "#FF6B35" },
    zodiac: { name: "Sagittarius & Pisces", color: "#9D4EDD" },
    keyHighlights: [
      "Natural Banana Root",
      "Jupiter planet remedy",
      "Wealth and prosperity",
      "Family happiness",
      "100% Genuine"
    ],
    healingProperties: [
      "Cures kidney diseases",
      "Treats liver problems",
      "Helps with diabetes",
      "Reduces obesity",
      "Improves digestion"
    ],
    idealFor: [
      "People with Jupiter affliction",
      "Those with kidney issues",
      "Individuals seeking wealth",
      "Couples wanting children",
      "People facing family problems"
    ],
    wearingInstructions: [
      "Wrap in yellow cloth",
      "Tie on right arm",
      "Wear on Thursday",
      "Worship Jupiter before wearing"
    ]
  },
  "khirni-mool": {
    id: "khirni-mool",
    name: "Khirni Mool",
    price: 500,
    originalPrice: 500,
    discount: 0,
    rating: 4.8,
    reviews: 1432,
    sold: "1,876",
    images: [
      "https://astrosage.shop/cdn/shop/files/khirni-mool_0b9d9ad4-19a2-433e-8d0f-be4daf4b5c15.jpg",
      "https://astrosage.shop/cdn/shop/files/khirni-mool_0b9d9ad4-19a2-433e-8d0f-be4daf4b5c15.jpg",
      "https://astrosage.shop/cdn/shop/files/khirni-mool_0b9d9ad4-19a2-433e-8d0f-be4daf4b5c15.jpg",
      "https://astrosage.shop/cdn/shop/files/khirni-mool_0b9d9ad4-19a2-433e-8d0f-be4daf4b5c15.jpg"
    ],
    description: "Khirni Mool, also known as Ceylon ironwood or Manilkara Hexandra is associated with the Planet Moon. This Planet signifies mother, happiness, feminity, beauty, water-related things, females, emotions, sensitivity, creativity and caring nature, etc.",
    purpose: "To reduce ill effects of Moon, cure mental problems and emotional issues",
    planetConnection: "Moon",
    planetColor: "#FFFFFF",
    howToUse: "Wrap in a white cloth and tie on the right wrist/shoulder",
    benefits: [
      "Reduces negative effects of Moon",
      "Cures mental problems",
      "Helps with emotional issues",
      "Treats cold and cough",
      "Balances emotions"
    ],
    chakra: { name: "Sacral Chakra", color: "#FF6B35" },
    element: { name: "Water", color: "#4A90E2" },
    zodiac: { name: "Cancer", color: "#ADD8E6" },
    keyHighlights: [
      "Ceylon Ironwood Root",
      "Moon planet remedy",
      "Emotional balance",
      "Mother's health",
      "100% Natural"
    ],
    healingProperties: [
      "Cures mental restlessness",
      "Treats cold and cough",
      "Helps with bodily fluids",
      "Improves emotional health",
      "Brings happiness"
    ],
    idealFor: [
      "People with Moon affliction",
      "Those facing emotional issues",
      "Individuals with mental problems",
      "People having mother issues",
      "Cancer natives"
    ],
    wearingInstructions: [
      "Wrap in white cloth",
      "Tie on right arm",
      "Wear on Monday",
      "Chant Moon mantras"
    ]
  },
  "vat-vriksha-mool": {
    id: "vat-vriksha-mool",
    name: "Vat Vriksha Mool",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.9,
    reviews: 2876,
    sold: "3,654",
    images: [
      "https://astrosage.shop/cdn/shop/files/vat-mool_ddae4fbd-b4f2-40f9-9d8b-57d60079a323.png",
      "https://astrosage.shop/cdn/shop/files/vat-mool_ddae4fbd-b4f2-40f9-9d8b-57d60079a323.png",
      "https://astrosage.shop/cdn/shop/files/vat-mool_ddae4fbd-b4f2-40f9-9d8b-57d60079a323.png",
      "https://astrosage.shop/cdn/shop/files/vat-mool_ddae4fbd-b4f2-40f9-9d8b-57d60079a323.png"
    ],
    description: "Are you facing problems in concentrating on your work or losing focus easily? The root of Vat Vriksha or Banyan Tree is the solution to all these problems. This tree is governed by Mars planet and the root represents Lord Brahma.",
    purpose: "To improve concentration, relieve from emotional disturbance, treat numerous health and teeth disorders",
    planetConnection: "Mars",
    planetColor: "#FF0000",
    howToUse: "Wrap in a red-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Improves concentration",
      "Relieves emotional disturbance",
      "Treats teeth disorders",
      "Cures sterility in females",
      "Pacifies Mars malefic effects"
    ],
    chakra: { name: "Root Chakra", color: "#C72C35" },
    element: { name: "Fire", color: "#FF6B35" },
    zodiac: { name: "Aries & Scorpio", color: "#DC143C" },
    keyHighlights: [
      "Sacred Banyan Tree Root",
      "Mars planet remedy",
      "Concentration booster",
      "Lord Brahma's blessing",
      "100% Authentic"
    ],
    healingProperties: [
      "Improves focus and concentration",
      "Relieves mental stress",
      "Treats teeth problems",
      "Helps with emotional issues",
      "Cures sterility"
    ],
    idealFor: [
      "Students lacking concentration",
      "People with Mars affliction",
      "Individuals with teeth issues",
      "Women facing sterility",
      "Those with emotional stress"
    ],
    wearingInstructions: [
      "Wrap in red cloth",
      "Tie on right arm",
      "Wear on Tuesday",
      "Worship Mars before wearing"
    ]
  },
  "nagarmotha-root": {
    id: "nagarmotha-root",
    name: "Nagarmotha Root - Nagarmotha Jad",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.7,
    reviews: 2234,
    sold: "2,987",
    images: [
      "https://astrosage.shop/cdn/shop/files/nagarmotha_c653360c-8560-4656-9ebe-bdadd055dc88.jpg",
      "https://astrosage.shop/cdn/shop/files/nagarmotha_c653360c-8560-4656-9ebe-bdadd055dc88.jpg",
      "https://astrosage.shop/cdn/shop/files/nagarmotha_c653360c-8560-4656-9ebe-bdadd055dc88.jpg",
      "https://astrosage.shop/cdn/shop/files/nagarmotha_c653360c-8560-4656-9ebe-bdadd055dc88.jpg"
    ],
    description: "Nagarmotha Ki Jad or Nagarmotha Root, also known as Nut Grass Root, pacifies planet Rahu. The benefits of wearing Nagarmotha Root include relief from stress, chronic diseases and also Kalsarp Dosha.",
    purpose: "To provide relief from stress, chronic diseases and Kal sarp Dosha, settle job related problems and cure mental and physical ailments",
    planetConnection: "Rahu",
    planetColor: "#4B0082",
    howToUse: "Wrap in a black or blue colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Relief from Kalsarp Dosha",
      "Reduces stress and anxiety",
      "Helps with chronic diseases",
      "Settles job problems",
      "Boosts courage and valor"
    ],
    chakra: { name: "Third Eye", color: "#4B0082" },
    element: { name: "Air", color: "#87CEEB" },
    zodiac: { name: "All Zodiacs", color: "#9370DB" },
    keyHighlights: [
      "Nut Grass Root",
      "Rahu planet remedy",
      "Kalsarp Dosha cure",
      "Career enhancer",
      "100% Genuine"
    ],
    healingProperties: [
      "Relieves stress",
      "Cures chronic diseases",
      "Removes Kalsarp Dosha",
      "Improves mental health",
      "Settles job issues"
    ],
    idealFor: [
      "People with Kalsarp Dosha",
      "Those facing job problems",
      "Individuals under stress",
      "People with Rahu affliction",
      "Hard workers lacking recognition"
    ],
    wearingInstructions: [
      "Wrap in black or blue cloth",
      "Tie on right arm",
      "Chant Rahu mantras",
      "Wear after proper consultation"
    ]
  },
  "dhature-ki-jad": {
    id: "dhature-ki-jad",
    name: "Dhature ki Jad",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.6,
    reviews: 1765,
    sold: "2,234",
    images: [
      "https://astrosage.shop/cdn/shop/files/dhatoore-ki-jad_992b2cf3-d9b4-4239-8a59-92b54712e889.jpg",
      "https://astrosage.shop/cdn/shop/files/dhatoore-ki-jad_992b2cf3-d9b4-4239-8a59-92b54712e889.jpg",
      "https://astrosage.shop/cdn/shop/files/dhatoore-ki-jad_992b2cf3-d9b4-4239-8a59-92b54712e889.jpg",
      "https://astrosage.shop/cdn/shop/files/dhatoore-ki-jad_992b2cf3-d9b4-4239-8a59-92b54712e889.jpg"
    ],
    description: "Dhature ki Jad, also known as Datura Wrightii is associated with planet Saturn or Shani. Saturn or Shani is the most dreaded planet. If Shani is in your favour then you will be blessed with a healthy life, positive career, everything will be in your favour.",
    purpose: "To eliminate ill effects of Saturn, cure diseases such as Neurosis, Rheumatism and excretory disorders",
    planetConnection: "Saturn",
    planetColor: "#000080",
    howToUse: "Wrap in a black-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Eliminates Saturn ill effects",
      "Cures neurosis",
      "Treats rheumatism",
      "Helps excretory disorders",
      "Brings career success"
    ],
    chakra: { name: "Root Chakra", color: "#C72C35" },
    element: { name: "Earth", color: "#8B4513" },
    zodiac: { name: "Capricorn & Aquarius", color: "#8B4513" },
    keyHighlights: [
      "Sacred Datura Root",
      "Saturn planet remedy",
      "Career protector",
      "Health restorer",
      "100% Natural"
    ],
    healingProperties: [
      "Cures neurosis",
      "Treats rheumatism",
      "Helps excretory problems",
      "Improves career",
      "Removes misfortune"
    ],
    idealFor: [
      "People with Saturn malefic effects",
      "Those facing career issues",
      "Individuals with neurosis",
      "People with rheumatism",
      "Those facing misfortune"
    ],
    wearingInstructions: [
      "Wrap in black cloth",
      "Tie on right arm",
      "Wear on Saturday",
      "Chant Shani mantras"
    ]
  },
  "vidhara-mool": {
    id: "vidhara-mool",
    name: "Vidhara Mool",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.7,
    reviews: 1987,
    sold: "2,654",
    images: [
      "https://astrosage.shop/cdn/shop/files/vidhara-mool_3ee939cd-6611-435d-9ec8-f3dfd32c1cf8.jpg",
      "https://astrosage.shop/cdn/shop/files/vidhara-mool_3ee939cd-6611-435d-9ec8-f3dfd32c1cf8.jpg",
      "https://astrosage.shop/cdn/shop/files/vidhara-mool_3ee939cd-6611-435d-9ec8-f3dfd32c1cf8.jpg",
      "https://astrosage.shop/cdn/shop/files/vidhara-mool_3ee939cd-6611-435d-9ec8-f3dfd32c1cf8.jpg"
    ],
    description: "Vidhara, also known as Argyreia Speciosa is associated with the planet Mercury. Mercury signifies the power of intelligence, speech, language, expression and quick thinking.",
    purpose: "To reduce ill effects of Mercury, cure diseases such as ulcers, acidity, blood pressure etc.",
    planetConnection: "Mercury",
    planetColor: "#00FF00",
    howToUse: "Wrap in a green-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Reduces Mercury ill effects",
      "Cures ulcers",
      "Treats nervous diseases",
      "Helps with acidity",
      "Controls blood pressure"
    ],
    chakra: { name: "Throat Chakra", color: "#1E90FF" },
    element: { name: "Air", color: "#87CEEB" },
    zodiac: { name: "Gemini & Virgo", color: "#FFD700" },
    keyHighlights: [
      "Natural Vidhara Root",
      "Mercury planet remedy",
      "Intelligence booster",
      "Communication enhancer",
      "100% Authentic"
    ],
    healingProperties: [
      "Cures ulcers",
      "Treats nervous diseases",
      "Reduces acidity",
      "Controls blood pressure",
      "Improves communication"
    ],
    idealFor: [
      "People with Mercury affliction",
      "Those with communication issues",
      "Individuals with ulcers",
      "People with acidity",
      "Gemini and Virgo natives"
    ],
    wearingInstructions: [
      "Wrap in green cloth",
      "Tie on right arm",
      "Wear on Wednesday",
      "Worship Goddess Durga first"
    ]
  },
  "belmool": {
    id: "belmool",
    name: "Belmool",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.8,
    reviews: 2456,
    sold: "3,234",
    images: [
      "https://astrosage.shop/cdn/shop/files/belmool_fe89d193-c739-440e-b2ca-5802ceadd296.jpg",
      "https://astrosage.shop/cdn/shop/files/belmool_fe89d193-c739-440e-b2ca-5802ceadd296.jpg",
      "https://astrosage.shop/cdn/shop/files/belmool_fe89d193-c739-440e-b2ca-5802ceadd296.jpg",
      "https://astrosage.shop/cdn/shop/files/belmool_fe89d193-c739-440e-b2ca-5802ceadd296.jpg"
    ],
    description: "Belmool, also known as Aegle Marmelos is associated with the Sun God or Surya Deva. Sun signifies power, optimism, warmth, honour, success, energy and being a champion.",
    purpose: "To reduce ill effects of Sun, cure heart and spine related ailments, indigestion, fatigue etc.",
    planetConnection: "Sun",
    planetColor: "#FFD700",
    howToUse: "Wrap in a pink-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Reduces Sun ill effects",
      "Cures heart ailments",
      "Treats spine problems",
      "Helps with indigestion",
      "Reduces fatigue"
    ],
    chakra: { name: "Solar Plexus", color: "#FDB813" },
    element: { name: "Fire", color: "#FF6B35" },
    zodiac: { name: "Leo", color: "#FFD700" },
    keyHighlights: [
      "Sacred Bel Tree Root",
      "Sun planet remedy",
      "Energy booster",
      "Success enhancer",
      "100% Genuine"
    ],
    healingProperties: [
      "Cures heart problems",
      "Treats spine issues",
      "Helps with indigestion",
      "Reduces fatigue",
      "Improves vitality"
    ],
    idealFor: [
      "People with Sun affliction",
      "Those with heart issues",
      "Individuals with spine problems",
      "Leo natives",
      "People lacking energy"
    ],
    wearingInstructions: [
      "Wrap in pink cloth",
      "Tie on right arm",
      "Wear on Sunday",
      "Worship Sun God first"
    ]
  },
  "arand-mool": {
    id: "arand-mool",
    name: "Arand Mool - Eranda Mool",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.7,
    reviews: 1876,
    sold: "2,456",
    images: [
      "https://astrosage.shop/cdn/shop/files/arand-mool_4bf3a37a-c380-4992-9ba9-62075fc6f1d0.jpg",
      "https://astrosage.shop/cdn/shop/files/arand-mool_4bf3a37a-c380-4992-9ba9-62075fc6f1d0.jpg",
      "https://astrosage.shop/cdn/shop/files/arand-mool_4bf3a37a-c380-4992-9ba9-62075fc6f1d0.jpg",
      "https://astrosage.shop/cdn/shop/files/arand-mool_4bf3a37a-c380-4992-9ba9-62075fc6f1d0.jpg"
    ],
    description: "Arandmool, also known as Ricinus Communes is associated with the planet Venus or Shukra. The planet Venus signifies love, harmony, relationship and luxuries.",
    purpose: "To nullify negative effects of Venus, cure diseases such as bronchial disorder, pulmonary disorders",
    planetConnection: "Venus",
    planetColor: "#FF69B4",
    howToUse: "Wrap in a white-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Nullifies Venus ill effects",
      "Improves relationships",
      "Cures bronchial disorders",
      "Treats pulmonary issues",
      "Brings marital harmony"
    ],
    chakra: { name: "Heart Chakra", color: "#4ADE80" },
    element: { name: "Water", color: "#4A90E2" },
    zodiac: { name: "Taurus & Libra", color: "#FF69B4" },
    keyHighlights: [
      "Natural Castor Root",
      "Venus planet remedy",
      "Relationship enhancer",
      "Luxury bringer",
      "100% Authentic"
    ],
    healingProperties: [
      "Cures bronchial disorders",
      "Treats asthma",
      "Helps with cough",
      "Reduces fever",
      "Improves relationships"
    ],
    idealFor: [
      "People with Venus affliction",
      "Those facing marital issues",
      "Individuals with respiratory problems",
      "Taurus and Libra natives",
      "People seeking love"
    ],
    wearingInstructions: [
      "Wrap in white cloth",
      "Tie on right arm",
      "Wear on Friday",
      "Chant Venus mantras"
    ]
  },
  "anantmool": {
    id: "anantmool",
    name: "Anantmool",
    price: 449,
    originalPrice: 1100,
    discount: 59,
    rating: 4.8,
    reviews: 2123,
    sold: "2,876",
    images: [
      "https://astrosage.shop/cdn/shop/files/anant-mool_4a730b67-fe24-48d1-ac3e-3e3d6e4a202e.jpg",
      "https://astrosage.shop/cdn/shop/files/anant-mool_4a730b67-fe24-48d1-ac3e-3e3d6e4a202e.jpg",
      "https://astrosage.shop/cdn/shop/files/anant-mool_4a730b67-fe24-48d1-ac3e-3e3d6e4a202e.jpg",
      "https://astrosage.shop/cdn/shop/files/anant-mool_4a730b67-fe24-48d1-ac3e-3e3d6e4a202e.jpg"
    ],
    description: "Anantmool, also known as Hemidesmus is associated with the planet Mars. The planet Mars or Mangal signifies the Physical strength, independence, determination, ambition and passion of the individual.",
    purpose: "To strengthen positive effects of Mars, cure skin and liver related diseases",
    planetConnection: "Mars",
    planetColor: "#FF0000",
    howToUse: "Wrap in a red-colored cloth and tie on the right wrist/shoulder",
    benefits: [
      "Strengthens Mars positive effects",
      "Cures liver problems",
      "Treats skin diseases",
      "Helps with constipation",
      "Cures blind piles"
    ],
    chakra: { name: "Root Chakra", color: "#C72C35" },
    element: { name: "Fire", color: "#FF6B35" },
    zodiac: { name: "Aries & Scorpio", color: "#DC143C" },
    keyHighlights: [
      "Natural Anantmool Root",
      "Mars planet remedy",
      "Strength enhancer",
      "Courage booster",
      "100% Genuine"
    ],
    healingProperties: [
      "Cures liver problems",
      "Treats skin diseases",
      "Helps with constipation",
      "Cures piles",
      "Boosts physical strength"
    ],
    idealFor: [
      "People with Mars affliction",
      "Those with liver problems",
      "Individuals with skin diseases",
      "Aries and Scorpio natives",
      "People lacking determination"
    ],
    wearingInstructions: [
      "Wrap in red cloth",
      "Tie on right arm",
      "Wear on Tuesday",
      "Chant Mars mantras"
    ]
  }
};

export const jadiProductsArray = Object.values(jadiProducts);
