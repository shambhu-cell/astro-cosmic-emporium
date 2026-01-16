import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Import gemstone images
import blueSapphireImg from "@/assets/gemstones/blue-sapphire.jpg";
import yellowSapphireImg from "@/assets/gemstones/yellow-sapphire.jpg";
import rubyImg from "@/assets/gemstones/ruby.jpg";
import emeraldImg from "@/assets/gemstones/emerald.jpg";
import pearlImg from "@/assets/gemstones/pearl.jpg";
import redCoralImg from "@/assets/gemstones/red-coral.jpg";
import hessoniteImg from "@/assets/gemstones/hessonite.jpg";
import catsEyeImg from "@/assets/gemstones/cats-eye.jpg";
import lapisLazuliImg from "@/assets/gemstones/lapis-lazuli.jpg";

const gemstones = [
  {
    name: "Yellow Sapphire",
    hindi: "Pukhraj",
    image: yellowSapphireImg,
    benefits: "Divine Luck, Prosperity, Blissful Matrimony",
    link: "/yellow-sapphire",
    planet: "Jupiter",
    startingPrice: "₹15,000"
  },
  {
    name: "Blue Sapphire",
    hindi: "Neelam",
    image: blueSapphireImg,
    benefits: "Great Fame, Discipline, Reverses Misfortunes",
    link: "/blue-sapphire",
    planet: "Saturn",
    startingPrice: "₹45,000"
  },
  {
    name: "Emerald",
    hindi: "Panna",
    image: emeraldImg,
    benefits: "Vocal Charm, Creativity, Success in Business",
    link: "/gemstones",
    planet: "Mercury",
    startingPrice: "₹35,000"
  },
  {
    name: "Ruby",
    hindi: "Manik",
    image: rubyImg,
    benefits: "Great Health, Will Power, Fame & Reputation",
    link: "/ruby",
    planet: "Sun",
    startingPrice: "₹55,000"
  },
  {
    name: "Pearl",
    hindi: "Moti",
    image: pearlImg,
    benefits: "Mental Strength, Fortune, Peace & Fulfillment",
    link: "/pearl",
    planet: "Moon",
    startingPrice: "₹5,000"
  },
  {
    name: "Red Coral",
    hindi: "Moonga",
    image: redCoralImg,
    benefits: "Averts Mishaps, Courage, Overall Strength",
    link: "/moonga",
    planet: "Mars",
    startingPrice: "₹3,000"
  },
  {
    name: "Hessonite",
    hindi: "Gomed",
    image: hessoniteImg,
    benefits: "Career Success, Popularity, Speculative Gains",
    link: "/hessonite",
    planet: "Saturn",
    startingPrice: "₹8,000"
  },
  {
    name: "Cat's Eye",
    hindi: "Lehsunia",
    image: catsEyeImg,
    benefits: "Protection, Intuition, Spiritual Growth",
    link: "/cats-eye",
    planet: "Saturn",
    startingPrice: "₹12,000"
  },
  {
    name: "Lapis Lazuli",
    hindi: "Lajward",
    image: lapisLazuliImg,
    benefits: "Wisdom, Truth, Communication Skills",
    link: "/lapis-lazuli",
    planet: "Saturn",
    startingPrice: "₹2,500"
  },
];

const GemstoneGridBenefits = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Buy Gemstones Online
          </h2>
          <p className="text-muted-foreground text-lg">
            Products of Trusted Excellence • GIA & IGI Certified
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {gemstones.map((gem, index) => (
            <Link key={index} to={gem.link} className="group">
              <Card className="overflow-hidden border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 bg-card h-full">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-secondary">
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Planet badge */}
                  <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-muted-foreground">
                    {gem.planet}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-base lg:text-lg group-hover:text-primary transition-colors">
                    {gem.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">({gem.hindi})</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {gem.benefits}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-semibold text-sm">
                      From {gem.startingPrice}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/gemstones-collection"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Gemstones
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GemstoneGridBenefits;
