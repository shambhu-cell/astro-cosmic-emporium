import { Shield, Award, CheckCircle2, BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const certifications = [
  {
    name: "GIA",
    fullName: "Gemological Institute of America",
    description: "World's foremost authority on diamonds, colored stones and pearls",
    color: "bg-blue-600"
  },
  {
    name: "IGI",
    fullName: "International Gemological Institute",
    description: "World's largest independent gem certification laboratory",
    color: "bg-purple-600"
  },
  {
    name: "GJEPC",
    fullName: "Gem & Jewellery Export Promotion Council",
    description: "India's apex body for gem and jewellery industry",
    color: "bg-orange-600"
  },
  {
    name: "GRS",
    fullName: "GRS Gemresearch Swisslab",
    description: "Swiss laboratory specializing in colored gemstones",
    color: "bg-red-600"
  },
];

const CertificationBadges = () => {
  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-6 h-6 text-accent" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Certified Stones Only
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every gemstone comes with authentic certification from internationally recognized laboratories
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-card transition-shadow border-border"
            >
              <div className={`w-16 h-16 ${cert.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-xl">{cert.name}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{cert.name} Certified</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{cert.fullName}</p>
            </Card>
          ))}
        </div>

        {/* Additional Trust Points */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-12">
          {[
            { icon: CheckCircle2, text: "100% Natural Stones" },
            { icon: BadgeCheck, text: "Authenticity Guaranteed" },
            { icon: Award, text: "21+ Years Trust" },
            { icon: Shield, text: "Lifetime Buyback" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;
