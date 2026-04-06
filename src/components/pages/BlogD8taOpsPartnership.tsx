import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogD8taOpsPartnership = () => {
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
            <span className="text-sm text-muted-foreground">February 11, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            D8taOps & Zinfinity Forge Strategic Partnership to Revolutionize DataOps & AI-driven Innovation
          </h1>
          <p className="text-xl text-muted-foreground">Partnership & Innovation</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            D8taOps Partnership
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong className="text-foreground">Portland, OR</strong> — <strong className="text-foreground">D8taOps</strong>, a leader in DataOps automation and AI-driven solutions, is thrilled to announce a groundbreaking partnership with <strong className="text-foreground">Zinfinity</strong>, a cutting-edge technology solutions provider specializing in real-time data integration, cloud transformation, and AI enablement. This collaboration will redefine how enterprises unlock the power of their data at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With the ever-increasing demand for frictionless data management, AI acceleration, and real-time analytics, this partnership combines D8taOps' expertise in D8taApps and intelligent automation with Zinfinity's deep knowledge of digital transformation, security, and advanced cloud solutions. Together, the two companies aim to provide enterprises with next-generation data infrastructure that is scalable, secure, and AI-ready.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">What This Partnership Means for Enterprises</h2>
            <div className="space-y-4">
              {[
                { title: "Frictionless DataOps", desc: "Seamless automation for data ingestion, transformation, and orchestration." },
                { title: "AI-Driven Insights", desc: "Real-time AI/ML capabilities to power business intelligence and innovation." },
                { title: "Cloud & Security Excellence", desc: "Scalable, compliant, and secure cloud architectures to future-proof enterprise data strategies." },
                { title: "End-to-End Digital Transformation", desc: "A complete ecosystem for enterprises to modernize data operations and harness AI for competitive advantage." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">From the CEOs</h2>
            <blockquote className="border-l-4 border-accent pl-6 mb-8">
              <p className="text-lg italic text-muted-foreground mb-4">
                "Partnering with Zinfinity allows us to expand our capabilities and bring even more innovation to enterprises looking to streamline data ingestion, governance, and AI-driven decision-making. By integrating our D8's framework with Zinfinity's next-gen cloud and security solutions, we're helping organizations accelerate their AI journeys without the complexity."
              </p>
              <footer className="font-semibold text-foreground">Troy Wyatt – Chief Data Officer, D8taOps</footer>
            </blockquote>
            <blockquote className="border-l-4 border-accent pl-6">
              <p className="text-lg italic text-muted-foreground mb-4">
                "With D8taOps, we're delivering a new standard for AI-powered data automation and real-time insights. Together, we're enabling businesses to overcome data silos, security challenges, and cloud complexity, empowering them with scalable, AI-ready infrastructure that drives real impact."
              </p>
              <footer className="font-semibold text-foreground">Joe Barrett – CEO, Zinfinity</footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-4">About D8taOps</h2>
            <p className="text-muted-foreground leading-relaxed">
              D8taOps is a pioneering DataOps automation company that enables enterprises to build, scale, and manage AI-driven data applications (D8's) with frictionless deployment, governance, and security. Learn more at d8taops.cloud.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Ready to Transform Your Data Strategy?</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's explore how Zinfinity's partnerships and expertise can power your AI journey.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogD8taOpsPartnership;
