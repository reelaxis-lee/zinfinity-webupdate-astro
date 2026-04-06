import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_CBLO9Nzd.mjs';
import { $ as $$ContentLayout } from './ContentLayout_C23CVu68.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { L as Link } from './router_Bx0mhq87.mjs';
import { C as Card, d as CardContent } from './card_CgFSqawW.mjs';
import { B as Button } from './button_D6Qh95ed.mjs';
import { B as Badge } from './badge_BQE2DtOc.mjs';
import { ArrowLeft } from 'lucide-react';

const BlogAIReadiness = () => {
  const phases = [
    {
      title: "Assess and Prioritize",
      steps: [
        "Inventory critical processes and data domains.",
        "Identify high-impact use cases with achievable guardrails.",
        "Document current controls and the minimal deltas to go live."
      ]
    },
    {
      title: "Establish Foundations While Delivering Value",
      steps: [
        "Stand up identity, policy, and logging baselines.",
        "Tackle data quality and access for one priority domain.",
        "Launch a micro-MVP inside the production path with well-defined SLAs."
      ]
    },
    {
      title: "Scale with Patterns",
      steps: [
        "Convert the first success into a reusable template.",
        "Extend observability and cost management.",
        "Create an intake and governance rhythm that accelerates approvals."
      ]
    }
  ];
  const dimensions = [
    { title: "Data baselining", desc: "Know where high-value data lives, who owns it, and how it is validated." },
    { title: "Access and identity", desc: "Apply least privilege and clear entitlements across people, services, and agents." },
    { title: "Lineage and audit", desc: "Track where data and decisions come from so you can explain outcomes." },
    { title: "Platform alignment", desc: "Select tools that fit your operating model and support your compliance posture." },
    { title: "Skills and support", desc: "Ensure that owners and operators can run, observe, and recover systems." }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-40 pb-16 bg-gradient-to-br from-background via-background to-primary/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/resources", className: "inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
        " Back to Resources"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "September 18, 2025" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-heading mb-4", children: "AI Moved Faster Than Your Foundations" }),
      /* @__PURE__ */ jsx("p", { className: "text-2xl text-muted-foreground", children: "A Practical Path to AI Readiness" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mt-4", children: "Ship value while you build the guardrails: a three-phase path to safe, repeatable AI adoption." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-4 max-w-4xl mb-12", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4", children: /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug", children: "Path to AI Readiness" }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-4 max-w-4xl pb-20 space-y-8", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: "The Reality Check" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "The future did not arrive on schedule. It arrived early. Teams now face pressure to show AI impact while core foundations lag. Common gaps include unclear data ownership, quality drift across sources, and insufficient controls for privacy and compliance. Most organizations do not lack ideas. They lack a pragmatic way to sequence work so AI adoption stays safe and repeatable." }),
        /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-foreground border-l-4 border-accent pl-6", children: "Readiness is measured by time-to-production without heroics." })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: 'What "Readiness" Actually Means' }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Readiness is not a slide. It is the combination of data quality, governance clarity, platform fit, and team capability required to run AI in production. You can measure it by how quickly a net-new use case gets from proposal to live service without heroics." }),
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Key Dimensions" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: dimensions.map((dim) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("strong", { className: "text-foreground", children: [
              dim.title,
              ":"
            ] }),
            " ",
            dim.desc
          ] })
        ] }, dim.title)) })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: "A Readiness Sequence That Works" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Zinfinity recommends a three-phase program that matches how enterprises adopt new capabilities." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: phases.map((phase, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ jsx("span", { className: "text-3xl font-heading text-accent flex-shrink-0", children: i + 1 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-2", children: phase.title }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.steps.map((step) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 items-start", children: [
              /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: step })
            ] }, step)) })
          ] })
        ] }, phase.title)) })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-4", children: "The Zinfinity Approach" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "As a customer-first integrator with global reach, Zinfinity aligns stakeholders across security, infrastructure, data, and application teams. We focus on the operational details that decide whether AI projects sustain value: entitlement mapping, policy execution, environment strategy, monitoring, and support runbooks. We bring a services mindset that respects your current investments while preparing for future use cases." })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: "What You Can Expect in the First 60–90 Days" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
          "A prioritized readiness map tied to business outcomes",
          "A production-path pilot with auditability and rollback defined",
          "A reference pattern you can apply to the next three use cases",
          "A support model that clarifies who runs what, and how it scales globally"
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item })
        ] }, item)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-accent to-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading text-accent-foreground mb-6", children: "Start With a Readiness Assessment" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto", children: 'If your AI roadmap is blocked by "not ready yet," Zinfinity will help you ship value while you build the foundations that keep value alive.' }),
      /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Get in Touch" }) })
    ] }) })
  ] });
};

const $$AiReadinessPracticalPath = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "AI Moved Faster Than Your Foundations: A Practical Path to AI Readiness | Zinfinity Tech", "description": "Ship value while you build the guardrails—a three-phase path to safe, repeatable AI adoption for enterprises facing the pressure of rapid AI advancement." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogAIReadiness", BlogAIReadiness, {})} ` })}`;
}, "/home/runner/workspace/src/pages/resources/blog/ai-readiness-practical-path.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/resources/blog/ai-readiness-practical-path.astro";
const $$url = "/resources/blog/ai-readiness-practical-path";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiReadinessPracticalPath,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
