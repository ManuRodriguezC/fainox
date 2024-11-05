import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function getCarProducts() {
  const getList = localStorage.getItem("carProductsList");
  if (getList) {
    return JSON.parse(getList);
  } else {
    return [];
  }
}
function addCarProduct(name) {
  let products = getCarProducts();
  if (products.includes(name)) {
    console.log("El producto ya existe en la lista.");
  } else {
    products.push(name);
    localStorage.setItem("carProductsList", JSON.stringify(products));
    console.log("Producto añadido:", name);
  }
}
function removeCarProduct(name) {
  let products = getCarProducts();
  if (products.includes(name)) {
    products = products.filter((product) => product !== name);
    localStorage.setItem("carProductsList", JSON.stringify(products));
    console.log("Producto eliminado:", name);
  } else {
    console.log("El producto no existe en la lista.");
  }
}
function cleanCarProduct() {
  localStorage.removeItem("carProductsList");
}

function ButtonCotizacion({ name, size, control, setControl }) {
  const [exist, setExist] = useState(false);
  useEffect(() => {
    const products = getCarProducts();
    const findProduct = products.includes(name);
    setExist(findProduct);
  }, [name]);
  const handleClick = () => {
    addCarProduct(name);
    console.log("test");
    setExist(true);
  };
  const handleClickDelete = () => {
    removeCarProduct(name);
    setExist(false);
    if (control && setControl) setControl(!control);
  };
  if (size === "S") {
    return /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleClickDelete,
        className: "w-8 h-8 bg-transparent rounded-lg flex justify-center items-center text-red-700",
        children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-trash", children: [
          /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          /* @__PURE__ */ jsx("path", { d: "M4 7l16 0" }),
          /* @__PURE__ */ jsx("path", { d: "M10 11l0 6" }),
          /* @__PURE__ */ jsx("path", { d: "M14 11l0 6" }),
          /* @__PURE__ */ jsx("path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" }),
          /* @__PURE__ */ jsx("path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" })
        ] })
      }
    );
  }
  return exist ? /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClickDelete,
      className: "relative text-center flex justify-center bg-red-600 items-center text-white font-semibold\n      hover:text-white delay-300 h-10 px-8 py-2 rounded-md isolation-auto z-10 border-2 border-blue-800\n      before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full\n      before:hover:left-0 before:rounded-full before:bg-colorBlue before:-z-10 before:aspect-square before:hover:scale-150\n      overflow-hidden before:hover:duration-700",
      children: "Eliminar"
    }
  ) : /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "relative text-center flex justify-center items-center text-colorBlue font-semibold hover:text-white\n      delay-300 h-10 px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-blue-800 before:absolute\n      before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0\n      before:rounded-full before:bg-colorBlue before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden\n      before:hover:duration-700",
      children: "Cotizar"
    }
  );
}

export { ButtonCotizacion as B, cleanCarProduct as c, getCarProducts as g };
