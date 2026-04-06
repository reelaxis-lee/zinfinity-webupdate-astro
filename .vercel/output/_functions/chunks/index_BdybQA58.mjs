import { c as createComponent } from './astro-component_DEuGNOEB.mjs';
import 'piccolore';
import './entrypoint_CBLO9Nzd.mjs';
import 'clsx';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect("/resources", 301);
}, "/home/runner/workspace/src/pages/resources/case-studies/index.astro", void 0);

const $$file = "/home/runner/workspace/src/pages/resources/case-studies/index.astro";
const $$url = "/resources/case-studies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
