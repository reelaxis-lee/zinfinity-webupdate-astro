import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, o as renderSlot } from './entrypoint_CBLO9Nzd.mjs';
import { l as logoColor, g as getImageSrc, a as logoWhite, $ as $$BaseLayout } from './utils_DuoYG0uv.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Mail, Phone } from 'lucide-react';

const $$NavigationStatic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NavigationStatic;
  const pathname = Astro2.url.pathname;
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Partners", path: "/partners" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-card"> <div class="container mx-auto px-6 md:px-8"> <div class="flex items-center justify-between h-24 md:h-28"> <a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity"> <img${addAttribute(logoColor.src, "src")} alt="Zinfinity Tech" class="w-auto h-16 md:h-20 max-w-[160px] md:max-w-none object-contain"> </a> <div class="hidden md:flex items-center gap-4 lg:gap-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.path, "href")}${addAttribute(`text-base lg:text-lg font-medium transition-colors link-underline whitespace-nowrap ${pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"}`, "class")}> ${link.name} </a>`)} <a href="/contact" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
Talk to Us
</a> </div> <label for="mobile-nav-toggle" class="md:hidden p-2 cursor-pointer text-foreground hover:text-accent transition-colors" aria-label="Toggle menu"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg> </label> </div> </div> <input type="checkbox" id="mobile-nav-toggle" class="peer sr-only"> <div class="md:hidden max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen border-t-0 peer-checked:border-t border-border"> <div class="py-6 space-y-4 px-6"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.path, "href")}${addAttribute(`block text-lg font-medium py-2 transition-colors ${pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"}`, "class")}> ${link.name} </a>`)} <a href="/contact" class="flex items-center justify-center w-full rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
Get Started
</a> </div> </div> </nav>`;
}, "/home/runner/workspace/src/components/NavigationStatic.astro", void 0);

const Footer = () => {
  const logoSrc = getImageSrc(logoWhite);
  return /* @__PURE__ */ jsx("footer", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("img", { src: logoSrc, alt: "Zinfinity Tech", className: "h-20 w-auto" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/80", children: "Peace of mind. Powered by IT." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-heading mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-sm hover:text-secondary transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/solutions", className: "text-sm hover:text-secondary transition-colors", children: "Solutions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/partners", className: "text-sm hover:text-secondary transition-colors", children: "Partners" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/resources", className: "text-sm hover:text-secondary transition-colors", children: "Resources" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-heading mb-4", children: "What We Do" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/solutions", className: "hover:text-secondary transition-colors", children: "AI Readiness & Data" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/solutions", className: "hover:text-secondary transition-colors", children: "Cloud Engineering" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/solutions", className: "hover:text-secondary transition-colors", children: "Cybersecurity" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/solutions", className: "hover:text-secondary transition-colors", children: "The Stack" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/solutions", className: "hover:text-secondary transition-colors", children: "Managed Services" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-heading mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@zinfinity.tech", className: "hover:text-secondary transition-colors", children: "info@zinfinity.tech" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "tel:8322631185", className: "hover:text-secondary transition-colors", children: "832-263-1185" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-primary-foreground/20 mt-8 pt-8 text-center space-y-2", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-primary-foreground/60", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Zinfinity Tech. All rights reserved. | Ride the Wave of Modern IT."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 text-sm text-primary-foreground/60", children: [
        /* @__PURE__ */ jsx("a", { href: "/privacy-policy", className: "hover:text-secondary transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("span", { children: "|" }),
        /* @__PURE__ */ jsx("a", { href: "/terms", className: "hover:text-secondary transition-colors", children: "Terms & Conditions" })
      ] })
    ] })
  ] }) });
};

const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationStatic", $$NavigationStatic, {})} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/home/runner/workspace/src/layouts/ContentLayout.astro", void 0);

export { $$ContentLayout as $ };
