import { Link } from "react-router-dom";

import rudrakshaImg from "@/assets/rudraksha/1-mukhi.jpg";
import braceletImg from "@/assets/bracelets/tiger-eye.jpg";
import gemstoneImg from "@/assets/gemstones/ruby.jpg";
import malaImg from "@/assets/mala/rudraksha-mala.jpg";
import yantraImg from "@/assets/yantras.jpg";
import vastuImg from "@/assets/vastu-painting/radha-krishna-1.jpg";
import pendantImg from "@/assets/gemstones/emerald.jpg";
import moneyImg from "@/assets/purpose/money.jpg";

const categories = [
  {
    title: "Rudraksha",
    image: rudrakshaImg,
    link: "/rudraksha",
  },
  {
    title: "Bracelets",
    image: braceletImg,
    link: "/bracelets",
  },
  {
    title: "Gemstones",
    image: gemstoneImg,
    link: "/gemstones",
  },
  {
    title: "Mala",
    image: malaImg,
    link: "/mala",
  },
  {
    title: "Yantra",
    image: yantraImg,
    link: "/yantra",
  },
  {
    title: "Vastu Painting",
    image: vastuImg,
    link: "/vastu-painting",
  },
  {
    title: "Pendants",
    image: pendantImg,
    link: "/pendant",
  },
  {
    title: "Money Collection",
    image: moneyImg,
    link: "/bracelets?purpose=money",
  },
];

const MobileCategories = () => {
  return (
    <section className="py-4 md:hidden bg-gradient-to-b from-primary/5 to-background border-b border-border/30">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 min-w-max">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shadow-sm">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-medium text-foreground text-center leading-tight max-w-[80px]">
                {category.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileCategories;
