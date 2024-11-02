export function getCarProducts() {
  const getList = localStorage.getItem("carProductsList");
  if (getList) {
    return JSON.parse(getList);
  } else {
    return [];
  }
}

export function addCarProduct(name: string) {
  let products = getCarProducts();
  if (products.includes(name)) {
    console.log("El producto ya existe en la lista.");
  } else {
    products.push(name);
    localStorage.setItem("carProductsList", JSON.stringify(products));
    console.log("Producto añadido:", name);
  }
}

export function removeCarProduct(name: string) {
  let products = getCarProducts();
  if (products.includes(name)) {
    products = products.filter((product: string) => product !== name);
    localStorage.setItem("carProductsList", JSON.stringify(products));
    console.log("Producto eliminado:", name);
  } else {
    console.log("El producto no existe en la lista.");
  }
}


export function cleanCarProduct() {
  localStorage.removeItem("carProductsList")
}