/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CQFcNYbx.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_Bll6zqXp.mjs';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_B5C4cmgW.mjs';
/* empty css                                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Desarrollosynovedades = createComponent(($$result, $$props, $$slots) => {
  const novedades = [
    {
      title: "Lorem Impsum assattsuuas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/innovations/inno1.webp"
    },
    {
      title: "Lorem Impsum assattsuuas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/innovations/inno2.webp"
    },
    {
      title: "Lorem Impsum assattsuuas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/innovations/inno3.webp"
    }
  ];
  const aliados = ["/alianz/stk.webp", "/alianz/logo.webp"];
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i = 0; i < parseInt(marqueeElementsDisplayed); i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  });
<\/script>`])), renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Novedades Fainox" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-auto flex flex-col justify-center items-center md:pt-20 lg:pt-36"> <h1 class="w-[70%] text-center text-colorBlue font-semibold md:leading-7 lg:leading-10 md:text-2xl lg:text-4xl">
Fainox Group te ofrece las últimas innovaciones y desarrollos de la
      industria, presentando soluciones que transforman el futuro.
</h1> <p class="w-[80%] text-xs md:text-base md:w-[50%] text-center text-gray-500 py-10">
Desde 2012, Fainox Group se ha comprometido a desarrollar soluciones
      innovadoras que impacten positivamente en la vida de las personas. Con un
      enfoque en la colaboración, trabajamos de la mano con diversas compañías y
      organizaciones para crear nuevos productos que rompan fronteras y mejoren
      la calidad de vida. Juntos, buscamos transformar el futuro y hacer una
      diferencia significativa en la sociedad.
</p> <div class="flex flex-wrap justify-center items-center gap-20 py-36"> ${novedades.map(({ title, description, image }) => renderTemplate`<div class="w-[320px] md:w-[400px] h-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover w-full h-[250px] md:h-[300px] rounded-xl", "width": 300, "height": 300, "src": image, "alt": title })} <h2 class="text-colorBlue py-5 text-xl">${title}</h2> <p class="text-gray-500 text-sm">${description}</p> </div>`)} </div> <div class="w-full flex flex-col justify-center items-center"> <h2 class="text-colorBlue text-3xl font-bold">Nuestros Aliados</h2> <div class="marquee"> <ul class="marquee-content"> ${aliados.map((ali) => renderTemplate`<li> ${renderComponent($$result2, "Image", $$Image, { "width": 500, "height": 500, "src": ali, "alt": ali })} </li>`)} </ul> </div> </div> </section> ` }));
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
