import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogDellPlatinum = () => {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/resources" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">Blog</Badge>
            <span className="text-sm text-muted-foreground">April 3, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            Zinfinity Achieves Global Platinum Tier
          </h1>
          <p className="text-xl text-muted-foreground">Dell Technologies Partnership</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Dell Platinum Tier
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              In less than three years, Zinfinity has skyrocketed from a bold startup to a global force in technology solutions. Today, the company announces it has earned the <strong className="text-foreground">Dell Technologies Global Platinum tier</strong>. This achievement reinforces Zinfinity's reputation for delivering cutting-edge, enterprise-level solutions that drive business transformation worldwide.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Rapid Global Expansion</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in <strong className="text-foreground">April 2022 in Southlake, Texas</strong>, Zinfinity has expanded rapidly, now providing IT solutions across the United States, Australia, the United Kingdom, the Netherlands, and Hong Kong. This rapid growth, combined with deep industry expertise, has positioned Zinfinity as a go-to partner for organizations seeking best-in-class IT infrastructure, cybersecurity, AI-driven solutions, and cloud transformation strategies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">From the CEO</h2>
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="text-lg italic text-muted-foreground mb-4">
                "Our Dell Technologies Global Platinum Partner tier achievement speaks volumes about our commitment to innovation and client success. We built this company with a vision—to provide smarter, faster, and more secure technology solutions. Achieving this milestone is proof that our approach is resonating with clients and driving real business outcomes."
              </p>
              <footer className="font-semibold text-foreground">Joe Barrett – CEO, Zinfinity</footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What This Means for Our Clients</h2>
            <p className="text-muted-foreground leading-relaxed">
              With this relationship, Zinfinity gains access to Dell Technologies' advanced training, resources, and support, further enhancing its ability to craft tailored IT strategies that tackle today's most pressing business challenges. From <strong className="text-foreground">optimizing IT investments to securing mission-critical systems</strong>, Zinfinity is dedicated to guiding businesses into the future with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Zinfinity's relentless pursuit of excellence, paired with its elite collaborations and forward-thinking strategies, ensures its clients stay ahead of the technology curve. <strong className="text-foreground">The future is now—and Zinfinity is leading the way.</strong>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Ready to Work With a Partner Trusted by Dell?</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Zinfinity's Global Platinum Tier status is more than a milestone—it's a testament to our commitment, capability, and consistency.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogDellPlatinum;
