import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Star, ShoppingCart, Heart, Share2, Award, Shield, Truck, ArrowLeft, Sparkles, Check, Leaf, Users, Phone, MessageCircle, Zap, Clock, Package, IndianRupee, TrendingUp, Crown, Gem, Eye, CreditCard, Smartphone, Building2, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { rudrakshaProductsData } from "@/data/rudrakshaProducts";
import WhoBuysThis from "@/components/WhoBuysThis";

const ProductDetailsRudraksha = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const [viewingUsers, setViewingUsers] = useState(45);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewingUsers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(35, Math.min(65, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const product = rudrakshaProductsData[id || "7-mukhi"];

  useEffect(() => {
    if (!product) {
      navigate("/rudraksha/7-mukhi");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const productSlug = product.id.replace('-', ' ');
  const mukhiNumber = product.id.split('-')[0];
  const pageTitle = `${product.name} | Benefits, Price & Buying Guide – AstroSage Store`;
  const pageDescription = `Buy authentic ${product.name} online. Blessed by ${product.deity}, rules ${product.planet}. Lab certified, Nepal origin. Price ₹${product.price}. Free shipping & energization. ${product.reviews}+ reviews.`;
  const canonicalUrl = `https://astrosage.shop/rudraksha/${product.id}`;

  // JSON-LD Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.subtitle,
    "image": product.images,
    "brand": {
      "@type": "Brand",
      "name": "AstroSage Store"
    },
    "sku": `RUDRAKSHA-${product.id.toUpperCase()}`,
    "mpn": `ASS-${product.id.toUpperCase()}`,
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": "INR",
      "price": product.price,
      "priceValidUntil": "2026-12-31",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "AstroSage Store"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // FAQ Schema
  const faqs = [
    {
      q: `What are the benefits of ${mukhiNumber} Mukhi Rudraksha?`,
      a: `${product.name} is blessed by ${product.deity} and rules planet ${product.planet}. Key benefits include attracting wealth and prosperity, removing financial obstacles, providing Saturn (Shani) protection, enhancing business success, improving health and vitality, and accelerating spiritual growth. It is especially powerful for those facing Sade Sati or Shani Dosh.`
    },
    {
      q: `Is this ${mukhiNumber} Mukhi Rudraksha authentic and certified?`,
      a: "Yes! This is 100% authentic Nepal origin Rudraksha, lab certified with X-ray testing. We provide an authenticity certificate with each Rudraksha. We source directly from Nepal's sacred regions and guarantee natural holes and genuine quality. All our Rudraksha undergo rigorous quality checks by certified gemologists."
    },
    {
      q: `Who can wear ${mukhiNumber} Mukhi Rudraksha?`,
      a: `${mukhiNumber} Mukhi Rudraksha can be worn by anyone regardless of age, gender, caste, or religion. It's especially beneficial for ${product.idealFor?.[0]?.toLowerCase() || 'spiritual seekers'}. There are no negative side effects when worn with faith and devotion. Both men and women can wear it.`
    },
    {
      q: `How to wear ${mukhiNumber} Mukhi Rudraksha?`,
      a: `The best day to wear ${mukhiNumber} Mukhi Rudraksha is ${product.wearingInstructions?.[0]?.replace('Best Day to Wear: ', '') || 'Monday morning'}. Purify it with Ganga jal or clean water, chant '${product.mantra}' 108 times, and wear it as a pendant or bracelet so it touches your skin. Wearing during Shukla Paksha (waxing moon) is most auspicious.`
    },
    {
      q: "How soon will I see results after wearing Rudraksha?",
      a: "Results vary by individual, but many devotees report positive changes within 40-45 days of regular wearing. The benefits manifest gradually as you develop a deeper connection with the Rudraksha. For maximum benefits, wear with faith, maintain purity, and chant the mantra regularly."
    },
    {
      q: `What is the price of ${mukhiNumber} Mukhi Rudraksha?`,
      a: `The price of authentic, lab-certified ${mukhiNumber} Mukhi Nepal Rudraksha at AstroSage Store starts at ₹${product.price.toLocaleString()}. This includes free Vedic energization, lab certification, and free Pan India shipping. EMI options are also available.`
    },
    {
      q: "Do you provide energization and certificate?",
      a: `Yes! Every ${product.name} comes pre-energized with Vedic mantras by expert pandits. We provide a lab certification for authenticity, energization certificate, and complete wearing instructions. You can wear it immediately upon receiving.`
    },
    {
      q: "What is your return and refund policy?",
      a: "We offer 7 days money back no question asked return policy. If you're not satisfied or have any issues, you can return within 7 days for full refund. Item must be in original condition with certificate."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://astrosage.shop/" },
      { "@type": "ListItem", "position": 2, "name": "Rudraksha", "item": "https://astrosage.shop/rudraksha" },
      { "@type": "ListItem", "position": 3, "name": `${mukhiNumber} Mukhi Rudraksha`, "item": canonicalUrl }
    ]
  };

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: `After wearing ${productSlug} Rudraksha, my life completely transformed! The benefits are real and powerful. Highly authentic product.`,
      verified: true,
      date: "2 months ago"
    },
    {
      name: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      text: `Amazing results within 60 days! ${product.deity}'s blessings are clearly visible. The Rudraksha is original Nepal quality. Worth every rupee!`,
      verified: true,
      date: "3 months ago"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Best purchase ever! The energization is powerful and I can feel the positive vibrations. Original, certified and highly effective.",
      verified: true,
      date: "1 month ago"
    },
    {
      name: "Sunita Verma",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: `Got amazing results with ${productSlug} Rudraksha. Life changed for better. Thank you AstroSage! 🙏`,
      verified: true,
      date: "6 weeks ago"
    }
  ];

  const certifications = [
    { title: "Lab Certified", desc: "X-ray tested authenticity" },
    { title: "Nepal Origin", desc: "Sourced from sacred regions" },
    { title: "Vedic Energized", desc: "Activated by expert pandits" },
    { title: "Quality Assured", desc: "Natural holes, no artificial" }
  ];

  const relatedProducts = [
    { id: "5-mukhi", name: "5 Mukhi Rudraksha", price: 699, image: product.images[3], rating: 4.9 },
    { id: "7-mukhi", name: "7 Mukhi Rudraksha", price: 2499, image: product.images[2], rating: 4.9 },
    { id: "9-mukhi", name: "9 Mukhi Rudraksha", price: 3499, image: product.images[1], rating: 4.8 },
    { id: "1-mukhi", name: "1 Mukhi Rudraksha", price: 8399, image: product.images[0], rating: 4.9 }
  ].filter(p => p.id !== product.id);

  // Long-form SEO content for 7-mukhi
  const longFormContent = product.id === "7-mukhi" ? {
    sections: [
      {
        heading: "What is 7 Mukhi Rudraksha? – Complete Guide",
        content: `The 7 Mukhi Rudraksha is one of the most sacred and powerful beads in Vedic astrology. It has seven natural lines (mukhis) running from top to bottom, representing seven divine energies. This Rudraksha is blessed by Goddess Mahalakshmi – the Hindu deity of wealth, fortune, and prosperity. It is also associated with the Saptarishi (Seven Sages) and the seven sacred rivers of India.

In Vedic scriptures like the Shiva Purana and Padma Purana, the 7 Mukhi Rudraksha is described as "Saptavarana Rudraksha" – a bead that provides seven layers of protection and prosperity. Its ruling planet is Saturn (Shani), making it an exceptionally powerful astrological remedy for those suffering from Shani Dosh, Sade Sati, or Dhaiyya.

At AstroSage Store, we offer 100% authentic, lab-certified 7 Mukhi Rudraksha sourced directly from Nepal's sacred Himalayan regions. Each bead undergoes X-ray testing for authenticity verification and comes pre-energized by experienced Vedic pandits.`
      },
      {
        heading: "Benefits of 7 Mukhi Rudraksha",
        content: `The 7 Mukhi Rudraksha offers a wide spectrum of benefits spanning financial, health, astrological, and spiritual domains:

**Financial & Career Benefits:**
• Attracts wealth, abundance and financial prosperity through Goddess Lakshmi's blessings
• Removes financial blockages, debts and monetary obstacles
• Enhances business growth, new opportunities and professional success
• Brings stability in income, investments and savings
• Protects from unexpected financial losses and business failures

**Astrological Benefits (Saturn/Shani Remedy):**
• Most powerful natural remedy for Saturn's malefic effects
• Provides relief during Sade Sati (7.5 years of Saturn transit)
• Reduces impact of Shani Dhaiyya and Shani Dosha
• Balances Saturn's energy in the horoscope (Kundali)
• Recommended by astrologers worldwide as an effective Shani remedy

**Health Benefits:**
• Strengthens bones, joints and the skeletal system
• Helps with muscular pain, arthritis and rheumatic conditions
• Boosts immunity and overall physical vitality
• Reduces chronic stress, anxiety and mental fatigue
• Improves digestive health and metabolism

**Spiritual Benefits:**
• Enhances meditation depth and spiritual awareness
• Opens the Solar Plexus Chakra (Manipura) for personal power
• Attracts positive cosmic energies and divine blessings
• Removes negative karma accumulated over lifetimes
• Provides inner peace, mental clarity and emotional stability`
      },
      {
        heading: "How to Wear 7 Mukhi Rudraksha – Step by Step Guide",
        content: `Wearing a 7 Mukhi Rudraksha correctly is crucial for receiving its maximum benefits. Here's a detailed, authentic Vedic guide:

**Step 1: Choose the Right Day**
The most auspicious days to wear 7 Mukhi Rudraksha are Monday (Somvar) or Friday (Shukravar). Saturday (Shanivar) is also considered beneficial as Saturn is the ruling planet. Always start during Shukla Paksha (waxing moon phase).

**Step 2: Purification (Shuddhi Kriya)**
• Wake up early, take a bath and sit facing East
• Place the Rudraksha in a copper or silver plate
• Wash it with raw milk (unboiled cow's milk)
• Then wash with Ganga Jal (holy water) or clean water
• Dry it gently with a clean, new cloth

**Step 3: Energization (Pran Pratishtha)**
• Light a diya (oil lamp) with ghee
• Offer fresh flowers and incense sticks
• Chant the beej mantra "Om Hum Namah" 108 times using a Tulsi or Rudraksha mala
• You may also chant "Om Mahalakshmyai Namah" for Lakshmi's blessings

**Step 4: Wearing**
• String the Rudraksha in a gold or silver chain/thread
• Red silk thread is also traditionally acceptable
• Wear it as a pendant around the neck so it touches the chest (near the heart)
• Can also be worn as a bracelet on the right wrist

**Step 5: Daily Maintenance**
• Chant the mantra at least once daily while wearing
• Remove before sleeping if uncomfortable
• Clean with water periodically
• Apply a few drops of natural oil (olive/almond) monthly
• Avoid wearing during consumption of non-vegetarian food or alcohol`
      },
      {
        heading: "7 Mukhi Rudraksha for Shani Dosh & Sade Sati Remedy",
        content: `One of the primary reasons people seek the 7 Mukhi Rudraksha is its exceptional power as a Saturn (Shani) remedy. Here's why it's considered the most effective natural remedy for Saturn-related problems:

**What is Shani Dosh?**
Shani Dosh occurs when Saturn is placed in an unfavorable position in your birth chart (Kundali). This can cause delays in career, financial difficulties, health problems, relationship issues, and general bad luck. The period of Sade Sati (7.5 years) and Dhaiyya (2.5 years) are particularly challenging.

**How 7 Mukhi Rudraksha Helps:**
• It directly pacifies Saturn's negative energy without any side effects
• Unlike gemstones (Blue Sapphire/Neelam), Rudraksha is safe for everyone
• It doesn't need astrological compatibility – anyone can wear it
• Works for all types of Shani Dosh: Kantak Shani, Ashtama Shani, etc.
• Provides immediate vibrational protection from Saturn's malefic rays

**Who Should Wear It?**
• People going through Sade Sati or Shani Dhaiyya
• Those with Saturn in 1st, 4th, 7th, 8th, 10th, or 12th house
• Individuals experiencing unexplained delays and obstacles
• People with recurring financial problems despite hard work
• Those facing chronic health issues related to bones and joints

**Expert Tip:** Wearing 7 Mukhi Rudraksha along with chanting Shani Chalisa or Hanuman Chalisa on Saturdays amplifies its effects manifold.`
      },
      {
        heading: "7 Mukhi Rudraksha Price – Why Quality Matters",
        content: `The price of authentic 7 Mukhi Rudraksha can vary significantly based on several quality factors:

**Origin:** Nepal Rudraksha are larger (18-22mm), more powerful and command higher prices than Indonesian ones (10-14mm). At AstroSage Store, we exclusively offer Nepal-origin Rudraksha.

**Size:** Larger beads (20mm+) are rarer and more valuable. Our standard size range is 18-22mm.

**Clarity of Mukhi Lines:** Well-defined, natural mukhi lines running from top to bottom indicate authenticity. All our beads have clearly visible, natural lines.

**Natural Hole:** Authentic Rudraksha have a natural hole running through the center. We never sell drilled or artificially modified beads.

**Certification:** Lab-certified Rudraksha with X-ray verification cost more but guarantee authenticity. Every AstroSage Rudraksha comes with certification.

**Our Pricing:**
At AstroSage Store, authentic 7 Mukhi Nepal Rudraksha is priced at ₹${product.price.toLocaleString()} (MRP ₹${product.originalPrice.toLocaleString()}). This includes free Vedic energization by expert pandits, lab certification, wearing instructions, and free Pan India shipping with insurance.

**Beware of Fakes:** The market is flooded with fake Rudraksha made from wood, plastic, or artificially carved beads. Always buy from trusted, certified sellers like AstroSage Store with proper lab certification.`
      },
      {
        heading: "How to Identify Original 7 Mukhi Rudraksha",
        content: `With many counterfeit products in the market, knowing how to identify an authentic 7 Mukhi Rudraksha is essential:

**Visual Inspection:**
• Count exactly 7 natural lines (mukhis) running from top (Brahma) to bottom (Vishnu)
• Lines should be natural, not carved or artificially made
• Surface texture should be rough and organic, not smooth like plastic
• Natural holes should be present at both ends

**Water Test:**
• Place the Rudraksha in a glass of water
• An authentic bead will sink to the bottom
• Fake ones made of light materials may float
• Note: This test is not 100% conclusive

**X-Ray Test (Most Reliable):**
• X-ray imaging reveals the internal compartments
• A genuine 7 Mukhi will show exactly 7 internal chambers
• This is the gold standard for authentication
• All AstroSage Rudraksha are X-ray verified

**Copper Coin Test:**
• Place the Rudraksha between two copper coins
• An authentic Rudraksha has electromagnetic properties and will cause slight rotation
• This indicates natural energy vibrations

**At AstroSage Store,** every Rudraksha comes with a lab certification that includes X-ray imagery, verifying the exact number of mukhi lines and internal chambers. This eliminates any doubt about authenticity.`
      }
    ]
  } : null;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${mukhiNumber} mukhi rudraksha, ${mukhiNumber} mukhi rudraksha benefits, ${mukhiNumber} mukhi rudraksha price, ${mukhiNumber} mukhi rudraksha original, ${product.deity} rudraksha, ${product.planet} remedy, rudraksha online, nepal rudraksha, certified rudraksha, astrosage rudraksha`} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:site_name" content="AstroSage Store" />
        <meta property="product:price:amount" content={String(product.price)} />
        <meta property="product:price:currency" content="INR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={product.images[0]} />

        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <article className="min-h-screen bg-background" itemScope itemType="https://schema.org/Product">
        {/* Sticky Add to Cart Bar - Mobile */}
        {isSticky && (
          <div className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-primary/20 shadow-lg z-50 lg:hidden animate-slide-in-right">
            <div className="container mx-auto px-4 py-3 flex items-center gap-3">
              <div className="flex-shrink-0">
                <p className="font-bold text-lg">₹{product.price.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</p>
              </div>
              <div className="flex gap-2 flex-1">
                <Button className="flex-1" size="sm" variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <ShoppingCart className="mr-1 h-4 w-4" />
                  Cart
                </Button>
                <Button className="flex-1" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="container max-w-7xl mx-auto px-4 py-6">
          {/* Breadcrumb with semantic markup */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item" className="hover:text-primary transition-colors"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/rudraksha" itemProp="item" className="hover:text-primary transition-colors"><span itemProp="name">Rudraksha</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-foreground font-medium">{mukhiNumber} Mukhi</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Left Column - Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl overflow-hidden border-2 border-primary/10">
                <Badge className="absolute top-4 left-4 bg-accent text-white z-10 text-base px-3 py-1">
                  ⚡ Limited Stock
                </Badge>
                <Badge className="absolute top-4 right-4 bg-green-600 text-white z-10 text-base px-3 py-1">
                  {product.discount}% OFF
                </Badge>
                {product.stockLeft <= 10 && (
                  <Badge className="absolute bottom-4 left-4 bg-red-600 text-white z-10 animate-pulse">
                    Only {product.stockLeft} Left!
                  </Badge>
                )}
                <img 
                  src={product.images[selectedImage]} 
                  alt={`${product.name} - Authentic Nepal Origin, Lab Certified`}
                  className="w-full h-full object-contain p-8"
                  itemProp="image"
                  loading="eager"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {(product.images || []).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${
                      selectedImage === idx ? 'border-primary shadow-lg scale-105' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>

              <WhoBuysThis />

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, idx) => (
                  <Card key={idx} className="border-primary/20">
                    <CardContent className="p-3 text-center">
                      <Award className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="font-bold text-xs">{cert.title}</p>
                      <p className="text-[10px] text-muted-foreground">{cert.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Rating & Social Proof */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-lg" itemProp="ratingValue">{product.rating}</span>
                  <span className="text-muted-foreground">(<span itemProp="reviewCount">{product.reviews.toLocaleString()}</span> verified reviews)</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Bestseller
                  </Badge>
                </div>
                <p className="text-sm text-primary font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  🪷 {product.sold} Rudraksha Sold - Trusted Worldwide
                </p>
              </div>

              {/* Live Activity */}
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="default" className="bg-green-50 text-green-700 border-green-200 px-4 py-2">
                  <Eye className="w-4 h-4 mr-2" />
                  {viewingUsers} people viewing now
                </Badge>
                <Badge variant="default" className="bg-orange-50 text-orange-700 border-orange-200 px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  Sale ends in 12:45:32
                </Badge>
              </div>

              {/* Title */}
              <header>
                <Badge className="mb-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  {product.deity}'s Blessing
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight" itemProp="name">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground" itemProp="description">{product.subtitle}</p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Package className="h-4 w-4 text-primary" />
                    <span className="font-medium">{product.origin}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-medium">Size: {product.size}</span>
                  </div>
                </div>
              </header>

              {/* Deity & Planet Info */}
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><p className="text-muted-foreground text-xs mb-1">Ruling Deity</p><p className="font-bold text-primary">{product.deity}</p></div>
                    <div><p className="text-muted-foreground text-xs mb-1">Ruling Planet</p><p className="font-bold text-primary">{product.planet}</p></div>
                    <div><p className="text-muted-foreground text-xs mb-1">Chakra</p><p className="font-bold text-primary">{product.chakra}</p></div>
                    <div><p className="text-muted-foreground text-xs mb-1">Mantra</p><p className="font-bold text-primary">{product.mantra}</p></div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <div className="space-y-3" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-4xl md:text-5xl font-bold text-primary" itemProp="price" content={String(product.price)}>₹{product.price.toLocaleString()}</span>
                  <meta itemProp="priceCurrency" content="INR" />
                  <link itemProp="availability" href="https://schema.org/InStock" />
                  <div className="space-y-1">
                    <span className="text-xl text-muted-foreground line-through block">₹{product.originalPrice.toLocaleString()}</span>
                    <Badge className="bg-green-600 text-white">Save ₹{(product.originalPrice - product.price).toLocaleString()}</Badge>
                  </div>
                </div>
                {product.emiAvailable && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
                    or 3 interest-free payments of ₹{product.emiAmount} <Badge variant="outline" className="ml-2">EMI Available</Badge>
                  </p>
                )}
                <p className="text-sm font-medium text-green-700 dark:text-green-400 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Order in the next 2 hours for delivery by {product.deliveryDate}
                </p>
              </div>

              {/* Key Highlights */}
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
                <CardContent className="p-5 space-y-3">
                  <h2 className="font-bold text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Why Choose This Rudraksha?
                  </h2>
                  <div className="space-y-2">
                    {(product.keyHighlights || []).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quantity & CTA */}
              <div className="space-y-4 p-6 bg-muted/50 rounded-xl border-2 border-primary/20">
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-lg">Quantity:</label>
                  <div className="flex items-center border-2 border-primary/20 rounded-lg overflow-hidden">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-primary/10 transition-colors font-bold">-</button>
                    <span className="px-6 py-3 border-x-2 border-primary/20 font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-primary/10 transition-colors font-bold">+</button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button size="lg" className="text-base md:text-lg py-6 md:py-7 bg-accent hover:bg-accent/90 font-bold shadow-lg">
                    <ShoppingCart className="mr-1 md:mr-2 h-5 w-5 md:h-6 md:w-6" />
                    <span className="whitespace-nowrap">ADD TO CART</span>
                  </Button>
                  <Button size="lg" className="text-base md:text-lg py-6 md:py-7 bg-primary hover:bg-primary/90 font-bold shadow-lg">
                    <span className="whitespace-nowrap">BUY NOW</span>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="lg" className="border-2">
                    <Heart className="mr-2 h-5 w-5" />
                    Save for Later
                  </Button>
                  <Button variant="outline" size="lg" className="border-2">
                    <Share2 className="mr-2 h-5 w-5" />
                    Share
                  </Button>
                </div>

                {/* Payment & Shipping */}
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-2 flex-1">
                        <Truck className="h-4 w-4 text-green-600" />
                        <span className="font-medium">Free Delivery</span>
                      </div>
                      <span className="text-xs text-muted-foreground">All Orders</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-2 flex-1">
                        <Award className="h-4 w-4 text-amber-600" />
                        <span className="font-medium">Vedic Energized</span>
                      </div>
                      <span className="text-xs text-muted-foreground">By Experts</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                        <span className="font-medium flex items-center gap-1"><Shield className="h-3 w-3 text-green-600" /> 100% Authentic</span>
                        <span className="font-medium flex items-center gap-1"><Truck className="h-3 w-3 text-blue-600" /> Free Shipping</span>
                        <span className="font-medium flex items-center gap-1"><CreditCard className="h-3 w-3" /> Secure Payment</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Urgency & Trust */}
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-green-800 dark:text-green-400 font-bold flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    ✓ In Stock - {product.stockLeft} pieces available at this price
                  </p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <p className="text-amber-800 dark:text-amber-400 font-medium flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    ⚡ 127 people are viewing this right now
                  </p>
                </div>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground py-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Free Shipping</span>
                  </div>
                </div>
              </div>

              {/* Expert Consultation */}
              <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Need Expert Guidance?</h3>
                        <p className="text-xs text-muted-foreground">Talk to our astrologer - FREE</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => window.open('https://wa.me/1234567890?text=I need guidance about 7 Mukhi Rudraksha', '_blank')}>
                      <Phone className="mr-1 h-4 w-4" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Benefits Section */}
          <section className="mb-16" aria-labelledby="benefits-heading">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-base">
                <Crown className="h-4 w-4 mr-2" />
                Divine Blessings of {mukhiNumber} Mukhi Rudraksha
              </Badge>
              <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold mb-3">
                Powerful Benefits of {mukhiNumber} Mukhi Rudraksha
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Blessed by {product.deity} - {product.benefits?.[0]?.desc || 'Provides numerous divine benefits'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(product.benefits || []).map((benefit, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Benefits Accordion */}
          <section className="mb-16 max-w-5xl mx-auto" aria-labelledby="detailed-benefits-heading">
            <h2 id="detailed-benefits-heading" className="text-3xl font-bold text-center mb-10">Complete Benefits Guide</h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {(product.detailedBenefits || []).map((section, idx) => (
                    <AccordionItem key={idx} value={`benefits-${idx}`}>
                      <AccordionTrigger className="text-left font-bold text-lg hover:text-primary">
                        {section.category}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 ml-2">
                          {(section.points || []).map((point, pidx) => (
                            <li key={pidx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Ideal For */}
          <section className="mb-16" aria-labelledby="ideal-for-heading">
            <h2 id="ideal-for-heading" className="text-3xl font-bold text-center mb-10">Who Should Wear {mukhiNumber} Mukhi Rudraksha?</h2>
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(product.idealFor || []).map((person, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-sm font-medium">{person}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Wearing Instructions */}
          <section className="mb-16" aria-labelledby="wearing-heading">
            <h2 id="wearing-heading" className="text-3xl font-bold text-center mb-10">How to Wear {mukhiNumber} Mukhi Rudraksha</h2>
            <Card className="max-w-3xl mx-auto border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {(product.wearingInstructions || []).map((instruction, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-sm leading-relaxed pt-1">{instruction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Long-Form SEO Content Section */}
          {longFormContent && (
            <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="seo-content-heading">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 text-base">
                  📖 Complete Guide
                </Badge>
                <h2 id="seo-content-heading" className="text-3xl md:text-4xl font-bold mb-3">
                  Everything About 7 Mukhi Rudraksha
                </h2>
                <p className="text-lg text-muted-foreground">
                  Your ultimate guide to benefits, wearing method, price & authenticity
                </p>
              </div>
              
              <div className="space-y-8">
                {longFormContent.sections.map((section, idx) => (
                  <Card key={idx} className="border border-border/50 shadow-sm">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{section.heading}</h3>
                      <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content.split('\n').map((paragraph, pIdx) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return <h4 key={pIdx} className="font-bold text-foreground text-base mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</h4>;
                          }
                          if (paragraph.startsWith('**')) {
                            return <h4 key={pIdx} className="font-bold text-foreground text-base mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</h4>;
                          }
                          if (paragraph.startsWith('•')) {
                            return <p key={pIdx} className="ml-4 flex items-start gap-2"><Check className="h-4 w-4 text-accent shrink-0 mt-1" /><span>{paragraph.replace('• ', '')}</span></p>;
                          }
                          if (paragraph.trim() === '') return <br key={pIdx} />;
                          return <p key={pIdx} className="mb-3">{paragraph}</p>;
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Testimonials */}
          <section className="mb-16" aria-labelledby="reviews-heading">
            <h2 id="reviews-heading" className="text-3xl font-bold text-center mb-3">Real Reviews from Devotees</h2>
            <p className="text-center text-muted-foreground mb-10">
              See how {mukhiNumber} Mukhi Rudraksha transformed lives
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold">{testimonial.name}</p>
                          {testimonial.verified && (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-[10px]">
                              <Check className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">"{testimonial.text}"</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 max-w-4xl mx-auto" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-center mb-3">Frequently Asked Questions</h2>
            <p className="text-center text-muted-foreground mb-10">
              Everything you need to know about {mukhiNumber} Mukhi Rudraksha
            </p>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-left font-semibold hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Related Products */}
          <section className="mb-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-3xl font-bold text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/rudraksha/${item.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg mb-3 overflow-hidden">
                        <img src={item.image} alt={`${item.name} - Buy Online at Best Price`} className="w-full h-full object-contain p-4" loading="lazy" />
                      </div>
                      <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{item.rating}</span>
                      </div>
                      <p className="font-bold text-primary text-lg">₹{item.price.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Trust Section */}
          <section className="mt-16 text-center mb-8" aria-labelledby="trust-heading">
            <h3 id="trust-heading" className="text-2xl font-bold mb-6">Trusted by Devotees Worldwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-lg">100% Authentic</h4>
                <p className="text-sm text-muted-foreground">Lab X-ray certified</p>
              </div>
              <div className="text-center">
                <Sparkles className="h-10 w-10 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-lg">Pre-Energized</h4>
                <p className="text-sm text-muted-foreground">By expert pandits</p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-lg">15K+ Happy</h4>
                <p className="text-sm text-muted-foreground">Satisfied customers</p>
              </div>
              <div className="text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-lg">20+ Years</h4>
                <p className="text-sm text-muted-foreground">Trusted legacy</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default ProductDetailsRudraksha;
