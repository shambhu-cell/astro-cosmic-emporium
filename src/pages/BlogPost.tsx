import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} - AstroSage Shop Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://astrosage-shop.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        {/* Hero Section */}
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container max-w-4xl mx-auto px-4">
            <Button 
              asChild 
              variant="ghost" 
              className="mb-6 -ml-3 hover:bg-secondary"
            >
              <a href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </a>
            </Button>

            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="container max-w-5xl mx-auto px-4 -mt-8">
          <div className="rounded-xl overflow-hidden shadow-card">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </section>

        {/* Article Content */}
        <article className="container max-w-4xl mx-auto px-4 py-12">
          <Card className="border-border bg-card shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <div className="space-y-6 text-foreground">
                  {post.content.map((section, index) => (
                    <div key={index} className="space-y-4">
                      {section.heading && (
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-8 mb-4">
                          {section.heading}
                        </h2>
                      )}
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-base leading-relaxed text-foreground/90">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Share Section */}
                <Separator className="my-8" />
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Share this article</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="container max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card 
                  key={relatedPost.slug} 
                  className="overflow-hidden hover:shadow-lg transition-all border-border bg-card group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      <a href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</a>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <a href={`/blog/${relatedPost.slug}`}>
                        Read More →
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogPost;
