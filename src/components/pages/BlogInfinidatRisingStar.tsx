import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogInfinidatRisingStar = () => {
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
            <span className="text-sm text-muted-foreground">April 10, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            Zinfinity Honored as Infinidat's Rising Star Partner of the Year
          </h1>
          <p className="text-xl text-muted-foreground">Industry Recognition</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Infinidat Rising Star
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Zinfinity, we pride ourselves on bringing industry-leading solutions to the table—and our recent recognition by Infinidat is a testament to that commitment. We're proud to share that <strong className="text-foreground">Zinfinity has been named Infinidat's 2024 Partner of the Year – Rising Star Winner</strong>, a prestigious honor awarded to a valued new partner who is not only driving new business but also delivering exceptional value and support to clients.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Why This Recognition Matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Infinidat's Rising Star Partner of the Year award highlights partnerships that are built for the long haul—driven by innovation, collaboration, and measurable results. In just a short time, Zinfinity has made significant strides in leveraging Infinidat's enterprise storage solutions to help businesses manage their growing data needs with confidence and efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From day one, our teams have been aligned on a shared mission: to enable scalable, cyber-resilient storage strategies that empower digital enterprises. Together, we're helping organizations operate at multi-petabyte scale with 100% availability, industry-leading cyber resilience, and the lowest total cost of ownership in the storage industry.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What Infinidat Had to Say</h2>
            <blockquote className="border-l-4 border-accent pl-6 mb-8">
              <p className="text-lg italic text-muted-foreground mb-4">
                "We celebrate our partner Zinfinity for winning 'Partner of the Year – Rising Star' for their exceptional efforts to deliver outstanding value and support for their end-user customers while growing their business for longevity with Infinidat's award-winning enterprise storage solutions. Zinfinity exemplifies the type of partner that exceeds expectations in every way, and their team is a pleasure to work with. We look forward to building on the momentum that we have created in partnership together and seeing the 'star' of Zinfinity rise even further for years to come."
              </p>
              <footer className="font-semibold text-foreground">Mitch Diodato – Global Channel Leader, Infinidat</footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">A Message from Our CEO</h2>
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="text-lg italic text-muted-foreground mb-4">
                "We're honored to be recognized by Infinidat as their Rising Star Partner of the Year. This award is a testament to the dedication of our team and our shared mission to bring innovative, enterprise-grade technology to businesses that need to scale securely and efficiently. We're proud of what we've built with Infinidat and excited for what's ahead."
              </p>
              <footer className="font-semibold text-foreground">Joe Barrett – CEO, Zinfinity</footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-4">Looking Ahead</h2>
            <p className="text-muted-foreground leading-relaxed">
              As we continue to grow this partnership, we remain focused on delivering high-value, enterprise-grade solutions that meet the complex needs of today's data-driven organizations. This award isn't just a milestone—it's motivation to keep pushing boundaries and exceeding expectations. Thank you to the entire Infinidat team for this incredible recognition. We're just getting started. 🚀
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Explore Enterprise Storage with Zinfinity</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Learn more about our enterprise storage solutions powered by Infinidat.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogInfinidatRisingStar;
