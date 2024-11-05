/* empty css                                      */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../chunks/astro/server_CQFcNYbx.mjs';
import 'kleur/colors';
import { i as industrias, c as capitalize, $ as $$LayoutPage } from '../chunks/LayoutPage_B5C4cmgW.mjs';
import { p as productos } from '../chunks/productos_D0Z_okRp.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bll6zqXp.mjs';
import { B as ButtonCotizacion } from '../chunks/ButtonCotizacion_e3Bb1-fq.mjs';
import 'clsx';
import { s as subIndustrys } from '../chunks/subIndustrys__G041kmi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Producto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Producto;
  const { name, description, images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-auto h-[300px] md:h-[400px] flex flex-row group border-2 hover:border-gray-400 hover:shadow-box-black rounded-md "> <a${addAttribute(`/producto/${name}`, "href")} class="w-[280px] md:w-[350px] h-full z-10 transition-transform duration-500"> ${renderComponent($$result, "Image", $$Image, { "src": images[0], "alt": name, "width": "350", "height": "350", "class": "w-full h-full p-4 object-cover rounded-md group-hover:rounded-left brightness-75 group-hover:brightness-100" })} <p class="block group-hover:hidden absolute bottom-0 w-full left-0 p-2 rounded-lg text-xl text-colorBlue bg-white font-semibold">${name}</p> </a> <div class="hidden md:block w-0 h-full -translate-x-full group-hover:translate-x-0 group-hover:w-[350px] overflow-hidden transition-all"> <div class="flex flex-col justify-between text-colorBlue opacity-0 h-full group-hover:opacity-100 transition-opacity duration-300 group-hover:rounded-rigth p-4 border-1 border-gray-500"> <a${addAttribute(`/producto/${name}`, "href")}> <h3 class="font-bold text-xl py-2">${name}</h3> <p class="text-gray-500 text-xl font-normal line-clamp-6">${description}</p> </a> ${renderComponent($$result, "ButtonCotizacion", ButtonCotizacion, { "client:load": true, "name": name, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/ButtonCotizacion", "client:component-export": "default" })} </div> </div> </div>`;
}, "/home/manurodriguez/fainox/src/components/industrias/producto.astro", void 0);

const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24" fill="none"> <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F"></path> </svg>`;
}, "/home/manurodriguez/fainox/src/icons/arrowRight.astro", void 0);

const $$ArrowLeft = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24" fill="none"> <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" fill="#0F0F0F"></path> </svg>`;
}, "/home/manurodriguez/fainox/src/icons/arrowLeft.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Fainox Group en todas las industrias" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="content-info" class="flex flex-col gap-10 px-5 lg:px-10 mt-36"> ${industrias.map((industry, index) => {
    if (industry.type === "link") {
      const productsInIndustry = productos.filter(
        (product) => product.industry.includes(industry.name)
      );
      return renderTemplate`<div class="flex flex-col"> <a${addAttribute(`/industriasyservicios/${industry.name}`, "href")} class="text-white rounded-md text-4xl text-center hover:bg-blue-800 hover:shadow-xl transition-all duration-150 font-semibold bg-colorBlue px-4 py-2">
Industria - ${industry.name} </a> ${subIndustrys[industry.name].map((typeSubIndustry, indexx) => {
        const filterSubIndustry = productsInIndustry.filter(
          (typeProduct) => typeProduct.subIndustry === typeSubIndustry.name
        );
        return renderTemplate`<div class="indu"> <h3 class="text-3xl font-bold text-center md:ml-10 py-4 text-colorBlue">${capitalize(typeSubIndustry.name)}</h3> <div class="w-95vw flex flex-row justify-between items-center"> <button${addAttribute(`left-${index}-${indexx}`, "id")} class="hidden md:block md:w-[5%] h-28 hover:scale-105 transition-all duration-100 left no-display"> ${renderComponent($$result2, "ArrowLeft", $$ArrowLeft, {})} </button> <div${addAttribute(`product-container-${index}-${indexx}`, "id")} class="flex flex-row gap-4 overflow-y-hidden scroll-hidden p-6 md:pr-96 w-full md:w-[74%] lg:w-[85%]"> <img${addAttribute(typeSubIndustry.image, "src")} class="hidden sm:block w-[350px] aspect-square object-cover shadow-box-black rounded-md"${addAttribute(typeSubIndustry.name, "alt")}> ${filterSubIndustry.map((productFilter) => renderTemplate`${renderComponent($$result2, "Producto", $$Producto, { ...productFilter })}`)} </div> <button${addAttribute(`right-${index}-${indexx}`, "id")} class="hidden md:block md:w-[5%] w-[5%] h-28 hover:scale-105 transition-all duration-100 right"> ${renderComponent($$result2, "ArrowRight", $$ArrowRight, {})} </button> </div> </div>`;
      })} </div>`;
    }
  })} </div>  ` })}`;
}, "/home/manurodriguez/fainox/src/pages/industriasyservicios/index.astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/industriasyservicios/index.astro";
const $$url = "/industriasyservicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
