import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogToysForTots = () => {
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
            <span className="text-sm text-muted-foreground">April 15, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            Zinfinity Partners with Toys for Tots as a Corporate Sponsor to Support Children in Need Year-Round
          </h1>
          <p className="text-xl text-muted-foreground">Community & Corporate Giving</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Toys for Tots Sponsor
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Zinfinity</strong> is proud to announce its new role as a <strong className="text-foreground">Corporate Sponsor for Toys for Tots.</strong> As we celebrate this exciting milestone, we're reminded that the best kind of success is the kind you can share. This partnership marks a continued investment in supporting children and families in underserved communities across the United States.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Year-Round Support</h2>
            <p className="text-muted-foreground leading-relaxed">
              While Toys for Tots is best known for its annual toy distribution campaigns during the holiday season, the organization also provides year-round support to children in need through literacy programs, educational initiatives, and partnerships with local nonprofits. Zinfinity's donation will help expand these efforts beyond December, reaching kids when they need it most.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">From Our Leaders</h2>
            <blockquote className="border-l-4 border-accent pl-6 mb-8">
              <p className="text-lg italic text-muted-foreground mb-4">
                "Giving back is part of who we are at Zinfinity. We're honored to support an organization like Toys for Tots that is making a tangible impact in the lives of children across the country—not just during the holidays, but all year long."
              </p>
              <footer className="font-semibold text-foreground">Joe Barrett – CEO, Zinfinity</footer>
            </blockquote>
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="text-lg italic text-muted-foreground mb-4">
                "This partnership reflects our belief that businesses have a responsibility to do more than deliver great work. We're here to serve not just our customers, but our communities—and Toys for Tots is an organization my family has supported for many years and we're proud to stand behind their mission with Zinfinity now as well."
              </p>
              <footer className="font-semibold text-foreground">Lauren Barrett – Zinfinity</footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-4">About Marine Toys for Tots</h2>
            <p className="text-muted-foreground leading-relaxed">
              Toys for Tots, a 76-year National charitable Program run by the U.S. Marine Corps Reserve, provides year-round joy, comfort, and hope to children in need across the Nation through the gift of a new toy or book. Since 1947, the Program has evolved and grown exponentially having delivered hope and the magic of Christmas to over 291 million children in need. The Marine Toys for Tots Foundation is a not-for-profit organization authorized by the U.S. Marine Corps and the Department of Defense to provide fundraising and other necessary support for the annual Marine Corps Reserve Toys for Tots Program.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Join Us in Giving Back</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Learn more about Zinfinity's philanthropic efforts and how we serve our communities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogToysForTots;
