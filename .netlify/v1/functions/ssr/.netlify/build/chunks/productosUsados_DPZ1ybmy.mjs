import { jsxs, jsx } from 'react/jsx-runtime';
import { g as getCarProducts, c as cleanCarProduct } from './ButtonCotizacion_e3Bb1-fq.mjs';
import { useState } from 'react';

function FormContact({ pay }) {
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
    if (pay) {
      const fileImage = fields.image;
      if (fileImage instanceof File) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64 = e.target?.result;
          if (typeof base64 === "string") {
            const imageBase64 = base64.split(",")[1];
            const requestBody = {
              ...fields,
              image: imageBase64
              // Agrega la imagen en base64
            };
            try {
              const response = await fetch("/api/sendSellProducto", {
                method: "POST",
                body: JSON.stringify(requestBody),
                headers: { "Content-Type": "application/json" }
              });
              const result = await response.json();
              if (result.message === "Correo Enviado") {
                setControlSend(true);
                setName(`${fields.name} ${fields.lastname}`);
              }
            } catch (err) {
              console.error("Error en el envío del correo:", err);
            } finally {
              setLoanding(false);
            }
          }
        };
        reader.readAsDataURL(fileImage);
      } else {
        console.error("No se seleccionó un archivo de imagen válido.");
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
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-around items-center w-full h-72 rounded-xl bg-custom-blue-gradient shadow-box-black", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-white w-[80%] text-center font-medium text-2xl", children: [
        "Hola ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: name }),
        " pronto nuestro equipo se pondra en contacto contigo!"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-lg text-center", children: "Gracias por confiar en nostros y querer ser parte de la familia Fainox Group" }),
      /* @__PURE__ */ jsx("a", { className: "text-white bg-white/20 py-2 px-10 rounded-full hover:bg-white hover:text-colorBlue transition-all duration-300", href: "/industriasyservicios", children: "Te invitamos a ver todas nuestras industrias" })
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "form",
    {
      id: "form",
      onSubmit: handleSubmit,
      className: `w-full flex flex-col justify-center items-center gap-4 p-5 ${pay && "noseeForm"}`,
      children: [
        !pay && /* @__PURE__ */ jsx("h1", { className: "text-colorBlue text-3xl font-bold", children: "Estimado Cliente" }),
        pay ? /* @__PURE__ */ jsx("p", { className: "w-[60%] text-gray-500 text-center", children: "Con Fainox Group SAS, vender tus productos y maquinaria es fácil y seguro. Nos enfocamos en brindarte un proceso transparente y confiable, conectándote con los compradores adecuados. Confía en nuestra experiencia y deja que te ayudemos a obtener el mejor valor." }) : /* @__PURE__ */ jsx("p", { className: "text-md text-gray-500 pb-4 text-center", children: "Si requiere ampliar informacion sobre nuestros productos o tiene algun proyecto de desarrollo en el que necesite asesoria ..CONTACTENOS sin ningun COMPROMISO, Un asesor se comunicara con usted" }),
        pay && /* @__PURE__ */ jsx("p", { className: "text-colorBlue my-5", children: "Por favor llena el siguiente formulario para ponernos en contacto contigo, recuerda tener una foto de tu producto o maquinaria" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-xl font-bold", htmlFor: "input", children: "Nombre" }),
            /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Nombre", type: "text", name: "name", id: "name", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Apellido" }),
            /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Apellido", type: "text", name: "lastname", id: "lastname", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Correo Electronico" }),
            /* @__PURE__ */ jsx("input", { className: "p-2 w-[300px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Correo Electronico", type: "email", name: "email", id: "email", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Celular" }),
            /* @__PURE__ */ jsx("input", { className: "p-2 w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Numero de Celular", type: "phone", name: "phone", id: "phone", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Dirección" }),
          /* @__PURE__ */ jsx("input", { className: "p-2 w-[540px] border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Dirreción", type: "text", name: "address", id: "address", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Municipio" }),
            /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", type: "text", placeholder: "Municipio", name: "minucipio", id: "minucipio", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Ciudad" }),
            /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", type: "text", placeholder: "Ciudad", name: "city", id: "city", required: true })
          ] })
        ] }),
        pay && /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-xl font-bold", htmlFor: "input", children: "Equipo" }),
            /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", placeholder: "Nombre del Equipo", type: "text", name: "product", id: "product", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-700 text-lg font-bold", htmlFor: "input", children: "Imagen" }),
            /* @__PURE__ */ jsx("input", { className: "w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black", type: "file", accept: "image/*", name: "image", id: "image", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "relative group cursor-pointer mt-5 text-sky-50 overflow-hidden h-12 w-48 rounded-3xl shadow-box-black bg-sky-800 p-2 flex justify-center items-center font-extrabold", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600" }),
          loading ? /* @__PURE__ */ jsx("p", { className: "z-10 text-xl font-semibold sending" }) : /* @__PURE__ */ jsx("p", { className: "z-10 text-xl font-bold", children: pay ? "Enviar" : "Contactar" })
        ] })
      ]
    }
  );
}

const productosUsados = [
  {
    "name": "Tanques de Almacenamiento Usado",
    "industry": ["Lacteos y Derivados"],
    "subIndustry": "equipos para leche",
    "description": "Tanque de Almacenamiento de Suero,Tanque usado para la recolección y deposito de suero. Capacidad: 1.000, 25.000 Lts",
    "linea": "tanques",
    "images": ["https://www.stkmakina.com/resimler/6.jpg"]
  },
  {
    "name": "Sistemas de Bombeo Usado",
    "industry": ["Lacteos y Derivados"],
    "subIndustry": "equipos para leche",
    "description": "Bombas centrifugas, lobulares, Positivas, Cavidad Progresiva, Doble Tornillo y Sinusoidales",
    "linea": "sistemas de bombeo",
    "images": ["/products/34-485.webp"]
    // Falta esta imagen // 
  },
  {
    "name": "Equipos para recibo de leche Usado",
    "industry": ["Lacteos y Derivados"],
    "subIndustry": "equipos para leche",
    "description": "Sistema de caudalímetro electromagnético de 50 ton/h de capacidad, y con contador de 5 ton/h, sistema de plc con pantalla táctil en el idioma deseado, sistema operativo (fecha y hora código del camión, litros) bomba de hélice flexible para proteger el sensor de flujo de la leche en la espuma, el aire que separa el aire del eliminador de línea y el filtro de limpieza de leche.",
    "linea": "equipos para lecheria y devivados",
    "images": ["https://www.stkmakina.com/resimler/15.jpg"]
  },
  {
    "name": "Descremadoras - Bactofugadoras - Estandarizadoras Usado",
    "industry": ["Lacteos y Derivados"],
    "subIndustry": "equipos para leche",
    "description": "CLARIFICACIÓN Y SEPARADOR DE CREMA MANUAL Y AUTOMATICO Separador de clarificación: esta unidad permite la clarificación eficiente de células somáticas, coágulos de manchas, leucocitos, microorganismos, acumulaciones de proteínas y residuos, así como otros elementos contaminantes nocivos que no se pueden separar con una limpieza profunda. El objetivo principal de la limpieza de separadores es extraer materiales sólidos de la leche de manera eficiente y continua. Separador de crema: permite la separación de las moléculas de aceite en la leche. Esta unidad estandariza la cantidad de grasa en la leche. Los separadores de crema permiten la separación de la crema de leche sin problemas de manera continua y con alta eficiencia. Capacidad: 1000, 2000, 5000, 10000, 20000 L/h",
    "linea": "descremadoras",
    "images": ["https://www.stkmakina.com/resimler/15.jpg"]
  }
];

export { FormContact as F, productosUsados as p };
