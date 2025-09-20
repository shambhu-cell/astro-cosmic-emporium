import { Card } from "@/components/ui/card";

const TrustLogos = () => {
  const logos = [
    { name: "Times of India", text: "Featured in Times of India" },
    { name: "India Today", text: "Recommended by India Today" },
    { name: "Economic Times", text: "Trusted by Economic Times" },
    { name: "Hindustan Times", text: "Featured in Hindustan Times" },
    { name: "DNA India", text: "Verified by DNA India" },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-card">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-muted-foreground font-medium">Trusted & Featured By Leading Media</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <Card key={index} className="p-4 text-center bg-white/80 hover:bg-white transition-colors">
              <div className="h-12 flex items-center justify-center mb-2">
                <div className="w-full h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{logo.name}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{logo.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;