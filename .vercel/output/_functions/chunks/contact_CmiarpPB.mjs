import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_CBLO9Nzd.mjs';
import { $ as $$ContentLayout } from './ContentLayout_C23CVu68.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from './card_CgFSqawW.mjs';
import { I as Input, T as Toaster } from './sonner_BYCxfM7P.mjs';
import { c as cn } from './utils_DuoYG0uv.mjs';
import { B as Button } from './button_D6Qh95ed.mjs';
import { Loader2, Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/send-form-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "contact" })
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to send message");
      }
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email Us",
    content: "info@zinfinity.tech",
    description: "We'll respond within 24 hours"
  }, {
    icon: Phone,
    title: "Call Us",
    content: "832-263-1185",
    description: "Mon-Fri, 9am-6pm PST"
  }, {
    icon: MapPin,
    title: "Global Locations",
    content: "",
    description: "",
    locations: ["Southlake, Texas (HQ)", "London", "Amsterdam", "Melbourne", "Singapore", "Hong Kong"]
  }];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-40 pb-16 bg-gradient-to-br from-background via-background to-accent/5", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto text-center animate-fade-up", children: /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-heading mb-6", children: "Get in Touch" }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs(Card, { className: "shadow-card", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-3xl", children: "Send us a Message" }),
          /* @__PURE__ */ jsx(CardDescription, { className: "text-base", children: "Whether you have a challenge, a project, or just need an honest perspective, our team is here." })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-2", children: "Name *" }),
            /* @__PURE__ */ jsx(Input, { id: "name", type: "text", required: true, value: formData.name, onChange: (e) => setFormData({
              ...formData,
              name: e.target.value
            }), placeholder: "Your full name", className: "w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "Email *" }),
            /* @__PURE__ */ jsx(Input, { id: "email", type: "email", required: true, value: formData.email, onChange: (e) => setFormData({
              ...formData,
              email: e.target.value
            }), placeholder: "you@company.com", className: "w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium mb-2", children: "Company" }),
            /* @__PURE__ */ jsx(Input, { id: "company", type: "text", value: formData.company, onChange: (e) => setFormData({
              ...formData,
              company: e.target.value
            }), placeholder: "Your company name", className: "w-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: "Message *" }),
            /* @__PURE__ */ jsx(Textarea, { id: "message", required: true, value: formData.message, onChange: (e) => setFormData({
              ...formData,
              message: e.target.value
            }), placeholder: "Tell us about your project or questions...", className: "w-full min-h-[150px]" })
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "w-full", disabled: submitting, children: [
            submitting ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 mr-2" }),
            submitting ? "Sending..." : "Send Message"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-heading mb-6", children: "Get in Touch" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-4", children: "Peace of mind. Powered by Technology." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: contactInfo.map((info, index) => /* @__PURE__ */ jsx(Card, { className: "hover-lift shadow-card", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-start gap-4 p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 rounded-lg bg-accent/10 flex-shrink-0", children: /* @__PURE__ */ jsx(info.icon, { className: "w-6 h-6 text-accent" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-1", children: info.title }),
            info.content && /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium mb-1", children: info.content }),
            info.locations && /* @__PURE__ */ jsx("ul", { className: "text-muted-foreground text-sm space-y-1", children: info.locations.map((location, idx) => /* @__PURE__ */ jsx("li", { children: location }, idx)) })
          ] })
        ] }) }, index)) })
      ] })
    ] }) }) })
  ] });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "Contact | Zinfinity Tech", "description": "Get in touch with Zinfinity Tech. Reach our team in Southlake TX, London, Amsterdam, Melbourne, Singapore, or Hong Kong." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contact", Contact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/pages/Contact", "client:component-export": "default" })} ${renderComponent($$result2, "Toaster", Toaster, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" })} ` })}`;
}, "/home/runner/workspace/src/pages/contact.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
