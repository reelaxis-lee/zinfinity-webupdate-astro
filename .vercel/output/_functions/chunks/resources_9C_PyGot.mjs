import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_CBLO9Nzd.mjs';
import { $ as $$ContentLayout } from './ContentLayout_C23CVu68.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { L as Link } from './router_Bx0mhq87.mjs';
import { C as Card, d as CardContent } from './card_CgFSqawW.mjs';
import { B as Badge } from './badge_BQE2DtOc.mjs';
import { B as Button } from './button_D6Qh95ed.mjs';
import { Filter, ArrowUpDown } from 'lucide-react';

const resources = [
  {
    type: "Case Study",
    slug: "school-district-ups-modernization",
    title: "School District Modernizes UPS Infrastructure Across 300+ Data Closets",
    shortTitle: "School District UPS Upgrade",
    subtitle: "K-12 Education | Power Infrastructure",
    link: "/resources/case-studies/school-district-ups-modernization",
    external: false,
    date: "March 12, 2025",
    sortDate: "2025-03-12"
  },
  {
    type: "Case Study",
    slug: "training-center-it-deployment",
    title: "Training Center Launches Day-One Ready with Zero On-Site IT",
    shortTitle: "Zero-IT Training Launch",
    subtitle: "Professional Services | Turnkey Deployment",
    link: "/resources/case-studies/training-center-it-deployment",
    external: false,
    date: "April 8, 2025",
    sortDate: "2025-04-08"
  },
  {
    type: "Blog",
    slug: "zinfinity-crn-2025",
    title: "Zinfinity Named to CRN's 2025 Solution Provider 500 List",
    shortTitle: "CRN 2025 Recognition",
    subtitle: "Industry Recognition",
    link: "/resources/blog/zinfinity-crn-2025",
    external: false,
    date: "June 3, 2025",
    sortDate: "2025-06-03"
  },
  {
    type: "Blog",
    slug: "rethinking-ai-agent-craze",
    title: "Rethinking the AI Agent Craze: How Enterprises Turn Demos into Durable Outcomes",
    shortTitle: "Rethinking AI Agents",
    subtitle: "AI & Enterprise",
    link: "/resources/blog/rethinking-ai-agent-craze",
    external: false,
    date: "September 18, 2025",
    sortDate: "2025-09-18"
  },
  {
    type: "Blog",
    slug: "ai-readiness-practical-path",
    title: "AI Moved Faster Than Your Foundations: A Practical Path to AI Readiness",
    shortTitle: "Path to AI Readiness",
    subtitle: "AI Strategy",
    link: "/resources/blog/ai-readiness-practical-path",
    external: false,
    date: "September 18, 2025",
    sortDate: "2025-09-18"
  },
  {
    type: "Blog",
    slug: "ai-phishing-threat",
    title: "AI-Powered Phishing Websites: The Newest Threat Your Team Can't Afford to Miss",
    shortTitle: "AI Phishing Threats",
    subtitle: "Cybersecurity",
    link: "/resources/blog/ai-phishing-threat",
    external: false,
    date: "September 10, 2025",
    sortDate: "2025-09-10"
  },
  {
    type: "Blog",
    slug: "beyond-cloud-ai-rebrand",
    title: "Beyond the Cloud-to-AI Rebrand: Building Credibility Through Outcomes",
    shortTitle: "Beyond Cloud-to-AI",
    subtitle: "AI Strategy",
    link: "/resources/blog/beyond-cloud-ai-rebrand",
    external: false,
    date: "September 17, 2025",
    sortDate: "2025-09-17"
  },
  {
    type: "Blog",
    slug: "nutanix-enterprise-ai",
    title: "Nutanix: Make Enterprise AI a Reality",
    shortTitle: "Nutanix Enterprise AI",
    subtitle: "AI & Infrastructure",
    link: "/resources/blog/nutanix-enterprise-ai",
    external: false,
    date: "June 17, 2025",
    sortDate: "2025-06-17"
  },
  {
    type: "Blog",
    slug: "big-data-analytics",
    title: "Big Data Analytics: Turning Data Overload into Opportunity",
    shortTitle: "Big Data Analytics",
    subtitle: "Data Strategy",
    link: "/resources/blog/big-data-analytics",
    external: false,
    date: "June 10, 2025",
    sortDate: "2025-06-10"
  },
  {
    type: "Blog",
    slug: "dell-data-lakehouse",
    title: "The Five Pillars of Dell's Data Lakehouse: Transforming Data Management",
    shortTitle: "Dell Data Lakehouse",
    subtitle: "Data Management & AI",
    link: "/resources/blog/dell-data-lakehouse",
    external: false,
    date: "June 5, 2025",
    sortDate: "2025-06-05"
  },
  {
    type: "Blog",
    slug: "tech-meets-bbq-baseball",
    title: "When Tech Meets BBQ and Baseball",
    shortTitle: "Tech Meets BBQ",
    subtitle: "Events & Community",
    link: "/resources/blog/tech-meets-bbq-baseball",
    external: false,
    date: "July 22, 2025",
    sortDate: "2025-07-22"
  },
  {
    type: "Blog",
    slug: "toys-for-tots-sponsor",
    title: "Zinfinity Partners with Toys for Tots as a Corporate Sponsor",
    shortTitle: "Toys for Tots Sponsor",
    subtitle: "Community & Corporate Giving",
    link: "/resources/blog/toys-for-tots-sponsor",
    external: false,
    date: "April 15, 2025",
    sortDate: "2025-04-15"
  },
  {
    type: "Blog",
    slug: "infinidat-rising-star",
    title: "Zinfinity Honored as Infinidat's Rising Star Partner of the Year",
    shortTitle: "Infinidat Rising Star",
    subtitle: "Industry Recognition",
    link: "/resources/blog/infinidat-rising-star",
    external: false,
    date: "April 10, 2025",
    sortDate: "2025-04-10"
  },
  {
    type: "Blog",
    slug: "dell-platinum-tier",
    title: "Zinfinity Achieves Global Platinum Tier",
    shortTitle: "Dell Platinum Tier",
    subtitle: "Dell Technologies Partnership",
    link: "/resources/blog/dell-platinum-tier",
    external: false,
    date: "April 3, 2025",
    sortDate: "2025-04-03"
  },
  {
    type: "Blog",
    slug: "d8taops-partnership",
    title: "D8taOps & Zinfinity Forge Strategic Partnership to Revolutionize DataOps & AI-driven Innovation",
    shortTitle: "D8taOps Partnership",
    subtitle: "Partnership & Innovation",
    link: "/resources/blog/d8taops-partnership",
    external: false,
    date: "February 11, 2025",
    sortDate: "2025-02-11"
  }
];
const Resources = () => {
  const [sortOrder, setSortOrder] = useState("newest");
  const [typeFilter, setTypeFilter] = useState("All");
  const filteredAndSorted = useMemo(() => {
    let filtered = typeFilter === "All" ? resources : resources.filter((r) => r.type === typeFilter);
    return [...filtered].sort((a, b) => {
      const diff = a.sortDate.localeCompare(b.sortDate);
      return sortOrder === "newest" ? -diff : diff;
    });
  }, [sortOrder, typeFilter]);
  const contentTypes = ["All", "Blog", "Case Study"];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-40 pb-16 bg-gradient-to-br from-background via-background to-primary/5", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center animate-fade-up", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-heading mb-6", children: "Resources" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground", children: "Explore practical guidance, case studies, and perspectives from teams simplifying complex technology environments." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pt-8 pb-4", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Filter, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: contentTypes.map((type) => /* @__PURE__ */ jsx(
          Button,
          {
            variant: typeFilter === type ? "default" : "outline",
            size: "sm",
            onClick: () => setTypeFilter(type),
            children: type
          },
          type
        )) })
      ] }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: () => setSortOrder((prev) => prev === "newest" ? "oldest" : "newest"),
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-4 w-4" }),
            sortOrder === "newest" ? "Newest First" : "Oldest First"
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: filteredAndSorted.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground py-12", children: "No resources match the selected filter." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: filteredAndSorted.map((resource, index) => {
      const cardContent = /* @__PURE__ */ jsxs(Card, { className: "hover-lift shadow-card overflow-hidden h-full", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-4 py-3", children: /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg font-heading font-bold text-white text-center leading-snug", children: resource.shortTitle }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: resource.type }),
            resource.date && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: resource.date })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-heading group-hover:text-accent transition-colors mb-2", children: resource.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: resource.subtitle })
        ] })
      ] });
      return resource.external ? /* @__PURE__ */ jsx(
        "a",
        {
          href: resource.link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group animate-fade-up",
          style: { animationDelay: `${index * 50}ms` },
          children: cardContent
        },
        resource.slug
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: resource.link,
          className: "group animate-fade-up",
          style: { animationDelay: `${index * 50}ms` },
          children: cardContent
        },
        resource.slug
      );
    }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-accent to-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading text-accent-foreground mb-6", children: "Looking for something specific?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto", children: "Our team is happy to answer your questions directly." }),
      /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Ask Us Anything" }) })
    ] }) })
  ] });
};

const $$Resources = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "Resources | Zinfinity Tech", "description": "Case studies and practical guidance from teams simplifying complex technology environments." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Resources", Resources, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/pages/Resources", "client:component-export": "default" })} ` })}`;
}, "/home/runner/workspace/src/pages/resources.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/resources.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resources,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
