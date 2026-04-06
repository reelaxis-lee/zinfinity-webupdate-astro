import { Link } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";


const CaseStudySchoolDistrict = () => {
  const businessImpact = [
    "Confidence that critical security systems remain operational during power disruptions",
    "District-wide standardization across 300+ data closets, reducing complexity and operational risk",
    "Centralized visibility into power health and performance across 37 campuses",
    "Reduced maintenance requirements and longer lifecycle through lithium-ion UPS technology",
    "A scalable, remotely managed power foundation that supports future security initiatives",
  ];

  const whyZinfinityPoints = [
    "True turnkey delivery: design, deployment, and execution owned end-to-end",
    "Proven experience scaling technology across complex, multi-campus environments",
    "Deep expertise in critical infrastructure supporting safety and security systems",
    "Standardization-first approach that reduces risk and operational burden",
    "A partner focused on outcomes—not just products—delivering peace of mind through technology",
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
                K-12 Education | Power Infrastructure
              </p>
              <span className="text-sm text-muted-foreground">March 12, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              Zinfinity Modernizes School District UPS Infrastructure to Support Advanced Security Initiatives
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
                School District UPS Upgrade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* The Challenge */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent uppercase tracking-widest">The Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A large Texas school district serving approximately 30,000 students across 37 campuses was rolling out advanced security systems designed to protect students and staff.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  However, the district's aging UPS infrastructure—distributed across hundreds of data closets—introduced significant risk. During power disruptions, critical security systems lacked the uptime, visibility, and centralized control required to ensure continuous operation. Without modernization, the district faced the possibility of system failures at the exact moments reliability mattered most.
                </p>
              </CardContent>
            </Card>

            {/* The Solution */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent uppercase tracking-widest">Zinfinity's Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Zinfinity served as the district's single, turnkey technology partner, delivering a comprehensive UPS modernization initiative. The team designed, standardized, delivered, and installed modern APC lithium-ion UPS systems across more than 300 data closets spanning 30+ schools. The new infrastructure introduced intelligent, network-connected UPS systems with centralized monitoring and remote management through APC's cloud-based EcoStruxure IT platform. This replaced aging, opaque power systems with a resilient, scalable foundation built for visibility, control, and long-term reliability.
                </p>
              </CardContent>
            </Card>

            {/* Power Infrastructure at Scale */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent uppercase tracking-widest">Power Infrastructure at Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-foreground">Before: Fragmented & Obsolete</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Aging UPS in 300+ Data Closets</li>
                      <li>• Manual Checks</li>
                      <li>• No Central Visibility</li>
                      <li>• Higher Failure Risk</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-foreground">After: Modernized & Unified</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• APC Lithium-ion UPS in 300+ Closets</li>
                      <li>• Reliable Uptime</li>
                      <li>• Centralized Monitoring</li>
                      <li>• Standardized & Managed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Impact */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-accent uppercase tracking-widest">Powering Safety with Modern Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {businessImpact.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  By upgrading to intelligent, networked UPS technology, Zinfinity ensured the district's security investments are protected by infrastructure designed for reliability, visibility, and sustainability. The result is a modern power foundation that allows IT leaders to operate with confidence—knowing critical systems will perform when students and staff need them most.
                </p>
              </CardContent>
            </Card>

            {/* Why Zinfinity */}
            <Card className="shadow-card bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary uppercase tracking-widest">Why Zinfinity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {whyZinfinityPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
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
            Ready to modernize your infrastructure?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zinfinity can help your organization achieve similar results.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default CaseStudySchoolDistrict;
