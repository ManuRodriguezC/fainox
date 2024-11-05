/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CQFcNYbx.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_Bll6zqXp.mjs';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_B5C4cmgW.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const offices = [
    {
      title: "Sede Principal",
      city: "Zipaquira - Cundinamarca",
      address: "Calle 145 # 45 - 52",
      phone: "+57 3005786932",
      image: "/offices/office1.jpg"
    },
    {
      title: "Sede de Fabricacion  y Ensamble",
      city: "Medellin - Antioquia",
      address: "Carrera 55 # 45 - 78",
      phone: "+57 314875236",
      image: "/offices/office2.jpg"
    },
    {
      title: "Sede Ventas",
      city: "Bogot\xE1 - Cundinamarca",
      address: "Avenida Boyaca # 45 - 25",
      phone: "+57 3124786596",
      image: "/offices/office3.jpg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Contacto - Fainox" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full py-20 px-10"> <h1 class="text-colorBlue font-bold text-5xl">Contacto</h1> <p class="p-5 text-gray-600 text-lg">
Si quieres contartarte con alguno de nuestros asesores pueden hacerlo
      atravez de uno de nuestros canales:
</p> <ul class="px-10 text-gray-700 list-disc"> <li>
Quieres vender alguno producto: <a href="/equiposusados" class="text-colorBlue font-bold">Aqui!</a> </li> <li>
Quieres recibir una Cotizacion de los prodcutos que seleccionaste: <a href="/cotizacion" class="text-colorBlue font-bold">Aqui!</a> </li> </ul> <p class="p-5 text-gray-600">
Si no a continuacion podras conocer nuestras diferentes sedes y lineas en
      las cuales nos podras contactar.
</p> <div class="flex flex-wrap justify-center items-center gap-20 py-16"> ${offices.map(({ title, address, phone, image, city }) => renderTemplate`<div class="w-[320px] md:w-[400px] h-auto"> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover w-full h-[250px] md:h-[300px] shadow-xl rounded-xl", "width": 300, "height": 300, "src": image, "alt": title })} <h2 class="text-colorBlue pt-5 text-2xl font-semibold">${title}</h2> <p class="text-gray-500 text-sm">Ciudad: ${city}</p> <p class="text-gray-500 text-sm">Dirreción: ${address}</p> <p class="text-gray-500 text-sm">Telefono: ${phone}</p> </div>`)} </div> <div id="tyc" class="p-20 flex flex-row gap-20"> <div> <h4 class="text-colorBlue text-3xl font-semibold mb-3">Terminos</h4> <p class="text-gray-600 text-sm">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
</p> </div> <div> <h4 class="text-colorBlue text-3xl font-semibold mb-3">Condiciones</h4> <p class="text-gray-600 text-sm">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
</p> </div> </div> </section> ` })}`;
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
