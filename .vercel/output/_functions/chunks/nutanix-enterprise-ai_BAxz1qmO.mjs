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

const BlogNutanixEnterpriseAI = () => {
  const capabilities = [
    {
      section: "Make IT Resources AI Resources",
      items: [
        { title: "Simplify LLM Operations", desc: "Deploy AI models and secure APIs effortlessly with a point-and-click interface. Choose from Hugging Face, NVIDIA NIM, or your own private models." },
        { title: "Enable Choice for Enterprise AI", desc: "Run enterprise AI securely, on-premises, or in public clouds on any CNCF-certified Kubernetes runtime while leveraging your current AI tools." }
      ]
    },
    {
      section: "Simple and Secure Endpoints and APIs",
      items: [
        { title: "API Token Creation and Management", desc: "Easily create or remove access to your LLMs with role-based access controls of secure API tokens for developers and GenAI application owners." },
        { title: "Provide API Code Samples", desc: "Create URL-ready JSON code for API-ready testing in a single click." }
      ]
    },
    {
      section: "Audit, Monitor, and Test in One Place",
      items: [
        { title: "Administrative Audit Trails", desc: "Track critical events like logins, API events, and LLM requests." },
        { title: "Monitor Everything Together", desc: "A simple dashboard to visualize everything from API request volume to Kubernetes infrastructure health." },
        { title: "AI Model Testing", desc: "Quickly query a deployed AI model for preflight testing or viability using predesigned prompts or your own questions." }
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-40 pb-16 bg-gradient-to-br from-background via-background to-primary/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/resources", className: "inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
        " Back to Resources"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "June 17, 2025" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-heading mb-6", children: "Nutanix: Make Enterprise AI a Reality" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "AI & Infrastructure" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-4 max-w-4xl mb-12", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4", children: /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug", children: "Nutanix Enterprise AI" }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-4 max-w-4xl pb-20 space-y-8", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading mb-4", children: "Deploy AI Models With Ease and Power GenAI Apps Securely" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Nutanix Enterprise AI simplifies and secures GenAI, empowering enterprises to pursue the unprecedented productivity gains, revenue growth, and the value that GenAI promises. Make enterprise AI apps and data easy to deploy, operate, and develop with secure AI endpoints using AI large language models (LLMs) and APIs for generative AI." })
      ] }) }),
      capabilities.map((cap) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: cap.section }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: cap.items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.desc })
          ] })
        ] }, item.title)) })
      ] }) }, cap.section)),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: "Your Choice of LLMs" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          { title: "Hugging Face Model Hub", desc: "Choose from validated LLMs including Google Gemma, Meta Llama, and Mistral." },
          { title: "NVIDIA NIM", desc: "Use the NVIDIA NCG catalog with NVIDIA NIM to deploy models like Meta Llama." },
          { title: "Your Own Models", desc: "Need an unlisted or proprietary model? Upload the LLMs you need on your own." }
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-accent/5 border border-accent/20", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground mb-2", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
        ] }, item.title)) })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: "Unleash the Power of Nutanix Enterprise AI with Zinfinity" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "At Zinfinity, we help organizations harness the full potential of Nutanix Enterprise AI — delivering powerful, scalable, and secure AI infrastructure that drives business outcomes. Whether you're optimizing data pipelines, deploying large language models, or scaling intelligent applications, Zinfinity ensures your Nutanix solution is expertly integrated, fine-tuned, and ready for real-world performance." }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 mt-6", children: [
          "Seamless AI deployment across hybrid multicloud environments",
          "Simplified infrastructure that supports high-performance AI workloads",
          "End-to-end security and governance from core to edge",
          "Rapid time to value through Zinfinity's consultative and agile approach"
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: item })
        ] }, item)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-accent to-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading text-accent-foreground mb-6", children: "Ready to Make Enterprise AI a Reality?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto", children: "Schedule a personalized demo and see how Zinfinity can transform your business with Nutanix." }),
      /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Get in Touch" }) })
    ] }) })
  ] });
};

const $$NutanixEnterpriseAi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "Nutanix: Make Enterprise AI a Reality | Zinfinity Tech", "description": "Discover how Nutanix Enterprise AI simplifies and secures GenAI deployment, empowering enterprises to unlock productivity gains and revenue growth." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogNutanixEnterpriseAI", BlogNutanixEnterpriseAI, {})} ` })}`;
}, "/home/runner/workspace/src/pages/resources/blog/nutanix-enterprise-ai.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/resources/blog/nutanix-enterprise-ai.astro";
const $$url = "/resources/blog/nutanix-enterprise-ai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NutanixEnterpriseAi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
