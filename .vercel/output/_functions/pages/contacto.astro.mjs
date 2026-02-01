/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from '../chunks/astro/server_CRNezd4r.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_BKZ9QKa7.mjs';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_CHO-jBof.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'clsx';
export { renderers } from '../renderers.mjs';

function Map() {
  const latitud = "5.026527681928887";
  const longitud = "-73.9850548227405";
  const redirectUrl = `https://www.google.com/maps?q=${latitud},${longitud}&z=15`;
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4744310990823!2d-73.9850548227405!3d5.026527681928887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406e2af6b1fad1%3A0xf33fbc3cd72b77f!2sCl%208%20%2337%20Local%20%23%20100%2C%20Zipaquir%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1736728271088!5m2!1ses-419!2sco";
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
    /* @__PURE__ */ jsx(
      "iframe",
      {
        src: googleMapsUrl,
        width: "100%",
        height: "100%",
        style: { border: 0 },
        loading: "lazy",
        allowFullScreen: true,
        title: "Google Map"
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: redirectUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "absolute top-0 left-0 w-full h-full z-10"
      }
    )
  ] });
}

const $$IconWhatsapp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 259" width="25" height="25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"></path><path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"></path></svg>`;
}, "/home/manurodriguez/fainox/src/components/iconWhatsapp.astro", undefined);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const offices = [
    {
      classStyle: "absolute top-0 left-0 w-full h-full clip-left flex",
      classImage: "w-[60%] absolute object-cover md:object-container top-0 h-[100%] brightness-50 hover:brightness-75 transition-all duration-200",
      title: "Sede Administrativa y Comercial",
      city: "Colombia: Calle 8 No 37-46 Local # 100, C.C. La Catedral, Zipaquir\xE1 - Cundinamarca, Colombia.",
      address: "Quito: Avenida Los Aceitunos y Eloy Alfaro. Quito, Ecuador.",
      image: "/offices/office1.webp"
    },
    {
      classStyle: "absolute top-0 right-0 w-full h-full clip-right flex",
      classImage: "w-[60%] absolute top-0 h-[100%] brightness-50 hover:brightness-75 transition-all duration-200",
      title: "Sede de Fabricaci\xF3n  y Desarrollo",
      city: "Colombia: Planta de producci\xF3n Barrio Carvajal",
      address: "Quito: Avenida Los Aceitunos y Eloy Alfaro. Quito, Ecuador.",
      image: "/servicios/fabricacion1.webp"
    }
  ];
  const messageWhatsApp = "Gracias%20por%20comunicarte%20con%20FAINOX%20GROUP%20SAS.%20\xBFC\xF3mo%20podemos%20ayudarte?";
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Contacto - Fainox" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-auto"> <!-- py-20 px-10 --> <div class="py-20 px-5 md:px-10"> <h1 class="text-colorBlue font-bold text-5xl">Contactos</h1> <p class="p-5 text-gray-600 text-lg">
Si quieres comunicarte con alguno de nuestros asesores puedes hacerlo
        atravez de nuestros canales:
</p> <ul class="flex flex-col gap-3 px-10 text-gray-700 list-disc"> <li> <span class="font-bold">
División Comercial
</span> <p class="flex flex-col md:flex-row">
Teléfonos
<a class="text-colorBlue cursor-pointer underline flex flex-row ml-5"${addAttribute(`https://api.whatsapp.com/send?phone=573241390907&text=${messageWhatsApp}`, "href")} target="_blank" rel="noopener noreferrer"> <span> ${renderComponent($$result2, "IconWhatsapp", $$IconWhatsapp, {})} </span>
(+57) 3241390907
</a>,
<a class="text-colorBlue cursor-pointer underline flex flex-row ml-5"${addAttribute(`https://api.whatsapp.com/send?phone=57223369750&text=${messageWhatsApp}`, "href")} target="_blank" rel="noopener noreferrer"> <span> ${renderComponent($$result2, "IconWhatsapp", $$IconWhatsapp, {})} </span>
(+57) 3223369750
</a> </p> <p>
Correo Electronico: comercial@fainoxgroup.com
</p> </li> <li> <span class="font-bold">
División Administrativa y Servicio al Cliente
</span> <p class="flex flex-row">
Teléfono
<a class="text-colorBlue cursor-pointer underline flex flex-row ml-5"${addAttribute(`https://api.whatsapp.com/send?phone=573144687182&text=${messageWhatsApp}`, "href")} target="_blank" rel="noopener noreferrer"> <span> ${renderComponent($$result2, "IconWhatsapp", $$IconWhatsapp, {})} </span>
(+57) 3144687182
</a> </p> <p>
Correo Electronico: administracion@fainoxgroup.com
</p> </li> <li> <span class="font-bold">
División Técnica y Desarrollo
</span> <p class="flex flex-row">
Teléfono
<a class="text-colorBlue cursor-pointer underline flex flex-row ml-5"${addAttribute(`https://api.whatsapp.com/send?phone=573223369750&text=${messageWhatsApp}`, "href")} target="_blank" rel="noopener noreferrer"> <span> ${renderComponent($$result2, "IconWhatsapp", $$IconWhatsapp, {})} </span>
(+57) 3223369750
</a> </p> <p>
Correo Electronico: info@fainoxgroup.com
</p> </li> </ul> </div> <div class="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[500px] w-full"> <!-- <div class="flex flex-wrap justify-center items-start gap-20 py-16"> --> ${offices.map(({ classStyle, classImage, title, address, image, city }, index) => renderTemplate`<div${addAttribute(`${classStyle} ${index % 2 === 0 ? "flex-col" : "relative flex-col-reverse"}`, "class")}> ${renderComponent($$result2, "Image", $$Image, { "class": "object-cover w-[55%] h-[250px] md:h-[300px] shadow-xl rounded-xl", "class": `${index % 2 === 0 ? `${classImage} left-0` : `${classImage} right-0`}`, "width": 300, "height": 300, "src": image, "alt": title })} <div${addAttribute(`absolute group w-[45%] lg:w-full z-50 text-white p-5 flex flex-col gap-2 top-0 lg:top-10 ${index % 2 === 0 ? "left-0" : "right-0 justify-center place-items-end"}`, "class")}> <h2 class="pt-5 md:text-xl lg:text-2xl font-semibold">${title}</h2> <p class="font-light md:font-normal transition-all duration-200 text-white text-xs xl:text-base">${city}</p> <p class="font-light md:font-normal transition-all duration-200 text-white text-xs xl:text-base">${address}</p> </div> </div>`)} </div> <div${addAttribute(`h-[100px] brightness-90 hover:brightness-100 hover:h-[400px] transition-all duration-500 z-1000`, "class")}> ${renderComponent($$result2, "Map", Map, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/Map", "client:component-export": "default" })} </div> </section> ` })}`;
}, "/home/manurodriguez/fainox/src/pages/contacto.astro", undefined);

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
