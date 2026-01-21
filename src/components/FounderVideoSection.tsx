import { Play, Award, Users, Star } from "lucide-react";
import { useState } from "react";
import founderImage from "@/assets/founder-puneet-pandey.jpg";

const FounderVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    { icon: Users, value: "10M+", label: "Happy Customers" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Trust Rating" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Meet Our Founder
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            A Vision Rooted in{" "}
            <span className="text-gradient-gold">Ancient Wisdom</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the story behind India's most trusted astrology platform and our commitment to authentic spiritual products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Container */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              {!isPlaying ? (
                <>
                  {/* Thumbnail with overlay */}
                  <img
                    src={founderImage}
                    alt="Puneet Pandey - Founder of AstroSage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group/play"
                    aria-label="Play founder video"
                  >
                    <div className="relative">
                      {/* Pulse rings */}
                      <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                      <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse" />
                      
                      {/* Play button */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover/play:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </button>

                  {/* Video duration badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                    3:45
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Founder Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Decorative frame */}
            <div className="absolute -inset-3 border-2 border-primary/20 rounded-2xl -z-10 group-hover:border-primary/40 transition-colors duration-300" />
            <div className="absolute -inset-6 border border-primary/10 rounded-3xl -z-20" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                Puneet Pandey
              </h3>
              <p className="text-primary font-medium">
                Founder & CEO, AstroSage
              </p>
              <blockquote className="text-lg md:text-xl text-muted-foreground italic border-l-4 border-primary pl-4">
                "Our mission is to bring the authentic wisdom of Vedic astrology and the power of genuine gemstones to every household, making spiritual guidance accessible to all."
              </blockquote>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With over 25 years of dedication to astrology and spiritual sciences, Puneet Pandey has built AstroSage into India's largest astrology platform. His vision combines ancient Vedic knowledge with modern technology, serving over 100 million users worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
              >
                Learn more about our journey
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVideoSection;
