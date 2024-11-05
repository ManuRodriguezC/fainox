/* empty css                                      */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_CQFcNYbx.mjs';
import 'kleur/colors';
import { s as sectores, $ as $$LayoutPage } from '../chunks/LayoutPage_B5C4cmgW.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_Bll6zqXp.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                                 */
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      name: "Proyectos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "servicios.webp",
      classDiv: "relative group bg-gray-400 row-span-2 col-span-1 rounded-xl overflow-hidden hover:shadow-box-black",
      classImage: "w-full h-full object-cover rounded-xl brightness-75 group-hover:brightness-50 transition-all duration-200",
      info: true
    },
    {
      name: "Fabricaci\xF3n",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "fabricacion.webp",
      classDiv: "relative group bg-gray-400 row-span-1 rounded-xl col-span-2 hover:shadow-box-black",
      classImage: "w-full h-full lg:h-[270px] object-cover rounded-xl brightness-75 group-hover:brightness-50 transition-all duration-200",
      info: true
    },
    {
      name: "Todos los Servicios Fainox",
      description: "",
      image: "helpers.webp",
      classDiv: "bg-gray-400 rounded-xl row-start-2 row-end-4 col-start-2 col-end-4",
      classImage: "w-full h-full object-cover rounded-xl",
      info: false
    },
    {
      name: "Automatizaci\xF3n & Control",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "automatizacion.webp",
      classDiv: "relative group rounded-xl bg-gray-400 row-start-3 col-start-1 row-span-2 hover:shadow-box-black",
      classImage: "w-full h-full object-cover rounded-xl brightness-75 group-hover:brightness-50 transition-all duration-200",
      info: true
    },
    {
      name: "Capacitaci\xF3n",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "capacitacion.webp",
      classDiv: "relative group rounded-xl bg-gray-400 row-start-4 col-start-2 col-end-4 hover:shadow-box-black",
      classImage: "w-full h-full lg:h-[270px] object-cover rounded-xl brightness-75 group-hover:brightness-50 transition-all duration-200",
      info: true
    },
    {
      name: "Montajes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "montajes.webp",
      classDiv: "relative group rounded-xl bg-gray-400 row-start-1 row-end-3 col-start-4 hover:shadow-box-black",
      classImage: "w-full h-full object-cover rounded-xl brightness-75 group-hover:brightness-50 transition-all duration-200",
      info: true
    },
    {
      name: "Soporte & Mantenimiento",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "soporte.webp",
      classDiv: "relative group rounded-xl bg-gray-400 row-start-3 row-end-5 hover:shadow-box-black",
      classImage: "w-full h-full object-cover rounded-xl brightness-75 group-hover:brightness-50 transition-all duration-200",
      info: true
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-center items-center gap-5 mb-20 mt-40"> <h1 class="text-colorBlue text-center px-5 md:px-0 text-3xl lg:text-5xl font-bold mb-10">Servicios y Soportes Fainox Group</h1> <div class="w-full p-2 lg:p-0 lg:w-[80%] h-[60vh] lg:h-[1000px] xl:h-[1100px] aspect-square lg:aspect-[18/14] grid grid-rows-4 grid-cols-4 gap-2 md:gap-10"> ${services.map(({ name, description, image, classDiv, classImage, info }) => renderTemplate`<div${addAttribute(`${classDiv}`, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": `/servicios/${image}`, "alt": `${name} - Fainox Group`, "class": classImage, "width": 200, "height": 400 })} ${info && renderTemplate`<div class="absolute bottom-3 left-[2px] md:left-2 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-3"> <h1 class="text-white sm:px-4 text-xs md:text-xl lg:text-2xl font-semibold">${name}</h1> <p class="text-white text-[10px] md:text-lg w-full h-5 group-hover:h-full transition-opacity duration-200
                ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-1"> ${description} </p> </div>`} </div>`)} </div> </section>`;
}, "/home/manurodriguez/fainox/src/components/about.astro", void 0);

const $$Fainox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-auto flex flex-col gap-40 mb-20 mt-20"> <div class="w-full h-auto flex flex-col-reverse md:flex-row mt-12 px-5 md:px-16 lg:px-32 justify-between items-center"> <div class="w-full lg:w-[60%] seeContent"> <h2 class="font-bold text-xl lg:text-2xl xl:text-5xl text-colorBlue mb-4 md:mb-10">
Quienes Somos
</h2> <p class="text-base text-balance lg:text-base xl:text-md whitespace-normal tracking-wide leading-7 md:leading-6 lg:leading-10"> <strong>FAINOX GROUP SAS</strong> empresa colombiana fundada en 2012, nace
        como producto de la fusión de dos grandes compañías con mas de 25 años de
        trayectoria en el suministro de: Equipos, Desarrollos, Componentes y Servicios
        para las industrias Alimentarias, Lácteas, de Bebidas y Farmacéuticas; La
        experiencia de sus socios fundadores, colaboradores y Aliados TECNICOS le
        han permitido en el transcurso de estos años aportar Soluciones con Tecnología
        de vanguardia a empresas nacionales y extranjeras en países como PANAMA,
        VENEZUELA, ECUADOR, PERU entre otros del continente Nuestra experiencia y
        conocimiento de los diferentes procesos de producción en nuestros sectores
        de interés; así como la de nuestros aliados y representados nos permiten
        ser un aliando confiable para el desarrollo y suministro de proyectos de
        implementación, innovación y desarrollo,asi mismo contamos con el conocimiento
        de las normativas exigibles en este tipo de plantas de proceso alimentario.
</p> </div> <div class="w-[60%] md:w-[30%] h-auto md:showImage"> <img class="w-full h-full object-cover rounded-round-image1" src="/images/quienes-somos.webp" alt="Fainox Group - Quienes Somos"> </div> </div> <div class="w-full h-auto flex flex-col md:flex-row justify-between items-center bg-custom-blue px-6 py-20 md:p-20"> <div class="w-[60%] md:w-[30%] h-auto showImage2"> <img class="w-full h-full object-cover rounded-round-image2" src="/images/quienes-somos.webp" alt="Fainox Group - Quienes Somos"> </div> <div class="w-full md:w-[60%] seeContent text-white"> <h2 class="font-bold text-xl lg:text-2xl xl:text-5xl text-white mb-4 md:mb-10">Que Proponemos</h2> <p class="text-base text-balance lg:text-base xl:text-md whitespace-normal tracking-wide leading-7 md:leading-6 lg:leading-10">
Nuestra propuesta consiste en aportar desde la experiencia alternativas
        y soluciones acordes a la necesidad y presupuesto de nuestros clientes
        teniendo en consideración valores como: La Calidad, Respaldo de Marca,
        Cumplimiento de Normatividad y Costo de beneficio. La política
        multimarca de <strong>FAINOX GROUP SAS</strong> nos permite actuar con libertad
        y sin condicionamientos de uno u otro interés, Mas que la búsqueda de una
        solución para nuestro cliente con mejores beneficios para nuestro usuario
        quienes son nuestra razón de ser Nuestro propósito es el de ser Altamente
        Éticos, Diligentes y Honestos con nuestros clientes y los requerimientos
        recibidos desde ellos procurando hallar la solución mas acorde a su nivel
        técnico y presupuestal.
</p> </div> </div> <div class="w-full h-auto flex flex-col-reverse md:flex-row md:mt-12 px-5 md:px-16 lg:px-32 justify-between items-center"> <div class="w-full lg:w-[60%] p-6 md:px-0 seeContent"> <h2 class="font-bold text-xl lg:text-2xl xl:text-5xl text-colorBlue mb-4 md:mb-10">
Como lo Hacemos
</h2> <p class="text-base xl:text-lg text-black font-bold whitespace-normal tracking-wide leading-7 md:leading-6 lg:leading-10 mb-6">
Nuestra amplia experiencia y la de nuestros aliados nos permite
        presentar diferentes formas de plantear nuestras propuestas
        técnicas-comerciales.
</p> <ul class="list-disc flex flex-col gap-3 text-md xl:text-base"> <li>
Desarrollo de equipos de fabricación nacional con altos estándares de
          calidad basados en nuestra experiencia adquirida al lado de grandes
          marcas
</li> <li>
Representamos Marcas extranjeras Fabricantes de Equipamientos de
          Proceso con altos estándares de calidad, tecnología de Punta y con el
          cumplimiento de Normativas internacionales para procesos de producción
          alimentaria como CE, A3, EHDG, FDA, CETIM entre otras.
</li> <li>
Suministramos líneas de proceso o producción completas integradas por
          Equipamientos desde nuestros Representados en el Exterior,
          Complementando con Desarrollos Locales propios, incluyendo Mano de
          Obra de Instalación en Situ con personal local, con garantías de Post
          venta, Repuestos y Asistencia desde nosotros como subsidiarios de la
          marca.
</li> <li>
Facilitamos la COMPRA-VENTA de Equipos de Proceso. Maquinaria,
          Depósitos. Etc en buen estado través de su publicación en nuestro
          sitio WEB ; colaborando así con la Rotación de Inventarios de nuestros
          clientes y la recuperación de un lucro secante
</li> </ul> </div> <div class="w-[60%] md:w-[30%] h-auto showImage"> <img class="w-full h-full object-cover rounded-round-image3" src="/images/quienes-somos.webp" alt="Fainox Group - Quienes Somos"> </div> </div> </section>`;
}, "/home/manurodriguez/fainox/src/components/fainox.astro", void 0);

function BannerLoop() {
  return /* @__PURE__ */ jsx("section", { className: "w-full h-[40vh] md:h-[80vh]", children: /* @__PURE__ */ jsx(
    Swiper,
    {
      slidesPerView: 1,
      spaceBetween: 4,
      loop: true,
      pagination: {
        clickable: true
      },
      autoplay: {
        delay: 8e3,
        disableOnInteraction: false
      },
      modules: [Pagination, Navigation, Autoplay],
      className: "mySwiper h-[100%]",
      children: sectores.map((sector) => /* @__PURE__ */ jsx(
        SwiperSlide,
        {
          className: `w-full h-full`,
          children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
            /* @__PURE__ */ jsx("img", { src: sector.image, alt: sector.title, className: "w-full h-full absolute brightness-50 z-0 top-0 left-0 object-cover" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "w-full h-full absolute z-10 flex flex-col justify-around p-4 md:p-20 text-white",
                href: sector.link,
                children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h2", { className: "text-xl md:text-4xl xl:text-5xl font-bold mb-2 md:mb-6", children: [
                    "Industria - ",
                    sector.title
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs md:text-lg lg:text-lg", children: sector.description }),
                  /* @__PURE__ */ jsx("ul", { className: "text-xs md:text-xl lg:text-base xl:text-lg p-3 md:p-10 flex flex-wrap justify-between items-center gap-2 md:gap-10 list-disc", children: sector.lines.map((line) => /* @__PURE__ */ jsx("li", { className: "font-semibold md:font-bold", children: line })) })
                ] })
              }
            )
          ] })
        },
        sector.title
      ))
    }
  ) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Fainox Group SAS" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerLoop", BannerLoop, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/BannerLoop", "client:component-export": "default" })} ${renderComponent($$result2, "Fainox", $$Fainox, {})} ${renderComponent($$result2, "About", $$About, {})}  ` })}`;
}, "/home/manurodriguez/fainox/src/pages/index.astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
