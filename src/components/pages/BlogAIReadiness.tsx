import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogAIReadiness = () => {

  const phases = [
    {
      title: "Assess and Prioritize",
      steps: [
        "Inventory critical processes and data domains.",
        "Identify high-impact use cases with achievable guardrails.",
        "Document current controls and the minimal deltas to go live.",
      ],
    },
    {
      title: "Establish Foundations While Delivering Value",
      steps: [
        "Stand up identity, policy, and logging baselines.",
        "Tackle data quality and access for one priority domain.",
        "Launch a micro-MVP inside the production path with well-defined SLAs.",
      ],
    },
    {
      title: "Scale with Patterns",
      steps: [
        "Convert the first success into a reusable template.",
        "Extend observability and cost management.",
        "Create an intake and governance rhythm that accelerates approvals.",
      ],
    },
  ];

  const dimensions = [
    { title: "Data baselining", desc: "Know where high-value data lives, who owns it, and how it is validated." },
    { title: "Access and identity", desc: "Apply least privilege and clear entitlements across people, services, and agents." },
    { title: "Lineage and audit", desc: "Track where data and decisions come from so you can explain outcomes." },
    { title: "Platform alignment", desc: "Select tools that fit your operating model and support your compliance posture." },
    { title: "Skills and support", desc: "Ensure that owners and operators can run, observe, and recover systems." },
  ];

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
            <span className="text-sm text-muted-foreground">September 18, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">
            AI Moved Faster Than Your Foundations
          </h1>
          <p className="text-2xl text-muted-foreground">A Practical Path to AI Readiness</p>
          <p className="text-lg text-muted-foreground mt-4">Ship value while you build the guardrails: a three-phase path to safe, repeatable AI adoption.</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Path to AI Readiness
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">The Reality Check</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The future did not arrive on schedule. It arrived early. Teams now face pressure to show AI impact while core foundations lag. Common gaps include unclear data ownership, quality drift across sources, and insufficient controls for privacy and compliance. Most organizations do not lack ideas. They lack a pragmatic way to sequence work so AI adoption stays safe and repeatable.
            </p>
            <p className="text-xl font-semibold text-foreground border-l-4 border-accent pl-6">
              Readiness is measured by time-to-production without heroics.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What "Readiness" Actually Means</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Readiness is not a slide. It is the combination of data quality, governance clarity, platform fit, and team capability required to run AI in production. You can measure it by how quickly a net-new use case gets from proposal to live service without heroics.
            </p>
            <h3 className="font-semibold text-foreground mb-4">Key Dimensions</h3>
            <div className="space-y-3">
              {dimensions.map((dim) => (
                <div key={dim.title} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground"><strong className="text-foreground">{dim.title}:</strong> {dim.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">A Readiness Sequence That Works</h2>
            <p className="text-muted-foreground mb-6">Zinfinity recommends a three-phase program that matches how enterprises adopt new capabilities.</p>
            <div className="space-y-6">
              {phases.map((phase, i) => (
                <div key={phase.title} className="flex gap-4 items-start">
                  <span className="text-3xl font-heading text-accent flex-shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-foreground mb-2">{phase.title}</p>
                    <ul className="space-y-1">
                      {phase.steps.map((step) => (
                        <li key={step} className="flex gap-2 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground text-sm">{step}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-4">The Zinfinity Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              As a customer-first integrator with global reach, Zinfinity aligns stakeholders across security, infrastructure, data, and application teams. We focus on the operational details that decide whether AI projects sustain value: entitlement mapping, policy execution, environment strategy, monitoring, and support runbooks. We bring a services mindset that respects your current investments while preparing for future use cases.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What You Can Expect in the First 60–90 Days</h2>
            <div className="space-y-3">
              {[
                "A prioritized readiness map tied to business outcomes",
                "A production-path pilot with auditability and rollback defined",
                "A reference pattern you can apply to the next three use cases",
                "A support model that clarifies who runs what, and how it scales globally",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Start With a Readiness Assessment</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            If your AI roadmap is blocked by "not ready yet," Zinfinity will help you ship value while you build the foundations that keep value alive.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogAIReadiness;
