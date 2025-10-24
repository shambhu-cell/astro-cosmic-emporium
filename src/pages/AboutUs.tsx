import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Download, TrendingUp, Shield, Sparkles, Store, Quote } from "lucide-react";
import founderVision from "@/assets/founder-puneet-pandey.jpg";

const AboutUs = () => {
  const stats = [
    { value: "11M+", label: "Monthly Users", icon: Users },
    { value: "1.2M+", label: "Daily Active Users", icon: TrendingUp },
    { value: "7 Crore+", label: "App Downloads", icon: Download },
    { value: "80%", label: "Market Share", icon: Award },
  ];

  const milestones = [
    {
      year: "2001",
      title: "India's First Consumer Mobile App",
      description: "Launched 'Mobile Kundli,' the very first consumer mobile application in India, bringing the power of technology directly to the hands of the people.",
    },
    {
      year: "2004",
      title: "India's First Consumer Cloud",
      description: "Introduced AstroSage Cloud, the first cloud service designed for consumers in the nation, providing seamless access to personal data and services.",
    },
    {
      year: "2018",
      title: "The World's First AI Astrologer",
      description: "Launched Bhrigoo.ai, the world's first AI-powered Vedic astrologer, proving our long-standing vision years before AI became a global conversation.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container max-w-screen-xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            <Sparkles className="w-3 h-3 mr-2 inline" />
            Trusted Since 2004
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            India's Most Trusted Astrology Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With <strong>1.2 Million Daily Active Users</strong>, AstroSage has been driven by a single mission since 2004: 
            to make astrology accessible, credible, and useful for everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 -mt-8">
        <div className="container max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all hover:border-primary/20">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">Our Story & Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              Our story is also a story of Indian technology firsts. We have always been at the forefront of 
              merging deep astrological knowledge with cutting-edge tech, building not just for our industry, 
              but for the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy of Firsts */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Award className="w-3 h-3 mr-2 inline" />
              Innovation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Legacy of Indian Tech Firsts
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our history is defined by a pattern of pioneering innovation. We have consistently introduced 
              foundational technologies to the Indian market years ahead of the curve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This legacy of being first is a testament to our deep commitment to solving real-world 
              problems through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Market Leadership */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <TrendingUp className="w-3 h-3 mr-2 inline" />
              Market Leader
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unmatched Market Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our technology and trust have made us the undisputed market leader. We hold over <strong>80% market share</strong> in 
              the three critical pillars of Indian astrology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-all hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Online Kundli</h3>
                <p className="text-muted-foreground">
                  Primary source for generating birth charts in India
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Horoscope Matching</h3>
                <p className="text-muted-foreground">
                  First choice for matching horoscopes for millions of marriages
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Astrology Software</h3>
                <p className="text-muted-foreground">
                  The undisputed operating system for the astrology industry
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Astrologer Network */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-screen-xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                700,000+ Registered Astrologers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We are home to the largest network of verified Vedic astrologers on the planet, 
                ensuring authentic guidance for millions of users every day.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* D2C Platform Launch */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Store className="w-3 h-3 mr-2 inline" />
              New Chapter
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entering the D2C Space
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Responding to overwhelming demand from our community, we have expanded beyond digital services 
              to offer authentic spiritual and astrological products directly to you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    After serving millions of users with astrological guidance and consultations, we received 
                    countless requests for authentic, high-quality spiritual products. Our users wanted trusted 
                    sources for genuine gemstones, rudraksha, yantras, and other sacred items that align with 
                    their astrological remedies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">This overwhelming demand inspired us to launch our Direct-to-Consumer platform.</strong> Leveraging 
                    our two decades of expertise and the trust of millions, we now bring you a curated collection 
                    of authentic spiritual products, each verified and energized according to Vedic traditions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From certified gemstones to powerful yantras, from traditional rudraksha to blessed malas—every 
                    product on our platform carries the same commitment to authenticity and quality that has made 
                    AstroSage India&apos;s most trusted astrology brand.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Quote className="w-3 h-3 mr-2 inline" />
              Founder&apos;s Vision
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Message from Our Founder
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            <div className="order-2 md:order-1">
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in group">
                <CardContent className="p-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={founderVision} 
                    alt="Founder's Vision - AstroSage Leadership" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/10" />
                <div className="relative z-10">
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground">
                    "Astrology is not about predicting the future—it&apos;s about empowering people to create their own destiny with awareness and wisdom."
                  </blockquote>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Since our inception, we&apos;ve believed that ancient Vedic wisdom, when combined with modern 
                    technology, can transform lives. Our mission has always been to make authentic astrological 
                    guidance accessible to everyone, breaking down barriers of geography, language, and cost.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Today, as we expand into offering spiritual products, we carry forward the same principles: 
                    <strong className="text-foreground"> authenticity, quality, and trust</strong>. Every product we offer is 
                    selected with the same care and verification we apply to our astrological services.
                  </p>
                  <div className="mt-8">
                    <p className="font-bold text-lg text-foreground">Puneet Pandey</p>
                    <p className="text-muted-foreground">Founder & CEO, AstroSage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4">
        <div className="container max-w-screen-xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Journey Continues
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As we continue to innovate, our core promise remains the same: to be your most trusted 
              companion on your life&apos;s path. With cutting-edge technology and deep astrological wisdom, 
              we&apos;re committed to serving millions with authenticity and precision.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
