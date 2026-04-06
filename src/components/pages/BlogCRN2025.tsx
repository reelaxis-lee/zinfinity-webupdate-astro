import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogCRN2025 = () => {
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
            <span className="text-sm text-muted-foreground">June 3, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            Zinfinity Named to CRN's 2025 Solution Provider 500 List
          </h1>
          <p className="text-xl text-muted-foreground">Industry Recognition</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            CRN 2025 Recognition
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Southlake, TX</strong> — Zinfinity, a global IT solutions integrator, is proud to announce that CRN®, a brand of The Channel Company, has named Zinfinity to its <strong className="text-foreground">2025 Solution Provider 500 list</strong>, which ranks the top technology integrators, IT consultants, and solution providers across North America.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">About the Award</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Solution Provider 500 is CRN's annual ranking of the leading IT channel partner organizations that have earned a place among the industry's most influential and innovative. These companies are recognized for their ability to design, build, and support solutions that help businesses maximize technology investments, secure their data, and accelerate transformation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">From the CEO</h2>
            <blockquote className="border-l-4 border-accent pl-6 mb-8">
              <p className="text-lg italic text-muted-foreground mb-4">
                "At Zinfinity, we combine global reach with boutique-style agility—delivering technology solutions that help enterprises and SMBs modernize infrastructure, secure their environments, and harness the power of data and AI. Being included on CRN's 2025 Solution Provider 500 list is a testament to the trust of our customers and the relentless dedication of the Z Team. We are honored by this recognition and motivated to keep delivering secure, scalable, and results-driven IT solutions for organizations worldwide."
              </p>
              <footer className="font-semibold text-foreground">Joe Barrett – CEO, Zinfinity</footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">From CRN</h2>
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="text-lg italic text-muted-foreground mb-4">
                "The Solution Provider 500 list spotlights the technology integrators, managed service providers, value-added resellers and IT consulting firms who bring in the most revenue by leading the way in business and service innovation. Recognition is reserved for companies demonstrating an unwavering commitment to business agility and sustained growth through rapidly changing industry needs and technology advancements."
              </p>
              <footer className="font-semibold text-foreground">Jennifer Follett – VP, U.S. Content & Executive Editor, CRN, The Channel Company</footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Zinfinity: Trusted IT Solutions Partner</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zinfinity has earned its reputation by consistently going above and beyond for clients. As a single-source IT solutions integrator, the company partners with industry leaders such as Dell Technologies, Juniper, CrowdStrike, APC, Nutanix, and Infinidat to deliver end-to-end solutions in data, AI/ML, infrastructure, and cybersecurity. With operations spanning the U.S., EMEA, and APAC, Zinfinity helps customers scale globally without compromising on security or speed.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">See Why We're on the CRN 500</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Partner with a team that delivers secure, scalable, and agile IT solutions designed to move your business forward.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogCRN2025;
