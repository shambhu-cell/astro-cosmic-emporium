import { Card } from "@/components/ui/card";
import moneyImage from "@/assets/purpose/money.jpg";
import loveImage from "@/assets/purpose/love.jpg";
import careerImage from "@/assets/purpose/career.jpg";
import evilEyeImage from "@/assets/purpose/evil-eye.jpg";
import healthImage from "@/assets/purpose/health.jpg";
import giftingImage from "@/assets/purpose/gifting.jpg";

const ShopByPurpose = () => {
  const purposes = [
    { 
      title: "Money", 
      image: moneyImage,
      description: "Attract wealth & prosperity",
      link: "/gemstones?purpose=money"
    },
    { 
      title: "Love", 
      image: loveImage,
      description: "Enhance relationships",
      link: "/gemstones?purpose=love"
    },
    { 
      title: "Career", 
      image: careerImage,
      description: "Professional success",
      link: "/gemstones?purpose=career"
    },
    { 
      title: "Evil Eye", 
      image: evilEyeImage,
      description: "Protection & safety",
      link: "/bracelets?purpose=protection"
    },
    { 
      title: "Health", 
      image: healthImage,
      description: "Healing & wellness",
      link: "/gemstones?purpose=health"
    },
    { 
      title: "Gifting", 
      image: giftingImage,
      description: "Perfect spiritual gifts",
      link: "/gemstones?purpose=gifting"
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Shop by Purpose
          </h2>
          <p className="text-lg text-muted-foreground">
            Find the perfect spiritual solution for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {purposes.map((purpose, index) => (
            <a
              key={index}
              href={purpose.link}
              className="group block"
            >
              <Card className="overflow-hidden bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 hover:border-primary/30">
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-background to-muted">
                  <img 
                    src={purpose.image} 
                    alt={purpose.title}
                    className="w-full h-full object-cover p-6 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                    {purpose.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {purpose.description}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByPurpose;
