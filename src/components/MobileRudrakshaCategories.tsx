import { Link } from "react-router-dom";

import oneMukhiImg from "@/assets/rudraksha/1-mukhi.jpg";
import threeMukhiImg from "@/assets/rudraksha/3-mukhi.jpg";
import fourMukhiImg from "@/assets/rudraksha/4-mukhi.jpg";
import nirakarImg from "@/assets/rudraksha/nirakar.jpg";

const rudrakshaCategories = [
  {
    title: "1 Mukhi",
    image: oneMukhiImg,
    id: "1-mukhi",
  },
  {
    title: "2 Mukhi",
    image: threeMukhiImg,
    id: "2-mukhi",
  },
  {
    title: "3 Mukhi",
    image: threeMukhiImg,
    id: "3-mukhi",
  },
  {
    title: "4 Mukhi",
    image: fourMukhiImg,
    id: "4-mukhi",
  },
  {
    title: "5 Mukhi",
    image: fourMukhiImg,
    id: "5-mukhi",
  },
  {
    title: "6 Mukhi",
    image: oneMukhiImg,
    id: "6-mukhi",
  },
  {
    title: "7 Mukhi",
    image: nirakarImg,
    id: "7-mukhi",
  },
  {
    title: "8 Mukhi",
    image: threeMukhiImg,
    id: "8-mukhi",
  },
  {
    title: "9 Mukhi",
    image: fourMukhiImg,
    id: "9-mukhi",
  },
  {
    title: "10 Mukhi",
    image: oneMukhiImg,
    id: "10-mukhi",
  },
  {
    title: "11 Mukhi",
    image: nirakarImg,
    id: "11-mukhi",
  },
  {
    title: "12 Mukhi",
    image: threeMukhiImg,
    id: "12-mukhi",
  },
  {
    title: "13 Mukhi",
    image: fourMukhiImg,
    id: "13-mukhi",
  },
  {
    title: "14 Mukhi",
    image: oneMukhiImg,
    id: "14-mukhi",
  },
  {
    title: "Nirakar",
    image: nirakarImg,
    id: "nirakar",
  },
];

const MobileRudrakshaCategories = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-4 md:hidden bg-gradient-to-b from-primary/5 to-background border-b border-border/30">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 min-w-max">
          {rudrakshaCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className="flex flex-col items-center gap-2 min-w-[72px]"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted shadow-sm">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-medium text-foreground text-center leading-tight max-w-[72px]">
                {category.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileRudrakshaCategories;
