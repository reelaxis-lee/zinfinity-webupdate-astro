import { Link } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Quote } from "lucide-react";


const CaseStudyTrainingCenter = () => {
  const solutionItems = [
    "Enterprise networking and Wi-Fi",
    "Compute, switching, and PDUs",
    "Phones, cameras, and access points",
    "Flat-panel displays throughout the facility",
    "Centralized AV and camera control software",
  ];

  const successItems = [
    "True turnkey delivery — design, install, and support handled end-to-end",
    "Broad technology footprint deployed — compute, network, wireless, AV, security, and conferencing systems",
    "Zero on-site IT dependency — solutions delivered while the customer team operated remotely",
    "Facility ready on day one — fully prepared to support training, collaboration, and growth",
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <Link
              to="/resources/case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-sm text-accent font-medium">
                Professional Services | Turnkey Deployment
              </p>
              <span className="text-sm text-muted-foreground">April 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              From Zero IT to Day-One Ready: How Pearce Services Launched a Fully Operational Training Center Without an On-Site Tech Team
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
              <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
                Zero-IT Training Launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Description */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading text-accent mb-2">Pearce Services</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A national facilities and critical-infrastructure services provider preparing to launch a brand-new Training & Briefing Center outside Dallas—designed to support hands-on training and executive briefings from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Problem */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent uppercase tracking-widest">The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Pearce Services faced a high-stakes challenge:
                </p>
                <ul className="space-y-2 text-lg text-muted-foreground mb-4">
                  <li>• A new facility in a market with zero existing technology staff</li>
                  <li>• No local infrastructure in place</li>
                  <li>• A tight timeline with no room for delays or missteps</li>
                  <li>• A need for multiple technologies to work seamlessly together—networking, compute, wireless, security, AV, and collaboration</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The risk was clear: without a reliable, integrated technology foundation, the facility wouldn't be ready when the doors opened.
                </p>
              </CardContent>
            </Card>

            {/* Zinfinity & The Plan */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent uppercase tracking-widest">Zinfinity's Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Zinfinity stepped in as a single, turnkey technology partner, bringing the experience, structure, and execution needed to eliminate complexity and risk.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Zinfinity owned the entire lifecycle - design, installation, and support - delivering a fully integrated environment that just worked.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The solution included:
                </p>
                <ul className="space-y-3">
                  {solutionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  All systems were deployed into a clean, scalable IT foundation—delivered and fully operational while the customer's team remained remote.
                </p>
              </CardContent>
            </Card>

            {/* The Success */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent uppercase tracking-widest">The Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  With Zinfinity leading execution, Pearce Services achieved:
                </p>
                <ul className="space-y-4">
                  {successItems.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Customer Quote */}
            <Card className="shadow-card bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary uppercase tracking-widest">The Customer's Voice</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-secondary mb-4" />
                <blockquote className="text-xl leading-relaxed italic mb-6">
                  "Our technology team was informed we were building a new Training and Briefing Center outside of Dallas, a location where Pearce had zero technology resources. We partnered with Zinfinity to design, install and support all components of our technology including compute, network and conferencing systems. Zinfinity executed flawlessly and delivered all solutions while our team was remote."
                </blockquote>
                <p className="text-secondary font-medium">
                  — Rick Fitzgerald
                </p>
              </CardContent>
            </Card>

            {/* The Transformation */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent uppercase tracking-widest">The Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By acting as a true extension of Pearce Services' team, Zinfinity removed friction, compressed timelines, and delivered certainty. No handoffs. No delays. No surprises.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  The result: a modern, fully operational training and briefing center—ready to perform from day one.
                </p>
              </CardContent>
            </Card>

            {/* The Zinfinity Promise */}
            <div className="text-center py-8">
              <h3 className="text-2xl font-heading text-foreground mb-4">The Zinfinity Promise</h3>
              <p className="text-xl text-muted-foreground italic">
                Zinfinity delivers turnkey technology—Designed, deployed, and done right.
              </p>
              <p className="text-xl text-accent font-medium mt-2">
                Peace of mind. Powered by technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">
            Need turnkey IT deployment?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Let Zinfinity handle your next facility deployment from start to finish.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyTrainingCenter;
