/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CQFcNYbx.mjs';
import 'kleur/colors';
import { F as FormContact, p as productosUsados } from '../chunks/productosUsados_DPZ1ybmy.mjs';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_B5C4cmgW.mjs';
import { P as ProductForLists } from '../chunks/ProductForLists_yANoWSTB.mjs';
export { renderers } from '../renderers.mjs';

const $$Equiposusados = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Oportunidades de compra con Fainox" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-auto flex flex-col justify-center items-center py-20"> <h1 id="button-form" class="text-white text-2xl font-semibold border-2 bg-colorBlue border-white px-6 py-2
      rounded-lg shadow-box-black hover:scale-105 transition-all duration-200 cursor-pointer">
Alguien necesita lo que tu ya no usas, da clic para vender tu producto!
</h1> ${renderComponent($$result2, "FormContact", FormContact, { "pay": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/FormContact", "client:component-export": "default" })} <div class="w-full flex flex-row justify-around"> <p class="text-colorBlue text-xl font-semibold">Productos usados de excelente calidad</p> <p class="text-gray-500 text-lg">Productos encontrados: ${productosUsados.length}</p> </div> <div class="flex flex-wrap gap-6 justify-center items-center p-10"> ${productosUsados.map((product) => renderTemplate`${renderComponent($$result2, "ProductForLists", ProductForLists, { ...product, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/ProductForLists", "client:component-export": "default" })}`)} </div> </section> ` })} `;
}, "/home/manurodriguez/fainox/src/pages/equiposusados.astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/equiposusados.astro";
const $$url = "/equiposusados";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Equiposusados,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
