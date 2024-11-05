/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CQFcNYbx.mjs';
import 'kleur/colors';
import { p as productos, c as capitalize, $ as $$LayoutPage } from '../chunks/LayoutPage_B5C4cmgW.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bll6zqXp.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const imagesProducts = [
    "/products/7.webp",
    "/products/8.webp",
    "/products/15.webp",
    "/products/17.webp",
    "/products/18.webp",
    "/products/34-485.webp"
  ];
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Productos Fainox Group SAS" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-20"> <h1 class="text-colorBlue text-xl mb-4"> <span class="font-bold text-2xl">Fainox Grupo SAS</span> cuenta con una amplia categoria
      de productos
</h1> <div class="flex flex-row w-full items-center justify-between"> <ul class="w-[60%] h-auto grid grid-cols-3 gap-5"> ${productos.map((producto) => renderTemplate`<li> <a class="relative text-gray-600 hover:text-white before:content-[''] before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 hover:before:h-6
                  before:rounded-full before:bg-colorBlue before:transition-all before:duration-300 hover:before:w-[calc(100%+15px)]
                  before:z-[-1] hover:before:-left-2 hover:before:top-0"${addAttribute(`/productos/${producto}`, "href")}> ${capitalize(producto)} </a> </li>`)} </ul> <div class="w-[450px] h-[450px] overflow-hidden"> ${imagesProducts.map((image, index) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": `rounded-md shadow-box-black object-cover w-full h-full image images brightness-75`, "id": "mixImage", "width": "450", "height": "450", "src": image, "alt": `imageProduct${index}` })}`)} </div> </div> </div> ` })} `;
}, "/home/manurodriguez/fainox/src/pages/productos/index.astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/productos/index.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
