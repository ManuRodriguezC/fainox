/* empty css                                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../../chunks/astro/server_3ALDwHyc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { c as capitalize, $ as $$LayoutPage, p as productos$1 } from '../../chunks/LayoutPage_CF1k_hnz.mjs';
import { p as productos } from '../../chunks/productos_D0Z_okRp.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Cg135-Tr.mjs';
import { B as ButtonCotizacion } from '../../chunks/ButtonCotizacion_e3Bb1-fq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ProductoForList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductoForList;
  const { name, description, images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-[350px] min-h-[600px] max-h-[600px] flex flex-col gap-4 mb-10 backgroundProduct px-4 rounded-md
    seeContent cursor-pointer border-2 hover:border-gray-400 hover:shadow-box-black transition-all duration-100`, "class")}> <a${addAttribute(`/producto/${name}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "w-full h-[350px] rounded-md object-cover", "height": "350", "width": "350", "src": images[0], "alt": name })} </a> <div class="w-full flex flex-col gap-5 mb-5"> <div class="flex flex-row justify-between gap-4"> <a${addAttribute(`/producto/${name}`, "href")} class="w-[220px] text-xl text-left font-bold text-colorBlue"> ${name} </a> ${renderComponent($$result, "ButtonCotizacion", ButtonCotizacion, { "name": name, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/ButtonCotizacion", "client:component-export": "default" })} </div> <p class="text-sm text-pretty line-clamp-6">${description}</p> </div> </div>`;
}, "/home/manurodriguez/fainox/src/components/industrias/productoForList.astro", void 0);

const $$Astro = createAstro();
function getStaticPaths() {
  return productos$1.map((producto) => ({
    params: { category: producto }
  }));
}
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const filterProductsCategory = productos.filter(
    (product) => product.linea === category
  );
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": `${capitalize(category)} - Fainox Group` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative grid grid-cols-4 gap-4 px-20"> <aside class="sticky top-24 left-0 w-[350px] h-[70vh] border-2 border-blue-200 p-4 shadow-box-black rounded-md overflow-auto"> <ul class="px-2 py-2 flex flex-col gap-2"> ${productos$1.map((product) => renderTemplate`<li${addAttribute(`w-full bg-blue-100/30 rounded-lg hover:bg-blue-300 ${product === category && "bg-blue-800 text-white"}`, "class")}> <a class="block w-full px-5"${addAttribute(`/productos/${product}`, "href")}>${capitalize(product)}</a> </li>`)} </ul> </aside> <div class="col-span-3 flex flex-col justify-around items-center overflow-y-auto h-full scroll-hidden"> <h1 class="text-4xl text-colorBlue font-bold">${capitalize(category)}</h1> <p class="text-right text-lg text-gray-500 font-semibold mb-6">
Productos encontrados: ${filterProductsCategory.length} </p> <div class="flex flex-wrap gap-10 justify-center items-center"> ${filterProductsCategory.map((product) => renderTemplate`${renderComponent($$result2, "ProductoForList", $$ProductoForList, { ...product })}`)} </div> </div> </section> ` })}`;
}, "/home/manurodriguez/fainox/src/pages/productos/[category].astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/productos/[category].astro";
const $$url = "/productos/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
