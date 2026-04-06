import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate } from './entrypoint_CBLO9Nzd.mjs';
import { g as getImageSrc, l as logoColor, a as logoWhite, c as cn, $ as $$BaseLayout } from './utils_DuoYG0uv.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { u as useLocation, L as Link } from './router_Bx0mhq87.mjs';
import { X, Menu, ArrowLeft, ArrowRight, Brain, CheckCircle, Loader2, BarChart3, Cloud, Shield, Server, Headset } from 'lucide-react';
import { B as Button } from './button_D6Qh95ed.mjs';
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, c as CardDescription } from './card_CgFSqawW.mjs';
import useEmblaCarousel from 'embla-carousel-react';
import { useFormContext, FormProvider, Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { I as Input, T as Toaster } from './sonner_BYCxfM7P.mjs';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { toast } from 'sonner';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Solutions",
    path: "/solutions"
  }, {
    name: "Partners",
    path: "/partners"
  }, {
    name: "Resources",
    path: "/resources"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return /* @__PURE__ */ jsx("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== "/" ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"}`, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between transition-all duration-300 ${!isScrolled && location.pathname === "/" ? "h-32 md:h-36" : "h-24 md:h-28"}`, children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center gap-3 hover:opacity-80 transition-opacity", children: /* @__PURE__ */ jsx("img", { src: isScrolled || location.pathname !== "/" ? getImageSrc(logoColor) : getImageSrc(logoWhite), alt: "Zinfinity Tech", className: `w-auto max-w-[160px] md:max-w-none object-contain transition-all duration-300 ${!isScrolled && location.pathname === "/" ? "h-28 md:h-32" : "h-16 md:h-20"}` }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-4 lg:gap-8", children: [
        navLinks.map((link) => /* @__PURE__ */ jsx("a", { href: link.path, className: `text-base lg:text-lg font-medium transition-colors link-underline whitespace-nowrap ${location.pathname === link.path ? "text-accent" : isScrolled || location.pathname !== "/" ? "text-foreground hover:text-accent" : "text-background hover:text-accent"}`, children: link.name }, link.path)),
        /* @__PURE__ */ jsx(Button, { variant: !isScrolled && location.pathname === "/" ? "outline" : "default", size: "default", asChild: true, className: `whitespace-nowrap ${!isScrolled && location.pathname === "/" ? "border-white text-white hover:bg-white hover:text-foreground" : ""}`, children: /* @__PURE__ */ jsx("a", { href: "/contact", children: "Talk to Us" }) })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: `md:hidden p-2 transition-colors ${isScrolled || location.pathname !== "/" ? "text-foreground hover:text-accent" : "text-background hover:text-accent"}`, "aria-label": "Toggle menu", children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 28 }) : /* @__PURE__ */ jsx(Menu, { size: 28 }) })
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden py-6 space-y-4 animate-fade-in border-t border-border", children: [
      navLinks.map((link) => /* @__PURE__ */ jsx("a", { href: link.path, onClick: () => setIsMobileMenuOpen(false), className: `block text-lg font-medium py-2 transition-colors ${location.pathname === link.path ? "text-accent" : "text-foreground hover:text-accent"}`, children: link.name }, link.path)),
      /* @__PURE__ */ jsx(Button, { variant: "default", size: "lg", className: "w-full", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/contact", onClick: () => setIsMobileMenuOpen(false), children: "Get Started" }) })
    ] })
  ] }) });
};

const zinfinityHandIcon = new Proxy({"src":"/_astro/zinfinity-hand-icon.CUtQfK5d.png","width":557,"height":554,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/workspace/src/assets/zinfinity-hand-icon.png";
							}
							
							return target[name];
						}
					});

const worldMapImage = new Proxy({"src":"/_astro/world-map-blue.D84oVaac.png","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/workspace/src/assets/world-map-blue.png";
							}
							
							return target[name];
						}
					});

const locationData = [
  { name: "United States", country: "US", marker: "Americas", address: "550 Reserve Street Suite 190, Southlake, TX 76092" },
  { name: "United Kingdom", country: "UK", marker: "EMEA", address: "4/4A Bloomsbury Sq., London, UK WC1A 2RP" },
  { name: "Netherlands", country: "NL", marker: "EMEA", address: "Zinfinity BV Herengracht 420, 1017 BZ Amsterdam" },
  { name: "Australia", country: "AU", marker: "ANZ", address: "Ste 1, Level 3, 62 Lygon Street, Carlton South, VIC 3053" },
  { name: "Hong Kong", country: "HK", marker: "APAC", address: "Unit B17/F United CTR 95 Queensway, Admiralty, Hong Kong" }
];
const WorldMap = () => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const markers = [
    { name: "Americas", x: 18.5, y: 45 },
    { name: "EMEA", x: 49.5, y: 30 },
    { name: "APAC", x: 77, y: 55 },
    { name: "ANZ", x: 88, y: 78 }
  ];
  const coverageZones = [
    { name: "Americas", x: 20, y: 45, width: 28, height: 35 },
    { name: "EMEA", x: 50, y: 35, width: 20, height: 30 },
    { name: "Asia Pacific", x: 80, y: 55, width: 25, height: 40 }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: getImageSrc(worldMapImage),
        alt: "World map showing Zinfinity global presence",
        className: "w-full h-auto"
      }
    ),
    coverageZones.map((zone) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute pointer-events-none",
        style: {
          left: `${zone.x - zone.width / 2}%`,
          top: `${zone.y - zone.height / 2}%`,
          width: `${zone.width}%`,
          height: `${zone.height}%`
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-full h-full rounded-full opacity-20",
            style: {
              background: "radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)"
            }
          }
        )
      },
      zone.name
    )),
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "absolute inset-0 w-full h-full pointer-events-none opacity-30",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ jsx("line", { x1: "18.5", y1: "45", x2: "49.5", y2: "30", stroke: "hsl(var(--primary))", strokeWidth: "0.15", strokeDasharray: "0.5,0.5" }),
          /* @__PURE__ */ jsx("line", { x1: "49.5", y1: "30", x2: "77", y2: "55", stroke: "hsl(var(--primary))", strokeWidth: "0.15", strokeDasharray: "0.5,0.5" }),
          /* @__PURE__ */ jsx("line", { x1: "77", y1: "55", x2: "88", y2: "78", stroke: "hsl(var(--primary))", strokeWidth: "0.15", strokeDasharray: "0.5,0.5" }),
          /* @__PURE__ */ jsx("line", { x1: "18.5", y1: "45", x2: "77", y2: "55", stroke: "hsl(var(--primary))", strokeWidth: "0.1", strokeDasharray: "0.5,0.5", opacity: "0.5" })
        ]
      }
    ),
    markers.map((marker) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute cursor-pointer transition-all duration-300 hover:scale-125 z-10",
        style: {
          left: `${marker.x}%`,
          top: `${marker.y}%`,
          transform: "translate(-50%, -50%)",
          width: "9%",
          aspectRatio: "1"
        },
        onMouseEnter: () => setHoveredMarker(marker.name),
        onMouseLeave: () => setHoveredMarker(null),
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute rounded-full animate-ping opacity-40",
              style: {
                width: "140%",
                height: "140%",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "hsl(var(--primary) / 0.3)",
                animationDuration: "2s"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute rounded-full",
              style: {
                width: "130%",
                height: "130%",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bg-background rounded-full shadow-xl border-2 border-primary/30",
              style: {
                width: "100%",
                height: "100%",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: getImageSrc(zinfinityHandIcon),
              alt: `${marker.name} office`,
              className: "absolute z-10",
              style: {
                width: "90%",
                height: "90%",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
              }
            }
          ),
          hoveredMarker === marker.name && /* @__PURE__ */ jsxs("div", { className: `hidden md:block absolute left-1/2 -translate-x-1/2 z-20 ${marker.y < 40 ? "top-full mt-3" : "bottom-full mb-3"}`, children: [
            marker.y < 40 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 -mb-1", children: /* @__PURE__ */ jsx("div", { className: "border-8 border-transparent border-b-card" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-card text-card-foreground px-5 py-3 rounded-lg shadow-xl border border-border min-w-[200px]", children: locationData.filter((loc) => loc.marker === marker.name).map((loc) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground mb-1 last:mb-0", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: loc.name }),
              /* @__PURE__ */ jsx("br", {}),
              loc.address
            ] }, loc.country)) }),
            marker.y >= 40 && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 -mt-1", children: /* @__PURE__ */ jsx("div", { className: "border-8 border-transparent border-t-card" }) })
          ] })
        ]
      },
      marker.name
    ))
  ] });
};

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";

const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;

const Form = FormProvider;
const FormFieldContext = React.createContext({});
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext({});
const FormItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const id = React.useId();
    return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
  }
);
FormItem.displayName = "FormItem";
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(Label, { ref, className: cn(error && "text-destructive", className), htmlFor: formItemId, ...props });
});
FormLabel.displayName = "FormLabel";
const FormControl = React.forwardRef(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsx(
      Slot,
      {
        ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
      }
    );
  }
);
FormControl.displayName = "FormControl";
const FormDescription = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsx("p", { ref, id: formDescriptionId, className: cn("text-sm text-muted-foreground", className), ...props });
  }
);
FormDescription.displayName = "FormDescription";
const FormMessage = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
      return null;
    }
    return /* @__PURE__ */ jsx("p", { ref, id: formMessageId, className: cn("text-sm font-medium text-destructive", className), ...props, children: body });
  }
);
FormMessage.displayName = "FormMessage";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters")
});
const DISMISS_KEY = "ai-readiness-dismissed";
const AIReadinessAssessment = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", email: "" }
  });
  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setShowBanner(true), 3e3);
    return () => clearTimeout(timer);
  }, []);
  const dismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/send-form-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "ai-readiness" })
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to submit");
      }
      setSubmitted(true);
    } catch (err) {
      console.error("AI readiness form error:", err);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const openModal = () => {
    setModalOpen(true);
    setShowBanner(false);
  };
  const handleModalClose = (open) => {
    setModalOpen(open);
    if (!open) {
      setSubmitted(false);
      form.reset();
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed bottom-6 left-6 z-40 max-w-sm rounded-xl border border-border bg-background p-5 shadow-xl transition-all duration-500 ${showBanner ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"}`,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: dismiss,
              className: "absolute right-3 top-3 rounded-sm p-1 text-muted-foreground transition-colors hover:text-foreground",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground", children: /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold tracking-widest text-foreground uppercase", children: "Is Your Organization AI-Ready?" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Evaluate your safety posture and real-world preparedness for AI adoption." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: openModal,
              size: "sm",
              className: "mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90",
              children: [
                "Schedule Your Assessment",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Dialog, { open: modalOpen, onOpenChange: handleModalClose, children: /* @__PURE__ */ jsx(DialogContent, { className: "sm:max-w-md", children: submitted ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4 py-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-accent/10", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-8 w-8 text-accent" }) }),
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { className: "text-center", children: "Thank You!" }),
        /* @__PURE__ */ jsx(DialogDescription, { className: "text-center", children: "We've received your information. Our team will reach out with your personalized AI Readiness Assessment." })
      ] }),
      /* @__PURE__ */ jsx(Button, { onClick: () => handleModalClose(false), variant: "outline", className: "mt-2", children: "Close" })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "AI Readiness Assessment" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Find out how prepared your organization is to safely adopt and scale AI in real-world operations." })
      ] }),
      /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "name",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Name" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Your full name", ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "company",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Company" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Your company name", ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Email" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "you@company.com", ...field }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] })
          }
        ),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", disabled: submitting, children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Submitting..."
        ] }) : "Get Your Assessment" })
      ] }) })
    ] }) }) })
  ] });
};

const heroImage = new Proxy({"src":"/_astro/hero-infrastructure-beach.NFIzOYY8.jpg","width":1344,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/workspace/src/assets/hero-infrastructure-beach.jpg";
							}
							
							return target[name];
						}
					});

const caseStudies = [{
  headline: "Global Satellite Operator Standardizes 30+ Edge Sites",
  clientType: "Global satellite communications provider",
  challenge: "Managing and standardizing infrastructure across dozens of geographically distributed uplink sites.",
  solution: "Designed and deployed a Broadcom VCF-based platform with centralized automation and observability.",
  results: ["Standardized operations across 30+ edge locations", "Reduced operational overhead for upgrades and patching", "Improved visibility across the global environment"]
}, {
  headline: "Proposal Automation Delivers ~$300K Annual ROI",
  clientType: "Global IT services provider",
  challenge: "Manual proposal creation slowed response times and consumed thousands of hours annually.",
  solution: "Implemented an AI-driven proposal automation proof of concept integrated into existing workflows.",
  results: ["~4,000 hours saved per year", "~$300K in annual cost savings", "Repeatable automation model for future expansion"]
}, {
  headline: "School District Modernizes UPS Infrastructure Across 300+ Data Closets",
  clientType: "K-12 school district",
  challenge: "Aging UPS infrastructure across 300+ data closets introduced risk to critical security systems during power disruptions.",
  solution: "Designed and deployed APC lithium-ion UPS systems with centralized monitoring across 37 campuses.",
  results: ["Standardized power infrastructure across 300+ data closets", "Centralized visibility into power health across 37 campuses", "Reduced maintenance with longer lifecycle lithium-ion technology"]
}, {
  headline: "Training Center Launches Day-One Ready with Zero On-Site IT",
  clientType: "Corporate training facility",
  challenge: "New facility needed full technology infrastructure with no local IT staff and a tight timeline.",
  solution: "Delivered turnkey technology deployment including networking, compute, wireless, AV, and security systems.",
  results: ["End-to-end design, install, and support handled remotely", "Complete technology stack deployed (compute, network, AV, security)", "Facility fully operational from day one"]
}];
const Home = () => {
  const [carouselApi, setCarouselApi] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  useEffect(() => {
    if (!carouselApi) return;
    setSlideCount(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap());
    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);
  const features = [{
    icon: BarChart3,
    title: "AI Readiness & Data",
    description: "Assess your AI maturity, secure your data, and prepare for scalable automation and intelligence."
  }, {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Build and operate cloud environments that are clear, secure, and easy to manage."
  }, {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-level security solutions that reduce risk without slowing people down."
  }, {
    icon: Server,
    title: "The Stack",
    description: "The core infrastructure that keeps organizations running."
  }, {
    icon: Headset,
    title: "Managed Services",
    description: "From planning to operations, our teams remain engaged and accountable every step of the way."
  }];
  const keyPoints = [{
    header: "We Get To Know You",
    text: "One partner that gets to know your business"
  }, {
    header: "We Talk Like Humans",
    text: "Clear language and honest guidance"
  }, {
    header: "We've Done This Before",
    text: "Senior experience involved from day one"
  }, {
    header: "We Make It Simple",
    text: "Technology that works together and simplifies"
  }];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0", style: {
        backgroundImage: `url(${getImageSrc(heroImage)})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }, children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" }) }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10 pt-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl lg:text-8xl font-heading mb-6 leading-tight text-background", children: [
          "Peace of Mind.    ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-secondary", children: "Powered By Technology.    " })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl lg:text-3xl mb-8 text-background/90 font-light", children: "Zinfinity delivers integrated technology solutions for complex, modern environments." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
          /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", asChild: true, className: "text-lg px-8 py-6", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Talk to Us" }) }),
          /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", asChild: true, className: "text-lg px-8 py-6 bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary", children: /* @__PURE__ */ jsx(Link, { to: "/solutions", children: "How We Help" }) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading mb-6", children: "What We Do" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Zinfinity simplifies what others overcomplicate. Our services include:" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs(Card, { className: `hover-lift shadow-card text-center lg:col-span-2 bg-primary text-primary-foreground border-white/30 ${index === 4 ? "sm:col-span-2 sm:max-w-sm sm:mx-auto lg:max-w-none" : ""} ${index === 3 ? "lg:col-start-2" : ""} ${index === 4 ? "lg:col-start-4" : ""}`, style: {
        animationDelay: `${index * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 p-4 rounded-full bg-secondary/20 w-fit", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-8 h-8 text-secondary" }) }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl tracking-widest uppercase text-primary-foreground", children: feature.title })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "text-base text-primary-foreground/80", children: feature.description }) })
      ] }, index)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center animate-fade-up mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading mb-6 text-background", children: "What Makes Us Different" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-background/80 leading-relaxed max-w-3xl mx-auto", children: "Zinfinity was built as a response to how complicated and impersonal technology partnerships have become. Customers deserve clarity, honesty, and a partner who learns their business and stays involved." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-5 px-4 sm:px-0", children: keyPoints.map((point, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-start p-8 sm:p-6 rounded-xl bg-background text-foreground hover:bg-background/90 transition-colors text-center w-full sm:w-72 md:w-56 lg:w-52 border border-border/50", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xl sm:text-base tracking-widest uppercase font-heading mb-4 sm:mb-3 text-accent", children: point.header }),
        /* @__PURE__ */ jsx("span", { className: "text-lg sm:text-sm", children: point.text })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-32 bg-gradient-to-b from-muted/30 via-background to-muted/20 overflow-hidden relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.02]", style: {
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 animate-fade-up", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-heading mb-6", children: "Who We Work With" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-4xl mx-auto mb-4", children: "Zinfinity works with companies that operate at scale, manage complexity, and need a technology partner who understands real-world environments." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-xl bg-card border border-border/50 shadow-card h-full", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading mb-2 tracking-widest uppercase", children: "Enterprise Businesses" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Support for mid-market to large enterprises" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Large, complex environments" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Personal touch at scale" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Enterprise-level security and operational expectations" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-xl bg-card border border-border/50 shadow-card h-full", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading mb-2 tracking-widest uppercase", children: "Industry Experience" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Experience across regulated and operationally complex industries" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Banking and Financial Services" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Healthcare" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Energy and Utilities" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Transportation and Logistics" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Manufacturing" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Education" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-xl bg-card border border-border/50 shadow-card", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading mb-2 tracking-widest uppercase", children: "Global Organizations" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Support across the globe with in-region presence and partner-enabled delivery" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full max-w-4xl mx-auto mb-8", children: /* @__PURE__ */ jsx(WorldMap, {}) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: locationData.map((loc) => /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
              /* @__PURE__ */ jsx("span", { className: "px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-foreground cursor-default", children: loc.name }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-card text-card-foreground px-4 py-2 rounded-lg shadow-xl border border-border whitespace-nowrap text-xs", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground mb-0.5", children: loc.name }),
                  /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: loc.address })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 -mt-1", children: /* @__PURE__ */ jsx("div", { className: "border-6 border-transparent border-t-card" }) })
              ] })
            ] }, loc.country)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading mb-6", children: "Proven in the Real World" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "See how Zinfinity helps organizations simplify complex environments and deliver real, measurable results." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-12", children: [
        /* @__PURE__ */ jsxs(Carousel, { opts: {
          align: "start",
          loop: false
        }, setApi: setCarouselApi, className: "w-full", children: [
          /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-4", children: caseStudies.map((study, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-4 md:basis-1/2", children: /* @__PURE__ */ jsxs("div", { className: "h-full p-6 rounded-xl bg-card border border-border/50 shadow-card flex flex-col", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-heading mb-4", children: study.headline }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: "Challenge:" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: study.challenge })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: "What Zinfinity Did:" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: study.solution })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: "Results:" }),
              /* @__PURE__ */ jsx("ul", { className: "mt-2 space-y-1", children: study.results.map((result, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-foreground", children: result })
              ] }, idx)) })
            ] })
          ] }) }, index)) }),
          /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-0 -translate-x-full" }),
          /* @__PURE__ */ jsx(CarouselNext, { className: "right-0 translate-x-full" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-6", children: Array.from({
          length: slideCount
        }).map((_, index) => /* @__PURE__ */ jsx("button", { onClick: () => carouselApi?.scrollTo(index), className: `w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-accent" : "bg-muted-foreground/30"}`, "aria-label": `Go to slide ${index + 1}` }, index)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs(Link, { to: "/resources", className: "text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2", children: [
        "View all case studies",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 relative overflow-hidden", style: {
      background: "linear-gradient(to right, hsl(var(--accent)), hsl(var(--desert-orange)), hsl(var(--secondary)))"
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 51px)"
      } }) }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-heading text-accent-foreground mb-6", children: "Ready for peace of mind?" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", asChild: true, className: "text-lg px-8 py-6", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-primary-foreground", children: "Talk To Us" }) }),
          /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", asChild: true, className: "text-lg px-8 py-6 bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-primary", children: /* @__PURE__ */ jsx(Link, { to: "/solutions", children: "How We Help" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AIReadinessAssessment, {})
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Zinfinity Tech | Peace of Mind. Powered by IT.", "description": "Zinfinity delivers integrated technology solutions for complex, modern environments. AI Readiness, Cloud, Cybersecurity, Infrastructure, and Managed Services." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Navigation", "client:component-export": "default" })} ${renderComponent($$result2, "Home", Home, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/pages/Home", "client:component-export": "default" })} ${renderComponent($$result2, "Toaster", Toaster, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" })} ` })}`;
}, "/home/runner/workspace/src/pages/index.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
