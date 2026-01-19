import { Helmet } from "react-helmet";
import { Calendar, Clock, User, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog - AstroSage Shop | Gemstones, Astrology & Spiritual Insights</title>
        <meta name="description" content="Discover expert insights on gemstones, astrology, rudraksha, spiritual healing, and Vedic wisdom. Learn how to choose the right gemstones and spiritual products." />
        <link rel="canonical" href="https://astrosage-shop.com/blog" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-background">
        {/* Premium Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Wisdom & Insights</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Gemstone <span className="text-gradient-gold">Wisdom</span> & 
                <br className="hidden md:block" /> Spiritual Insights
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore ancient Vedic knowledge, gemstone benefits, and spiritual guidance from our expert astrologers
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post - Premium Card */}
        <section className="container max-w-6xl mx-auto px-4 -mt-8 relative z-20">
          <a 
            href={`/blog/${featuredPost.slug}`}
            className="block group"
          >
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 group-hover:from-black/90 transition-all duration-500" />
              
              {/* Background Image */}
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-accent text-accent-foreground border-0 px-3 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                    {featuredPost.category}
                  </Badge>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                
                <p className="text-white/80 mb-6 line-clamp-2 md:line-clamp-3 text-base md:text-lg max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <div className="ml-auto hidden md:flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                    <span className="font-medium">Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Blog Grid - Premium Cards */}
        <section className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Latest Articles
              </h2>
              <p className="text-muted-foreground mt-1">Discover more insights and wisdom</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <a 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full bg-card rounded-xl overflow-hidden border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <Badge 
                      className="absolute top-4 left-4 bg-background/90 text-foreground border-0 backdrop-blur-sm"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Stay Updated</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Get Wisdom Delivered to Your Inbox
            </h2>
            
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Subscribe to receive the latest articles on gemstones, astrology, and spiritual guidance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="primary" className="px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
