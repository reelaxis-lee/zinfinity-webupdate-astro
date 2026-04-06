import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_CBLO9Nzd.mjs';
import { $ as $$ContentLayout } from './ContentLayout_C23CVu68.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { u as useLocation, L as Link } from './router_Bx0mhq87.mjs';
import { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { B as Button } from './button_D6Qh95ed.mjs';

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxs("div", { className: "text-center px-4 max-w-2xl mx-auto animate-fade-up", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-9xl font-heading text-accent mb-4", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading mb-6", children: "Looks Like You Wiped Out" }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-8", children: "This wave doesn't exist. Let's get you back to shore." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsx(Home, { className: "w-5 h-5 mr-2" }),
        "Back to Home"
      ] }) }),
      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", onClick: () => window.history.back(), children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5 mr-2" }),
        "Go Back"
      ] })
    ] })
  ] }) });
};

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "404 - Page Not Found | Zinfinity Tech" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NotFound", NotFound, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/pages/NotFound", "client:component-export": "default" })} ` })}`;
}, "/home/runner/workspace/src/pages/404.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
