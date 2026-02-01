/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CRNezd4r.mjs';
import 'kleur/colors';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_CHO-jBof.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Fainox Group SAS" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col lg:flex-row justify-around px-4 md:px-20 py-10 md:py-40 gap-5 md:gap-0"> <div class="flex flex-col gap-4"> <h2 class="text-colorBlue text-5xl font-bold">Oops!</h2> <h1 class="text-colorBlue text-2xl font-medium">
Lo sentimos, no pudimos encontrar la página que buscas
</h1> <p> <a href="/" class="underline-offset-4 hover:underline text-colorBlue">
Ve a la página principal
</a> o <a href="/industriasyservicios" class="underline-offset-4 hover:underline text-colorBlue">Conoce nuestras industrias</a> </p> </div> <div class="text-colorBlue"> <p class="text-9xl">404</p> <p class="text-2xl">Página no encontrada</p> </div> </section> ` })}`;
}, "/home/manurodriguez/fainox/src/pages/404.astro", undefined);

const $$file = "/home/manurodriguez/fainox/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
