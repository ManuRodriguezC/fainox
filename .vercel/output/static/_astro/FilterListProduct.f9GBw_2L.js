import{j as e}from"./jsx-runtime.CRkqtJS5.js";import{r as l}from"./index.B52nOzfP.js";import m from"./ProductForLists.CciN5Gd8.js";import"./ButtonCotizacion.BNH-3Oz4.js";import"./carCotizacion.fPw7GQVz.js";function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}const n={"Lacteos y Derivados":[{name:"equipos para leche",image:"/industrys/leche.webp"},{name:"equipos para yogurt",image:"/industrys/yogurt.webp"},{name:"equipos para quesos",image:"/industrys/quesos.webp"},{name:"lineas de mantequilla",image:"/industrys/mantequilla.webp"},{name:"derivados varios",image:"/industrys/derivados.webp"}],"Frutas, Pulpa y Jugos":[{name:"equipos para pulpas",image:"/industrys/pulpas.webp"},{name:"equipos para jugos y bebidas",image:"/industrys/jugos.webp"}],"Conservas, Salsas y Aderezos":[{name:"equipos para conservas",image:"/industrys/conservas.webp"},{name:"equipos para salsas y aderezos",image:"/industrys/aderesos.webp"}],"Alimentos Varios":[{name:"aceites y margarinas",image:"/industrys/aceite.webp"},{name:"harinas y cereales",image:"/industrys/cereales.webp"},{name:"cárnicos y embutidos",image:"/industrys/carnes.webp"}]};function p({indus:t,setFilter:r,filter:s}){return e.jsx("nav",{className:"w-full h-auto mt-10",children:e.jsxs("ul",{className:"flex flex-row bg-colorBlue rounded-lg pt-2 justify-center items-center gap-6",children:[e.jsx("li",{children:e.jsx("button",{className:`text-xl px-5 pb-2 pt-1 transition-all duration-150 ${s===""?"bg-white text-black rounded-higt":"text-white font-semibold"}`,onClick:()=>r(""),children:"Todos"})}),n[t].map(i=>e.jsx("li",{children:e.jsx("button",{className:`text-xl px-5 pb-2 pt-1 transition-all duration-150
                                        ${s===i.name?"bg-white text-black rounded-higt":"text-white font-semibold hover:backdrop-contrast-75 rounded-higt"}`,onClick:()=>r(i.name),children:c(i.name)})}))]})})}function y({industry:t,filterProducts:r}){const[s,i]=l.useState(""),o=l.useMemo(()=>s===""?r:r.filter(a=>a.subIndustry===s),[s,r]);return e.jsxs("div",{className:"w-full",children:[e.jsx(p,{indus:t,setFilter:i,filter:s}),e.jsxs("p",{className:"text-right mr-10 mt-5 text-lg text-gray-600",children:["Productos encontrados: ",o.length]}),e.jsx("div",{className:"w-full h-auto flex flex-row justify-center gap-5 m-5",children:n[t].some(a=>s===""||a.name===s)?n[t].map((a,u)=>s===""||a.name===s?e.jsx("img",{className:`h-44 w-72 object-cover rounded-md shadow-box-black hover:scale-110
                                    transition-all duration-200 brightness-75 hover:brightness-100`,src:a.image,alt:a.name},u):null):e.jsx("p",{children:"No se encontraron subindustrias para el filtro aplicado."})}),e.jsx("div",{className:"flex flex-wrap gap-6 justify-center items-center p-10",children:o.map(a=>e.jsx(m,{...a}))})]})}export{y as default};