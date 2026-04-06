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

const BlogTechBBQBaseball = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-40 pb-16 bg-gradient-to-br from-background via-background to-primary/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/resources", className: "inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
        " Back to Resources"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "July 22, 2025" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-heading mb-6", children: "When Tech Meets BBQ and Baseball" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Events & Community" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto px-4 max-w-4xl mb-12", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden bg-[hsl(215,60%,18%)] flex items-center justify-center px-6 py-4", children: /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-heading font-bold text-white text-center leading-snug", children: "Tech Meets BBQ" }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-4 max-w-4xl pb-20 space-y-8", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: "A Night with Dell, CrowdStrike, Juniper and APC" }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg leading-relaxed text-muted-foreground mb-4", children: [
          "On ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "July 22" }),
          ", Zinfinity joined forces with ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Dell, CrowdStrike, Juniper, and APC" }),
          " for an unforgettable evening at the ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Texas Rangers" }),
          " game."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          "No slides. No speeches. Just incredible Texas BBQ, big-league baseball, and conversations about the future of ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "AI and security" }),
          " between innings."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: "The Highlight" }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground leading-relaxed", children: [
          "The very first pitch of the night— ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "a home run" }),
          "—set the tone for an exciting game under the lights at ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Globe Life Field" }),
          "."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-accent mb-6", children: "Partners in Attendance" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: ["Dell", "CrowdStrike", "Juniper", "APC"].map((partner) => /* @__PURE__ */ jsx("div", { className: "text-center p-4 rounded-lg bg-accent/5 border border-accent/20", children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: partner }) }, partner)) })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsx("p", { className: "text-lg italic text-muted-foreground text-center", children: '"It was the perfect mix of great food, great company, and great baseball—proof that tech events can be just as thrilling as the game itself."' }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-accent to-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading text-accent-foreground mb-6", children: "Want to Be Part of the Next One?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto", children: "Stay connected with Zinfinity for future events, community gatherings, and partner experiences." }),
      /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Get in Touch" }) })
    ] }) })
  ] });
};

const $$TechMeetsBbqBaseball = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "When Tech Meets BBQ and Baseball | Zinfinity Tech", "description": "Zinfinity joined Dell, CrowdStrike, Juniper, and APC for an unforgettable evening at the Texas Rangers game on July 22." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogTechBBQBaseball", BlogTechBBQBaseball, {})} ` })}`;
}, "/home/runner/workspace/src/pages/resources/blog/tech-meets-bbq-baseball.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/resources/blog/tech-meets-bbq-baseball.astro";
const $$url = "/resources/blog/tech-meets-bbq-baseball";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TechMeetsBbqBaseball,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
