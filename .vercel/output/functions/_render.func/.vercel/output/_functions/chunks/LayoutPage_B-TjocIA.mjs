import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro, f as renderHead, g as renderSlot } from './astro/server_DV5iJDhp.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-ful flex flex-col justify-center items-center pb-10"> <div class="h-[1px] w-[90%] my-10 bg-blue-900 "></div> <div class="flex flex-col justify-between items-center gap-4 px-20 w-full custom:flex-row"> <img src="/images/logo.png" class="h-36 custom:h-60" alt=""> <div class="flex flex-col md:flex-row gap-4 md:gap-16 lg:gap-32"> <div class="flex flex-row md:flex-col gap-10 md:gap-0"> <h2 class="font-bold text-colorBlue text-2xl">Industrias</h2> <div> <p class="text-xl text-gray-400 font-semibold my-2">Lacteos</p> <p class="text-xl text-gray-400 font-semibold my-2">Frutas, Pulpas y semillas</p> <p class="text-xl text-gray-400 font-semibold my-2">Otros Alimentos</p> <p class="text-xl text-gray-400 font-semibold my-2">Farmaceutico</p> </div> </div> <div class="block md:hidden h-[1px] w-[90%] bg-blue-900 "></div> <div class="flex flex-row md:flex-col gap-10 md:gap-0"> <h2 class="font-bold text-colorBlue text-2xl">Productos</h2> <div> <p class="text-xl text-gray-400 font-semibold my-2">Tanques</p> <p class="text-xl text-gray-400 font-semibold my-2">Pasteurizados</p> <p class="text-xl text-gray-400 font-semibold my-2">Trituradores</p> <p class="text-xl text-gray-400 font-semibold my-2">Evaporizadores</p> </div> </div> <div class="block md:hidden h-[1px] w-[90%] bg-blue-900 "></div> <div class="flex flex-row md:flex-col gap-10 md:gap-0"> <h2 class="font-bold text-colorBlue text-2xl">Soluciones</h2> <div> <p class="text-xl text-gray-400 font-semibold my-2">Fabricacion</p> <p class="text-xl text-gray-400 font-semibold my-2">Montajes</p> <p class="text-xl text-gray-400 font-semibold my-2">Automatizacion y Control</p> <p class="text-xl text-gray-400 font-semibold my-2">Capacitacion</p> <p class="text-xl text-gray-400 font-semibold my-2">Soporte y Mantenimiento</p> <p class="text-xl text-gray-400 font-semibold my-2">Proyectos</p> </div> </div> <div class="block md:hidden h-[1px] w-[90%] bg-blue-900 "></div> <div class="flex flex-row md:flex-col gap-10 md:gap-0"> <h2 class="font-bold text-colorBlue text-2xl">Terminos y Condiciones</h2> <div> <p class="text-xl text-gray-400 font-semibold my-2">Politicas</p> <p class="text-xl text-gray-400 font-semibold my-2">Privacidad</p> </div> </div> </div> </div> <div class="h-[1px] w-[90%] my-10 bg-blue-900 "></div> <div class="flex flex-row justify-between items-center px-20 w-full"> <p class="text-colorBlue font-bold text-center">© 2024 Fainox Group SAS, Soluciones para mejores procesos.</p> <div class="flex flex-row items-center gap-6"> <a href=""> <svg fill="currentColor" width="40" viewBox="0 0 24 24" aria-hidden="true" class="on su"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg> </a> <a href=""> <svg fill="currentColor" width="40" viewBox="0 0 24 24" aria-hidden="true" class="on su"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg> </a> </div> </div> </footer>`;
}, "/home/manurodriguez/fainox/src/components/footer.astro", void 0);

const industrias = [
  {
    name: "Lacteos y Derivados",
    type: "link"
  },
  {
    name: "Frutas, Pulpa y Jugos",
    type: "link"
  },
  {
    name: "Conservas, Salsas y Aderezos",
    type: "link"
  },
  {
    name: "Alimentos Varios",
    type: "link"
  }
  // {
  //   name: "Servicios e Ingenieria",
  //   type: "detail",
  // },
];
const sectores = [
  {
    title: "Lacteos y Derivados",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/industriasyservicios/Lacteos y Derivados",
    image: "/industrys/milk.webp",
    backgraund: "bg-custom-gradient",
    lines: [
      "Equipos para Leche",
      "Equipos para Yogurt",
      "Equipos para Quesos",
      "Equipos para Mantequilla",
      "Equipos Derivados Varios"
    ],
    imagesProducts: [
      "/products/7.webp",
      "/products/8.webp",
      "/products/15.webp"
    ]
  },
  {
    title: "Frutas, Pulpa y Jugos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/industriasyservicios/Frutas, Pulpa y Jugos",
    image: "/industrys/fruts.jpg",
    backgraund: "bg-custom-blue-gradient",
    lines: ["Equipos para Pulpas", "Equipos para Jugos y Bebidas"],
    imagesProducts: [
      "/products/7.webp",
      "/products/8.webp",
      "/products/15.webp"
    ]
  },
  {
    title: "Conservas, Salsas y Aderezos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/industriasyservicios/Conservas, Salsas y Aderezos",
    image: "/industrys/salsas.webp",
    backgraund: "bg-custom-blue2-gradient",
    lines: ["Equipos para Conservas", "Equipos para Salsas y Aderezos"],
    imagesProducts: [
      "/products/7.webp",
      "/products/8.webp",
      "/products/15.webp"
    ]
  },
  {
    title: "Alimentos Varios",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/industriasyservicios/Alimentos Varios",
    image: "/industrys/aceites.webp",
    backgraund: "bg-custom-gradient",
    lines: [
      "Aceites y Margarinas",
      "Harinas y Cereales",
      "Carnicos y Embutidos"
    ],
    imagesProducts: [
      "/products/7.webp",
      "/products/8.webp",
      "/products/15.webp"
    ]
  }
];

const $$HoverLinkIndustrias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden group-hover:block absolute top-12 -left-[150px] w-[400px] text-base border-2
    border-gray-300 rounded-lg p-2 bg-white font-medium shadow-box-black"> ${industrias.map(
    (industria) => {
      if (industria.type === "link") {
        return renderTemplate`<a${addAttribute(`/industriasyservicios/${industria.name}`, "href")} class="cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg"> <p>${industria.name}</p> </a>`;
      } else {
        return renderTemplate`<details> <summary class="cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg">${industria.name}</summary> <ul> <li> <a class="before:w-2 before:h-2 before:bg-colorBlue before:rounded-full cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg" href="#">Automatizacion</a> </li> <li> <a class="before:w-2 before:h-2 before:bg-colorBlue before:rounded-full cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg" href="#">Proyectos</a> </li> <li> <a class="before:w-2 before:h-2 before:bg-colorBlue before:rounded-full cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg" href="#">Servicios</a> </li> <li> <a class="before:w-2 before:h-2 before:bg-colorBlue before:rounded-full cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg" href="#">Productos</a> </li> </ul> </details>`;
      }
    }
  )} </div>`;
}, "/home/manurodriguez/fainox/src/components/hoverLinkIndustrias.astro", void 0);

const productos = [
  "agitadores",
  "autoclaves",
  "cabina para lavado",
  "descremadoras",
  "empacadoras",
  "envasadoras",
  "equipos para lecheria y devivados",
  "equipos para procesar frutas",
  "evaporadores",
  "formadoras de queso",
  "frezzers",
  "homogenizadores",
  "intercambiadores de calor",
  "lineas UHT",
  "mantequilleras",
  "marmitas de proceso",
  "mezcladores para solidos y polvos",
  "mixer - Emulsificadores",
  "molinos colidales",
  "pasteurizadores",
  "pulverizadores",
  "reactores",
  "silos para leche",
  "sistemas de bombeo",
  "soluciones para lavado CIP",
  "tanques",
  "tinas para queso",
  "yogurteras"
];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$HoverLinkProductos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden group-hover:grid absolute grid-cols-4 gap-1 w-[800px] border-gray-300 rounded-lg
    p-5 bg-white gap-y-1-6 font-medium shadow-box-black text-base"> ${productos.map((producto) => renderTemplate`<a class="decoration-slice hover:bg-gray-100 p-2 rounded-xl"${addAttribute(`/productos/${producto}`, "href")}> ${capitalize(producto)} </a>`)} </div>`;
}, "/home/manurodriguez/fainox/src/components/hoverLinkProductos.astro", void 0);

const $$Astro$2 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const { link, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="group relative"> <a${addAttribute(`/${link}`, "href")} class="flex flex-row justify-center gap-2 items-center text-sm lg:text-base xl:text-lg text-colorBlue font-bold py-4"${addAttribute(link, "aria-keyshortcuts")}> <p class="text-center"> ${name} </p> ${(link === "industriasyservicios" || link === "productos") && renderTemplate`<span class="arrow group-hover:rotate-195 group-hover:left-6 group-hover:top-1"></span>`} </a> ${link === "industriasyservicios" && renderTemplate`${renderComponent($$result, "HoverLinkIndustrias", $$HoverLinkIndustrias, {})}`} ${link === "productos" && renderTemplate`${renderComponent($$result, "HoverLinkProductos", $$HoverLinkProductos, {})}`} </li>`;
}, "/home/manurodriguez/fainox/src/components/link.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const links = [
    {
      "name": "Nosotros",
      "link": ""
    },
    {
      "name": "Industrias & Servicios",
      "link": "industriasyservicios"
    },
    {
      "name": "Productos",
      "link": "productos"
    },
    {
      "name": "Equipos Usados",
      "link": "equiposusados"
    },
    {
      "name": "Desarrollos & Novedades",
      "link": "desarrollosynovedades"
    },
    {
      "name": "Contacto",
      "link": "contacto"
    },
    {
      "name": "Cotizaci\xF3n",
      "link": "cotizacion"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 bg-white z-50 w-[98%] md:w-full flex flex-row justify-between items-center px-0 md:px-10 pt-3 transition-all duration-150"> <a href="/"> <img id="header-image" class="h-14 xl:h-16 transition-all duration-150" src="/images/logo.png" alt="Icono Fainox"> </a> <nav class="hidden lg:block"> <ul class="flex flex-row gap-6 lg:gap-8 xl:gap-14"> ${links.map((link) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "link": link.link, "name": link.name })}`)} </ul> </nav> <div class="block pr-6 lg:hidden">Menu</div> </header>`;
}, "/home/manurodriguez/fainox/src/components/navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/manurodriguez/fainox/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$LayoutPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutPage;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="w-full h-auto mt-20 xl:mt-20"> ${renderSlot($$result2, $$slots["default"])} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/manurodriguez/fainox/src/layouts/LayoutPage.astro", void 0);

export { $$LayoutPage as $, capitalize as c, industrias as i, productos as p, sectores as s };
