import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogBeyondCloudAI = () => {

  const practicalModel = [
    "Start with a real workflow: Choose a process that matters to the business and has measurable outcomes.",
    "Map the guardrails: Define identity, data scope, privacy needs, and failure handling.",
    "Integrate, do not bolt on: Connect AI components to your existing systems of record and observability stack.",
    "Prove value, then templatize: Deliver a production-path win, document it, and make it repeatable.",
    "Grow skills and ownership: Enable the teams who will live with the solution after launch.",
  ];

  const practiceExamples = [
    "Modernizing a service process with AI-assisted triage while preserving security policies",
    "Enriching analytics with governed data pipelines that feed intelligent decisions",
    "Automating routine decision trees with human approval steps where risk is higher",
    "Rolling out globally with region-aware controls and cost visibility",
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
            <span className="text-sm text-muted-foreground">September 17, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            Beyond the Cloud-to-AI Rebrand
          </h1>
          <p className="text-2xl text-muted-foreground">Building Credibility Through Outcomes</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Beyond Cloud-to-AI
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">The Market Narrative</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many firms that built their reputation in infrastructure or cloud are now positioning as AI companies. Some of that shift is authentic growth. Some of it is marketing. Buyers feel the difference quickly when discovery questions get shallow or when proposed solutions repackage old services with new labels.
            </p>
            <p className="text-xl font-semibold text-foreground border-l-4 border-accent pl-6">
              Credibility comes from outcomes, not labels.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What Buyers Actually Need</h2>
            <p className="text-muted-foreground leading-relaxed">
              Enterprises are not looking for a new banner. They want partners who understand the full journey from secure infrastructure to data readiness to applied intelligence. That journey crosses identity, networking, governance, and change management. It also requires integration with existing tools and teams, not just a new platform.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">How To Spot Real Capability</h2>
            <div className="space-y-3">
              {[
                { label: "Clear linkage", desc: "from business objective to technical design" },
                { label: "Specifics", desc: "about data sources, quality controls, and ownership" },
                { label: "Operational runbooks", desc: "and escalation paths, not just diagrams" },
                { label: 'Willingness to say "no"', desc: "when a shortcut creates risk" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground"><strong className="text-foreground">{item.label}</strong> {item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-4">Where Zinfinity Stands</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zinfinity has long been a global integrator that advocates for customers first. We design and deliver outcome-based solutions across security, cloud, data engineering, and digital workplace. Our evolution into AI is grounded in the same principles that built our credibility: listening first, designing for operations, and being accountable for results.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">A Practical Model for Adopting AI Responsibly</h2>
            <ol className="space-y-3">
              {practicalModel.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-xl font-heading text-accent flex-shrink-0">{i + 1}.</span>
                  <p className="text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What This Looks Like in Practice</h2>
            <div className="space-y-3">
              {practiceExamples.map((ex) => (
                <div key={ex} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{ex}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-4">Credibility Over Optics</h2>
            <p className="text-muted-foreground leading-relaxed">
              Rebrands come and go. Durable trust comes from delivering outcomes that survive audits, scale with demand, and remain adaptable when tools change. That is how Zinfinity approaches every engagement. The message to customers and partners is consistent: we will bring the right technology, align it to your reality, and stand behind the result.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Execution Over Optics</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            If you are evaluating partners for AI initiatives, bring us a workflow that matters. We will show you a plan that turns intent into impact.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Schedule a Readiness Assessment</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogBeyondCloudAI;
