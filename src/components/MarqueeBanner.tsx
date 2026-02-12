import { Gift, Flame } from "lucide-react";

const MarqueeBanner = () => {
  const offers = [
    "🎁 FREE 5 Mukhi Rudraksha on every order – Limited Time Only",
    "💎 Get 10% OFF on your first Gemstone purchase – Use code ASTRO10",
    "🔬 All Gemstones come with GIA/IGI Lab Certification",
    "📞 Free Astrologer Consultation on orders above ₹25,000",
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {[...offers, ...offers].map((offer, index) => (
          <span key={index} className="inline-flex items-center gap-2 text-sm font-medium mx-8">
            <Flame className="w-4 h-4 text-accent flex-shrink-0" />
            {offer}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
