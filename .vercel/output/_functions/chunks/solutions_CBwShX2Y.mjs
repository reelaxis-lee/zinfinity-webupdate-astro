import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_CBLO9Nzd.mjs';
import { $ as $$ContentLayout } from './ContentLayout_C23CVu68.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { BarChart3, Cloud, Shield, Server, Headset } from 'lucide-react';
import { L as Link } from './router_Bx0mhq87.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from './card_CgFSqawW.mjs';
import { B as Button } from './button_D6Qh95ed.mjs';

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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-40 pb-16 bg-gradient-to-br from-background via-background to-secondary/10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-heading mb-6", children: "Our Solutions" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground mb-8", children: "Zinfinity delivers integrated technology solutions for complex, modern environments." }),
      /* @__PURE__ */ jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Talk to an Architect" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-12 max-w-5xl mx-auto", children: solutions.map((solution, index) => /* @__PURE__ */ jsxs(Card, { className: "hover-lift shadow-card overflow-hidden", style: {
      animationDelay: `${index * 100}ms`
    }, children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "pt-10 pb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 rounded-lg bg-accent/10", children: /* @__PURE__ */ jsx(solution.icon, { className: "w-10 h-10 text-accent" }) }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-4xl md:text-5xl tracking-wide", children: solution.title })
        ] }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed tracking-wide", children: solution.description })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "pb-10", children: /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: solution.capabilities.map((capability, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-accent flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-base tracking-wide", children: capability })
      ] }, idx)) }) })
    ] }, index)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-accent to-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading text-accent-foreground mb-6", children: "Ready for technology that feels simpler?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto", children: "If your environment feels overly complex or harder than it should be, let's talk." }),
      /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Talk to an Architect" }) })
    ] }) })
  ] });
};

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "Solutions | Zinfinity Tech", "description": "Integrated technology solutions for cloud, cybersecurity, data intelligence, infrastructure, and managed services." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Solutions", Solutions, {})} ` })}`;
}, "/home/runner/workspace/src/pages/solutions.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/solutions.astro";
const $$url = "/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
