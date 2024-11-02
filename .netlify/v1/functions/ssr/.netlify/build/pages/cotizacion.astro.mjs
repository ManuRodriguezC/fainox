/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_3ALDwHyc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$LayoutPage } from '../chunks/LayoutPage_CF1k_hnz.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { p as productosUsados, F as FormContact } from '../chunks/productosUsados_DPZ1ybmy.mjs';
import { g as getCarProducts, B as ButtonCotizacion } from '../chunks/ButtonCotizacion_e3Bb1-fq.mjs';
import { p as productos } from '../chunks/productos_D0Z_okRp.mjs';
export { renderers } from '../renderers.mjs';

function ListCotizacion() {
  const [listProducts, setListProducts] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    const productsToCar = getCarProducts();
    if (productsToCar) {
      const listProducts2 = productos.filter(({ name }) => productsToCar.includes(name));
      const listProductsUsed = productosUsados.filter(({ name }) => productsToCar.includes(name));
      setListProducts(listProducts2.concat(listProductsUsed));
    }
  }, [control]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[45%]", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-colorBlue text-2xl font-semibold", children: "Lista de Productos para Cotización" }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-500 font-semibold", children: [
        "Numero de Productos: ",
        listProducts.length
      ] })
    ] }),
    listProducts.length > 0 ? /* @__PURE__ */ jsxs("table", { className: "table-fixed bg-gray-200 mt-10 shadow-box-black", children: [
      /* @__PURE__ */ jsx("thead", { className: "text-xl text-colorBlue bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "border-y-[1px] border-l-[1px] text-center pr-10 border-white", children: "Producto" }),
        /* @__PURE__ */ jsx("th", { className: "border-y-[1px] border-gray-400" }),
        /* @__PURE__ */ jsx("th", { className: "border-y-[1px] border-r-[1px] border-white" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "overflow-auto", style: { maxHeight: "500px", display: "block" }, children: listProducts.map((product, index) => /* @__PURE__ */ jsxs(
        "tr",
        {
          className: `${index % 2 ? "bg-gray-100" : "bg-gray-200"} hover:bg-gray-300 transition-colors duration-200 w-full`,
          style: { display: "table", width: "100%", tableLayout: "fixed" },
          children: [
            /* @__PURE__ */ jsx("td", { className: "w-[60%] border-[1px] border-white px-5", children: /* @__PURE__ */ jsx("h3", { className: "text-colorBlue text-base font-semibold", children: product.name }) }),
            /* @__PURE__ */ jsx("td", { className: "border-b-[1px] border-white px-5 flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "w-24 h-24 object-cover", src: product.images[0], alt: product.name }) }),
            /* @__PURE__ */ jsx("td", { className: "w-[10%] border-[1px] border-white px-5", children: /* @__PURE__ */ jsx(ButtonCotizacion, { name: product.name, size: "S", control, setControl }) })
          ]
        },
        index
      )) })
    ] }) : /* @__PURE__ */ jsx("p", { children: "No hay productos en la cotización" })
  ] });
}

function Offices() {
  const offices = [
    {
      "name": "Oficina Principal 1",
      "place": "Zipaquira - Cundinamarca",
      "phone": "+57 3194834763",
      "address": "Calle 6 Sur # 24 - 57",
      "image": "/offices/office1.jpg"
    },
    {
      "name": "Oficina Principal 2",
      "place": "Bogotá",
      "phone": "+57 3005443781",
      "address": "Carrera 48 # 54 - 45",
      "image": "/offices/office2.jpg"
    },
    {
      "name": "Oficina Principal 3",
      "place": "Medellin - Antioquia",
      "phone": "+57 3124785612",
      "address": "Avenida Villavicencia # 45 -75 Local 45",
      "image": "/offices/office3.jpg"
    }
  ];
  const [currentOffice, setCurrentOffice] = useState(1);
  useEffect(() => {
    const updateImage = () => {
      setCurrentOffice((prevData) => (prevData + 1) % offices.length);
    };
    const interval = setInterval(updateImage, 5e3);
    return () => clearInterval(interval);
  }, [currentOffice]);
  return /* @__PURE__ */ jsx("section", { className: "w-full px-20 h-auto flex flex-col-reverse md:flex-row justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-row-reverse justify-around items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "h-auto w-[40%]", children: /* @__PURE__ */ jsx(FormContact, {}) }),
    /* @__PURE__ */ jsx(ListCotizacion, {})
  ] }) });
}

const $$Cotizacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Cotizacion y Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20"> ${renderComponent($$result2, "Offices", Offices, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/Ofices", "client:component-export": "default" })} </section> ` })}`;
}, "/home/manurodriguez/fainox/src/pages/cotizacion.astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/cotizacion.astro";
const $$url = "/cotizacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cotizacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
