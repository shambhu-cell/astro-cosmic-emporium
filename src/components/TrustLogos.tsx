import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const TrustLogos = () => {
  const logos = [
    { name: "Times of India", text: "Featured", color: "from-blue-500/20 to-blue-600/20" },
    { name: "India Today", text: "Featured", color: "from-red-500/20 to-red-600/20" },
    { name: "Economic Times", text: "Featured", color: "from-purple-500/20 to-purple-600/20" },
    { name: "Hindustan Times", text: "Featured", color: "from-orange-500/20 to-orange-600/20" },
    { name: "DNA India", text: "Featured", color: "from-green-500/20 to-green-600/20" },
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
              <div className="flex flex-col items-center gap-3">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${logo.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">{logo.name}</h3>
                  <p className="text-xs text-muted-foreground">{logo.text}</p>
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