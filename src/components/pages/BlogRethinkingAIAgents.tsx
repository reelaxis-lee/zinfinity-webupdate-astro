import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogRethinkingAIAgents = () => {

  const stackRequirements = [
    { title: "Governance at execution time", desc: "Policies must enforce identity, data access, and lineage during runtime, not just at design time." },
    { title: "Observability with business context", desc: "Visibility into agent decisions, tool calls, and data transformations tied back to the business process." },
    { title: "Resilience by design", desc: "Tolerate model changes, API shifts, and provider outages without extensive rewrites." },
    { title: "Cross-environment continuity", desc: "Hybrid and multi-cloud are facts. Your orchestration layer must run consistently across them." },
    { title: "Human-in-the-loop controls", desc: "Add approval and exception paths where risk and criticality demand it." },
  ];

  const successMetrics = [
    "Time to first production workflow measured in weeks",
    "Policy enforcement and audit logs available from day one",
    "Clear rollback and fallbacks for each critical step",
    "Operators and business owners can interpret system behavior without mystery",
  ];

  const helpAreas = [
    "Architecture and platform selection for operable AI agents",
    "Data access, lineage, and security control integration",
    "Observability design that ties technical events to business KPIs",
    "Program governance, change management, and global rollout",
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
            Rethinking the AI Agent Craze
          </h1>
          <p className="text-2xl text-muted-foreground">How Enterprises Turn Demos Into Durable Outcomes</p>
          <p className="text-lg text-muted-foreground mt-4">From flashy pilots to production truth—what an enterprise-ready agent stack really needs.</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Rethinking AI Agents
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">The Market Signal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Agent platforms and orchestration frameworks are everywhere. They promise multi-step automation, tool connectivity, and faster build cycles. The energy is real. What matters to an enterprise audience is different from what excites a demo room. The question is not "can we chain tools" but "can this run safely at scale across complex data, multiple clouds, and regulated workflows."
            </p>
            <p className="text-xl font-semibold text-foreground border-l-4 border-accent pl-6">
              Production, not the demo room, is the measure of value.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Why Proofs of Concept Stall</h2>
            <p className="text-muted-foreground leading-relaxed">
              Many teams can stand up a pilot. Production is where initiatives slow down. The usual friction points show up quickly: security reviews, data classification gaps, missing audit trails, limited observability, and brittle vendor dependencies. These are not add-ons. They are the core properties that determine whether an AI initiative survives contact with reality.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What an Enterprise-Ready Stack Requires</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To move beyond pilot purgatory, organizations need a build approach that treats operations as a first-class requirement.
            </p>
            <div className="space-y-4">
              {stackRequirements.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
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
            <h2 className="text-2xl font-bold text-accent mb-4">The Zinfinity Perspective</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zinfinity is a global technology integrator. We advocate for the customer's outcomes across infrastructure, security, data engineering, and service delivery. Our role is to make AI useful and durable inside real organizations. That means we start at the boundary where compliance, networking, identity, and data governance meet new AI capabilities. We then integrate the right platforms and services, align with your existing tools, and design for supportability across regions and teams.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">From Sprint to Steady State</h2>
            <p className="text-muted-foreground mb-6">A healthy program balances speed with operational truth.</p>
            <ol className="space-y-4">
              {[
                { step: "Discovery and guardrails", desc: "Map critical processes, risk zones, and data boundaries. Define what must be observable and auditable." },
                { step: "Reference architecture", desc: "Pick building blocks that are portable and pluggable. Avoid single-vendor dead ends." },
                { step: "Micro-MVP in the production path", desc: "Prove value in a scoped workflow that touches production controls, not only a sandbox." },
                { step: "Expand with templates", desc: "Lift and repeat patterns for new use cases, including security, cost, and reliability checks." },
              ].map((item, i) => (
                <li key={item.step} className="flex gap-4 items-start">
                  <span className="text-xl font-heading text-accent flex-shrink-0">{i + 1}.</span>
                  <div>
                    <p className="font-semibold text-foreground">{item.step}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What Success Looks Like</h2>
            <div className="space-y-3 mb-8">
              {successMetrics.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-accent mb-4">Where Zinfinity Helps Now</h2>
            <div className="space-y-3">
              {helpAreas.map((item) => (
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
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Move From Demo to Dependable</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            If you have pilots that cannot clear the last mile, start with an operability review. We will surface the minimum set of controls and design changes needed.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogRethinkingAIAgents;
