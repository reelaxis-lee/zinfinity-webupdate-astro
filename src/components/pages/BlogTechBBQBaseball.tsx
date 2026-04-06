import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogTechBBQBaseball = () => {
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
            <span className="text-sm text-muted-foreground">July 22, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            When Tech Meets BBQ and Baseball
          </h1>
          <p className="text-xl text-muted-foreground">Events & Community</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Tech Meets BBQ
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">A Night with Dell, CrowdStrike, Juniper and APC</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              On <strong className="text-foreground">July 22</strong>, Zinfinity joined forces with <strong className="text-foreground">Dell, CrowdStrike, Juniper, and APC</strong> for an unforgettable evening at the <strong className="text-foreground">Texas Rangers</strong> game.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No slides. No speeches. Just incredible Texas BBQ, big-league baseball, and conversations about the future of <strong className="text-foreground">AI and security</strong> between innings.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">The Highlight</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The very first pitch of the night— <strong className="text-foreground">a home run</strong>—set the tone for an exciting game under the lights at <strong className="text-foreground">Globe Life Field</strong>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Partners in Attendance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Dell", "CrowdStrike", "Juniper", "APC"].map((partner) => (
                <div key={partner} className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <p className="font-semibold text-foreground">{partner}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <p className="text-lg italic text-muted-foreground text-center">
              "It was the perfect mix of great food, great company, and great baseball—proof that tech events can be just as thrilling as the game itself."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Want to Be Part of the Next One?</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Stay connected with Zinfinity for future events, community gatherings, and partner experiences.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogTechBBQBaseball;
