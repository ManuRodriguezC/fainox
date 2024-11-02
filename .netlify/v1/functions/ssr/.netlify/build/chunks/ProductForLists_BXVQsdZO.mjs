import { jsxs, jsx } from 'react/jsx-runtime';
import { B as ButtonCotizacion } from './ButtonCotizacion_e3Bb1-fq.mjs';

function ProductForLists({ name, description, images }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `w-[350px] min-h-[600px] max-h-[600px] flex flex-col gap-4 mb-10 backgroundProduct px-4 rounded-md
                seeContent cursor-pointer border-2 hover:border-gray-400 hover:shadow-box-black transition-all duration-100`,
      children: [
        /* @__PURE__ */ jsx("a", { href: `/producto/${name}`, children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full h-[350px] rounded-md object-cover",
            src: images[0],
            alt: name
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-5 mb-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: `/producto/${name}`, className: "w-[220px] text-xl text-left font-bold text-colorBlue line-clamp-3", children: name }),
            /* @__PURE__ */ jsx(ButtonCotizacion, { name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-pretty line-clamp-6", children: description })
        ] })
      ]
    }
  );
}

export { ProductForLists as P };
