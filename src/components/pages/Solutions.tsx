import { Cloud, Shield, Server, Headset, BarChart3 } from "lucide-react";
import { Link } from "@/lib/router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Solutions = () => {
  const solutions = [{
    icon: BarChart3,
    title: "AI Readiness & Data",
    headline: "Turning data into clarity and better decisions",
    description: "Zinfinity helps turn data into insight through reporting, analytics, and intelligence that leaders can actually use. Automation and AI are applied to save time, reduce effort, or improve outcomes.",
    capabilities: ["Data architecture and platforms", "Data pipelines and governance", "Analytics and business intelligence", "Applied automation, artificial intelligence, and machine learning"]
  }, {
    icon: Cloud,
    title: "Cloud Engineering",
    headline: "Cloud environments that support real work",
    description: "Zinfinity helps organizations design and operate cloud environments that are clear, consistent, and built for real workloads across private, hybrid, and public models. We focus on making cloud usable, secure, and reliable, not just available.",
    capabilities: ["Private, hybrid, and public cloud design", "Application and workload platforms", "Cloud migrations and modernization", "Governance and operational readiness"]
  }, {
    icon: Shield,
    title: "Cybersecurity",
    headline: "Keeping your business protected without slowing it down",
    description: "Security should support the business, not get in the way of it. Zinfinity helps organizations protect users, systems, applications, and cloud environments with security that fits how people actually work.",
    capabilities: ["Endpoint, identity, and access protection", "Cloud and application security", "Threat detection and response", "Security architecture and risk reduction"]
  }, {
    icon: Server,
    title: "The Stack",
    headline: "The systems your business depends on every day",
    description: "Zinfinity delivers the core infrastructure that keeps organizations running. We bring experience and clarity to environments that are often overlooked until something breaks. Our focus is stability, performance, and simplicity.",
    capabilities: ["Networking, compute, and storage", "Core data center platforms", "Endpoint and workplace systems", "Performance optimization and modernization"]
  }, {
    icon: Headset,
    title: "Managed Services",
    headline: "The people who show up and see it through",
    description: "Zinfinity provides experienced engineers, architects, and leaders who stay engaged and accountable from planning through execution. This is where peace of mind becomes real.",
    capabilities: ["Architecture, implementation, and integration", "Program and project leadership", "Managed and operational services", "On-demand engineers, architects, and specialists"]
  }];
  return <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-background via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-6">
              Our Solutions 
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Zinfinity delivers integrated technology solutions for complex, modern environments.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Talk to an Architect</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {solutions.map((solution, index) => <Card key={index} className="hover-lift shadow-card overflow-hidden" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <CardHeader className="pt-10 pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <solution.icon className="w-10 h-10 text-accent" />
                    </div>
                    <CardTitle className="text-4xl md:text-5xl tracking-wide">{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg leading-relaxed tracking-wide">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-10">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {solution.capabilities.map((capability, idx) => <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-base tracking-wide">{capability}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">
            Ready for technology that feels simpler?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            If your environment feels overly complex or harder than it should be, let's talk.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Talk to an Architect</Link>
          </Button>
        </div>
      </section>

    </div>;
};
export default Solutions;