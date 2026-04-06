import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogNutanixEnterpriseAI = () => {

  const capabilities = [
    {
      section: "Make IT Resources AI Resources",
      items: [
        { title: "Simplify LLM Operations", desc: "Deploy AI models and secure APIs effortlessly with a point-and-click interface. Choose from Hugging Face, NVIDIA NIM, or your own private models." },
        { title: "Enable Choice for Enterprise AI", desc: "Run enterprise AI securely, on-premises, or in public clouds on any CNCF-certified Kubernetes runtime while leveraging your current AI tools." },
      ],
    },
    {
      section: "Simple and Secure Endpoints and APIs",
      items: [
        { title: "API Token Creation and Management", desc: "Easily create or remove access to your LLMs with role-based access controls of secure API tokens for developers and GenAI application owners." },
        { title: "Provide API Code Samples", desc: "Create URL-ready JSON code for API-ready testing in a single click." },
      ],
    },
    {
      section: "Audit, Monitor, and Test in One Place",
      items: [
        { title: "Administrative Audit Trails", desc: "Track critical events like logins, API events, and LLM requests." },
        { title: "Monitor Everything Together", desc: "A simple dashboard to visualize everything from API request volume to Kubernetes infrastructure health." },
        { title: "AI Model Testing", desc: "Quickly query a deployed AI model for preflight testing or viability using predesigned prompts or your own questions." },
      ],
    },
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
            <span className="text-sm text-muted-foreground">June 17, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            Nutanix: Make Enterprise AI a Reality
          </h1>
          <p className="text-xl text-muted-foreground">AI & Infrastructure</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Nutanix Enterprise AI
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-heading mb-4">Deploy AI Models With Ease and Power GenAI Apps Securely</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nutanix Enterprise AI simplifies and secures GenAI, empowering enterprises to pursue the unprecedented productivity gains, revenue growth, and the value that GenAI promises. Make enterprise AI apps and data easy to deploy, operate, and develop with secure AI endpoints using AI large language models (LLMs) and APIs for generative AI.
            </p>
          </CardContent>
        </Card>

        {capabilities.map((cap) => (
          <Card key={cap.section}>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-accent mb-6">{cap.section}</h2>
              <div className="space-y-4">
                {cap.items.map((item) => (
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
        ))}

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Your Choice of LLMs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Hugging Face Model Hub", desc: "Choose from validated LLMs including Google Gemma, Meta Llama, and Mistral." },
                { title: "NVIDIA NIM", desc: "Use the NVIDIA NCG catalog with NVIDIA NIM to deploy models like Meta Llama." },
                { title: "Your Own Models", desc: "Need an unlisted or proprietary model? Upload the LLMs you need on your own." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <p className="font-semibold text-foreground mb-2">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Unleash the Power of Nutanix Enterprise AI with Zinfinity</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Zinfinity, we help organizations harness the full potential of Nutanix Enterprise AI — delivering powerful, scalable, and secure AI infrastructure that drives business outcomes. Whether you're optimizing data pipelines, deploying large language models, or scaling intelligent applications, Zinfinity ensures your Nutanix solution is expertly integrated, fine-tuned, and ready for real-world performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              {[
                "Seamless AI deployment across hybrid multicloud environments",
                "Simplified infrastructure that supports high-performance AI workloads",
                "End-to-end security and governance from core to edge",
                "Rapid time to value through Zinfinity's consultative and agile approach",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Ready to Make Enterprise AI a Reality?</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and see how Zinfinity can transform your business with Nutanix.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogNutanixEnterpriseAI;
