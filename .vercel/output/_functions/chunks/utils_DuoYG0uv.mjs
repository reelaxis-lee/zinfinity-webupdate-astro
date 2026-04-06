import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import { r as renderTemplate, m as maybeRenderHead, l as renderComponent, o as renderSlot, p as renderHead, h as addAttribute } from './entrypoint_CBLO9Nzd.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$CookieConsentStatic = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="cookie-consent" class="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md text-primary-foreground p-4 shadow-lg" style="display: none;"> <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"> <p class="text-sm text-primary-foreground/90 text-center sm:text-left">\nWe use cookies to improve your experience. By continuing to use this site, you consent to our use of cookies.', ' <a href="/privacy-policy" class="underline hover:text-secondary transition-colors">\nPrivacy Policy\n</a> </p> <button id="cookie-accept" class="shrink-0 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-3">\nAccept\n</button> </div> </div> <script>\n  (function () {\n    var banner = document.getElementById("cookie-consent");\n    var btn = document.getElementById("cookie-accept");\n    if (!localStorage.getItem("cookieConsent")) {\n      banner.style.display = "block";\n    }\n    btn.addEventListener("click", function () {\n      localStorage.setItem("cookieConsent", "true");\n      banner.style.display = "none";\n    });\n  })();\n<\/script>'])), maybeRenderHead(), " ");
}, "/home/runner/workspace/src/components/CookieConsentStatic.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Zinfinity delivers integrated technology solutions for complex, modern environments." } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="author" content="Zinfinity Tech"><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=Pacifico&display=swap" rel="stylesheet"><meta property="og:title"', '><meta property="og:description"', `><meta property="og:type" content="website"><meta property="og:image" content="/og-image.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="/og-image.png"><link rel="icon" href="/favicon.png" type="image/png"><!-- ZoomInfo Script --><script>
      window[(function(_0SC,_wl){var _mkEFA='';for(var _IsDw9i=0;_IsDw9i<_0SC.length;_IsDw9i++){_mkEFA==_mkEFA;_BbDJ!=_IsDw9i;_wl>2;var _BbDJ=_0SC[_IsDw9i].charCodeAt();_BbDJ-=_wl;_BbDJ+=61;_BbDJ%=94;_BbDJ+=33;_mkEFA+=String.fromCharCode(_BbDJ)}return _mkEFA})(atob('cF9mKicie3ksYXsx'), 22)] = '11305aaae21751470443'; var zi = document.createElement('script'); (zi.type = 'text/javascript'), (zi.async = true), (zi.src = (function(_qaN,_a7){var _KzpDj='';for(var _in4aNv=0;_in4aNv<_qaN.length;_in4aNv++){var _cYiQ=_qaN[_in4aNv].charCodeAt();_a7>1;_cYiQ-=_a7;_cYiQ+=61;_cYiQ%=94;_KzpDj==_KzpDj;_cYiQ+=33;_cYiQ!=_in4aNv;_KzpDj+=String.fromCharCode(_cYiQ)}return _KzpDj})(atob('bHh4dHc+MzNudzJ+bTF3Z3ZtdHh3MmdzcTN+bTF4ZWsybnc='), 4)), document.readyState === 'complete'?document.body.appendChild(zi): window.addEventListener('load', function(){ document.body.appendChild(zi) });
    <\/script>`, "</head> <body> ", " ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "CookieConsentStatic", $$CookieConsentStatic, {}));
}, "/home/runner/workspace/src/layouts/BaseLayout.astro", void 0);

const logoColor = new Proxy({"src":"/_astro/zinfinity-logo-color.pQ84OUOE.png","width":706,"height":837,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/workspace/src/assets/zinfinity-logo-color.png";
							}
							
							return target[name];
						}
					});

const logoWhite = new Proxy({"src":"/_astro/zinfinity-logo-2.BIIVFtwT.png","width":711,"height":844,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/workspace/src/assets/zinfinity-logo-2.png";
							}
							
							return target[name];
						}
					});

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function getImageSrc(img) {
  if (!img) return "";
  if (typeof img === "string") return img;
  return img.src;
}

export { $$BaseLayout as $, logoWhite as a, cn as c, getImageSrc as g, logoColor as l };
