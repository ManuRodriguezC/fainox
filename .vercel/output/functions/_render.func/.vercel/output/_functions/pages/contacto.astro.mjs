/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CQFcNYbx.mjs';
import 'kleur/colors';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_ntxe9uOy.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Contacto - Fainox" })}`;
}, "/home/manurodriguez/fainox/src/pages/contacto.astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contacto,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
