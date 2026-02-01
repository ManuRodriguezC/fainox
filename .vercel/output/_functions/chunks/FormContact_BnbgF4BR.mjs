import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { g as getCarProducts, c as cleanCarProduct } from './carCotizacion_KaEPngBT.mjs';
import { useState } from 'react';

function FormCotizacion() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-5 md:gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-xl font-bold", htmlFor: "input", children: "Nombre *" }),
        /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Nombre", type: "text", name: "name", id: "name", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Apellido *" }),
        /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Apellido", type: "text", name: "lastname", id: "lastname", required: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-5 md:gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Correo Electronico *" }),
        /* @__PURE__ */ jsx("input", { className: "p-2 w-[250px] md:w-[300px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Correo Electronico", type: "email", name: "email", id: "email", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Celular *" }),
        /* @__PURE__ */ jsx("input", { className: "p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Numero de Celular", type: "phone", name: "phone", id: "phone", required: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Dirección *" }),
      /* @__PURE__ */ jsx("input", { className: "p-2 w-[250px] md:w-[540px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Dirreción", type: "text", name: "address", id: "address", required: true })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col md:flex-row gap-5 md:gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: [
          "Empresas ",
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "- Opcional" })
        ] }),
        /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", type: "text", placeholder: "Empresa", name: "empresa", id: "empresa" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: [
          "Área ",
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "- Opcional" })
        ] }),
        /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", type: "text", placeholder: "Área", name: "area", id: "area" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col md:flex-row gap-5 md:gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Municipio *" }),
        /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", type: "text", placeholder: "Municipio", name: "minucipio", id: "minucipio", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Ciudad *" }),
        /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", type: "text", placeholder: "Ciudad", name: "city", id: "city", required: true })
      ] })
    ] })
  ] });
}

function FormWork() {
  return /* @__PURE__ */ jsx("div", { className: "max-w-3xl mt-5", children: /* @__PURE__ */ jsxs("div", { className: "\n        relative\n        bg-gradient-to-br from-blue-50 via-white to-blue-100\n        border border-blue-300\n        rounded-2xl\n        shadow-lg\n        p-8 md:p-10\n        flex flex-col gap-4\n      ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-xl font-bold", htmlFor: "input", children: "Nombre *" }),
        /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Nombre completo", type: "text", name: "name", id: "name", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Celular *" }),
        /* @__PURE__ */ jsx("input", { className: "p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Numero de Celular", type: "phone", name: "phone", id: "phone", required: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Correo Electronico *" }),
      /* @__PURE__ */ jsx("input", { className: "p-2 w-full border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Correo Electronico", type: "email", name: "email", id: "email", required: true })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Ciudad" }),
        /* @__PURE__ */ jsx("input", { className: "p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Ciudad", type: "text", name: "city", id: "city", required: true })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Pais" }),
        /* @__PURE__ */ jsx("input", { className: "p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Pais", type: "text", name: "country", id: "country", required: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Actividad" }),
      /* @__PURE__ */ jsx("input", { className: "p-2 w-full border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Actividad o sector", type: "text", name: "activity", id: "activity", required: true })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Comentarios" }),
      /* @__PURE__ */ jsx("textarea", { className: "p-2 w-full border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Cuéntenos brevemente su interés", name: "comments", id: "comments", rows: 4 })
    ] })
  ] }) });
}

function FormContact({ work }) {
  const [controlSend, setControlSend] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoanding] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoanding(true);
    const formData = new FormData(event.currentTarget);
    let fields = Object.fromEntries(formData.entries());
    const carProducts = getCarProducts();
    const setInfo = {
      ...fields,
      products: carProducts.join("+")
    };
    if (work) {
      try {
        const response = await fetch("/api/sendSellProducto", {
          method: "POST",
          body: JSON.stringify(setInfo),
          headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        if (result.message === "Correo Enviado") {
          setControlSend(true);
          setName(`${fields.name}`);
        }
      } catch (err) {
        console.error("Error en el envío del correo:", err);
      } finally {
        setLoanding(false);
      }
    } else {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          body: JSON.stringify(setInfo),
          headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        cleanCarProduct();
        if (result.message === "Correo Enviado") {
          setControlSend(true);
          setName(`${fields.name} ${fields.lastname}`);
          cleanCarProduct();
        }
      } catch (err) {
        console.error("Error en el envío del correo:", err);
      } finally {
        setLoanding(false);
      }
    }
  };
  if (controlSend) {
    return /* @__PURE__ */ jsxs("div", { id: "send", className: "w-full lg:w-[1024px] py-5 my-10 h-auto flex flex-col gap-6 justify-around items-center rounded-xl bg-custom-blue-gradient shadow-box-black", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-white w-[80%] text-center font-medium text-2xl", children: [
        "¡Hola ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: name }),
        " pronto nuestro equipo se pondrá en contacto contigo!"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-lg text-center", children: "Gracias por confiar en nosotros y querer ser parte de la familia Fainox Group" }),
      /* @__PURE__ */ jsx("a", { className: "text-white text-center bg-white/20 py-2 px-10 rounded-full hover:bg-white hover:text-colorBlue transition-all duration-300", href: "/desarrollosynovedades", children: "Te invitamos a ver nuestros desarrollos" })
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      id: "form",
      onSubmit: handleSubmit,
      className: `w-full flex flex-col md:mt-0 py-10 justify-center items-center gap-4 md:p-5 ${work ? "" : ""}`,
      children: [
        !work && /* @__PURE__ */ jsx("h1", { className: "text-colorBlue text-3xl font-bold", children: "Estimado Cliente" }),
        !work && /* @__PURE__ */ jsx("p", { className: "text-md text-gray-500 pb-4 text-center", children: "Si requiere ampliar información sobre nuestros productos o tiene algún proyecto de desarrollo en el que necesite asesoría ..CONTACTENOS sin ningún COMPROMISO, Un asesor se comunicara con usted" }),
        work && /* @__PURE__ */ jsx("p", { className: "w-auto md:w-[600px] text-colorBlue text-xl font-medium px-4 md:px-0 my-5 text-center", children: "Si está interesado en conocer más sobre este esquema de colaboración, contáctenos y con gusto le ampliaremos la información." }),
        !work ? /* @__PURE__ */ jsx(FormCotizacion, {}) : /* @__PURE__ */ jsx(FormWork, {}),
        /* @__PURE__ */ jsxs("button", { className: "relative group cursor-pointer mt-5 text-sky-50 overflow-hidden h-12 w-48 rounded-3xl shadow-box-black bg-sky-800 p-2 flex justify-center items-center font-extrabold", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600" }),
          loading ? /* @__PURE__ */ jsx("p", { className: "z-10 text-xl font-semibold sending" }) : /* @__PURE__ */ jsx("p", { className: "z-10 text-xl font-bold", children: work ? "Enviar" : "Contactar" })
        ] })
      ]
    }
  );
}

export { FormContact as F };
