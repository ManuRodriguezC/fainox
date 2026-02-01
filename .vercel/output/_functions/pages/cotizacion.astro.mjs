/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CRNezd4r.mjs';
import 'kleur/colors';
import { s as suministrosycomponentes, e as equiposdelavado, $ as $$LayoutPage } from '../chunks/LayoutPage_CHO-jBof.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { F as FormContact } from '../chunks/FormContact_BnbgF4BR.mjs';
import { useState, useEffect } from 'react';
import { g as getCarProducts } from '../chunks/carCotizacion_KaEPngBT.mjs';
import { p as productos, B as ButtonCotizacion } from '../chunks/ButtonCotizacion_B6GcoD7x.mjs';
import { p as productosUsados } from '../chunks/productosUsados_BvbsKqhj.mjs';
export { renderers } from '../renderers.mjs';

function ListCotizacion() {
  const [listProducts, setListProducts] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    const productsToCar = getCarProducts();
    if (productsToCar) {
      const listProducts2 = productos.filter(({ name }) => productsToCar.includes(name));
      const listProductsUsed = productosUsados.filter(({ name }) => productsToCar.includes(name));
      const listSuministros = suministrosycomponentes.flatMap((prod) => prod.list.products).filter(({ name }) => productsToCar.includes(name));
      const listEquipos = equiposdelavado.filter((prod) => productsToCar.includes(prod.name));
      const setListEquipos = listEquipos.map((equip) => {
        return {
          name: equip.name,
          images: [equip.data.imagenes[0]]
        };
      });
      const conbinetList = [
        ...listProducts2,
        ...listProductsUsed,
        ...listSuministros,
        ...setListEquipos
      ];
      setListProducts(conbinetList);
    }
  }, [control]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full xl:w-[45%]", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col md:flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-colorBlue text-center text-xl font-semibold", children: "Lista de Productos para Cotización" }),
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
            /* @__PURE__ */ jsx("td", { className: "w-[50%] md:w-[60%] border-[1px] border-white px-5", children: /* @__PURE__ */ jsx("h3", { className: "text-colorBlue text-base font-semibold", children: product.name }) }),
            /* @__PURE__ */ jsx("td", { className: "border-b-[1px] border-white px-5 flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "w-auto h-24 object-cover", src: product.images[0], alt: product.name }) }),
            /* @__PURE__ */ jsx("td", { className: "w-[20%] md:w-[10%] border-[1px] border-white px-3 md:px-5", children: /* @__PURE__ */ jsx(ButtonCotizacion, { name: product.name, size: "S", control, setControl }) })
          ]
        },
        index
      )) })
    ] }) : /* @__PURE__ */ jsx("p", { className: "text-center p-10 text-colorBlue text-lg", children: "No hay productos en la cotización" })
  ] });
}

function Offices() {
  return /* @__PURE__ */ jsx("section", { className: "w-full px-5 md:px-20 h-auto flex flex-col justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col xl:flex-row justify-around items-center", children: [
    /* @__PURE__ */ jsx(ListCotizacion, {}),
    /* @__PURE__ */ jsx("div", { className: `h-auto w-full flex justify-center items-center xl:w-[40%]`, children: /* @__PURE__ */ jsx(FormContact, { work: false }) })
  ] }) });
}

const $$Cotizacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": "Cotizacion y Contacto" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20"> ${renderComponent($$result2, "Offices", Offices, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/Ofices", "client:component-export": "default" })} </section> ` })}`;
}, "/home/manurodriguez/fainox/src/pages/cotizacion.astro", undefined);

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
