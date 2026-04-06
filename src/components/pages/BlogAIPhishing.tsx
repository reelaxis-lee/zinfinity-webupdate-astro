import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogAIPhishing = () => {
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
            <span className="text-sm text-muted-foreground">September 10, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            AI-Powered Phishing Websites: The Newest Threat Your Team Can't Afford to Miss
          </h1>
          <p className="text-xl text-muted-foreground">Cybersecurity</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            AI Phishing Threats
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cybercriminals are getting smarter—and scarier. With AI tools at their disposal, hackers can spin up spoof websites in minutes that look shockingly real. These aren't the obvious fakes we used to warn our teams about. They're polished, convincing, and designed to trick even the most careful employee into clicking.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              One wrong click can open the door to ransomware, stolen data, and reputation damage that no business can afford.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">The Cost of Inaction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ignoring this evolving threat is like leaving your front door unlocked in a bad neighborhood. Sooner or later, someone will take advantage. Businesses that fail to prepare their teams aren't just at risk of financial loss—they're risking customer trust, compliance standing, and their brand's reputation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">The Solution: Zinfinity's Managed Security Awareness Program</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              That's where Zinfinity steps in. Our <strong className="text-foreground">Managed Security Awareness Program</strong> is designed to run seamlessly in the background while building a culture of vigilance in your organization.
            </p>
            <div className="space-y-4">
              {[
                { title: "Automated Training", desc: "Keeps employees updated on the latest threats without extra effort from your IT team." },
                { title: "Real-World Simulations", desc: "Condition your team to spot—and report—suspicious emails and spoof sites." },
                { title: "Minimal Cost, Maximum Protection", desc: "A cost-effective way to strengthen your organization's first line of defense." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">The Plan</h2>
            <ol className="space-y-4">
              {[
                { step: "Assess", desc: "We evaluate your current awareness posture." },
                { step: "Implement", desc: "Launch a tailored program that trains and tests employees automatically." },
                { step: "Strengthen", desc: "Watch your organization shift from vulnerable targets to vigilant defenders." },
              ].map((item, i) => (
                <li key={item.step} className="flex gap-4 items-start">
                  <span className="text-xl font-heading text-accent flex-shrink-0">{i + 1}.</span>
                  <div>
                    <p className="font-semibold text-foreground">{item.step}</p>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <p className="text-lg italic text-muted-foreground text-center leading-relaxed">
              "Imagine a workplace where every suspicious email gets flagged, not clicked. Where employees feel confident spotting threats before they cause harm. With Zinfinity's Managed Security Awareness Program, you can rest easy knowing your team isn't your weakest link—they're your first and strongest line of defense."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Protect Your Team Before It's Too Late</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Get started with Zinfinity's Managed Security Awareness Program today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogAIPhishing;
