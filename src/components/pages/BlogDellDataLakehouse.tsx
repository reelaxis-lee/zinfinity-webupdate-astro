import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";


const BlogDellDataLakehouse = () => {

  const pillars = [
    {
      num: "1",
      title: "Eliminate Data Silos",
      body: "In today's multicloud reality, data is often scattered across different environments, making it difficult to access and analyze. Dell's solution enhances data exploration with secure, federated querying powered by Starburst. This approach accelerates time to insights by up to 90%, revealing usage patterns that enable smarter data centralization into the data lakehouse. A telecommunications company, for example, used Dell's Data Lakehouse to integrate data from over a hundred sources, dramatically reducing query times and enhancing customer service through faster insights.",
    },
    {
      num: "2",
      title: "Unleash Performance at Scale",
      body: "Dell's Data Lakehouse promises unparalleled performance at scale. By separating compute and storage with a distributed, massively parallelized engine, it achieves peak performance levels. This scalability ensures that as your data grows, your ability to analyze and derive insights grows too. A financial services firm leveraged this pillar to process transactional data in real-time, significantly improving fraud detection rates without sacrificing speed or efficiency.",
    },
    {
      num: "3",
      title: "Take Control of Your Data",
      body: "Taking control of your data is paramount in today's regulatory and competitive environment. Dell's Data Lakehouse is built on 100% open format, adhering to modern industry standards like Parquet, Avro, ORC, and table formats like Iceberg and Delta Lake. With built-in data governance, businesses can manage access, privacy, and encryption with ease. A healthcare provider used these capabilities to securely manage patient data, ensuring compliance with global data protection regulations while facilitating advanced medical research.",
    },
    {
      num: "4",
      title: "Democratize Insights",
      body: "Dell's vision includes democratizing insights by providing data teams with self-service access. This approach fosters a culture of collaboration and exploration, moving businesses forward. Integrating with a wide ecosystem of BI, AI, and ML tools, it enables innovation across the organization. A retail chain utilized this pillar to empower their marketing team, enabling them to directly access customer data and analytics, resulting in highly personalized marketing campaigns and improved sales.",
    },
    {
      num: "5",
      title: "One Simplified Platform",
      body: "Dell offers one simplified platform designed to streamline deployment, lifecycle management, and support services. This turnkey solution, encompassing compute, software, and storage components, delivers a cost-effective and predictable outlay versus cloud-based options. An energy company adopted this platform to consolidate their data management tools, reducing operational costs by 40% and significantly speeding up their time to insights for energy distribution optimization.",
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
            <span className="text-sm text-muted-foreground">June 5, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
            The Five Pillars of Dell's Data Lakehouse: Transforming Data Management
          </h1>
          <p className="text-xl text-muted-foreground">Data Management & AI</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 max-w-4xl mb-12">
        <div className="rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4">
          <p className="text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug">
            Dell Data Lakehouse
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-20 space-y-8">
        <Card>
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              In the ever-evolving digital landscape, businesses face the daunting challenge of managing vast amounts of data spread across various platforms and environments. Dell Technologies recognizes these challenges and introduces a groundbreaking solution: the <strong className="text-foreground">Dell Data Lakehouse</strong>. This innovative approach to data management is built on five key promises that aim to revolutionize how businesses access, analyze, and leverage their data.
            </p>
          </CardContent>
        </Card>

        {pillars.map((pillar) => (
          <Card key={pillar.num}>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-heading text-accent opacity-60">{pillar.num}</span>
                <h2 className="text-2xl font-bold text-accent mt-3">{pillar.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{pillar.body}</p>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-6">Real-World Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Dell Data Lakehouse is not just a theoretical construct; it's a practical solution that has been applied across industries with remarkable success. From telecommunications to retail, companies are experiencing the transformative power of Dell's innovative approach to data management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dell's Data Lakehouse represents a significant leap forward in data management technology. Its focus on eliminating silos, enhancing performance, maintaining control, democratizing insights, and simplifying the data platform landscape is a testament to Dell's commitment to driving real business outcomes through innovation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-accent mb-4">Ready to Transform Your Data Strategy? Let Zinfinity Be Your Guide.</h2>
            <p className="text-muted-foreground leading-relaxed">
              As a trusted Dell Technologies Platinum partner, Zinfinity specializes in crafting and integrating data solutions that align perfectly with your business goals. From eliminating data silos to scaling performance and securing your information, our team can tailor a solution that meets your unique needs — efficiently, securely, and with measurable results.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">Let's Simplify, Secure, and Supercharge Your Data</h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Connect with Zinfinity today to explore how we can help your organization harness the power of Dell's Data Lakehouse.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default BlogDellDataLakehouse;
