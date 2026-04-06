import { useState, useMemo } from "react";
import { Link } from "@/lib/router";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ArrowUpDown, Filter } from "lucide-react";

const resources = [
  {
    type: "Case Study" as const,
    slug: "school-district-ups-modernization",
    title: "School District Modernizes UPS Infrastructure Across 300+ Data Closets",
    shortTitle: "School District UPS Upgrade",
    subtitle: "K-12 Education | Power Infrastructure",
    link: "/resources/case-studies/school-district-ups-modernization",
    external: false,
    date: "March 12, 2025",
    sortDate: "2025-03-12",
  },
  {
    type: "Case Study" as const,
    slug: "training-center-it-deployment",
    title: "Training Center Launches Day-One Ready with Zero On-Site IT",
    shortTitle: "Zero-IT Training Launch",
    subtitle: "Professional Services | Turnkey Deployment",
    link: "/resources/case-studies/training-center-it-deployment",
    external: false,
    date: "April 8, 2025",
    sortDate: "2025-04-08",
  },
  {
    type: "Blog" as const,
    slug: "zinfinity-crn-2025",
    title: "Zinfinity Named to CRN's 2025 Solution Provider 500 List",
    shortTitle: "CRN 2025 Recognition",
    subtitle: "Industry Recognition",
    link: "/resources/blog/zinfinity-crn-2025",
    external: false,
    date: "June 3, 2025",
    sortDate: "2025-06-03",
  },
  {
    type: "Blog" as const,
    slug: "rethinking-ai-agent-craze",
    title: "Rethinking the AI Agent Craze: How Enterprises Turn Demos into Durable Outcomes",
    shortTitle: "Rethinking AI Agents",
    subtitle: "AI & Enterprise",
    link: "/resources/blog/rethinking-ai-agent-craze",
    external: false,
    date: "September 18, 2025",
    sortDate: "2025-09-18",
  },
  {
    type: "Blog" as const,
    slug: "ai-readiness-practical-path",
    title: "AI Moved Faster Than Your Foundations: A Practical Path to AI Readiness",
    shortTitle: "Path to AI Readiness",
    subtitle: "AI Strategy",
    link: "/resources/blog/ai-readiness-practical-path",
    external: false,
    date: "September 18, 2025",
    sortDate: "2025-09-18",
  },
  {
    type: "Blog" as const,
    slug: "ai-phishing-threat",
    title: "AI-Powered Phishing Websites: The Newest Threat Your Team Can't Afford to Miss",
    shortTitle: "AI Phishing Threats",
    subtitle: "Cybersecurity",
    link: "/resources/blog/ai-phishing-threat",
    external: false,
    date: "September 10, 2025",
    sortDate: "2025-09-10",
  },
  {
    type: "Blog" as const,
    slug: "beyond-cloud-ai-rebrand",
    title: "Beyond the Cloud-to-AI Rebrand: Building Credibility Through Outcomes",
    shortTitle: "Beyond Cloud-to-AI",
    subtitle: "AI Strategy",
    link: "/resources/blog/beyond-cloud-ai-rebrand",
    external: false,
    date: "September 17, 2025",
    sortDate: "2025-09-17",
  },
  {
    type: "Blog" as const,
    slug: "nutanix-enterprise-ai",
    title: "Nutanix: Make Enterprise AI a Reality",
    shortTitle: "Nutanix Enterprise AI",
    subtitle: "AI & Infrastructure",
    link: "/resources/blog/nutanix-enterprise-ai",
    external: false,
    date: "June 17, 2025",
    sortDate: "2025-06-17",
  },
  {
    type: "Blog" as const,
    slug: "big-data-analytics",
    title: "Big Data Analytics: Turning Data Overload into Opportunity",
    shortTitle: "Big Data Analytics",
    subtitle: "Data Strategy",
    link: "/resources/blog/big-data-analytics",
    external: false,
    date: "June 10, 2025",
    sortDate: "2025-06-10",
  },
  {
    type: "Blog" as const,
    slug: "dell-data-lakehouse",
    title: "The Five Pillars of Dell's Data Lakehouse: Transforming Data Management",
    shortTitle: "Dell Data Lakehouse",
    subtitle: "Data Management & AI",
    link: "/resources/blog/dell-data-lakehouse",
    external: false,
    date: "June 5, 2025",
    sortDate: "2025-06-05",
  },
  {
    type: "Blog" as const,
    slug: "tech-meets-bbq-baseball",
    title: "When Tech Meets BBQ and Baseball",
    shortTitle: "Tech Meets BBQ",
    subtitle: "Events & Community",
    link: "/resources/blog/tech-meets-bbq-baseball",
    external: false,
    date: "July 22, 2025",
    sortDate: "2025-07-22",
  },
  {
    type: "Blog" as const,
    slug: "toys-for-tots-sponsor",
    title: "Zinfinity Partners with Toys for Tots as a Corporate Sponsor",
    shortTitle: "Toys for Tots Sponsor",
    subtitle: "Community & Corporate Giving",
    link: "/resources/blog/toys-for-tots-sponsor",
    external: false,
    date: "April 15, 2025",
    sortDate: "2025-04-15",
  },
  {
    type: "Blog" as const,
    slug: "infinidat-rising-star",
    title: "Zinfinity Honored as Infinidat's Rising Star Partner of the Year",
    shortTitle: "Infinidat Rising Star",
    subtitle: "Industry Recognition",
    link: "/resources/blog/infinidat-rising-star",
    external: false,
    date: "April 10, 2025",
    sortDate: "2025-04-10",
  },
  {
    type: "Blog" as const,
    slug: "dell-platinum-tier",
    title: "Zinfinity Achieves Global Platinum Tier",
    shortTitle: "Dell Platinum Tier",
    subtitle: "Dell Technologies Partnership",
    link: "/resources/blog/dell-platinum-tier",
    external: false,
    date: "April 3, 2025",
    sortDate: "2025-04-03",
  },
  {
    type: "Blog" as const,
    slug: "d8taops-partnership",
    title: "D8taOps & Zinfinity Forge Strategic Partnership to Revolutionize DataOps & AI-driven Innovation",
    shortTitle: "D8taOps Partnership",
    subtitle: "Partnership & Innovation",
    link: "/resources/blog/d8taops-partnership",
    external: false,
    date: "February 11, 2025",
    sortDate: "2025-02-11",
  },
];

type SortOrder = "newest" | "oldest";
type ContentFilter = "All" | "Blog" | "Case Study";

const Resources = () => {

  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [typeFilter, setTypeFilter] = useState<ContentFilter>("All");

  const filteredAndSorted = useMemo(() => {
    let filtered = typeFilter === "All"
      ? resources
      : resources.filter((r) => r.type === typeFilter);

    return [...filtered].sort((a, b) => {
      const diff = a.sortDate.localeCompare(b.sortDate);
      return sortOrder === "newest" ? -diff : diff;
    });
  }, [sortOrder, typeFilter]);

  const contentTypes: ContentFilter[] = ["All", "Blog", "Case Study"];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading mb-6">
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Explore practical guidance, case studies, and perspectives from teams simplifying complex technology environments.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Sort Controls */}
      <section className="pt-8 pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2">
                {contentTypes.map((type) => (
                  <Button
                    key={type}
                    variant={typeFilter === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTypeFilter(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))}
              className="flex items-center gap-2"
            >
              <ArrowUpDown className="h-4 w-4" />
              {sortOrder === "newest" ? "Newest First" : "Oldest First"}
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredAndSorted.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No resources match the selected filter.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredAndSorted.map((resource, index) => {
                const cardContent = (
                  <Card className="hover-lift shadow-card overflow-hidden h-full">
                    <div className="overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-4 py-3">
                      <p className="text-base md:text-lg font-heading font-bold text-white text-center leading-snug">
                        {resource.shortTitle}
                      </p>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">
                          {resource.type}
                        </Badge>
                        {resource.date && (
                          <span className="text-xs text-muted-foreground">{resource.date}</span>
                        )}
                      </div>
                      <h2 className="text-xl font-heading group-hover:text-accent transition-colors mb-2">
                        {resource.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {resource.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                );

                return resource.external ? (
                  <a
                    key={resource.slug}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link
                    key={resource.slug}
                    to={resource.link}
                    className="group animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-accent-foreground mb-6">
            Looking for something specific?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Our team is happy to answer your questions directly.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Ask Us Anything</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Resources;
