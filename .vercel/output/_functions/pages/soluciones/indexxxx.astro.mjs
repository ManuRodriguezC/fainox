/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, e as renderScript, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CRNezd4r.mjs';
import 'kleur/colors';
import { p as productos, c as capitalize, $ as $$LayoutPage } from '../../chunks/LayoutPage_CHO-jBof.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BKZ9QKa7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Indexxxx = createComponent(($$result, $$props, $$slots) => {
  const imagesProducts = [
    "/products/7.webp",
    "/products/8.webp",
    "/products/15.webp",
    "/products/17.webp",
    "/products/18.webp",
    "/products/34-485.webp"
  ];
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Productos Fainox Group SAS" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-10 md:px-20 md:py-20"> <h1 class="text-colorBlue text-center text-base md:text-xl mb-4"> <span class="font-bold text-2xl">Fainox Grupo SAS</span> cuenta con una amplia categoria
      de productos
</h1> <div class="flex flex-col xl:flex-row w-full items-center justify-between"> <ul class="w-full xl:w-[60%] my-10 h-auto grid grid-cols-2 lg:grid-cols-3 gap-5"> ${productos.map((producto) => renderTemplate`<li> <a class="text-sm md:text-lg relative text-gray-600 hover:text-white before:content-[''] before:absolute before:-left-4 before:top-2
                  before:w-2 before:h-2 hover:before:h-6 before:rounded-full before:bg-colorBlue before:transition-all
                  before:duration-300 hover:before:w-[calc(100%+15px)] before:z-[-1] hover:before:-left-2 hover:before:top-0"${addAttribute(`/soluciones/${producto}`, "href")}> ${capitalize(producto)} </a> </li>`)} </ul> <div class="w-full h-auto md:w-[450px] md:h-[450px] overflow-hidden"> ${imagesProducts.map((image, index) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": `rounded-md shadow-box-black object-cover w-full h-full image images brightness-75`, "id": "mixImage", "width": "450", "height": "450", "src": image, "alt": `imageProduct${index}` })}`)} </div> </div> </section> ` })} ${renderScript($$result, "/home/manurodriguez/fainox/src/pages/soluciones/indexxxx.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/manurodriguez/fainox/src/pages/soluciones/indexxxx.astro", undefined);

const $$file = "/home/manurodriguez/fainox/src/pages/soluciones/indexxxx.astro";
const $$url = "/soluciones/indexxxx";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Indexxxx,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
