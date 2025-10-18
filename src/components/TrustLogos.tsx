import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TrustLogos = () => {
  const logos = [
    { 
      name: "Times of India", 
      shortName: "TOI",
      text: "Featured", 
      bgColor: "bg-[#003366]",
      textColor: "text-white"
    },
    { 
      name: "India Today", 
      shortName: "India Today",
      text: "Featured", 
      bgColor: "bg-[#E4002B]",
      textColor: "text-white"
    },
    { 
      name: "Economic Times", 
      shortName: "ET",
      text: "Featured", 
      bgColor: "bg-[#6B2C91]",
      textColor: "text-white"
    },
    { 
      name: "Hindustan Times", 
      shortName: "HT",
      text: "Featured", 
      bgColor: "bg-[#FF6B35]",
      textColor: "text-white"
    },
    { 
      name: "DNA", 
      shortName: "DNA",
      text: "Featured", 
      bgColor: "bg-[#00A651]",
      textColor: "text-white"
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1">
            As Seen On
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trusted & Featured By
          </h2>
          <p className="text-lg text-muted-foreground">Leading Media Houses Across India</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <Card 
              key={index} 
              className="group p-6 text-center bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20"
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`w-full h-20 rounded-lg ${logo.bgColor} flex items-center justify-center px-4 transition-transform duration-300 group-hover:scale-105 shadow-md`}>
                  <span className={`${logo.textColor} font-bold text-xl md:text-2xl tracking-tight`}>
                    {logo.shortName}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-foreground">{logo.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {logo.text}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Our commitment to authenticity and quality has earned recognition from India's most trusted media publications
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;