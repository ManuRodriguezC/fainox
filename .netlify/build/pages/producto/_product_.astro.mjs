/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_3ALDwHyc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from '../../chunks/_astro_assets_Cg135-Tr.mjs';
import { c as capitalize, $ as $$LayoutPage } from '../../chunks/LayoutPage_CF1k_hnz.mjs';
import { p as productos } from '../../chunks/productos_D0Z_okRp.mjs';
import { B as ButtonCotizacion } from '../../chunks/ButtonCotizacion_e3Bb1-fq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return productos.map((producto) => ({
    params: { product: producto.name }
  }));
}
const $$product = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$product;
  const { product } = Astro2.params;
  const findProduct = productos.find((producto) => producto.name === product);
  if (!findProduct) return Astro2.redirect("/productos");
  const similarLine = productos.filter(
    (producto) => producto.linea === findProduct.linea && producto.name != findProduct.name
  );
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": `${product}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-32 flex flex-col w-full"> <div class="flex flex-row"> ${renderComponent($$result2, "Image", $$Image, { "src": findProduct?.images[0], "width": 500, "height": 500, "alt": `${findProduct.name}-Fainox Group` })} <div class="p-10"> <h1 class="text-colorBlue text-4xl font-bold">${findProduct.name}</h1> <p class="my-2 font-semibold text-gray-500">
Producto de la Linea - ${capitalize(findProduct.linea)} </p> <p class="text-xl py-12">${findProduct.description}</p> <div class=""> ${renderComponent($$result2, "ButtonCotizacion", ButtonCotizacion, { "client:load": true, "name": findProduct.name, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/ButtonCotizacion", "client:component-export": "default" })} </div> </div> </div> ${similarLine.length > 0 && renderTemplate`<div class="h-[1px] my-10 w-full bg-gray-500"></div>
        <div> <h3 class="text-colorBlue text-xl font-bold mb-5">
Productos de la misma Linea
</h3> <div class="flex flex-wrap gap-4 justify-center items-center"> ${similarLine.map((prod) => renderTemplate`<a class="border-2 rounded-md hover:shadow-box-black hover:border-gray-400 transition-all duration-150"${addAttribute(`/producto/${prod.name}`, "href")}> ${renderComponent($$result2, "Image", $$Image, { "src": prod?.images[0], "width": 250, "height": 250, "alt": `${prod.name}-Fainox Group` })} </a>`)} </div> </div>`} </section> ` })}`;
}, "/home/manurodriguez/fainox/src/pages/producto/[product].astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/producto/[product].astro";
const $$url = "/producto/[product]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$product,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
