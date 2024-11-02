/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_3ALDwHyc.mjs';
import 'kleur/colors';
import 'html-escaper';
import { c as capitalize, i as industrias, $ as $$LayoutPage } from '../../chunks/LayoutPage_CF1k_hnz.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { P as ProductForLists } from '../../chunks/ProductForLists_BXVQsdZO.mjs';
import { s as subIndustrys } from '../../chunks/subIndustrys__G041kmi.mjs';
import { p as productos } from '../../chunks/productos_D0Z_okRp.mjs';
export { renderers } from '../../renderers.mjs';

function SubNav({ indus, setFilter, filter }) {
  return /* @__PURE__ */ jsx("nav", { className: "w-full h-auto mt-10", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-row bg-colorBlue rounded-lg pt-2 justify-center items-center gap-6", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "button",
      {
        className: `text-xl px-5 pb-2 pt-1 transition-all duration-150 ${filter === "" ? "bg-white text-black rounded-higt" : "text-white font-semibold"}`,
        onClick: () => setFilter(""),
        children: "Todos"
      }
    ) }),
    subIndustrys[indus].map((sub) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "button",
        {
          className: `text-xl px-5 pb-2 pt-1 transition-all duration-150
                                        ${filter === sub.name ? "bg-white text-black rounded-higt" : "text-white font-semibold hover:backdrop-contrast-75 rounded-higt"}`,
          onClick: () => setFilter(sub.name),
          children: capitalize(sub.name)
        }
      ) });
    })
  ] }) });
}

function FilterListProduct({ industry, filterProducts }) {
  const [filter, setFilter] = useState("");
  const filteredList = useMemo(() => {
    return filter === "" ? filterProducts : filterProducts.filter((product) => product.subIndustry === filter);
  }, [filter, filterProducts]);
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx(SubNav, { indus: industry, setFilter, filter }),
    /* @__PURE__ */ jsxs("p", { className: "text-right mr-10 mt-5 text-lg text-gray-600", children: [
      "Productos encontrados: ",
      filteredList.length
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-auto flex flex-row justify-center gap-5 m-5", children: subIndustrys[industry].some((indus) => filter === "" || indus.name === filter) ? subIndustrys[industry].map((indus, index) => {
      if (filter === "" || indus.name === filter) {
        return /* @__PURE__ */ jsx(
          "img",
          {
            className: "h-44 w-72 object-cover rounded-md shadow-box-black hover:scale-110\n                                    transition-all duration-200 brightness-75 hover:brightness-100",
            src: indus.image,
            alt: indus.name
          },
          index
        );
      }
      return null;
    }) : /* @__PURE__ */ jsx("p", { children: "No se encontraron subindustrias para el filtro aplicado." }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-6 justify-center items-center p-10", children: filteredList.map((product) => /* @__PURE__ */ jsx(ProductForLists, { ...product })) })
  ] });
}

const $$Astro = createAstro();
function getStaticPaths() {
  return industrias.map((industria) => ({
    params: { industry: industria.name }
  }));
}
const $$industry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$industry;
  const { industry } = Astro2.params;
  const filterProducts = productos.filter((product) => product.industry.includes(industry));
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "title": `Sector ${industry} - Fainox Group` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col w-full h-auto px-10"> <h1 class="text-center text-colorBlue text-5xl font-bold">Industria - ${industry}</h1> ${renderComponent($$result2, "FilterListProduct", FilterListProduct, { "industry": industry, "filterProducts": filterProducts, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/manurodriguez/fainox/src/components/tsx/FilterListProduct", "client:component-export": "default" })} </section> ` })}`;
}, "/home/manurodriguez/fainox/src/pages/industriasyservicios/[industry].astro", void 0);

const $$file = "/home/manurodriguez/fainox/src/pages/industriasyservicios/[industry].astro";
const $$url = "/industriasyservicios/[industry]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$industry,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
