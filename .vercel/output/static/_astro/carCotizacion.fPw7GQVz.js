function e(){const o=localStorage.getItem("carProductsList");return o?JSON.parse(o):[]}function s(o){let t=e();t.includes(o)?console.log("El producto ya existe en la lista."):(t.push(o),localStorage.setItem("carProductsList",JSON.stringify(t)),console.log("Producto añadido:",o))}function c(o){let t=e();t.includes(o)?(t=t.filter(r=>r!==o),localStorage.setItem("carProductsList",JSON.stringify(t)),console.log("Producto eliminado:",o)):console.log("El producto no existe en la lista.")}function l(){localStorage.removeItem("carProductsList")}export{s as a,l as c,e as g,c as r};
