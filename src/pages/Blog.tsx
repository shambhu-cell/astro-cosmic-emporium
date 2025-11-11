import { Helmet } from "react-helmet";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

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

      <div className="min-h-screen bg-gradient-hero">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                Our Blog
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Gemstones & Spiritual Wisdom
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert insights on astrology, gemstones, rudraksha, and spiritual healing
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="container max-w-7xl mx-auto px-4 -mt-12">
          <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all border-border bg-card">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {featuredPost.category}
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                  <a href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</a>
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
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
                </div>
                <Button asChild variant="primary" className="w-fit">
                  <a href={`/blog/${featuredPost.slug}`}>
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Blog Grid */}
        <section className="container max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card 
                key={post.slug} 
                className="overflow-hidden hover:shadow-lg transition-all border-border bg-card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground backdrop-blur-sm">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <a href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
