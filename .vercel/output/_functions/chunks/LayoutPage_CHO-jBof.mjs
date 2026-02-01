import { c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, a as renderComponent, e as renderScript, b as createAstro, g as renderHead, h as renderSlot } from './astro/server_CRNezd4r.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const industrias = [
  {
    name: "Lacteos y Derivados",
    link: "lacteos-y-derivados",
    type: "link"
  },
  {
    name: "Frutas, Pulpas y Bebidas",
    link: "frutas-pulpas-y-bebidas",
    type: "link"
  },
  {
    name: "Conservas, Salsas y Aderezos",
    link: "conservas-salsas-y-aderezos",
    type: "link"
  },
  {
    name: "Alimentos Varios",
    link: "alimentos-varios",
    type: "link"
  },
  {
    name: "Industria Farmaceutica y Afines",
    link: "industria-farmaceutica-y-afines",
    type: "link"
  }
];
const sectores = [
  {
    title: "Lacteos y Derivados",
    description: "La industria láctea se enfrenta a un futuro lleno de oportunidades. Los avances globales y las nuevas tendencias brindan un enorme potencial para el sector y en FAINOX GROUP S.A.S, estamos preparados para ayudarte a aprovecharlo. Nuestra gama de equipos higiénicos innovadores está diseñada para optimizar los procesos lácteos, garantizando no solo la eficiencia en cada etapa de la producción, sino también las más altas condiciones de higiene y seguridad alimentaria.",
    link: "/nuestras-soluciones/lacteos-y-derivados",
    image: "/industrys/WhatsApp Image 2025-01-18 at 9.26.37 AM.jpeg",
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
    title: "Frutas, Pulpas y Bebidas",
    description: "Un sector de tan amplia cobertura y de tanto crecimiento requiere contar con procesos de producción eficientes en los que se aprovechen al máximo las materias primas y que estas conserven sus características naturales de cada producto. Esto solo es posible mediante procesamientos multifase seguros desde la extracción hasta el envasado de Bebidas, Pulpas u Otros en FAINOX GROUP garantizamos la inocuidad de los procesos mediante el desarrollo de equipos certificados .",
    link: "/nuestras-soluciones/frutas-pulpas-y-bebidas",
    image: "/industrys/WhatsApp Image 2025-01-18 at 9.24.24 AM.jpeg",
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
    description: "Nuestros Equipos, Módulos y Líneas de procesamiento integrales están diseñados para cubrir las necesidades de pequeños emprendimientos y grandes industrias del sector, las soluciones que FAINOX GROUP propone aseguran altos estándares sanitarios y el cumplimiento de normas nacionales e internacionales.",
    link: "/nuestras-soluciones/conservas-salsas-y-aderezos",
    image: "/industrys/aderesos.webp",
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
    description: "La Industria de alimentos está en constante transformación y enfrenta grandes retos día a día, como son las normativas propias de la inocuidad alimentaria y los cambios en los modelos productivos para logras las metas esperadas en FAINOX GROUP acompañamos  a las industrias en sus proyectos de trasformación o emprendimiento.",
    link: "/nuestras-soluciones/alimentos-varios",
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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const suministrosycomponentes = [
  {
    "name": "sistemas-de-bombeo",
    "list": {
      "description": "Contamos con una amplia experiencia en la selección de sistemas de Bombeo propios para las distintas fases del proceso desde:",
      "products": [
        {
          "name": "Bombas Industriales (No Sanitarias)",
          "industry": ["Lactea y de Derivados"],
          "product": ["lacteos-y-derivados"],
          "subIndustry": "equipos para leche",
          "description": "Bombas para el manejo de fluidos de servicios (Agua, Aceite, Combustibles, Ácidos, Químicos, Etc.)",
          "linea": "bombas",
          "images": ["/suministros/bombaIndustrial.webp"]
        },
        {
          "name": "Bombas Sanitarias Centrifugas Cerficadas",
          "industry": ["Lactea y de Derivados"],
          "product": ["lacteos-y-derivados"],
          "subIndustry": "equipos para leche",
          "description": "Bombas para manejo de productos líquidos alimentarios (Leche, Jugos, Bebidas, Etc. ) para sistemas de lavado CIP , Lazos de Agua Purificada , Etc.",
          "linea": "bombas",
          "images": ["/suministros/bombasSanitariasCentrifugas.webp"]
        },
        {
          "name": "Bombas Positivas para Viscosos",
          "industry": ["Lacteos y Derivados"],
          "product": ["lacteos-y-derivados"],
          "subIndustry": "equipos para yogurt",
          "description": "Bombas sanitarias, certificadas para aplicación y manejo de producto viscosos en proceso o terminado (Lobulares, Doble Tornillo, Sinusoidales). Materiales AISI 304 - 316.",
          "linea": "sistemas de bombeo",
          "images": ["/products/Bombas Positivas para Viscosos.webp"]
        }
      ]
    }
  },
  {
    "name": "valvulas-de-operacion",
    "list": {
      "description": "",
      "products": [
        {
          "name": "Manuales y Actuadas",
          "industry": [""],
          "product": [""],
          "subIndustry": "",
          "description": "Proveemos a la Industria Alimentaria de Válvulas de operación Manual y/o  con Actuador neumático de tipo Mariposa o Full Paso Certificadas bajo normativas EHDG, FDA - ASME BPE en materiales : AISI 316 - 304 en conexiones tipo CLAMP o SMS.",
          "linea": "valvulas",
          "images": ["/suministros/valvulaDeOperacion.webp"]
        }
      ]
    }
  },
  {
    "name": "valvulas-de-proceso",
    "list": {
      "description": "",
      "products": [
        {
          "name": "De Asiento Simple y Asiento Doble",
          "industry": [""],
          "product": [""],
          "subIndustry": "",
          "description": "Proveemos a la Industria Alimentaria de Válvulas de Proceso con Actuador neumático y operación eléctrica de 4-20V – Tipo 2/1 - 3/1  para conducción de fluidos Alimentarios y /o de Lavado CIP de DOS,TRES y hasta CUATRO VIAS con asiento simpe o barrera de vapor para procesos asépticos UHT bajo normativas EHDG, FDA – ASME BPE en materiales : AISI 316 en conexiones tipo CLAMP o SMS, Con Cabezal y Posicionadores led o sencillas ;Desarrollamos Manifold de Válvulas para Sistemas de Distribución en Planta.",
          "linea": "valvulas",
          "images": ["/suministros/valvulaDeProceso.webp"]
        }
      ]
    }
  }
];
const equiposdelavado = [
  {
    "name": "cabinas y tuneles de lavado",
    "data": {
      "imagenes": ["/suministros/cabinalavado1.webp", "/suministros/cabinalavado2.webp", "/suministros/cabinalavado3.webp"],
      "descripcion": "Desarrollamos, fabricamos y  comercializamos equipos para soluciones de lavado de Utensilios, Canastillas, Moldes, Prendas, Etc. Diseñamos de acuerdo al requerimiento del usuario, representamos marcas Europeas de última tecnología provistas con sistemas de ahorro en energía, agua y detergentes."
    }
  },
  {
    "name": "sistemas de lavado CIP",
    "data": {
      "imagenes": ["/suministros/sistemalavado1.webp", "/suministros/sistemalavado2.webp"],
      "descripcion": "FAINOX GROUP dispone de la experiencia en el desarrollo de soluciones para los diferentes procesos de lavado CIP, Nuestra área de ingeniería esta disponible para diseñar equipos de acuerdo a la necesidad del usuario, desde soluciones sencillas de uso movil hasta desarrollos automáticos fijos con estrictos controles y altos niveles de automatización."
    }
  }
];
const serviciosingenieria = [
  {
    "name": "consultoria y asistencia de proyectos",
    "image": "/images/que-proponemos.webp",
    "description": "En FAINOX GROUP su Emprendimiento, Mejoramiento de proceso, Ampliación de su capacidad productiva o una sencilla modificación en planta son de suma importancia. Contamos con una amplia trayectoria y experiencia en la implementación de procesos de producción, selección de equipos y mejoras productivas, nuestros mas de 12 años en el mercado y la experiencia de nuestro personal con mas de 30 años en el sector alimentario le garantizaran una Asesoría y Asistencia adecuada a su objetivo y presupuesto , basados en la aplicación de las normativas alimentarias vigentes."
  },
  {
    "name": "ingeniería conceptual, presupuestal y de detalle",
    "image": "/images/quienes-somos1.webp",
    "description": "Nuestro equipo técnico esta capacitado para el desarrollo de proyectos “llave en mano” partiendo de la concepción del propósito industrial mismo, hasta la entrega de la planta en producción Asistimos y Asesoramos a nuestros clientes en la presentación del proyecto a desarrollar y/o sustentación técnica ante el comité de inversión."
  },
  {
    "name": "montajes industriales",
    "image": "/servicios/montajes.webp",
    "description": "Nuestro Equipo técnico y humano esta calificado para realizar montajes de tipo Industrial como instalación de tuberías para Agua,Vapor,Aire, Etc. Siendo nuestra especialidad y con gran experiencia lo relacionado con montajes en Tubería Sanitaria Tipo AISI-304/316/BPE con purga de gas inerte STAWG y/o soldadura ORBITAL."
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const aliados = [
    "/alianz/stk.webp",
    "/alianz/logo.webp",
    "/alianz/Logo Konexa Packaging.webp",
    "/alianz/logo trepko.webp",
    "/alianz/Logo Milkman.webp",
    "/alianz/logo simon-freres.webp",
    "/alianz/logo velox.webp",
    "/alianz/logo watson.webp",
    "/alianz/inoxidables.webp"
  ];
  return renderTemplate(_a || (_a = __template(["", '<footer class="w-ful flex flex-col justify-center items-center py-10"> <div class="h-[1px] w-[90%] my-10 bg-blue-900"></div> <div class="flex flex-col justify-between items-center gap-4 px-5 md:px-20 w-full custom:flex-row"> <div class="marquee"> <ul class="marquee-content flex gap-5"> ', ' </ul> </div> <div class="w-full flex flex-col md:flex-row justify-around gap-4 md:gap-8 lg:gap-16"> <div class="flex flex-col gap-4"> <h2 class="font-bold text-colorBlue text-2xl">Industrias</h2> <div class="flex flex-col"> ', ' </div> </div> <div class="block md:hidden h-[1px] w-[90%] bg-blue-900"></div> <div class="flex flex-col gap-4"> <h2 class="font-bold text-colorBlue text-2xl">Servicios</h2> <div class="grid grid-cols-1 gap-x-10"> ', ` </div> </div> <div class="block md:hidden h-[1px] w-[90%] bg-blue-900"></div> <div class="flex flex-col gap-4"> <h2 class="font-bold text-colorBlue text-2xl">
Nosotros
</h2> <div class="flex flex-col"> <a href="/trabaje-con-nosotros" class="text-sm text-gray-400 font-semibold my-2 hover:text-gray-600 transition-all duration-200">Trabaje con nosotros</a> <a href="/desarrollosynovedades" class="text-sm text-gray-400 font-semibold my-2 hover:text-gray-600 transition-all duration-200">Desarrollos & Novedades</a> <a href="/contacto" class="text-sm text-gray-400 font-semibold my-2 hover:text-gray-600 transition-all duration-200">Contacto</a> <!-- <a href="/contacto/#tyc" class="text-sm text-gray-400 font-semibold my-2 hover:text-gray-600 transition-all duration-200">Terminos y Condiciones</a> --> </div> </div> </div> </div> <div class="h-[1px] w-[90%] my-10 bg-blue-900"></div> <div class="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 gap-4 w-full"> <p class="text-colorBlue text-sm md:text-base font-bold text-center">
\xA9 2025 Fainox Group SAS, Soluciones para mejores procesos.
</p> <!-- <p class="text-colorBlue text-sm">\xA9 By <a class="font-semibold" target="_blank" href="https://manurodriguezc.netlify.app/">ManuDev</a></p> --> <div class="flex flex-row items-center gap-6 px-10"> <!-- <a href="">
        <svg
          fill="#0C4AA6"
          width="40"
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="on su"
          ><path
            fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd"></path></svg
        >
      </a> --> <!-- <a href="">
        <svg
          fill="#0C4AA6"
          width="40"
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="on su"
          ><path
            fill-rule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clip-rule="evenodd"></path></svg
        >
      </a> --> </div> </div> </footer> <script type="module">
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i = 0; i < parseInt(marqueeElementsDisplayed); i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  });
<\/script>`])), maybeRenderHead(), aliados.map((ali) => renderTemplate`<li> <img class="max-h-[180px] w-auto"${addAttribute(500, "width")}${addAttribute(50, "height")}${addAttribute(ali, "src")}${addAttribute(ali, "alt")}> </li>`), sectores.map((sector) => renderTemplate`<a class="text-sm text-gray-400 hover:text-gray-600 transition-all duration-200 font-semibold my-2"${addAttribute(sector.link, "href")}> ${sector.title} </a>`), serviciosingenieria.map((sector) => renderTemplate`<a class="text-sm text-gray-400 hover:text-gray-600 font-semibold my-2  transition-all duration-200"${addAttribute(`/soluciones/servicios-de-ingenieria/${sector.name.toLowerCase().replaceAll(" ", "-")}`, "href")}> ${capitalize(sector.name)} </a>`));
}, "/home/manurodriguez/fainox/src/components/footer.astro", undefined);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#05234AFF" stroke="#05234AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-baseline-density-medium"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 20h16"></path><path d="M4 12h16"></path><path d="M4 4h16"></path></svg>`;
}, "/home/manurodriguez/fainox/src/icons/nav.astro", undefined);

const $$CloseNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#05234AFF" stroke="#05234AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`;
}, "/home/manurodriguez/fainox/src/icons/closeNav.astro", undefined);

const $$ArrowDown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 9l8 6l8 -6"></path></svg>`;
}, "/home/manurodriguez/fainox/src/icons/arrowDown.astro", undefined);

const productos = [
  "agitadores",
  "autoclaves",
  "cabina para lavado",
  "descremadoras",
  "empacadoras",
  "envasadoras",
  "equipos para lecheria y devivados",
  "equipos para procesar frutas",
  "equipos para procesar alimentos",
  "evaporadores",
  "esterilizadores",
  "formadoras de queso",
  "frezzers",
  "homogenizadores",
  "intercambiadores de calor",
  "intercambiadores de placas",
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
  "yogurteras",
  "usados",
  "valculas y filtros",
  "polivalentes",
  "hiladoras",
  "lineas en continuo",
  "coccionador"
];
const productosyservicios = [
  {
    "name": "Suministros y Componentes",
    "services": [
      {
        "name": "Sistemas de Bombeo",
        "products": [
          "Bombas Industriales",
          "Bombas Sanitarias Positivas - Certificadas",
          "Bombas Sanitarias Centrifugas - Certificadas"
        ]
      },
      {
        "name": "Valvulas de Operacion",
        "products": [
          "Manuales y Actuadas"
        ]
      },
      {
        "name": "Valvulas de Proceso",
        "products": [
          "De asiento simple - asiento doble"
        ]
      }
    ]
  },
  {
    "name": "Equipos y Sistemas de Lavado",
    "services": [
      {
        "name": "Cabinas y tuneles de Lavado"
      },
      {
        "name": "Sistemas de Lavado CIP"
      }
    ]
  },
  {
    "name": "Servicios de Ingenieria",
    "services": [
      {
        "name": "Consultoria y Asistencia de Proyectos"
      },
      {
        "name": "Ingeniería Conceptual, Presupuestal y de Detalle"
      },
      {
        "name": "Montajes Industriales"
      }
    ]
  }
];

const $$HoverLinkIndustrias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden group-hover:lg:block absolute top-12 -left-[150px] w-[400px] text-base border-2
    border-gray-300 rounded-lg p-2 bg-white font-medium shadow-box-black"> ${industrias.map(
    (industria) => {
      if (industria.type === "link") {
        return renderTemplate`<a${addAttribute(`/nuestras-soluciones/${industria.link}`, "href")} class="cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg"> <p>${industria.name}</p> </a>`;
      } else {
        return renderTemplate`<details> <summary class="cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg">${industria.name}</summary> <ul> <li> <a class="before:w-2 before:h-2 before:bg-colorBlue before:rounded-full cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg" href="#">Automatizacion</a> </li> <li> <a class="before:w-2 before:h-2 before:bg-colorBlue before:rounded-full cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg" href="#">Proyectos</a> </li> <li> <a class="before:w-2 before:h-2 before:bg-colorBlue before:rounded-full cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg" href="#">Servicios</a> </li> <li> <a class="before:w-2 before:h-2 before:bg-colorBlue before:rounded-full cursor-pointer flex flex-row items-center gap-6 my-2 px-6 py-2 hover:bg-gray-100 rounded-lg" href="#">Productos</a> </li> </ul> </details>`;
      }
    }
  )} ${productosyservicios.map((producto, index) => renderTemplate`<div${addAttribute(`nav-${index}`, "id")}> <div class="flex flex-row justify-between pr-10 items-center decoration-slice hover:bg-gray-100 px-6 py-2 mt-2 rounded-lg cursor-pointer"> <p>${capitalize(producto.name)}</p> <div${addAttribute(`row-down-${index}`, "id")} class="transition-all duration-300"> ${renderComponent($$result, "ArrowDown", $$ArrowDown, {})} </div> </div> <ul${addAttribute(`list-${index}`, "id")} class="hidden bg-gray-100 flex-col list-disc px-10 py-5"> ${producto.services.map((service) => renderTemplate`<a${addAttribute(`/soluciones/${producto.name.toLowerCase().replaceAll(" ", "-")}/${service.name.toLowerCase().replaceAll(" ", "-")}`, "href")}> <li class="p-1 px-4 hover:bg-white rounded-xl cursor-pointer"> ${service.name} </li> </a>`)} </ul> </div>`)} </div> ${renderScript($$result, "/home/manurodriguez/fainox/src/components/hoverLinkIndustrias.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/manurodriguez/fainox/src/components/hoverLinkIndustrias.astro", undefined);

const $$HoverLinkProductos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden group-hover:lg:flex absolute flex-col gap-1 w-[500px] h-auto border-gray-300 rounded-lg
     bg-white font-medium shadow-box-black text-base py-4"> ${productosyservicios.map((producto, index) => renderTemplate`<div${addAttribute(`nav-${index}`, "id")}> <div class="flex flex-row justify-between pr-10 items-center decoration-slice hover:bg-gray-100 p-2 mx-3 rounded-xl cursor-pointer"> <p>${capitalize(producto.name)}</p> <div${addAttribute(`row-down-${index}`, "id")} class="transition-all duration-300"> ${renderComponent($$result, "ArrowDown", $$ArrowDown, {})} </div> </div> <ul${addAttribute(`list-${index}`, "id")} class="hidden bg-gray-100 flex-col list-disc px-10 py-5"> ${producto.services.map((service) => renderTemplate`<a${addAttribute(`/soluciones/${producto.name.toLowerCase().replaceAll(" ", "-")}/${service.name.toLowerCase().replaceAll(" ", "-")}`, "href")}> <li class="p-1 px-4 hover:bg-white rounded-xl cursor-pointer"> ${service.name} </li> </a>`)} </ul> </div>`)} </div> ${renderScript($$result, "/home/manurodriguez/fainox/src/components/hoverLinkProductos.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/manurodriguez/fainox/src/components/hoverLinkProductos.astro", undefined);

const $$Astro$2 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Link;
  const { link, name, typeLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="group relative"> ${typeLink ? renderTemplate`<a${addAttribute(`/${link}`, "href")} class="flex flex-row justify-center gap-2 items-center text-sm lg:text-base hover:text-blue-600
      text-colorBlue font-bold py-0 my-8 md:my-0 md:py-4 transition-all duration-200"${addAttribute(link, "aria-keyshortcuts")}> <p class="text-center"> ${name} </p> ${link === "nuestras-soluciones" && renderTemplate`<div class="transition-all duration-300 group-hover:rotate-180"> ${renderComponent($$result, "ArrowDown", $$ArrowDown, {})} </div>`} </a>` : renderTemplate`<button class="flex flex-row justify-center gap-2 items-center text-sm lg:text-base hover:text-blue-600
      text-colorBlue font-bold py-0 my-8 md:my-0 md:py-4 transition-all duration-200"${addAttribute(link, "aria-keyshortcuts")}> <p class="text-center"> ${name} </p> ${link === "nuestras-soluciones" && renderTemplate`<div class="transition-all duration-300 group-hover:rotate-180"> ${renderComponent($$result, "ArrowDown", $$ArrowDown, {})} </div>`} </button>`} ${link === "nuestras-soluciones" && renderTemplate`${renderComponent($$result, "HoverLinkIndustrias", $$HoverLinkIndustrias, {})}`} ${link === "productos-servicios" && renderTemplate`${renderComponent($$result, "HoverLinkProductos", $$HoverLinkProductos, {})}`} </li>`;
}, "/home/manurodriguez/fainox/src/components/link.astro", undefined);

const $$NavMovil = createComponent(($$result, $$props, $$slots) => {
  const styleLink = "cursor-pointer bg-white hover:border-[1px] transition-all duration-200 border-blue-200 hover:bg-slate-200 text-xl text-colorBlue font-semibold rounded-lg";
  return renderTemplate`${maybeRenderHead()}<ul class="mt-16 flex flex-col m-2 gap-5"> <li${addAttribute(styleLink, "class")}> <a class="block w-full px-5 py-2" href="/">
Nosotros
</a> </li> <li${addAttribute(styleLink, "class")}> <button id="button-list" class="flex w-full flex-row px-5 py-2 justify-between items-center">
Nuestras Soluciones
${renderComponent($$result, "ArrowDown", $$ArrowDown, {})} </button> <ul class="hidden flex-col gap-2 transition-all duration-300" id="list-service"> ${industrias.map((industria) => renderTemplate`<li${addAttribute(`${styleLink} px-6`, "class")}> <a class="block w-full px-2 py-2"${addAttribute(`/nuestras-soluciones/${industria.link}`, "href")}>
- ${industria.name} </a> </li>`)} ${productosyservicios.map((producto, indexx) => renderTemplate`<li${addAttribute(`${styleLink} `, "class")}> <button${addAttribute(`nav-movil-${indexx}`, "id")} class="flex w-full flex-row px-8 py-2 text-lg justify-between items-center">
- ${producto.name} ${renderComponent($$result, "ArrowDown", $$ArrowDown, {})} </button> <ul${addAttribute(`list-movil-${indexx}`, "id")} class="hidden flex-col gap-2 list-disc mx-10 text-base px-6"> ${producto.services.map((service) => renderTemplate`<li> <a class="block w-full bg-colorBlue text-white rounded-md px-5 py-2"${addAttribute(`/soluciones/${producto.name.toLowerCase().replaceAll(" ", "-")}/${service.name.toLowerCase().replaceAll(" ", "-")}`, "href")}> ${service.name} </a> </li>`)} </ul> </li>`)} </ul> </li> <li${addAttribute(styleLink, "class")}> <a class="block w-full px-5 py-2" href="/servicios-industriales">
Servicios Industriales
</a> </li> <li${addAttribute(styleLink, "class")}> <a class="block w-full px-5 py-2" href="/trabaje-con-nosotros">
Trabaje con Nosotros
</a> </li> <li${addAttribute(styleLink, "class")}> <a class="block w-full px-5 py-2" href="/desarrollosynovedades">
Desarrollos & Novedades
</a> </li> <li${addAttribute(styleLink, "class")}> <a class="block w-full px-5 py-2" href="/contacto">
Contacto
</a> </li> <li${addAttribute(styleLink, "class")}> <a class="block w-full px-5 py-2" href="/cotizacion">
Cotización
</a> </li> </ul> ${renderScript($$result, "/home/manurodriguez/fainox/src/components/navMovil.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/manurodriguez/fainox/src/components/navMovil.astro", undefined);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const links = [
    {
      name: "Nosotros",
      link: "",
      typeLink: true
    },
    {
      name: "Nuestras Soluciones",
      link: "nuestras-soluciones",
      typeLink: true
    },
    {
      name: "Servicios Industriales",
      link: "servicios-industriales",
      typeLink: true
    },
    {
      name: "Trabaje con Nosotros",
      link: "trabaje-con-nosotros",
      typeLink: true
    },
    {
      name: "Desarrollos & Novedades",
      link: "desarrollosynovedades",
      typeLink: true
    },
    {
      name: "Contacto",
      link: "contacto",
      typeLink: true
    },
    {
      name: "Cotizaci\xF3n",
      link: "cotizacion",
      typeLink: true
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 bg-white z-50 w-[98%] md:w-full flex flex-row justify-between items-center px-0 md:px-10 pt-3 transition-all duration-150"> <a href="/"> <img id="header-image" class="h-14 xl:h-16 transition-all duration-150" src="/images/logo.png" alt="Icono Fainox"> </a> <nav class="hidden lg:block"> <ul class="flex flex-row gap-3 lg:gap-4 xl:gap-8"> ${links.map((link) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "link": link.link, "name": link.name, "typeLink": link.typeLink })}`)} </ul> </nav>  <button id="open-nav" class="fixed top-6 right-4 lg:hidden pr-2"> ${renderComponent($$result, "Nav", $$Nav, {})} </button> <nav id="phone-nav" class="fixed w-[320px] transform translate-x-full transition-transform duration-300 h-screen bg-gray-100 right-0 top-0"> <button id="close-nav" class="fixed right-4 top-4"> ${renderComponent($$result, "CloseNav", $$CloseNav, {})} </button> ${renderComponent($$result, "NavMovil", $$NavMovil, {})} </nav> </header> ${renderScript($$result, "/home/manurodriguez/fainox/src/components/navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/manurodriguez/fainox/src/components/navbar.astro", undefined);

const $$WhatsappButton = createComponent(($$result, $$props, $$slots) => {
  const messageWhatsApp = "Gracias%20por%20comunicarte%20con%20FAINOX%20GROUP%20SAS.%20\xBFC\xF3mo%20podemos%20ayudarte?";
  return renderTemplate`${maybeRenderHead()}<a class="z-100"${addAttribute(`https://api.whatsapp.com/send?phone=573223369750&text=${messageWhatsApp}`, "href")} target="_blank" rel="noopener noreferrer"> <svg class="fixed bottom-5 right-5 cursor-pointer hover:scale-110 transition-all duration-300" viewBox="0 0 256 259" width="60" height="60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"></path><path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"></path></svg> </a>`;
}, "/home/manurodriguez/fainox/src/components/whatsappButton.astro", undefined);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Fainox Group SAS, empresa colombiana con más de 25 años de experiencia en el suministro de equipos, componentes y servicios para las industrias alimentarias, lácteas, de bebidas entre otras. Proveemos soluciones tecnológicas de vanguardia y cumplimiento normativo en América Latina."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/jpg+xml" href="/images/icono.jpg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:title" content="Fainox Group - Expertos en Soluciones Industriales para Alimentación y Lácteos"><meta property="og:description" content="Más de 25 años ofreciendo equipos, desarrollos y servicios para industrias alimentarias, lácteas y farmacéuticas en América Latina."><meta property="og:image" content="/images/icono.jpg"><meta property="og:url" content="https://www.fainoxgroup.com"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Fainox Group - Expertos en Soluciones Industriales"><meta name="twitter:description" content="Proveemos equipos y servicios innovadores para industrias alimentarias, lácteas y más. Experiencia y tecnología para cumplir normativas internacionales."><meta name="twitter:image" content="/images/icono.jpg"><meta http-equiv="Content-Language" content="es"><meta name="keywords" content="Fainox Group, soluciones industriales, industria alimentaria, industria láctea, industria farmacéutica, tecnología de vanguardia, normativas alimentarias, equipos industriales, servicios industriales"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/manurodriguez/fainox/src/layouts/Layout.astro", undefined);

const $$Astro = createAstro();
const $$LayoutPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutPage;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<div class="w-full h-auto mt-20 xl:mt-20"> ${renderSlot($$result2, $$slots["default"])} </div> ${renderComponent($$result2, "WhatsappButton", $$WhatsappButton, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/manurodriguez/fainox/src/layouts/LayoutPage.astro", undefined);

export { $$LayoutPage as $, serviciosingenieria as a, productosyservicios as b, capitalize as c, sectores as d, equiposdelavado as e, industrias as i, productos as p, suministrosycomponentes as s };
