import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const shareUrl = `https://astrosage-shop.com/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | AstroSage Shop Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={shareUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />

      <article className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image with Overlay */}
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container max-w-4xl mx-auto px-4 pb-12 md:pb-16">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white/90">{post.category}</span>
              </nav>
              
              {/* Category Badge */}
              <Badge className="bg-accent text-accent-foreground border-0 px-3 py-1 mb-4">
                {post.category}
              </Badge>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{post.author}</p>
                    <p className="text-sm text-white/60">Expert Astrologer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {/* Excerpt / Lead */}
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>
              
              {/* Article Body */}
              <div className="space-y-8">
                {post.content.map((section, index) => (
                  <div key={index} className="space-y-4">
                    {section.heading && (
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-8 mb-4">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-foreground/80 leading-relaxed text-base md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                <span className="text-sm text-muted-foreground mr-2">Tags:</span>
                <Badge variant="outline" className="text-xs">Gemstones</Badge>
                <Badge variant="outline" className="text-xs">{post.category}</Badge>
                <Badge variant="outline" className="text-xs">Astrology</Badge>
                <Badge variant="outline" className="text-xs">Vedic Wisdom</Badge>
              </div>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-8">
              {/* Share Box */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </h3>
                <div className="flex gap-3">
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Author Box */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <User className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Expert Astrologer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  25+ years of experience in Vedic astrology and gemstone consultation.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/consultation">
                    Book Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              {/* CTA Box */}
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <BookOpen className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Need Expert Guidance?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get personalized gemstone recommendations based on your birth chart.
                </p>
                <Button variant="secondary" size="sm" className="w-full" asChild>
                  <Link to="/consultation">
                    Free Consultation
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted/30 py-16 md:py-20">
            <div className="container max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                  Continue Reading
                </Badge>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  Related Articles
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <article className="h-full bg-card rounded-xl overflow-hidden border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-500">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="p-5">
                        <Badge variant="outline" className="text-xs mb-3">
                          {relatedPost.category}
                        </Badge>
                        
                        <h3 className="text-lg font-serif font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button variant="outline" asChild>
                  <Link to="/blog">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Articles
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />
    </>
  );
};

export default BlogPost;
