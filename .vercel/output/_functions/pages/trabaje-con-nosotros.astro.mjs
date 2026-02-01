/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, e as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CRNezd4r.mjs';
import 'kleur/colors';
import { F as FormContact } from '../chunks/FormContact_BnbgF4BR.mjs';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_CHO-jBof.mjs';
export { renderers } from '../renderers.mjs';

const $$TrabajeConNosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Trabaje con Nosotros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full flex flex-col justify-center py-10 px-5 md:py-20"> <h1 class="text-colorBlue text-3xl md:text-4xl font-bold text-center">Trabaje con Nosotros</h1> <div class="w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col gap-4 mt-10 leading-8 text-center"> <p>
En nuestra empresa creemos en el valor de las relaciones profesionales, interpersonales y en el conocimiento de quienes día a día toman decisiones en una industria.
</p> <p class="">
Por eso hemos creado un modelo de colaboración flexible, pensado en profesionales, técnicos, tecnólogos, que deseen generar <strong>ingresos extras</strong> y que estén vinculados como proveedores de otros segmentos NO SIMILARES a nuestro objeto comercial y que deseen recomendar nuestras soluciones a industrias del sector Alimentario, Lácteo, Bebidas, Alimentos, Farmacéutico y afines.
</p> </div> <div class="w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-center items-center mt-16 md:mt-0 gap-4 my-10"> <div class="w-full md:w-3/5 flex flex-col"> <div class="flex flex-col gap-2 justify-center items-center"> <h2 class="border-2 border-blue-800 w-fit text-colorBlue px-4 py-2 rounded-md mb-4">
¿En qué consiste la colaboración?
</h2> <div class="flex flex-col gap-4 text-justify"> <p class="leading-8">
Si usted considera que nuestro portafolio es de utilidad para alguna empresa, proyecto, suministro, ingeniería, etc.; Del cual tiene conocimiento y/o  tiene algún vínculo o contacto para lograr el acercamiento al mismo en busca de oportunidades comerciales  podrá comisionar gracias a su gestión.
</p> <p class="leading-8">
Todo será manejado dentro del respeto, confidencialidad y ética profesional que corresponde según su debe ser.
</p> <p class="leading-8">
Nuestro equipo de ingeniería y comercial le brindarán el apoyo necesario para avanzar en el objetivo y se harán cargo desde el principio
</p> </div> </div> </div> <div class="w-full md:w-0.5 m-6 h-0.5 md:h-[500px] bg-colorBlue"></div> <div class="w-full md:w-2/5"> <div class="relative rounded-2xl border border-blue-500/30
                bg-gradient-to-br from-blue-50 via-white to-blue-100
                p-8 shadow-sm hover:shadow-md transition"> <div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl"></div> <h3 class="text-xl font-semibold text-center text-blue-700 mb-4">
¿Qué ofrecemos?
</h3> <ul class="space-y-3 text-gray-700"> <li class="flex items-start gap-3"> <span class="text-blue-600 mt-1">✔</span> <span>Contrato freelance (comisionista) sin relación laboral.</span> </li> <li class="flex items-start gap-3"> <span class="text-blue-600 mt-1">✔</span> <span>Comisiones por ventas y/o contactos efectivos.</span> </li> <li class="flex items-start gap-3"> <span class="text-blue-600 mt-1">✔</span> <span>Respaldo técnico y comercial de una empresa con experiencia.</span> </li> <li class="flex items-start gap-3"> <span class="text-blue-600 mt-1">✔</span> <span>Acompañamiento durante el proceso comercial y técnico.</span> </li> </ul> </div> </div> </div> <div class="h-full flex flex-col justify-center items-center seeForm"> ${renderComponent($$result2, "FormContact", FormContact, { "work": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/FormContact", "client:component-export": "default" })} </div> </section> ` })} ${renderScript($$result, "/home/manurodriguez/fainox/src/pages/trabaje-con-nosotros.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/manurodriguez/fainox/src/pages/trabaje-con-nosotros.astro", undefined);

const $$file = "/home/manurodriguez/fainox/src/pages/trabaje-con-nosotros.astro";
const $$url = "/trabaje-con-nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TrabajeConNosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
