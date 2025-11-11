import blueSapphireImg from "@/assets/gemstones/blue-sapphire.jpg";
import rubyImg from "@/assets/gemstones/ruby.jpg";
import emeraldImg from "@/assets/gemstones/emerald.jpg";
import yellowSapphireImg from "@/assets/gemstones/yellow-sapphire.jpg";
import rudrakshaImg from "@/assets/rudraksha/1-mukhi.jpg";
import braceletImg from "@/assets/bracelets/7-chakra.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: {
    heading?: string;
    paragraphs: string[];
  }[];
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "blue-sapphire-neelam-powerful-gemstone",
    title: "Blue Sapphire (Neelam): The Most Powerful Gemstone for Saturn",
    excerpt: "Discover the incredible benefits and precautions of wearing Blue Sapphire, the gemstone of Saturn. Learn how to identify authentic Neelam and who should wear it.",
    image: blueSapphireImg,
    category: "Gemstones",
    author: "Puneet Pandey",
    date: "January 15, 2025",
    readTime: "8 min read",
    content: [
      {
        paragraphs: [
          "Blue Sapphire, known as Neelam in Hindi, is one of the most powerful and sought-after gemstones in Vedic astrology. Associated with Saturn (Shani), this stunning blue gemstone can bring tremendous success and prosperity to those who wear it correctly.",
        ],
      },
      {
        heading: "Benefits of Blue Sapphire",
        paragraphs: [
          "Blue Sapphire is known for its quick and powerful effects. When it suits the wearer, it can bring sudden wealth, fame, and career growth within days or weeks. It helps remove obstacles, provides mental clarity, and protects from evil energies.",
          "This gemstone is particularly beneficial for those in business, politics, and leadership positions. It enhances discipline, focus, and determination while providing protection during Saturn's challenging planetary periods.",
        ],
      },
      {
        heading: "Who Should Wear Blue Sapphire?",
        paragraphs: [
          "Blue Sapphire should only be worn after proper astrological consultation. It's generally recommended for Capricorn and Aquarius ascendants, or when Saturn is beneficially placed in one's horoscope.",
          "However, it's crucial to test the gemstone before wearing it permanently, as it can have adverse effects if it doesn't suit the wearer. The traditional test involves keeping the gemstone under your pillow for seven nights to observe any changes in dreams or daily experiences.",
        ],
      },
      {
        heading: "How to Identify Authentic Blue Sapphire",
        paragraphs: [
          "Genuine Blue Sapphire has a deep, velvety blue color with excellent transparency. When held against light, it should show a uniform color distribution. The gemstone should feel cool to touch and have significant weight compared to its size.",
          "Always purchase from certified gemstone dealers and insist on a certificate of authenticity from a recognized gemological laboratory. Be wary of synthetic or treated stones being sold as natural Blue Sapphire.",
        ],
      },
      {
        heading: "Wearing Guidelines",
        paragraphs: [
          "Blue Sapphire should be worn on the middle finger of the right hand, set in silver or platinum. The best day to wear it is Saturday morning, preferably during Saturn's hora (planetary hour).",
          "Before wearing, the ring should be purified by dipping it in milk and honey, then rinsed with pure water. Recite the Saturn mantra 'Om Sham Shanaishcharaya Namah' 108 times while wearing the ring for the first time.",
        ],
      },
    ],
  },
  {
    slug: "ruby-manik-gemstone-sun",
    title: "Ruby (Manik): The King of Gemstones for Sun Energy",
    excerpt: "Explore the regal Ruby gemstone and its connection to the Sun. Learn about its benefits, how to wear it, and why it's called the king of gemstones.",
    image: rubyImg,
    category: "Gemstones",
    author: "Puneet Pandey",
    date: "January 12, 2025",
    readTime: "7 min read",
    content: [
      {
        paragraphs: [
          "Ruby, known as Manik in Hindi, is revered as the king of gemstones in Vedic astrology. This precious red gemstone represents the Sun and is believed to enhance vitality, confidence, and leadership qualities in the wearer.",
        ],
      },
      {
        heading: "The Power of Ruby",
        paragraphs: [
          "Ruby is associated with the Sun, the most powerful celestial body in astrology. It brings vitality, courage, and success in leadership roles. The gemstone strengthens the heart, both physically and emotionally, promoting compassion and nobility.",
          "Wearing Ruby can help overcome fear, boost self-confidence, and attract recognition and respect in society. It's particularly beneficial for those in government service, politics, or positions of authority.",
        ],
      },
      {
        heading: "Who Benefits from Ruby?",
        paragraphs: [
          "Ruby is especially recommended for Leo ascendants and when the Sun is weak or afflicted in one's birth chart. It helps strengthen the Sun's positive influences and mitigate negative effects.",
          "People seeking leadership positions, government jobs, or wanting to improve their father-child relationship can benefit from wearing Ruby. It's also helpful for those recovering from chronic illnesses or lacking vitality.",
        ],
      },
      {
        heading: "Quality and Authentication",
        paragraphs: [
          "A high-quality Ruby should have a deep red color, often described as pigeon blood red. It should be transparent with minimal inclusions, though some natural inclusions are acceptable and even desirable for authenticity.",
          "The gemstone should show brilliance and luster when light passes through it. Always insist on certification from reputed gemological laboratories and buy from trusted dealers to ensure you're getting genuine Ruby.",
        ],
      },
      {
        heading: "Proper Wearing Method",
        paragraphs: [
          "Ruby should be worn on the ring finger of the right hand, set in gold. The ideal day to wear it is Sunday morning during sunrise or the Sun's hora.",
          "Purify the ring by immersing it in raw milk mixed with honey for a few hours, then rinse with holy water. While wearing for the first time, chant the Sun mantra 'Om Suryaya Namah' 108 times to activate its energy.",
        ],
      },
    ],
  },
  {
    slug: "emerald-panna-mercury-gemstone-guide",
    title: "Emerald (Panna): The Gemstone of Mercury for Intelligence",
    excerpt: "Learn everything about Emerald, the gemstone that enhances communication, intelligence, and business acumen. Discover its astrological significance and benefits.",
    image: emeraldImg,
    category: "Gemstones",
    author: "Puneet Pandey",
    date: "January 10, 2025",
    readTime: "6 min read",
    content: [
      {
        paragraphs: [
          "Emerald, or Panna as it's known in Hindi, is the gemstone of Mercury (Budh). This beautiful green gemstone is highly valued for enhancing intellectual abilities, communication skills, and business success.",
        ],
      },
      {
        heading: "Benefits of Wearing Emerald",
        paragraphs: [
          "Emerald strengthens Mercury's positive influences in one's horoscope. It enhances memory, concentration, and analytical thinking. The gemstone is particularly beneficial for students, teachers, writers, and business people.",
          "It improves communication skills, making the wearer more articulate and persuasive. Emerald also helps in overcoming speech disorders and nervous system issues. Financially, it attracts prosperity through business and trade.",
        ],
      },
      {
        heading: "Who Should Wear Emerald?",
        paragraphs: [
          "Emerald is most suitable for Gemini and Virgo ascendants. It's also recommended when Mercury is weak, debilitated, or afflicted in the birth chart.",
          "People in professions requiring sharp intellect, communication, and networking skills benefit greatly from wearing Emerald. This includes businessmen, traders, accountants, writers, teachers, and media professionals.",
        ],
      },
      {
        heading: "Identifying Genuine Emerald",
        paragraphs: [
          "Natural Emeralds typically have some inclusions, which are actually signs of authenticity. The color should be a vibrant green, not too dark or too light. Colombian Emeralds are considered the finest quality.",
          "Be cautious of glass imitations and synthetic Emeralds. A genuine Emerald will show natural inclusions under magnification and will have consistent color distribution. Always obtain certification from recognized gemological institutes.",
        ],
      },
      {
        heading: "How to Wear Emerald",
        paragraphs: [
          "Emerald should be worn on the little finger of the right hand, preferably set in gold or white gold. Wednesday morning is the most auspicious time to wear it, during Mercury's hora.",
          "Before wearing, cleanse the ring by keeping it overnight in a mixture of raw milk and water. On Wednesday morning, after bathing, place the ring in front of Mercury's yantra or image, offer incense and flowers, and chant 'Om Budhaya Namah' 108 times before wearing.",
        ],
      },
    ],
  },
  {
    slug: "rudraksha-beads-complete-guide",
    title: "Rudraksha Beads: Complete Guide to Types and Benefits",
    excerpt: "Comprehensive guide to Rudraksha beads from 1 to 21 Mukhi. Learn about their spiritual significance, benefits, and how to choose the right Rudraksha for you.",
    image: rudrakshaImg,
    category: "Rudraksha",
    author: "Puneet Pandey",
    date: "January 8, 2025",
    readTime: "10 min read",
    content: [
      {
        paragraphs: [
          "Rudraksha beads are sacred seeds believed to carry divine energy from Lord Shiva. These powerful beads have been used for thousands of years in Hindu and Buddhist spiritual practices for meditation, healing, and protection.",
        ],
      },
      {
        heading: "What are Rudraksha Beads?",
        paragraphs: [
          "Rudraksha means 'tears of Rudra' (Lord Shiva) in Sanskrit. These beads come from the Rudraksha tree (Elaeocarpus ganitrus) found mainly in the Himalayan region, Nepal, Indonesia, and India.",
          "Each Rudraksha bead has natural divisions called Mukhi (faces), ranging from 1 to 21. The number of Mukhi determines the bead's ruling deity, planet, and specific benefits. Different Mukhi Rudraksha have different energies and are suitable for different purposes.",
        ],
      },
      {
        heading: "Popular Rudraksha Types",
        paragraphs: [
          "1 Mukhi Rudraksha: The rarest and most powerful, represents Lord Shiva. Brings enlightenment, prosperity, and liberation. Ideal for meditation and spiritual growth.",
          "5 Mukhi Rudraksha: The most common type, represents Lord Shiva's Kalagni Rudra form. Brings health, peace, and removes negative energies. Suitable for everyone.",
          "6 Mukhi Rudraksha: Blessed by Lord Kartikeya, enhances willpower, focus, and learning abilities. Excellent for students and those seeking mental clarity.",
        ],
      },
      {
        heading: "Benefits of Wearing Rudraksha",
        paragraphs: [
          "Rudraksha beads have numerous physical, mental, and spiritual benefits. They help reduce stress, anxiety, and blood pressure. The electromagnetic properties of Rudraksha have a calming effect on the nervous system.",
          "Spiritually, they protect from negative energies, enhance meditation practices, and accelerate spiritual growth. Different Mukhi Rudraksha address specific life areas like health, wealth, relationships, and career.",
        ],
      },
      {
        heading: "How to Wear and Care",
        paragraphs: [
          "Rudraksha can be worn as a necklace (mala), bracelet, or pendant. Monday is the most auspicious day to wear Rudraksha for the first time. Before wearing, energize it by washing with pure water and offering it to Lord Shiva.",
          "Keep your Rudraksha clean by washing it occasionally with water. You can oil it with sandalwood or coconut oil to maintain its luster. Remove it before sleeping or visiting places of negative energy. Treat it with respect as a sacred object.",
        ],
      },
    ],
  },
  {
    slug: "7-chakra-bracelet-healing-guide",
    title: "7 Chakra Bracelet: Balance Your Energy Centers",
    excerpt: "Discover how 7 chakra bracelets work to balance your body's energy centers. Learn about chakra healing and how to choose the perfect chakra bracelet.",
    image: braceletImg,
    category: "Bracelets",
    author: "Puneet Pandey",
    date: "January 5, 2025",
    readTime: "7 min read",
    content: [
      {
        paragraphs: [
          "Seven chakra bracelets are powerful tools for energy healing and spiritual balance. These beautiful bracelets contain stones representing each of the seven main chakras, helping to align and balance your body's energy centers.",
        ],
      },
      {
        heading: "Understanding the Seven Chakras",
        paragraphs: [
          "Chakras are energy centers in our body that influence our physical, emotional, and spiritual well-being. When chakras are balanced, energy flows freely, promoting health and harmony. When blocked or imbalanced, we may experience physical discomfort or emotional issues.",
          "The seven main chakras run along the spine from the base to the crown of the head. Each chakra is associated with specific colors, functions, and aspects of our being. Wearing a 7 chakra bracelet helps maintain balance in all these energy centers simultaneously.",
        ],
      },
      {
        heading: "Stones in 7 Chakra Bracelets",
        paragraphs: [
          "Root Chakra (Red): Red Jasper or Garnet for grounding and stability. Sacral Chakra (Orange): Carnelian for creativity and emotional balance. Solar Plexus Chakra (Yellow): Citrine or Tiger Eye for confidence and personal power.",
          "Heart Chakra (Green): Green Aventurine or Rose Quartz for love and compassion. Throat Chakra (Blue): Turquoise or Lapis Lazuli for communication. Third Eye Chakra (Indigo): Amethyst for intuition. Crown Chakra (Violet/White): Clear Quartz or Amethyst for spiritual connection.",
        ],
      },
      {
        heading: "Benefits of Wearing",
        paragraphs: [
          "7 chakra bracelets promote overall well-being by ensuring all energy centers remain balanced. They help reduce stress, anxiety, and promote emotional stability. Many wearers report improved focus, better sleep, and enhanced spiritual awareness.",
          "These bracelets also serve as beautiful reminders to stay mindful and maintain balance in daily life. They can enhance meditation practices and support energy healing work.",
        ],
      },
      {
        heading: "Choosing and Caring",
        paragraphs: [
          "Choose a bracelet that resonates with you visually and energetically. The beads should be genuine natural stones, not plastic or glass. Size should be comfortable on your wrist.",
          "Cleanse your bracelet regularly by placing it under running water or in moonlight overnight. Set intentions while wearing it for the first time. Wear it on your left wrist (receiving side) to absorb its healing energies.",
        ],
      },
    ],
  },
  {
    slug: "yellow-sapphire-pukhraj-jupiter-gemstone",
    title: "Yellow Sapphire (Pukhraj): The Gemstone of Wisdom and Prosperity",
    excerpt: "Everything you need to know about Yellow Sapphire, the auspicious gemstone of Jupiter. Discover its benefits for wealth, wisdom, and spiritual growth.",
    image: yellowSapphireImg,
    category: "Gemstones",
    author: "Puneet Pandey",
    date: "January 3, 2025",
    readTime: "8 min read",
    content: [
      {
        paragraphs: [
          "Yellow Sapphire, known as Pukhraj in Hindi, is one of the most auspicious gemstones in Vedic astrology. This beautiful golden-yellow gemstone represents Jupiter (Guru), the planet of wisdom, prosperity, and spirituality.",
        ],
      },
      {
        heading: "The Power of Yellow Sapphire",
        paragraphs: [
          "Yellow Sapphire is considered highly beneficial as it represents Jupiter, the most benevolent planet in astrology. It brings wisdom, knowledge, prosperity, and spiritual growth. The gemstone is particularly famous for attracting wealth and bringing marital harmony.",
          "This gemstone enhances the wearer's judgment, decision-making abilities, and ethical values. It promotes success in education, teaching, law, and spiritual pursuits. Yellow Sapphire also helps in getting divine blessings and guidance.",
        ],
      },
      {
        heading: "Who Should Wear Yellow Sapphire?",
        paragraphs: [
          "Yellow Sapphire is most beneficial for Sagittarius and Pisces ascendants. It's also recommended when Jupiter is weak, debilitated, or placed unfavorably in the birth chart.",
          "People seeking success in education, legal matters, financial growth, or spiritual advancement should consider wearing Yellow Sapphire after astrological consultation. It's particularly beneficial for teachers, advisors, lawyers, and spiritual seekers.",
        ],
      },
      {
        heading: "Identifying Authentic Stones",
        paragraphs: [
          "Genuine Yellow Sapphire has a bright, golden-yellow color with excellent transparency. The best quality stones have no visible inclusions and display brilliant luster. Sri Lankan Yellow Sapphires are considered the finest.",
          "Be cautious of heat-treated or synthetic stones. A natural Yellow Sapphire will show natural growth patterns under magnification. Always purchase with a certificate from recognized gemological laboratories like GIA or IGI.",
        ],
      },
      {
        heading: "Wearing Guidelines",
        paragraphs: [
          "Yellow Sapphire should be worn on the index finger of the right hand, set in gold. Thursday morning is the most auspicious time to wear it, preferably during Jupiter's hora.",
          "Before wearing, purify the ring by immersing it in a mixture of milk and honey overnight. On Thursday morning, place it on a yellow cloth, offer yellow flowers and turmeric, and chant 'Om Gram Grim Graum Sah Gurave Namah' 108 times before wearing it for the first time.",
        ],
      },
    ],
  },
];
