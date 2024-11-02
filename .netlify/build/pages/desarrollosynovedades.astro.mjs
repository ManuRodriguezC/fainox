/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_3ALDwHyc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_CF1k_hnz.mjs';
export { renderers } from '../renderers.mjs';

const $$Desarrollosynovedades = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Novedades Fainox" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Desarrollos y Novedades</h1> ` })}`;
}, "/home/manurodriguez/fainox/src/pages/desarrollosynovedades.astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/desarrollosynovedades.astro";
const $$url = "/desarrollosynovedades";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Desarrollosynovedades,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
